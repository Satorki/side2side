import React from "react";

interface OfferAllTabProps {
  icon: JSX.Element;
  title: string;
  description: string;
  button?: JSX.Element;
  bgColor?: string;
}

const OfferAllTab = ({
  icon,
  title,
  description,
  button,
  bgColor,
}: OfferAllTabProps) => {
  return (
    <div
      className="flex flex-col justify-between  gap-3 p-8 shadow-lg flex-1 rounded-2xl relative"
      style={{
        background: `linear-gradient(to right bottom, #575757, ${bgColor},#575757)`,
      }}
    >
      <div>{icon}</div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm ">{description}</p>
      <div>{button}</div>
    </div>
  );
};

export default OfferAllTab;
