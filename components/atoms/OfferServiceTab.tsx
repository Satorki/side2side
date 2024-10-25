"use client";
import React from "react";

interface OfferServiceTabProps {
  icon?: JSX.Element;
  title: string;
  description?: string;
  isLast?: boolean;
}

const OfferServiceTab = ({
  icon,
  title,
  description,
}: OfferServiceTabProps) => {
  return (
    <div
      className={`flex gap-3 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer`}
    >
      <p className="text-xl ">{icon}</p>
      <p className="text-xl font-bold">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default OfferServiceTab;
