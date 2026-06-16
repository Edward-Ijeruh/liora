import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";
import aboutBg from "../../assets/homepage/TOPONE.jpg";
import { ArrowRight, ChevronsDown } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden bg-black text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="relative z-10 flex h-full flex-col justify-center px-6 text-center"
      >
        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="
    text-[2rem] md:text-[3.2rem] lg:text-[4.2rem]
    font-semibold leading-[1.1]
    tracking-tight
    max-w-5xl mx-auto uppercase
  "
        >
          Building intelligent systems for modern organizations
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="
    mt-5 max-w-xl mx-auto
    text-sm md:text-base
    text-white leading-relaxed
    hidden md:block
  "
        >
          We design and build software, cloud, and AI systems that help
          businesses scale, modernize, and solve complex technical problems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4"
        >
          {/* Primary CTA */}
          <button
            className="
      group relative overflow-hidden
      flex items-center justify-center gap-2
      w-full md:w-auto
      px-6 py-3
      bg-[var(--navy)]
      text-white
      text-xs uppercase tracking-[0.25em]
      border border-transparent
      transition-all duration-300
      hover:scale-[1.02] cursor-pointer
    "
          >
            {/* shimmer layer */}
            <span
              className="
        absolute inset-0
        -translate-x-full group-hover:translate-x-full
        bg-gradient-to-r from-transparent via-white/15 to-transparent
        transition-transform duration-700 ease-out
      "
            />

            {/* soft glow */}
            <span
              className="
        absolute inset-0 opacity-0 group-hover:opacity-20
        bg-[radial-gradient(circle_at_center,white,transparent_70%)]
        transition-opacity duration-500
      "
            />

            {/* content */}
            <span className="relative z-10 flex items-center gap-2">
              <span className="transition-all duration-300 group-hover:tracking-[0.35em]">
                Work With Us
              </span>

              <ArrowRight
                size={14}
                className="
          transition-all duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-0.5
        "
              />
            </span>
          </button>

          {/* Secondary CTA */}
          <button
            className="
      group relative overflow-hidden
      flex items-center justify-center gap-2
      w-full md:w-auto
      px-6 py-3
      border border-white/20
      text-white/80
      text-xs uppercase tracking-[0.25em]
      transition-all duration-300
      hover:text-white
      hover:border-white/40
      hover:scale-[1.02] cursor-pointer
    "
          >
            {/* subtle sweep */}
            <span
              className="
        absolute inset-0
        -translate-x-full group-hover:translate-x-full
        bg-gradient-to-r from-transparent via-white/10 to-transparent
        transition-transform duration-700 ease-out
      "
            />

            {/* content */}
            <span className="relative z-10 flex items-center gap-2">
              <span className="transition-all duration-300 group-hover:tracking-[0.25em]">
                See Our Work
              </span>

              <ArrowRight
                size={14}
                className="
          opacity-60 transition-all duration-300
          group-hover:opacity-100
          group-hover:translate-x-1
        "
              />
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 8, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
            className={i !== 0 ? "-mt-4" : ""}
          >
            <ChevronsDown
              size={24}
              strokeWidth={1.2}
              className="text-white/70"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
