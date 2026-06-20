import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { BRAND, waLink } from "./data";

export function Floating() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const half = document.documentElement.scrollHeight / 2;
      setShow(window.scrollY > half / 2);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={waLink(`Halo ${BRAND.nameShort}, saya ingin konsultasi gratis.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="fixed bottom-5 right-5 z-40 group flex items-center gap-2 bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] px-4 py-3 md:p-4 rounded-full hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden>
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89-1.99 0-3.95-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.393l-.999 3.648 3.893-.74z" />
        </svg>
        <span className="text-sm font-medium md:hidden">Konsultasi</span>
        <span className="hidden md:block absolute right-full mr-3 whitespace-nowrap bg-ink text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat via WhatsApp
        </span>
      </a>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-5 left-5 z-40 w-11 h-11 grid place-items-center bg-ink text-gold border border-gold/30 hover:bg-gold hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
