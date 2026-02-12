import { useState } from "react";
import API from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      const { token } = res.data;

      // Save token
      localStorage.setItem("token", token);

      // Decode role from JWT
      const decoded = jwtDecode(token);

      alert("Login successful");

      //  Role Based Redirect
      if (decoded.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#111827]">
            Welcome Back
          </h2>
          <p className="text-sm text-[#4B5563] mt-2">
            Sign in to your MediCare account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
          />

          <button
            type="submit"
            className="w-full bg-[#0F766E] text-white py-3 rounded-lg font-semibold hover:bg-[#0D9488] transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-[#4B5563] mt-6">
          Don’t have an account?{" "}
          <a href="/" className="text-[#0F766E] font-semibold hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
