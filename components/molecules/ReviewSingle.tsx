import React from "react";
import ReviewText from "../atoms/ReviewText";
import ReviewAutor from "../atoms/ReviewAutor";

interface Props {
  text: string;
  stars: number;
  name: string;
  logo: string;
}

const ReviewSingle = ({ text, stars, name, logo }: Props) => {
  return (
    <div className="flex-1 flex flex-col gap-5 items-center">
      <ReviewText text={text} />
      <ReviewAutor name={name} stars={stars} logo={logo} />
    </div>
  );
};

export default ReviewSingle;
