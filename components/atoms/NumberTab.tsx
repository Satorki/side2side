"use client";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "./AnimatedNumber";

interface NumberTabProps {
  titleUp?: string;
  titleDown?: string;
  value: number;
}

const NumberTab = ({
  titleUp,
  titleDown,
  value: initialValue,
}: NumberTabProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setValue(initialValue);
    }
  }, [isInView, initialValue]);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 w-full items-center justify-center text-white"
    >
      <AnimatedNumber
        className="inline-flex items-center font-mono text-2xl md:text-4xl"
        springOptions={{
          bounce: 0,
          duration: 4000,
        }}
        value={value}
      />
      <p className="text-center">
        {titleUp}
        <br />
        {titleDown}
      </p>
    </div>
  );
};

export default NumberTab;
