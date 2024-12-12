import OfferTunning from "@/components/organisms/OfferTunning";
import OfferMotorsport from "../../components/organisms/OfferMotorsport";
import OfferService from "../../components/organisms/OfferService";
import OfferSpecial from "@/components/organisms/OfferSpecial";

const Offers = () => {
  return (
    <div className="text-[var(--color-text)]">
      <OfferService />
      <OfferTunning />
      <OfferMotorsport />
      <OfferSpecial />
    </div>
  );
};

export default Offers;
