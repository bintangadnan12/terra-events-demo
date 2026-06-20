import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { BRAND, waLink } from "./data";

const VIDEO_SRC = "https://videos.pexels.com/video-files/4066419/4066419-hd_1920_1080_25fps.mp4";
const VIDEO_FALLBACK = "https://videos.pexels.com/video-files/3048526/3048526-hd_1920_1080_25fps.mp4";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef  = useRef<HTMLSpanElement>(null);
  const descRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const badgeRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(badgeRef.current,    { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6 }, 0.2)
      .fromTo(eyebrowRef.current,  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.4)
      .fromTo(headlineRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.0 }, 0.6)
      .fromTo(descRef.current,     { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.85)
      .fromTo(ctaRef.current,      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 1.05);
  }, []);

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden flex items-center justify-center text-center"
    >
      {/* Looping video */}
      <video
        className="video-hero"
        autoPlay
        muted
        loop
        playsInline
        poster={BRAND.heroImg}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
        <source src={VIDEO_FALLBACK} type="video/mp4" />
      </video>

      {/* Warm earthy overlay */}
      <div className="video-overlay-terra" />

      {/* Content — centered for warmth and approachability */}
      <div className="relative z-10 container-x flex flex-col items-center">
        {/* Small badge */}
        <div
          ref={badgeRef}
          className="mb-6 px-4 py-1.5 border text-white/80"
          style={{ borderColor: "rgba(92,138,110,0.6)", fontSize: "0.6rem", letterSpacing: "0.2em", opacity: 0 }}
        >
          WEDDING & EVENT ORGANIZER
        </div>

        <span
          ref={eyebrowRef}
          className="eyebrow"
          style={{ color: "#a8c9b2", opacity: 0 }}
        >
          {BRAND.tagline}
        </span>

        <h1
          ref={headlineRef}
          className="font-display text-white mt-5 text-[44px] leading-[1.04] md:text-[68px] lg:text-[80px] max-w-3xl tracking-tight"
          style={{ opacity: 0 }}
        >
          Alami, Hangat,
          <br />
          <em style={{ color: "#a8c9b2", fontStyle: "italic" }}>Tak Terlupakan</em>
        </h1>

        <p
          ref={descRef}
          className="mt-7 max-w-lg text-white/78 text-base md:text-lg leading-relaxed"
          style={{ opacity: 0 }}
        >
          {BRAND.heroDesc}
        </p>

        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          style={{ opacity: 0 }}
        >
          <a
            href={waLink(`Halo Terra Events, saya ingin konsultasi untuk pernikahan saya.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Konsultasi Gratis →
          </a>
          <a href="#galeri" className="btn-outline text-white border-white/60 hover:text-white">
            Lihat Karya Kami
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 z-10"
        aria-label="Scroll ke bawah"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
