import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="w-full px-[4%] mx-auto  py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl md:text-2xl font-bold text-gray-900">
            Tomar <span className="text-sky-500">Travels</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium gap-9 text-lg">
          <li className="hover:text-sky-500 cursor-pointer transition nav-list">
            Home
          </li>
          <li className="hover:text-sky-500 cursor-pointer transition">
            About
          </li>
          <li className="hover:text-sky-500 cursor-pointer transition">
            Services
          </li>
          <li className="hover:text-sky-500 cursor-pointer transition">
            Contact
          </li>
        </ul>

        {/* Book Now Button */}
        <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-lg transition cursor-pointer">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="md:hover:text-sky-500 cursor-pointer transition md:mb-0 md:bg-white mb-4 px-4 py-2 rounded-lg bg-blue-100 hover:duration-150 hover:bg-sky-400 ">
              Home
            </li>
            <li className="hover:text-sky-500 cursor-pointer transition md:mb-0 md:bg-white  mb-4 px-4 py-2 rounded-lg bg-blue-100 hover:duration-150 hover:bg-sky-400">
              About
            </li>
            <li className="hover:text-sky-500 cursor-pointer transition md:mb-0 md:bg-whitev mb-4 px-4 py-2 rounded-lg bg-blue-100 hover:duration-150 hover:bg-sky-400">
              Services
            </li>
            <li className="hover:text-sky-500 cursor-pointer transition md:mb-0 md:bg-white mb-4 px-4 py-2 rounded-lg bg-blue-100 hover:duration-150 hover:bg-sky-400">
              Contact
            </li>
          </ul>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
