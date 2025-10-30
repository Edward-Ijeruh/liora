import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSmile, FiBookOpen, FiLayers, FiMail, FiMenu } from "react-icons/fi";
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

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  // NEW STATE FOR DESKTOP BUTTON + NAV CONTROL
  const [showDesktopButton, setShowDesktopButton] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  const navItems = [
    { label: "Welcome to Liora", icon: <FiSmile />, path: "/" },
    { label: "Our Journey", icon: <FiBookOpen />, path: "/journey" },
    { label: "What We Create", icon: <FiLayers />, path: "/services" },
    { label: "Get in Touch", icon: <FiMail />, path: "/contact" },
  ];

  // Splash screen timer
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll Behavior (Desktop)
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      if (desktopMenuOpen) {
        setDesktopMenuOpen(false);
        setShowNav(false);
        setShowDesktopButton(true);
        lastScroll = current;
        return;
      }

      // Scrolling down
      if (current > lastScroll && current > 100) {
        setShowNav(false);
        setShowDesktopButton(true);
      }
      // Scrolling up
      else if (current < lastScroll) {
        setShowNav(false);
        setShowDesktopButton(true);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, desktopMenuOpen]);

  // Nav link component
  const NavLink = ({ item }: any) => {
    const navigate = useNavigate();
    const isActive = window.location.pathname === item.path;

    const handleClick = () => {
      navigate(item.path);
      setMenuOpen(false);
      setDesktopMenuOpen(false);
      setShowNav(true);
      setShowDesktopButton(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all rounded-lg
        ${
          isActive
            ? "bg-[var(--accent-gradient)] text-[var(--navy)] shadow-md"
            : "text-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--ivory)]"
        }`}
      >
        {item.icon}
        {item.label}
      </button>
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-[var(--ivory)] text-[var(--navy)] relative">
        {/* Splash Screen */}
        <AnimatePresence>
          {showSplash && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--accent-gradient)]"
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4 }}
            >
              <motion.img
                src="/logo_tr.png"
                className="w-80"
                animate={{ opacity: [0, 1], scale: [0.7, 1] }}
                transition={{ duration: 1.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {!showSplash && (
          <>
            {/* Floating Desktop Menu Button (shows after scrolling) */}
            <AnimatePresence>
              {showDesktopButton && !desktopMenuOpen && (
                <motion.button
                  key="desktopMenuBtn"
                  onClick={() => {
                    setDesktopMenuOpen(true);
                    setShowNav(true); // Show navbar again
                  }}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.25 }}
                  className="hidden md:flex fixed top-6 left-6 w-12 h-12 items-center justify-center rounded-full bg-[#1a1f36]/30 backdrop-blur-md text-[var(--ivory)] hover:bg-[#1a1f36]/50 shadow-lg border border-[var(--ivory)] z-50 cursor-pointer"
                >
                  <span className="w-6 h-0.5 bg-[var(--ivory)] rounded absolute -translate-y-2" />
                  <span className="w-6 h-0.5 bg-[var(--ivory)] rounded absolute" />
                  <span className="w-6 h-0.5 bg-[var(--ivory)] rounded absolute translate-y-2" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Top Navbar */}
            <AnimatePresence>
              {showNav && (
                <motion.header
                  initial={{ y: -80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -80, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 28 }}
                  className="fixed top-0 left-0 w-full z-40 px-6 py-4 bg-[var(--ivory)]/90 backdrop-blur-lg border-b border-[var(--navy)]/20 shadow-md flex items-center justify-between"
                >
                  <img src="/logo_tr.png" className="w-32" />

                  {/* Desktop Nav */}
                  <nav className="hidden md:flex gap-4">
                    {navItems.map((item) => (
                      <NavLink key={item.label} item={item} />
                    ))}
                  </nav>

                  {/* Mobile Hamburger */}
                  <button
                    className="md:hidden text-[var(--navy)] text-2xl"
                    onClick={() => setMenuOpen((p) => !p)}
                  >
                    <FiMenu />
                  </button>
                </motion.header>
              )}
            </AnimatePresence>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.nav
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  exit={{ y: -200 }}
                  transition={{ type: "spring", stiffness: 180, damping: 24 }}
                  className="md:hidden fixed top-[68px] left-0 w-full bg-[var(--ivory)]/95 backdrop-blur-xl shadow-lg border-b border-[var(--navy)]/20 flex flex-col p-4 gap-3 z-30"
                >
                  {navItems.map((item) => (
                    <NavLink key={item.label} item={item} />
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>

            {/* Content */}
            <main
              className={`${
                showNav ? "pt-20" : "pt-0"
              } transition-all duration-300`}
            >
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
