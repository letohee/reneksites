import { motion } from "framer-motion";
import { BarChart3, MousePointer, Users, TrendingUp } from "lucide-react";

const KPI = ({ icon: Icon, label, value, delta }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-emerald-500/15 p-2 text-emerald-300">
        <Icon size={18} />
      </div>
      <p className="text-sm text-white/70">{label}</p>
    </div>
    <div className="mt-3 flex items-end justify-between">
      <p className="text-2xl font-semibold">{value}</p>
      <span className={`text-xs ${delta.startsWith("+") ? "text-emerald-300" : "text-red-300"}`}>
        {delta} vs last week
      </span>
    </div>
  </div>
);

const bars = [38, 62, 55, 70, 64, 82, 91]; // demo sparkline values

export default function AnalyticsShowcase() {
  return (
    <section id="analytics" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-300/80">Measurement</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Know what’s working, improve what isn’t.
          </h2>
          <p className="mt-3 text-white/75">
            Privacy-friendly analytics: page views, top sources, and the actions that matter—calls,
            quote requests, and form submissions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          <KPI icon={Users} label="Visitors (7d)" value="1,284" delta="+18%" />
          <KPI icon={BarChart3} label="Page views (7d)" value="3,912" delta="+22%" />
          <KPI icon={MousePointer} label="CTA clicks" value="184" delta="+12%" />
          <KPI icon={TrendingUp} label="Conversion rate" value="3.9%" delta="+0.6%" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-white/75">Traffic trend (last 7 days)</p>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">
              Demo preview
            </span>
          </div>

          {/* Tiny bar chart, no extra libs */}
          <div className="flex items-end gap-2">
            {bars.map((h, i) => (
              <div
                key={i}
                className="w-full max-w-[36px] rounded-t-md bg-emerald-500/50"
                style={{ height: `${h}px` }}
                title={`${h}`}
              />
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="mb-2 text-sm text-white/70">Top sources</p>
              <ul className="space-y-1 text-sm text-white/80">
                <li>Google — 48%</li>
                <li>Direct — 30%</li>
                <li>LinkedIn — 12%</li>
                <li>Instagram — 6%</li>
                <li>Referrals — 3%</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="mb-2 text-sm text-white/70">Top actions</p>
              <ul className="space-y-1 text-sm text-white/80">
                <li>Get a quote (Hero) — 76 clicks</li>
                <li>Call button (Mobile) — 54 taps</li>
                <li>Contact form submitted — 32</li>
                <li>See work — 22 clicks</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
