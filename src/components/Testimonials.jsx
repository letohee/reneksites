import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";

// Example verified testimonial (replace when real one comes in)
const cards = [
  {
    name: "ASAP Mobile Car Battery",
    role: "Owner",
    site: "https://www.asapmobilebatteryservice.co.uk/",
    logo: "/1.jpg",           // replace with real client logo when you have it
    avatar: "/avatar.png",
    rating: 5,
    quote:
      "Tony was fast and clear from day one. He turned our ideas into a clean website and kept us updated the whole way. Excited to launch fully soon.",
    status: "Verified",
  },
];

function Stars({ n = 5 }) {
  return (
    <div className="text-emerald-300" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}
      <span className="text-white/25">{"★".repeat(5 - n)}</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-300/80">
            what clients say
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Proof beats promises.
          </h2>
          <p className="mt-3 text-white/75">
            Verified client feedback alongside reviews from trusted platforms.
          </p>
        </div>

        {/* Trustpilot CTA (kept lightweight, no paid widget required) */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
          <p className="mb-2 text-sm text-white/70">Trustpilot Reviews</p>
          <a
            href="https://uk.trustpilot.com/review/reneksites.co.uk"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border border-white/20 bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400"
          >
            See reviews on Trustpilot
          </a>
        </div>

        {/* Google Reviews via Elfsight (transparent styling handled by your custom CSS in the Elfsight dashboard) */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="mb-2 text-center text-sm text-white/70">Google Reviews</p>
          <div className="elfsight-app-51b7ad8b-11f2-4cf2-a96d-be26dc659823" />
        </div>

        {/* Verified client testimonial */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <Quote className="absolute -right-2 -top-2 h-10 w-10 rotate-12 text-emerald-400/25" />
              <div className="flex items-center gap-4">
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className="h-10 w-10 rounded-full border border-white/20 object-cover"
                />
                <div>
                  <figcaption className="font-semibold tracking-tight">{c.name}</figcaption>
                  <p className="text-sm text-white/70">{c.role}</p>
                </div>
                <a
                  href={c.site}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ml-auto inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
                >
                  Visit site <ArrowUpRight size={14} />
                </a>
              </div>

              {c.status && (
                <span className="mt-3 inline-block rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">
                  {c.status}
                </span>
              )}

              <blockquote className="mt-3 text-white/85">“{c.quote}”</blockquote>

              <div className="mt-4 flex items-center gap-2">
                <Stars n={c.rating} />
                <span className="text-xs text-white/60">({c.rating}/5)</span>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
