import { motion } from "framer-motion";
import carImg from "../assets/cars/carImg.webp";
import secondCar from "../assets/cars/secondCar.webp";
import { useEffect, useState } from "react";
import artika from "../assets/cars/artika.webp";
import Seo from "../components/Seo";

export default function Blog() {
  const initialImages = [
    carImg,
    secondCar,
    "https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  const [images, setImages] = useState(initialImages);

  // Shuffle animation (every second)
  useEffect(() => {
    setImages((prev) => [...prev].sort(() => Math.random() - 0.5));
  }, []);

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
  };

  return (
    <>
      <Seo
        title="About Dun Drive | Trusted Taxi & Travel Company in Dehradun"
        content="Learn about Dun Drive – a professional taxi and travel company in Dehradun offering dependable cab services, experienced drivers, and comfortable rides across Uttarakhand. We focus on punctuality, affordability, and customer satisfaction to make every journey safe and memorable."
        keyword="About Dun Drive, Dehradun cab company, taxi agency Dehradun, trusted drivers Dehradun, Uttarakhand taxi service, local cab company Doon, professional taxi in Dehradun, about our taxi service, best car rental in Dehradun, safe and clean cabs Dehradun"
      />

      <div className="bg-white text-gray-800 w-full px-[5%] py-16 mt-[60px]">
        {/* About Section */}
        <motion.section className="max-w-5xl mx-auto text-center mb-16">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Understand About <span className="text-blue-600">dun Drives</span>
          </motion.h1>
          <motion.p
            className="text-[16px] sm:text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Welcome to <strong>Dun Drives</strong> — your trusted tour and
            travel partner in India. Established in 2007, we specialize in
            providing affordable, safe, and reliable{" "}
            <strong>cab services in Dehradun</strong> and across Uttarakhand
            (India). Whether you're traveling for leisure, business, or
            pilgrimage, our mission is to make your journey comfortable and
            memorable.
          </motion.p>
        </motion.section>

        <motion.div
          className="flex flex-col lg:flex-row gap-10 items-center w-full mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full lg:w-[50%] h-[320px] flex justify-center">
            <img
              src={carImg}
              alt="dun Drives car service in Dehradun"
              className=" absolute w-[400px] h-[300px] sm:w-[600px] md:[700px xl:w-[800px] xl:h-[350px] rounded-2xl  shadow-lg  object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src={carImg}
              alt="dun Drives car service in Dehradun"
              className="absolute bottom-9 right-3 w-[100px] h-[70px] md:right-20 lg:right-3 xl:bottom-0 xl:right-10 rounded-xl   object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-[50%] ">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Reliable, Punctual & Comfortable
            </motion.h2>
            <motion.p
              className="text-gray-600 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.0 }}
            >
              At <strong>dun Drives</strong>, we believe in three things —{" "}
              <strong>reliability, punctuality, and comfort.</strong> Our fleet
              includes clean, well-maintained vehicles like Sedans, SUVs, and
              MUVs. Whether you need a <strong>local taxi in Dehradun</strong>,
              a <strong>Dehradun to Delhi cab</strong>, or a{" "}
              <strong>premium taxi service</strong> to hill stations — we’ve got
              you covered.
            </motion.p>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.3 }}
            >
              With experienced drivers and 24/7 availability, we ensure your
              trip is safe and stress-free. From airport transfers to family
              tours, we provide the{" "}
              <strong>best taxi service in Dehradun</strong> at the most
              affordable prices.
            </motion.p>
          </div>
        </motion.div>

        {/* Delhi to Badrinath Section */}
        <motion.section
          className="mt-20 md:mt-30 px-[5%] grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Left Side - Animated Images + Car Image */}
          <div className="flex flex-col items-center justify-center gap-6">
            <ul
              className="flex flex-wrap justify-center items-center gap-3 w-full sml:w-[300px] xl:w-[700px]"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {images.map((src, index) => (
                <motion.li
                  key={index}
                  layout
                  transition={spring}
                  whileHover={{ scale: 1.1 }}
                  className="overflow-hidden rounded-xl w-[120px] h-120px xl:w-[250px] xl-[250px] shadow-md hover:shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Car ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Side - Text Content */}
          <div>
            <motion.h2
              className="text-3xl font-bold text-center md:text-left mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              Book Delhi to Badrinath Taxi with{" "}
              <span className="text-blue-600">dun Drives</span>
            </motion.h2>

            <motion.p
              className="text-gray-600 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              Badrinath is a sacred city on the banks of the Alaknanda River in
              Chamoli, Uttarakhand. As one of India’s famous Char Dham
              pilgrimage sites, it draws thousands of devotees every year.
            </motion.p>
            <motion.p
              className="text-gray-600 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              Our <strong>Delhi to Badrinath cab service</strong> offers
              comfortable rides through the scenic Himalayan roads. With{" "}
              <strong>dun Drives</strong>, you can choose from Sedans,
              Hatchbacks, and SUVs — all driven by experienced and professional
              drivers.
            </motion.p>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              The distance from Delhi to Badrinath is about{" "}
              <strong>540 km</strong> and takes roughly{" "}
              <strong>15 hours</strong> by car. You can book online anytime
              through our easy interface and enjoy the{" "}
              <strong>best taxi service from Delhi to Badrinath</strong> at
              affordable prices with comfort and reliability.
            </motion.p>
          </div>
        </motion.section>

        {/* Gallery / Visuals */}
        <motion.section
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Our Services & Experiences
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Experience hassle-free travel with dun Drives — the most{" "}
            <strong>affordable cab service in Dehradun</strong>. We provide{" "}
            <strong>
              local taxi services, airport transfers, and Uttarakhand tours
            </strong>{" "}
            for individuals, families, and corporate clients.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.img
              src={artika}
              alt="Tour and travel in Dehradun"
              className="rounded-2xl shadow-md object-cover w-full h-[250px]"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={carImg}
              alt="Premium cab service in Dehradun"
              className="rounded-2xl shadow-md object-cover w-full h-[250px]"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={secondCar}
              alt="Airport taxi service in Dehradun"
              className="rounded-2xl shadow-md object-cover w-full h-[250px]"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.section>
      </div>
    </>
  );
}
