import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "./data";
import { SectionHead } from "./SectionHead";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section className="bg-bg py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        <SectionHead eyebrow="Cerita Mereka" title="Kata Mereka" />

        <div className="mt-16 relative max-w-3xl mx-auto">
          <div className="font-display text-[160px] md:text-[220px] leading-none text-gold/15 absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none select-none">
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative text-center pt-12"
            >
              <p className="font-display italic text-2xl md:text-3xl leading-snug text-ink/85">
                {t.quote}
              </p>
              <div className="mt-10 flex flex-col items-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold/40"
                />
                <div className="mt-4 font-display text-xl text-gold">{t.name}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-ink/45 mt-1">{t.date}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              onClick={() => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="text-gold hover:text-ink transition-colors"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, j) => (
                <button
                  key={j}
                  onClick={() => setI(j)}
                  aria-label={`Testimoni ${j + 1}`}
                  className={`h-1.5 transition-all ${j === i ? "w-8 bg-gold" : "w-1.5 bg-gold/30"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((p) => (p + 1) % TESTIMONIALS.length)}
              className="text-gold hover:text-ink transition-colors"
              aria-label="Selanjutnya"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
