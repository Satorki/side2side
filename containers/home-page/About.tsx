import AboutImage from "@/components/atoms/AboutImage";
import AboutQuote from "@/components/atoms/AboutQuote";
import React from "react";

const About = () => {
  return (
    <div id="About" style={{ marginTop: "-10px" }} className="overflow-hidden">
      <AboutImage />
      <AboutQuote />
    </div>
  );
};

export default About;
