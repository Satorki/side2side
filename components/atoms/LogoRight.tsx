import Image from "next/image";
import React from "react";
import LogoRightImage from "../../public/images/logo-right.png";

const LogoRight = () => {
  return (
    <Image src={LogoRightImage} alt="logo big" className="max-h-[45px] w-auto" />
  );
};

export default LogoRight;
