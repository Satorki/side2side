"use client";
import OfferNew from "@/components/molecules/OfferNew";
import SerwisImage from "@/public/images/Offer/offer2.jpeg";
import TunningImage from "@/public/images/Offer/offer5.jpg";
// import MotorsportImage from "@/public/images/Offer/offer9.jpg";
import { PhoneIncoming } from "lucide-react";

const Offers = () => {
  return (
    <div id="offers">
      <OfferNew
        category=""
        AnimatedText="Sprawdzony"
        title=" Serwis"
        description="Oferujemy kompleksowy serwis dla pojazdów osobowych i dostawczych do 3,5 tony, zapewniając ich sprawność w codziennym użytkowaniu."
        listItems={[
          { id: 1, title: "Regularne przeglądy techniczne" },
          { id: 2, title: "Diagnostyka i naprawa układów mechanicznych" },
          {
            id: 3,
            title: "Wymiana oleju, filtrów i płynów eksploatacyjnych",
          },
          {
            id: 4,
            title: "Serwis hamulców, zawieszenia i układu wydechowego",
          },
          {
            id: 5,
            title:
              "Obsługa flot pojazdów firmowych (przeglądy, umowy serwisowe)",
          },
        ]}
        ImageCurrent={SerwisImage}
        buttonText="Zadzwoń"
        buttonBgColor="black"
        buttonTextColor="white"
        buttonIcon={<PhoneIncoming />}
        offerStyle="bg-red-600"
      />
      <OfferNew
        category=""
        AnimatedText="Bezpieczny"
        title=" Tunning"
        description="Specjalizujemy się w tuningu pojazdów, dostosowując je do indywidualnych preferencji klientów i zapewniając optymalne osiągi."
        listItems={[
          {
            id: 1,
            title: "Modyfikacje silnika (chip tuning, zmiana mapy silnika)",
          },
          { id: 2, title: "Optymalizacja układu wydechowego" },
          { id: 3, title: "Ulepszenia zawieszenia" },
          {
            id: 4,
            title: "Zmiany w układzie hamulcowym dla lepszej wydajności",
          },
          { id: 5, title: "Montaż zaawansowanych systemów elektronicznych" },
        ]}
        ImageCurrent={TunningImage}
        isReversed={true}
        offerStyle="bg-[#323232]"
        buttonText="Umów wizytę"
        buttonBgColor="black"
        buttonTextColor="white"
      />
      {/* <OfferNew
        category=""
        AnimatedText="Wsparcie"
        title=" Motorsport"
        description="Dla entuzjastów rajdów, wyścigów tornych i driftu oferujemy kompleksowe przygotowanie pojazdów do motorsportu."
        listItems={[
          {
            id: 1,
            title: "Przygotowanie techniczne samochodów do zawodów",
            content:
              "Twoje auto potrzebuje precyzyjnych przygotowań, aby sprostać wymaganiom zawodów? Oferujemy kompleksowe przygotowanie techniczne, zapewniając, że każdy aspekt Twojego pojazdu będzie gotowy do startu – od silnika po zawieszenie.",
          },
          {
            id: 2,
            title: "Tuning pod kątem specyficznych dyscyplin sportowych",
            content:
              "Każda dyscyplina motorsportu ma swoje wymagania. Niezależnie od tego, czy to rajdy, wyścigi torowe czy drift, dostosujemy Twój samochód do specyfiki zawodów, aby osiągnąć maksymalne wyniki w konkretnej konkurencji.",
          },
          {
            id: 3,
            title: "Obsługa techniczna pojazdów na eventach motoryzacyjnych",
            content:
              "Zapewniamy pełną obsługę techniczną Twojego pojazdu podczas eventów. Nasi specjaliści zadbają o sprawność auta, tak abyś mógł skupić się wyłącznie na zawodach i osiąganiu jak najlepszych wyników.",
          },
          {
            id: 4,
            title: "Wsparcie techniczne podczas zawodów i pokazów",
            content:
              "Niezależnie od miejsca i czasu, nasze wsparcie techniczne podczas zawodów czy pokazów motoryzacyjnych jest dostępne dla Ciebie. Jesteśmy na miejscu, aby szybko i skutecznie rozwiązywać ewentualne problemy techniczne.",
          },
          {
            id: 5,
            title: "Modyfikacje układów napędowych i aerodynamicznych",
            content:
              "Oferujemy modyfikacje układów napędowych i aerodynamicznych, które zapewnią lepsze przyspieszenie, większą stabilność i optymalne osiągi na torze. Spraw, aby Twój pojazd był liderem na zawodach.",
          },
        ]}
        ImageCurrent={MotorsportImage}
        offerStyle="bg-black"
        buttonText="Sprawdź"
        buttonBgColor="red"
        buttonTextColor="white"
      /> */}
    </div>
  );
};

export default Offers;
