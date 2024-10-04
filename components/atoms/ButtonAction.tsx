import { Button } from "@/components/ui/button";
import { PhoneIncoming } from "lucide-react";
import React from "react";

interface Props {
  bgColor?: string;
  textColor?: string;
  text?: string;
}

const ButtonAction = ({ bgColor, textColor, text }: Props) => {
  return (
    <Button
      style={{
        backgroundColor: bgColor ? bgColor : "#1976d2",
        color: textColor ? textColor : "#fff",
        borderRadius: 10,
      }}
      className="max-w-max text-xl py-5 px-6 flex gap-2 items-center"
    >
      {text}
      <PhoneIncoming />
    </Button>
  );
};

export default ButtonAction;
