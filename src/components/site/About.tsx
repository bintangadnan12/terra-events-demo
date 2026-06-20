import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { BRAND } from "./data";

const VALUES = [
  "Amanah dalam setiap janji & detail",
  "Estetika sesuai tuntunan syariat",
  "Tim profesional & berpengalaman",
  "Transparan tanpa biaya tersembunyi",
];

export function About() {
  return (
    <section id="tentang" className="bg-white py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=85"
              alt="Pernikahan syar'i"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-6 -right-6 w-2/3 aspect-[4/3] overflow-hidden border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=85"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -left-4 top-8 bg-gold text-white px-6 py-4">
            <div className="font-display text-3xl leading-none">8+</div>
            <div className="text-[10px] tracking-[0.2em] uppercase mt-1">Tahun</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="eyebrow text-sage mb-5">Tentang Kami</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink">
            Mewujudkan momen <span className="italic text-gold">sakral</span> dengan rasa & tanggung jawab.
          </h2>
          <p className="mt-6 text-ink/65 leading-relaxed">
            {BRAND.aboutDesc}
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {VALUES.map((v) => (
              <li key={v} className="flex items-start gap-3 text-sm text-ink/80">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
