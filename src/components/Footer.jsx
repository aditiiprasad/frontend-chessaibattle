import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#3E2723] bg-opacity-80 backdrop-blur-md border-t border-[#5D4037] py-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Chess AI Battle Logo" className="h-28 w-28 mb-4 md:mb-0 rounded-lg shadow-xl" />
          <p className="text-sm text-[#D7CCC8]">© 2025 Chess AI Battle</p>
        </div>

        {/* Links Section */}
        <nav className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <a href="#" className="text-[#D7CCC8] hover:text-[#FFC107] transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-[#D7CCC8] hover:text-[#FFC107] transition-colors duration-300">Terms of Service</a>
          <a href="#" className="text-[#D7CCC8] hover:text-[#FFC107] transition-colors duration-300">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
