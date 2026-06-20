import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY, GALLERY_TABS } from "./data";
import { SectionHead } from "./SectionHead";

export function Gallery() {
  const [tab, setTab] = useState<(typeof GALLERY_TABS)[number]>("Semua");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = tab === "Semua" ? GALLERY : GALLERY.filter((g) => g.cat === tab);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImg = useCallback(() =>
    setLightbox((p) => (p === null ? 0 : (p - 1 + filtered.length) % filtered.length)), [filtered.length]);
  const nextImg = useCallback(() =>
    setLightbox((p) => (p === null ? 0 : (p + 1) % filtered.length)), [filtered.length]);

  useEffect(() => {
    if (lightbox === null) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "ArrowRight") nextImg();
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, prevImg, nextImg]);

  return (
    <section id="galeri" className="bg-blush py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          eyebrow="Portofolio"
          title="Karya Kami"
          subtitle="Setiap momen kami abadikan dengan rasa, bukan sekadar gambar."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {GALLERY_TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase border transition-all ${
                tab === t
                  ? "bg-gold text-white border-gold"
                  : "border-gold/30 text-ink/70 hover:border-gold hover:text-gold"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 columns-2 md:columns-3 gap-4 md:gap-6 [column-fill:_balance]"
          >
            {filtered.map((g, i) => (
              <button
                key={g.src + i}
                onClick={() => setLightbox(i)}
                className="group relative mb-4 md:mb-6 block w-full overflow-hidden bg-ink/5 break-inside-avoid"
              >
                <img
                  src={g.src}
                  alt={`Karya ${g.cat}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    g.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.2em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {g.cat}
                </span>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/95 z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest">
              {lightbox! + 1} / {filtered.length}
            </div>
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              aria-label="Tutup"
            >
              <X className="w-7 h-7" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-4 md:left-10 text-white/80 hover:text-gold p-3"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              src={filtered[lightbox!].src.replace("w=800", "w=1600")}
              alt={`Karya ${filtered[lightbox!].cat}`}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-4 md:right-10 text-white/80 hover:text-gold p-3"
              aria-label="Selanjutnya"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
