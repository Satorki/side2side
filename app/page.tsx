"use client";
import Offers from "@/containers/home-page/Offers";
import About from "@/containers/home-page/About";
import Contact from "@/containers/home-page/Contact";
import Hero from "@/containers/home-page/Hero";
import Projects from "@/containers/home-page/Projects";
import Rewievs from "@/containers/home-page/Rewievs";
import OffersAll from "@/containers/home-page/OffersAll";
import NumberSection from "@/components/molecules/NumberSection";

export default function Home() {

  return (
    <div>
      <div className="relative z-20 bg-gradient-to-r from-[#231b1b] to-[#575757]">
        <Hero />
        <OffersAll />
        <About />
      </div>
      <Offers />
      <NumberSection />
      <div className="relative z-20  bg-gradient-to-r from-[#575757] to-[#231b1b]">
        <Projects />
        <Rewievs />
        <Contact />
      </div>
    </div>
  );
}
