import React from "react";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projectImage1 from "@/public/images/Projects/project10.jpg";
import projectImage2 from "@/public/images/Projects/project2.jpg";
import projectImage3 from "@/public/images/Projects/project3.jpg";
import projectImage4 from "@/public/images/Projects/project4.jpg";
import projectImage5 from "@/public/images/Projects/project5.jpg";
import { Image } from "@nextui-org/react";

const CarouselProject = () => {
  const imageList = [
    {
      id: 1,
      photo: projectImage1,
    },
    {
      id: 2,
      photo: projectImage2,
    },
    {
      id: 3,
      photo: projectImage3,
    },
    {
      id: 4,
      photo: projectImage4,
    },
    {
      id: 5,
      photo: projectImage5,
    },
  ];

  return (
    <Carousel className="w-full flex flex-col justify-center items-center">
      <CarouselContent className="flex items-center">
        {imageList.map((photo) => (
          <CarouselItem key={photo.id}>
            <CardContent className="w-full flex justify-center">
              <Image
                src={photo.photo.src}
                alt={`project1`}
                className="object-cover w-full max-h-[50vh]"
              />
            </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselProject;
