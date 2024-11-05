"use client";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "./AnimatedNumber";

interface NumberTabProps {
  titleUp?: string;
  titleDown?: string;
  value: number;
  symbol?: string;
}

const NumberTab = ({
  titleUp,
  titleDown,
  value: initialValue,
  symbol,
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
      <div className="flex justify-center items-center gap-1">
        <AnimatedNumber
          className="inline-flex items-center font-mono text-4xl md:text-7xl"
          springOptions={{
            bounce: 0,
            duration: 4000,
          }}
          value={value}
        />
        <p className="text-3xl">{symbol}</p>
      </div>
      <p className="text-sm text-center leading-6 tracking-wide">
        {titleUp}
        <br />
        {titleDown}
      </p>
    </div>
  );
};

export default NumberTab;
