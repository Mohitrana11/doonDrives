import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/componentCSS/contactUs.css";

const destinations = [
  {
    location: "Manggarai Barat",
    title: "Flores Road Trip 3D2N",
    duration: "3 Days",
    price: "Rp 6.705.000 /orang",
    image:
      "https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg",
  },
  {
    location: "Bogor",
    title: "Forrester Glamping Co Bogor",
    duration: "1 Day",
    price: "Rp 1.205.000 /malam",
    image:
      "https://images.unsplash.com/photo-1602407294553-2b5dff2d1cc0?auto=format&fit=crop&w=800&q=80",
  },
  {
    location: "Jakarta",
    title: "Paket Tiket Pesawat Jakarta Bali",
    duration: "3 Days",
    price: "Rp 605.000 /person",
    image:
      "https://images.unsplash.com/photo-1549887534-3db1bd59dcca?auto=format&fit=crop&w=800&q=80",
  },
  {
    location: "Kota Semarang",
    title: "Desa Wisata Kandri",
    duration: "14 Days",
    price: "Rp 1.400.000 /person",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    location: "Lombok",
    title: "Lombok Beach Adventure",
    duration: "5 Days",
    price: "Rp 4.250.000 /person",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  },
  {
    location: "Bali",
    title: "Ubud Cultural Experience",
    duration: "2 Days",
    price: "Rp 2.000.000 /person",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  },
];

const PopularDestinations = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const scrollAmount = dir === "left" ? -350 : 350;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white px-[4%] py-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Popular Destinations
      </h2>
      <p className="text-gray-600 text-lg mb-10">
        Vacations to make your experience enjoyable in Indonesia!
      </p>

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
        className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide  snap-x snap-mandatory  scrolling-remove scrollbar-hide py-4 px-2"
      >
        {destinations.map((item, i) => (
          <div
            key={i}
            className="min-w-[260px] md:min-w-[300px] bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 snap-center flex-shrink-0 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>{item.location}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{item.duration}</p>
              <p className="text-blue-500 font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile swipe hint */}
      <p className="text-center text-gray-400 text-sm mt-6 md:hidden">
        ← Swipe to explore →
      </p>
    </div>
  );
};

export default PopularDestinations;
