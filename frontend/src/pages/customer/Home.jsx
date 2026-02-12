// pages/Home.jsx
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#111827]">
      <Header />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#0F766E] to-[#0D9488] py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* LEFT CONTENT */}
          <div className="md:w-1/2 text-white">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Your Health,
              <br />
              <span className="text-[#CCFBF1]">Delivered to Your Door</span>
            </h1>

            <p className="text-lg text-[#CCFBF1] mb-8 max-w-md">
              Order medicines online, upload prescriptions, and get healthcare
              products delivered fast. Trusted by thousands of families.
            </p>

            <div className="flex space-x-4">
              <Link
                to="/upload"
                className="bg-white text-[#0F766E] px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
              >
                Upload Prescription
              </Link>

              <Link
                to="/medicines"
                className="border border-white px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-[#0F766E] transition"
              >
                Browse Medicines
              </Link>
            </div>
          </div>

          {/* RIGHT INFO CARD */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-80 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#0D9488] rounded-full">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold">100% Genuine</h4>
                    <p className="text-sm text-[#CCFBF1]">
                      Certified Medicines
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#2563EB] rounded-full">
                    🚚
                  </div>
                  <div>
                    <h4 className="font-semibold">Fast Delivery</h4>
                    <p className="text-sm text-[#CCFBF1]">Within 24 Hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#9333EA] rounded-full">
                    ☎
                  </div>
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-sm text-[#CCFBF1]">Expert Pharmacists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Why Choose MediCare Plus?
          </h2>
          <p className="text-[#4B5563] mb-12">
            We combine technology with healthcare to provide you with the best
            pharmacy experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#0D9488] text-left">
              <h3 className="font-semibold mb-3">Easy Prescription Upload</h3>
              <p className="text-sm text-[#4B5563]">
                Simply take a photo of your prescription and upload it. Our
                pharmacists will review and process your order instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#2563EB] text-left">
              <h3 className="font-semibold mb-3">Wide Range of Medicines</h3>
              <p className="text-sm text-[#4B5563]">
                Browse through thousands of OTC medicines, healthcare products,
                and wellness items.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#9333EA] text-left">
              <h3 className="font-semibold mb-3">Home Delivery</h3>
              <p className="text-sm text-[#4B5563]">
                Get your medicines delivered safely to your doorstep with
                real-time tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO ORDER SECTION */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#CCFBF1] p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Ready to order?</h3>
              <p className="text-sm text-[#4B5563]">
                Upload your prescription now or browse our catalog for
                over-the-counter medicines.
              </p>
            </div>

            <div className="flex space-x-4 mt-6 md:mt-0">
              <Link
                to="/upload"
                className="bg-[#0F766E] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#0D9488]"
              >
                Upload Prescription
              </Link>

              <Link
                to="/medicines"
                className="bg-white text-[#111827] px-6 py-3 rounded-lg text-sm border border-[#E5E7EB]"
              >
                Browse Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
