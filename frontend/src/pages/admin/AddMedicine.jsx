const AddMedicine = () => {
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

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
        <h2 className="font-semibold text-[#111827]">Add New Medicine</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-sm text-[#6B7280]">Medicine Name</label>
            <input
              placeholder="e.g. Panadol"
              className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-[#6B7280]">Generic Name</label>
            <input
              placeholder="e.g. Paracetamol"
              className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-[#6B7280]">Unit/Dosage</label>
            <input
              placeholder="e.g. 500mg"
              className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-[#6B7280]">Price ($)</label>
            <input
              placeholder="0.00"
              className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-[#6B7280]">Quantity</label>
            <input
              placeholder="0"
              className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-[#6B7280]">Expiry Date</label>
            <input
              type="date"
              className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm"
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm text-[#6B7280]">Description</label>
          <textarea
            rows="3"
            className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          <input type="checkbox" />
          <span>Available Over-the-Counter (OTC)</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button className="text-sm text-[#6B7280]">Cancel</button>
          <button className="bg-[#0F766E] hover:bg-[#0D9488] text-white px-5 py-2 rounded-lg text-sm transition">
            Save Medicine
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
