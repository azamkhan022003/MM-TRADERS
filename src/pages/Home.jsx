import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroStats from "../components/HeroStats";
import Features from "../components/Features";
import About  from "../components/About";
import Categories from "../components/Categories";
import FeaturedProduct from "../components/home/FeaturedProduct";
import Industries from "../components/home/Industries";
import Contact from "../components/Contact";
import ScrollTop from "../components/common/ScrollTop";
import Banner from "../components/Banner";
import CTA from "../components/CTA";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AboutSection from "../components/home/AboutSection"
import CTASection from "../components/home/CTASection";
import Testimonials from "../components/home/Testimonials";
import WhatsappButton from "../components/common/WhatsappButton"
import Footer from "../components/Footer";









function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroStats/>
      <Features />
     <About/>
  <Categories/>   
  <FeaturedProduct/>
  <Industries/>
  <Contact/>
  <ScrollTop/>
  <Banner/>
  <CTA/>
  <WhyChooseUs/>
  <AboutSection/>
  <CTASection/>
  <WhatsappButton/>
  <Footer/>








    </>
  );
}

export default Home;
