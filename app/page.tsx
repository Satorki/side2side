"use client";
import About from "@/containers/home-page/About";
import AboutNew from "@/containers/home-page/AboutNew";
import Hero from "@/containers/home-page/Hero";
import Offer from "@/containers/home-page/Offer";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      {/* <About /> */}
      <div className="h-screen bg-red-950"></div>
      <AboutNew />
      <Offer />
      {/* <Projects /> */}
    </div>
  );
}
