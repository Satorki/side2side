import OfferTunning from "@/components/organisms/OfferTunning";
import OfferMotorsport from "../../components/organisms/OfferMotorsport";
import OfferService from "../../components/organisms/OfferService";
import AnimatedTransition from "@/components/atoms/AnimatedTransition";

const Offers = () => {
  return (
    <div>
      <OfferService />
      <AnimatedTransition />
      <OfferTunning />
      <AnimatedTransition />
      <OfferMotorsport />
    </div>
  );
};

export default Offers;
