import React, { lazy, Suspense } from "react";
import ScrollWrapper from "../utils/ScrollWrapper";
import DriverServicePage from "./ DriverServicePage";
import LoadingPage from "../components/LoadingPage";
import Seo from "../components/Seo";
const HeroSection = lazy(() => import("../components/HeroSection"));
const ClientReviews = lazy(() => import("../components/ClientReviews"));
const Services = lazy(() => import("../components/Services"));
const PopularDestinations = lazy(() =>
  import("../components/PopularDestinations")
);
const Contact = lazy(() => import("./Contact"));
const PopularRoutes = lazy(() => import("../components/PopularRoutes"));
const Blog = lazy(() => import("./Blog"));

function Home() {
  return (
    <>
      <Seo
        title="Dun Drive | Best Taxi & Cab Service in Dehradun | Airport, Outstation & Local Rides"
        content="Dun Drive offers affordable, safe, and reliable taxi services in Dehradun for airport transfers, local sightseeing, and outstation trips. Hire professional drivers for Mussoorie, Rishikesh, Haridwar, and Delhi. Enjoy 24/7 booking support, clean cars, and on-time rides anywhere in Uttarakhand."
        keyword="Dun Drive, Dehradun taxi, cab service Dehradun, airport taxi Dehradun, Jolly Grant cab, Dehradun to Mussoorie taxi, Rishikesh taxi, Haridwar cab, dun taxi booking, Dehradun to Delhi cab, Uttarakhand travel taxi, reliable taxi service Dehradun, best cab in dun, 24/7 taxi in Dehradun, outstation taxi Dehradun"
      />

      <div className="--font-display">
        <Suspense fallback={<LoadingPage />}>
          <HeroSection />
          <ScrollWrapper>
            <PopularDestinations />
            <Services />
            <Blog />
            <DriverServicePage />
            <Contact />
            <ClientReviews />
            <PopularRoutes />
          </ScrollWrapper>
        </Suspense>
      </div>
    </>
  );
}

export default Home;
