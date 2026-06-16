import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaPencilRuler,
  FaBrain,
  FaReact,
  FaSearch,
  FaServer,
  FaMobileAlt,
  FaChartBar,
  FaPaintBrush,
  FaLayerGroup,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";
import type { Variants } from "framer-motion";
import CountUp from "react-countup";
import ServiceTiers from "./ServiceTiers";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const services = [
  {
    title: "Website Design and Development",
    icon: FaLaptopCode,
    desc: "From brochure sites to corporate platforms. Fast, responsive, conversion-focused websites built with precision and intent.",
    bullets: [
      { icon: FaReact, text: "Next.js / React systems" },
      { icon: FaSearch, text: "SEO optimization" },
      { icon: FaPaintBrush, text: "Conversion-focused UI" },
    ],
  },
  {
    title: "Web Application Development",
    icon: FaDatabase,
    desc: "Custom dashboards, SaaS platforms, and internal tools engineered for performance and scale.",
    bullets: [
      { icon: FaServer, text: "Scalable backend systems" },
      { icon: FaChartBar, text: "Admin dashboards" },
      { icon: FaReact, text: "Frontend architecture" },
    ],
  },
  {
    title: "Mobile App Development",
    icon: FaMobileAlt,
    desc: "iOS and Android apps designed for real user behaviour and smooth performance.",
    bullets: [
      { icon: FaMobileAlt, text: "Cross-platform apps" },
      { icon: FaReact, text: "React Native builds" },
      { icon: FaChartBar, text: "Performance-first UX" },
    ],
  },
  {
    title: "Data and Analytics",
    icon: FaBrain,
    desc: "Turn raw data into decisions through dashboards and intelligence systems.",
    bullets: [
      { icon: FaChartBar, text: "BI dashboards" },
      { icon: FaDatabase, text: "Data pipelines" },
      { icon: FaBrain, text: "Predictive insights" },
    ],
  },
  {
    title: "Cloud Infrastructure",
    icon: FaCloud,
    desc: "Scalable cloud systems, DevOps pipelines, and deployment architecture.",
    bullets: [
      { icon: FaServer, text: "Cloud architecture" },
      { icon: FaCloud, text: "AWS / Azure / GCP" },
      { icon: FaShieldAlt, text: "Secure deployments" },
    ],
  },
  {
    title: "UI and UX Design",
    icon: FaPencilRuler,
    desc: "Human-centered design systems from wireframes to full product design.",
    bullets: [
      { icon: FaPaintBrush, text: "Design systems" },
      { icon: FaPencilRuler, text: "Wireframes & prototypes" },
      { icon: FaSearch, text: "UX research" },
    ],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[var(--ivory)] text-[var(--navy)] overflow-hidden"
    >
      <div className="relative z-10 px-6 md:px-24 py-26 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="
    group relative overflow-hidden
    bg-[var(--navy)]
    text-white
    border border-white/10
    p-8 md:p-12 lg:p-16
  "
        >
          {/* Shimmer */}
          <span
            className="
      absolute inset-0
      -translate-x-full
      group-hover:translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
      transition-transform
      duration-700
      ease-out
    "
          />

          {/* Glow */}
          <span
            className="
      absolute inset-0
      opacity-0
      group-hover:opacity-20
      transition-opacity
      duration-500
      bg-[radial-gradient(circle_at_center,white,transparent_70%)]
    "
          />

          <div className="relative z-10">
            {/* Top */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div>
                <p
                  className="
            text-[11px]
            tracking-[0.45em]
            uppercase
            text-white/50
            font-medium
          "
                >
                  LIORA
                </p>

                <h2
                  className="
            mt-5
            font-heading
            uppercase
            text-4xl
            md:text-6xl
            leading-[0.95]
            tracking-[-0.04em]
            max-w-4xl
          "
                >
                  Services & Pricing
                  <br />
                  Brochure
                </h2>

                <p className="mt-6 max-w-xl text-white/70">
                  Full-stack digital products for businesses serious about
                  growth.
                </p>
              </div>

              <div
                className="
          hidden lg:flex
          items-center justify-center
          w-24 h-24
          border border-white/10
        "
              >
                <FaLayerGroup className="text-2xl text-[var(--sunset)]" />
              </div>
            </div>

            {/* Stats */}
            <div
              className="
        mt-14
        pt-10
        border-t border-white/10
        grid grid-cols-1 md:grid-cols-3
        gap-8
      "
            >
              {/* 01 */}
              <div className="group/stat">
                <div className="flex items-center gap-4">
                  <FaLayerGroup className="text-[var(--sunset)] text-lg" />

                  <CountUp
                    start={0}
                    end={6}
                    duration={5}
                    enableScrollSpy
                    scrollSpyOnce
                  >
                    {({ countUpRef }) => (
                      <span
                        ref={countUpRef}
                        className="
                  text-6xl md:text-7xl
                  font-semibold
                  leading-none
                  text-white
                "
                      />
                    )}
                  </CountUp>
                </div>

                <p
                  className="
            mt-4
            text-xs
            tracking-[0.35em]
            uppercase
            text-white/50
          "
                >
                  Service Disciplines
                </p>
              </div>

              {/* 02 */}
              <div className="group/stat">
                <div className="flex items-center gap-4">
                  <FaRocket className="text-[var(--sunset)] text-lg" />

                  <CountUp
                    start={0}
                    end={3}
                    duration={5}
                    enableScrollSpy
                    scrollSpyOnce
                  >
                    {({ countUpRef }) => (
                      <span
                        ref={countUpRef}
                        className="
                  text-6xl md:text-7xl
                  font-semibold
                  leading-none
                "
                      />
                    )}
                  </CountUp>
                </div>

                <p
                  className="
            mt-4
            text-xs
            tracking-[0.35em]
            uppercase
            text-white/50
          "
                >
                  Delivery Tiers
                </p>
              </div>

              {/* 03 */}
              <div className="group/stat">
                <div className="flex items-center gap-4">
                  <FaHeadset className="text-[var(--sunset)] text-lg" />

                  <CountUp
                    start={0}
                    end={3}
                    duration={5}
                    enableScrollSpy
                    scrollSpyOnce
                  >
                    {({ countUpRef }) => (
                      <span
                        ref={countUpRef}
                        className="
                  text-6xl md:text-7xl
                  font-semibold
                  leading-none
                "
                      />
                    )}
                  </CountUp>
                </div>

                <p
                  className="
            mt-4
            text-xs
            tracking-[0.35em]
            uppercase
            text-white/50
          "
                >
                  Retainer Plans
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid header */}
        <div className="mt-20 flex items-end justify-between">
          <p className="text-xs tracking-[0.45em] uppercase text-[var(--navy)]/40">
            Service Disciplines
          </p>

          <p className="text-xs tracking-[0.35em] uppercase text-[var(--navy)]/30">
            01 - 06
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="
    mt-8
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    gap-6 md:gap-8
  "
        >
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="
          group relative overflow-hidden

          /* tighter card */
          p-5 md:p-6

          border border-[var(--sunset)]/20
          bg-transparent

          transition-all duration-500
          hover:scale-[1.02]
        "
              >
                {/* Shimmer */}
                <span
                  className="
            absolute inset-0
            -translate-x-full group-hover:translate-x-full
            bg-gradient-to-r from-transparent via-[var(--sunset)]/10 to-transparent
            transition-transform duration-700 ease-out
          "
                />

                {/* Top */}
                <div className="flex justify-between items-start">
                  <div className="text-[10px] tracking-[0.45em] text-[var(--navy)]/30">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <Icon
                    className="
              text-base text-[var(--sunset)]
              transition-all duration-500
              group-hover:rotate-12 group-hover:scale-110
            "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
            mt-4
            text-lg md:text-xl
            font-light
            tracking-tight
            transition-all duration-500
            group-hover:tracking-wide
          "
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs md:text-sm text-[var(--navy)]/70 leading-relaxed">
                  {s.desc}
                </p>

                {/* Divider */}
                <div className="mt-5 h-px w-full bg-[var(--sunset)]/20" />

                {/* Bullets */}
                <div className="mt-4 grid grid-cols-1 gap-2">
                  {s.bullets.map((b, j) => {
                    const BIcon = b.icon;

                    return (
                      <div
                        key={j}
                        className="
                  group/bullet relative overflow-hidden

                  flex items-center gap-2

                  px-3 py-2

                  border border-[var(--sunset)]/15

                  transition-all duration-500
                  hover:border-[var(--sunset)]/60
                  hover:translate-x-1
                "
                      >
                        {/* Shimmer */}
                        <span
                          className="
                    absolute inset-0
                    -translate-x-full group-hover/bullet:translate-x-full
                    bg-gradient-to-r from-transparent via-[var(--sunset)]/10 to-transparent
                    transition-transform duration-700
                  "
                        />

                        {/* Icon */}
                        <BIcon className="relative z-10 text-xs text-[var(--sunset)]/70" />

                        {/* Text */}
                        <span className="relative z-10 text-[11px] text-[var(--navy)]/70">
                          {b.text}
                        </span>

                        {/* Left accent */}
                        <span className="absolute left-0 top-0 w-[2px] h-full bg-[var(--sunset)] scale-y-0 group-hover/bullet:scale-y-100 origin-top transition-transform duration-300" />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <ServiceTiers />
      </div>
    </section>
  );
}

<CountUp start={0} end={6} duration={2} enableScrollSpy scrollSpyOnce>
  {({ countUpRef }) => (
    <span
      ref={countUpRef}
      className="
        text-5xl md:text-6xl
        font-semibold
        text-[var(--sunset)]
      "
    />
  )}
</CountUp>;
