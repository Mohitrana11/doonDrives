import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/componentCSS/contactUs.css";
import { FaStar } from "react-icons/fa";
import { RiAtFill } from "react-icons/ri";
const testimonials = [
  {
    name: "Riya Thakur",
    role: "Student, Dehradun",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I often travel from Dehradun to Rishikesh for my college. dun drive has made my travel so easy and comfortable. The drivers are polite, and the cars are always clean. I really trust their service.",
    rating: 4,
  },
  {
    name: "Vikas Rawat",
    role: "Local Business Owner, Haridwar",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I use dun drive regularly to go from Haridwar to Dehradun for work. They always arrive on time, and the booking process is simple. It’s a big help for my daily travel.",
    rating: 5,
  },
  {
    name: "Kavita Joshi",
    role: "Teacher, Rishikesh",
    image:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Last month, I booked a ride from Rishikesh to Mussoorie with dun drive. The journey was smooth, and the driver was very friendly. It felt safe and easy. I’ll definitely book again.",
    rating: 4.5,
  },
  {
    name: "Amit Negi",
    role: "Tourist from Delhi",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I visited Uttarakhand for a short trip and used dun drive to explore Haridwar and Mussoorie. The driver knew all the local spots and helped us plan better. Great experience for new visitors!",
    rating: 5,
  },
  {
    name: "Sonal Mehra",
    role: "Nurse, Dehradun",
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I use dun drive to reach my hospital every day. The drivers are always kind and make sure I reach safely, even during late shifts. I’m really thankful for their service.",
    rating: 5,
  },
  {
    name: "Rohit Bisht",
    role: "Traveler, Mussoorie",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "We booked dun drive for our family trip from Mussoorie to Haridwar. It was an easy and peaceful ride. The kids were comfortable, and the driver was patient throughout the journey.",
    rating: 5,
  },
];
import { motion } from "framer-motion";
import { fadeUp } from "../utils/Animation";
const ClientReviews = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -50, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 50, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white mt-16 px-[4%]">
      <section className="w-full relative">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-3"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp()}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center text-[18px] mb-10 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp()}
        >
          Don’t just take our word for it. Here’s what our satisfied customers
          have to say about their experience with our premium car rental
          service.
        </motion.p>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-[60%] -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-[60%] -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          <FaArrowRight />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto items-end scroll-smooth snap-x snap-mandatory py-4 px-2 scrollbar-hide scrolling-remove"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="h-[300px] min-w-[300px] w-[300px] snap-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between cursor-pointer hover:scale-105"
            >
              <div className="flex justify-end mb-2 text-yellow-400">
                {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                  <FaStar key={i} className="pl-[2px]" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">“{item.text}”</p>
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="text-center text-gray-400 text-sm mt-6 md:hidden">
          ← Swipe to see more →
        </p>
      </section>
    </div>
  );
};

export default ClientReviews;
