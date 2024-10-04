import Image from "next/image";
import React from "react";
import LogoHuge from "../../public/images/Logos/logo-right-side.png";

const LogoBig = () => {
  return (
    <Image src={LogoHuge} alt="logo big" className="h-[45px] w-auto" />
  );
};

export default LogoBig;
