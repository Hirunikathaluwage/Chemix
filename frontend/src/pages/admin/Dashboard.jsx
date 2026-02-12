const stats = [
  { title: "Pending Prescriptions", value: "12" },
  { title: "Active Orders", value: "24" },
  { title: "Low Stock Items", value: "5" },
  { title: "Total Inventory", value: "1,234" },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-[#111827]">
          Dashboard Overview
        </h1>
        <p className="text-sm text-[#4B5563]">Welcome back, Pharmacist</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-sm text-[#4B5563]">{item.title}</p>
            <h2 className="text-2xl font-semibold text-[#111827] mt-2">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Activity + Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#111827] mb-4">Recent Activity</h3>
          <ul className="text-sm text-[#4B5563] space-y-3">
            <li>New prescription uploaded by User #101</li>
            <li>New prescription uploaded by User #102</li>
            <li>New prescription uploaded by User #103</li>
            <li>New prescription uploaded by User #104</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#111827] mb-4">Quick Actions</h3>
          <div className="flex gap-4">
            <button className="bg-[#0F766E] text-white px-4 py-2 rounded-lg text-sm">
              Review Prescriptions
            </button>
            <button className="bg-[#0D9488] text-white px-4 py-2 rounded-lg text-sm">
              Add Medicine
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
