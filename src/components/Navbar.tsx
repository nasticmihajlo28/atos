import Link from "next/link";

export type NavKey = "pocetna" | "portfolio" | "usluge" | "o-nama" | "kontakt";

const links: { key: NavKey; label: string; href: string }[] = [
  { key: "pocetna", label: "Početna", href: "/" },
  { key: "portfolio", label: "Portfolio", href: "/portfolio" },
  { key: "usluge", label: "Usluge", href: "/usluge" },
  { key: "o-nama", label: "O nama", href: "/o-nama" },
  { key: "kontakt", label: "Kontakt", href: "/#kontakt" },
];

export default function Navbar({ active }: { active: NavKey }) {
  return (
    <header
      style={{
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        height: 88,
        borderBottom: "1px solid #ece7e0",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          className="font-display"
          style={{
            height: 64,
            width: 64,
            borderRadius: 4,
            background: "linear-gradient(135deg, #cfa382, #b98d6d 55%, #a97c5c)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 22,
            letterSpacing: 1,
            boxShadow: "0 2px 6px rgba(30,30,30,.18)",
          }}
        >
          AP
        </div>
        <span
          className="font-display"
          style={{
            fontSize: 21,
            letterSpacing: 3,
            color: "#1e1e1e",
            fontWeight: 400,
          }}
        >
          ATOS PREMIUM
        </span>
      </Link>

      <nav
        style={{
          display: "flex",
          gap: 36,
          fontSize: 13,
          letterSpacing: 2,
          textTransform: "uppercase",
          fontWeight: 400,
        }}
      >
        {links.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={active === link.key ? "nav-link--active" : "nav-link"}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/#kontakt"
        className="btn-outline"
        style={{
          fontSize: 12,
          letterSpacing: 2,
          textTransform: "uppercase",
          fontWeight: 400,
          padding: "12px 24px",
          borderRadius: 4,
        }}
      >
        Zakaži termin
      </Link>
    </header>
  );
}
