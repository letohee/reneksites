// StickyCallButton.jsx
export default function StickyCallButton() {
  return (
    <a
      href="tel:+447908894226"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/90 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur hover:bg-emerald-400 active:scale-[.98] md:hidden"
      aria-label="Call Tony"
    >
      Call
    </a>
  );
}
