import React from "react";

const OfferLeftMenu = () => {
  return (
    <div className="sticky top-[60px] h-screen left-0 w-10 flex flex-col items-center justify-between bg-[#444444] font-bai text-white pt-[30px] z-10">
      <p className="-rotate-90">OFERTA</p>
      <div className="flex flex-col gap-16 items-center pb-[100px]">
        <p className="-rotate-90 underline">Serwis</p>
        <p className="-rotate-90 opacity-40">Tuning</p>
        <p className="-rotate-90 opacity-40">Motorsport</p>
      </div>
    </div>
  );
};

export default OfferLeftMenu;
