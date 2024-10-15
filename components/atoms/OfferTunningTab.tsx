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
      } gap-1 p-2 border bg-zinc-900 rounded-2xl justify-center items-center`}
    >
      <div className="flex flex-col gap-1 p-2 flex-1">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex-1">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={altInfo ?? ""}
            className="rounded-2xl max-w-[250px] object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default OfferTunningTab;
