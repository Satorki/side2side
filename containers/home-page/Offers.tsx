import OfferTunning from "@/components/organisms/OfferTunning";
import OfferMotorsport from "../../components/organisms/OfferMotorsport";
import OfferService from "../../components/organisms/OfferService";
import NumberSection from "@/components/molecules/NumberSection";
import WalkingText from "@/components/atoms/WalkingText";

const Offers = () => {
  return (
    <div className="bg-[#302d2d] relative z-20">
      <WalkingText />
      <OfferService />
      <OfferTunning />
      <OfferMotorsport />
    </div>
  );
};

export default Offers;
