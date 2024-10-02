import { Button } from "@nextui-org/button";
import { PhoneIncoming } from "lucide-react";
import React from "react";

const ButtonAction = () => {
  return (
    <Button
      className="bg-black text-white max-w-max"
      radius="md"
      size="md"
      endContent={<PhoneIncoming />}
    >
      Umów wizytę
    </Button>
  );
};

export default ButtonAction;
