import {
  Sparkles, Star, Gift, ClipboardList, Heart,
  MessageCircle, Flower2, Camera, Crown, HeartHandshake
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { SERVICES } from "./data";
import { SectionHead } from "./SectionHead";

const ICONS: Record<string, React.FC<LucideProps>> = {
  Sparkles, Star, Gift, ClipboardList, Heart,
  MessageCircle, Flower2, Camera, Crown, HeartHandshake,
};

export function Services() {
  return (
    <section id="layanan" className="bg-bg py-28 md:py-36">
      <div className="container-x">
        <div data-animate="fade-up">
          <SectionHead
            eyebrow="Yang Kami Tawarkan"
            title="Layanan Kami"
            subtitle="Semua yang Anda butuhkan untuk pernikahan sempurna dalam satu genggaman."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10" data-animate="stagger">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] ?? Sparkles;
            return (
              <div
                key={s.title}
                className="group relative bg-card p-10 md:p-12 transition-all duration-500 hover:bg-gold hover:text-white"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold mb-7 group-hover:border-white group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl md:text-[1.75rem] text-ink group-hover:text-white mb-3 transition-colors">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60 group-hover:text-white/80 transition-colors">{s.desc}</p>
                <div className="mt-8 text-[0.6rem] tracking-[0.22em] uppercase text-gold group-hover:text-white/80 transition-colors flex items-center gap-2">
                  Pelajari Lebih Lanjut →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
