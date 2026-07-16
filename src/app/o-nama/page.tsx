import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";

export default function ONamaPage() {
  return (
    <>
      <Navbar active="o-nama" />

      <section style={{ padding: "100px 48px 110px" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
            gap: 72,
            alignItems: "center",
          }}
        >
          <div style={{ height: 520, borderRadius: 4, overflow: "hidden" }}>
            <Photo
              src="/images/gotova-16.jpeg"
              alt="Atos Premium — dekoracija proslave"
              radius={4}
              sizes="(max-width: 1180px) 100vw, 540px"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                fontSize: 12,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#b98d6d",
                fontWeight: 700,
              }}
            >
              O nama
            </div>
            <h1
              className="font-display"
              style={{
                fontSize: 44,
                lineHeight: 1.15,
                fontWeight: 400,
                margin: 0,
                color: "#1e1e1e",
                textWrap: "balance",
              }}
            >
              Iza svake proslave stoji tim koji je voli
            </h1>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#5c564f",
                margin: 0,
                fontWeight: 300,
              }}
            >
              Atos Premium Decor je nastao iz jednostavne ideje — da svaka
              proslava zaslužuje prostor koji izgleda kao iz snova. Počeli smo sa
              cvetnim aranžmanima za venčanja prijatelja, a danas dekorišemo
              sale, dvorišta i prostore širom zemlje.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#5c564f",
                margin: 0,
                fontWeight: 300,
              }}
            >
              Svaki događaj radimo od nule: slušamo vašu ideju, biramo cveće,
              tkanine i svetlo, i ostajemo uz vas do trenutka kada se upale
              svetla i uđu prvi gosti.
            </p>
            <div style={{ display: "flex", gap: 56, paddingTop: 8 }}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: 40, color: "#b98d6d" }}
                >
                  8+
                </div>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: 2.5,
                    textTransform: "uppercase",
                    color: "#5c564f",
                  }}
                >
                  godina iskustva
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: 40, color: "#b98d6d" }}
                >
                  300+
                </div>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: 2.5,
                    textTransform: "uppercase",
                    color: "#5c564f",
                  }}
                >
                  dekorisanih događaja
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="short" />
    </>
  );
}
