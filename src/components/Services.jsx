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

  const reasons = [
    {
      icon: <FaClock className="text-blue-500 text-3xl" />,
      title: "On-Time Service",
      desc: "Punctual pickup and drop-off guaranteed.",
    },
    {
      icon: <FaShieldAlt className="text-indigo-500 text-3xl" />,
      title: "Fully Insured",
      desc: "Complete insurance coverage for peace of mind.",
    },
    {
      icon: <FaUserTie className="text-blue-600 text-3xl" />,
      title: "Professional Drivers",
      desc: "Experienced, courteous, and licensed drivers.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen px-[4%]">
      {/* Premium Services Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 md:mb-25">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Our Premium Services
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl text-[17px] mx-auto">
          From airport transfers to special events, we provide reliable and
          luxurious transportation solutions for every occasion.
        </p>

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

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We go above and beyond to ensure your travel experience is safe,
          comfortable, and memorable.
        </p>

        {/* Reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((r, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow hover:shadow-md text-center transition-all duration-300"
            >
              <div className="flex justify-center mb-4 bg-blue-100 rounded-lg  p-2 w-10 m-auto ">
                {r.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 mt-2 text-[18px] my-2">
                {r.title}
              </h3>
              <p className="text-gray-600 text-sm text-[16px]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
