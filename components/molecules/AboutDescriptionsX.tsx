import DescriptionSingle from "../atoms/DescriptionSingle";

const AboutDescriptions = () => {
  return (
    <div className="flex flex-col gap-3 text-xl font-bai leading-8 italic h-[300vh]">
      <DescriptionSingle text="Właściciele pojazdów użytkowych, dostawczych i  sportowych, często stają przed wyzwaniami związanymi z ich serwisowaniem." />
      <DescriptionSingle text="Problemy takie jak zużycie części, konieczność modyfikacji silnika czy optymalizacja układu zawieszenia mogą stanowić spore wyzwanie." />
      <hr />
      <DescriptionSingle text="W Side2Side Motorsport oferujemy rozwiązania dostosowane do Twoich potrzeb." />
      <hr />
      <DescriptionSingle text="Dzięki naszemu doświadczeniu możesz liczyć na profesjonalną obsługę i wsparcie techniczne na każdym etapie." />
    </div>
  );
};

export default AboutDescriptions;
