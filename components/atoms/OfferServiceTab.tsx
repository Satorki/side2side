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
      className={`flex gap-3 hover:scale-105 hover:translate-x-5 transition-all ease-in-out duration-300`}
    >
      <p className="text-xl ">{icon}</p>
      <p className="text-[1.1rem]">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default OfferServiceTab;
