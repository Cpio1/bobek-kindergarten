import { About } from "@/components/About";
import { Contacts } from "@/components/Contacts";
import { Documents } from "@/components/Documents";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";
import { getSiteImages } from "@/lib/images";

export default function HomePage() {
  const images = getSiteImages();

  return (
    <>
      <Header />
      <main id="main">
        <Hero image={images.hero} />
        <About image={images.about} />
        <Info />
        <Gallery images={images.gallery} />
        <Documents />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
