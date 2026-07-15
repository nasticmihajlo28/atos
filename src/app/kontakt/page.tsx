import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export default function KontaktPage() {
  return (
    <>
      <Navbar active="kontakt" />
      <ComingSoon
        kicker="Kontakt"
        title="Javite nam se"
        text="Kontakt stranica je u pripremi. Do tada nas možete kontaktirati telefonom, Viberom, WhatsApp-om ili porukom na Instagramu — odgovaramo u toku dana. Cena na upit."
      />
      <Footer variant="short" />
    </>
  );
}
