// ProcessCard.jsx
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

export default function ProcessCard({ icon: Icon, title, copy, index }) {
  return (
    <motion.li initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <span className="absolute -top-3 right-4 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-semibold">{index}</span>
      <div className="mb-3 flex items-center gap-3 text-emerald-300">
        {Icon ? <Icon /> : <Handshake />}
        <h4 className="font-semibold tracking-tight text-white">{title}</h4>
      </div>
      <p className="text-sm text-white/75">{copy}</p>
    </motion.li>
  );
}
