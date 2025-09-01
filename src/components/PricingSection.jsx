// PricingSection.jsx
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "from £450",
    desc: "For individuals or small brands that need a credible site live quickly.",
    features: [
      "1–3 sections (landing page)",
      "Mobile responsive",
      "Basic SEO setup",
      "Deployed to Vercel",
    ],
  },
  {
    name: "Business",
    price: "from £950",
    desc: "The sweet spot for small businesses that want more leads and credibility.",
    features: [
      "Up to 5 pages to showcase services",
      "Custom design with crisp animations",
      "Contact form / booking",
      "SEO essentials + analytics",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "from £1,800",
    desc: "For brands ready to level-up with integrations, CMS, and advanced motion.",
    features: [
      "5+ pages or custom sections",
      "Advanced animations & interactions",
      "CMS / blog / integrations",
      "Priority support",
    ],
  },
];


export default function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-xs uppercase tracking-widest text-emerald-300/80">Pricing</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Clear, upfront pricing
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">
          Simple packages tailored to your needs. No hidden fees.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        {plans.map((plan, i) => (
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
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-300" size={16} /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-6">
             <div className="mt-6 flex gap-3 justify-center">
  <MagneticButton
    as="a"
    href="mailto:tony@reneksites.com"
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
    href="tel:+447908894226"
    className={`rounded-full ${
      plan.highlight
        ? "border border-white/20 bg-white/5 text-white hover:bg-white/10"
        : "border border-white/10 bg-transparent text-white/70 hover:bg-white/5"
    }`}
  >
    Call
  </MagneticButton>
</div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
