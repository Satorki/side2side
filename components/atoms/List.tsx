import FadeUp from "@/components/atoms/FadeUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

interface ListProps {
  items: { id: number; content?: string; title: string }[];
}

export const List = ({ items }: ListProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (value: string) => {
    setActiveItem((prev) => (prev === value ? null : value));
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="overflow-hidden"
      onValueChange={(value) => handleItemClick(value)}
    >
      {items.map((item) => (
        <FadeUp delay={0.5} duration={1 + item.id} key={item.id}>
          <AccordionItem
            value={`item-${item.id}`}
            className={`transition-opacity duration-300 ${
              activeItem && activeItem !== `item-${item.id}`
                ? "opacity-40"
                : "opacity-100"
            }`}
          >
            <AccordionTrigger className="py-1 text-start hover:text-red-400 transition-all duration-300 ease-in cursor-pointer text-[1.1rem] ">
              {item.title}
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        </FadeUp>
      ))}
    </Accordion>
  );
};

export default List;
