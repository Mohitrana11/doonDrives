import { motion } from "framer-motion";
import carImg from "../assets/cars/carImg.webp";
import secondCar from "../assets/cars/secondCar.webp";
import artika from "../assets/cars/artika.webp";
import Seo from "../components/Seo";

import { fadeUp } from "../utils/Animation";
export default function Blog() {
  return (
    <>
      <Seo
        title="About Dun Drive | Trusted Taxi & Travel Company in Dehradun"
        content="Learn about Dun Drive – a professional taxi and travel company in Dehradun offering dependable cab services, experienced drivers, and comfortable rides across Uttarakhand. We focus on punctuality, affordability, and customer satisfaction to make every journey safe and memorable."
        keyword="About Dun Drive, Dehradun cab company, taxi agency Dehradun, trusted drivers Dehradun, Uttarakhand taxi service, local cab company dun, professional taxi in Dehradun, about our taxi service, best car rental in Dehradun, safe and clean cabs Dehradun"
      />

      <div className="bg-white text-gray-800 w-full px-[5%] py-16 mt-[60px]">
        {/* About Section */}
        <section className="max-w-5xl mx-auto text-center mb-16">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Understand About <span className="text-blue-600">dun drive</span>
          </motion.h1>
          <motion.p
            className="text-[16px] sm:text-lg text-gray-600 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Welcome to <strong>dun drive</strong> — your trusted tour and travel
            partner in India. Established in 2007, we specialize in providing
            affordable, safe, and reliable{" "}
            <strong>cab services in Dehradun</strong> and across Uttarakhand
            (India). Whether you're traveling for leisure, business, or
            pilgrimage, our mission is to make your journey comfortable and
            memorable.
          </motion.p>
        </section>

        <div className="flex flex-col lg:flex-row gap-10 items-center w-full mx-auto">
          <div className="relative w-full lg:w-[50%] h-[320px] flex justify-center">
            <img
              loading="lazy"
              fetchpriority="high"
              decoding="async"
              src={carImg}
              alt="dun drive car service in Dehradun"
              className=" absolute w-[400px] h-[300px] sm:w-[600px] md:[700px xl:w-[800px] xl:h-[350px] rounded-2xl  shadow-lg  object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              loading="lazy"
              fetchpriority="high"
              decoding="async"
              src={carImg}
              alt="dun drive car service in Dehradun"
              className="absolute bottom-9 right-3 w-[100px] h-[70px] md:right-20 lg:right-3 xl:bottom-0 xl:right-10 rounded-xl   object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-[50%] ">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp()}
            >
              Reliable, Punctual & Comfortable
            </motion.h2>
            <motion.p
              className="text-gray-600 leading-relaxed mb-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp()}
            >
              At <strong>dun drive</strong>, we believe in three things —{" "}
              <strong>reliability, punctuality, and comfort.</strong> Our fleet
              includes clean, well-maintained vehicles like Sedans, SUVs, and
              MUVs. Whether you need a <strong>local taxi in Dehradun</strong>,
              a <strong>Dehradun to Delhi cab</strong>, or a{" "}
              <strong>premium taxi service</strong> to hill stations — we’ve got
              you covered.
            </motion.p>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp()}
            >
              With experienced drivers and 24/7 availability, we ensure your
              trip is safe and stress-free. From airport transfers to family
              tours, we provide the{" "}
              <strong>best taxi service in Dehradun</strong> at the most
              affordable prices.
            </motion.p>
          </div>
        </div>

        {/* Delhi to Badrinath Section */}
        <motion.section
          className="mt-20 md:mt-30 px-[5%] grid md:grid-cols-2 gap-10 items-center"
          iinitial="hidden"
          whileInView="visible"
          variants={fadeUp()}
        >
          {/* Left Side - Animated Images + Car Image */}
          <div className="relative w-full lg:w-[50%] h-[320px] flex justify-center">
            <img
              loading="lazy"
              fetchpriority="high"
              decoding="async"
              src={carImg}
              alt="dun drive car service in Dehradun"
              className=" absolute w-[400px] h-[300px] sm:w-[600px] md:[700px xl:w-[800px] xl:h-[350px] rounded-2xl  shadow-lg  object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              loading="lazy"
              fetchpriority="high"
              decoding="async"
              src={carImg}
              alt="dun drive car service in Dehradun"
              className="absolute bottom-9 right-3 w-[100px] h-[70px] md:right-20 lg:right-3 xl:bottom-0 xl:right-10 rounded-xl   object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Right Side - Text Content */}
          <div>
            <motion.h2
              className="text-3xl font-bold text-center md:text-left mb-6"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp()}
            >
              Book Delhi to Badrinath Taxi with{" "}
              <span className="text-blue-600">dun drive</span>
            </motion.h2>

            <motion.p
              className="text-gray-600 leading-relaxed mb-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp()}
            >
              Badrinath is a sacred city on the banks of the Alaknanda River in
              Chamoli, Uttarakhand. As one of India’s famous Char Dham
              pilgrimage sites, it draws thousands of devotees every year.
            </motion.p>
            <motion.p
              className="text-gray-600 leading-relaxed mb-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp()}
            >
              Our <strong>Delhi to Badrinath cab service</strong> offers
              comfortable rides through the scenic Himalayan roads. With{" "}
              <strong>dun drive</strong>, you can choose from Sedans,
              Hatchbacks, and SUVs — all driven by experienced and professional
              drivers.
            </motion.p>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp()}
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
        <div className="hidden md:block bg-white text-gray-700 px-[5%] py-12 leading-relaxed text-[16px] md:text-lg rounded-2xl shadow-sm mt-15">
          <motion.h2
            className="text-3xl font-bold  text-center  my-10"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Affordable & Reliable Taxi, Cab, and Tour Services in Dehradun
          </motion.h2>

          <motion.p
            className="mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Welcome to <strong>Dun Drive</strong> — your one-stop destination
            for reliable, safe, and affordable <strong>cabs in Dehradun</strong>{" "}
            and nearby cities. Whether you're looking for a
            <strong> local taxi service in Dehradun</strong>, an outstation cab,
            or a customized
            <strong> tour and travel package</strong>, we are here to make your
            journey smooth and memorable. With years of experience in the{" "}
            <strong>tour and travels industry</strong>, our goal is to provide
            comfortable rides, punctual drivers, and budget-friendly cab
            services that make travel easy for everyone.
          </motion.p>

          <motion.p
            className="mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Our <strong>taxi service in Dehradun</strong> operates 24/7 with
            experienced drivers who know the routes, traffic, and tourist spots
            across Uttarakhand and North India. We specialize in
            <strong> airport transfers</strong>,{" "}
            <strong>local sightseeing</strong>,
            <strong>Dehradun to Delhi taxi service</strong>,{" "}
            <strong>Mussoorie tours</strong>, and
            <strong>Char Dham Yatra trips</strong>. Our services are designed to
            provide a stress-free and enjoyable experience, ensuring that every
            traveler feels comfortable and secure on the road.
          </motion.p>

          <motion.h3
            className="text-2xl font-semibold mt-8 mb-3"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp()}
          >
            Explore Uttarakhand’s Most Popular Destinations with Dun Drive
          </motion.h3>

          <p className="mb-4">
            Dehradun is not only the gateway to the Himalayas but also
            surrounded by several beautiful destinations that attract tourists
            from all over India. With <strong>Dun Drive</strong>, you can easily
            book <strong>affordable cabs in Dehradun</strong> to popular
            destinations such as
            <strong>
              Mussoorie, Rishikesh, Haridwar, Nainital, Auli, Chopta, Kedarnath,
              Badrinath, and Jim Corbett National Park
            </strong>
            . Whether you're planning a weekend getaway or a family trip, our{" "}
            <strong>premium taxi service</strong> ensures you travel in comfort
            and style.
          </p>

          <p className="mb-4">
            For pilgrims, we offer dedicated{" "}
            <strong>Char Dham Yatra taxi packages</strong> that include
            comfortable vehicles, reliable drivers, and complete travel support
            for destinations like
            <strong>Yamunotri, Gangotri, Kedarnath, and Badrinath</strong>. Our
            <strong>Dehradun to Badrinath cabs</strong> and{" "}
            <strong>Dehradun to Kedarnath taxis</strong> are some of the most
            booked services during the pilgrimage season.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">
            Why Choose Dun Drive?
          </h3>

          <ul className="list-disc pl-6 mb-4">
            <li>✅ 24/7 customer support and emergency assistance</li>
            <li>✅ Well-maintained, sanitized, and air-conditioned cars</li>
            <li>✅ Experienced, professional, and courteous drivers</li>
            <li>
              ✅ Affordable and transparent pricing with no hidden charges
            </li>
            <li>
              ✅ Easy online cab booking through our{" "}
              <strong>tour and travel website</strong>
            </li>
          </ul>

          <p className="mb-4">
            Whether you're searching for <strong>cabs near me</strong>,
            <strong>taxi service near me</strong>, or{" "}
            <strong>affordable tour and travel in Dehradun</strong>, Dun Drive
            appears as the most trusted and convenient option. Our
            <strong> local taxi service in Dehradun</strong> is perfect for
            short city rides, shopping trips, business meetings, or
            school/college travel. We also provide
            <strong>premium cabs in Dehradun</strong> for weddings, corporate
            events, and airport transfers.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">
            Serving Nearby Cities with Excellence
          </h3>

          <p className="mb-4">
            Apart from Dehradun, our <strong>cab and taxi services</strong>{" "}
            extend to nearby cities like
            <strong>
              Rishikesh, Haridwar, Roorkee, Mussoorie, Delhi, Noida, and Meerut
            </strong>
            . Our
            <strong>Dehradun to Delhi cab service</strong> is one of the most
            preferred by travelers due to our reliability, clean vehicles, and
            professional drivers. You can also book
            <strong>Dehradun to Delhi airport taxi</strong> at any time of day
            or night.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">
            Our Vision and Commitment
          </h3>

          <p className="mb-4">
            At Dun Drive, our vision is to become Uttarakhand’s most trusted
            <strong>tour and travel company</strong> offering high-quality
            <strong>taxi and cab services</strong> at affordable rates. We are
            continuously working to make online booking easier, customer service
            better, and travel safer for everyone. Whether you are a local
            resident or a visitor, our goal is to provide the
            <strong>best taxi service in Dehradun</strong> with honesty, safety,
            and comfort.
          </p>

          <p className="mb-4">
            We pride ourselves on being the{" "}
            <strong>best affordable taxi service</strong> that connects you to
            every major and minor location in Uttarakhand and North India. From
            <strong>airport pickup and drop</strong> to{" "}
            <strong>intercity cabs</strong> and
            <strong>customized tour packages</strong>, Dun Drive ensures every
            journey is unforgettable.
          </p>

          <p className="text-center mt-10 text-lg font-medium text-blue-700">
            Book your ride today with Dun Drive — your trusted{" "}
            <strong>travel agency in Dehradun</strong> for safe, comfortable,
            and affordable cab services across Uttarakhand and beyond.
          </p>
        </div>

        {/* Gallery / Visuals */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Services & Experiences
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Experience hassle-free travel with dun drive — the most{" "}
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
        </section>
      </div>
    </>
  );
}
