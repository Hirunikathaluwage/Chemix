import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api.js";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

const Upload = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Select a prescription");
      return;
    }

    const formData = new FormData();
    formData.append("prescription", file);
    formData.append("notes", notes);
    formData.append("age", age);
    formData.append("phone", phone);
    formData.append("deliveryAddress", deliveryAddress);

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await API.post("/prescription/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // If backend returns 200 or 201
      if (response.status === 200 || response.status === 201) {
        navigate("/uploadsuccess");
      } else {
        throw new Error("Unexpected response");
      }
    } catch (err) {
      console.log("UPLOAD ERROR:", err.response || err);
      alert(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-[#111827]">
            Upload Your Prescription
          </h2>
          <p className="text-sm text-[#4B5563]">
            Upload a clear photo of your doctor’s prescription to place an
            order.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-sm space-y-6"
        >
          <div>
            <label className="text-sm text-[#4B5563]">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full mt-2 border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-[#4B5563]">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full mt-2 border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-[#4B5563]">Delivery Address</label>
            <textarea
              rows="3"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              required
              className="w-full mt-2 border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm"
            />
          </div>

          <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-8 text-center cursor-pointer hover:border-[#0D9488] transition">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
              id="fileUpload"
            />
            <label htmlFor="fileUpload" className="cursor-pointer">
              <p className="text-[#0F766E] font-medium">Click to upload</p>
              <p className="text-sm text-[#4B5563]">PNG, JPG up to 5MB</p>
              {file && (
                <p className="text-sm text-[#111827] mt-2">
                  Selected: {file.name}
                </p>
              )}
            </label>
          </div>

          <div>
            <label className="text-sm text-[#4B5563]">Notes (optional)</label>
            <textarea
              rows="4"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific instructions for the pharmacist..."
              className="w-full mt-2 border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0F766E] text-white py-3 rounded-lg font-semibold hover:bg-[#0D9488] transition"
          >
            {loading ? "Uploading..." : "Submit Prescription"}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;
