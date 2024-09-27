import type { Metadata } from "next";
import "../styles/globals.css";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";

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
      <body className="bg-red-700">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
