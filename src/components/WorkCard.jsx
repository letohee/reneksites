// WorkCard.jsx
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function WorkCard({ title, href, image, tags = [] }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-transform hover:-translate-y-0.5"
    >
      <div className="relative">
        <img src={image} alt="work" className="h-48 w-full object-cover opacity-70 transition group-hover:scale-[1.03] group-hover:opacity-100" />
        <span className="absolute right-3 top-3 rounded-full bg-[#071d16]/70 px-3 py-1 text-xs">
          Preview <ExternalLink size={12} className="inline" />
        </span>
      </div>
      <div className="space-y-3 p-4">
        <h3 className="font-semibold tracking-tight">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
