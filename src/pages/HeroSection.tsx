import { FiCpu, FiGlobe, FiLayers } from "react-icons/fi";
import InteractiveSun from "../Components/InteractiveSphere";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  return (
    <div className="w-full text-[var(--ivory)]">
      {/* Section 1: Welcome */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      >
        {/* 3D Sphere */}
        <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none -translate-y-14 md:-translate-y-18">
          <div className="w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] md:w-[800px] md:h-[800px] opacity-90">
            <InteractiveSun />
          </div>
        </div>
        {/* Animated brand text */}
        <motion.div
          className="absolute bottom-8 left-0 w-full px-6 md:px-12 z-10"
          style={{ perspective: 1000 }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
                delayChildren: 0.8,
              },
            },
          }}
        >
          <motion.h1
            className="
      font-nav
      w-full
      flex
      justify-between
      text-[clamp(3.5rem,12vw,9rem)]
      text-[var(--navy)]
      leading-none
      whitespace-nowrap
    "
          >
            {"LIORA".split("").map((letter, i) => {
              const letterDelay = i * 0.05;

              const exitY = useTransform(
                scrollYProgress,
                [0 + letterDelay, 0.9 + letterDelay],
                [0, 60],
              );

              const exitRotateY = useTransform(
                scrollYProgress,
                [0 + letterDelay, 0.9 + letterDelay],
                [0, 90],
              );

              const exitOpacity = useTransform(
                scrollYProgress,
                [0.2 + letterDelay, 1],
                [1, 0],
              );

              return (
                <motion.span
                  key={i}
                  className="inline-block will-change-transform"
                  style={{
                    y: exitY,
                    rotateY: exitRotateY,
                    opacity: exitOpacity,
                  }}
                  initial={{
                    opacity: 0,
                    y: 40,
                    rotateY: -90,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.8 + i * 0.25,
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.h1>
        </motion.div>
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
