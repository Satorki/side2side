"use client";
import Offers from "@/containers/home-page/Offers";
import About from "@/containers/home-page/About";
// import Contact from "@/containers/home-page/Contact";
import Hero from "@/containers/home-page/Hero";
import Projects from "@/containers/home-page/Projects";
import Rewievs from "@/containers/home-page/Rewievs";
import AnimatedTransition from "@/components/atoms/AnimatedTransition";
import { CircleDotDashed } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <AnimatedTransition
        icon={
          <CircleDotDashed className="text-white w-[75px] h-[75px] md:w-[200px] md:h-[200px] opacity-50" />
        }
      />
      <Offers />
      <Projects />
      <Rewievs />
      {/* <Contact /> */}
    </div>
  );
}
