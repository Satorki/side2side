import FadeUp from "@/components/atoms/FadeUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./Carousel";
import CarouselTab from "./CarouselTab";

interface SpecialListProps {
  items: { id: number; content?: string; title: string; gallery?: string[] }[];
}

export const SpecialList = ({ items }: SpecialListProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    if (items.length > 0) {
      setActiveItem(`item-${items[0].id}`);
    }
  }, [items]);

  const handleItemClick = (value: string) => {
    setActiveItem((prev) => (prev === value ? null : value));
  };

  return (
    <Accordion
      type="single"
      value={activeItem ?? ""}
      collapsible={true}
      className="overflow-hidden w-full font-bai"
      onValueChange={(value) => handleItemClick(value)}
    >
      {items.map((item) => (
        <FadeUp delay={0.5} duration={1 + item.id} key={item.id}>
          <AccordionItem
            value={`item-${item.id}`}
            className={`transition-opacity duration-300 ${
              activeItem && activeItem !== `item-${item.id}`
                ? "opacity-60"
                : "opacity-100"
            }`}
          >
            <div>
              <AccordionTrigger className="py-1 text-start hover:text-[#ffffff] transition-all duration-300 ease-in cursor-pointer text-[1.1rem]">
                {item.title}
              </AccordionTrigger>
            </div>
            <AccordionContent>
              {item.gallery && item.gallery.length > 0 && (
                <Carousel initialIndex={0} className="w-full">
                  <CarouselContent>
                    {item.gallery.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 pl-6">
                        <CarouselTab
                          image={image}
                          title=""
                          description=""
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              )}
              <p className="mb-4">{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        </FadeUp>
      ))}
    </Accordion>
  );
};

export default SpecialList;
