// ServiceCard.jsx
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ServiceCard({ icon: Icon, title, desc, points }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="mb-3 flex items-center gap-3 text-emerald-300">
        <Icon />
        <h3 className="font-semibold tracking-tight text-white">{title}</h3>
      </div>
      <p className="text-sm text-white/75">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-300" size={16} /> {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
