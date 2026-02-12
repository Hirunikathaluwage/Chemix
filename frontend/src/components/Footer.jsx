// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm text-[#4B5563]">
        <div>
          <h4 className="text-[#0F766E] font-semibold mb-4">Chemix</h4>
          <p>
            Your trusted partner in health. Providing quality medicines and
            healthcare products delivered to your doorstep.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[#111827]">Services</h4>
          <ul className="space-y-2">
            <li>Buy Medicines</li>
            <li>Upload Prescription</li>
            <li>Healthcare Products</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[#111827]">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[#111827]">Contact</h4>
          <ul className="space-y-2">
            <li>+1 (555) 123-4567</li>
            <li>123 Health Street, Medical District, NY 10001</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-[#4B5563] pb-6">
        © {new Date().getFullYear()} Chemix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
