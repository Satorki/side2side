import OfferTunning from "@/components/organisms/OfferTunning";
import OfferMotorsport from "../../components/organisms/OfferMotorsport";
import OfferService from "../../components/organisms/OfferService";
import WalkingText from "@/components/atoms/WalkingText";

const Offers = () => {
  return (
    <div className="text-white">
      <WalkingText />
      <OfferService />
      <OfferTunning />
      <OfferMotorsport />
    </div>
  );
};

export default Offers;
