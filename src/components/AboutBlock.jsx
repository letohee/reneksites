// AboutBlock.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MagneticButton from "./MagneticButton";
import { CheckCircle2, Mail, Phone } from "lucide-react";

export default function AboutBlock() {
  const { t } = useTranslation();
  const skills = ["React/Next.js","Tailwind CSS","JavaScript/TypeScript","Framer Motion","REST APIs","Git/GitHub"];
  const cards = [
    { label: t("aboutBlock.stats.locationLabel"), value: t("aboutBlock.stats.locationValue") },
    { label: t("aboutBlock.stats.degreeLabel"), value: t("aboutBlock.stats.degreeValue") },
    { label: t("aboutBlock.stats.specialtyLabel"), value: t("aboutBlock.stats.specialtyValue") },
    { label: t("aboutBlock.stats.availabilityLabel"), value: t("aboutBlock.stats.availabilityValue") },
  ];

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <img src="/avatar.png" alt="Tony portrait" className="mx-auto h-72 w-auto object-contain" />
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          {cards.map((card) => (
            <div key={card.label} className="rounded-2xl bg-[#062017]/70 p-4">
              <p className="font-medium">{card.label}</p>
              <p className="text-white/70">{card.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-2xl font-semibold tracking-tight">{t("aboutBlock.title")}</h3>
        <p className="mt-3 text-white/80">{t("aboutBlock.body")}</p>
        <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
          {skills.map((s) => (
            <li key={s} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
              <CheckCircle2 className="text-emerald-300" size={16}/> {s}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3">
          <MagneticButton as="a" href="mailto:tonkatabachev@gmail.com" className="rounded-full bg-emerald-500 text-white hover:bg-emerald-400"><Mail size={16}/> {t("aboutBlock.buttons.email")}</MagneticButton>
          <MagneticButton as="a" href="tel:+447908894226" className="rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10"><Phone size={16}/> {t("aboutBlock.buttons.call")}</MagneticButton>
        </div>
      </motion.div>
    </div>
  );
}
