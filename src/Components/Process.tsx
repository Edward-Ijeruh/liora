import { motion } from "framer-motion";

const processSteps = [
  { title: "Discovery", desc: "Understand goals, users, and constraints." },
  {
    title: "Design & Strategy",
    desc: "Prototypes, roadmaps, and architecture.",
  },
  { title: "Build & Secure", desc: "Development, QA, and security hardening." },
  {
    title: "Launch & Scale",
    desc: "Monitoring, optimization, and continuous delivery.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className=" min-h-screen flex flex-col justify-center relative"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section Title */}
        <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[var(--navy)] drop-shadow-lg">
          Our Process
        </h3>

        {/* Animated Curved Flow Path */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          {/* Main curved path */}
          <path
            d="M50 150 C250 0, 750 0, 950 150"
            stroke="var(--navy)"
            strokeWidth={4}
            fill="transparent"
            className="opacity-25"
          />
        </svg>

        {/* Step Cards */}
        <div className="relative z-10 grid md:grid-cols-4 gap-12 mt-28">
          {processSteps.map((step, i) => {
            return (
              <motion.div
                key={step.title}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(26, 31, 54, 0.6)",
                }}
                className="bg-[var(--navy)]/80 backdrop-blur-md rounded-3xl p-6 border border-[var(--navy)]/20 transition cursor-pointer relative"
              >
                {/* Connector line from floating sphere to card */}
                <svg
                  className="absolute w-0 h-20 -top-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
                  viewBox="0 0 2 80"
                  preserveAspectRatio="none"
                >
                  <line
                    x1={1}
                    y1={0}
                    x2={1}
                    y2={80}
                    stroke="var(--navy)"
                    strokeWidth={2}
                    strokeDasharray="4 2"
                  />
                </svg>

                <div className="text-[var(--ivory)] font-bold mb-2 text-lg">{`0${
                  i + 1
                }`}</div>
                <div className="font-semibold mb-2 text-lg">{step.title}</div>
                <div className="text-sm opacity-80">{step.desc}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Optional subtle tech-glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle,rgba(26, 31, 54, 1),transparent)] fixed"></div>
        </div>
      </div>
    </section>
  );
}
