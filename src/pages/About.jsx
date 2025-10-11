import AboutSection from "../components/About/aboutSection";
import FeatureSection from "../components/About/FeatureSection";
import SpecialitySection from "../components/About/SpecialitySection";
import TestimonialSlider from "../components/About/TestimonialSlider";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

const About = () => {

   return (
      <>
         <PageTitle />  {/* No need to pass title/currentPage */}
         <AboutSection />
          <SpecialitySection />
         <FeatureSection />
          <TestimonialSlider />
      </>
   );
};

export default About;
