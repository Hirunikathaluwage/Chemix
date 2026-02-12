import { Link, Outlet, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/admin" },
  { name: "Prescriptions", path: "/admin/prescriptions" },
  { name: "Inventory", path: "/admin/inventory" },
  { name: "Orders", path: "/admin/orders" },
  { name: "Delivery", path: "/admin/delivery" },
];

const AdminLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-[#F3F4F6]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F3F3B] text-white flex flex-col justify-between">
        <div>
          <div className="p-6 border-b border-white/10">
            <h2 className="text-lg font-semibold">MediCare Admin</h2>
            <p className="text-xs text-white/70">Pharmacist Panel</p>
          </div>

          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                location.pathname.startsWith(item.path + "/");

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded-lg text-sm transition ${
                    isActive ? "bg-[#0F766E]" : "hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-white/10 text-sm">
          <button className="text-white/80 hover:text-white">Sign Out</button>
        </div>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
