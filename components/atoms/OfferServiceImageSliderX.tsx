import React from "react";
import Image from "next/image";
import { InfiniteSlider } from "./InfiniteSlider";
import Service1 from "../../public/images/Service/offer1.jpg";
import Service2 from "../../public/images/Service/offer2.jpeg";
import Service3 from "../../public/images/Service/offer3.jpeg";
import Service4 from "../../public/images/Service/offer4.jpg";
import Service5 from "../../public/images/Service/offer5.jpg";

const OfferServiceImageSlider = () => {
  const serviceList = [
    Service1,
    Service2,
    Service3,
    Service4,
    Service5,
  ];

  return (
    <div>
      <InfiniteSlider durationOnHover={75} gap={24}>
        {serviceList.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="side2side"
            className="aspect-square w-[100px] rounded-[4px]"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default OfferServiceImageSlider;
