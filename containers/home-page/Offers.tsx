import OfferTunning from "@/components/organisms/OfferTunning";
import OfferMotorsport from "../../components/organisms/OfferMotorsport";
import OfferService from "../../components/organisms/OfferService";
import WalkingText from "@/components/atoms/WalkingText";
import OfferSpecial from "@/components/organisms/OfferSpecial";

const Offers = () => {
  return (
    <div className="text-[var(--color-text)]">
      <WalkingText />
      <OfferService />
      <OfferTunning />
      <OfferMotorsport />
      <OfferSpecial />
    </div>
  );
};

export default Offers;
