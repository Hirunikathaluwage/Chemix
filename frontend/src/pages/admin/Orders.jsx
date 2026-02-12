const Orders = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-[#111827]">Order Processing</h1>

      {[1, 2, 3].map((order, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold text-[#111827]">
              ORD-2024-783{4 - i}
            </h3>
            <p className="text-sm text-[#4B5563]">
              Customer: John Doe • 3 items
            </p>
            <span className="text-xs bg-[#D1FAE5] text-[#0F766E] px-2 py-1 rounded mt-2 inline-block">
              Processing
            </span>
          </div>

          <div className="text-right">
            <p className="text-sm text-[#4B5563]">Total Amount</p>
            <h4 className="font-semibold text-[#111827]">$45.50</h4>

            <div className="mt-3 flex gap-3 justify-end">
              <button className="text-sm text-[#0F766E]">View Details</button>

              <button className="bg-[#0F766E] text-white px-4 py-2 rounded-lg text-sm">
                Process Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
