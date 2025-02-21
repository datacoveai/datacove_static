import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Privacy from "./PrivacyManagement/PrivacyManagement";
import Features from "./Features/Features";
import Testimonials from "./Testimonials/Testimonials";
import Join from "./JoinUs/Joinus";
import Product from "./ProductNews/Productnews";
import "./index.css";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import MoreFeatures from "./components/MoreFeatures";
import Career from "./components/Career";
import { Toaster } from "react-hot-toast";
import Faq from "./Pages/Faq";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndCondition from "./Pages/TermsAndCondition";

const Home = () => {
  return (
    <>
      <Hero />
      <Privacy />
      <Features />
      <Testimonials />
      <Join />
      <Product />
      <Footer />
    </>
  );
};

const App = () => {
  const location = useLocation();

  // console.log("Token being sent: ", document.cookie);

  const isDashboardRoute = location.pathname.startsWith("/dashboard/");

  // Define the routes where you want to remove the `home-container`
  const noContainerRoutes = [
    "/contact-us",
    "/pricing",
    "/morefeatures",
    "/career",
  ];

  // Check if the current path matches any route in `noContainerRoutes`
  const isNoContainer = noContainerRoutes.some((route) =>
    location.pathname.startsWith(route.replace(":name", ""))
  );

  return (
    <div className={isNoContainer ? "" : "home-container"}>
      {/* Show Navbar only if NOT on the dashboard route */}
      {!isDashboardRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/morefeatures" element={<MoreFeatures />} />
        <Route path="/career" element={<Career />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandcondtion" element={<TermsAndCondition />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
