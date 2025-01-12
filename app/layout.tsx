import type { Metadata } from "next";
import "../styles/globals.css";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Favicon from "@/public/images/Icons/favicon-bigs.png";

export const metadata: Metadata = {
  title: "Side2Side | Eksperci w serwisie, tuningu i motorsporcie",
  description:
    "Side2Side to profesjonalny warsztat samochodowy, który łączy pasję do motoryzacji z nowoczesnymi rozwiązaniami. Specjalizujemy się w serwisie pojazdów, modyfikacjach silnika, ulepszaniu zawieszenia oraz kompleksowym przygotowaniu samochodów do zawodów motorsportowych. Zaufaj naszym ekspertom i doświadcz wyjątkowej precyzji i wydajności.",
  keywords:
    "serwis samochodowy Wolsztyn, warsztat samochodowy Wolsztyn, tuning samochodów, motorsport Wolsztyn, serwis pojazdów Wolsztyn, naprawa aut sportowych, Side2Side Motorsport, serwis BMW Wolsztyn, tuning BMW E39, profesjonalny warsztat BMW, tuning pojazdów sportowych, tuning, motorsport, motor sport, serwis bmw, auto e39, bmw warsztat, tuning bmw, warsztaty tuningowe",
  openGraph: {
    title: "Side2Side | Eksperci w serwisie, tuningu i motorsporcie",
    description:
      "Side2Side to profesjonalny warsztat samochodowy, który łączy pasję do motoryzacji z nowoczesnymi rozwiązaniami.",
    type: "website",
    locale: "pl-PL",
    url: "https://side2side.pl/",
    siteName: "Side2Side",
    images: [
      {
        url: "https://side2side.pl/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Side2Side - Eksperci w serwisie, tuningu i motorsporcie",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta property="og:url" content="https://side2side.pl/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Side2Side | Eksperci w serwisie, tuningu i motorsporcie"
        />
        <meta
          property="og:description"
          content="Side2Side to profesjonalny warsztat samochodowy, który łączy pasję do motoryzacji z nowoczesnymi rozwiązaniami."
        />
        <meta
          property="og:image"
          content="https://side2side.pl/opengraph-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="side2side.pl" />
        <meta property="twitter:url" content="https://side2side.pl/" />
        <meta
          name="twitter:title"
          content="Side2Side | Eksperci w serwisie, tuningu i motorsporcie"
        />
        <meta
          name="twitter:description"
          content="Side2Side to profesjonalny warsztat samochodowy, który łączy pasję do motoryzacji z nowoczesnymi rozwiązaniami."
        />
        <meta
          name="twitter:image"
          content="https://side2side.pl/opengraph-image.jpg"
        />

        <link rel="icon" href={Favicon.src} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
