import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-[#CCFBF1]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-semibold text-[#0F766E]">
          Chemix <span className="font-light">Plus</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm text-[#4B5563]">
          <Link to="/" className="hover:text-[#0D9488]">
            Home
          </Link>
          <Link to="/medicines" className="hover:text-[#0D9488]">
            Browse Medicines
          </Link>
          <Link to="/upload" className="hover:text-[#0D9488]">
            Upload Prescription
          </Link>
          <Link to="/about" className="hover:text-[#0D9488]">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-[#0D9488]">
            Contact
          </Link>
        </nav>

        {/* User */}
        <div className="text-sm text-[#4B5563]">John Doe</div>
      </div>
    </header>
  );
};

export default Header;
