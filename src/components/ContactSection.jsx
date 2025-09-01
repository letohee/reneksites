// ContactSection.jsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Mail, Phone, CheckCircle2, AlertTriangle } from "lucide-react";

/**
 * HOW TO ENABLE:
 * 1) Go to https://formspree.io/ → Create a form → copy your form ID (looks like /f/abcdwxyz)
 * 2) Replace FORM_ID below with your real ID.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xandbprv";

export default function ContactSection() {
  const [status, setStatus] = useState({ loading: false, ok: false, err: "" });
  const formRef = useRef(null);

async function onSubmit(e) {
  e.preventDefault();
  setStatus({ loading: true, ok: false, err: "" });

  const fd = new FormData(e.currentTarget);

  // Honeypot
  if (fd.get("company_website")) {
    setStatus({ loading: false, ok: true, err: "" });
    e.currentTarget.reset();
    return;
  }

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: fd,
    });

    // Some Formspree responses are 204 or have no JSON body.
    let data = null;
    try {
      const ct = res.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        data = await res.json();
      }
    } catch {
      /* ignore JSON parse error */
    }

    if (res.ok) {
      setStatus({ loading: false, ok: true, err: "" });
      e.currentTarget.reset();
    } else {
      const msg =
        data?.errors?.[0]?.message ||
        data?.error ||
        `Something went wrong (HTTP ${res.status}). Please try again.`;
      setStatus({ loading: false, ok: false, err: msg });
    }
  } catch (err) {
    console.error("Form submit error:", err);
    setStatus({ loading: false, ok: false, err: "Network error. Please try again." });
  }
}


  return (
    <section id="contact" className="pb-24 pt-10">
      {/* Success toast */}
      {status.ok && (
        <div className="fixed right-4 top-20 z-[60]">
          <div className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-4 py-3 text-sm text-emerald-200 backdrop-blur">
            <CheckCircle2 className="text-emerald-300" size={18} />
            Message sent! I’ll get back to you soon.
          </div>
        </div>
      )}

      {/* Error toast */}
      {status.err && (
        <div className="fixed right-4 top-20 z-[60]">
          <div className="flex items-center gap-3 rounded-xl border border-red-400/30 bg-red-500/15 px-4 py-3 text-sm text-red-200 backdrop-blur">
            <AlertTriangle className="text-red-300" size={18} />
            {status.err}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <div className="mb-6 flex flex-col gap-2">
            <h3 className="text-2xl font-semibold tracking-tight">Let’s build something you’re proud of</h3>
            <p className="text-white/75">Email or call directly, or use the form — I reply within 24 hours.</p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm text-white/80">
              <a href="mailto:tonkatabachev@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 hover:bg-white/10">
                <Mail size={14} /> tonkatabachev@gmail.com
              </a>
              <a href="tel:+447908894226" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 hover:bg-white/10">
                <Phone size={14} /> +44 7908 894226
              </a>
            </div>
          </div>

          {/* FORM */}
          <form ref={formRef} onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="mb-1 block text-sm text-white/80">Name</label>
              <input
                type="text"
                name="name"
                required
                minLength={2}
                className="w-full rounded-xl border border-white/15 bg-[#062017]/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400/40"
                placeholder="Your name"
              />
            </div>

            <div className="md:col-span-1">
              <label className="mb-1 block text-sm text-white/80">Email</label>
              <input
                type="email"
                name="email"
                required
                inputMode="email"
                className="w-full rounded-xl border border-white/15 bg-[#062017]/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400/40"
                placeholder="you@example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-sm text-white/80">Project details</label>
              <textarea
                name="message"
                required
                minLength={10}
                rows={5}
                className="w-full rounded-xl border border-white/15 bg-[#062017]/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400/40"
                placeholder="What are you trying to build? Any links, deadlines, or budget ranges help."
              />
            </div>

            {/* Honeypot (hidden from humans) */}
            <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="mt-2 md:col-span-2">
              <MagneticButton
                as="button"
                type="submit"
                disabled={status.loading}
                className={`rounded-full ${status.loading ? "bg-emerald-500/60" : "bg-emerald-500 hover:bg-emerald-400"} text-white`}
              >
                {status.loading ? "Sending..." : "Send message"}
              </MagneticButton>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
