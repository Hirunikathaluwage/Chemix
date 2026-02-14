import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const UploadSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/prescriptionReview");
    }, 2500); // 2.5 seconds spinner

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-[#CCFBF1] p-12 rounded-2xl text-center shadow-sm">
          {/* Spinner */}
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#0F766E] border-t-transparent rounded-full animate-spin"></div>
          </div>

          <h2 className="text-xl font-semibold text-[#111827] mb-3">
            Reviewing Prescription...
          </h2>

          <p className="text-sm text-[#4B5563] max-w-md mx-auto">
            Our pharmacists are reviewing your prescription to ensure safety and
            availability. This usually takes a few seconds.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UploadSuccess;
