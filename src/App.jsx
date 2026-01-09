// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GDPRBanner from "./components/GDPRBanner";
import Home from "./page/Home";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import About from "./page/About";
import ServiceOverview  from "../src/page/ServiceOverview"
import Contact from "./page/Contact";
function App() {
  useEffect(() => {
    // Initialize AOS once at app root
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/ServiceOverview" element={<ServiceOverview />} />
      </Routes>
      <Footer />
      <GDPRBanner />
    </Router>
  );
}

export default App;
