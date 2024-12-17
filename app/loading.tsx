"use client";
import React from "react";
import LoadingBar from "react-top-loading-bar";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoadingBar color="#fff" progress={100} height={10} />;
    </div>
  );
};

export default loading;
