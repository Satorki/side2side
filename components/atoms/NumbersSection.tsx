"use client";
import React, { useEffect, useState } from "react";
import { AnimatedNumber } from "./AnimatedNumber";

const NumbersSection = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(2082);
  }, []);

  return (
    <div className="px-10 font-bai flex flex-col gap-4 text-white opacity-90">
      <div className="flex w-full items-center justify-center">
        <div className="text-2xl md:text-4xl text-white opacity-70">
          <AnimatedNumber
            className="inline-flex items-center font-mono text-2xl font-light"
            springOptions={{
              bounce: 0,
              duration: 2000,
            }}
            value={value}
          />
          <p>
            Obsłuzonych
            <br />
            klientów
          </p>
        </div>
        <div className="text-2xl md:text-4xl text-white opacity-70">
          <AnimatedNumber
            className="inline-flex items-center font-mono text-2xl font-light"
            springOptions={{
              bounce: 0,
              duration: 2000,
            }}
            value={value}
          />
          <p>
            Obsłuzonych
            <br />
            klientów
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
