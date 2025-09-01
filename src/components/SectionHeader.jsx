// SectionHeader.jsx
export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl px-4 text-center">
      <p className="text-xs uppercase tracking-widest text-emerald-300/80">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-white/75">{subtitle}</p>
    </div>
  );
}
