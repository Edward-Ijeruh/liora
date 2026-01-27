import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSmile, FiBookOpen, FiLayers, FiMail } from "react-icons/fi";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import HeroSection from "./pages/HeroSection";
import JourneySection from "./pages/JourneySection";
import ServicesSection from "./pages/ServicesSection";
import ContactSection from "./pages/ContactSection";

const navItems = [
  { label: "WELCOME", icon: <FiSmile />, path: "/" },
  { label: "JOURNEY", icon: <FiBookOpen />, path: "/journey" },
  { label: "SERVICES", icon: <FiLayers />, path: "/services" },
  { label: "CONTACT", icon: <FiMail />, path: "/contact" },
];

// Navlink
function NavLink({ item, onClick, light }: any) {
  const navigate = useNavigate();
  const colorClass = light ? "text-[var(--ivory)]" : "text-[var(--navy)]";

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      onClick={() => {
        navigate(item.path);
        onClick?.();
      }}
      className={`flex items-center gap-2 px-4 py-3 text-xs font-nav cursor-pointer ${colorClass}`}
    >
      {item.icon}
      {item.label}
    </motion.button>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarLight, setNavbarLight] = useState(false);

  // Navbar font color effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Get all sections
      const sections = document.querySelectorAll("section");
      let isDark = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          const bgColor = getComputedStyle(section).backgroundColor;

          if (bgColor === "rgb(26, 31, 54)" || bgColor === "rgb(74, 28, 64)") {
            isDark = true;
          } else {
            isDark = false;
          }
        }
      });

      setNavbarLight(isDark);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Splash progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowSplash(false), 600);
          return 100;
        }
        return p + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[var(--ivory)] text-[var(--navy)]">
        {/* Splashscreen */}
        <AnimatePresence>
          {showSplash && (
            <motion.div
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--navy)] text-[var(--ivory)]"
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="mt-6 text-2xl font-nav"
                key={progress}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                {progress}%
              </motion.div>

              <div className="mt-8 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!showSplash && (
          <>
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full z-40">
              <nav className="max-w-6xl mx-auto px-6 py-4 hidden md:flex justify-between">
                {navItems.map((item) => (
                  <NavLink key={item.label} item={item} light={navbarLight} />
                ))}
              </nav>
            </header>

            {/* Mobile buttton */}
            <button
              onClick={() => setMobileMenuOpen((p) => !p)}
              className="md:hidden fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-[var(--navy)] text-white flex items-center justify-center"
            >
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 2 : -6,
                }}
                className="absolute w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                className="absolute w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? 2 : 6,
                }}
                className="absolute w-6 h-0.5 bg-white"
              />
            </button>

            {/* Mobile dropdown */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <>
                  {/* Blur */}
                  <motion.div
                    onClick={() => setMobileMenuOpen(false)}
                    className="fixed inset-0 bg-black/20 backdrop-blur-md z-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />

                  {/* Menu */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ type: "spring", damping: 22 }}
                    className="fixed top-24 right-6 left-6 z-40 bg-[var(--ivory)] rounded-3xl shadow-2xl p-6 flex flex-col gap-4"
                  >
                    {navItems.map((item) => (
                      <NavLink
                        key={item.label}
                        item={item}
                        onClick={() => setMobileMenuOpen(false)}
                      />
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Content */}
            <main className="">
              <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/journey" element={<JourneySection />} />
                <Route path="/services" element={<ServicesSection />} />
                <Route path="/contact" element={<ContactSection />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </Router>
  );
}
