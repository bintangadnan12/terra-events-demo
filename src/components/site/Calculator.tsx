import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BRAND, formatIDR, waLink } from "./data";
import { SectionHead } from "./SectionHead";

const WO_OPTIONS = [
  { key: "hemat", label: "Hemat", price: 6_750_000 },
  { key: "standar", label: "Standar", price: 8_750_000 },
  { key: "lengkap", label: "Lengkap", price: 11_500_000 },
  { key: "eksklusif", label: "Eksklusif", price: 16_500_000 },
];

const ADDONS = [
  { key: "dekor", label: "Dekorasi", base: 16_750_000 },
  { key: "dokum", label: "Dokumentasi", base: 5_500_000 },
  { key: "mua", label: "MUA & Busana", base: 4_500_000 },
  { key: "catering", label: "Catering (per tamu)", perGuest: 37_000 },
];

export function Calculator() {
  const [guests, setGuests] = useState(250);
  const [wo, setWo] = useState("standar");
  const [picked, setPicked] = useState<Record<string, boolean>>({
    dekor: true,
    dokum: true,
    mua: false,
    catering: true,
  });

  const total = useMemo(() => {
    let t = WO_OPTIONS.find((o) => o.key === wo)?.price || 0;
    for (const a of ADDONS) {
      if (!picked[a.key]) continue;
      if (a.perGuest) t += a.perGuest * guests;
      else t += a.base || 0;
    }
    return t;
  }, [guests, wo, picked]);

  const message = `Halo ${BRAND.nameShort}, saya tertarik dengan estimasi paket untuk ${guests} tamu dengan layanan ${
    WO_OPTIONS.find((o) => o.key === wo)?.label
  } + ${Object.keys(picked).filter((k) => picked[k]).map((k) => ADDONS.find((a) => a.key === k)?.label).join(", ")}. Total estimasi ${formatIDR(total)}. Boleh konsultasi lebih lanjut?`;

  return (
    <section className="bg-blush py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          eyebrow="Kalkulator"
          title="Estimasi Biaya Pernikahan Anda"
          subtitle="Isi form di bawah dan dapatkan estimasi biaya secara instan."
        />

        <div className="mt-16 max-w-4xl mx-auto bg-white border border-gold/25 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="eyebrow text-ink/70">Jumlah Tamu</label>
                  <span className="font-display text-2xl text-gold">{guests}</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={1000}
                  step={25}
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full accent-gold"
                />
                <div className="flex justify-between text-xs text-ink/45 mt-2">
                  <span>50</span>
                  <span>1000</span>
                </div>
              </div>

              <div>
                <label className="eyebrow text-ink/70 mb-3 block">Paket Wedding Organizer</label>
                <div className="grid grid-cols-2 gap-2">
                  {WO_OPTIONS.map((o) => (
                    <button
                      key={o.key}
                      onClick={() => setWo(o.key)}
                      className={`px-4 py-3 text-sm border transition-colors ${
                        wo === o.key
                          ? "border-gold bg-gold text-white"
                          : "border-gold/30 text-ink/70 hover:border-gold"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="eyebrow text-ink/70 mb-3 block">Layanan Tambahan</label>
                <div className="space-y-2">
                  {ADDONS.map((a) => (
                    <label
                      key={a.key}
                      className={`flex items-center justify-between p-3 border cursor-pointer transition-colors ${
                        picked[a.key] ? "border-gold bg-gold/5" : "border-gold/25"
                      }`}
                    >
                      <span className="flex items-center gap-3 text-sm text-ink">
                        <input
                          type="checkbox"
                          checked={!!picked[a.key]}
                          onChange={(e) => setPicked((p) => ({ ...p, [a.key]: e.target.checked }))}
                          className="accent-gold w-4 h-4"
                        />
                        {a.label}
                      </span>
                      <span className="text-xs text-ink/50">
                        {a.perGuest ? `${formatIDR(a.perGuest)}/tamu` : `dari ${formatIDR(a.base!)}`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-ink text-white p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="eyebrow text-gold mb-4">Estimasi Total</div>
                <motion.div
                  key={total}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-display text-4xl md:text-5xl text-white leading-tight"
                >
                  {formatIDR(total)}
                </motion.div>
                <p className="mt-4 text-sm text-white/55 leading-relaxed">
                  Estimasi ini bersifat indikatif. Tim kami akan memberi penawaran detail yang disesuaikan dengan kebutuhan dan konsep impian Anda.
                </p>
              </div>
              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center bg-gold text-ink hover:bg-white px-6 py-4 text-xs tracking-[0.25em] uppercase transition-colors"
              >
                Dapatkan Penawaran Detail →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
