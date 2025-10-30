import { motion } from "framer-motion";
import { FiCpu, FiGlobe, FiLayers, FiStar } from "react-icons/fi";

export default function JourneySection() {
  return (
    <div className="w-full text-[var(--navy)] overflow-hidden">
      {/* Section 1: Our Origin */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-[var(--ivory)] relative">
        {/* Decorative circles */}
        <motion.div
          className="absolute top-10 left-10 w-36 h-36 rounded-full opacity-20"
          style={{ background: "var(--navy)" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-56 h-56 border-4 border-[var(--navy)]/10 rounded-full"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg z-10 text-[var(--navy)]"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Our Journey
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl max-w-4xl z-10 text-[var(--navy)]/90"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          From humble beginnings in a small studio, Liora was born with a
          mission: to merge creativity and technology into seamless digital
          experiences. What started as a handful of passionate innovators has
          now grown into a multidisciplinary team shaping the future of digital
          interaction.
        </motion.p>
      </section>

      {/* Section 2: Core Values */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-[var(--navy)]">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-[var(--ivory)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Core Values
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mb-12 text-[var(--ivory)]/90"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We believe in innovation, collaboration, and impact. Every project is
          guided by these values, ensuring our work not only functions perfectly
          but also inspires and delivers meaningful outcomes.
        </motion.p>

        <motion.div
          className="flex gap-6 flex-wrap justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {[
            { icon: <FiStar />, label: "Innovation" },
            { icon: <FiGlobe />, label: "Collaboration" },
            { icon: <FiLayers />, label: "Impact" },
          ].map(({ icon, label }, i) => (
            <div
              key={i}
              className="w-36 h-36 rounded-3xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transition bg-[var(--ivory)]/20 backdrop-blur-md hover:bg-[var(--ivory)]/30"
            >
              <div className="text-[var(--ivory)] text-4xl mb-2">{icon}</div>
              <span className="text-[var(--ivory)] font-semibold text-center">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Section 3: Vision & Goals */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-[var(--ivory)] text-[var(--navy)]">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Vision & Goals
        </motion.h2>

        <motion.div
          className="relative max-w-5xl w-full flex flex-col md:flex-row md:justify-between gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {[
            {
              icon: <FiCpu />,
              title: "Innovative Solutions",
              desc: "We aim to create products that push the boundaries of technology and spark creativity across industries.",
            },
            {
              icon: <FiGlobe />,
              title: "Global Impact",
              desc: "Our goal is to develop solutions that reach people worldwide, creating meaningful connections and experiences.",
            },
            {
              icon: <FiLayers />,
              title: "Creative Experiences",
              desc: "We focus on blending design, storytelling, and technology to craft experiences users love.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-[var(--navy)]/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <div className="text-[var(--navy)] text-4xl mb-2">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-[var(--navy)]/80 text-sm">{desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Section 4: Invitation to Explore */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-[var(--navy)]">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-[var(--ivory)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Join Our Journey
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mb-10 text-[var(--ivory)]/90"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Every project, every creation, is part of a bigger story. We invite
          you to explore, collaborate, and grow with us. Together, we shape the
          future of digital experiences.
        </motion.p>
        <motion.button
          className="mt-8 px-8 py-4 rounded-full bg-[var(--ivory)]/20 backdrop-blur-md text-[var(--ivory)] font-semibold hover:bg-[var(--ivory)]/30 transition cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Explore Our Work
        </motion.button>
      </section>
    </div>
  );
}
