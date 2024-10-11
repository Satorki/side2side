"use client";
import OfferNew from "@/containers/home-page/OfferNew";
import SerwisImage from "@/public/images/Additional/repairing.jpg";
import TunningImage from "@/public/images/Projects/project4.jpg";
import MotorsportImage from "@/public/images/Offer/offer9.jpg";

const Offers = () => {
  return (
    <div id="offers" className="relative z-[1]">
      <div className="h-[30vh] opacity-0"></div>
      <div className="relative z-[2]">
        <OfferNew
          category=""
          title="Sprawdzony Serwis"
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
        />
      </div>
      <div className="h-[30vh] opacity-0"></div>
      <OfferNew
        category=""
        title="Bezpieczny Tunning"
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
      />
      <div className="h-[30vh] opacity-0"></div>
      <OfferNew
        category=""
        title="Wsparcie Motorsport"
        description="Dla entuzjastów rajdów, wyścigów tornych i driftu oferujemy kompleksowe przygotowanie pojazdów do motorsportu."
        listItems={[
          { id: 1, title: "Przygotowanie techniczne samochodów do zawodów" },
          {
            id: 2,
            title: "Tuning pod kątem specyficznych dyscyplin sportowych",
          },
          {
            id: 3,
            title: "Obsługa techniczna pojazdów na eventach motoryzacyjnych",
          },
          { id: 4, title: "Wsparcie techniczne podczas zawodów i pokazów" },
          { id: 5, title: "Modyfikacje układów napędowych i aerodynamicznych" },
        ]}
        ImageCurrent={MotorsportImage}
      />
      <div className="h-[10vh] opacity-0"></div>
      <style jsx>{`
        #offers {
          background: black;
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default Offers;
