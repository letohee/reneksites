import { useTranslation } from "react-i18next";
import { LANG_OPTIONS } from "../i18n";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.language;

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 text-xs text-white/70 backdrop-blur"
      aria-label={t("languageSwitcher.label")}
    >
      {LANG_OPTIONS.map((lang) => {
        const active = current === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`rounded-full px-3 py-1 transition ${
              active ? "bg-emerald-500 text-white" : "text-white/70 hover:text-white"
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}

