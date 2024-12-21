import React from "react";
import Image from "next/image";

interface CarouselTabProps {
  image: React.ComponentProps<typeof Image>["src"];
  title: string;
  number?: number;
  description: string;
  showDescription?: boolean;
}

const CarouselTab = ({
  image,
  title,
  number,
  description,
  showDescription = true,
}: CarouselTabProps) => {
  return (
    <div className="flex relative shadow-2xl">
      <Image
        src={image}
        alt={title}
        className="object-cover object-center w-full h-full rounded-xl"
        placeholder="blur"
      />
      {showDescription && (
        <p className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-white p-2  font-bai bg-opacity-80 text-center text-black h-[20%] md:h-[11%] flex items-center justify-center">
          {number}. {description}
        </p>
      )}
    </div>
  );
};

export default CarouselTab;
