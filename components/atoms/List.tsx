import React, { useState } from "react";
import FadeUp from "@/components/atoms/FadeUp";

interface ListProps {
  items: { id: number; title: string }[];
  withCheck?: boolean;
}

const List = ({ items, withCheck = true }: ListProps) => {
  return (
    <ul className="list-none p-0 m-0 overflow-hidden">
      {items.map((item) => (
        <FadeUp delay={0.5} duration={1 + item.id} key={item.id}>
          <li className="flex items-center gap-1 py-1 hover:scale-105 hover:translate-x-5 transition-all duration-300 ease-in cursor-pointer">
            {withCheck}
            {item.title}
          </li>
          <hr />
        </FadeUp>
      ))}
    </ul>
  );
};

export default List;
