import OfferTunningTab from "../atoms/OfferTunningTab";
import FadeUp from "../atoms/FadeUp";

const OfferTunningElements = () => {
  const tunningList = [
    {
      id: 1,
      title: "Modyfikacje silnika (chip tuning, turbo, zmiana silnika)",
    },
    {
      id: 2,
      title: "Optymalizacja układu wydechowego",
    },
    {
      id: 3,
      title: "Montaż zaawansowanych systemów elektronicznych",
    },
    {
      id: 4,
      title: "Zmiany w układzie hamulcowym dla lepszej wydajności",
    },
    {
      id: 5,
      title: "Ulepszenia zawieszenia do poprawy stabilizacji",
    },
  ];

  return (
    <div className="flex gap-5 flex-col md:flex-row justify-between flex-wrap items-start">
      {tunningList.map((item) => (
        <FadeUp delay={0.5} duration={1 + item.id} key={item.id}>
          <OfferTunningTab number={item.id} title={item.title} />
        </FadeUp>
      ))}
    </div>
  );
};

export default OfferTunningElements;
