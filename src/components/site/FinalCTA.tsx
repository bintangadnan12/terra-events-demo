import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { BRAND, waLink, PHONE_DISPLAY } from "./data";

const BG = "https://images.unsplash.com/photo-1519741497674-611481863552?w=2000&q=85";

export function FinalCTA() {
  const [name, setName]   = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate]   = useState("");
  const [minDate, setMin] = useState("");

  useEffect(() => { setMin(new Date().toISOString().split("T")[0]); }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo ${BRAND.nameShort}, saya ${name || "[nama]"}. No. WA: ${phone || "[nomor]"}. Rencana tanggal: ${date || "[tanggal]"}. Mohon informasi konsultasi gratis.`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <section id="kontak" className="relative py-28 md:py-36 overflow-hidden" data-animate="fade-up">
      <div className="absolute inset-0">
        <img src={BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--always-dark-overlay)" }} />
      </div>

      <div className="relative container-x text-center text-white max-w-3xl mx-auto">
        <div className="eyebrow text-gold mb-6">Langkah Pertama</div>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.04]">
          Siap Wujudkan
          <br />
          <span className="italic text-gold">Pernikahan Impian</span> Anda?
        </h2>
        <p className="mt-6 text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Konsultasi pertama gratis. Tidak ada kewajiban. Hanya percakapan hangat tentang hari spesial Anda.
        </p>

        <form onSubmit={submit} className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-3 max-w-3xl mx-auto">
          {[
            { val: name,  set: setName,  type: "text", ph: "Nama Lengkap" },
            { val: phone, set: setPhone, type: "tel",  ph: "Nomor WhatsApp" },
          ].map(({ val, set, type, ph }) => (
            <input key={ph} value={val} onChange={(e) => set(e.target.value)}
              type={type} placeholder={ph} required
              className="bg-white/8 border border-white/20 px-4 py-4 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-gold backdrop-blur-sm transition-colors"
            />
          ))}
          <input value={date} onChange={(e) => setDate(e.target.value)}
            type="date" required min={minDate}
            className="bg-white/8 border border-white/20 px-4 py-4 text-sm text-white focus:outline-none focus:border-gold backdrop-blur-sm [color-scheme:dark] transition-colors"
          />
          <button type="submit"
            className="bg-gold text-ink px-7 py-4 text-[0.65rem] tracking-[0.25em] uppercase font-semibold hover:bg-white transition-colors duration-300"
          >
            Kirim →
          </button>
        </form>

        <div className="mt-9 inline-flex items-center gap-3 text-sm text-white/60">
          <span>Atau hubungi langsung:</span>
          <a href={`tel:${PHONE_DISPLAY.replace(/-/g,"")}`} className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors">
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
