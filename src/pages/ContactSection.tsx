import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative bg-[var(--navy)] text-[var(--ivory)] overflow-hidden">
      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-36 h-36 bg-[var(--ivory)] rounded-full opacity-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 border-4 border-[var(--ivory)]/10 rounded-full"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        className="max-w-3xl text-lg md:text-xl mb-12 text-[var(--ivory)]/90"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        We love connecting with innovators, creators, and forward-thinkers.
        Whether you have a project in mind, want to explore a partnership, or
        simply want to say hello, Liora is always eager to hear from you.
      </motion.p>

      {/* Contact Info */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-16 w-full max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center text-center w-40">
          <FiMail className="text-3xl text-[var(--ivory)] mb-2" />
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <p className="text-[var(--ivory)]/80 text-sm">hello@liora.com</p>
        </div>
        <div className="flex flex-col items-center text-center w-40">
          <FiPhone className="text-3xl text-[var(--ivory)] mb-2" />
          <h3 className="text-lg font-semibold mb-1">Phone</h3>
          <p className="text-[var(--ivory)]/80 text-sm">+234 801 234 5678</p>
        </div>
        <div className="flex flex-col items-center text-center w-40">
          <FiMapPin className="text-3xl text-[var(--ivory)] mb-2" />
          <h3 className="text-lg font-semibold mb-1">Address</h3>
          <p className="text-[var(--ivory)]/80 text-sm">Lagos, Nigeria</p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-3xl flex flex-col gap-6 p-8 rounded-3xl bg-[var(--ivory)]/10 backdrop-blur-md shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-2xl bg-[var(--ivory)]/10 text-[var(--ivory)] placeholder-[var(--ivory)]/60 border border-[var(--ivory)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--ivory)] transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-2xl bg-[var(--ivory)]/10 text-[var(--ivory)] placeholder-[var(--ivory)]/60 border border-[var(--ivory)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--ivory)] transition"
        />
        <textarea
          placeholder="Your Message"
          rows={6}
          className="w-full p-4 rounded-2xl bg-[var(--ivory)]/10 text-[var(--ivory)] placeholder-[var(--ivory)]/60 border border-[var(--ivory)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--ivory)] transition"
        ></textarea>
        <button
          type="submit"
          className="px-8 py-4 rounded-full bg-[var(--ivory)]/20 backdrop-blur-md font-semibold text-[var(--ivory)] hover:scale-105 hover:shadow-lg transition cursor-pointer"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
