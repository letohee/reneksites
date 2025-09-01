// BackgroundLayer.jsx
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useMemo } from "react";

export default function BackgroundLayer() {
  const particlesInit = async (engine) => { await loadSlim(engine); };

  const particleOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fps_limit: 60,
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: ["#16a34a", "#12b76a", "#86efac", "#ffffff"] },
      links: { enable: true, color: "#16a34a", opacity: 0.25, distance: 140 },
      move: { enable: true, speed: 0.8, outModes: { default: "out" } },
      opacity: { value: 0.45 },
      size: { value: { min: 1, max: 3 } },
      shape: { type: "circle" },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100 } },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <img
        src="/background.jpg"
        alt="bg"
        className="h-full w-full object-cover"
        style={{ filter: "saturate(1.05) contrast(1.02)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b3d2e]/70 via-[#0b3d2e]/50 to-[#071d16]/75" />
      <Particles className="absolute inset-0" init={particlesInit} options={particleOptions} />
    </div>
  );
}
