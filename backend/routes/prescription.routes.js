// // routes/prescription.routes.js
// import express from "express";
// import {
//   uploadPrescription,
//   getPrescription,
//   getPrescriptions,
//   reviewPrescription,
// } from "../controllers/prescription.controller.js";
// import authMiddleware from "../middleware/auth.middleware.js";
// import roleMiddleware from "../middleware/role.middleware.js";
// import { upload } from "../services/upload.service.js";

// const router = express.Router();

// router.get("/", authMiddleware, roleMiddleware("ADMIN"), getPrescriptions);
// router.put(
//   "/:id/review",
//   authMiddleware,
//   roleMiddleware("ADMIN"),
//   reviewPrescription,
// );

// router.get("/:id", authMiddleware, getPrescription);
// router.post(
//   "/upload",
//   authMiddleware,
//   upload.single("prescription"),
//   uploadPrescription,
// );

// export default router;
import express from "express";
import {
  uploadPrescription,
  getPrescription,
  getPrescriptions,
  reviewPrescription,
} from "../controllers/prescription.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import { upload } from "../services/upload.service.js";

const router = express.Router();

// USER: upload prescription (no 403 for normal users)
router.post(
  "/upload",
  authMiddleware,
  upload.single("prescription"),
  uploadPrescription,
);

// ADMIN: get all prescriptions for review
router.get("/", authMiddleware, roleMiddleware("ADMIN"), getPrescriptions);

// ADMIN: review a prescription
router.put(
  "/:id/review",
  authMiddleware,
  roleMiddleware("ADMIN"),
  reviewPrescription,
);

// ANY AUTHENTICATED USER: get prescription by ID
router.get("/:id", authMiddleware, getPrescription);

export default router;
