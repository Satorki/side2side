"use client";
import Offers from "@/containers/home-page/Offers";
import About from "@/containers/home-page/About";
// import Contact from "@/containers/home-page/Contact";
import Hero from "@/containers/home-page/Hero";
import Projects from "@/containers/home-page/Projects";
import Rewievs from "@/containers/home-page/Rewievs";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Offers />
      <Projects />
      <Rewievs />
      {/* <Contact /> */}
    </div>
  );
}
