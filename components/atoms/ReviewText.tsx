import React from "react";

interface Props {
  text: string;
}

const ReviewText = ({ text }: Props) => {
  return <div className="text-xl italic text-center">{text}</div>;
};

export default ReviewText;
