import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";

const kicker = {
  fontSize: 12,
  letterSpacing: 4,
  textTransform: "uppercase" as const,
  color: "#b98d6d",
  fontWeight: 700 as const,
};

const services = [
  {
    id: "kat-vencanja",
    title: "Venčanja",
    src: "/images/gotova-7.jpeg",
    text: "Kompletna scenografija — od cvetnih zidova do stola mladenaca.",
  },
  {
    id: "kat-stolovi",
    title: "Stolovi",
    src: "/images/sto-1.jpeg",
    text: "Dekoracija stolova za svaku priliku — cveće, tkanine i detalji po vašoj temi.",
  },
  {
    id: "kat-automobili",
    title: "Automobili",
    src: "/images/auto-1.jpeg",
    text: "Cvetni aranžmani i mašne za svadbenu kolonu — auto mladenaca koji se pamti.",
  },
];

const steps = [
  {
    n: "1",
    title: "Javite nam se",
    text: "Pošaljite nam datum, lokaciju i okvirnu ideju — telefonom, Viberom ili porukom na Instagramu.",
  },
  {
    n: "2",
    title: "Besplatna konsultacija i predlog",
    text: "Zajedno prolazimo kroz želje i prostor, a mi vam vraćamo konkretan predlog dekoracije.",
  },
  {
    n: "3",
    title: "Mi dekorišemo, vi slavite",
    text: "Na dan proslave sve postavljamo i sklanjamo — vaše je samo da uživate.",
  },
];

const featured = [
  { id: "f-1", src: "/images/izdvojeni-radovi-crvena.jpeg", alt: "Crvena dekoracija venčanja", span: true },
  { id: "f-2", src: "/images/izdvojeni-1.jpeg", alt: "Bela dekoracija sa orhidejama", span: false },
  { id: "f-3", src: "/images/izdvojeni-2.png", alt: "Dekoracija sa žutim ružama", span: false },
  { id: "f-4", src: "/images/izdvojeni-3.jpeg", alt: "Bordo dekoracija sa draperijama", span: false },
  { id: "f-5", src: "/images/izdvojeni-4.jpeg", alt: "Dekoracija venčanja na otvorenom", span: false },
];

export default function Home() {
  return (
    <>
      <Navbar active="pocetna" />

      {/* Hero — split */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "44fr 56fr",
          minHeight: "calc(100vh - 88px)",
          background: "#f7f4ef",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 26,
            padding: "64px 72px",
          }}
        >
          <div style={kicker}>Dekoracija venčanja i proslava</div>
          <h1
            className="font-display"
            style={{
              fontSize: 56,
              lineHeight: 1.12,
              fontWeight: 400,
              margin: 0,
              color: "#1e1e1e",
              textWrap: "balance",
            }}
          >
            Napravljeno za dan koji se pamti
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#5c564f",
              margin: 0,
              maxWidth: 420,
              fontWeight: 300,
            }}
          >
            Od cvetnih aranžmana do kompletne scenografije — pretvaramo vašu
            viziju u prostor u kojem se slavi. Venčanja, rođendani, krštenja i
            posebni trenuci.
          </p>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Link
              href="/#kontakt"
              className="btn-gradient"
              style={{
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 400,
                padding: "16px 32px",
                borderRadius: 4,
              }}
            >
              Zakaži konsultaciju
            </Link>
            <Link
              href="/portfolio"
              className="link-underline"
              style={{
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 600,
                paddingBottom: 3,
              }}
            >
              Pogledaj radove
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "56px 48px",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: "translate(18px, 18px)",
                border: "1.5px solid #b98d6d",
                borderRadius: "265px 265px 10px 10px",
              }}
            />
            <div
              style={{
                position: "relative",
                width: "min(100%, 530px)",
                aspectRatio: "1086 / 1231",
                overflow: "hidden",
                borderRadius: "265px 265px 10px 10px",
                boxShadow: "0 24px 56px rgba(30,30,30,.2)",
              }}
            >
              <Photo
                src="/images/atos-hero.jpeg"
                alt="Dekoracija venčanja — Atos Premium"
                radius="265px 265px 10px 10px"
                sizes="(max-width: 900px) 100vw, 530px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section
        style={{
          background: "#ffffff",
          padding: "120px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 22,
        }}
      >
        <div style={kicker}>Atos Premium</div>
        <h2
          className="font-display"
          style={{
            fontSize: 42,
            lineHeight: 1.2,
            fontWeight: 400,
            margin: 0,
            color: "#1e1e1e",
            maxWidth: 640,
            textWrap: "balance",
          }}
        >
          Svaka proslava zaslužuje scenografiju
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "#5c564f",
            margin: 0,
            maxWidth: 560,
            fontWeight: 300,
          }}
        >
          Verujemo da se najlepši trenuci dešavaju u prostoru koji ima dušu.
          Zato svaki događaj radimo od nule — slušamo vašu ideju, biramo cveće,
          tkanine i svetlo, i pretvaramo salu u scenografiju koja izgleda kao da
          je oduvek bila vaša.
        </p>
        <div
          style={{
            width: 56,
            height: 1.5,
            background: "#b98d6d",
            marginTop: 6,
          }}
        />
      </section>

      {/* Izdvojeni radovi */}
      <section style={{ background: "#ffffff", padding: "0 48px 120px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 36,
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: 36,
                fontWeight: 400,
                margin: 0,
                color: "#1e1e1e",
              }}
            >
              Izdvojeni radovi
            </h2>
            <Link
              href="/portfolio"
              className="link-underline"
              style={{
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 400,
                paddingBottom: 3,
              }}
            >
              Ceo portfolio
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.35fr 1fr 1fr",
              gridTemplateRows: "280px 280px",
              gap: 14,
            }}
          >
            {featured.map((item) => (
              <div
                key={item.id}
                className="zoom-wrap"
                style={{
                  gridRow: item.span ? "span 2" : undefined,
                  borderRadius: 10,
                }}
              >
                <div
                  className="zoom-img"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Photo
                    src={item.src}
                    alt={item.alt}
                    radius={10}
                    sizes="(max-width: 1280px) 50vw, 420px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Šta dekorišemo */}
      <section style={{ background: "#f7f4ef", padding: "110px 48px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 14,
            }}
          >
            <div style={kicker}>Naše usluge</div>
            <h2
              className="font-display"
              style={{
                fontSize: 42,
                lineHeight: 1.2,
                fontWeight: 400,
                margin: 0,
                color: "#1e1e1e",
              }}
            >
              Šta dekorišemo
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 24,
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  minWidth: 0,
                }}
              >
                <div
                  style={{ height: 340, borderRadius: 4, overflow: "hidden" }}
                >
                  <Photo
                    src={service.src}
                    alt={service.title}
                    radius={4}
                    sizes="(max-width: 1280px) 33vw, 410px"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    textAlign: "center",
                  }}
                >
                  <h3
                    className="font-display"
                    style={{
                      fontSize: 24,
                      fontWeight: 400,
                      margin: 0,
                      color: "#1e1e1e",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "#5c564f",
                      margin: 0,
                      fontWeight: 300,
                      maxWidth: 300,
                    }}
                  >
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kako izgleda saradnja */}
      <section style={{ background: "#ffffff", padding: "110px 48px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 56,
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 42,
              lineHeight: 1.2,
              fontWeight: 400,
              margin: 0,
              color: "#1e1e1e",
              textAlign: "center",
            }}
          >
            Kako izgleda saradnja
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 40,
            }}
          >
            {steps.map((step) => (
              <div
                key={step.n}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 14,
                }}
              >
                <div
                  className="font-display"
                  style={{
                    width: 56,
                    height: 56,
                    border: "1.5px solid #b98d6d",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    color: "#b98d6d",
                  }}
                >
                  {step.n}
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    margin: 0,
                    color: "#1e1e1e",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#5c564f",
                    margin: 0,
                    fontWeight: 300,
                    maxWidth: 280,
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="kontakt"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 1fr)",
          background: "#f7f4ef",
        }}
      >
        <div style={{ minHeight: 440 }}>
          <Photo
            src="/images/dekoracijaa.jpeg"
            alt="Dekoracija proslave — Atos Premium"
            radius={0}
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
        <div
          style={{
            padding: "72px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 38,
              lineHeight: 1.2,
              fontWeight: 400,
              margin: 0,
              color: "#1e1e1e",
            }}
          >
            Hajde da isplaniramo vaš dan
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "#5c564f",
              margin: 0,
              fontWeight: 300,
              maxWidth: 440,
            }}
          >
            Javite nam se sa datumom i lokacijom proslave — sve ostalo
            dogovaramo zajedno, bez obaveza.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="tel:+381605656844"
              className="btn-gradient"
              style={{
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 400,
                padding: "14px 26px",
                borderRadius: 4,
              }}
            >
              Pozovi
            </a>
            <a
              href="viber://chat?number=%2B381605656844"
              className="btn-outline"
              style={{
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 400,
                padding: "14px 26px",
                borderRadius: 4,
              }}
            >
              Viber
            </a>
            <a
              href="https://wa.me/381605656844"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 400,
                padding: "14px 26px",
                borderRadius: 4,
              }}
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/atos.premium.decor/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 400,
                padding: "14px 26px",
                borderRadius: 4,
              }}
            >
              Instagram
            </a>
          </div>
          <div style={{ fontSize: 13, color: "#8d8579", fontWeight: 300 }}>
            Cena na upit — odgovaramo u toku dana.
          </div>
        </div>
      </section>

      <Footer variant="full" />
    </>
  );
}
