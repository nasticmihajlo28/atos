"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type FilterKey = "sve" | "vencanja" | "rodjendani" | "automobili";

const categories: { key: FilterKey; label: string }[] = [
  { key: "sve", label: "Sve" },
  { key: "vencanja", label: "Venčanja" },
  { key: "rodjendani", label: "Rođendani" },
  { key: "automobili", label: "Automobili" },
];

const itemDefs: { cat: Exclude<FilterKey, "sve">; label: string; count: number }[] =
  [
    { cat: "vencanja", label: "Venčanje", count: 6 },
    { cat: "rodjendani", label: "Rođendan", count: 4 },
    { cat: "automobili", label: "Automobil", count: 4 },
  ];

const allItems = itemDefs.flatMap(({ cat, label, count }) =>
  Array.from({ length: count }, (_, i) => ({
    id: `pf-${cat}-${i + 1}`,
    cat,
    placeholder: `${label} ${i + 1}`,
  })),
);

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
              key={item.id}
              style={{
                width: 227,
                height: 345,
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <ImagePlaceholder label={item.placeholder} radius={4} />
            </div>
          ))}
        </div>
      </section>

      <Footer variant="short" />
    </>
  );
}
