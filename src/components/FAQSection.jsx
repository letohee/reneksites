// FAQSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical website take?",
    a: "Starter landing pages are usually 1–2 weeks. Business sites (3–5 pages) are 2–4 weeks depending on content and feedback speed.",
  },
  {
    q: "What does your pricing include?",
    a: "Design + build in React/Tailwind, responsive layouts, performance pass, basic SEO setup, deploy to Vercel, and a short handover video.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes—every package includes a feedback round per milestone (design and build). Extra rounds are possible if needed.",
  },
  {
    q: "Do I need to provide copy and images?",
    a: "You can provide them, or I can help refine copy and source/licence images. Clear, simple copy converts best.",
  },
  {
    q: "Who hosts the site?",
    a: "I deploy to Vercel (fast, reliable, global CDN). You can keep ownership and billing on your own Vercel account if you prefer.",
  },
  {
    q: "Do I own the site after launch?",
    a: "Yes—100%. You’ll receive the GitHub repo and full deployment access.",
  },
  {
    q: "How do we start?",
    a: "Email me at tonkatabachev@gmail.com or call +44 7908 894226. We’ll do a 15-minute intro to scope goals and timelines.",
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5">
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-medium">{q}</span>
        <ChevronDown
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-5 pt-0 text-white/80">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs uppercase tracking-widest text-emerald-300/80">FAQ</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Questions people ask
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">
          If you don’t see your question here, email{" "}
          <a className="underline decoration-emerald-400/50 underline-offset-4 hover:text-white"
             href="mailto:tonkatabachev@gmail.com">tonkatabachev@gmail.com</a>.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl gap-3 px-4">
        {faqs.map((f, i) => (
          <Item key={i} {...f} i={i} />
        ))}
      </div>
    </section>
  );
}
