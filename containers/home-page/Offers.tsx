import OfferTunning from "@/components/organisms/OfferTunning";
import OfferMotorsport from "../../components/organisms/OfferMotorsport";
import OfferService from "../../components/organisms/OfferService";
import NumberSection from "@/components/molecules/NumberSection";
import WalkingText from "@/components/atoms/WalkingText";
import BgTransition from "@/components/atoms/BgTransitionX";

const Offers = () => {
  return (
    <div className="relative z-20">
      <BgTransition>
        <WalkingText />
        <OfferService />
        <OfferTunning />
        <OfferMotorsport />
      </BgTransition>
    </div>
  );
};

export default Offers;
