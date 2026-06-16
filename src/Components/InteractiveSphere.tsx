import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";

interface SunriseSplashProps {
  onEnter: () => void;
}

export default function SunriseSplash({ onEnter }: SunriseSplashProps) {
  const [ready, setReady] = useState(false);

  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 5.5,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => setTimeout(() => setReady(true), 250),
    });

    return controls.stop;
  }, [progress]);

  const percent = useTransform(progress, (p) => Math.floor(p));

  return (
    <div className="fixed inset-0 overflow-hidden bg-[var(--navy)] text-white">
      {/* subtle tech grid (no accents, just structure) */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================= WORDMARK (UNCHANGED STRUCTURE) ================= */}
      <div className="pointer-events-none absolute bottom-[-2%] left-1/2 z-10 w-full -translate-x-1/2 overflow-hidden">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            flex justify-center whitespace-nowrap
            font-black uppercase
            tracking-[-0.08em]
            text-white/85 leading-none select-none
          "
          style={{
            fontSize: "clamp(5.8rem, 20vw, 22rem)",
          }}
        >
          {/* LI */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
          >
            LI
          </motion.span>

          {/* O (your special ring letter EXACT structure preserved) */}
          <motion.span
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -20 },
              show: { opacity: 1, scale: 1, rotate: 0 },
            }}
            className="relative mx-[0.02em]"
          >
            <span className="relative inline-flex items-center justify-center">
              <span className="h-[0.9em] w-[0.9em] rounded-full border-[0.08em] border-current block" />
              <span className="absolute h-[0.5em] w-[0.5em] rounded-full border-[0.04em] border-current" />
              <span className="absolute h-[1.05em] w-[0.22em] rounded-full border-[0.05em] border-current rotate-65" />
            </span>
          </motion.span>

          {/* RA */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
          >
            RA
          </motion.span>
        </motion.div>
      </div>

      {/* ================= LOADER / ENTER ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px]">
        <AnimatePresence mode="wait">
          {!ready ? (
            <motion.div
              key="loader"
              exit={{ opacity: 0, y: -10 }}
              className="w-full"
            >
              <div className="flex justify-between text-[10px] tracking-[0.35em] uppercase text-white/60 mb-3">
                <span>INITIALIZING</span>
                <motion.span>{percent}</motion.span>
              </div>

              <div className="h-[2px] bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  style={{
                    scaleX: progress,
                    originX: 0,
                  }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="enter"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-[10px] tracking-[0.35em] uppercase text-white/60">
                system ready
              </div>

              <motion.button
                onClick={onEnter}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  px-8 py-3
                  border border-white/20
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  bg-transparent
                "
              >
                Enter
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
