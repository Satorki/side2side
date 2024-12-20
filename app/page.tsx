"use client";
import Offers from "@/containers/home-page/Offers";
import About from "@/containers/home-page/About";
import Contact from "@/containers/home-page/Contact";
import Hero from "@/containers/home-page/Hero";
import Projects from "@/containers/home-page/Projects";
import Rewievs from "@/containers/home-page/Rewievs";
import OffersAll from "@/containers/home-page/OffersAll";
import NumberSection from "@/components/molecules/NumberSection";
import BgTransition from "@/components/atoms/BgTransition";
import WalkingText from "@/components/atoms/WalkingText";

// odstepy miedyzliterowe dla description w calej stronie wieksze
// bez bolda dla description w calej stronie
// mozna wyrownac do gory wszystkie akorderony punktory

// tunning/
// w pastylkach optyczny odstep od prawej za duzy
// odstepy miedzy liniami zmniejszyc

// Strzalka
// Moze kolor szary
// Tytul offersall na 50% szerokosci
// offersall w tekscie description wieksze odstepy miedzyliterowe
// offersall powiekszyc SERWIS TUNING MOTORPSORT
// about ksztalt w tle ta sama wielkosc co zdjecie
// dobor fontu dla tytulow wziasc z navbara
// przestrzeń miecy logami
// wielkosc bialego tla rozciagnac do wysokosci tmc dla

// specjalna/
// lewa sekcja zostawic do gory
// prawy accordeon niech sie rozwija tylko w dol

// liczby/
// mniej przestrzeni miedzy liniami
// moze z boldem tekst i odstep miedyz literami wiekszy

// projekty/
// za duza przestrzen miedzy liniami w description i bez bolda
// wywalic przucisk i galerie
// pierwsze zdjecie to effekt czyli ostatnie jakby
// dodac cyfry w jakis sposob na zdjeciy albo w tekscie
// teksty wycentrowac w sliderze

// kontakt/
// godziny otwarcia
// poniedzialek piatek 8 16

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <OffersAll />
      <BgTransition>
        <About />
        <WalkingText />
        <Offers />
      </BgTransition>
      <NumberSection />
      <Projects />
      <Rewievs />
      <Contact />
    </div>
  );
}
