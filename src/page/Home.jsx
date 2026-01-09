import React from 'react'
import Hero from "../components/Homepage/Hero"
import MarqueeSection from "../components/Homepage/MarqueeSection"
import SatisfactionSection from "../components/Homepage/SatisfactionSection"
import FeaturedWorks from "../components/Homepage/FeaturedWorks"
import ServicesSection from "../components/Homepage/ServicesSection"
import About from "../components/Homepage/About"
import TestimonialSection from "../components/Homepage/TestimonialSection"
import FAQSection from "../components/Homepage/Faqs"
import GlobalCTA from "../components/Homepage/GlobalCTA"
const Home = () => {
    return (
        <div className="overflow-x-hidden">
      <Hero />
     
      <SatisfactionSection />

      <FeaturedWorks />
      <ServicesSection />
      <About />
      <TestimonialSection />
      <FAQSection />
      <GlobalCTA />
    </div>
    )
}

export default Home
