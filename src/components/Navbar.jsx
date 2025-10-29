import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { logo } from "../assets/logo.png";
import { MdOutlinePhoneCallback } from "react-icons/md";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const phoneNumber = "+919368169482";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <nav className="w-full h-[80px]   bg-white shadow-sm fixed top-0 left-0 z-40">
      <div className="w-full px-[4%] mx-auto  py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="w-[60px] h-[60px] rounded-full" />
          <span className="text-2xl md:text-2xl font-bold text-gray-900">
            Dun <span className="text-sky-500">Drives</span>
          </span>
          {/* <img src={logo} alt="" /> */}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium gap-9 text-xl">
          <Link
            to="/"
            className="relative group cursor-pointer transition hover:text-sky-700"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/blog"
            className="relative group cursor-pointer transition  hover:text-sky-700"
          >
            Blog
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/services"
            className="relative group cursor-pointer transition  hover:text-sky-700"
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="relative group cursor-pointer transition  hover:text-sky-700"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </ul>

        {/* Book Now Button */}
        <div className="flex flex-row gap-4">
          <Link
            to="/contact"
            className="hidden lg:flex flex-row  gap-2 bg-green-600 hover:bg-green-800 hover:duration-200 hover:delay-300 text-white font-semibold py-2 px-5 rounded-lg transition cursor-pointer "
            onClick={handleCall}
          >
            <MdOutlinePhoneCallback className="mt-1 text-lg" />
            <span>call Now</span>
          </Link>

          <Link
            to="/contact"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-lg transition cursor-pointer"
          >
            Book Now
          </Link>
        </div>
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
        <div className="md:hidden bg-white shadow-lg px-6 py-6 rounded-b-2xl">
          <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
            <Link
              to="/"
              className="relative group w-full text-center py-2 rounded-md hover:bg-blue-50 transition duration-200"
            >
              Home
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>

            <Link
              to="/blog"
              className="relative group w-full text-center py-2 rounded-md hover:bg-blue-50 transition duration-200"
            >
              About
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>

            <Link
              to="/services"
              className="relative group w-full text-center py-2 rounded-md hover:bg-blue-50 transition duration-200"
            >
              Services
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>

            <Link
              to="/contact"
              className="relative group w-full text-center py-2 rounded-md hover:bg-blue-50 transition duration-200"
            >
              Contact
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          </ul>

          {/* Book Now Button */}
          <div className="flex justify-center mt-6">
            <Link
              to="/contact"
              className="w-[80%] text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all duration-300 active:scale-95"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
