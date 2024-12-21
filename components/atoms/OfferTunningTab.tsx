import React from "react";

interface OfferTunningTabProps {
  number: number;
  title: string;
}

const OfferTunningTab = ({ number, title }: OfferTunningTabProps) => {
  return (
    <div className="flex items gap-4 font-bai md:max-w-[250px] shadow-md rounded-2xl hover:scale-95 transition-all ease-in-out duration-300 p-4 bg-[var(--color-background1)]">
      <div className="text-[1.1rem] font-bold">{number}</div>
      <div className="text-[1.1rem]">{title}</div>
    </div>
  );
};

export default OfferTunningTab;
