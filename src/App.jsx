import React, { useEffect, useState } from "react";
import BackgroundLayer from "./components/BackgroundLayer";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import { Hero } from "./components/Hero";
import WorkCard from "./components/WorkCard";
import ServiceCard from "./components/ServiceCard";
import ProcessCard from "./components/ProcessCard";
import AboutBlock from "./components/AboutBlock";
import Footer from "./components/Footer";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";


import { Layout, Zap, Workflow, BookUser, Rocket, BadgeCheck } from "lucide-react";

export default function App() {
  // scroll progress bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(p);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-white">
      {/* progress bar */}
      <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-gradient-to-r from-emerald-400 to-green-600" style={{ width: progress + "%" }} />

      {/* background + particles */}
      <BackgroundLayer />

      {/* navbar */}
      <Header />

      {/* hero */}
      <Hero />

      {/* work */}
      <Section id="work" className="py-20">
        <SectionHeader eyebrow="Selected Work" title="Clean, fast, conversion-ready" subtitle="A quick peek at builds and experiments." />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          <WorkCard title="ASAP Mobile Battery – Landing" href="https://asap-mb-site-86k4.vercel.app/" image="/asap.jpg" tags={["Next.js","Tailwind","Animation"]} />
          <WorkCard title="Battery Lookup iOS App" href="#" image="/mobile.jpg" tags={["SwiftUI","REST API","MVVM"]} />
          <WorkCard title="Experimental UI – Glass + Motion" href="#" image="/ico.jpg" tags={["Framer Motion","Particles","Glass UI"]} />
        </div>
      </Section>

      {/* services */}
      <Section id="services" className="py-20">
        <SectionHeader eyebrow="Services" title="Everything you need to launch or level-up" subtitle="Design → Build → Ship. Simple, transparent pricing." />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          <ServiceCard icon={Layout} title="High-impact sites" desc="Single or multi-section sites built for clarity and conversions. Responsive, accessible, fast." points={["Tailored UX & copy guidance","Performance budget","SEO essentials"]} />
          <ServiceCard icon={Zap} title="Interactions & motion" desc="Tasteful micro-interactions, parallax, and particle effects that feel alive—never gimmicky." points={["Framer Motion","Scroll reveals","Magnetic buttons"]} />
          <ServiceCard icon={Workflow} title="Integrations" desc="Forms, analytics, CMS, email capture, booking, payments—done right and instrumented." points={["Stripe/Checkout","Calendly","Netlify/Vercel"]} />
        </div>
      </Section>

      {/* process */}
      <Section id="process" className="py-20">
        <SectionHeader eyebrow="Process" title="A smooth 4-step flow" subtitle="No fluff. Clear comms, quick iterations, on-time delivery." />
        <ol className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-4">
          {[
            { icon: BookUser, title: "Discover", copy: "Quick intro call, goals, scope, timeline." },
            { icon: Layout, title: "Design", copy: "Wireframe → polished UI in your brand colors." },
            { icon: Rocket, title: "Build", copy: "Production-ready React + Tailwind, responsive and fast." },
            { icon: BadgeCheck, title: "Ship", copy: "Deploy to Vercel with analytics + handover video." },
          ].map((s, i) => <ProcessCard key={i} {...s} index={i+1} />)}
        </ol>
      </Section>

      {/* about */}
      <Section id="about" className="py-20">
        <SectionHeader eyebrow="About Tony" title="Computing grad & freelance web dev" subtitle="I build clean, modern sites that convert." />
        <AboutBlock />
      </Section>

      {/* trust */}
      <Section id="trust" className="py-20">
        <SectionHeader eyebrow="Why RenekSites" title="People like working with me" subtitle="Clear comms, high craft, reliable delivery." />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {["Snappy turnarounds","Pixel-perfect execution","Detailed handover & docs"].map((line, i) => (
            <div key={i} className="rounded-2xl bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-4 flex items-center gap-3 text-emerald-300"><span className="i">★</span><span className="font-medium">{line}</span></div>
              <p className="text-sm text-white/70">From scoping to launch, you get crisp updates and a site that feels premium on every screen.</p>
            </div>
          ))}
        </div>
      </Section>
<PricingSection />
<FAQSection />

      {/* contact & footer */}
      <Section id="contact" className="pb-24 pt-10">
        {/* keep your existing CTA component here if you later split it out */}
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-transparent p-10">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Ready to launch something you’re proud of?</h3>
                <p className="mt-1 text-white/75">Let’s build a beautiful, fast website that actually sells.</p>
              </div>
              <div className="flex gap-3">
                <a href="mailto:tonkatabachev@gmail.com" className="rounded-full bg-white px-5 py-3 text-[#0b3d2e] hover:bg-emerald-100">Email Tony</a>
                <a href="tel:+447908894226" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white hover:bg-white/10">Call</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
