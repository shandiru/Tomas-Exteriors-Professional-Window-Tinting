import Hero from "../components/Homepage/Hero"
import SatisfactionSection from "../components/Homepage/SatisfactionSection"
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
      <ServicesSection />
      <About />
      <TestimonialSection />
      <FAQSection />
      <GlobalCTA />
    </div>
  )
}

export default Home
