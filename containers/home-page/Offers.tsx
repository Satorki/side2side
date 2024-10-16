import OfferTunning from "@/components/organisms/OfferTunning";
import OfferMotorsport from "../../components/organisms/OfferMotorsport";
import OfferService from "../../components/organisms/OfferService";
import AnimatedTransition from "@/components/atoms/AnimatedTransition";
import { Wrench } from "lucide-react";

const Offers = () => {
  return (
    <div>
      <OfferService />
      
      <OfferTunning />
      
      <OfferMotorsport />
    </div>
  );
};

export default Offers;
