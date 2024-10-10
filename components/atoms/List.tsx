import { Check } from "lucide-react";
import React from "react";

interface ListProps {
  items: { id: number; title: string }[];
  withCheck?: boolean;
}

const List: React.FC<ListProps> = ({ items, withCheck = true }) => {
  return (
    <ul className="list-none p-0 m-0">
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-1 py-1">
          {withCheck && <Check />}
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default List;
