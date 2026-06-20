import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const STATS = [
  { value: 500, suffix: "+", label: "Pasangan Bahagia" },
  { value: 7,   suffix: "+", label: "Tahun Pengalaman" },
  { value: 15,  suffix: "+", label: "Kota Terlayani" },
  { value: 4.9, suffix: "",  prefix: "★ ", decimals: 1, label: "Rating Kepuasan" },
];

function useCountUp(end: number, decimals = 0, duration = 1800, active = false) {
  const [val, setVal] = useState(0);
  const raf = useRef<number>(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(parseFloat((eased * end).toFixed(decimals)));
      if (p < 1) raf.current = requestAnimationFrame(tick); else setVal(end);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [active, end, decimals, duration]);
  return val;
}

function StatItem({ s, inView, i }: { s: typeof STATS[0]; inView: boolean; i: number }) {
  const val = useCountUp(s.value, s.decimals ?? 0, 1800, inView);
  const display = (s.prefix ?? "") + val.toFixed(s.decimals ?? 0) + s.suffix;
  const notFirst = i > 0;
  return (
    <div className={`flex flex-col items-center text-center py-10 px-6 ${notFirst ? "border-l border-gold/20" : ""}`}>
      <div className="font-display text-5xl md:text-6xl text-gold">{display}</div>
      <div className="mt-3 eyebrow text-ink/50">{s.label}</div>
    </div>
  );
}

export function TrustBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section id="trust" ref={ref} className="bg-card py-4 border-y border-gold/15" data-animate="fade-up">
      <div className="container-x grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => <StatItem key={s.label} s={s} inView={inView} i={i} />)}
      </div>
    </section>
  );
}
