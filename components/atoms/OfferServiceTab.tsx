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
      className={`flex flex-col gap-2 hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer active:scale-95 lg:max-w-[240px]`}
    >
      {icon}
      <p className="text-xl font-bold">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default OfferServiceTab;
