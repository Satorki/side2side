import Image, { StaticImageData } from "next/image";

import { Wrench } from "lucide-react";

interface OfferTabProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const OfferTab = ({ image, title, description }: OfferTabProps) => {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="-mx-10 md:-mx-5">
        <Image src={image} alt={title} />
      </div>
      <div className="flex items-center gap-3">
        <h3 className="text-3xl">{title}</h3>
        <Wrench />
      </div>
      <p className="text-xl">{description}</p>
      <ul className="list-disc">
        <li>Regularne przeglądy techniczne</li>
        <li>Diagnostyka i naprawa układów mechanicznych</li>
        <li>Wymiana oleju, filtrów i płynów eksploatacyjnych</li>
        <li>Serwis hamulców, zawieszenia i układu wydechowego</li>
        <li>Obsługa flot pojazdów firmowych (przeglądy, umowy serwisowe)</li>
      </ul>
    </div>
  );
};

export default OfferTab;
