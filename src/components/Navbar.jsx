import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-black bg-white max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-gray-200">
        {/* Logo */}
        <img src={logo} alt="logo" width={150} height={30} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#works" className="hover:text-gray-700">How it works</a>
          <a href="#features" className="hover:text-gray-700">Features</a>
          <a href="#aboutus" className="hover:text-gray-700">About Us</a>
        </div>

        {/* Desktop Action */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="#calcom"
            className="border border-gray-200 text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Demo
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border border-gray-200 p-4 rounded-xl mt-2">
          <div className="flex flex-col space-y-4">
          <a href="#works" className="hover:text-gray-700">How it works</a>
          <a href="#features" className="hover:text-gray-700">Features</a>
          <a href="#aboutus" className="hover:text-gray-700">About Us</a>
            <a
              href="#calcom"
              className="border border-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition"
            >
              Get a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
