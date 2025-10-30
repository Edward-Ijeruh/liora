import { motion } from "framer-motion";
import { FiArrowDown, FiCpu, FiGlobe, FiLayers } from "react-icons/fi";
import InteractiveSun from "../Components/InteractiveSphere";

export default function HeroSection() {
  return (
    <div className="w-full text-[var(--ivory)]">
      {/* Section 1: Welcome */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
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

        {/* 3D Sphere */}
        <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
          <div className="w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] md:w-[800px] md:h-[800px] opacity-90">
            <InteractiveSun />
          </div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold drop-shadow-lg text-[var(--navy)]"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Welcome to Liora
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl max-w-3xl text-[var(--navy)]/90"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            At Liora, we transform ideas into immersive digital experiences,
            merging creativity with cutting-edge technology to craft solutions
            that inspire, engage, and endure.
          </motion.p>

          <motion.div
            className="mt-10 flex gap-4 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <button className="px-7 py-3 rounded-full bg-[var(--navy)]/20 backdrop-blur-md text-[var(--navy)] font-semibold hover:bg-[var(--navy)]/30 transition cursor-pointer">
              Explore Our World
            </button>
            <button className="px-7 py-3 rounded-full border-2 border-[var(--navy)] text-[var(--navy)] font-semibold hover:bg-[var(--navy)]/10 transition flex items-center gap-2 cursor-pointer">
              Scroll to Discover <FiArrowDown />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Philosophy */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-navy">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-[var(--ivory)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Philosophy
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mb-10 text-[var(--ivory)]/90"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Innovation without creativity is incomplete. Creativity without
          precision is wasted. At Liora, we blend artistry and engineering to
          deliver experiences that not only work flawlessly but also delight and
          inspire users across every touchpoint.
        </motion.p>

        <motion.div
          className="flex gap-6 flex-wrap justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-lg hover:scale-105 transition bg-[var(--ivory)]/20 backdrop-blur-md hover:bg-[var(--ivory)]/30">
            <FiCpu className="text-[var(--ivory)] text-4xl" />
          </div>
          <div className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-lg hover:scale-105 transition bg-[var(--ivory)]/20 backdrop-blur-md hover:bg-[var(--ivory)]/30">
            <FiGlobe className="text-[var(--ivory)] text-4xl" />
          </div>
          <div className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-lg hover:scale-105 transition bg-[var(--ivory)]/20 backdrop-blur-md hover:bg-[var(--ivory)]/30">
            <FiLayers className="text-[var(--ivory)] text-4xl" />
          </div>
        </motion.div>
      </section>

      {/* Section 3: What We Build */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-ivory text-[var(--navy)]">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          What We Build
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          From immersive apps to interactive web experiences and data-driven
          platforms, we design and engineer solutions that delight users,
          empower brands, and push the boundaries of technology.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="p-6 bg-[var(--navy)]/10 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Web & Mobile Apps</h3>
            <p className="text-sm text-[var(--navy)]/80">
              Seamlessly designed apps with stunning visuals and smooth
              performance.
            </p>
          </div>
          <div className="p-6 bg-[var(--navy)]/10 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              Immersive Experiences
            </h3>
            <p className="text-sm text-[var(--navy)]/80">
              Interactive digital experiences that engage users in meaningful
              ways.
            </p>
          </div>
          <div className="p-6 bg-[var(--navy)]/10 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              Data-driven Solutions
            </h3>
            <p className="text-sm text-[var(--navy)]/80">
              Innovative platforms powered by analytics and insights for smarter
              decisions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 4: Invitation */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-navy">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-[var(--ivory)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mb-10 text-[var(--ivory)]/90"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Whether you’re looking to collaborate, explore a project, or just say
          hello, we’re excited to hear from you. Let’s create something
          extraordinary together.
        </motion.p>
        <motion.button
          className="mt-8 px-8 py-4 rounded-full bg-[var(--ivory)]/20 backdrop-blur-md text-[var(--ivory)] font-semibold hover:bg-[var(--ivory)]/30 transition cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Get in Touch
        </motion.button>
      </section>
    </div>
  );
}
