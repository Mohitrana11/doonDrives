import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer
      className="bg-[#111827] text-gray-300 py-10 md:px-16 lg:px-24 px-[4%]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        {/* Column 1 */}
        <div>
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-white mb-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Dun <span>Drives</span>
          </motion.h2>
          <motion.p
            className="text-[18x] leading-6 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Premium car rental and travel services with a commitment to luxury,
            reliability, and exceptional customer experience.
          </motion.p>
          <ul className="space-y-2 text-sm">
            <motion.li
              className="flex items-center gap-3 "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-green-400 mb-2">🚗</span> Premium Fleet
            </motion.li>
            <motion.li
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-green-400">✅</span> Fully Insured
            </motion.li>
            <motion.li
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-green-400">⏰</span> 24/7 Service
            </motion.li>
          </ul>
          <motion.h3
            className="text-white mt-6 mb-3 font-medium"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h3>
          <ul className="space-y-7 text-[16px] ">
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Airport Transfers
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Corporate Travel
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              Special Events
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Group Travel
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
            >
              Daily/Weekly Rentals
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              City Tours
            </motion.li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="hidden sm:flex sm:flex-col">
          <motion.h3
            className=" text-white font-semibold text-lg mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Quick Links
          </motion.h3>
          <ul className="space-y-2 text-[17px]">
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Home
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our Fleet
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Testimonials
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              Contact Us
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
            >
              Privacy Policy
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
            >
              Terms of Service
            </motion.li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <motion.h3
            className="text-white font-semibold text-lg mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Contact Information
          </motion.h3>
          <ul className="space-y-4 text-[17px]">
            <motion.li
              className="flex items-start gap-3 mb-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MdPhone className="text-xl text-blue-400 mt-0.5" />
              <div>
                <p className="font-medium text-white">24/7 Booking Hotline</p>
                <p>91+ 8279317136</p>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start gap-3 mb-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <MdEmail className="text-xl text-green-400 mt-0.5" />
              <div>
                <p className="font-medium text-white">Email Us</p>
                <p>Deivedun@gmail.com</p>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
            >
              <MdLocationOn className="text-xl text-purple-400 mt-0.5" />
              <div>
                <p className="font-medium text-white">Visit Us</p>
                <p>123 Business District</p>
                <p>Downtown, City 12345</p>
              </div>
            </motion.li>
          </ul>

          <motion.div
            className="bg-red-900/40 border border-red-500 rounded-md mt-6 p-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="font-semibold text-red-400 mb-1">Emergency Support</p>
            <p className="text-sm text-gray-300 mb-1">
              Available 24/7 for urgent assistance
            </p>
            <p className="text-white font-semibold">91+ 8279317136</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 mt-6">
        <p>
          © 2025 Dun Drives. All rights reserved. | Licensed & Insured
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
