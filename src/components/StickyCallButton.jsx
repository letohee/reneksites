import { useTranslation } from "react-i18next";

export default function StickyCallButton() {
  const { t, i18n } = useTranslation();
  const isBg = i18n.language === "bg";
  const phone = isBg ? "+359876877095" : "+447908894226";
  return (
    <a
      href={`tel:${phone}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/90 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur hover:bg-emerald-400 active:scale-[.98] md:hidden"
      aria-label={t("stickyCall.label")}
    >
      {t("stickyCall.label")}
    </a>
  );
}
