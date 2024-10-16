import Image, { StaticImageData } from "next/image";
import React from "react";

interface OfferTunningTabProps {
  title: string;
  description: string;
  altInfo?: string;
  imageSrc?: StaticImageData;
  imageUnder?: boolean;
}

const OfferTunningTab = ({
  title,
  description,
  altInfo,
  imageSrc,
  imageUnder = true,
}: OfferTunningTabProps) => {
  return (
    <div
      className={`flex ${
        imageUnder ? "flex-row" : "flex-col"
      } gap-1 bg-zinc-900 rounded-2xl relative`}
    >
      <div className="flex flex-col gap-1 p-4 flex-1 z-20">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      <div
        className={`absolute inset-0 z-10 rounded-xl ${
          imageUnder ? "w-[80%]" : "w-full"
        } `}
        style={{
          background: `linear-gradient(to ${
            imageUnder ? "right" : "bottom"
          }, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 90%)`,
        }}
      ></div>
      <div className="z-0">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={altInfo ?? ""}
            className="rounded-2xl w-full h-[300px] object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default OfferTunningTab;
