import AboutImage from "@/components/atoms/AboutImage";
import React from "react";

const About = () => {
  return (
    <div>
      <div>O nas</div>
      <div
        id="About"
        className="flex flex-col max-w-[1200px] overflow-hidden mx-auto"
      >
        <AboutImage />
      </div>
      <div>Text from left showing</div>
    </div>
  );
};

export default About;
