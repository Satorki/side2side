import React from "react";

interface OfferAllTabProps {
  icon: JSX.Element;
  title: string;
  description: string;
  button: JSX.Element;
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
      className="flex flex-col justify-between  gap-2 p-4 rounded shadow-md hover:shadow-lg transition-shadow flex-1 rounded-3xl"
      style={{ backgroundColor: bgColor }}
    >
      <div>{icon}</div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm ">{description}</p>
      <div>{button}</div>
    </div>
  );
};

export default OfferAllTab;
