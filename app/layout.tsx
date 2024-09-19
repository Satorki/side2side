import type { Metadata } from "next";
import "../styles/globals.css";
import Footer from "@/components/organisms/Footer";
import NavbarSite from "@/components/organisms/NavbarSite";

export const metadata: Metadata = {
  title: "Side2Side",
  description: "Side2Side website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <NavbarSite />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
