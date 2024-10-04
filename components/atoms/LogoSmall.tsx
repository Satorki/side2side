import React from "react";
import Image from "next/image";
import LogoMini from "../../public/images/Logos/logo-left-side.png";

const LogoSmall = () => {
  return (
    <Image src={LogoMini} alt="logo small" className="h-[45px] w-auto z-20" />
  );
};

export default LogoSmall;
