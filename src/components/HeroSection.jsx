import React from "react";
import {
  FaCarSide,
  FaClock,
  FaMapMarkerAlt,
  FaPlaneDeparture,
} from "react-icons/fa";
import heroImage from "../assets/heroImage.png";
const HeroSection = () => {
  return (
    <section className="w-full h-full  relative flex flex-col flex-wrap lg:flex-row items-center justify-between px-[4%] py-12 mt-10 sm:mt-4 lg:py-20 overflow-hidden bg-gray-110">
      {/* Left Content */}
      <div className="w-full h-full lg:w-[50%] text-center lg:text-left mb-10 xm:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight text-gray-900 mb-4">
          India’s Most Trusted <br /> Taxi Service
        </h1>
        <p className="text-gray-600  text-[17px] sm:text-lg mb-8">
          Your Road Trip Partner – Safe, Affordable & Comfortable Rides Across
          India.
        </p>

        {/* Small icons */}
        <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start sm:mb-4 ">
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
            <span className="text-[15px] sm:text-[17px]">24/7 Support</span>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-row sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start mt-7  sm:mt-15">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:duration-200  hover:bg-orange-600 transition-all cursor-pointer outline-none">
            Book Now
          </button>
          <button className="bg-sky-200 text-gray-900 px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-sky-300 transition-all cursor-pointer outline-none">
            View Our Fleet
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full lg:w-[50%] h-[500px] sm:h-[500px] md:h-[600px]  lg:h-[700px] flex justify-center items-center mb-10 lg:mb-0 overflow-hidden">
        {/* 🌈 Layered Circular Gradients */}
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Inner Circles */}
          <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-tr from-sky-500 via-sky-300 to-white blur-[1px]"></div>
          <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tr from-sky-100 via-sky-100 to-white  opacity-80 blur-[2px]"></div>
          <div className="absolute w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-tr from-sky-100 via-sky-100 to-white  opacity-60 "></div>
        </div>

        {/* <img
          src={heroImage}
          alt="Traveler"
          className="absolute top-0 z-10 w-[60%] sm:w-[55%] md:w-[50%] lg:w-[50%] h-[500px] scale-150 max-w-[420px]  object-contain cursor-pointer"
        /> */}

        {/* 📍 Kedarnath Card */}
        <div className="absolute  bottom-10  left-4 sm:left-8 md:left-25 lg:left-8 bg-white shadow-lg rounded-2xl p-3 w-[150px] sm:w-[180px] transform hover:scale-105 transition-all duration-300">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Kedarnath_Temple%2C_Uttarakhand.jpg"
            alt="Kedarnath"
            className="w-full h-24 rounded-xl object-cover mb-2"
          />
          <h3 className="text-gray-800 font-semibold text-sm">Kedarnath</h3>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            <FaMapMarkerAlt className="text-sky-500" /> Rudraprayag, Uttarakhand
          </p>
        </div>

        {/* 🌄 Mussoorie Card */}
        <div className="absolute top-20 right-4 sm:right-10 md:right-15 lg:right-10 bg-white shadow-lg rounded-2xl p-3 w-[140px] sm:w-[160px] transform hover:scale-105 transition-all duration-300">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Mussoorie_Hills.jpg"
            alt="Mussoorie"
            className="w-full h-20 rounded-xl object-cover mb-2"
          />
          <h3 className="text-gray-800 font-semibold text-sm">Mussoorie</h3>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            <FaMapMarkerAlt className="text-sky-500" /> Dehradun, Uttarakhand
          </p>
        </div>

        {/* 🛫 Doon Airport Tag */}
        <div className="absolute top-6 md:top-2 lg:top-5 right-[45%] sm:right-[50%] md:right-[47%] bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2 z-20">
          <FaPlaneDeparture className="text-sky-500" />
          <span className="text-gray-700 text-sm font-medium">
            Doon Airport
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
