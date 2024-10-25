import DescriptionSingle from "../atoms/DescriptionSingle";
import FadeUp from "../atoms/FadeUp";

const AboutDescriptions = () => {
  return (
    <FadeUp delay={1}>
      <div className="flex flex-col text-xl gap-5 font-bai leading-6 not-italic">
        <DescriptionSingle text="Wiemy, że utrzymanie samochodu w doskonałej formie może być wyzwaniem." />
        <DescriptionSingle text="Naszym celem jest serwisowanie, a także tworzenie pojazdów, które dostarczają niezapomnianych wrażeń na drodze i torze." />
        <DescriptionSingle text="W Side2Side Motorsport łączymy miłość do motoryzacji z wieloletnim doświadczeniem. " />
      </div>
    </FadeUp>
  );
};

export default AboutDescriptions;
