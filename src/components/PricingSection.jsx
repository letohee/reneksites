// PricingSection.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MagneticButton from "./MagneticButton";
import { CheckCircle2 } from "lucide-react";

export default function PricingSection() {
  const { t } = useTranslation();
  const pricing = t("pricing", { returnObjects: true });
  const planOrder = pricing.planOrder || [];
  const plans = pricing.plans || {};

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-xs uppercase tracking-widest text-emerald-300/80">{pricing.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{pricing.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">{pricing.subtitle}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        {planOrder.map((key, i) => {
          const plan = plans[key];
          if (!plan) return null;
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${
                plan.highlight ? "ring-2 ring-emerald-400" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-emerald-300 text-2xl font-bold">{plan.price}</p>
              <p className="mt-2 text-sm text-white/70">{plan.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80 text-left">
                {(plan.features || []).map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-300" size={16} /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-center gap-3">
                <MagneticButton
                  as="a"
                  href="mailto:tonkatabachev@gmail.com"
                  className={`rounded-full ${
                    plan.highlight
                      ? "bg-emerald-500 text-white hover:bg-emerald-400"
                      : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Email Tony
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="tel:+44790884226"
                  className={`rounded-full ${
                    plan.highlight
                      ? "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                      : "border border-white/10 bg-transparent text-white/70 hover:bg-white/5"
                  }`}
                >
                  Call
                </MagneticButton>
              </div>
            </motion.div>
          );
        })}
      </div>

      {pricing.maintenance && (
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center text-sm text-white/80 backdrop-blur">
          <p className="text-base font-semibold text-white">{pricing.maintenance.title}</p>
          <p className="mt-2 text-white/70">{pricing.maintenance.body}</p>
        </div>
      )}
    </section>
  );
}
