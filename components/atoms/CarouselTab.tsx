import React from "react";
import { CarouselItem } from "./Carousel";
import Image from "next/image";

interface CarouselTabProps {
  image: React.ComponentProps<typeof Image>["src"];
  title: string;
  description: string;
}

const CarouselTab = ({ image, title, description }: CarouselTabProps) => {
  return (
    <div className="flex relative">
      <Image
        src={image}
        alt={title}
        className="object-cover object-center w-full h-full"
      />

      <p className="absolute bottom-0 left-0 right-0 rounded-xl bg-white p-2  font-bai bg-opacity-60 text-center text-black">
        {description}
      </p>
    </div>
  );
};

export default CarouselTab;
