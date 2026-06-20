import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const STATS = [
  { value: 8, suffix: "+", label: "Tahun Berpengalaman" },
  { value: 500, suffix: "+", label: "Pasangan Bahagia" },
  { value: 4, suffix: "", label: "Provinsi Terlayani" },
  { value: 4.9, suffix: "", prefix: "★ ", decimals: 1, label: "Rating Kepuasan" },
];

function useCountUp(end: number, decimals = 0, duration = 1800, active = false) {
  const [val, setVal] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
      else setVal(end);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [active, end, decimals, duration]);

  return val;
}

function StatItem({ s, inView, i }: { s: typeof STATS[0]; inView: boolean; i: number }) {
  const val = useCountUp(s.value, s.decimals ?? 0, 1800, inView);
  const display = (s.prefix ?? "") + val.toFixed(s.decimals ?? 0) + s.suffix;

  return (
    <div
      className={`flex flex-col items-center text-center px-4 py-4 ${
        i % 2 !== 0 ? "border-l border-gold/30" : ""
      } ${i >= 2 ? "border-t md:border-t-0 border-gold/30" : ""} ${
        i > 0 ? "md:border-l md:border-t-0" : ""
      }`}
    >
      <div className="font-display text-5xl md:text-6xl text-gold">{display}</div>
      <div className="mt-2 text-xs tracking-[0.2em] uppercase text-ink/55">{s.label}</div>
    </div>
  );
}

export function TrustBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="trust" ref={ref} className="bg-white py-14 md:py-16">
      <div className="container-x grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <StatItem key={s.label} s={s} inView={inView} i={i} />
        ))}
      </div>
    </section>
  );
}
