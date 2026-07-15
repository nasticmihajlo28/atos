import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atos Premium Decor — Dekoracija venčanja i proslava",
  description:
    "Atos Premium Decor — dekoracija venčanja, rođendana i krštenja. Cveće, tkanine, svetlo i scenografija po meri. Cena na upit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${playfair.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
