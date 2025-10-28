import React from "react";
import {
  FaCarSide,
  FaClock,
  FaMapMarkerAlt,
  FaPlaneDeparture,
} from "react-icons/fa";
import heroImage from "../assets/heroImage.png";
import Kedarnath_temple from "../assets/temples/Kedarnath_temple.jpg";
import rishikesh from "../assets/temples/rishikesh.jpg";
import "../styles/shadow.css";
// import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlinePhoneCallback } from "react-icons/md";

const HeroSection = () => {
  const phoneNumber = "+919368169482";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <section className="w-full h-full  relative flex flex-col flex-wrap lg:flex-row items-center justify-between px-[4%] py-12 mt-10 sm:mt-15 lg:py-20 overflow-hidden bg-gray-110">
      {/* Left Content */}
      <div className="w-full h-full lg:w-[50%] text-center lg:text-left mb-10 xm:mb-0 tw:bg-red-200 ">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight text-gray-900 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          India’s Most Trusted <br /> Taxi Service
        </motion.h1>
        <motion.p
          className="text-gray-600  text-[17px] sm:text-lg mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Your Road Trip Partner – Safe, Affordable & Comfortable Rides Across
          India.
        </motion.p>

        {/* Small icons */}
        <motion.div
          className="flex items-center gap-6 mt-8 justify-center lg:justify-start sm:mb-4 "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-sky-100 p-2 rounded-full ">
              <FaCarSide className="text-lg text-sky-500" />
            </div>
            <span className="text-[15px] sm:text-[17px]">Premuim Fleet</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-pink-100 p-2 rounded-full">
              <FaClock className="text-lg text-pink-500" />
            </div>
            <span className="text-[15px] sm:text-[17px] ">24/7 Support</span>
          </div>
        </motion.div>
        {/* Buttons */}
        <motion.div
          className="flex flex-row sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start mt-7  sm:mt-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:duration-200  hover:bg-orange-600 transition-all cursor-pointer outline-none book-now hover:scale-105 hover:transition-transform"
          >
            Book Now
          </Link>
          <Link
            className="lg:hidden flex flex-row text-base sm:text-lg font-semibold bg-green-600 hover:bg-orange-600 text-white  rounded-lg transition cursor-pointe py-3 px-6 "
            onClick={handleCall}
          >
            <MdOutlinePhoneCallback className="mt-1 text-lg" />
            <span>call Now</span>
          </Link>
          <Link
            to="/blog"
            className="hidden lg:flex bg-sky-200 text-gray-900 px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-sky-300 transition-all cursor-pointer outline-none"
          >
            View Our Fleet
          </Link>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full lg:w-[50%] h-[500px] sm:h-[500px] md:h-[600px]  lg:h-[700px] flex justify-center items-center  overflow-hidden">
        {/* 🌈 Layered Circular Gradients */}
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Inner Circles */}

          <motion.div
            className="absolute sml:w-[250px] sml:h-[200px]  w-[200px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[330px] lg:h-[330px] xl:w-[400px] xl:h-[400px] 2xl:h-[450px] 2xl:w-[450px] rounded-full bg-gradient-to-tr from-orange-600 via-key-500 to-white blur-[1px]  cir-box"
            initial={{ opacity: 0, y: 40, rotate: 360 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <div className="absolute sml:w-[300px] sml:h-[300px]  w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[430px] lg:h-[430px] xl:w-[500px] xl:h-[500px] 2xl:h-[550px] 2xl:w-[550px] rounded-full bg-gradient-to-tr from-sky-100 via-sky-100 to-white  opacity-80 blur-[1px] cir-box"></div>
          <div className="absolute sml:w-[350px] sml:h-[350px]  w-[450px] h-[450px] sm:w-[500px] sm:h-[500px] md:w-[550px] md:h-[550px] lg:w-[530px] lg:h-[530px]  xl:w-[600px] xl:h-[600px] 2xl:h-[650px] 2xl:w-[650px] rounded-full bg-gradient-to-tr from-sky-100 via-sky-100 to-white  opacity-60 cir-box"></div>
        </div>

        <motion.img
          src={heroImage}
          alt="Traveler"
          className="absolute sml:w-[324px] sml:top-25 sm:w-[480px]  sm:top-5  md:top-15 lg:top-21 md:w-[515px] lg:w-[530px] xl:w-[600px] xl:top-25 z-4 lg:max-w-[550px] 2xl:w-[700px] 2xl:top-34 rounded-full  object-contain cursor-pointer"
          initial={{ opacity: 0, y: 40, rotate: 360 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* 📍 Kedarnath Card */}
        <motion.div
          className="absolute  z-10 bottom-10 sml:w-[140px] sml:bottom-3 sml:left-0 sml:rounded-2xl left-4  sm:left-2 sm:w-[180px]  md:left-10 lg:left-0 lg:bottom-3  fo:left-8 2xl:left-14 2xl:bottom-10 bg-white shadow-lg rounded-2xl p-3 w-[150px]  transform hover:scale-105 transition-all duration-300 kedarnath"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={Kedarnath_temple}
            alt="Kedarnath"
            className="w-full h-24 rounded-xl object-cover mb-2"
          />
          <h3 className="text-gray-800 sml:text-[14px] font-semibold text-sm">
            Kedarnath
          </h3>
          <p className="text-gray-500 sml:text-[12px] text-xs flex items-center gap-1">
            <FaMapMarkerAlt className="text-sky-500" /> Rudraprayag, Uttarakhand
          </p>
        </motion.div>

        {/* 🌄 Rishikesh Card */}
        <motion.div
          className="absolute sml:w-[140px] sml:top-10 sml:right-0  sml:rounded-2xl top-10  sm:top-4 right-4 sm:right-3  md:right-20 lg:right-5 lg:top-10 2xl:right-15 2xl:top-20 bg-white shadow-lg rounded-2xl p-3 w-[140px] sm:w-[160px] transform hover:scale-105 transition-all duration-300 rishikesh"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={rishikesh}
            alt="Mussoorie"
            className="w-full h-20 rounded-xl object-cover mb-2"
          />
          <h3 className="text-gray-800 font-semibold text-sm">Rishikesh</h3>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            <FaMapMarkerAlt className="text-sky-500" /> Dehradun, Uttarakhand
          </p>
        </motion.div>

        {/* 🛫 Doon Airport Tag */}
        <motion.div
          className="absolute sml:top-20 sml:right-55 top-6 sm:-top-2 sm:text-xl md:top-2 right-[45%] sm:right-[50%] md:right-[47%] lg:top-15 xl:top-6 2xl:top-0 bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2 z-20"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <FaPlaneDeparture className="text-sky-500" />
          <span className="sml:text-[12px] text-gray-700 text-sm font-medium">
            Doon Airport
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
