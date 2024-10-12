import React, { useState } from "react";
import FadeUp from "@/components/atoms/FadeUp";

interface ListProps {
  items: { id: number; title: string }[];
  withCheck?: boolean;
}

const List: React.FC<ListProps> = ({ items, withCheck = true }) => {
  const [clickedItemId, setClickedItemId] = useState<number | null>(null);

  const handleOnClick = (id: number) => {
    setClickedItemId(id);
    setTimeout(() => {
      setClickedItemId(null);
    }, 1000);
  };

  return (
    <ul className="list-none p-0 m-0">
      {items.map((item) => (
        <FadeUp delay={0.5} duration={1 + item.id} key={item.id}>
          <li
            onClick={() => handleOnClick(item.id)}
            style={{
              color: clickedItemId === item.id ? "black" : undefined,
            }}
            className="flex items-center gap-1 py-1 hover:scale-105 transition-all duration-300 ease-in cursor-pointer"
          >
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

