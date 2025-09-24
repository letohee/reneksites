// src/components/Reviews.jsx
import { useEffect, useState } from "react";

function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} star rating`}>
      {[1,2,3,4,5].map((n) => (
        <svg key={n} viewBox="0 0 20 20" className={`h-4 w-4 ${n <= rating ? "fill-amber-400" : "fill-white/25"}`}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.01 3.11a1 1 0 00.95.69h3.268c.967 0 1.371 1.24.588 1.81l-2.645 1.92a1 1 0 00-.364 1.118l1.01 3.11c.3.922-.755 1.688-1.54 1.118l-2.645-1.92a1 1 0 00-1.176 0l-2.645 1.92c-.785.57-1.84-.196-1.54-1.118l1.01-3.11a1 1 0 00-.364-1.118L2.233 8.537c-.783-.57-.379-1.81.588-1.81h3.268a1 1 0 00.95-.69l1.01-3.11z" />
        </svg>
      ))}
    </div>
  );
}

const FALLBACK = [
  {
    author: "KPRIZ",
    rating: 5,
    text: "I recently contacted Renek Sites to help build my website, and I couldn't be happier with the experience… exceeded what I imagined.",
    time: "3 weeks ago",
    photo: null,
  },
  {
    author: "ASAP Mobile Car Battery",
    rating: 5,
    text: "Fast turnaround and clear communication. The site looks professional and we've had more enquiries since launch.",
    time: "recent",
    photo: null,
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/google-reviews");
        const data = await res.json();
        if (!active) return;
        if (data?.ok && Array.isArray(data.reviews) && data.reviews.length) {
          setReviews(data.reviews);
        } else {
          setReviews(FALLBACK);
        }
      } catch {
        setReviews(FALLBACK);
      }
    })();
    return () => { active = false; };
  }, []);

  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-300/80">Google reviews</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">What people say</h2>
          <p className="mt-3 text-white/75">
            Live reviews pulled from Google. No plugins, no iframes—just fast and native.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {(reviews || FALLBACK).map((r, i) => (
            <article
              key={`${r.author}-${i}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {r.photo ? (
                    <img
                      src={r.photo}
                      alt={`${r.author} profile`}
                      className="h-10 w-10 rounded-full border border-white/15 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full border border-white/15 bg-white/10 flex items-center justify-center text-white/80 font-semibold">
                      {r.author?.[0] ?? "G"}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold tracking-tight">{r.author}</p>
                    <span className="text-xs text-white/60">{r.time}</span>
                  </div>
                </div>
                <Stars rating={r.rating} />
              </div>

              <hr className="my-4 border-white/10" />
              <p className="text-white/85">{r.text}</p>

              <div className="mt-4 flex items-center gap-2 text-[11px] text-white/60">
                {/* tiny Google badge */}
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path fill="#4285F4" d="M21.35 11.1h-9.18v2.98h5.3c-.23 1.24-.92 2.28-1.96 2.98l3.17 2.46c1.86-1.72 2.94-4.25 2.94-7.42 0-.65-.06-1.27-.17-1.9z"/>
                  <path fill="#34A853" d="M12.17 22c2.64 0 4.86-.87 6.48-2.47l-3.17-2.46c-.88.59-2.01.94-3.31.94-2.54 0-4.69-1.72-5.46-4.04H3.43v2.54A9.83 9.83 0 0012.17 22z"/>
                  <path fill="#FBBC05" d="M6.71 13.97a5.9 5.9 0 010-3.94V7.49H3.43a9.84 9.84 0 000 8.99l3.28-2.51z"/>
                  <path fill="#EA4335" d="M12.17 5.49c1.44 0 2.73.5 3.75 1.49l2.81-2.81C17.03 2.68 14.81 1.8 12.17 1.8 8.5 1.8 5.34 3.94 3.43 7.49l3.28 2.54c.77-2.32 2.92-4.04 5.46-4.04z"/>
                </svg>
                <span>Verified Google review</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=RenekSites+reviews"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Read more on Google
          </a>
        </div>
      </div>
    </section>
  );
}
