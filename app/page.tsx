import About from "@/containers/home-page/About";
import Hero from "@/containers/home-page/Hero";
// import Projects from "@/containers/home-page/Projects";

// Navbar wezszy logo tylko znaczek
// Tlo czerwone

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      {/* <Projects /> */}
    </div>
  );
}

