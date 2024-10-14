import React, { useRef } from "react";
import { TextEffect } from "./TextEffect";
import { useInView } from "framer-motion";

interface Props {
  text: string;
}

const ReviewText = ({ text }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-xl italic text-center">
      <TextEffect per="word" preset="blur" trigger={isInView}>
        {text}
      </TextEffect>
    </div>
  );
};

export default ReviewText;
