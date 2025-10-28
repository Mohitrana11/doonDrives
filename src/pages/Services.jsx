import React from "react";
import PopularDestinations from "../components/PopularDestinations";
import { motion } from "framer-motion";
import ServicesPage from "../components/Services";
import DriverServicePage from "./ DriverServicePage";
function Services() {
  return (
    <>
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
