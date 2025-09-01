// BackgroundLayer.jsx
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useMemo, useState } from "react";

export default function BackgroundLayer() {
  const [env, setEnv] = useState({ reduce: false, mobile: false });

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const mobile = window.innerWidth < 768;
    setEnv({ reduce, mobile });

    const onResize = () => setEnv((e) => ({ ...e, mobile: window.innerWidth < 768 }));
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const particlesInit = async (engine) => { await loadSlim(engine); };

  const particleOptions = useMemo(() => {
    // knobs
    const baseCount = env.mobile ? 28 : 60;
    const count = env.reduce ? 0 : baseCount;
    const speed = env.reduce ? 0 : 0.8;

    return {
      background: { color: { value: "transparent" } },
      fps_limit: 60,
      particles: {
        number: { value: count, density: { enable: true, area: 800 } },
        color: { value: ["#16a34a", "#12b76a", "#86efac", "#ffffff"] },
        links: { enable: !env.reduce, color: "#16a34a", opacity: 0.25, distance: 140 },
        move: { enable: !env.reduce, speed, outModes: { default: "out" } },
        opacity: { value: 0.45 },
        size: { value: { min: 1, max: 3 } },
        shape: { type: "circle" },
      },
      interactivity: {
        events: { onHover: { enable: !env.reduce, mode: "repulse" }, resize: true },
        modes: { repulse: { distance: 100 } },
      },
      detectRetina: true,
    };
  }, [env]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <img
        src="/background.jpg"
        alt="bg"
        className="h-full w-full object-cover"
        style={{ filter: "saturate(1.05) contrast(1.02)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b3d2e]/70 via-[#0b3d2e]/50 to-[#071d16]/75" />
      {/* If reduce is on, we still render with 0 particles to keep layout consistent */}
      <Particles className="absolute inset-0" init={particlesInit} options={particleOptions} />
    </div>
  );
}
