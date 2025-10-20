import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import "../styles/componentCSS/contactUs.css";

const ContactPage = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center py-12  bg-gray-50 px-[4%]">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Book Your Premium Ride
        </h1>
        <p className="text-gray-800 text-[17px] mt-3 px-4 text-sm md:text-base max-w-2xl mx-auto">
          Ready to experience luxury travel? Get in touch with us today to book
          your premium car rental or get a custom quote for your specific needs.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Form */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl book-my-ride">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
            Request a Quote
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <input
              type="text"
              placeholder="Full Name *"
              className="border-none rounded-lg bg-blue-50 text-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="border-none rounded-lg bg-blue-50 text-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number *"
              className="border-none rounded-lg bg-blue-50 text-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <select className="border-none rounded-lg bg-blue-50 text-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Select Service Type *</option>
              <option>Airport Transfer</option>
              <option>Corporate Travel</option>
              <option>Wedding Ride</option>
              <option>Luxury Rental</option>
            </select>

            <input
              type="date"
              className="border-none rounded-lg bg-blue-50 text-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="time"
              className="border-none rounded-lg bg-blue-50 text-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Pickup Location *"
              className="border-none rounded-lg bg-blue-50 text-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Drop-off Location *"
              className="border-none rounded-lg bg-blue-50 text-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <select className="border-none rounded-lg bg-blue-50 text-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Number of Passengers</option>
              <option>1</option>
              <option>2</option>
              <option>4</option>
              <option>5</option>
              <option>6+</option>
            </select>
            <select className="border-none rounded-lg bg-blue-50 text-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Preferred Vehicle</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Luxury</option>
            </select>

            <textarea
              rows="3"
              placeholder="Special Requests or Additional Information"
              className="md:col-span-2 border-none rounded-lg bg-blue-50 text-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-black text-white py-3 rounded-lg text-lg transition cursor-pointer booking-button"
            >
              Request Quote & Booking
            </button>
          </form>

          <p className="text-gray-500 text-center mt-4 text-[16px]">
            We’ll respond within 30 minutes
          </p>
        </div>

        {/* Right Side: Contact Info */}
        <div className="space-y-6 ">
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            <div className="flex items-center gap-3 text-gray-700 mb-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 mb-2">
              <FaEnvelope className="text-green-500" />
              <span>booking@travelcarpro.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 mb-2">
              <FaMapMarkerAlt className="text-purple-500" />
              <span>
                123 Business District <br />
                Downtown, City 12345
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaClock className="text-orange-500" />
              <span>24/7 Service Available</span>
            </div>
          </div>

          {/* Urgent Call Section */}
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg space-y-3 mb-4">
            <h3 className="text-lg font-semibold">
              Need Immediate Assistance?
            </h3>
            <p className="text-[14x] leading-relaxed ">
              Call us directly for urgent bookings or last-minute requests. Our
              team is available 24/7 to assist you.
            </p>
            <button className="bg-white mt-3 cursor-pointer border-none overflow-hidden text-blue-700 font-semibold py-2 px-4 rounded-[10px] hover:bg-gray-100 transition">
              Call Now: +1 (555) 123-4567
            </button>
          </div>

          {/* Service Features */}
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Service Features
            </h3>
            <ul className="text-gray-700 text-[17px] space-y-1 ">
              <li>• Advance & Last-minute Booking</li>
              <li>• Premium Vehicle Fleet</li>
              <li>• Professional Chauffeurs</li>
              <li>• Punctual Service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
