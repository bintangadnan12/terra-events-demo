import { CheckCircle2 } from "lucide-react";
import { BRAND } from "./data";

const VALUES = [
  "Tim profesional & berpengalaman",
  "Harga transparan tanpa biaya tersembunyi",
  "Tersedia 24/7 selama proses planning",
  "Jaringan vendor terpilih & terpercaya",
];

export function About() {
  return (
    <section id="tentang" className="bg-card py-28 md:py-36">
      <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Image block */}
        <div className="relative" data-animate="slide-left">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=85"
              alt="Wedding"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Floating badge */}
          <div className="hidden md:flex absolute -bottom-6 -right-6 w-[55%] aspect-[4/3] overflow-hidden border-8 border-card">
            <img
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=85"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -left-4 top-10 bg-gold text-white px-6 py-5 hidden md:block">
            <div className="font-display text-4xl leading-none">{BRAND.year.slice(-2)}+</div>
            <div className="eyebrow mt-1 text-white/80" style={{ fontSize: "0.58rem" }}>Sejak {BRAND.year}</div>
          </div>
        </div>

        {/* Text block */}
        <div data-animate="slide-right">
          <div className="eyebrow text-gold mb-5">Tentang Kami</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink">
            Mewujudkan hari paling
            <br />
            <span className="italic text-gold">berharga dalam hidup Anda.</span>
          </h2>
          <p className="mt-7 text-ink/65 leading-relaxed text-base md:text-lg">
            {BRAND.aboutDesc}
          </p>
          <ul className="mt-9 grid sm:grid-cols-2 gap-3">
            {VALUES.map((v) => (
              <li key={v} className="flex items-start gap-3 text-sm text-ink/80">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
          <a
            href="#kontak"
            className="mt-10 inline-flex items-center gap-3 bg-gold text-white px-8 py-4 text-[0.65rem] tracking-[0.22em] uppercase hover:bg-ink transition-colors duration-300"
          >
            Mulai Konsultasi →
          </a>
        </div>
      </div>
    </section>
  );
}
