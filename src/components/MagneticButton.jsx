// MagneticButton.jsx
import { useRef, useState } from "react";

export default function MagneticButton({ children, as = "button", className = "", ...props }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x * 0.2, y: y * 0.2 });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  const Comp = as;
  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      className={`group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium shadow-lg transition-[transform,box-shadow] hover:shadow-2xl active:scale-[.98] ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
