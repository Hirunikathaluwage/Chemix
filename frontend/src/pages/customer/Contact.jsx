import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />

      {/* Title Section */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold text-[#111827]">Get in Touch</h2>
        <p className="text-sm text-[#4B5563] mt-2">
          Have questions about your order or need medical advice? We're here to
          help.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-[#111827] mb-2">Phone</h4>
            <p className="text-sm text-[#4B5563]">+1 (555) 123-4567</p>
            <p className="text-xs text-[#4B5563]">Mon-Fri 9am-6pm</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-[#111827] mb-2">Email</h4>
            <p className="text-sm text-[#4B5563]">support@medicareplus.com</p>
            <p className="text-xs text-[#4B5563]">24/7 Support</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-[#111827] mb-2">Location</h4>
            <p className="text-sm text-[#4B5563]">
              123 Health Street,
              <br />
              Medical District, NY 10001
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-sm space-y-6"
        >
          <h3 className="font-semibold text-[#111827]">Send us a Message</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="How can we help you?"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
            required
          />

          <button
            type="submit"
            className="bg-[#0F766E] text-white px-6 py-3 rounded-lg hover:bg-[#0D9488] transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
