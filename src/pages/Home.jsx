import React, { lazy, Suspense } from "react";
import ScrollWrapper from "../utils/ScrollWrapper";
import DriverServicePage from "./ DriverServicePage";
const HeroSection = lazy(() => import("../components/HeroSection"));
const ClientReviews = lazy(() => import("../components/ClientReviews"));
const Services = lazy(() => import("../components/Services"));
const PopularDestinations = lazy(() =>
  import("../components/PopularDestinations")
);
const Contact = lazy(() => import("./Contact"));
const WhyChooseUs = lazy(() => import("../components/WhyChoiceUs"));
const PopularRoutes = lazy(() => import("../components/PopularRoutes"));
const Blog = lazy(() => import("./Blog"));
function Home() {
  return (
    <div className="--font-display">
      <ScrollWrapper>
        <HeroSection />
        <PopularDestinations />
        <Services />
        <Blog />
        <DriverServicePage />
        {/* <WhyChooseUs /> */}
        <Contact />
        <ClientReviews />
        <PopularRoutes />
      </ScrollWrapper>
    </div>
  );
}

export default Home;
