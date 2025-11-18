// FAQSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

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
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true });
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs uppercase tracking-widest text-emerald-300/80">{t("faq.eyebrow")}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          {t("faq.title")}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">{t("faq.description")}</p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl gap-3 px-4">
        {faqs.map((f, i) => (
          <Item key={i} {...f} i={i} />
        ))}
      </div>
    </section>
  );
}
