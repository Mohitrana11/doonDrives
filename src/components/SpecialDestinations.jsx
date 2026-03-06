import React from "react";

const destinations = [
  {
    city: "Dehradun",
    places: [
      "Robber's Cave",
      "Sahastradhara",
      "Forest Research Institute",
      "Tapkeshwar Temple",
      "Mindrolling Monastery",
    ],
  },
  {
    city: "Rishikesh",
    places: [
      "Laxman Jhula",
      "Ram Jhula",
      "Triveni Ghat",
      "Neelkanth Mahadev Temple",
      "River Rafting",
    ],
  },
  {
    city: "Haridwar",
    places: [
      "Har Ki Pauri",
      "Mansa Devi Temple",
      "Chandi Devi Temple",
      "Ganga Aarti",
      "Bharat Mata Mandir",
    ],
  },
  {
    city: "Delhi",
    places: [
      "India Gate",
      "Red Fort",
      "Qutub Minar",
      "Lotus Temple",
      "Akshardham Temple",
    ],
  },
];

const SpecialDestinations = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Page Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800">
          Special Destinations
        </h1>
        <p className="text-gray-600 mt-3">
          Popular locations you can visit with our driving services
        </p>
      </div>

      {/* Destination Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {item.city}
            </h2>

            <ul className="space-y-2 text-gray-600">
              {item.places.map((place, i) => (
                <li key={i} className="flex items-center gap-2">
                  📍 {place}
                </li>
              ))}
            </ul>

            <button className="mt-5 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Book Trip
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialDestinations;
