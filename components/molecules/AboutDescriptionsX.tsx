import DescriptionSingle from "../atoms/DescriptionSingle";

const AboutDescriptions = () => {
  return (
    <div className="flex flex-col gap-3 text-xl font-bai leading-8 italic">
      <DescriptionSingle
        text="
W Side2Side Motorsport łączymy miłość do motoryzacji z wieloletnim doświadczeniem. Naszym celem serwisowanie, a także tworzenie pojazdów, które dostarczają niezapomnianych wrażeń na drodze i torze."
      />
      <hr />
      <DescriptionSingle
        text="
Niezależnie od tego, czy masz samochód dostawczy, sportowy, czy codzienny, wiemy, że utrzymanie go w doskonałej formie może być wyzwaniem. Od wymiany części po tuning silnika i optymalizację zawieszenia – jesteśmy tu, aby pomóc."
      />
      <hr />
      <DescriptionSingle
        text="
Oferujemy kompleksową obsługę – od rutynowych przeglądów po zaawansowane przygotowanie pojazdów do motorsportu. Z nami Twój pojazd jest w najlepszych rękach, a Ty możesz liczyć na indywidualne podejście i wsparcie techniczne."
      />
    </div>
  );
};

export default AboutDescriptions;
