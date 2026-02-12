import Header from "../../components/Header";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />

      {/* Top Section */}
      <section className="bg-[#CCFBF1] py-16 text-center">
        <h2 className="text-2xl font-semibold text-[#111827]">
          About MediCare Plus
        </h2>
        <p className="text-[#4B5563] mt-3 max-w-xl mx-auto text-sm">
          We are dedicated to making healthcare accessible, affordable, and
          convenient for everyone.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-lg font-semibold text-[#111827] mb-4">
            Our Mission
          </h3>
          <p className="text-[#4B5563] text-sm mb-4">
            At MediCare Plus, we believe that access to essential medicines
            should never be a hassle. Our mission is to bridge the gap between
            patients and pharmacies through technology.
          </p>
          <p className="text-[#4B5563] text-sm">
            Founded in 2024, we have grown from a small local pharmacy to a
            digital healthcare platform serving thousands of customers daily
            with genuine medicines and expert advice.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1585435557343-3b092031a831"
            alt="Medicines"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-lg font-semibold text-[#111827] mb-12">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F9FAFB] p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#CCFBF1] rounded-full">
                ✓
              </div>
              <h4 className="font-semibold text-[#111827] mb-2">
                Trust & Safety
              </h4>
              <p className="text-sm text-[#4B5563]">
                We only source from certified manufacturers and ensure every
                product is genuine and safe.
              </p>
            </div>

            <div className="bg-[#F9FAFB] p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#2563EB]/10 text-[#2563EB] rounded-full">
                ♥
              </div>
              <h4 className="font-semibold text-[#111827] mb-2">Care First</h4>
              <p className="text-sm text-[#4B5563]">
                Your health is our priority. Our pharmacists are available 24/7
                to answer your questions.
              </p>
            </div>

            <div className="bg-[#F9FAFB] p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#9333EA]/10 text-[#9333EA] rounded-full">
                👥
              </div>
              <h4 className="font-semibold text-[#111827] mb-2">Community</h4>
              <p className="text-sm text-[#4B5563]">
                We are more than a pharmacy; we are part of your community,
                supporting local health initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
