"use client";
import Offers from "@/containers/home-page/Offers";
import About from "@/containers/home-page/About";
// import Contact from "@/containers/home-page/Contact";
import Hero from "@/containers/home-page/Hero";
// import Projects from "@/containers/home-page/Projects";
import Rewievs from "@/containers/home-page/Rewievs";
import OffersAll from "@/containers/home-page/OffersAll";

// powinno sie uzywac dwoc fontow
// skojarzeniami operowac a nie wprost
// Navbar wiekszy odstep mozna lekko zmniejszyc i logo tez mniejsze
// Moze byc samo to s2s loga malyu emblemat
// DONE hero capital letters nie dziala taglajnem moze bold
// DONE navbar scroll down wylanczyc

// DONE tekst na about za nisko wystarczy fade in
// DONE glowna historia to tekst
// DONE tekst wczesniej description
// DONE tekst na mobile troche za duzy czyli pomniejszyc dla description
// DONE tekst na kompie tez mniejszy
// DONE poltora przycisku gap pomiedzy abouta  serwice
// DONE gap wiekszyp pomiedzy quotes

// font dla animaci serwis jai
// animacje maja byc dodatkiem
// Oferta usunac albo oferta serwisowa oferta 1/3
// Profejsonalny serwis zmienic na najlepsze narzedzia na rynku ludzie dbajcy o twoje auto dbamy o ciebie wjezdzas niezadowolony wyjezdzasz zadowolony
// waski pasek nad oferta z taka legenda breadcrumbs zamiast tego "oferta"
// przycisk obwolutka wychodzi zaprzycisk
// wszystkie ikonki na czarno albo na biało
// serwis na mobile zwiekszyc czcionke
// zaokrgraglenie obrazka moze wykasowac

// kropke i kreski z kolka przy pierwszej duzej animacji wykorzystac do animacji
// zamiast klucza dac np kreseczki np ladujace sie pamietac aby kreseczki albo kropeczka byly tej samej szerokosci
// 3 kolumny potem dwie
// w miejscu 6 kolumny dac ikonke albo animacje
// moze bez tego gradinetu
// skrócic teksty
// ilustracje techniczna!

// tekst hierarhia czyli za duzo
// usunac animacje wszystkie
//

// projekty

// opinie za duzy tekst
// hedeary

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      {/* <OffersAll /> */}
      {/* <About /> */}
      <Offers />
      {/* <Projects /> */}
      {/* <Rewievs /> */}
      {/* <Contact /> */}
    </div>
  );
}
