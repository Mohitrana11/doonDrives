import React from "react";
import { FaPlaneDeparture, FaHotel, FaSuitcaseRolling } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaPlaneDeparture className="text-sky-500 text-2xl" />,
      title: "Flight Ticket",
      desc: "Vitae donec pellentesque a aliquam et ultricies auctor.",
      active: true,
    },
    {
      icon: <FaHotel className="text-sky-500 text-2xl" />,
      title: "Accommodation",
      desc: "Vitae donec pellentesque a aliquam et ultricies auctor.",
      active: false,
    },
    {
      icon: <FaSuitcaseRolling className="text-sky-500 text-2xl" />,
      title: "Packaged Tour",
      desc: "Vitae donec pellentesque a aliquam et ultricies auctor.",
      active: false,
    },
  ];

  return (
    <section className=" w-full flex flex-col lg:flex-row items-center justify-between px-[5%]  py-16  gap-10">
      {/* Left Image */}
      <div className=" w-full lg:w-[45%] flex justify-center">
        <img
          //   src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ganga_Aarti_at_Varanasi.jpg"
          src="https://images.pexels.com/photos/34308516/pexels-photo-34308516.jpeg"
          alt="Ganga Aarti"
          className="w-full max-w-[480px]  h-auto max-h-[480px] rounded-[3rem] object-cover shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-[50%] text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-md mx-auto lg:mx-0">
          Enjoy different experiences in every place you visit and discover new
          and affordable adventures of course.
        </p>

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

          {/* Extra Placeholder Option */}
          <div className="text-gray-400 font-semibold mt-2 text-left">
            Another Product
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
