import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Signup from "./pages/customer/Signup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/customer/Home.jsx";
import Upload from "./pages/customer/Upload.jsx";
import UploadSuccess from "./pages/customer/UploadSuccess.jsx";
import BrowseMedicines from "./pages/customer/BrowseMedicines.jsx";
import About from "./pages/customer/About.jsx";
import Contact from "./pages/customer/Contact.jsx";
import PrescriptionReview from "./pages/customer/PrescriptionReview";
// Admin Pages
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Prescriptions from "./pages/admin/Prescriptions.jsx";
import Inventory from "./pages/admin/Inventory.jsx";
import AddMedicine from "./pages/admin/AddMedicine.jsx";
import Orders from "./pages/admin/Orders.jsx";
import Delivery from "./pages/admin/Delivery.jsx";
import PrescriptionDetails from "./pages/admin/PrescriptionDetails.jsx";

// Route Protection
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/medicines" element={<BrowseMedicines />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uploadsuccess" element={<UploadSuccess />} />
        <Route path="/prescriptionReview" element={<PrescriptionReview />} />
        <Route
          path="/admin/prescriptions/:id"
          element={<PrescriptionDetails />}
        />

        {/* Admin Protected Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/add" element={<AddMedicine />} />
          <Route path="orders" element={<Orders />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="PrescriptionDetails" element={<PrescriptionDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
