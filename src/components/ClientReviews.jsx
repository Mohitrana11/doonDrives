import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Executive",
    text: "Outstanding service! The Mercedes S-Class was immaculate and the driver was professional and punctual. Made my business trip seamless and comfortable. Highly recommend for corporate travel.",
  },
  {
    name: "Michael Chen",
    role: "Wedding Planner",
    text: "Perfect for our wedding day! The luxury vehicle was beautifully maintained and added such elegance to our special day. The team went above and beyond to ensure everything was perfect.",
  },
  {
    name: "Emily Rodriguez",
    role: "Travel Blogger",
    text: "Exceptional airport transfer service! Flight was delayed but they tracked it and adjusted pickup time automatically. Professional, reliable, and stress-free travel experience.",
  },
  {
    name: "David Thompson",
    role: "Corporate Manager",
    text: "Been using their services for over a year for corporate events. Consistently excellent service, luxury vehicles, and competitive pricing. They’ve become our go-to transportation partner.",
  },
  {
    name: "Lisa Park",
    role: "Event Coordinator",
    text: "Amazing service for our group tour! The BMW X7 was spacious and comfortable for our family of 6. Driver was knowledgeable about local attractions and made great recommendations.",
  },
  {
    name: "James Wilson",
    role: "Frequent Traveler",
    text: "Top-notch luxury car rental service! Clean vehicles, professional drivers, and excellent customer service. The booking process was smooth and transparent pricing. Will definitely use again.",
  },
];

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
    <div className="w-full bg-white  px-[4%]">
      {" "}
      <section className="w-full py-12 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 ">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-center text-[18px] mb-10 max-w-2xl mx-auto">
          Don’t just take our word for it. Here’s what our satisfied customers
          have to say about their experience with our premium car rental
          service.
        </p>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 transform-translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 transform-translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          <FaArrowRight />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto space-x-6 scrollbar-hide  items-end scroll-smooth  snap-x snap-mandatory"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className=" h-[300px] min-w-[300] w-[300px] snap-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 flex-shrink-0 j items-end justify-between cursor-pointer hover:scale-105 hover:delay-100 "
            >
              <p className="text-gray-700 italic mb-4">“{item.text}”</p>
              <div className="flex  items-center  gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
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
