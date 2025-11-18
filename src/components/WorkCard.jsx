import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

/**
 * Props:
 * - title: string
 * - href: string
 * - image: string (project thumbnail)
 * - tags: string[] (optional)
 * - description: string (optional)
 * - result: string (optional)
 * - extraHref / extraLabel: optional CTA below description
 * - status: "wip" | "done" | undefined  -> when "wip", an overlay with /work.png is shown
 */
const WorkCard = ({
  title,
  href,
  image,
  tags = [],
  description,
  result,
  extraHref,
  extraLabel,
  status,
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
  >
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover opacity-70 transition group-hover:scale-[1.03] group-hover:opacity-100"
      />

      {/* Top-right preview chip (kept) */}
      <span className="absolute right-3 top-3 rounded-full bg-[#071d16]/70 px-3 py-1 text-xs">
        Preview <ExternalLink size={12} className="inline" />
      </span>

      {/* ✅ Faded 'Work in progress' overlay (shows only for status='wip') */}
      {status === "wip" && (
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <img
            src="/work.png"
            alt="Work in progress"
            className="h-20 w-auto md:h-24 opacity-95"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      )}
    </div>

    <div className="space-y-3 p-4">
      <h3 className="font-semibold tracking-tight">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70"
          >
            {t}
          </span>
        ))}
      </div>
      {description && <p className="text-sm text-white/70">{description}</p>}
      {extraHref && extraLabel && (
        <a
          href={extraHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-emerald-300 hover:text-emerald-200"
        >
          {extraLabel} <ExternalLink size={12} />
        </a>
      )}
      {result && <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">{result}</p>}
    </div>
  </motion.a>
);

export default WorkCard;
