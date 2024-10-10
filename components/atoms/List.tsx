import { Check } from "lucide-react";
import React from "react";
import FadeUp from "@/components/atoms/FadeUp";

interface ListProps {
  items: { id: number; title: string }[];
  withCheck?: boolean;
}

const List: React.FC<ListProps> = ({ items, withCheck = true }) => {
  return (
    <ul className="list-none p-0 m-0">
      {items.map((item) => (
        <FadeUp delay={0.5} duration={2} key={item.id}>
          <li className="flex items-center gap-1 py-1 hover:scale-105 hover:opacity-80 transition-all duration-300 ease-in cursor-pointer">
            {withCheck && <Check />}
            {item.title}
          </li>
        </FadeUp>
      ))}
    </ul>
  );
};

export default List;
