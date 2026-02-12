import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const PaymentMethod = () => {
  const [method, setMethod] = useState("bank");

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#111827]">
            Upload Prescription
          </h2>
          <p className="text-sm text-[#4B5563] mt-2">
            Select your preferred payment method.
          </p>
        </div>

        {/* Payment Card */}
        <div className="bg-white p-8 rounded-xl shadow-sm space-y-8">
          <div>
            <h3 className="font-semibold text-[#111827] mb-2">
              Select Payment Method
            </h3>
            <p className="text-sm text-[#4B5563] mb-6">
              Choose how you'd like to pay for your order
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Cash on Delivery */}
              <div
                onClick={() => setMethod("cod")}
                className={`p-6 rounded-xl border cursor-pointer transition ${
                  method === "cod"
                    ? "border-[#0F766E] bg-[#CCFBF1]"
                    : "border-[#E5E7EB] bg-white"
                }`}
              >
                <h4 className="font-semibold text-[#111827] mb-2">
                  Cash on Delivery
                </h4>
                <p className="text-sm text-[#4B5563]">
                  Pay when your medicines are delivered to your doorstep.
                </p>
              </div>

              {/* Bank Transfer */}
              <div
                onClick={() => setMethod("bank")}
                className={`p-6 rounded-xl border cursor-pointer transition ${
                  method === "bank"
                    ? "border-[#0F766E] bg-[#CCFBF1]"
                    : "border-[#E5E7EB] bg-white"
                }`}
              >
                <h4 className="font-semibold text-[#111827] mb-2">
                  Bank Transfer / Slip
                </h4>
                <p className="text-sm text-[#4B5563]">
                  Upload a payment slip or screenshot of your bank transfer.
                </p>
              </div>
            </div>
          </div>

          {/* Upload Slip Section */}
          {method === "bank" && (
            <div>
              <h4 className="text-sm font-medium text-[#4B5563] mb-3">
                Upload Payment Proof
              </h4>

              <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-8 text-center hover:border-[#0D9488] transition">
                <input type="file" className="hidden" id="paymentSlip" />
                <label
                  htmlFor="paymentSlip"
                  className="cursor-pointer text-[#0F766E] text-sm"
                >
                  Upload Payment Slip
                </label>
                <p className="text-xs text-[#4B5563] mt-1">
                  PNG, JPG up to 5MB
                </p>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between items-center pt-6">
            <Link to="/prescription-review" className="text-sm text-[#4B5563]">
              Back to Review
            </Link>

            <Link
              to="/order-confirmed"
              className="px-6 py-2 bg-[#0F766E] text-white rounded-lg text-sm hover:bg-[#0D9488] transition"
            >
              Place Order ($42.48)
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentMethod;
