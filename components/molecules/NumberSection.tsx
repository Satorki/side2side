import React from "react";
import NumberTab from "../atoms/NumberTab";
import { PersonStanding } from "lucide-react";

const NumberSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-8 text-white font-bai">
      <div className="flex flex-row justify-between gap-4 px-8">
      <NumberTab titleUp="LAT" titleDown="DOŚWIADCZENIA" value={5} />
      <NumberTab titleUp="SERWISOWANYCH" titleDown="SAMOCHODÓW" value={700} symbol="+" />
      <NumberTab titleUp="ZADOWOLONYCH" titleDown="KLIENTÓW" value={100} symbol="%"/>
      </div>
    </div>
  );
};

export default NumberSection;
