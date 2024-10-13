import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  ImageCurrent: StaticImageData;
}

const ImageOffer = ({ ImageCurrent }: Props) => {
  return (
    <div className="flex-1 w-full h-[70vh] scale-125 md:scale-100">
      <Image
        src={ImageCurrent}
        alt="side2side"
        className="object-cover w-full h-full object-center shadow-md"
      />
    </div>
  );
};

export default ImageOffer;
