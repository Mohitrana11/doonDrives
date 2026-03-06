import React from "react";

const services = [
  {
    id: 1,
    name: "Dun Drive",
    description:
      "Premium driver services in Dehradun. Safe, professional and reliable drivers for your personal and business travel.",
    icon: "🚗",
    links: "https://www.dundrive.in/blog",
  },
  {
    id: 2,
    name: "Shanvi Travels",
    description:
      "Complete travel solution including car rental, driver services and tour packages.",
    icon: "🧳",
    links: "https://jsdl.in/DT-99TNY6NS1XI",
  },
];

const OtherServices = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-6 ">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-3">
          Professional driving and travel services for safe and comfortable
          journeys
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>

            <h2 className="text-xl font-semibold text-gray-800">
              {service.name}
            </h2>

            <p className="text-gray-600 mt-2 mb-5">{service.description}</p>

            <a
              href={service.links}
              className=" bg-black text-white px-5 py-2  rounded-lg hover:bg-gray-800"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
