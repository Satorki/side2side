import React from "react";

interface Props {
  text: string;
  isBold?: boolean;
}

const DescriptionSingle = ({ text, isBold }: Props) => {
  return <p className={` ${isBold ? "font-bold" : ""}`}>{text}</p>;
};

export default DescriptionSingle;
