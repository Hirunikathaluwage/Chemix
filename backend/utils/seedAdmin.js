import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import dotenv from "dotenv";
import path from "path";

// Load .env
dotenv.config({ path: path.resolve("./backend/.env") });

const MONGO_URI = process.env.MongoURI;

if (!MONGO_URI) {
  console.error("MongoURI is not defined in .env");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  });

// Create admin
const createAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ email: "admin@chemix.com" });
    if (existingAdmin) {
      console.log("Admin already exists:", existingAdmin.email);
      await mongoose.disconnect();
      return;
    }

    const hashedPassword = await bcrypt.hash("Admin123!", 10);

    const admin = await User.create({
      name: "Admin Pharmacist",
      email: "admin@chemix.com",
      phone: "0771234567",
      age: 30,
      address: "Colombo",
      role: "ADMIN",
      password: hashedPassword,
    });

    console.log("Admin created successfully:", admin.email);
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error creating admin:", error);
    await mongoose.disconnect();
    process.exit(1);
  }
};

createAdmin();
