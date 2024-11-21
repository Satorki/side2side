import React from "react";
import NumberTab from "../atoms/NumberTab";
import Image from "next/image";
import BackImage from "@/public/images/Service/offer5.jpg";

const NumberSection = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-screen opacity-25">
        <Image src={BackImage} alt="Person Standing" fill className="object-cover" />
      </div>
      <div className="relative z-20 max-w-[1200px] mx-auto py-20 md:py-40 text-white font-bai">
        <div className="flex flex-col md:flex-row justify-between gap-20 md:gap-10 px-8">
          <NumberTab titleUp="LAT" titleDown="DOŚWIADCZENIA" value={9} />
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
