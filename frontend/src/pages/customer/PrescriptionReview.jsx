import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

const PrescriptionReview = () => {
  const [medicines] = useState([
    { id: 1, name: "Amoxicillin 500mg", qty: 14, price: 12.5 },
    { id: 2, name: "Omeprazole 20mg", qty: 30, price: 15.0 },
    { id: 3, name: "Cetirizine 10mg", qty: 10, price: 8.99 },
    { id: 4, name: "Paracetamol 500mg", qty: 20, price: 5.99 },
  ]);

  const unavailable = [
    { name: "Metformin 850mg", reason: "Currently out of stock" },
    { name: "Losartan 50mg", reason: "Temporarily unavailable from supplier" },
  ];

  const total = medicines.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#111827]">
            Upload Prescription
          </h2>
          <p className="text-sm text-[#4B5563] mt-2">
            Review the available medicines and confirm your order.
          </p>
        </div>

        {/* Success Banner */}
        <div className="bg-[#CCFBF1] border border-[#0F766E]/20 p-4 rounded-lg text-sm text-[#0F766E]">
          ✓ Prescription Verified Successfully
          <p className="text-[#4B5563] text-xs mt-1">
            We identified the medicines in your prescription. Please review the
            availability below.
          </p>
        </div>

        {/* Available Medicines */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-[#111827] mb-4">
            Available Medicines
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-[#4B5563] border-b">
                <tr>
                  <th className="py-2">Select</th>
                  <th>Medicine Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {medicines.map((item) => (
                  <tr key={item.id} className="border-b last:border-none">
                    <td className="py-3">
                      <input type="checkbox" defaultChecked />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td className="font-medium text-[#111827]">
                      ${(item.qty * item.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Unavailable Medicines */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="font-semibold text-yellow-700 mb-3">
            ⚠ Unavailable Medicines
          </h3>

          {unavailable.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-sm text-[#4B5563] border-b last:border-none py-2"
            >
              <span>{item.name}</span>
              <span className="text-yellow-700">{item.reason}</span>
            </div>
          ))}
        </div>

        {/* Total Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-[#4B5563]">Total Amount</p>
            <h4 className="text-xl font-semibold text-[#111827]">
              ${total.toFixed(2)}
            </h4>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2 text-sm border border-[#E5E7EB] rounded-lg">
              Cancel
            </button>

            <button className="px-6 py-2 bg-[#0F766E] text-white rounded-lg hover:bg-[#0D9488] transition text-sm">
              Proceed to Payment
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrescriptionReview;
