// Hero.jsx
import { motion } from "framer-motion";
import useSlideIn from "./useSlideIn";
import MagneticButton from "./MagneticButton";
import {
  MoveRight,
  ArrowUpRight,
  CheckCircle2,
  Rocket,
  BadgeCheck,
  Star,
  ChevronDown,
} from "lucide-react";
import Typewriter from "./Typewriter";

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24">
      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-28 pt-24 md:grid-cols-2"
        initial={{ y: 0 }}
        whileInView={{ y: -8 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      >
        <HeroCopy />
        <HeroShowcase />
      </motion.div>
      <div className="mx-auto flex max-w-7xl justify-center pb-8">
        <ChevronDown className="animate-bounce text-white/60" />
      </div>
    </section>
  );
}

export function HeroCopy() {
  const { ref, inView, variants } = useSlideIn();
  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? "show" : "hidden"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
        <Rocket size={14} /> Launch in weeks, not months
      </span>

      {/* Heading — SAME styles, with typewriter inside */}
      <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        <Typewriter
          className="inline"
          segments={[
            { text: "Websites that feel ", className: "" },
            {
              text: "premium",
              className:
                "bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent",
            },
            { text: " and convert.", className: "" },
          ]}
          speed={26}
          startDelay={250}
        />
      </h1>

      <p className="mt-4 max-w-xl text-white/80">
        I’m Tony — a Computing graduate and freelance web developer. I build fast, modern
        websites with crisp motion and clear messaging.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <MagneticButton as="a" href="#contact" className="rounded-full bg-emerald-500 text-white hover:bg-emerald-400">
          Get a quote <MoveRight size={16} className="transition group-hover:translate-x-0.5" />
        </MagneticButton>
        <MagneticButton as="a" href="#work" className="rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10">
          See work <ArrowUpRight size={16} />
        </MagneticButton>
      </div>

      <ul className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/60">
        {["React + Tailwind", "Framer Motion", "Vercel deploy"].map((t) => (
          <li key={t} className="inline-flex items-center gap-2">
            <CheckCircle2 className="text-emerald-300" size={14} />
            {t}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function HeroShowcase() {
  const { ref, inView, variants } = useSlideIn();
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
        <img src="/logo.png" alt="Tony" className="mx-auto h-64 w-auto object-contain" />
        <div className="mt-4 rounded-2xl bg-[#062017]/70 p-4 text-sm text-white/80">
          <p className="mb-2 flex items-center gap-2">
            <BadgeCheck className="text-emerald-300" /> BSc (Hons) Computing — NTU
          </p>
          <p className="mb-2 flex items-center gap-2">
            <Star className="text-emerald-300" /> Freelance web developer
          </p>
          <p className="flex items-center gap-2">
            <Rocket className="text-emerald-300" /> Focus: clean UI, performance, and motion
          </p>
        </div>
      </div>
    </motion.div>
  );
}
