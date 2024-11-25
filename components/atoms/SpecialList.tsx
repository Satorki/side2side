"use client";
import FadeUp from "@/components/atoms/FadeUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

interface SpecialListProps {
  items: { id: number; content?: string; title: string; gallery?: string[] }[];
}

export const SpecialList = ({ items }: SpecialListProps) => {
  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
  };

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
      className="overflow-hidden font-bai"
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
            <AccordionContent className="flex flex-col items-center space-y-4">
              {item.gallery && item.gallery.length > 0 && (
                <div className="w-[50vh]">
                  <Slider {...settings}>
                    {item.gallery.map((image, index) => (
                      <div key={index} className="w-full h-full pt-5">
                        <Image
                          src={image}
                          alt={`Image ${index}`}
                          className="object-cover object-center w-full h-full rounded-xl"
                          width={1000}
                          height={1000}
                        />
                        <p className="pt-5">{item.content}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </FadeUp>
      ))}
    </Accordion>
  );
};

export default SpecialList;
