import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS, waLink } from "./data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,169,110,0.15)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a
          href="#top"
          className={`font-display text-2xl md:text-[26px] tracking-tight transition-colors ${
            scrolled ? "text-gold" : "text-white"
          }`}
        >
          {BRAND.nameDisplay[0]} <span className="italic text-gold">{BRAND.nameDisplay[1]}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors hover:text-gold ${
                scrolled ? "text-ink/80" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={waLink(`Halo ${BRAND.nameShort}, saya ingin konsultasi gratis.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all hover:bg-gold hover:text-white ${
              scrolled ? "border-gold text-gold" : "border-white/80 text-white"
            }`}
          >
            Konsultasi Gratis
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`lg:hidden p-2 ${scrolled ? "text-ink" : "text-white"}`}
          aria-label="Buka menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-ink/40 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-bg z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gold/20">
                <span className="font-display text-xl text-gold">{BRAND.nameShort}</span>
                <button onClick={() => setOpen(false)} aria-label="Tutup menu">
                  <X className="w-6 h-6 text-ink" />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-4 font-display text-2xl text-ink border-b border-gold/10 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={waLink(`Halo ${BRAND.nameShort}, saya ingin konsultasi gratis.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center bg-gold text-white px-6 py-4 text-xs tracking-[0.2em] uppercase"
                >
                  Konsultasi Gratis
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
