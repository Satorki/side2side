import React from "react";

interface OfferServiceTabProps {
  icon?: JSX.Element;
  title: string;
  description: string;
}

const OfferServiceTab = ({
  icon,
  title,
  description,
}: OfferServiceTabProps) => {
  return (
    <div className="flex flex-col gap-1 p-2 md:max-w-[260px] 2xl:max-w-[300px]">
      <div>{icon}</div>
      <p className="text-xl font-bold">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default OfferServiceTab;
