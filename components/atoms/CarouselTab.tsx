import React from "react";
import Image from "next/image";

interface CarouselTabProps {
  image: React.ComponentProps<typeof Image>["src"];
  title: string;
  description: string;
}

const CarouselTab = ({ image, title, description }: CarouselTabProps) => {
  return (
    <div className="flex relative shadow-2xl">
      <Image
        src={image}
        alt={title}
        className="object-cover object-center w-full h-full rounded-xl"
        loading="lazy"
      />

      <p className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-white p-2  font-bai bg-opacity-80 text-center text-black h-[20%]  md:h-[11%]">
        {description}
      </p>
    </div>
  );
};

export default CarouselTab;
