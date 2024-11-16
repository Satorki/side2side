import React from "react";
import { BorderTrail } from "./BorderTrail";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  bgColor?: string;
  textColor?: string;
  text?: string;
  icon?: React.ReactNode;
  hasBorderTrail?: boolean;
  address?: string;
  offset?: number;
  onClick?: () => void;
}

const ButtonAction = ({
  bgColor,
  textColor,
  text,
  icon,
  hasBorderTrail,
  address = "",
  offset = 0,
  onClick: onclick,
}: Props) => {
  const isExternal =
    address.startsWith("http://") ||
    address.startsWith("https://") ||
    address.startsWith("tel:");

  return isExternal ? (
    <a
      href={address}
      target={address.startsWith("http") ? "_blank" : undefined}
      rel={address.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{
        backgroundColor: bgColor ? bgColor : "#1976d2",
        color: textColor ? textColor : "#fff",
        borderRadius: 10,
      }}
      className="max-w-max text-xl py-2 px-6 flex gap-2 items-center justify-center font-bai font-bold transition-all duration-300 ease-in-out hover:shadow-[0_0_1px_2px_#fff] active:shadow-[0_0_0_3px_#fff] relative my-2 cursor-pointer"
    >
      {text}
      {icon}
      {hasBorderTrail && <BorderTrail />}
    </a>
  ) : (
    <ScrollLink
      to={address}
      smooth={true}
      offset={offset}
      duration={1000}
      onClick={onclick}
      style={{
        backgroundColor: bgColor ? bgColor : "#1976d2",
        color: textColor ? textColor : "#fff",
        borderRadius: 10,
      }}
      className="max-w-max text-xl py-2 px-6 flex gap-2 items-center justify-center font-bai font-bold transition-all duration-300 ease-in-out hover:shadow-[0_0_1px_2px_#fff] active:shadow-[0_0_0_3px_#fff] relative my-2 cursor-pointer"
    >
      {text}
      {icon}
      {hasBorderTrail && <BorderTrail />}
    </ScrollLink>
  );
};

export default ButtonAction;
