import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/Animation";
const Footer = () => {
  return (
    <motion.footer
      className="bg-[#111827] text-gray-300 py-10 md:px-16 lg:px-24 px-[4%]"
      initial="hidden"
      whileInView="visible"
      variants={fadeUp()}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        {/* Column 1 */}
        <div>
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-white mb-3"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Dun <span>Drives</span>
          </motion.h2>
          <motion.p
            className="text-[18x] leading-6 mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Premium car rental and travel services with a commitment to luxury,
            reliability, and exceptional customer experience.
          </motion.p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-3 ">
              <span className="text-green-400 mb-2">🚗</span> Premium Fleet
            </li>
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-400">✅</span> Fully Insured
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">⏰</span> 24/7 Service
            </li>
          </ul>
          <motion.h3
            className="text-white mt-6 mb-3 font-medium"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Follow Us
          </motion.h3>
          <div className="flex space-x-4 text-xl ">
            <a
              href="https://www.facebook.com/profile.php?id=61583173851415&sfnsn=wa"
              className="hover:text-blue-500 transition-colors duration-200 mr-2 "
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-sky-400 transition-colors duration-200 mr-2"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/dundrive/"
              className="hover:text-pink-500 transition-colors duration-200 mr-2"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <motion.h3
            className="text-white font-semibold text-lg mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Our Services
          </motion.h3>
          <ul className="space-y-7 text-[16px] ">
            <li>Airport Transfers</li>
            <li>Corporate Travel</li>
            <li>Special Events</li>
            <li>Group Travel</li>
            <li>Daily/Weekly Rentals</li>
            <li>City Tours</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="hidden sm:flex sm:flex-col">
          <motion.h3
            className=" text-white font-semibold text-lg mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Quick Links
          </motion.h3>
          <ul className="space-y-2 text-[17px]">
            <li>Home</li>
            <li>Our Fleet</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <motion.h3
            className="text-white font-semibold text-lg mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Contact Information
          </motion.h3>
          <ul className="space-y-4 text-[17px]">
            <li className="flex items-start gap-3 mb-5">
              <MdPhone className="text-xl text-blue-400 mt-0.5" />
              <div>
                <p className="font-medium text-white">24/7 Booking Hotline</p>
                <p>91+ 8279317136</p>
              </div>
            </li>
            <li className="flex items-start gap-3 mb-5">
              <MdEmail className="text-xl text-green-400 mt-0.5" />
              <div>
                <p className="font-medium text-white">Email Us</p>
                <p>Deivedun@gmail.com</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-xl text-purple-400 mt-0.5" />
              <div>
                <span>
                  near IT Park, Kasturi Nagar,
                  <br /> Danda Lakhond, Dehradun.
                </span>
              </div>
            </li>
          </ul>

          <motion.div
            className="bg-red-900/40 border border-red-500 rounded-md mt-6 p-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            <p className="font-semibold text-red-400 mb-1">Emergency Support</p>
            <p className="text-sm text-gray-300 mb-1">
              Available 24/7 for urgent assistance
            </p>
            <p className="text-white font-semibold">91+ 7617651437</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 mt-6">
        <p>
          © 2025 dun drive. All rights reserved. | Licensed & Insured
          Transportation Service
        </p>
        <p className="mt-2">
          Serving the Greater Metropolitan Area — License #uttrakhand
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
