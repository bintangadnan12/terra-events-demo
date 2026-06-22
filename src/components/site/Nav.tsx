import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { BRAND, NAV_LINKS, waLink } from "./data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const stored = localStorage.getItem("terra_theme");
    const isDark = stored !== "light";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 80) setHidden(y > lastY.current && y > 120);
      else setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("terra_theme", next ? "dark" : "light");
  };

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(92,138,110,0.2)] py-3"
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

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className={`p-2 transition-colors hover:text-gold ${scrolled ? "text-ink/60" : "text-white/70"}`}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href={waLink(`Halo ${BRAND.nameShort}, saya ingin konsultasi gratis.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all hover:bg-gold hover:text-white hover:border-gold ${
              scrolled ? "border-gold text-gold" : "border-white/80 text-white"
            }`}
          >
            Konsultasi Gratis
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className={`p-2 transition-colors ${scrolled ? "text-ink/60" : "text-white/70"}`}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen(true)}
            className={`p-2 ${scrolled ? "text-ink" : "text-white"}`}
            aria-label="Buka menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
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
    </motion.header>
  );
}
