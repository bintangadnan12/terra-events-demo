import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { BRAND, waLink, PHONE_DISPLAY } from "./data";

const BG = "https://images.unsplash.com/photo-1519741497674-611481863552?w=2000&q=85";

export function FinalCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo ${BRAND.nameShort}, saya ${name || "[nama]"}. Nomor WA saya ${phone || "[nomor]"}. Rencana tanggal pernikahan: ${date || "[tanggal]"}. Mohon info konsultasi.`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <section id="kontak" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
      </div>

      <div className="relative container-x text-center text-white max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="eyebrow text-gold mb-5">Langkah Pertama</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Siap Wujudkan
            <br />
            <span className="italic text-[#f0d4c0]">Pernikahan Impian</span> Anda?
          </h2>
          <p className="mt-6 text-white/75 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Konsultasi pertama gratis. Tidak ada kewajiban. Hanya percakapan tentang hari spesial Anda.
          </p>

          <form
            onSubmit={submit}
            className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-3 max-w-3xl mx-auto"
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nama Lengkap"
              required
              className="bg-white/10 border border-white/25 px-4 py-3.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold backdrop-blur-sm"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Nomor WhatsApp"
              required
              className="bg-white/10 border border-white/25 px-4 py-3.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold backdrop-blur-sm"
            />
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              required
              min={minDate}
              className="bg-white/10 border border-white/25 px-4 py-3.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold backdrop-blur-sm [color-scheme:dark]"
            />
            <button
              type="submit"
              className="bg-gold text-ink px-6 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-white transition-colors"
            >
              Kirim →
            </button>
          </form>

          <div className="mt-8 inline-flex items-center gap-3 text-sm text-white/70">
            <span>Atau hubungi langsung:</span>
            <a
              href={`tel:${PHONE_DISPLAY.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
