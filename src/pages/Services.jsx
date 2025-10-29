import React from "react";
import PopularDestinations from "../components/PopularDestinations";
import { motion } from "framer-motion";
import ServicesPage from "../components/Services";
import DriverServicePage from "./ DriverServicePage";
import Seo from "../components/Seo";
function Services() {
  return (
    <>
      <Seo
        title="Our Services | Local, Airport & Outstation Taxi in Dehradun | Dun Drive"
        content="Explore Dun Drive’s wide range of taxi services including Dehradun city rides, airport transfers, outstation trips, and corporate travel. We provide 24/7 booking, clean vehicles, and professional drivers to make your travel comfortable and stress-free across Uttarakhand."
        keyword="Dehradun taxi services, airport taxi Dehradun, local cab Dehradun, corporate taxi Dehradun, Mussoorie cab service, Haridwar taxi, Rishikesh cab, Dehradun car rental, affordable taxi in Dehradun, outstation taxi booking Doon, Delhi airport transfer Dehradun"
      />

      <motion.div className="mt-[120px]">
        <ServicesPage />
        <DriverServicePage />
        <div className="my-20">
          <PopularDestinations />
        </div>
      </motion.div>
    </>
  );
}

export default Services;
