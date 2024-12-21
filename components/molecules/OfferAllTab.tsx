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
      className="flex flex-col justify-between gap-3 p-8 shadow-lg flex-1 rounded-2xl relative"
      style={{
        background: `${bgColor}`,
      }}
    >
      <div>{icon}</div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm tracking-wide">{description}</p>
      <div>{button}</div>
    </div>
  );
};

export default OfferAllTab;
