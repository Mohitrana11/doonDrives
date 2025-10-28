import React from "react";
import { FaCarSide } from "react-icons/fa";
import { motion } from "framer-motion";

const PopularRoutes = () => {
  const routes1 = [
    [
      "Dehradun to Mussoorie Taxi Service",
      "Dehradun to Rishikesh Cab Service",
      "Dehradun to Haridwar Taxi Service",
      "Dehradun to Chakrata Cab",
      "Dehradun to Dhanaulti Taxi Service",
      "Dehradun to Kanatal Taxi Service",
      "Dehradun to Tehri Dam Cab",
      "Dehradun to New Tehri Tour Package",
    ],
    [
      "Dehradun to Kedarnath Taxi Service",
      "Dehradun to Badrinath Taxi Service",
      "Dehradun to Gangotri Cab Service",
      "Dehradun to Yamunotri Taxi",
      "Dehradun to Uttarkashi Cab",
      "Dehradun to Rudraprayag Taxi",
      "Dehradun to Joshimath Cab",
      "Dehradun to Auli Taxi Service",
    ],
    [
      "Dehradun to Nainital Taxi Service",
      "Dehradun to Ranikhet Cab",
      "Dehradun to Almora Taxi",
      "Dehradun to Jim Corbett Taxi Service",
      "Dehradun to Lansdowne Cab",
      "Dehradun to Kotdwar Taxi",
      "Dehradun to Pauri Cab Service",
      "Dehradun to Srinagar Garhwal Taxi",
    ],
    [
      "Dehradun to Delhi Cab Service",
      "Dehradun to Gurgaon Taxi Service",
      "Dehradun to Noida Taxi",
      "Dehradun to Ghaziabad Cab",
      "Dehradun to Greater Noida Car Hire",
      "Dehradun to Faridabad Taxi Service",
      "Dehradun to Meerut Cab",
      "Dehradun to Muzaffarnagar Taxi",
    ],
    [
      "Dehradun to Saharanpur Cab Service",
      "Dehradun to Roorkee Taxi Service",
      "Dehradun to Panipat Taxi",
      "Dehradun to Karnal Cab",
      "Dehradun to Kurukshetra Taxi Service",
      "Dehradun to Ambala Cab",
      "Dehradun to Chandigarh Taxi Service",
      "Dehradun to Ludhiana Taxi",
    ],
    [
      "Delhi to Mussoorie Cab",
      "Delhi to Dehradun Taxi Service",
      "Delhi to Rishikesh Cab",
      "Delhi to Haridwar Taxi Service",
      "Delhi to Nainital Cab",
      "Delhi to Jim Corbett Taxi",
      "Delhi to Auli Taxi Service",
      "Delhi to Kedarnath Taxi",
    ],
    [
      "Delhi to Jaipur Taxi Service",
      "Delhi to Agra Taxi Service",
      "Delhi to Mathura Cab",
      "Delhi to Vrindavan Taxi",
      "Delhi to Lucknow Cab",
      "Delhi to Varanasi Taxi",
      "Delhi to Chandigarh Cab",
      "Delhi to Shimla Taxi Service",
    ],
    [
      "Chandigarh to Shimla Taxi Service",
      "Chandigarh to Manali Cab",
      "Chandigarh to Kasauli Taxi",
      "Chandigarh to Dharamshala Cab",
      "Chandigarh to Dalhousie Taxi Service",
      "Jaipur to Agra Taxi",
      "Jaipur to Delhi Cab Service",
      "Jaipur to Ajmer Taxi Service",
    ],
    [
      "Dehradun Airport (Jolly Grant) to Rishikesh Taxi",
      "Dehradun Airport to Haridwar Cab Service",
      "Dehradun Airport to Mussoorie Taxi",
      "Dehradun Airport to Dehradun City Drop",
      "Dehradun Airport to Chakrata Cab",
      "Dehradun Airport to Dhanaulti Taxi Service",
      "Taxi from Jolly Grant Airport to Tehri Dam",
      "Jolly Grant Airport Pickup & Drop Service",
    ],
    [
      "Delhi Airport (IGI) to Dehradun Cab Service",
      "Delhi Airport to Rishikesh Taxi",
      "Delhi Airport to Haridwar Cab",
      "Delhi Airport to Mussoorie Taxi Service",
      "Delhi Airport to Meerut Cab Service",
      "Delhi Airport to Noida / Greater Noida Taxi",
      "Delhi Airport to Gurgaon Cab",
      "Delhi Airport to Chandigarh Taxi Service",
    ],

    [
      "Garhwal Taxi Service",
      "Kumaon Taxi Service",
      "Local Dehradun City Cab",
      "Outstation Taxi Service",
      "Airport Pickup & Drop (Jolly Grant)",
      "One Way Cab Service",
      "Round Trip Taxi Booking",
      "Tour Packages from Dehradun",
    ],
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white py-16 px-[4%] ">
      {/* Title Section */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <FaCarSide className="text-blue-600" /> Most Popular Routes
        </motion.h1>
        <div className="w-20 h-[3px] bg-blue-500 mx-auto rounded-full"></div>
        <motion.p
          className="text-gray-500 mt-3 text-sm md:text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Explore the most traveled taxi routes for a smooth and reliable ride.
        </motion.p>
      </div>

      {/* First Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {routes1.map((col, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
          >
            {col.map((route, i) => (
              <a
                key={i}
                href="#"
                className="text-blue-700 hover:text-blue-900 transition-all text-sm md:text-base border-l-4 border-transparent hover:border-blue-500 pl-2"
              >
                {route}
              </a>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;
