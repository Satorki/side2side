import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  ImageCurrent: StaticImageData;
}

const ImageOffer = ({ ImageCurrent }: Props) => {
  return (
    <div className="relative flex-1 md:w-full md:ml-0  md:h-screen md:py-0">
      <Image
        src={ImageCurrent}
        alt="side2side"
        className="object-cover w-full h-full object-center shadow-md"
      />
    </div>
  );
};

export default ImageOffer;
