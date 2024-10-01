"use client";
import Image from "next/image";
import Repairing from "../../public/images/repairing.jpg";

const AboutImage = () => {
  return (
    <div className="about-image-container flex-1">
      <Image
        src={Repairing}
        alt="Naprawa samochodu"
        className="rounded-lg shadow-lg object-cover"
        layout="responsive"
        width={500}
        height={500}
      />
      <style jsx>{`
        .about-image-container {
          max-width: 500px;
        }
      `}</style>
    </div>
  );
};

export default AboutImage;
