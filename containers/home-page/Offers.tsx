import OfferTunning from "@/components/organisms/OfferTunning";
import OfferMotorsport from "../../components/organisms/OfferMotorsport";
import OfferService from "../../components/organisms/OfferService";
import NumberSection from "@/components/molecules/NumberSection";
import WalkingText from "@/components/atoms/WalkingText";
import BgTransition from "@/components/atoms/BgTransition";

const Offers = () => {
  return (
    <div className="bg-[#060606] relative z-20 text-white">
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
