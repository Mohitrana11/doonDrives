import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Executive",
    text: "Outstanding service! The Mercedes S-Class was immaculate and the driver was professional and punctual. Made my business trip seamless and comfortable. Highly recommend for corporate travel.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Michael Chen",
    role: "Wedding Planner",
    text: "Perfect for our wedding day! The luxury vehicle was beautifully maintained and added such elegance to our special day. The team went above and beyond to ensure everything was perfect.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Emily Rodriguez",
    role: "Travel Blogger",
    text: "Exceptional airport transfer service! Flight was delayed but they tracked it and adjusted pickup time automatically. Professional, reliable, and stress-free travel experience.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "David Thompson",
    role: "Corporate Manager",
    text: "Been using their services for over a year for corporate events. Consistently excellent service, luxury vehicles, and competitive pricing. They’ve become our go-to transportation partner.",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Lisa Park",
    role: "Event Coordinator",
    text: "Amazing service for our group tour! The BMW X7 was spacious and comfortable for our family of 6. Driver was knowledgeable about local attractions and made great recommendations.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "James Wilson",
    role: "Frequent Traveler",
    text: "Top-notch luxury car rental service! Clean vehicles, professional drivers, and excellent customer service. The booking process was smooth and transparent pricing. Will definitely use again.",
    image: "https://i.pravatar.cc/100?img=6",
  },
];

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const scrollAmount = dir === "left" ? -350 : 350;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        What Our Clients Say
      </h2>
      <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        Don’t just take our word for it. Here’s what our satisfied customers
        have to say about their experience with our premium car rental service.
      </p>

      {/* Buttons */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <FaArrowRight />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 snap-center flex-shrink-0"
          >
            <FaQuoteLeft className="text-gray-300 text-2xl mb-3" />
            <p className="text-gray-700 italic mb-4 leading-relaxed">
              "{item.text}"
            </p>

            {/* Stars */}
            <div className="flex text-yellow-400 mb-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile swipe hint */}
      <p className="text-center text-gray-400 text-sm mt-6 md:hidden">
        ← Swipe to explore →
      </p>
    </section>
  );
};

export default Services;
