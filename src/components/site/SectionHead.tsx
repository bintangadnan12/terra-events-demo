import { motion } from "framer-motion";

export function SectionHead({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`eyebrow mb-5 ${light ? "text-gold" : "text-sage"}`}>{eyebrow}</div>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-ink/60"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-8 mx-auto h-px w-16 ${light ? "bg-gold" : "bg-gold"}`} />
    </motion.div>
  );
}
