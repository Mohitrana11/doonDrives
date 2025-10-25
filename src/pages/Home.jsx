import React from "react";
import HeroSection from "../components/HeroSection";
import ClientReviews from "../components/ClientReviews";
import Services from "../components/Services";
import PopularDestinations from "../components/PopularDestinations";
import Contact from "./Contact";
import WhyChooseUs from "../components/WhyChoiceUs";
import PopularRoutes from "../components/PopularRoutes";

function Home() {
  return (
    <div className="--font-display">
      {/* <WhyChooseUs />
      <PopularDestinations />
      <Services />
      <ClientReviews />
      <Contact /> */}
      {/* <PopularRoutes /> */}
      <HeroSection />
    </div>
  );
}

export default Home;
