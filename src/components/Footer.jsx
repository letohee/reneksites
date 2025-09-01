import { Mail, Globe, ExternalLink, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex items-center gap-3 text-sm text-white/60">
          <img src="/logo.png" className="h-20 w-20" alt="logo" />
          <span>© {new Date().getFullYear()} RenekSites — Tony</span>
        </div>
        <div className="flex items-center gap-5 text-sm text-white/70">
          <a href="mailto:tonkatabachev@gmail.com" className="hover:text-white inline-flex items-center gap-1">
            <Mail size={14}/> Email
          </a>
          <a href="https://asap-mb-site-86k4.vercel.app/" className="hover:text-white inline-flex items-center gap-1" target="_blank" rel="noreferrer">
            <Globe size={14}/> Portfolio<ExternalLink size={12}/>
          </a>
          <a href="https://www.linkedin.com/in/antoan-bachev-734281261/" className="hover:text-white inline-flex items-center gap-1" target="_blank" rel="noreferrer">
            <Linkedin size={14}/> LinkedIn
          </a>
          <a href="#about" className="hover:text-white">About</a>
        </div>
      </div>
    </footer>
  );
}
