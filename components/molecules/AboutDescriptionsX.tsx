import DescriptionSingle from "../atoms/DescriptionSingle";
import FadeUp from "../atoms/FadeUp";

const AboutDescriptions = () => {
  return (
    <FadeUp delay={1}>
      <div className="flex flex-col text-xl gap-5 font-bai leading-6 not-italic">
        <DescriptionSingle text="Wiemy, że Twój samochód to coś więcej niż tylko pojazd – to pasja i styl życia. Naszą misją jest dostarczanie usług, które zapewnią niezawodność i wyjątkowe osiągi w każdych warunkach. W Side2Side Motorsport łączymy precyzję, doświadczenie i miłość do motoryzacji, by wyjść naprzeciw każdemu wyzwaniu." />
      </div>
    </FadeUp>
  );
};

export default AboutDescriptions;
