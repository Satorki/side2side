import React, { useRef } from "react";

import { useInView } from "framer-motion";
import FadeUp from "./FadeUp";

interface Props {
  text: string;
}

const ReviewText = ({ text }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-xl italic text-center">
      <FadeUp delay={1}>{text}</FadeUp>
    </div>
  );
};

export default ReviewText;
