import type { Metadata } from "next";
import "../styles/globals.css";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Favicon from "@/public/images/Icons/favicon-bigs.png";

export const metadata: Metadata = {
  title: "Side2Side",
  description: "Side2Side Profesjonalny Serwis Tuning Motorsport",
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
