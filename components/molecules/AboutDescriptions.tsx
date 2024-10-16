import DescriptionSingle from "../atoms/DescriptionSingle";

const AboutDescriptions = () => {
  return (
    <div className="flex flex-col text-xl font-bai leading-6">
      <DescriptionSingle
        text="
Niezależnie od tego, czy masz samochód dostawczy, sportowy, czy codzienny, wiemy, że utrzymanie go w doskonałej formie może być wyzwaniem."
      />
      <div className="py-1"></div>
      <DescriptionSingle
        text="
W Side2Side Motorsport łączymy miłość do motoryzacji z wieloletnim doświadczeniem. "
      />
      <div className="py-1"></div>

      <DescriptionSingle
        text="
Oferujemy kompleksową obsługę – od rutynowych przeglądów po zaawansowane przygotowanie pojazdów do motorsportu."
      />

      <div className="py-2"></div>
      <DescriptionSingle text="Naszym celem jest serwisowanie, a także tworzenie pojazdów, które dostarczają niezapomnianych wrażeń na drodze i torze." />
    </div>
  );
};

export default AboutDescriptions;
