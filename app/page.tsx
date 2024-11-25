"use client";
import Offers from "@/containers/home-page/Offers";
import About from "@/containers/home-page/About";
import Contact from "@/containers/home-page/Contact";
import Hero from "@/containers/home-page/Hero";
import Projects from "@/containers/home-page/Projects";
import Rewievs from "@/containers/home-page/Rewievs";
import OffersAll from "@/containers/home-page/OffersAll";
import NumberSection from "@/components/molecules/NumberSection";
import BgTransition from "@/components/atoms/BgTransition";

export default function Home() {
  return (
    <div>
      <div className="relative z-20 bg-[#645B4A]">
        <Hero />
        <OffersAll />
        <BgTransition>
          <About />
          <Offers />
        </BgTransition>
      </div>
      <NumberSection />
      <div className="relative z-20 bg-[#645B4A]">
        <Projects />
        <Rewievs />
        <Contact />
      </div>
    </div>
  );
}
