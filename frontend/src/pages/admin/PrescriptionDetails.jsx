import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../services/api";

const PrescriptionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [prescription, setPrescription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrescription = async () => {
      try {
        const res = await API.get(`/prescription/${id}`);
        setPrescription(res.data.prescription);
        console.log(res.data.prescription);
      } catch (error) {
        console.error("Failed to fetch prescription", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrescription();
  }, [id]);

  const handleReview = async (status) => {
    try {
      await API.put(`/prescription/${id}/review`, {
        status,
        rejectionReason: status === "REJECTED" ? "Rejected by admin" : null,
      });

      alert(`Prescription ${status}`);
      navigate("/admin/prescriptions");
    } catch (error) {
      console.error("Review failed", error);
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!prescription) {
    return <div className="p-8">Prescription not found</div>;
  }

  return (
    <div className="bg-[#F3F4F6] min-h-screen p-8">
      <div
        className="mb-4 text-sm text-gray-500 cursor-pointer"
        onClick={() => navigate("/admin/prescriptions")}
      >
        ← Back to List
      </div>

      <h2 className="text-lg font-semibold text-[#111827] mb-6">
        Prescription Details
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* User Info Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-[#111827] mb-4">
            User Information
          </h3>

          <div className="flex flex-col items-center mb-4">
            <div className="w-20 h-20 bg-[#D1FAE5] rounded-full flex items-center justify-center text-[#065F46] text-xl">
              👤
            </div>

            <p className="mt-3 font-semibold text-[#111827]">
              {prescription.user?.name}
            </p>
            <p className="text-xs text-gray-500">
              User ID: {prescription.user?._id}
            </p>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <p>📅 Age: {prescription.user?.age || "N/A"}</p>
            <p>📍 Address: {prescription.deliveryAddress}</p>
          </div>

          <div className="mt-4">
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">
              {prescription.status}
            </span>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => handleReview("APPROVED")}
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Approve
            </button>

            <button
              onClick={() => handleReview("REJECTED")}
              className="bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Reject
            </button>
          </div>

          {/* Delete button kept */}
          <button className="mt-6 w-full bg-red-500 text-white py-2 rounded-md">
            Delete Record
          </button>
        </div>

        {/* Prescription Image */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-[#111827] mb-4">
            Prescription Image
          </h3>

          <img
            src={`http://localhost:5000${prescription.imageUrl}`}
            alt="Prescription"
            className="w-full h-[400px] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PrescriptionDetails;
