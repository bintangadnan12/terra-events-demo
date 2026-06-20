import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, HeartHandshake, Image } from "lucide-react";
import type { LucideProps } from "lucide-react";
import { PROCESS_STEPS } from "./data";
import { SectionHead } from "./SectionHead";

const PROCESS_ICONS: Record<string, React.FC<LucideProps>> = {
  MessageCircle, ClipboardList, HeartHandshake, Image,
};

export function Process() {
  return (
    <section className="bg-ink py-24 md:py-32 text-white">
      <div className="container-x">
        <SectionHead
          eyebrow="Alur Kerja"
          title="Bagaimana Kami Bekerja"
          subtitle="Empat langkah sederhana menuju pernikahan impian Anda."
          light
        />

        <div className="mt-20 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold/0 via-gold/60 to-gold/0"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {PROCESS_STEPS.map((s, i) => {
              const Icon = PROCESS_ICONS[s.icon] ?? MessageCircle;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="relative w-20 h-20 flex items-center justify-center bg-ink border border-gold/40 rounded-full">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <div className="font-display text-5xl text-gold/30 mt-6">{s.n}</div>
                  <h3 className="font-display text-2xl text-white mt-2">{s.title}</h3>
                  <p className="text-sm text-white/55 mt-3 max-w-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
