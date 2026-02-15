import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ["Pain Relief", "Cough", "Vitamins"],
      required: true,
    },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    prescriptionRequired: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Medicine = mongoose.model("Medicine", medicineSchema);
export default Medicine;
