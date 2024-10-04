"use client";
import Image from "next/image";
import Repairing from "../../public/images/about.jpg";

const AboutImage = () => {
  return (
    <div className="flex-1 w-full h-[80vh]">
      <Image
        src={Repairing}
        alt="side2side crew around the car"
        className="rounded-[25px] object-cover w-full h-full object-[42%]"
      />
    </div>
  );
};

export default AboutImage;
