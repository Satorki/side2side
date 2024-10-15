import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  ImageCurrent: StaticImageData;
}

const ImageOffer = ({ ImageCurrent }: Props) => {
  return (
    <div className="relative flex-1">
      <Image
        src={ImageCurrent}
        alt="side2side"
        className="object-cover  w-[90%] md:h-full shadow-md m-5 rounded-xl"
      />
    </div>
  );
};

export default ImageOffer;
