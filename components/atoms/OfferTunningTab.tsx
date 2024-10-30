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
    <div className="flex flex-col gap-2 font-bai md:max-w-[250px] shadow-xl rounded-2xl hover:scale-95 transition-all ease-in-out duration-300 cursor-pointer p-4">
      <div className="text-[1.2rem]">{number}</div>
      <div className="text-[1.1rem] font-bold">{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default OfferTunningTab;
