import Engine from "@/public/images/Tunning/silnik2.jpg";
import Pipe from "@/public/images/Tunning/wydechA.jpg";
import Suspension from "@/public/images/Tunning/zawieszenieA.jpg";
import Breaks from "@/public/images/Tunning/hamulceA.jpg";
import Electricity from "@/public/images/Tunning/elektryka.jpg";
import OfferTunningTab from "../atoms/OfferTunningTab";

const OfferTunningElements = () => {

  const tunningList = [
    {
      id: 1,
      title: "Modyfikacje silnika (chip tuning, zmiana mapy silnika)",
      description:
        "Chcesz, aby Twój silnik działał wydajniej i dynamiczniej? Oferujemy modyfikacje takie jak chip tuning i zmiana mapy silnika, aby dostosować jego osiągi do Twoich wymagań. Więcej mocy i lepsza reakcja na pedał gazu to tylko początek.",
      imageSrc: Engine,
    },
    {
      id: 2,
      title: "Optymalizacja układu wydechowego",
      description:
        "Układ wydechowy to kluczowy element wpływający na wydajność pojazdu. Zapewniamy optymalizację, która nie tylko zwiększa moc, ale także nadaje pojazdowi charakterystyczny dźwięk, zachowując przy tym przepisy dotyczące emisji spalin.",
      imageSrc: Pipe,
    },
    {
      id: 3,
      title: "Ulepszenia zawieszenia",
      description:
        "Poczuj różnicę w komforcie i stabilności jazdy dzięki naszym zaawansowanym ulepszeniom zawieszenia. Niezależnie od tego, czy potrzebujesz lepszej przyczepności na torze, czy bardziej komfortowej jazdy po mieście, dostosujemy zawieszenie do Twoich potrzeb.",
      imageSrc: Suspension,
    },
    {
      id: 4,
      title: "Zmiany w układzie hamulcowym dla lepszej wydajności",
      description:
        "Twoje bezpieczeństwo to nasz priorytet. Zmiany w układzie hamulcowym, które oferujemy, zapewnią Ci lepszą kontrolę nad pojazdem, szybsze hamowanie oraz dłuższą żywotność komponentów – idealne dla entuzjastów jazdy sportowej.",
      imageSrc: Breaks,
    },
    {
      id: 5,
      title: "Montaż zaawansowanych systemów elektronicznych",
      description:
        "Nowoczesne pojazdy wymagają nowoczesnych rozwiązań. Oferujemy montaż zaawansowanych systemów elektronicznych, takich jak systemy sterowania, wspomagania jazdy czy telemetrii, które zwiększają precyzję i efektywność pojazdu.",
      imageSrc: Electricity,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 flex-col md:flex-row">
        {tunningList.slice(0, 2).map((item) => (
          <OfferTunningTab
            key={item.id}
            number={item.id}
            title={item.title}
          />
        ))}
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        {tunningList.slice(2, 5).map((item) => (
          <OfferTunningTab
            key={item.id}
            number={item.id}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferTunningElements;
