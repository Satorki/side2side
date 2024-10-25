import React from "react";
import OfferServiceTab from "../atoms/OfferServiceTab";
import {
  Cable,
  Car,
  CircleDot,
  Disc3,
  Droplets,
  Squircle,
  TestTubeDiagonal,
  Wrench,
} from "lucide-react";
import FadeUp from "../atoms/FadeUp";

const OfferServiceElements = () => {
  const servicesList = [
    {
      id: 1,
      title: "Przeglądy techniczne",
      description:
        "Zadbaj o niezawodność swojego pojazdu dzięki regularnym przeglądom, które pozwolą uniknąć niespodziewanych usterek.",
      icon: <Wrench />,
    },
    {
      id: 2,
      title: "Elektryka i Elektronika samochodowa",
      icon: <Cable />,
    },
    {
      id: 3,
      title: "Wymiana szyb",
      icon: <Squircle />,
    },
    {
      id: 4,
      title: "Naprawa i wymiana opon",
      icon: <CircleDot />,
    },
    {
      id: 5,
      title: "Diagnostyka i naprawa układów mechanicznych",
      description:
        "Precyzyjna diagnostyka i szybka naprawa mechaniki pojazdu – od silnika po układ wydechowy.",
      icon: <TestTubeDiagonal />,
    },
    {
      id: 6,
      title: "Wymiana oleju, filtrów i płynów eksploatacyjnych",
      description:
        "Utrzymuj swoje auto w pełnej sprawności dzięki regularnej wymianie oleju i filtrów.",
      icon: <Droplets />,
    },
    {
      id: 7,
      title: "Serwis hamulców, zawieszenia i układu wydechowego",
      description:
        "Zadbaj o bezpieczeństwo i komfort, serwisując kluczowe układy, takie jak hamulce czy zawieszenie.",
      icon: <Disc3 />,
    },
    {
      id: 8,
      title: "Obsługa flot pojazdów firmowych",
      description:
        "Kompleksowa obsługa flot – indywidualne umowy serwisowe i regularne przeglądy zapewniają ciągłość działania Twojej floty.",
      icon: <Car />,
    },
  ];

  return (
    <div className="flex flex-col gap-5 xl:gap-8 flex-wrap justify-between">
      {servicesList.map((service) => (
        <FadeUp duration={service.id} key={service.id}>
          <OfferServiceTab icon={service.icon} title={service.title} />
        </FadeUp>
      ))}
    </div>
  );
};

export default OfferServiceElements;
