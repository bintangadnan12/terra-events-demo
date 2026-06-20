import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "./data";
import { SectionHead } from "./SectionHead";

export function Blog() {
  return (
    <section id="blog" className="bg-bg py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          eyebrow="Jurnal"
          title="Artikel Pernikahan"
          subtitle="Inspirasi, panduan, dan cerita seputar pernikahan syar'i."
        />

        <div className="mt-16 -mx-5 md:mx-0">
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0">
            {BLOG_POSTS.map((p, i) => (
              <motion.a
                key={p.title}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group shrink-0 w-[85%] md:w-auto snap-center"
              >
                <div className="aspect-[4/3] overflow-hidden bg-blush mb-5">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="eyebrow text-sage mb-3">{p.cat}</div>
                <h3 className="font-display text-2xl text-ink leading-snug group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <div className="mt-4 flex items-center justify-between text-xs text-ink/50">
                  <span>{p.date}</span>
                  <span className="inline-flex items-center gap-1 text-gold">
                    Baca <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-gold text-gold px-7 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-white transition-colors"
          >
            Baca Semua Artikel →
          </a>
        </div>
      </div>
    </section>
  );
}
