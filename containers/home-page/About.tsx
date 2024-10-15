import AboutDektop from "@/components/organisms/AboutDektop";
import AboutMobile from "@/components/organisms/AboutMobile";
import { useEffect, useState } from "react";

const About = () => {
  const [isWindowMedium, setIsWindowMedium] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsWindowMedium(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div id="about" className="py-5">
      {isWindowMedium ? <AboutDektop /> : <AboutMobile />}
    </div>
  );
};

export default About;
