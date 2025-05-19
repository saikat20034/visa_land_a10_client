import BlogPage from "../../components/Blog/Blog";
import FaqSection from "../../components/faqs/faqs";
import Hero from "../../components/Hero/Hero";
import LatestVisaSection from "../../components/LatestVisaSection/LatestVisaSection";
import TopCountries from "../../components/TopCountries/TopCountries";
import WhyChooseVisaLand from "../../components/WhyChooseVisaLand/WhyChooseVisaLand";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="w-full max-w-full mx-auto">
      <Hero />
      <div className="max-w-6xl mx-auto">
        <LatestVisaSection />
        <TopCountries />
        <WhyChooseVisaLand />
        <BlogPage></BlogPage>
        <FaqSection></FaqSection>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;