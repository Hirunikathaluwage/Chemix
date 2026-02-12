import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const UploadSuccess = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-[#CCFBF1] p-12 rounded-2xl text-center shadow-sm">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white rounded-full text-[#0F766E] text-2xl shadow">
            ✓
          </div>

          <h2 className="text-xl font-semibold text-[#111827] mb-3">
            Upload Successful!
          </h2>

          <p className="text-sm text-[#4B5563] mb-8">
            Your prescription has been received. Our pharmacists will review it
            and contact you shortly to confirm your order.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/upload"
              className="px-6 py-2 bg-white border border-[#E5E7EB] rounded-lg text-sm"
            >
              Upload Another
            </Link>

            <Link
              to="/prescription-review"
              className="px-6 py-2 bg-[#0F766E] text-white rounded-lg text-sm hover:bg-[#0D9488] transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UploadSuccess;
