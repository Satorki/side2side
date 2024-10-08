import React from "react";

interface TitleSectionProps {
  category: string;
  title: string;
  span?: string;
}

const TitleSection = ({ category, title }: TitleSectionProps) => {
  return (
    <div className="font-bai flex flex-col gap-4">
      <p className="text-2xl">{category}</p>
      <h2 className="text-5xl font-semibold">{title}</h2>
    </div>
  );
};

export default TitleSection;
