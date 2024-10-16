import OfferTunning from "@/components/organisms/OfferTunning";
import OfferMotorsport from "../../components/organisms/OfferMotorsport";
import OfferService from "../../components/organisms/OfferService";
import AnimatedTransition from "@/components/atoms/AnimatedTransition";
import { Drill, Wrench } from "lucide-react";

const Offers = () => {
  return (
    <div>
      <OfferService />
      <AnimatedTransition
        icon={
          <Wrench className="text-white w-[75px] h-[75px] md:w-[200px] md:h-[200px] opacity-50" />
        }
        quote="TUNNING"
      />
      <OfferTunning />
      <AnimatedTransition
        icon={
          <Drill className="text-white w-[75px] h-[75px] md:w-[200px] md:h-[200px] opacity-50" />
        }
        quote="MOTORSPORT"
      />
      <OfferMotorsport />
    </div>
  );
};

export default Offers;
