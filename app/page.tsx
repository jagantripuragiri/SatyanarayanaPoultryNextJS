import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import MapEmbed from "@/components/MapEmbed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Contact />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
