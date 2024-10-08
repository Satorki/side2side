import { Check } from "lucide-react";
import React from "react";

interface ListProps {
  items: { id: number; title: string }[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list-none p-0 m-0 space-y-2">
      {items.map((item) => (
        <li key={item.id} className="p-3  flex items-center gap-3">
          <Check />
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default List;
