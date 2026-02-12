import { useState } from "react";
import API from "../../services/api.js";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/signup", form);

      localStorage.setItem("token", res.data.token);

      alert("Signup successful");

      // After signup → go to home (customer flow)
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#111827]">
            Create Account
          </h2>
          <p className="text-sm text-[#4B5563] mt-2">
            Join MediCare and manage your health easily
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
          />

          <input
            name="age"
            type="number"
            placeholder="Age"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
          />

          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
          />

          <button
            type="submit"
            className="w-full bg-[#0F766E] hover:bg-[#0D9488] text-white py-3 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-[#4B5563] mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#0F766E] font-semibold hover:underline"
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
