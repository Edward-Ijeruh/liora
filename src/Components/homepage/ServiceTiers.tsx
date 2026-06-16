import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaBolt, FaGem, FaCrown } from "react-icons/fa";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const tiers = [
  {
    name: "Spark",
    level: "Starter",
    color: "#2563eb",
    icon: FaBolt,
    subtitle: "Best for small businesses, personal brands, landing pages",
    scope: "Up to 5-page website",
    design: "UI/UX included",
    dev: "Frontend development",
    analytics: "---",
    support: "1 month post-launch support",
    pricing: [
      {
        type: "Small Business / Startup",
        ngn: "300k – 600k",
        usd: "$200 – $400",
      },
      { type: "Mid-size Company", ngn: "600k – 1M", usd: "$400 – $650" },
      { type: "Corporate / Institution", ngn: "1M – 2M", usd: "$650 – $1,300" },
    ],
  },
  {
    name: "Luminary",
    level: "Growth",
    color: "#7c3aed",
    icon: FaGem,
    subtitle: "Best for SMEs, startups, NGOs",
    scope: "Multi-page site or simple web app",
    design: "Custom UI/UX design",
    dev: "Frontend + backend development",
    analytics: "Basic data dashboard",
    support: "3 months + retainer option",
    pricing: [
      {
        type: "Small Business / Startup",
        ngn: "700k – 1.5M",
        usd: "$450 – $1,000",
      },
      { type: "Mid-size Company", ngn: "1.5M – 3M", usd: "$1,000 – $2,000" },
      {
        type: "Corporate / Institution",
        ngn: "3M – 6M",
        usd: "$2,000 – $4,000",
      },
    ],
  },
  {
    name: "Apex",
    level: "Enterprise",
    color: "#d97706",
    icon: FaCrown,
    subtitle: "Best for corporates, fintechs, platforms",
    scope: "Full-stack web or mobile application",
    design: "End-to-end design system",
    dev: "Frontend + backend + cloud",
    analytics: "Full data & analytics integration",
    support: "6 months + dedicated retainer",
    pricing: [
      {
        type: "Small Business / Startup",
        ngn: "2M – 4M",
        usd: "$1,300 – $2,600",
      },
      { type: "Mid-size Company", ngn: "4M – 8M", usd: "$2,600 – $5,200" },
      {
        type: "Corporate / Institution",
        ngn: "8M – 20M",
        usd: "$5,200 – $13,000",
      },
    ],
  },
];

const retainers = [
  {
    name: "Core",
    color: "#2563eb",
    subtitle: "Essential maintenance & monitoring",
    features: ["Bug fixes", "Uptime monitoring", "Minor content updates"],
    pricing: [
      { type: "Small Business", ngn: "50k – 80k/mo", usd: "$33 – $53/mo" },
      { type: "Mid-size", ngn: "100k – 200k/mo", usd: "$65 – $130/mo" },
      { type: "Corporate", ngn: "200k – 400k/mo", usd: "$130 – $260/mo" },
    ],
  },
  {
    name: "Plus",
    color: "#7c3aed",
    subtitle: "Core + features & reporting",
    features: [
      "Everything in Core",
      "Feature additions",
      "Monthly performance report",
    ],
    pricing: [
      { type: "Small Business", ngn: "80k – 150k/mo", usd: "$53 – $100/mo" },
      { type: "Mid-size", ngn: "200k – 350k/mo", usd: "$130 – $230/mo" },
      { type: "Corporate", ngn: "400k – 700k/mo", usd: "$260 – $460/mo" },
    ],
  },
  {
    name: "Max",
    color: "#d97706",
    subtitle: "Priority support + dedicated hours",
    features: [
      "Everything in Plus",
      "Priority SLA",
      "Dedicated developer hours",
    ],
    pricing: [
      { type: "Small Business", ngn: "150k – 250k/mo", usd: "$100 – $165/mo" },
      { type: "Mid-size", ngn: "350k – 600k/mo", usd: "$230 – $395/mo" },
      { type: "Corporate", ngn: "700k – 1.5M/mo", usd: "$460 – $990/mo" },
    ],
  },
];

export default function ServiceTiers() {
  return (
    <>
      {/* Tiers */}
      <section className="relative bg-[var(--ivory)] text-[var(--navy)] py-20">
        {/* HEADER */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs tracking-[0.45em] uppercase text-[var(--navy)]/40">
              Service Tiers
            </p>
          </div>

          <p className="text-xs tracking-[0.35em] uppercase text-[var(--navy)]/30">
            01 - 03
          </p>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {tiers.map((t, i) => {
            const Icon = t.icon;

            return (
              <motion.div
                key={i}
                variants={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative overflow-hidden border transition-all duration-500"
                style={{ borderColor: `${t.color}` }}
              >
                {/* Shimmer */}
                <span
                  className="
                  absolute inset-0
                  -translate-x-full
                  group-hover:translate-x-full
                  bg-gradient-to-r from-transparent via-black/5 to-transparent
                  transition-transform duration-700
                "
                />

                {/* Top strip */}
                <div
                  className="p-6 flex items-center justify-between"
                  style={{
                    backgroundColor: t.color,
                  }}
                >
                  <div className="flex items-center gap-3 text-white">
                    <Icon className="text-lg" />

                    <div>
                      <p className="text-xs tracking-[0.3em] uppercase text-white/80">
                        {t.name}
                      </p>
                      <p className="text-lg font-semibold text-white">
                        {t.level}
                      </p>
                    </div>
                  </div>

                  <span className="text-white/70 text-xs tracking-[0.3em]">
                    0{i + 1}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-sm text-[var(--navy)]/70">{t.subtitle}</p>

                  <div className="mt-5 space-y-3 text-sm">
                    <p>
                      <span className="font-medium">Scope:</span> {t.scope}
                    </p>
                    <p>
                      <span className="font-medium">Design:</span> {t.design}
                    </p>
                    <p>
                      <span className="font-medium">Dev:</span> {t.dev}
                    </p>
                    <p>
                      <span className="font-medium">Analytics:</span>{" "}
                      {t.analytics}
                    </p>
                    <p>
                      <span className="font-medium">Support:</span> {t.support}
                    </p>
                  </div>

                  <div
                    className="mt-6 h-px"
                    style={{ backgroundColor: `${t.color}25` }}
                  />

                  {/* Pricing */}
                  <div className="mt-6 space-y-3">
                    {t.pricing.map((p, idx) => (
                      <div
                        key={idx}
                        className="
                        flex justify-between text-xs
                        border p-3
                        transition-all duration-300
                        group-hover:translate-x-0.5
                      "
                        style={{
                          borderColor: `${t.color}25`,
                        }}
                      >
                        <span className="text-[var(--navy)]/70">{p.type}</span>

                        <div className="text-right">
                          <div>{p.ngn}</div>
                          <div className="text-[var(--navy)]/50">{p.usd}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Retainer plans */}
      <section className="mt-20">
        <div className="flex items-end justify-between mb-10">
          <p className="text-xs tracking-[0.45em] uppercase text-[var(--navy)]/40">
            Retainer Plans
          </p>

          <p className="text-xs tracking-[0.35em] uppercase text-[var(--navy)]/30">
            01 - 03
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {retainers.map((r, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative overflow-hidden border"
              style={{ borderColor: `${r.color}40` }}
            >
              {/* Shimmer */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-transform duration-700" />

              {/* Header */}
              <div className="p-5" style={{ backgroundColor: r.color }}>
                <p className="text-white text-xs tracking-[0.3em] uppercase opacity-80">
                  {r.name}
                </p>
                <p className="text-white font-semibold text-lg">{r.subtitle}</p>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="space-y-2 text-xs text-[var(--navy)]/70">
                  {r.features.map((f, j) => (
                    <p key={j}>+ {f}</p>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  {r.pricing.map((p, j) => (
                    <div
                      key={j}
                      className="flex justify-between text-xs border p-3"
                      style={{ borderColor: `${r.color}25` }}
                    >
                      <span>{p.type}</span>
                      <div className="text-right">
                        <div>{p.ngn}</div>
                        <div className="text-[var(--navy)]/50">{p.usd}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Add on services */}
      <section className="mt-20">
        <div className="flex items-end justify-between mb-10">
          <p className="text-xs tracking-[0.45em] uppercase text-[var(--navy)]/40">
            Add-on Services
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6 text-xs"
        >
          {[
            ["Mobile App Development", "1.5M – 15M", "$1,000 – $10,000"],
            ["Cloud Setup & Migration", "300k – 4M", "$200 – $2,600"],
            ["UI/UX Audit & Redesign", "150k – 1.2M", "$100 – $800"],
            ["Data Dashboard", "400k – 5M", "$265 – $3,300"],
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="group relative border border-[var(--sunset)]/40 p-5 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-[var(--sunset)]/10 to-transparent transition-transform duration-700" />

              <div className="relative flex justify-between">
                <p className="font-medium">{item[0]}</p>
                <p className="text-[var(--navy)]/60">{item[1]}</p>
              </div>

              <p className="text-[var(--navy)]/40 mt-1">{item[2]}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Guidelines */}
      <section className="mt-20">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <p className="text-xs tracking-[0.45em] uppercase text-[var(--navy)]/40">
            Pricing Guidelines
          </p>

          <p className="text-xs tracking-[0.35em] uppercase text-[var(--navy)]/30">
            01 - 05
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-1 gap-6"
        >
          {[
            "Always quote a range first, never fix pricing early.",
            "USD for international clients, NGN for local.",
            "Pricing table is a baseline, not a ceiling.",
            "We do not compete on price, we compete on quality.",
            "All projects are milestone-based payments.",
          ].map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="
    group relative overflow-hidden
    border border-[var(--sunset)]/40
    p-6
    transition-all duration-500
    hover:-translate-y-1
  "
            >
              {/* Shimmer */}
              <span
                className="
            absolute inset-0
            -translate-x-full
            group-hover:translate-x-full
            bg-gradient-to-r from-transparent via-[var(--sunset)]/10 to-transparent
            transition-transform duration-700
          "
              />

              {/* Left accent  */}
              <span
                className="
            absolute left-0 top-0
            h-full w-[3px]
            bg-[var(--sunset)]
            scale-y-0 origin-top
            group-hover:scale-y-100
            transition-transform duration-300
          "
              />

              {/* Content */}
              <div className="relative flex gap-5">
                {/* Number badge */}
                <div
                  className="
              flex-shrink-0
              w-10 h-10
              flex items-center justify-center
              border border-[var(--navy)]/10
              text-xs font-semibold
              text-[var(--sunset)]
              group-hover:border-[var(--sunset)]/30
              transition
            "
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <p className="text-md leading-relaxed text-[var(--navy)]/70 group-hover:text-[var(--navy)] transition">
                  {t}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
