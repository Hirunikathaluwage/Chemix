import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { useState, useEffect } from "react";
import API from "../../services/api.js";

const BrowseMedicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const res = await API.get("/medicines");
        setMedicines(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMedicines();
  }, []);

  const filteredMedicines = medicines.filter((med) => {
    const matchesSearch = med.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || med.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Browse Medicines
            </h2>
            <p className="text-sm text-[#4B5563]">
              Find the medicines you need quickly and easily.
            </p>
          </div>

          {/* Search + Filters */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search medicines..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
            />

            <div className="flex space-x-2 text-sm">
              {["All", "OTC", "Prescription"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-3 py-1 rounded-md transition ${
                    filter === type
                      ? "bg-[#0F766E] text-white"
                      : "bg-white border border-[#E5E7EB] text-[#4B5563]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Medicine Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMedicines.map((med) => (
            <div
              key={med._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={med.image || "https://via.placeholder.com/300"}
                  alt={med.name}
                  className="h-40 w-full object-cover"
                />

                {med.category && (
                  <span className="absolute top-3 right-3 bg-[#0D9488] text-white text-xs px-2 py-1 rounded-full">
                    {med.category}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-[#111827] mb-2">
                  {med.name}
                </h3>

                <p className="text-[#0F766E] font-semibold mb-4">
                  ${med.price}
                </p>

                <button className="mt-auto bg-[#0F766E] text-white py-2 rounded-lg text-sm hover:bg-[#0D9488] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrowseMedicines;
