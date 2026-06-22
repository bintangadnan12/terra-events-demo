import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? Math.min(1, window.scrollY / total) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998] h-[2px] pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full origin-left"
        style={{ background: "var(--gold)", transform: "scaleX(0)" }}
      />
    </div>
  );
}
