import OfferTunning from "@/components/organisms/OfferTunning";
import OfferMotorsport from "../../components/organisms/OfferMotorsport";
import OfferService from "../../components/organisms/OfferService";
import OfferLeftMenu from "@/components/atoms/OfferLeftMenu";

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
