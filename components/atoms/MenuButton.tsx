import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  link: string;
}

const MenuButton = ({ name, link }: Props) => {
  return <Link href={link}>{name}</Link>;
};

export default MenuButton;
