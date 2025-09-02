import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Typewriter that supports styled segments.
 * Pass an array like:
 * [
 *   { text: "Websites that feel ", className: "" },
 *   { text: "premium", className: "bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent" },
 *   { text: " and convert.", className: "" }
 * ]
 */
export default function Typewriter({
  segments,
  speed = 26,
  startDelay = 250,
  caret = true,
  className = "",
}) {
  const flat = useMemo(() => segments.map((s) => s.text).join(""), [segments]);
  const [count, setCount] = useState(0);
  const [blink, setBlink] = useState(true);
  const timerRef = useRef(null);
  const caretRef = useRef(null);

  useEffect(() => {
    const start = setTimeout(() => {
      timerRef.current = setInterval(() => {
        setCount((c) => {
          if (c >= flat.length) {
            clearInterval(timerRef.current);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);

    caretRef.current = setInterval(() => setBlink((b) => !b), 520);

    return () => {
      clearTimeout(start);
      if (timerRef.current) clearInterval(timerRef.current);
      if (caretRef.current) clearInterval(caretRef.current);
    };
  }, [flat, speed, startDelay]);

  // compute visible portion per segment
  let remaining = count;
  const parts = segments.map((seg, i) => {
    const take = Math.max(0, Math.min(seg.text.length, remaining));
    remaining -= take;
    return (
      <span key={i} className={seg.className}>
        {seg.text.slice(0, take)}
      </span>
    );
  });

  return (
    <span className={className}>
      {parts}
 {caret && count < flat.length && (
  <span
    aria-hidden
    className="inline-block"
    style={{ opacity: blink ? 1 : 0 }}
  >
    |
  </span>
)}
    </span>
  );
}
