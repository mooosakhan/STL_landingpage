import Image from "next/image";

import { Hero } from '../components/sections/Hero/Hero';
import { Services } from '../components/sections/services/services';
import { Portfolio } from '../components/sections/portfolio/portfolio';
import { Testimonials } from '../components/sections/Testimonials/testimonials';
import { Footer } from '../components/layout/Footer/Footer';
import { Navigation } from '../components/layout/Navigation/Navigation';
import { FAQ } from '../components/sections/FAQ/faq';
import { Contact } from "../components/sections/contact/contact";
import { Features } from "../components/sections/Features/Features";


export default function Home() {

  return (
    <div className="bg-[#fafafa]">
      <Navigation />
      <Hero />
      <Features
        experienceImg="/images/feature-expertise.png"
        personalizedImg="/images/feature-personalized.png"
        speedClockImg="/images/feature-speed.png"
        speedChartImg="/images/feature-efficiency.png"
      />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
