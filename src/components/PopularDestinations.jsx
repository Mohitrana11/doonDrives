import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/componentCSS/contactUs.css";
import Haridwar from "../assets/locations/Haridwa.jpeg";
import Kedarnath from "../assets/locations/Kedarnath.jpg";
import Mussoorie from "../assets/locations/Mussoori.webp";
import Nainital from "../assets/locations/Nainita.webp";
import National_Park from "../assets/locations/National_Park.webp";
import Ranikhet from "../assets/locations/Ranikhet.webp";
import Rishikesh from "../assets/locations/Rishikesh.webp";
import Robber_Cave from "../assets/locations/Robber_Cave.jpg";
import Tungnath from "../assets/locations/Tungnath.webp";
import Valley_of_Flowers from "../assets/locations/Valley_of_Flower.jpeg";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Seo from "./Seo";
import { fadeUp } from "../utils/Animation";

const destinations = [
  {
    location: "Uttarakhand",
    title: "Char Dham Yatra - Badrinath, Kedarnath, Gangotri & Yamunotri",
    duration: "10 Days",
    description:
      "A spiritual journey through the sacred shrines of Uttarakhand. Feel the divine energy of the Himalayas while exploring India’s most holy temples.",
    image: Kedarnath,
  },
  {
    location: "Mussoorie, Uttarakhand",
    title: "Mussoorie Hill Station Getaway",
    duration: "2 Days",
    description:
      "Escape to the 'Queen of Hills' — enjoy misty mornings, mall road walks, and breathtaking views from Gun Hill Point.",
    image: Mussoorie,
  },
  {
    location: "Nainital, Uttarakhand",
    title: "Nainital Lake & Hillside Tour",
    duration: "3 Days",
    description:
      "Sail through the calm Naini Lake, visit snow viewpoint, and experience the charming hill vibes of Kumaon.",
    image: Nainital,
  },
  {
    location: "Rishikesh, Uttarakhand",
    title: "Adventure & Yoga Retreat in Rishikesh",
    duration: "3 Days",
    description:
      "Feel the thrill of river rafting and the peace of yoga by the holy Ganges — Rishikesh blends spirituality with adventure.",
    image: Rishikesh,
  },
  {
    location: "Jim Corbett, Uttarakhand",
    title: "Jim Corbett National Park Safari",
    duration: "2 Days",
    description:
      "Step into the wild! Spot tigers, elephants, and the lush beauty of India’s oldest national park.",
    image: National_Park,
  },
  {
    location: "Ranikhet, Uttarakhand",
    title: "Ranikhet Nature Escape",
    duration: "3 Days",
    description:
      "Experience serenity in this quiet Himalayan town surrounded by pine forests, temples, and stunning mountain views.",
    image: Ranikhet,
  },
  {
    location: "Haridwar, Uttarakhand",
    title: "Spiritual Tour of Haridwar & Ganga Aarti",
    duration: "1 Day",
    description:
      "Witness the divine Ganga Aarti at Har Ki Pauri — a mesmerizing blend of light, chants, and devotion.",
    image: Haridwar,
  },
  {
    location: "Valley of Flowers, Uttarakhand",
    title: "Trek to Valley of Flowers & Hemkund Sahib",
    duration: "6 Days",
    description:
      "Walk through vibrant alpine meadows in one of India’s most beautiful UNESCO World Heritage sites.",
    image: Valley_of_Flowers,
  },
  {
    location: "Dehradun, Uttarakhand",
    title: "Weekend in Dehradun & Robber’s Cave",
    duration: "2 Days",
    description:
      "Discover Dehradun’s charm — Robber’s Cave, Mindrolling Monastery, and local cafés surrounded by hills.",
    image: Robber_Cave,
  },
  {
    location: "Chopta, Uttarakhand",
    title: "Chopta Tungnath Trek",
    duration: "3 Days",
    description:
      "Known as the 'Mini Switzerland of India', Chopta offers breathtaking Himalayan views and the ancient Tungnath Temple trek.",
    image: Tungnath,
  },
];

const PopularDestinations = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const scrollAmount = dir === "left" ? -350 : 350;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <Seo
        title="Top Travel Destinations from Dehradun | Mussoorie, Rishikesh, Haridwar & More | Dun Drive"
        content="Discover the best tourist destinations from Dehradun with Dun Drive. Enjoy comfortable cab rides to Mussoorie, Rishikesh, Haridwar, Chakrata, and other scenic spots across Uttarakhand. Our drivers ensure safe and enjoyable travel experiences at affordable rates."
        keyword="Dehradun to Mussoorie taxi, Dehradun to Rishikesh cab, Dehradun to Haridwar taxi, Dehradun sightseeing, tourist places near Dehradun, Uttarakhand travel cab, dun hill station taxi, weekend trip from Dehradun, Dehradun to Chakrata taxi, Dehradun tourism travel"
      />

      <div className="w-full bg-white px-[4%]  relative">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp()}
        >
          Popular Destinations
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg mb-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp()}
        >
          Vacations to make your experience enjoyable in India!
        </motion.p>

        {/* Buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
        >
          <FaArrowRight />
        </button>

        {/* Scrollable Destination Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 scroll-smooth scrollbar-hide  snap-x snap-mandatory  scrolling-remove scrollbar-hide py-4 px-2 "
        >
          {destinations.map((item, i) => (
            <div
              animate={{
                scale: 2,
                transition: { duration: 2 },
              }}
              key={i}
              className="min-w-[260px] md:min-w-[300px] bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 snap-center flex-shrink-0 hover:scale-105 max-w-[350px]"
            >
              <img
                fetchpriority="high"
                decoding="async"
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="w-full  h-48 object-cover rounded-t-2xl"
                onClick={handleClick}
              />
              <div className="p-4 relative ">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <span>{item.location}</span>
                </div>
                <h3
                  onClick={handleClick}
                  className="text-lg font-semibold text-gray-800 mb-1"
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{item.duration}</p>
                <p className="text-blue-500  text-md bottom-2.5">
                  {expandedIndex === i
                    ? item.description
                    : `${item.description.slice(0, 50)}...`}
                </p>{" "}
                <button
                  onClick={() => toggleReadMore(i)}
                  className="absolute right-3 bottom-2 text-gray-500 cursor-pointer text-sm font-medium  hover:underline focus:outline-none"
                >
                  {expandedIndex === i ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center text-gray-400 text-sm mt-6 md:hidden">
          ← Swipe to explore →
        </p>
      </div>
    </>
  );
};

export default PopularDestinations;
