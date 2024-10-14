import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  ImageCurrent: StaticImageData;
}

const ImageOffer = ({ ImageCurrent }: Props) => {
  return (
    <div className="relative flex-1 w-[115%] md:w-full md:ml-0 -ml-5 h-[70vh] md:py-0">
      <Image
        src={ImageCurrent}
        alt="side2side"
        className="object-cover w-full h-full object-center shadow-md"
      />

    </div>
  );
};

export default ImageOffer;
