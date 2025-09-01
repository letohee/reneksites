// useSlideIn.js
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function useSlideIn() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const variants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  return { ref, inView, variants };
}
