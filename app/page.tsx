"use client";
import Offers from "@/components/organisms/Offers";
import AboutNew from "@/containers/home-page/AboutNew";
import Contact from "@/containers/home-page/Contact";
import Hero from "@/containers/home-page/Hero";
import Projects from "@/containers/home-page/Projects";
import Rewievs from "@/containers/home-page/Rewievs";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutNew />
      <Offers />
      <Projects />
      <Rewievs />
      <Contact />
    </div>
  );
}
