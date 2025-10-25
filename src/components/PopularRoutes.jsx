import React from "react";
import { FaCarSide } from "react-icons/fa";

const PopularRoutes = () => {
  const routes1 = [
    [
      "Dehradun to Mussoorie Taxi Service",
      "Chandigarh to Shimla Taxi Service",
      "Chandigarh to Manali Taxi Service",
      "Delhi to Shimla Taxi Service",
    ],
    [
      "Delhi to Agra Taxi Service",
      "Delhi to Jaipur Taxi Service",
      "Delhi to Manali Taxi Service",
      "Delhi to Haridwar Taxi Service",
    ],
    [
      "Delhi to Chandigarh Taxi Service",
      "Jaipur to Ajmer Taxi Service",
      "Jaipur to Agra Taxi Service",
      "Jaipur to Delhi Taxi Service",
    ],
    [
      "Dehradun to Delhi Cab Service",
      "Taxi from Dehradun to Kedarnath",
      "Dehradun to Pauri Tour Package",
      "Dehradun to Haridwar cabs",
    ],
    [
      "Dehradun to Saharanpur Cab",
      "Dehradun to Rishikesh Taxi Service",
      "Dehradun to Yamunotri cabs",
      "Delhi to Roorkee Taxi Fare",
    ],
    [
      "Delhi to Greater Noida Car Hire",
      "Dehradun to Mussoorie",
      "Delhi to Rishikesh cab",
      "Cab Service From Dehradun to Gurgaon",
    ],
    [
      "Delhi to Mussoorie Cab",
      "Delhi to Shimla Taxi Service",
      "Delhi to Saharanpur Taxi",
      "Dehradun to Shimla Taxi Service",
    ],
    [
      "Garhwal Taxi Service",
      "Doon Cab Service",
      "Local Cab Service",
      "Outstation Taxi",
    ],
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white py-16 px-[4%] ">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <FaCarSide className="text-blue-600" /> Most Popular Routes
        </h1>
        <div className="w-20 h-[3px] bg-blue-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Explore the most traveled taxi routes for a smooth and reliable ride.
        </p>
      </div>

      {/* First Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {routes1.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            {col.map((route, i) => (
              <a
                key={i}
                href="#"
                className="text-blue-700 hover:text-blue-900 transition-all text-sm md:text-base border-l-4 border-transparent hover:border-blue-500 pl-2"
              >
                {route}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;
