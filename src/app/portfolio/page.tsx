"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";

type FilterKey = "sve" | "vencanja" | "rodjendani" | "automobili";

const categories: { key: FilterKey; label: string }[] = [
  { key: "sve", label: "Sve" },
  { key: "vencanja", label: "Venčanja" },
  { key: "rodjendani", label: "Rođendani" },
  { key: "automobili", label: "Automobili" },
];

type Item = { src: string; cat: Exclude<FilterKey, "sve">; alt: string };

const allItems: Item[] = [
  // Venčanja
  { src: "/images/gotova-9.png", cat: "vencanja", alt: "Dekoracija venčanja" },
  { src: "/images/gotova-10.jpeg", cat: "vencanja", alt: "Dekoracija venčanja" },
  { src: "/images/gotova-12.jpeg", cat: "vencanja", alt: "Dekoracija venčanja" },
  { src: "/images/gotova-13.jpeg", cat: "vencanja", alt: "Dekoracija venčanja" },
  { src: "/images/gotova-14.jpeg", cat: "vencanja", alt: "Dekoracija venčanja" },
  { src: "/images/gotova-15.jpeg", cat: "vencanja", alt: "Dekoracija venčanja" },
  { src: "/images/gotova-18.jpeg", cat: "vencanja", alt: "Dekoracija venčanja" },
  { src: "/images/gotova-19.jpeg", cat: "vencanja", alt: "Dekoracija venčanja" },
  { src: "/images/spremna-2.jpeg", cat: "vencanja", alt: "Dekoracija venčanja" },
  { src: "/images/proba-13.jpeg", cat: "vencanja", alt: "Dekoracija venčanja" },
  // Rođendani (dekoracija stolova i prostora)
  { src: "/images/sto-2.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-3.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-4.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-5.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-6.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-7.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-8.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-10.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-12.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-13.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-14.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-15.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-16.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-17.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/sto-1.jpeg", cat: "rodjendani", alt: "Dekoracija stola" },
  { src: "/images/ogledalo-1.jpeg", cat: "rodjendani", alt: "Dekoracija sa ogledalom" },
  { src: "/images/ogledalo-2.jpeg", cat: "rodjendani", alt: "Dekoracija sa ogledalom" },
  { src: "/images/ogledalo-3.jpeg", cat: "rodjendani", alt: "Dekoracija sa ogledalom" },
  { src: "/images/ogledalo-4.jpeg", cat: "rodjendani", alt: "Dekoracija sa ogledalom" },
  // Automobili
  { src: "/images/auto-1.jpeg", cat: "automobili", alt: "Dekoracija automobila" },
  { src: "/images/auto-2.jpeg", cat: "automobili", alt: "Dekoracija automobila" },
  { src: "/images/auto-3.jpeg", cat: "automobili", alt: "Dekoracija automobila" },
  { src: "/images/auto-4.jpeg", cat: "automobili", alt: "Dekoracija automobila" },
  { src: "/images/auto-6.jpeg", cat: "automobili", alt: "Dekoracija automobila" },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<FilterKey>("sve");

  const items =
    filter === "sve" ? allItems : allItems.filter((it) => it.cat === filter);

  return (
    <>
      <Navbar active="portfolio" />

      <section
        style={{
          padding: "80px 48px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#b98d6d",
            fontWeight: 700,
          }}
        >
          Naši radovi
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: 48,
            lineHeight: 1.15,
            fontWeight: 400,
            margin: 0,
            color: "#1e1e1e",
          }}
        >
          Portfolio
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "#5c564f",
            margin: 0,
            fontWeight: 300,
            maxWidth: 520,
          }}
        >
          Izbor dekoracija koje smo radili — kliknite na kategoriju da
          filtrirate.
        </p>
      </section>

      <section
        style={{
          padding: "0 48px 110px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setFilter(cat.key)}
              className={
                filter === cat.key ? "filter-btn filter-btn--active" : "filter-btn"
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 227px)",
            gap: 18,
            justifyContent: "center",
          }}
        >
          {items.map((item) => (
            <div
              key={item.src}
              style={{
                width: 227,
                height: 345,
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Photo
                src={item.src}
                alt={item.alt}
                radius={4}
                sizes="480px"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer variant="short" />
    </>
  );
}
