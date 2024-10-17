import React from "react";
import AnimatedText from "./AnimatedText";

interface TitleSectionProps {
  category?: string;
  titleBegining?: string;
  titleEnding?: string;
  titleAnimationText?: string;
  span?: string;
}

const TitleSection = ({
  category,
  titleBegining,
  titleEnding,
  titleAnimationText,
}: TitleSectionProps) => {
  return (
    <div className="font-bai flex flex-col gap-4">
      <p className="text-2xl">{category}</p>
      <div className="flex items-center gap-2">
        <h2 className="text-4xl font-semibold leading-[50px]">
          <AnimatedText text={titleAnimationText ?? ""} />
          {titleBegining}
          {titleEnding}
        </h2>
      </div>
    </div>
  );
};

export default TitleSection;
