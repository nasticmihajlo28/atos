import Link from "next/link";

export default function ComingSoon({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 88px - 121px)",
        padding: "120px 48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 20,
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
        {kicker}
      </div>
      <h1
        className="font-display"
        style={{
          fontSize: 44,
          lineHeight: 1.15,
          fontWeight: 400,
          margin: 0,
          color: "#1e1e1e",
          maxWidth: 640,
          textWrap: "balance",
        }}
      >
        {title}
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
        {text}
      </p>
      <Link
        href="/"
        className="link-underline"
        style={{
          fontSize: 13,
          letterSpacing: 2,
          textTransform: "uppercase",
          fontWeight: 600,
          paddingBottom: 3,
          marginTop: 8,
        }}
      >
        Nazad na početnu
      </Link>
    </section>
  );
}
