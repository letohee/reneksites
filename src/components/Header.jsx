// Header.jsx
import MagneticButton from "./MagneticButton";
import { Phone } from "lucide-react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
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
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-full border border-transparent px-3 py-1 text-[15px] font-medium text-white/85 transition hover:border-white/20 hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <MagneticButton
            as="a"
            href="#contact"
            className="rounded-full bg-emerald-500 text-sm text-white hover:bg-emerald-400"
          >
            <Phone size={16} /> Book a free call
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
