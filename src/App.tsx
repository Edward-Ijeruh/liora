import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

import InteractiveSun from "./Components/InteractiveSphere";

import AboutSection from "./pages/HeroSection";
// import JourneySection from "./pages/JourneySection";
// import ServicesSection from "./pages/ServicesSection";
// import ContactSection from "./pages/ContactSection";

const navItems = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
];

// Smooth scroll helper
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isEntering, setIsEntering] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome");

  // Enter website button
  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(() => setShowSplash(false), 1200);
  };

  // Navbar scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar active state
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--navy)]">
      {/* Enter screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-100 overflow-hidden bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Sun */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={
                isEntering ? { scale: 8, opacity: 0 } : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-[70vmin] h-[70vmin]">
                <InteractiveSun />
              </div>
            </motion.div>

            {/* Overlay flash */}
            <motion.div
              className="absolute inset-0 bg-white pointer-events-none"
              initial={{ opacity: 0 }}
              animate={isEntering ? { opacity: [0, 0.35, 0] } : {}}
              transition={{ duration: 0.9 }}
            />

            {/* Content */}
            <motion.div
              className="absolute inset-0"
              animate={
                isEntering
                  ? { opacity: 0, scale: 0.9 }
                  : { opacity: 1, scale: 1 }
              }
            >
              {/* Bottom Enter Button */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <motion.div
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-xs font-semibold tracking-[0.4em] text-white/30"
                >
                  DIGITAL EXPERIENCES
                </motion.div>
                <motion.button
                  onClick={handleEnter}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(245,158,11,.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className=" group relative overflow-hidden px-12 py-4 border border-(--amber) text-(--amber) uppercase tracking-[0.35em] text-sm font-nav cursor-pointer bg-black/20 backdrop-blur-md "
                >
                  <span className="relative z-10">Enter</span>
                  <motion.div
                    className="absolute inset-0 bg-(--amber)"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.35 }}
                  />
                  <span className="absolute inset-0 z-20 flex items-center justify-center text-(--amber) opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Enter
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          {/* Navbar */}
          <header className="fixed top-0 left-0 w-full z-40 flex justify-center">
            <motion.nav
              className={`
      mt-4 flex items-center justify-between
      px-6 py-3 w-full max-w-6xl
      transition-all duration-500
      ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border border-black/10 rounded-full shadow-lg text-black"
          : "bg-transparent"
      }
    `}
            >
              {/* Logo */}
              <div className="flex items-center">
                <div
                  className="
          flex items-center whitespace-nowrap
          font-black uppercase
          tracking-[-0.08em]
          text-white/90 leading-none select-none
        "
                  style={{
                    fontSize: "1.6rem",
                  }}
                >
                  LI
                  <span className="relative mx-[0.04em]">
                    <span className="relative inline-flex items-center justify-center">
                      <span className="h-[0.9em] w-[0.9em] rounded-full border-[0.08em] border-current block" />
                      <span className="absolute h-[0.5em] w-[0.5em] rounded-full border-[0.04em] border-current" />
                      <span className="absolute h-[1.05em] w-[0.22em] rounded-full border-[0.05em] border-current rotate-[65deg]" />
                    </span>
                  </span>
                  RA
                </div>
              </div>

              {/*Navlinks */}
              <div className="hidden md:flex gap-10 text-sm">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToId(item.id)}
                      className={`relative group text-sm font-semibold cursor-pointer transition
          ${isActive ? "text-white" : "text-white/80 hover:text-white"}
        `}
                    >
                      {item.label}

                      <span
                        className={`
            absolute left-0 -bottom-1 h-[1px]
            bg-linear-to-r from-transparent via-white/40 to-transparent
            transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          `}
                      />
                    </button>
                  );
                })}
              </div>

              {/* CTA */}
              <button
                onClick={() => scrollToId("contact")}
                className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--navy)] text-white text-xs uppercase tracking-[0.2em] hover:scale-105 transition cursor-pointer group"
              >
                Let’s Talk
                <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-90" />
              </button>

              {/* Mobile button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden w-10 h-10 flex items-center justify-center"
              >
                <FiMenu size={20} />
              </button>
            </motion.nav>
          </header>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <>
                {/* Overlay */}
                <motion.div
                  className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileOpen(false)}
                />

                {/* Menu */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 30 }}
                  className="fixed top-24 left-6 right-6 z-50 bg-white/80 backdrop-blur-2xl rounded-3xl p-6 border border-black/10"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold">Menu</span>
                    <button onClick={() => setMobileOpen(false)}>
                      <FiX />
                    </button>
                  </div>

                  <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          scrollToId(item.id);
                          setMobileOpen(false);
                        }}
                        className="text-left text-lg"
                      >
                        {item.label}
                      </button>
                    ))}

                    <button
                      onClick={() => {
                        scrollToId("contact");
                        setMobileOpen(false);
                      }}
                      className="mt-4 px-4 py-3 bg-[var(--navy)] text-white rounded-xl text-sm uppercase tracking-[0.2em]"
                    >
                      Let’s Talk
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Sections */}
          <main>
            <section id="about">
              <AboutSection />
            </section>

            {/* <section id="journey">
              <JourneySection />
            </section>

            <section id="services">
              <ServicesSection />
            </section>

            <section id="contact">
              <ContactSection />
            </section> */}
          </main>
        </>
      )}
    </div>
  );
}
