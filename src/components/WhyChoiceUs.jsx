import React from "react";
import { FaPlaneDeparture, FaHotel, FaSuitcaseRolling } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaPlaneDeparture className="text-sky-500 text-2xl" />,
      title: "Outstation Trips",
      desc: "Airport Transfers",
      active: true,
    },
    {
      icon: <FaHotel className="text-sky-500 text-2xl" />,
      title: "City Rides",
      desc: "Comfortable and quick transportation within the city.",
      active: false,
    },
    {
      icon: <FaSuitcaseRolling className="text-sky-500 text-2xl" />,
      title: "Packaged Tour",
      desc: "Hassle-free pickups and drop-offs at the airport.",
      active: false,
    },
  ];

  // Dehradun coordinates
  const dehradunPosition = [30.3165, 78.0322];

  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-[4%] py-0 md:py-5 gap-10">
      <div className="hidden w-full lg:w-[45%] lg:flex flex-col items-center gap-6">
        {/* 🗺️ Map Section */}
        <div className=" relative z-2 w-[400px] h-[380px] max-w-[500px] max-h-[400px] rounded-3xl overflow-hidden shadow-md">
          <MapContainer
            center={dehradunPosition}
            zoom={12}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={dehradunPosition}>
              <Popup>
                📍 <b>Our Location:</b> Dehradun, Uttarakhand
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-[50%] text-center lg:text-left">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base sm:text-lg mb-10 max-w-md mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Enjoy different experiences in every place you visit and discover new
          and affordable adventures of course.
        </motion.p>

        {/* Feature Cards */}
        <div className="flex flex-col gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md ${
                item.active
                  ? "bg-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.1)] scale-[1.02]"
                  : "bg-white"
              }`}
            >
              <div className="p-3 bg-sky-100 rounded-xl">{item.icon}</div>
              <div className="text-left">
                <h3
                  className={`font-semibold text-lg ${
                    item.active ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
