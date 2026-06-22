import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "./data";

export function LoadingScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const shown = sessionStorage.getItem("terra_loaded");
    if (shown) return false;
    sessionStorage.setItem("terra_loaded", "1");
    return true;
  });

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#231E16" }}
        >
          <div className="relative flex items-center justify-center">
            {/* Organic outer ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="w-28 h-28 rounded-full border"
              style={{ borderColor: "rgba(92,138,110,0.45)" }}
            />
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-20 h-20 rounded-full border"
              style={{ borderColor: "rgba(92,138,110,0.2)" }}
            />
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute font-display text-5xl"
              style={{ color: "#5C8A6E" }}
            >
              T
            </motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 eyebrow tracking-[0.5em] text-[0.48rem]"
            style={{ color: "rgba(92,138,110,0.5)" }}
          >
            {BRAND.nameShort}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
