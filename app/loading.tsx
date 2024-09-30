"use client";
import React from "react";
import LoadingBar from "react-top-loading-bar";

const loading = () => {
  return 
  <div className="flex justify-center items-center">
  <LoadingBar color="#96656f" progress={100} height={3}  />;
  </div>
};

export default loading;
