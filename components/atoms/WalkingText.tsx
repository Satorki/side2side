"use client";
import Image from "next/image";
import { InfiniteSlider } from "./InfiniteSlider";
import konopackiImage from "@/public/images/Company-Logos/konopacki0.png";
import adamatImage from "@/public/images/Company-Logos/adamat0.png";
import interImage from "@/public/images/Company-Logos/inter0.png";
import krawczykImage from "@/public/images/Company-Logos/krawczyk0.png";
import swagierImage from "@/public/images/Company-Logos/swagier0.png";
import tmcImage from "@/public/images/Company-Logos/tmc1.jpg";
import wacheImage from "@/public/images/Company-Logos/wache0.png";
import fmicImage from "@/public/images/Company-Logos/fmic0.png";
import Link from "next/link";
import { useEffect, useState } from "react";

const WalkingText = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    {
      index: 0,
      image: konopackiImage,
      alt: "Konopacki racing logo",
      link: "https://www.facebook.com/people/Konopacki-Racing/100093088945236/",
    },
    {
      index: 1,
      image: adamatImage,
      alt: "Adamat performance logo",
      link: "https://www.adamat.com.pl",
    },
    {
      index: 2,
      image: interImage,
      alt: "Intercars logo",
      link: "https://www.intercars.pl",
    },
    {
      index: 3,
      image: krawczykImage,
      alt: "Krawczyk steel & carbon driveshafts logo",
      link: "https://www.waly-krawczyk.pl",
    },
    {
      index: 4,
      image: swagierImage,
      alt: "Swagier motorsport parts logo",
      link: "https://swagier.com/",
    },
    {
      index: 5,
      image: tmcImage,
      alt: "TMC technik logo",
      link: "https://www.tmctechnik.pl/",
    },
    {
      index: 6,
      image: wacheImage,
      alt: "Wache logo",
      link: "https://www.wache.pl",
    },
    {
      index: 7,
      image: fmicImage,
      alt: "FMIC Performance logo",
      link: "https://www.fmic.pl",
    },
  ];

  return (
    <div className="pt-20 md:pt-36 pb-20">
      <div className="max-w-[1200px] mx-auto px-8 font-bai text-white pb-4 md:pb-10">
        <h3 className="text-xl md:text-3xl font-semibold">
          Współpracują z nami:
        </h3>
      </div>
      {isDesktop ? (
        <InfiniteSlider gap={30} reverse duration={40} durationOnHover={90}>
          {images.map((image) => (
            <Link
              key={image.index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={image.image}
                alt={image.alt}
                width={1000}
                height={1000}
                className="w-[150px] md:w-[250px] h-auto object-contain hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </Link>
          ))}
        </InfiniteSlider>
      ) : (
        <div className="flex flex-col gap-4">
          <InfiniteSlider gap={20} reverse duration={40} durationOnHover={90}>
            {images.slice(0, 3).map((image) => (
              <Link
                key={image.index}
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src={image.image}
                  alt={image.alt}
                  width={1000}
                  height={1000}
                  className="w-[150px] md:w-[250px] h-auto object-contain hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </Link>
            ))}
          </InfiniteSlider>
          <InfiniteSlider gap={20} duration={40} durationOnHover={90}>
            {images.slice(3).map((image) => (
              <Link
                key={image.index}
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src={image.image}
                  alt={image.alt}
                  width={1000}
                  height={1000}
                  className="w-[150px] md:w-[250px] h-auto object-contain hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </Link>
            ))}
          </InfiniteSlider>
        </div>
      )}
    </div>
  );
};

export default WalkingText;
