import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const OrderConfirmed = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-[#111827] mb-2">
          Order Confirmed
        </h2>
        <p className="text-sm text-[#4B5563] mb-8">
          Thank you for your order. We'll handle the rest.
        </p>

        {/* Success Card */}
        <div className="bg-[#CCFBF1] rounded-2xl p-12 shadow-sm border-t-4 border-[#0F766E]">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white rounded-full text-[#0F766E] text-2xl shadow">
            ✓
          </div>

          <h3 className="text-lg font-semibold text-[#111827] mb-2">
            Order Confirmed!
          </h3>

          <p className="text-sm text-[#4B5563] mb-6">
            Your order{" "}
            <span className="font-medium text-[#0F766E]">#ORD-2024-7834</span>{" "}
            has been placed successfully.
          </p>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-xl text-left max-w-sm mx-auto shadow-sm">
            <h4 className="font-semibold text-[#111827] mb-4">Order Summary</h4>

            <div className="flex justify-between text-sm text-[#4B5563] mb-2">
              <span>Payment Method</span>
              <span>Bank Transfer</span>
            </div>

            <div className="flex justify-between text-sm text-[#4B5563] mb-4">
              <span>Items</span>
              <span>4 medicines</span>
            </div>

            <div className="flex justify-between font-semibold text-[#111827]">
              <span>Total</span>
              <span className="text-[#0F766E]">$42.48</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Link
              to="/upload"
              className="px-6 py-2 bg-white border border-[#E5E7EB] rounded-lg text-sm"
            >
              Upload Another Prescription
            </Link>

            <Link
              to="/medicines"
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

export default OrderConfirmed;
