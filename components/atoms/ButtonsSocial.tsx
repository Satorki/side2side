import { InstagramLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const ButtonsSocial = () => {
  return (
    <div className="flex gap-2">
      <FaFacebook /> <InstagramLogoIcon />{" "}
    </div>
  );
};

export default ButtonsSocial;
