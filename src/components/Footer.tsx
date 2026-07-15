import Link from "next/link";

const columnHeader = {
  fontSize: 11,
  letterSpacing: 3,
  textTransform: "uppercase" as const,
  color: "#b98d6d",
  fontWeight: 600,
};

const footerLinkStyle = { fontSize: 13, fontWeight: 600 as const };

export default function Footer({
  variant = "full",
}: {
  variant?: "full" | "short";
}) {
  if (variant === "short") {
    return (
      <footer
        style={{
          background: "#ffffff",
          color: "#5c564f",
          padding: "40px 48px",
          borderTop: "1px solid #ece7e0",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "#8d8579",
            fontWeight: 300,
          }}
        >
          <span
            className="font-display"
            style={{ fontSize: 16, letterSpacing: 3, color: "#1e1e1e" }}
          >
            ATOS PREMIUM
          </span>
          <span>© 2026 Atos Premium Decor — Sva prava zadržana</span>
        </div>
      </footer>
    );
  }

  return (
    <footer
      style={{
        background: "#ffffff",
        color: "#5c564f",
        padding: "64px 48px 40px",
        borderTop: "1px solid #ece7e0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 40,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span
              className="font-display"
              style={{ fontSize: 20, letterSpacing: 3, color: "#1e1e1e" }}
            >
              ATOS PREMIUM
            </span>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.8,
                color: "#8d8579",
                margin: 0,
                fontWeight: 300,
                maxWidth: 280,
              }}
            >
              Dekoracija venčanja i proslava — cveće, tkanine, svetlo i
              scenografija po meri.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={columnHeader}>Stranice</div>
            <Link href="/" className="footer-link" style={footerLinkStyle}>
              Početna
            </Link>
            <Link
              href="/portfolio"
              className="footer-link"
              style={footerLinkStyle}
            >
              Portfolio
            </Link>
            <Link
              href="/usluge"
              className="footer-link"
              style={footerLinkStyle}
            >
              Usluge
            </Link>
            <Link
              href="/o-nama"
              className="footer-link"
              style={footerLinkStyle}
            >
              O nama
            </Link>
            <Link
              href="/kontakt"
              className="footer-link"
              style={footerLinkStyle}
            >
              Kontakt
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={columnHeader}>Kontakt</div>
            <a
              href="tel:+38160000000"
              className="footer-link"
              style={footerLinkStyle}
            >
              06x xxx xxxx
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Viber / WhatsApp
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Instagram DM
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={columnHeader}>Pratite nas</div>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Instagram
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Facebook
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              TikTok
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #ece7e0",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            color: "#8d8579",
            fontWeight: 300,
          }}
        >
          <span>© 2026 Atos Premium Decor</span>
          <span>Sva prava zadržana</span>
        </div>
      </div>
    </footer>
  );
}
