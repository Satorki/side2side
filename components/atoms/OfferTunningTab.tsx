import React from "react";

interface OfferTunningTabProps {
  number: number;
  title: string;
  description?: string;
}

const OfferTunningTab = ({
  number,
  title,
  description,
}: OfferTunningTabProps) => {
  return (
    <div className="flex gap-4 font-bai md:max-w-[250px] shadow-md rounded-2xl hover:scale-95 transition-all ease-in-out duration-300 p-4 bg-[#645B4A]">
      <div className="text-[1.1rem] font-bold">{number}</div>
      <div className="text-[1.1rem]">{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default OfferTunningTab;
