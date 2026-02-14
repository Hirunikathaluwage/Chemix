// controllers/prescription.controller.js
import {
  createPrescription,
  getPrescriptionById,
  getAllPrescriptions,
  reviewPrescriptionService,
} from "../services/prescription.service.js";
import Prescription from "../models/Prescription.js";

export const uploadPrescription = async (req, res) => {
  try {
    console.log("Body", req.body);
    console.log("FILE", req.file);

    if (!req.file)
      return res
        .status(400)
        .json({ success: false, message: "No image uploaded" });
    const { deliveryAddress } = req.body;

    if (!deliveryAddress)
      return res.status(400).json({
        success: false,
        message: "Delivery address required",
      });

    const result = await createPrescription({
      userId: req.user.userId, // from JWT
      imagePath: req.file.path,
      deliveryAddress,
    });

    res.status(201).json({
      success: true,
      message: "Prescription uploaded successfully",
      prescriptionId: result.prescription._id,
      extractedNames: result.prescription.extractedNames.map((m) => m.name),
      availableMedicines: result.availableMedicines,
      unavailableMedicines: result.unavailableMedicines,
      status: result.prescription.status,
      deliveryAddress: result.prescription.deliveryAddress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getPrescription = async (req, res) => {
  try {
    const prescription = await getPrescriptionById(req.params.id);

    if (!prescription)
      return res.status(404).json({
        success: false,
        message: "Prescription not found",
      });

    res.status(200).json({
      success: true,
      prescription,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await getAllPrescriptions();
    res.status(200).json({ success: true, prescriptions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const reviewPrescription = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, rejectionReason, medicines } = req.body;

    const prescription = await reviewPrescriptionService({
      prescriptionId: id,
      status,
      rejectionReason,
      medicines,
    });

    res.status(200).json({
      success: true,
      message: `Prescription ${status}`,
      prescription,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
