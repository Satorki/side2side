import React from "react";
import OfferNew from "../../components/molecules/OfferNew";
import MapImage from "@/public/images/map.png";

const Contact = () => {
  return (
    <div>
      <OfferNew
        category="Kontakt"
        title="Skontaktuj sie z nami"
        description=""
        listItems={[
          { id: 1, title: "Adres: 59A, 64-200 Nowe Tłoki" },
          { id: 2, title: "Otwarte od Poniedziałku do Piatku." },
          { id: 3, title: "Godziny: 08:00 - 16:00" },
          { id: 4, title: "Telefon: 533 025 109" },
          { id: 5, title: "side2side.garage@gmail.com" },
        ]}
        ImageCurrent={MapImage}
        withCheck={false}
        isReversed
      />
    </div>
  );
};

export default Contact;
