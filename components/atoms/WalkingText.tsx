import Image from "next/image";
import { InfiniteSlider } from "./InfiniteSlider";
import konopackiImage from "@/public/images/Company-Logos/konopacki0.png";
import adamatImage from "@/public/images/Company-Logos/adamat0.png";
import interImage from "@/public/images/Company-Logos/inter0.png";
import krawczykImage from "@/public/images/Company-Logos/krawczyk0.png";
import swagierImage from "@/public/images/Company-Logos/swagier0.png";
import tmcImage from "@/public/images/Company-Logos/tmc0.png";
import wacheImage from "@/public/images/Company-Logos/wache0.png";

const WalkingText = () => {
  const images = [
    { index: 0, image: konopackiImage, alt: "Konopacki racing logo" },
    {
      index: 1,
      image: adamatImage,
      alt: "Adamat logo",
    },
    { index: 2, image: interImage, alt: "Inter logo" },
    { index: 3, image: krawczykImage, alt: "Krawczyk logo" },
    { index: 4, image: swagierImage, alt: "Swagier logo" },
    { index: 5, image: tmcImage, alt: "TMC logo" },
    { index: 6, image: wacheImage, alt: "Wache logo" },
  ];

  return (
    <div className="py-36">
      <div className="max-w-[1200px] mx-auto px-8 font-bai text-white">
        <h3 className="text-xl md:text-3xl font-semibold">
          Współpracują z nami:
        </h3>
      </div>
      <div className="text-[var(--color-text)] font-bai tracking-tighter">
        <InfiniteSlider gap={24} duration={60} reverse durationOnHover={90}>
          {images.map((image) => (
            <Image
              key={image.index}
              src={image.image}
              alt={image.alt}
              width={1000}
              height={1000}
              className="w-[250px] h-auto object-contain"
            />
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default WalkingText;
