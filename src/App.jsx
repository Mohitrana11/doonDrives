import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
const Navbar = lazy(() => import("./components/Navbar"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./utils/PageNotFound"));
const Footer = lazy(() => import("./components/Footer"));
const Services = lazy(() => import("./pages/Services")); // (check spelling: 'Services')
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));
const Home = lazy(() => import("./pages/Home"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
