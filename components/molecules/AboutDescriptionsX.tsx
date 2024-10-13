import DescriptionSingle from "../atoms/DescriptionSingle";

const AboutDescriptions = () => {
  return (
    <div className="flex flex-col text-xl font-bai leading-6">
      <div className="text-2xl not-italic font-semibold  mb-1">
        Twoje wyzwania, nasze rozwiązania.
      </div>
      <DescriptionSingle
        text="
Niezależnie od tego, czy masz samochód dostawczy, sportowy, czy codzienny, wiemy, że utrzymanie go w doskonałej formie może być wyzwaniem."
      />
      <div className="text-2xl not-italic font-semibold mt-5 mb-1">
        Profesjonalizm na każdym etapie.
      </div>
      <DescriptionSingle
        text="
W Side2Side Motorsport łączymy miłość do motoryzacji z wieloletnim doświadczeniem. "
      />
      <div className="py-2"></div>
      <DescriptionSingle
        text="
Oferujemy kompleksową obsługę – od rutynowych przeglądów po zaawansowane przygotowanie pojazdów do motorsportu."
      />
      <div className="py-2"></div>
      <DescriptionSingle text=" Naszym celem jest serwisowanie, a także tworzenie pojazdów, które dostarczają niezapomnianych wrażeń na drodze i torze." />
    </div>
  );
};

export default AboutDescriptions;
