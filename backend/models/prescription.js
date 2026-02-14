import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    imageUrl: { type: String, required: true }, // where uploaded image is stored
    extractedNames: [{ type: mongoose.Schema.Types.ObjectId, ref: "Medicine" }],
    availableMedicines: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Medicine" },
    ],
    unavailableMedicines: [{ type: String }],
    status: {
      type: String,
      enum: ["PENDING", "APPROVED", "REJECTED"],
      default: "PENDING",
    },
    rejectionReason: { type: String },
    deliveryAddress: { type: String, required: true },
  },
  { timestamps: true },
);

const Prescription = mongoose.model("Prescription", prescriptionSchema);

export default Prescription;
