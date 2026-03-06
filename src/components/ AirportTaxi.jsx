import React from "react";
import { Link } from "react-router-dom";

const routes = [
  { from: "Dehradun Airport", to: "Dehradun City", distance: "30 km" },
  { from: "Dehradun Airport", to: "Rishikesh", distance: "20 km" },
  { from: "Dehradun Airport", to: "Haridwar", distance: "40 km" },
  { from: "Dehradun Airport", to: "Mussoorie", distance: "60 km" },
];

const AirportTaxi = () => {
  const phoneNumber = "+918279317136";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Dehradun Airport Taxi Service
        </h1>
        <p className="text-gray-600 mt-3">
          Reliable airport pickup and drop service from Jolly Grant Airport
        </p>
      </div>

      {/* Service Features */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">✈️ Airport Pickup</h3>
          <p className="text-gray-600">
            Professional drivers waiting for you at the airport arrival gate.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">🚗 Comfortable Cars</h3>
          <p className="text-gray-600">
            Clean and well-maintained vehicles for safe travel.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">⏰ 24/7 Service</h3>
          <p className="text-gray-600">
            Available anytime for late night or early morning flights.
          </p>
        </div>
      </div>

      {/* Popular Routes */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Popular Airport Routes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">
                {route.from} → {route.to}
              </h3>
              <p className="text-gray-600 mt-2 mb-5">
                Distance: {route.distance}
              </p>

              <Link
                to={"/contact"}
                className="mt-4 bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-800"
                onClick={handleCall}
              >
                Call Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirportTaxi;
