// services/prescription.service.js
import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import Prescription from "../models/Prescription.js";
import Medicine from "../models/medicine.js";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

function encodeImage(imagePath) {
  const buffer = fs.readFileSync(imagePath);
  return buffer.toString("base64");
}

async function extractMedicines(imagePath) {
  try {
    const base64Image = encodeImage(imagePath);

    const prompt = `
Return ONLY JSON. No explanations. No markdown.

Extract ONLY medicine names from this prescription image.
Remove duplicates and dosages.

Format:
{
  "medicines": ["Panadol", "Amoxicillin"]
}
`;

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                data: base64Image,
                mimeType: "image/jpeg",
              },
            },
          ],
        },
      ],
      generationConfig: { responseMimeType: "application/json" },
    });

    const text =
      response.text || response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) return [];

    // Clean Gemini output
    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    const parsed = JSON.parse(cleanText);

    return parsed.medicines || [];
  } catch (error) {
    console.error("Gemini OCR error:", error.message);
    return [];
  }
}

export async function createPrescription({
  userId,
  imagePath,
  deliveryAddress,
}) {
  // Step 1: Extract medicine names from image
  const extractedNamesFromOCR = await extractMedicines(imagePath);

  // Step 2: Find matching Medicine documents in DB
  const matchedMedicines = await Medicine.find({
    name: { $in: extractedNamesFromOCR.map((n) => new RegExp(`^${n}$`, "i")) },
  });

  // Step 3: Separate available & unavailable medicines
  const availableMedicines = [];
  const unavailableMedicines = [];

  for (const name of extractedNamesFromOCR) {
    const med = matchedMedicines.find(
      (m) => m.name.toLowerCase() === name.toLowerCase(),
    );

    if (med && med.stock > 0) {
      availableMedicines.push(med);
    } else {
      unavailableMedicines.push(name);
    }
  }

  // Step 4: Create prescription
  const prescription = await Prescription.create({
    user: userId,
    imageUrl: `/uploads/${path.basename(imagePath)}`,
    extractedNames: matchedMedicines.map((m) => m._id),
    availableMedicines: availableMedicines.map((m) => m._id),
    unavailableMedicines,
    deliveryAddress,
  });

  // Step 5: Populate medicines for response
  const populatedPrescription = await Prescription.findById(prescription._id)
    .populate("extractedNames", "name")
    .populate("availableMedicines", "name price stock category")
    .populate("user", "name email");

  const formattedAvailable = matchedMedicines
    .filter((m) => m.stock > 0)
    .map((m) => ({
      id: m._id,
      name: m.name,
      price: m.price,
      category: m.category,
      stock: m.stock,
    }));

  return {
    prescription: populatedPrescription,
    availableMedicines: formattedAvailable,
    unavailableMedicines,
  };
}

// Optional: Fetch prescription by ID with populated medicines
export async function getPrescriptionById(id) {
  return Prescription.findById(id)
    .populate("extractedNames", "name")
    .populate("availableMedicines", "name price stock category")
    .populate("user", "name email");
}

// Fetch all prescriptions
export async function getAllPrescriptions() {
  return Prescription.find()
    .populate("extractedNames", "name")
    .populate("availableMedicines", "name price stock category")
    .populate("user", "name email");
}

// Review prescription
export async function reviewPrescriptionService({
  prescriptionId,
  status,
  rejectionReason,
}) {
  const prescription = await Prescription.findById(prescriptionId);

  if (!prescription) throw new Error("Prescription not found");
  if (!["APPROVED", "REJECTED"].includes(status))
    throw new Error("Invalid status value");
  if (status === "REJECTED" && !rejectionReason)
    throw new Error("Rejection reason is required");

  prescription.status = status;
  prescription.rejectionReason = status === "REJECTED" ? rejectionReason : null;

  await prescription.save();

  return prescription;
}
