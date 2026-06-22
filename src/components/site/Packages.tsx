import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { BRAND, WO_PACKAGES, DEKOR_PACKAGES, DOKUM_PACKAGES, formatIDR, waLink } from "./data";
import { SectionHead } from "./SectionHead";

const TABS = [
  { key: "wo", label: "Wedding Organizer", data: WO_PACKAGES },
  { key: "dekor", label: "Dekorasi", data: DEKOR_PACKAGES },
  { key: "dokum", label: "Dokumentasi", data: DOKUM_PACKAGES },
] as const;

export function Packages() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("wo");
  const active = TABS.find((t) => t.key === tab)!;

  return (
    <section id="paket" className="bg-bg py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          eyebrow="Investasi"
          title="Paket & Harga"
          subtitle="Harga transparan, tanpa biaya tersembunyi."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-0 md:border-b md:border-gold/20">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`relative px-6 md:px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors ${
                tab === t.key ? "text-gold" : "text-ink/50 hover:text-ink"
              }`}
            >
              {t.label}
              {tab === t.key && (
                <motion.span
                  layoutId="paket-underline"
                  className="absolute left-0 right-0 -bottom-px h-0.5 bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-12 -mx-5 md:mx-0"
          >
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0">
              {active.data.map((p) => (
                <div
                  key={p.name}
                  className={`relative shrink-0 w-[85%] md:w-auto snap-center bg-card border p-8 flex flex-col ${
                    p.popular
                      ? "border-gold shadow-[0_30px_80px_-40px_rgba(201,169,110,0.55)] md:scale-[1.02]"
                      : "border-gold/25"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] tracking-[0.25em] uppercase px-4 py-1.5">
                      Terpopuler
                    </span>
                  )}
                  <div className="text-xs tracking-[0.2em] uppercase text-sage">{p.tag}</div>
                  <h3 className="font-display text-3xl text-ink mt-2">{p.name}</h3>
                  <div className="mt-5 pb-5 border-b border-gold/15">
                    <div className="font-display text-4xl text-gold">{formatIDR(p.price)}</div>
                    <div className="text-xs text-ink/50 mt-1">mulai dari</div>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-ink/75 leading-relaxed">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Halo ${BRAND.nameShort}, saya tertarik dengan ${p.name} (${active.label}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-[0.25em] uppercase transition-colors ${
                      p.popular
                        ? "bg-gold text-white hover:bg-ink"
                        : "border border-gold text-gold hover:bg-gold hover:text-white"
                    }`}
                  >
                    Pilih Paket
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-10 text-center text-sm text-ink/55 italic">
          Semua harga sudah termasuk konsultasi gratis. Hubungi kami untuk penyesuaian paket.
        </p>
      </div>
    </section>
  );
}
