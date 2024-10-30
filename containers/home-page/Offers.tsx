import OfferTunning from "@/components/organisms/OfferTunning";
import OfferMotorsport from "../../components/organisms/OfferMotorsport";
import OfferService from "../../components/organisms/OfferService";
import NumberSection from "@/components/molecules/NumberSection";
import WalkingText from "@/components/atoms/WalkingText";

const Offers = () => {
  return (
    <div>
      <OfferService />
      <NumberSection />
      <OfferTunning />
      <WalkingText />
      <OfferMotorsport />
    </div>
  );
};

export default Offers;
