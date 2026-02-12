const Prescriptions = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Left List */}
      <div className="space-y-4">
        {[
          { name: "John Doe", status: "Pending" },
          { name: "Jane Smith", status: "Approved" },
          { name: "Mike Johnson", status: "Rejected" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between">
              <p className="font-medium text-[#111827]">{item.name}</p>
              <span className="text-xs bg-[#CCFBF1] text-[#0F766E] px-2 py-1 rounded">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Right Viewer */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm">
        <h3 className="font-semibold text-[#111827] mb-4">
          Prescription Preview
        </h3>

        <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          Prescription Image
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;
