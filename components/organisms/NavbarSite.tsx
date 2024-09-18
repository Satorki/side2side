import React from "react";
import LogoSmall from "../atoms/LogoSmall";
import Menu from "../molecules/Menu";
import PhoneButton from "../atoms/PhoneButton";

const NavbarSite = () => {
  return (
    <div className="flex justify-between mx-3 sm:mx-10 xl:mx-auto xl:max-w-[1200px]">
      {/* <LogoSmall /> */}
      <Menu />
      {/* <PhoneButton /> */}
    </div>
  );
};

export default NavbarSite;
