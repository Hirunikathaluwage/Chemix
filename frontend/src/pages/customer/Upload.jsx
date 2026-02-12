import { useState } from "react";
import API from "../../services/api.js";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Select a prescription");

    const formData = new FormData();
    formData.append("prescription", file);
    formData.append("notes", notes);

    try {
      setLoading(true);
      await API.post("/prescriptions/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Prescription uploaded successfully!");
      setFile(null);
      setNotes("");
    } catch (err) {
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
            Upload Prescription
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
          {/* Upload Box */}
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

          {/* Notes */}
          <div>
            <label className="text-sm text-[#4B5563]">
              Additional Notes (optional)
            </label>
            <textarea
              rows="4"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific instructions for the pharmacist..."
              className="w-full mt-2 border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
            />
          </div>

          {/* Submit */}
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
