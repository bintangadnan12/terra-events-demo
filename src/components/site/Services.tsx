import { motion } from "framer-motion";
import { Sparkles, Flower2, Camera, Crown, Utensils, Gift } from "lucide-react";
import type { LucideProps } from "lucide-react";
import { SERVICES } from "./data";
import { SectionHead } from "./SectionHead";

const SERVICE_ICONS: Record<string, React.FC<LucideProps>> = {
  Sparkles, Flower2, Camera, Crown, Utensils, Gift,
};

export function Services() {
  return (
    <section id="layanan" className="bg-bg py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          eyebrow="Yang Kami Tawarkan"
          title="Layanan Kami"
          subtitle="Semua yang Anda butuhkan untuk pernikahan sempurna dalam satu genggaman."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[s.icon] ?? Sparkles;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-white border border-gold/25 p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(201,169,110,0.5)]"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/40 text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-ink mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink/65">{s.desc}</p>
                <div className="mt-6 inline-flex items-center text-xs tracking-[0.2em] uppercase text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Pelajari →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
