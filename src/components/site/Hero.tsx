import { useEffect, useRef, useState } from "react";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import { BRAND, waLink } from "./data";

export function Hero() {
  const badgeRef   = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const lineRef    = useRef<HTMLSpanElement>(null);
  const descRef    = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(badgeRef.current,   { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.6 }, 0.3)
      .fromTo(eyebrowRef.current, { opacity: 0, y: 20 },       { opacity: 1, y: 0, duration: 0.7 },     0.55)
      .fromTo(titleRef.current,   { opacity: 0, y: 50 },       { opacity: 1, y: 0, duration: 1.0 },     0.75)
      .fromTo(lineRef.current,    { scaleX: 0, transformOrigin: "center" }, { scaleX: 1, duration: 0.8 }, 1.05)
      .fromTo(descRef.current,    { opacity: 0, y: 30 },       { opacity: 1, y: 0, duration: 0.8 },     1.15)
      .fromTo(ctaRef.current,     { opacity: 0, y: 24 },       { opacity: 1, y: 0, duration: 0.7 },     1.35)
      .fromTo(statsRef.current,   { opacity: 0 },              { opacity: 1, duration: 0.8 },            1.55);
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    if (!next) videoRef.current.play();
    setMuted(next);
  };

  return (
    <section id="top" className="relative h-[100svh] min-h-[700px] w-full overflow-hidden flex flex-col items-center justify-center text-center">

      {/* Dark base shown while video loads */}
      <div className="absolute inset-0" style={{ background: "#231E16" }} />

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay muted loop playsInline
      >
        <source src="/video/wedding.mp4" type="video/mp4" />
      </video>

      {/* Warm earthy overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(150deg, rgba(35,30,22,0.65) 0%, rgba(35,30,22,0.32) 50%, rgba(35,30,22,0.62) 100%)"
      }} />

      <div className="relative z-10 container-x flex flex-col items-center">
        <div
          ref={badgeRef}
          className="mb-6 px-5 py-2 border text-[0.56rem] tracking-[0.22em] uppercase text-white/70"
          style={{ borderColor: "rgba(92,138,110,0.55)", opacity: 0 }}
        >
          Wedding &amp; Event Organizer ✦ Natural Concept
        </div>

        <span ref={eyebrowRef} className="eyebrow mb-5" style={{ color: "#a8c9b2", opacity: 0 }}>
          {BRAND.tagline}
        </span>

        <h1 ref={titleRef} className="font-display text-white text-[48px] leading-[1.02] md:text-[78px] lg:text-[94px] max-w-4xl" style={{ opacity: 0 }}>
          Alami, Hangat,
          <br />
          <em style={{ color: "#a8c9b2" }}>Tak Terlupakan</em>
        </h1>

        <span
          ref={lineRef}
          className="block my-8 mx-auto h-[1px] w-24"
          style={{ background: "linear-gradient(to right, transparent, #5C8A6E, transparent)", transform: "scaleX(0)" }}
        />

        <p ref={descRef} className="max-w-xl text-white/80 text-base md:text-lg leading-relaxed" style={{ opacity: 0 }}>
          {BRAND.heroDesc}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
          <a
            href={waLink(`Halo Terra Events, saya ingin konsultasi untuk pernikahan saya.`)}
            target="_blank" rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gold text-white px-9 py-4 text-[0.65rem] tracking-[0.25em] uppercase inline-flex items-center gap-3"
          >
            <span className="absolute inset-0 bg-ink translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative">Konsultasi Gratis</span>
            <span className="relative">→</span>
          </a>
          <a href="#galeri"
            className="group relative overflow-hidden border border-white/60 text-white px-9 py-4 text-[0.65rem] tracking-[0.25em] uppercase inline-flex items-center gap-3"
          >
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative group-hover:text-ink transition-colors">Lihat Karya Kami</span>
          </a>
        </div>

        <div ref={statsRef} className="mt-14 flex items-center gap-8 md:gap-14 text-white/55" style={{ opacity: 0 }}>
          {[["400+","Acara Sukses"],["6+","Tahun Pengalaman"],["4.9★","Rating Klien"]].map(([val, label]) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <span className="font-display text-[1.75rem] md:text-[2rem] leading-none" style={{ color: "#a8c9b2" }}>{val}</span>
              <span className="eyebrow text-white/38" style={{ fontSize: "0.55rem" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mute / unmute toggle */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Aktifkan suara" : "Matikan suara"}
        className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3 py-2 text-white/70 hover:text-white transition-colors"
        style={{
          background: "rgba(35,30,22,0.50)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(92,138,110,0.30)"
        }}
      >
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        <span className="text-[0.55rem] tracking-[0.18em] uppercase">{muted ? "Suara Off" : "Suara On"}</span>
      </button>

      <a href="#trust" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/45 z-10 flex flex-col items-center gap-1.5">
        <span className="eyebrow text-white/30" style={{ fontSize: "0.5rem" }}>SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
