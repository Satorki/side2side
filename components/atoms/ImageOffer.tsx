import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  ImageCurrent: StaticImageData;
}

const ImageOffer = ({ ImageCurrent }: Props) => {
  return (
    <div className="flex-1 w-full h-[60vh]">
      <Image
        src={ImageCurrent}
        alt="side2side crew around the car"
        className="rounded-[25px] object-cover w-full h-full"
      />
    </div>
  );
};

export default ImageOffer;
