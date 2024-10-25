import { Button } from "@/components/ui/button";
import React from "react";
import { BorderTrail } from "./BorderTrail";

interface Props {
  bgColor?: string;
  textColor?: string;
  text?: string;
  icon?: React.ReactNode;
  hasBorderTrail?: boolean;
}

const ButtonAction = ({ bgColor, textColor, text, icon, hasBorderTrail }: Props) => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: bgColor ? bgColor : "#1976d2",
          color: textColor ? textColor : "#fff",
          borderRadius: 10,
        }}
        className="max-w-max text-xl py-5 px-6 flex gap-2 items-center justify-center font-robotoCondensed font-bold transition-all duration-300 ease-in-out hover:shadow-[0_0_1px_2px_#fff] active:shadow-[0_0_0_3px_#fff] relative my-2 font-bai"
      >
        {text}
        {icon}
        {hasBorderTrail && <BorderTrail />} 
      </Button>
    </div>
  );
};

export default ButtonAction;
