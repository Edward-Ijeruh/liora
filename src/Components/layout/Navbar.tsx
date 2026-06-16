import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-xl z-[100] flex justify-center px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            mt-5 w-full max-w-6xl
            flex items-center justify-between
            px-5 py-3
            border
            backdrop-blur-2xl
            transition-all duration-500

            ${
              scrolled
                ? "bg-[var(--ivory)]/80 border-[var(--sunset)]/40 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                : "bg-[var(--ivory)]/80 border-[var(--sunset)]/40"
            }
          `}
        >
          {/* Logo */}
          <div className="flex items-center font-black uppercase tracking-[-0.08em] text-[var(--navy)] select-none text-[1.3rem]">
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

          {/* CTA */}
          <button
            onClick={() => scrollToId("contact")}
            className="
    hidden md:flex items-center gap-2
    px-5 py-2
    bg-[var(--navy)]
    text-white
    text-xs uppercase tracking-[0.25em]
    relative overflow-hidden
    group cursor-pointer
  "
          >
            {/* shimmer layer */}
            <span
              className="
    absolute inset-0
    -translate-x-full group-hover:translate-x-full
    bg-gradient-to-r from-transparent via-white/10 to-transparent
    transition-transform duration-700 ease-out
  "
            />

            {/* text */}
            <span className="relative z-10 flex items-center gap-2">
              <span className="transition-all duration-300 group-hover:tracking-[0.3em]">
                Let’s Talk
              </span>

              {/* arrow animation */}
              <ArrowUpRight
                size={14}
                className="
        transition-all duration-300
        group-hover:translate-x-1
        group-hover:-translate-y-1
      "
              />
            </span>

            {/* subtle glow */}
            <span
              className="
    absolute inset-0 opacity-0 group-hover:opacity-20
    bg-[radial-gradient(circle_at_center,white,transparent_70%)]
    transition-opacity duration-500
  "
            />
          </button>

          {/* Menu btn */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="
    relative w-10 h-10
    flex items-center justify-center
    border border-[var(--sunset)]/40
    transition-all duration-300
    group
    overflow-hidden cursor-pointer
  "
          >
            <span
              className="
      absolute inset-0
      bg-gradient-to-r from-transparent via-black/5 to-transparent
      translate-x-[-120%]
      group-hover:translate-x-[120%]
      transition-transform duration-700
    "
            />
            {/* Icon wrapper */}
            <span
              className={`
      relative w-5 h-5
      transition-transform duration-300 ease-out
      ${open ? "rotate-90 scale-95" : "group-hover:scale-105"}
    `}
            >
              {/* Top line */}
              <span
                className={`
        absolute left-0 top-0 h-[2px] bg-[var(--navy)]
        transition-all duration-300 ease-out
        ${open ? "top-1/2 w-5 rotate-45" : "w-5 group-hover:w-4"}
      `}
              />

              {/* Middle line */}
              <span
                className={`
        absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[var(--navy)]
        transition-all duration-300 ease-out
        ${open ? "opacity-0 scale-x-0" : "w-5 group-hover:w-2.5"}
      `}
              />

              {/* Bottom line */}
              <span
                className={`
        absolute left-0 bottom-0 h-[2px] bg-[var(--navy)]
        transition-all duration-300 ease-out
        ${open ? "top-1/2 w-5 -rotate-45" : "w-5 group-hover:w-3.5"}
      `}
              />
            </span>
          </button>
        </motion.nav>
      </header>

      {/* Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[90] bg-[var(--ivory)]/95 backdrop-blur-2xl"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[95] flex flex-col items-center justify-between px-6 md:px-12 py-8 md:py-10"
            >
              <div className="h-6 md:h-10" />

              {/* Navitems */}
              <div className="flex flex-col items-center gap-3 md:gap-5">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => {
                      scrollToId(item.id);
                      setOpen(false);
                    }}
                    className="
          relative group
          text-[1.8rem] md:text-[2.6rem]
          font-semibold tracking-tight
          text-[var(--navy)]
          overflow-hidden
          px-8 md:px-12
          py-1.5 md:py-2
          flex items-center justify-center  cursor-pointer
        "
                  >
                    {/* Sweep */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className="
              absolute left-[-40%] top-0 h-full w-[40%]
              bg-gradient-to-r from-transparent via-[var(--navy)]/10 to-transparent
              group-hover:translate-x-[300%]
              transition-transform duration-700 ease-out
            "
                      />
                    </span>

                    {/* Ghost text */}
                    <span
                      className="
            absolute inset-0
            text-[var(--navy)]/10
            translate-y-[4px]
            scale-[1.02]
            opacity-0
            group-hover:opacity-100
            transition-all duration-300
          "
                    >
                      {item.label}
                    </span>

                    {/* Main text */}
                    <span
                      className="
            relative z-10
            transition-all duration-300 ease-out
            group-hover:translate-x-2
            group-hover:opacity-90
          "
                    >
                      {item.label}
                    </span>

                    {/* Underline */}
                    <span
                      className="
            absolute left-0 -bottom-1 h-[2px]
            w-0 group-hover:w-full
            bg-[var(--navy)]
            transition-all duration-500 ease-out
          "
                    />
                  </motion.button>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="w-full max-w-4xl mt-6 md:mt-10">
                {/* Separator */}
                <div className="w-full h-[1px] bg-[var(--sunset)]/40 mb-5" />

                <div
                  className="
      flex flex-col md:flex-row
      items-center justify-between
      gap-4 md:gap-6
      text-[10px] md:text-[11px]
      uppercase tracking-[0.22em]
      text-[var(--navy)]/70
    "
                >
                  {/* Legal */}
                  <div className="flex gap-5">
                    <button className="hover:text-[var(--navy)] transition  cursor-pointer">
                      Privacy
                    </button>
                    <button className="hover:text-[var(--navy)] transition  cursor-pointer">
                      Terms
                    </button>
                    <button className="hover:text-[var(--navy)] transition  cursor-pointer">
                      Cookies
                    </button>
                  </div>

                  {/* Brand */}
                  <div className="opacity-60">
                    © {new Date().getFullYear()} LIORA
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
