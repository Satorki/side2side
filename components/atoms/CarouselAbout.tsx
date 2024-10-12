"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import service1 from "../../public/images/Offer/offer5.jpg";
import service2 from "../../public/images/Additional/repairing.jpg";

const CarouselAbout = () => {
  const images = [service1, service2];

  const settings = {
    className: "md:h-[50vh] flex justify-center items-center",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    fade: true,
  };
  return (
    <div className="w-[40vw]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-5 focus:outline-none">
            <Image
              src={image}
              alt="project"
              className="rounded-xl md:rounded-2xl transition-transform duration-300"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselAbout;
