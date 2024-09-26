import About from "@/containers/home-page/About";
import Hero from "@/containers/home-page/Hero";

export default function Home() {
  return (
    <div className="bg-red-700">
      <Hero />
      <About />
    </div>
  );
}
