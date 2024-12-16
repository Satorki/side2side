import type { Metadata } from "next";
import "../styles/globals.css";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Favicon from "@/public/images/Icons/favicon-bigs.png";

export const metadata: Metadata = {
  title: "Side2Side | Eksperci w serwisie, tuningu i motorsporcie",
  description:
    "Side2Side to profesjonalny warsztat samochodowy, który łączy pasję do motoryzacji z nowoczesnymi rozwiązaniami. Specjalizujemy się w serwisie pojazdów, modyfikacjach silnika, ulepszaniu zawieszenia oraz kompleksowym przygotowaniu samochodów do zawodów motorsportowych. Zaufaj naszym ekspertom i doświadcz wyjątkowej precyzji i wydajności.",
  openGraph: {
    title: "Side2Side | Eksperci w serwisie, tuningu i motorsporcie",
    description:
      "Side2Side to profesjonalny warsztat samochodowy, który łączy pasję do motoryzacji z nowoczesnymi rozwiązaniami.",
    type: "website",
    locale: "pl-PL",
    url: "www.side2side.pl",
    siteName: "Side2Side",
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
