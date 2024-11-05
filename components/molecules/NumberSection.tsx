import React from "react";
import NumberTab from "../atoms/NumberTab";
import Image from "next/image";
import BackImage from "@/public/images/Additional/background1.jpg";

const NumberSection = () => {
  return (
    <div>
      <div className="sticky top-0 h-[50vh]">
        <Image src={BackImage} alt="Person Standing" fill objectFit="cover" />
      </div>
      <div className="max-w-[1200px] mx-auto my-8 text-white font-bai">
        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-20 md:gap-10 px-8">
          <NumberTab titleUp="LAT" titleDown="DOŚWIADCZENIA" value={5} />
          <NumberTab
            titleUp="SERWISOWANYCH"
            titleDown="SAMOCHODÓW"
            value={700}
            symbol="+"
          />
          <NumberTab
            titleUp="ZADOWOLONYCH"
            titleDown="KLIENTÓW"
            value={100}
            symbol="%"
          />
        </div>
      </div>
    </div>
  );
};

export default NumberSection;
