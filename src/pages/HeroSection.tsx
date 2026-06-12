// import { motion } from "framer-motion";
import aboutBg from "../assets/about/TOPONE.jpg";

export default function AboutSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      />

      {/* Subtle noise overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/35" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-start pt-40 px-6 text-center">
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-white/60">
            About Liora
          </h2>

          <div className="mt-2 h-px w-24 mx-auto bg-linear-to-r from-transparent via-white/40 to-transparent" />
        </motion.div> */}

        {/* Text box */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
        >
          <p className="text-base font-medium leading-snug">
            We create illuminative digital experiences where technology,
            creativity, and strategy converge. Liora transforms ambitious ideas
            into immersive digital systems that feel alive, intelligent, and
            expressive.
          </p>
        </motion.div> */}
      </div>

      {/* Wordmark */}
      <div className="pointer-events-none absolute bottom-[-2%] left-1/2 z-10 w-full -translate-x-1/2 overflow-hidden">
        <div
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
          LI
          <span className="relative mx-[0.02em]">
            <span className="relative inline-flex items-center justify-center">
              <span className="h-[0.9em] w-[0.9em] rounded-full border-[0.08em] border-current block" />
              <span className="absolute h-[0.5em] w-[0.5em] rounded-full border-[0.04em] border-current" />
              <span className="absolute h-[1.05em] w-[0.22em] rounded-full border-[0.05em] border-current rotate-65" />
            </span>
          </span>
          RA
        </div>
      </div>
    </section>
  );
}
