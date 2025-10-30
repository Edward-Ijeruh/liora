import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaPencilRuler,
  FaBrain,
  FaUniversity,
  FaHeartbeat,
  FaShoppingCart,
  FaRocket,
  FaBuilding,
  FaRobot,
  FaLightbulb,
  FaUsers,
  FaCogs,
} from "react-icons/fa";
import ProcessSection from "../Components/Process";

export const industries = [
  { name: "Fintech", icon: FaUniversity, color: "#4ade80" },
  { name: "Healthcare", icon: FaHeartbeat, color: "#f87171" },
  { name: "E-commerce", icon: FaShoppingCart, color: "#60a5fa" },
  { name: "Startups & SMEs", icon: FaRocket, color: "#facc15" },
  { name: "Government & Enterprise", icon: FaBuilding, color: "#a78bfa" },
  { name: "Emerging AI & Robotics", icon: FaRobot, color: "#34d399" },
];

const services = [
  {
    title: "Custom Web & Mobile Development",
    desc: "Beautiful, scalable, user-first applications built with modern stacks to engage and delight users.",
    icon: FaLaptopCode,
  },
  {
    title: "Database Management & Optimization",
    desc: "Secure, high-performance data solutions and migrations tailored to your organizational needs.",
    icon: FaDatabase,
  },
  {
    title: "Cloud & DevOps",
    desc: "Infrastructure as code, observability, and automated pipelines that scale with your business.",
    icon: FaCloud,
  },
  {
    title: "Cybersecurity Solutions",
    desc: "Enterprise-grade protection with threat modeling, penetration testing, and continuous monitoring.",
    icon: FaShieldAlt,
  },
  {
    title: "UI/UX Design",
    desc: "Human-centered design that drives adoption, retention, and memorable digital experiences.",
    icon: FaPencilRuler,
  },
  {
    title: "AI & Data Consulting",
    desc: "ML pipelines, actionable intelligence, and data strategies to turn insights into growth.",
    icon: FaBrain,
  },
];

export default function ServicesSection() {
  return (
    <div className="w-full text-[var(--ivory)] overflow-hidden">
      {/* Section 1: Industries We Serve */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-[var(--ivory)] text-[var(--navy)]">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-[var(--navy)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Industries We Serve
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-4xl mb-12 text-[var(--navy)]/90"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Liora partners with organizations across a wide spectrum of
          industries. Our expertise allows us to craft bespoke solutions that
          address the unique challenges of each sector, helping our clients
          achieve growth, efficiency, and digital transformation.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {industries.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="p-6 bg-[var(--navy)]/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center text-center"
            >
              <Icon className="text-5xl mb-4" style={{ color }} />
              <h3 className="text-xl font-semibold mb-2 text-[var(--navy)]">
                {name}
              </h3>
              <p className="text-[var(--navy)]/80 text-sm">
                We understand the unique challenges of {name}, building
                innovative, scalable solutions that drive real-world impact and
                digital growth.
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Section 2: Services */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[var(--navy)]">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-6 text-[var(--ivory)] drop-shadow-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          What We Offer
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-4xl mb-16 text-[var(--ivory)]/90 text-center leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          At Liora, we combine creativity, technology, and strategy to deliver
          world-class services that empower organizations to thrive in a
          digital-first world. Each service is crafted to solve real problems,
          improve user experiences, and generate measurable business results.
        </motion.p>

        <div className="relative max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ title, desc, icon: Icon }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[var(--ivory)]/10 hover:bg-[var(--ivory)]/20 backdrop-blur-sm 
                     p-8 rounded-2xl shadow-lg hover:shadow-2xl transform 
                     hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center text-center"
              >
                <Icon className="text-5xl text-[var(--ivory)] mb-4 drop-shadow-md" />
                <div className="font-semibold text-[var(--ivory)] text-lg md:text-xl mb-2">
                  {title}
                </div>
                <p className="text-sm md:text-base text-[var(--ivory)]/80 leading-snug">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Our Process */}
      <ProcessSection />

      {/* Section 4: About */}
      <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-[var(--navy)] text-[var(--ivory)]">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          {/* Left Side: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--ivory)]">
              Tech that Transforms. Strategy that Scales.
            </h2>
            <div className="space-y-4 text-lg text-[var(--ivory)]/90 leading-relaxed">
              <p>
                <strong className="text-[var(--ivory)]">Innovation:</strong> We
                combine design, development, and emerging technologies to create
                future-ready solutions. Our teams prototype quickly and iterate
                in production-ready ways.
              </p>
              <p>
                <strong className="text-[var(--ivory)]">Expertise:</strong> Our
                engineers and architects have led projects across fintech,
                healthcare, security, and enterprise-scale software delivering
                measurable outcomes.
              </p>
              <p>
                <strong className="text-[var(--ivory)]">Trust:</strong> From
                startups to established enterprises, clients trust us to deliver
                on time, within budget, and beyond expectations.
              </p>
            </div>
          </div>

          {/* Right Side: Animated Feature Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Design & Prototype",
                  desc: "Rapid UX experiments with measurable outcomes.",
                  delay: 0.05,
                },
                {
                  title: "Secure Architecture",
                  desc: "Threat modelling, encryption, & monitoring baked in.",
                  delay: 0.1,
                },
                {
                  title: "Data & ML",
                  desc: "Data strategy, pipelines, and ML model production.",
                  delay: 0.15,
                },
                {
                  title: "Operational Excellence",
                  desc: "SRE, observability, and SLO-driven reliability.",
                  delay: 0.2,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="bg-[var(--ivory)]/10 hover:bg-[var(--ivory)]/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <div className="font-semibold text-[var(--ivory)] text-lg md:text-xl mb-2">
                    {item.title}
                  </div>
                  <div className="text-sm md:text-base text-[var(--ivory)]/80 leading-snug">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Liora */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-[var(--ivory)] text-[var(--navy)]">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Why Choose Liora
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-4xl mb-12 text-[var(--navy)]/90"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We don’t just deliver services, we craft experiences, solve complex
          challenges, and empower our clients to achieve their full potential.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Card 1 */}
          <div className="p-6 bg-[var(--navy)]/5 hover:bg-[var(--navy)]/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition w-72 flex flex-col items-center">
            <FaLightbulb className="text-5xl text-[var(--anavy)] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[var(--navy)]">
              Tailored Solutions
            </h3>
            <p className="text-[var(--navy)]/80 text-sm">
              Each solution is customized to your business goals and users.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-[var(--navy)]/5 hover:bg-[var(--navy)]/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition w-72 flex flex-col items-center">
            <FaUsers className="text-5xl text-[var(--sunavy)] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[var(--navy)]">
              Cutting-Edge Technology
            </h3>
            <p className="text-[var(--navy)]/80 text-sm">
              We leverage the latest frameworks and cloud infrastructure for
              peak performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-[var(--navy)]/5 hover:bg-[var(--navy)]/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition w-72 flex flex-col items-center">
            <FaCogs className="text-5xl text-[var(--navy)] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[var(--navy)]">
              End-to-End Support
            </h3>
            <p className="text-[var(--navy)]/80 text-sm">
              From ideation to launch, we guide you every step of the way.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 6: Invitation */}
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
