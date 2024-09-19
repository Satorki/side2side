import Image from "next/image";
import React from "react";
import LogoHuge from "../../public/images/logo-long-no-bckg.png";

const LogoBig = () => {
  return (
    <Image
      src={LogoHuge}
      alt="logo big"
      className="max-h-[90px]"
      height={90}
      width={0}
    />
  );
};

export default LogoBig;
