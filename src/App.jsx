// src/App.jsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

/* Layout & sections */
import BackgroundLayer from "./components/BackgroundLayer";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import Footer from "./components/Footer";

/* Content blocks */
import { Hero } from "./components/Hero";
import WorkCard from "./components/WorkCard";
import ServiceCard from "./components/ServiceCard";
import ProcessCard from "./components/ProcessCard";
import AboutBlock from "./components/AboutBlock";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import AnalyticsShowcase from "./components/AnalyticsShowcase";
import StickyCallButton from "./components/StickyCallButton";

/* NEW: Native Google reviews */
import Reviews from "./components/Reviews";

/* Icons */
import { Layout, Zap, Workflow, BookUser, Rocket, BadgeCheck } from "lucide-react";

export default function App() {
  // ---------- Top scroll progress bar ----------
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();
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

  const workProjects = [
    {
      key: "asap",
      href: "https://www.asapmobilebatteryservice.co.uk/",
      image: "/asap.jpg",
      tags: ["Next.js", "Tailwind", "Vercel"],
    },
    {
      key: "ios",
      href: "/fyp.html",
      image: "/mobile.jpg",
      tags: ["SwiftUI", "REST API", "MVVM"],
      extraHref: "/fyp.html",
    },
    {
      key: "santaloca",
      href: "https://santa-loca-events.vercel.app/",
      image: "/santaloca.jpg",
      tags: ["Next.js", "Fatsoma embed", "Shopify merch"],
    },
  ];

  const serviceCards = [
    { key: "sites", icon: Layout },
    { key: "motion", icon: Zap },
    { key: "integrations", icon: Workflow },
  ];

  const process = t("process", { returnObjects: true });
  const processSteps = process.steps || [];
  const processIcons = [BookUser, Layout, Rocket, BadgeCheck];
  const aboutSection = t("aboutSection", { returnObjects: true });
  const trust = t("trust", { returnObjects: true });

  return (
    <div className="relative min-h-screen bg-transparent text-white">
      {/* Progress bar */}
      <div
        className="fixed inset-x-0 top-0 z-[70] h-1 bg-gradient-to-r from-emerald-400 to-green-600"
        style={{ width: progress + "%" }}
      />

      {/* Background (shape + particles) */}
      <BackgroundLayer />

      {/* Navbar */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* ---------- Work ---------- */}
      <Section id="work" className="py-20">
        <SectionHeader
          eyebrow={t("work.eyebrow")}
          title={t("work.title")}
          subtitle={t("work.subtitle")}
        />
        <p className="mx-auto mt-4 max-w-3xl px-6 text-center text-sm text-white/70">
          {t("work.description")}
        </p>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {workProjects.map((project) => {
            const extraLabel = project.extraHref ? t(`work.projects.${project.key}.extraLabel`, { defaultValue: "" }) : "";
            return (
              <WorkCard
                key={project.key}
                title={t(`work.projects.${project.key}.title`)}
                href={project.href}
                image={project.image}
                tags={project.tags}
                description={t(`work.projects.${project.key}.description`)}
                result={t(`work.projects.${project.key}.result`)}
                extraHref={project.extraHref}
                extraLabel={extraLabel || undefined}
              />
            );
          })}
        </div>
      </Section>

      {/* Sticky call on mobile */}
      <StickyCallButton />

      {/* ---------- Services ---------- */}
      <Section id="services" className="py-20">
        <SectionHeader
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />
        <p className="mx-auto mt-4 max-w-3xl px-6 text-center text-sm text-white/70">
          {t("services.localizationNote")}
        </p>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {serviceCards.map((card) => (
            <ServiceCard
              key={card.key}
              icon={card.icon}
              title={t(`services.cards.${card.key}.title`)}
              desc={t(`services.cards.${card.key}.desc`)}
              points={t(`services.cards.${card.key}.points`, { returnObjects: true })}
            />
          ))}
        </div>
      </Section>

      {/* ---------- Process ---------- */}
      <Section id="process" className="py-20">
        <SectionHeader
          eyebrow={process.eyebrow}
          title={process.title}
          subtitle={process.subtitle}
        />
        <ol className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = processIcons[i] || BookUser;
            return <ProcessCard key={step.title} icon={Icon} title={step.title} copy={step.copy} index={i + 1} />;
          })}
        </ol>
      </Section>

      {/* ---------- About ---------- */}
      <Section id="about" className="py-20">
        <SectionHeader
          eyebrow={aboutSection.eyebrow}
          title={aboutSection.title}
          subtitle={aboutSection.subtitle}
        />
        <AboutBlock />
      </Section>

      {/* ---------- Trust points ---------- */}
      <Section id="trust" className="py-20">
        <SectionHeader
          eyebrow={trust.eyebrow}
          title={trust.title}
          subtitle={trust.subtitle}
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {(trust.bullets || []).map((line, i) => (
            <div key={i} className="rounded-2xl bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-4 flex items-center gap-3 text-emerald-300">
                <span aria-hidden="true">★</span>
                <span className="font-medium">{line}</span>
              </div>
              <p className="text-sm text-white/70">{trust.paragraph}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- Reviews (Google) ---------- */}
      <Reviews />

      {/* ---------- Analytics showcase ---------- */}
      <AnalyticsShowcase />

      {/* ---------- Pricing, FAQ, Contact ---------- */}
      <PricingSection />
      <FAQSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
