import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const res = await API.get("/prescription");
        setPrescriptions(res.data.prescriptions);
      } catch (error) {
        console.error("Failed to fetch prescriptions", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrescriptions();
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "APPROVED":
        return "bg-[#DCFCE7] text-[#166534]";
      case "PENDING":
        return "bg-[#FEF9C3] text-[#854D0E]";
      case "REJECTED":
        return "bg-[#FEE2E2] text-[#991B1B]";
      default:
        return "";
    }
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen p-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-[#2563EB] font-semibold text-lg mb-6">
          All Prescriptions
        </h2>

        {/* Search (UI only for now) */}
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search by User Name"
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
          />
          <button className="bg-[#2563EB] px-4 rounded-r-md text-white">
            🔍
          </button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-3 text-sm font-medium text-gray-500 border-b pb-3">
          <span>User Name</span>
          <span>Status</span>
          <span className="text-right">Actions</span>
        </div>

        {loading ? (
          <p className="py-6 text-gray-500">Loading...</p>
        ) : prescriptions.length === 0 ? (
          <p className="py-6 text-gray-500">No prescriptions found</p>
        ) : (
          prescriptions.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-3 items-center py-4 border-b last:border-none"
            >
              <span className="text-[#111827] font-medium">
                {item.user?.name || "Unknown"}
              </span>

              <span
                className={`text-xs px-3 py-1 rounded-full w-fit ${getStatusStyle(
                  item.status,
                )}`}
              >
                {item.status}
              </span>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => navigate(`/admin/prescriptions/${item._id}`)}
                  className="bg-[#2563EB] text-white text-sm px-4 py-1.5 rounded-md"
                >
                  View
                </button>

                {/* Delete button kept as requested */}
                <button className="border border-red-500 text-red-500 text-sm px-4 py-1.5 rounded-md">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        {/* Pagination UI (static for now) */}
        <div className="flex justify-end items-center gap-2 mt-6 text-sm">
          <button className="px-3 py-1 border rounded-md">&lt;</button>
          <button className="px-3 py-1 bg-[#2563EB] text-white rounded-md">
            1
          </button>
          <button className="px-3 py-1 border rounded-md">2</button>
          <button className="px-3 py-1 border rounded-md">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;
