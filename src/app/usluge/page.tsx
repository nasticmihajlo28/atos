import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export default function UslugePage() {
  return (
    <>
      <Navbar active="usluge" />
      <ComingSoon
        kicker="Usluge"
        title="Uskoro"
        text="Stranica sa detaljnim pregledom usluga je u pripremi. Do tada nas kontaktirajte za sve informacije o dekoraciji vaše proslave."
      />
      <Footer variant="short" />
    </>
  );
}
