import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let raf: number;
    let isHovering = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const loop = () => {
      const ease = isHovering ? 0.08 : 0.12;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => {
      isHovering = true;
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.marginLeft = "-8px";
      ring.style.marginTop = "-8px";
      ring.style.opacity = "0.6";
    };

    const onLeave = () => {
      isHovering = false;
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.marginLeft = "0";
      ring.style.marginTop = "0";
      ring.style.opacity = "1";
    };

    const addListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
