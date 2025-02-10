import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed m-2 z-20 rounded-full  top-0 w-full px-6 py-4 flex items-center justify-between transition-all duration-300 border-b-4 border border-orange-900/20 
      ${isScrolled ? "bg-orange-900 bg-opacity-25 backdrop-blur-md shadow-lg" : "bg-orange-900 bg-opacity-20 backdrop-blur-lg"}`}
    >
      {/*  Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Chess AI Battle Logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold text-yellow-400">Chess AI Battle</h1>
      </div>

      {/* Navigation Links */}
      <nav className="font-bold hidden md:flex space-x-6">
        <a href="#" className="text-white hover:text-orange-400">
          Home
        </a>
        <a href="#" className="text-white hover:text-orange-400">
          About
        </a>
        <a href="#" className="text-white hover:text-orange-400">
          Contact
        </a>
      </nav>
    
    </header>
  );
};

export default Header;
