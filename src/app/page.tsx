import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WorkSection />
        <MusicSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
