import { StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";

interface ReviewAutorProps {
  name: string;
  stars: number;
  logo: string;
}
const ReviewAutor = ({ name, stars, logo }: ReviewAutorProps) => {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex flex-col gap-2">
        {name}
        <div className="flex text-yellow-300">
        {[...Array(stars)].map((_, i) => (
          <StarFilledIcon key={i} />
        ))}
        </div>
      </div>
      <div>{logo}</div>
    </div>
  );
};

export default ReviewAutor;
