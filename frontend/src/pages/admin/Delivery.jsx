const Delivery = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold text-[#111827]">
        Delivery Management
      </h1>

      {/* Drivers */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between">
          <div>
            <h3 className="font-semibold text-[#111827]">Driver Mike</h3>
            <span className="text-xs bg-[#D1FAE5] text-[#0F766E] px-2 py-1 rounded">
              Available
            </span>
          </div>
          <button className="text-sm text-[#0F766E]">Contact</button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between">
          <div>
            <h3 className="font-semibold text-[#111827]">Driver Sarah</h3>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
              On Delivery
            </span>
          </div>
          <button className="text-sm text-[#0F766E]">Contact</button>
        </div>
      </div>

      {/* Active Deliveries */}
      <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <h3 className="font-semibold text-[#111827]">Active Deliveries</h3>

        <div className="flex justify-between text-sm text-[#4B5563]">
          <span>ORD-2024-7833 • Pending</span>
          <div className="flex gap-4">
            <button className="text-[#0F766E]">Assign Driver Mike</button>
            <button className="text-[#0F766E]">Assign Driver Sarah</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
