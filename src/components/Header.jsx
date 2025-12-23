// Header.jsx
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import MagneticButton from "./MagneticButton";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV = ["home", "work", "services", "process", "about", "contact"];

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-[#081f18]/55">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-6">
          {/* Brand + Logo */}
          <a href="#home" className="group flex items-center gap-3">
            {/* Tailwind doesn’t have h-18 → use h-16 or h-20 */}
            <img
              src="/logo.png"
              className="h-16 w-auto md:h-20"
              alt="RenekSites logo"
            />
            <span className="text-xl font-semibold tracking-tight">
              Renek<span className="text-emerald-400">sites</span>
            </span>
          </a>

          {/* Navigation links */}
          <nav className="hidden items-center gap-2 md:flex">
            {NAV.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-transparent px-3 py-1 text-[15px] font-medium text-white/85 transition hover:border-white/20 hover:text-white"
              >
                {t(`nav.${id}`)}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <div className="flex flex-col items-end gap-2 text-right">
            <MagneticButton
              as="a"
              href="tel:+44790884226"
              className="rounded-full bg-emerald-500 text-sm text-white hover:bg-emerald-400"
            >
              <Phone size={16} /> {t("header.ctaPrimary")}
            </MagneticButton>
            <div className="flex items-center gap-3 text-xs text-white/70">
              <a href="tel:+44790884226" className="hover:text-white">{t("header.ukLabel")}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
