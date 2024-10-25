import FadeUp from "@/components/atoms/FadeUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

interface ListProps {
  items: { id: number; content?: string; title: string }[];
}

export const List = ({ items }: ListProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // useEffect(() => {
  //   if (items.length > 0) {
  //     setActiveItem(`item-${items[0].id}`);
  //   }
  // }, [items]);

  const handleItemClick = (value: string) => {
    setActiveItem((prev) => (prev === value ? null : value));
  };

  return (
    <Accordion
      type="single"
      value={activeItem ?? ""}
      collapsible={true}
      className="overflow-hidden w-full"
      onValueChange={(value) => handleItemClick(value)}
    >
      {items.map((item) => (
        <FadeUp delay={0.5} duration={1 + item.id} key={item.id}>
          <AccordionItem
            value={`item-${item.id}`}
            className={`transition-opacity duration-300 ${
              activeItem && activeItem !== `item-${item.id}`
                ? "opacity-75"
                : "opacity-100"
            }`}
          >
            <div className="flex gap-5 items-center relative">
              <div>
                <Check />
              </div>
              <AccordionTrigger className="py-1 text-start hover:text-[#ffffff] transition-all duration-300 ease-in cursor-pointer text-[1.1rem] font-bold">
                {item.title}
              </AccordionTrigger>
            </div>
            <AccordionContent className="pl-[2.7rem]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        </FadeUp>
      ))}
    </Accordion>
  );
};

export default List;
