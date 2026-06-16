import HeroSection from "../Components/homepage/HeroSection";
import ServicesSection from "../Components/homepage/ServicesSection";
// import WorkSection from "../Components/homepage/WorkSection";
// import AboutSection from "../Components/homepage/AboutSection";
// import ContactSection from "../Components/homepage/ContactSection";

export default function Homepage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* HERO */}
      <section id="home" className="snap-section min-h-screen">
        <HeroSection />
      </section>

      {/* SERVICES */}
      <section id="services" className="snap-section min-h-screen">
        <ServicesSection />
      </section>

      {/* WORK */}
      {/* <section id="work"  className="snap-section min-h-screen">
        <WorkSection />
      </section> */}

      {/* ABOUT */}
      {/* <section id="about"  className="snap-section min-h-screen">
        <AboutSection />
      </section> */}

      {/* CONTACT */}
      {/* <section id="contact"  className="snap-section min-h-screen">
        <ContactSection />
      </section> */}
    </main>
  );
}
