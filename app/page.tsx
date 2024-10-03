import About from "@/containers/home-page/About";
import Hero from "@/containers/home-page/Hero";
import Offer from "@/containers/home-page/Offer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Offer />
      {/* <Projects /> */}
    </div>
  );
}
