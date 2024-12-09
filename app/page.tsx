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
    <div id="home">
      <Hero />
      <OffersAll />
      <BgTransition>
        <About />
        <Offers />
      </BgTransition>
      <NumberSection />
      <Projects />
      <Rewievs />
      <Contact />
    </div>
  );
}
