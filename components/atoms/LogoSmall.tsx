import React from "react";
import Image from "next/image";
import LogoMini from "../../public/images/icon-no-bckg.png";

const LogoSmall = () => {
  return <Image src={LogoMini} alt="logo small" className="max-w-[100px]" />;
};

export default LogoSmall;
