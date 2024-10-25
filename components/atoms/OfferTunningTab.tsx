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
    <div className="flex flex-col gap-2 font-bai bg-[#443e3e] bg-opacity-80 shadow-lg rounded-2xl p-4">
      <div className="text-2xl">{number}</div>
      <div className="text-xl font-bold">{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default OfferTunningTab;
