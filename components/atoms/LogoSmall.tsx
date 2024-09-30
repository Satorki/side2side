import React from "react";
import Image from "next/image";
import LogoMini from "../../public/images/logo-left-side.png";

const LogoSmall = () => {
  return (
    <Image
      src={LogoMini}
      alt="logo small"
      className="max-h-[45px] w-auto inline-block"
    />
  );
};

export default LogoSmall;
