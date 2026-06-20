import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up — semua elemen dengan data-animate="fade-up"
      gsap.utils.toArray<HTMLElement>("[data-animate='fade-up']").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          }
        );
      });

      // Stagger children — elemen dengan data-animate="stagger"
      gsap.utils.toArray<HTMLElement>("[data-animate='stagger']").forEach((parent) => {
        const children = parent.querySelectorAll(":scope > *");
        gsap.fromTo(children,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
            scrollTrigger: { trigger: parent, start: "top 85%", toggleActions: "play none none none" }
          }
        );
      });

      // Slide in left
      gsap.utils.toArray<HTMLElement>("[data-animate='slide-left']").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -80 },
          {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
          }
        );
      });

      // Slide in right
      gsap.utils.toArray<HTMLElement>("[data-animate='slide-right']").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: 80 },
          {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
          }
        );
      });

      // Scale in
      gsap.utils.toArray<HTMLElement>("[data-animate='scale-in']").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.88 },
          {
            opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.4)",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          }
        );
      });

      // Counter animation
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseInt(el.getAttribute("data-count") || "0");
        scrollTrigger: ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.fromTo({ val: 0 },
              { val: target, duration: 2, ease: "power2.out",
                onUpdate: function() { el.textContent = Math.round(this.targets()[0].val) + "+"; }
              }
            );
          }
        });
      });

      // Line reveal (dividers)
      gsap.utils.toArray<HTMLElement>("[data-animate='line']").forEach((el) => {
        gsap.fromTo(el,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1, duration: 1.2, ease: "power3.inOut",
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
}
