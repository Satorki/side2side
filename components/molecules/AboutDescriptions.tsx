import React from "react";
import AboutNewDescription from "../atoms/AboutNewDescription";

const AboutDescriptions = () => {
  return (
    <div className="flex flex-col gap-3 text-3xl font-bai ">
      <AboutNewDescription text="Właściciele pojazdów użytkowych, dostawczych i  sportowych, często stają przed wyzwaniami związanymi z ich serwisowaniem." />
      <AboutNewDescription text="Problemy takie jak zużycie części, konieczność modyfikacji silnika czy optymalizacja układu zawieszenia mogą stanowić spore wyzwanie." />
      <hr className="w-1/3" />
      <AboutNewDescription text="W Side2Side Motorsport oferujemy rozwiązania dostosowane do Twoich potrzeb." />
      <hr className="w-1/3" />
      <AboutNewDescription text="Dzięki naszemu doświadczeniu możesz liczyć na profesjonalną obsługę i wsparcie techniczne na każdym etapie." />
    </div>
  );
};

export default AboutDescriptions;