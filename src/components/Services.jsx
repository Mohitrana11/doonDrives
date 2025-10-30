import React from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaHeart,
  FaUsers,
  FaCalendarAlt,
  FaPlaneDeparture,
  FaClock,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeUp } from "../utils/Animation";

const ServicesPage = () => {
  const services = [
    {
      icon: <FaMapMarkerAlt className="text-blue-500 text-3xl" />,
      title: "Airport Transfers",
      desc: "Comfortable and timely airport pickup and drop-off services with flight tracking.",
    },
    {
      icon: <FaBriefcase className="text-green-500 text-3xl" />,
      title: "Corporate Travel",
      desc: "Professional transportation solutions for business meetings and corporate events.",
    },
    {
      icon: <FaHeart className="text-red-500 text-3xl" />,
      title: "Special Occasions",
      desc: "Make your wedding, anniversary, or special event memorable with our luxury vehicles.",
    },
    {
      icon: <FaUsers className="text-purple-500 text-3xl" />,
      title: "Group Travel",
      desc: "Spacious vehicles perfect for family trips, group outings, and team travels.",
    },
    {
      icon: <FaCalendarAlt className="text-orange-400 text-3xl" />,
      title: "Daily/Weekly Rentals",
      desc: "Flexible rental options for short-term and extended travel needs.",
    },
    {
      icon: <FaPlaneDeparture className="text-indigo-500 text-3xl" />,
      title: "City Tours",
      desc: "Explore the city in comfort with our guided tour packages and local expertise.",
    },
  ];

  return (
    <div className="w-full h-full my-20   px-[4%]">
      {/* Premium Services Section */}
      <section className="px-6 lg:px-20 ">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-3"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp()}
        >
          Our Premium Services
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mb-10 max-w-2xl text-[17px] mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp()}
        >
          From airport transfers to special events, we provide reliable and
          luxurious transportation solutions for every occasion.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {services.map((s, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 max-w-[400px] "
            >
              <div className="flex bg-blue-100 rounded-lg  p-2 w-10  justify-start mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-start mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 text-start text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
