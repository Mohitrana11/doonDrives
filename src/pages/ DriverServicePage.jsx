import React from "react";
import { FaCarSide, FaUserTie, FaHeart, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/shadow.css";
import wedding_Car from "../assets/cars/wedding_Car.jpg";
import artika from "../assets/cars/artika.webp";

const DriverServicePage = () => {
  return (
    <div className="w-full mt-[90px] min-h-screen bg-gray-50 py-10 px-[4%]">
      {/* Header Section */}
      <section className="text-center mb-10">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Driver & Wedding Car Services
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Whether it’s your special day or you need a trusted driver for your
          vehicle, we’ve got you chtml overed. dun Drives provides reliable,
          experienced, and verified drivers to make your journey smooth and
          stress-free.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Wedding Car Service */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center text-center book-now ">
          <FaHeart className="text-pink-500 text-5xl mb-4" />
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Wedding Car Services
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            Make your wedding day more special with our beautifully decorated
            cars and professional drivers. From Dehradun to Mussoorie or
            anywhere in Uttarakhand — we ensure luxury, comfort, and punctuality
            on your big day.
          </motion.p>
          <motion.img
            src={wedding_Car}
            alt="Wedding Car"
            className="w-full h-52 object-cover rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          />
        </div>

        {/* Professional Drivers Section */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center text-center">
          <FaUserTie className="text-blue-600 text-5xl mb-4" />
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hire Professional Drivers
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Need someone to drive your car while you relax? Our experienced
            drivers are available for part-time, full-day, and outstation trips.
            Ideal for families, corporate travel, and personal errands.
          </motion.p>
          <motion.img
            src={artika}
            alt="Professional Driver"
            className="w-full h-52 object-cover rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 rounded-2xl py-10 px-6 md:px-12 text-center mb-10">
        <motion.h2
          className="text-2xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose dun Drives?
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-700">
          <div className="flex flex-col item-center justify-center text-[18px] bg-gray-50   p-4  h-[150px]  rounded-xl shadow">
            <FaCarSide className="text-blue-500 text-3xl mb-2 mx-auto" />
            <p>Safe & Comfortable Rides</p>
          </div>
          <div className="flex flex-col item-center justify-center text-[18px] bg-gray-50  p-4  h-[150px]  rounded-xl shadow">
            <FaUserTie className="text-blue-500 text-3xl mb-2 mx-auto" />
            <p>Verified Professional Drivers</p>
          </div>
          <div className="flex flex-col item-center justify-center text-[18px] bg-gray-50  p-4  h-[150px]  rounded-xl shadow">
            <FaHeart className="text-blue-500 text-3xl mb-2 mx-auto" />
            <p>Special Wedding Arrangements</p>
          </div>
          <div className="flex flex-col item-center justify-center text-[18px] bg-gray-50  p-4  h-[150px]  rounded-xl shadow">
            <FaPhoneAlt className="text-blue-500 text-3xl mb-2 mx-auto" />
            <p>24/7 Customer Support</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <motion.h3
          className="text-2xl font-semibold text-gray-800 mb-3"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Book Your Ride?
        </motion.h3>
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          Call us today and let our team help you plan your next ride with
          comfort and professionalism.
        </motion.p>
        <a
          href="tel:+91-8279317136"
          className="bg-green-600 text-white text-[17px] font-bold px-6 py-3 rounded-full shadow hover:bg-green-700 transition-all"
        >
          📞 Call Now
        </a>
      </section>
    </div>
  );
};

export default DriverServicePage;
