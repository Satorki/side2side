"use client";
import Offers from "@/containers/home-page/Offers";
import About from "@/containers/home-page/About";
import Contact from "@/containers/home-page/Contact";
import Hero from "@/containers/home-page/Hero";
import Projects from "@/containers/home-page/Projects";
import Rewievs from "@/containers/home-page/Rewievs";
import OffersAll from "@/containers/home-page/OffersAll";
import WalkingText from "@/components/atoms/WalkingText";
import NumberSection from "@/components/molecules/NumberSection";

export default function Home() {

  const colorTransition = 9;


  return (
    <div>
      {/* <Hero /> */}
      <div className="relative z-20 bg-gradient-to-r from-[#231b1b] to-[#575757]">
        <OffersAll />
        <About />
      </div>
      <Offers />
      <NumberSection />
      <div className="relative z-20  bg-gradient-to-r from-[#353030] to-[#575757]">
        <Projects />
        <Rewievs />
        <Contact />
      </div>
    </div>
  );
}
