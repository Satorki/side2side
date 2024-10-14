import React from "react";

const OfferTunning = () => {
  //     <OfferNew
  //     category=""
  //     AnimatedText="Bezpieczny"
  //     title=" Tunning"
  //     description="Specjalizujemy się w tuningu pojazdów, dostosowując je do indywidualnych preferencji klientów i zapewniając optymalne osiągi."
  //     listItems={[
  //       {
  //         id: 1,
  //         title: "Modyfikacje silnika (chip tuning, zmiana mapy silnika)",
  //       },
  //       { id: 2, title: "Optymalizacja układu wydechowego" },
  //       { id: 3, title: "Ulepszenia zawieszenia" },
  //       {
  //         id: 4,
  //         title: "Zmiany w układzie hamulcowym dla lepszej wydajności",
  //       },
  //       { id: 5, title: "Montaż zaawansowanych systemów elektronicznych" },
  //     ]}
  //     ImageCurrent={TunningImage}
  //     isReversed={true}
  //     offerStyle="bg-[#323232]"
  //     buttonText="Umów wizytę"
  //     buttonBgColor="black"
  //     buttonTextColor="white"
  //   />
  const [isWindowMedium, setIsWindowMedium] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowMedium(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="offer">
      <div className="offer-container">
        <div className="flex-1">
          {/* {isWindowMedium && <ImageOffer  />} */}
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="description-container">
            {/* <TitleSection /> */}

            {/* {!isWindowMedium && <ImageOffer ImageCurrent={SerwisImage} />}

            <FadeUp delay={0.5} duration={2}>
              <DescriptionSingle isBold={true} text="Dla entuzjastów rajdów, wyścigów tornych i driftu oferujemy kompleksowe przygotowanie pojazdów do motorsportu." />
              test
            </FadeUp> */}
            {/* <List /> */}
            {/* <ButtonAction /> */}
          </div>
        </div>
        <hr />
      </div>
      <style jsx>{`
        .offer-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: #fff;
          max-width: 1440px;
          margin: 0 auto;
        }
        .description-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          padding: 2rem;
        }
        #offer {
          position: sticky;
          top: 75px;
        }

        @media (max-width: 768px) {
          .offer-container {
            flex-direction: column;
            height: auto;
          }
          .description-container {
            padding: 0rem 1.2rem 2rem 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferTunning;
