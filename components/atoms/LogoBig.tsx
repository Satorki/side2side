import Image from "next/image";
import React from "react";
import LogoHuge from "../../public/images/logo-long-no-bckg.png";

const LogoBig = () => {
  return <Image src={LogoHuge} alt="logo big" />;
};

export default LogoBig;
