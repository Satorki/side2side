import React from "react";
import NumberTab from "../atoms/NumberTab";

const NumberSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-8 text-white font-bai">
      <div className="flex flex-row justify-between gap-4 px-8">
      <NumberTab titleUp="Obsłużonych" titleDown="klientów" value={999} />
      <NumberTab titleUp="Naprawionych" titleDown="samochodów" value={700} />
      <NumberTab titleUp="Naprawionych" titleDown="samochodów" value={1000} />
      </div>
    </div>
  );
};

export default NumberSection;
