const Inventory = () => {
  return (
    <div className="space-y-6 bg-[#F3F4F6] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-[#111827]">
          Medicine Inventory
        </h1>

        <button className="bg-[#0F766E] hover:bg-[#0D9488] text-white px-5 py-2 rounded-lg text-sm transition">
          + Add New Medicine
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {/* Search */}
        <div className="mb-6">
          <input
            placeholder="Search inventory..."
            className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
          />
        </div>

        {/* Table */}
        <table className="w-full text-sm">
          <thead className="border-b text-[#6B7280]">
            <tr>
              <th className="py-3 text-left">Name</th>
              <th>Generic</th>
              <th>Unit</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Expiry</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="text-[#111827]">
            <tr className="border-b hover:bg-gray-50">
              <td className="py-4 font-medium">Amoxicillin</td>
              <td>Amoxicillin</td>
              <td>500mg</td>
              <td>
                <span className="bg-[#D1FAE5] text-[#0F766E] px-3 py-1 rounded-full text-xs font-medium">
                  14
                </span>
              </td>
              <td>$12.50</td>
              <td>2025-12-01</td>
              <td>Rx</td>
              <td className="text-[#0F766E] cursor-pointer hover:underline">
                Edit
              </td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="py-4 font-medium">Paracetamol</td>
              <td>Acetaminophen</td>
              <td>500mg</td>
              <td>
                <span className="bg-[#D1FAE5] text-[#0F766E] px-3 py-1 rounded-full text-xs font-medium">
                  50
                </span>
              </td>
              <td>$5.99</td>
              <td>2026-06-15</td>
              <td>OTC</td>
              <td className="text-[#0F766E] cursor-pointer hover:underline">
                Edit
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="py-4 font-medium">Cetirizine</td>
              <td>Cetirizine Hydrochloride</td>
              <td>10mg</td>
              <td>
                <span className="bg-[#D1FAE5] text-[#0F766E] px-3 py-1 rounded-full text-xs font-medium">
                  50
                </span>
              </td>
              <td>$8.99</td>
              <td>2025-01-20</td>
              <td>OTC</td>
              <td className="text-[#0F766E] cursor-pointer hover:underline">
                Edit
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
