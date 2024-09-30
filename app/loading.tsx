"use client";
import Image from "next/image";
import React from "react";
import LoadingBar from "react-top-loading-bar";
import LogoImage from "../public/images/logo-long-no-bckg.png";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoadingBar color="#fff" progress={100} height={10} />;
      <Image src={LogoImage} alt="loading image" />
    </div>
  );
};

export default loading;
