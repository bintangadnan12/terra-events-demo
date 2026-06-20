import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { BRAND, waLink } from "./data";

const VIDEOS = [
  "https://videos.pexels.com/video-files/4066419/4066419-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/3048526/3048526-hd_1920_1080_25fps.mp4",
];

export function Hero() {
  const badgeRef    = useRef<HTMLDivElement>(null);
  const eyebrowRef  = useRef<HTMLSpanElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const descRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(badgeRef.current,    { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.6 }, 0.3)
      .fromTo(eyebrowRef.current,  { opacity: 0, y: 20 },       { opacity: 1, y: 0, duration: 0.7 },     0.55)
      .fromTo(titleRef.current,    { opacity: 0, y: 50 },       { opacity: 1, y: 0, duration: 1.0 },     0.75)
      .fromTo(descRef.current,     { opacity: 0, y: 30 },       { opacity: 1, y: 0, duration: 0.8 },     1.0)
      .fromTo(ctaRef.current,      { opacity: 0, y: 24 },       { opacity: 1, y: 0, duration: 0.7 },     1.2)
      .fromTo(statsRef.current,    { opacity: 0 },              { opacity: 1, duration: 0.8 },            1.4);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[700px] w-full overflow-hidden flex flex-col items-center justify-center text-center">

      <video className="video-hero" autoPlay muted loop playsInline poster={BRAND.heroImg}>
        {VIDEOS.map((v) => <source key={v} src={v} type="video/mp4" />)}
      </video>

      {/* Warm earthy overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, rgba(35,30,22,0.65) 0%, rgba(35,30,22,0.35) 50%, rgba(35,30,22,0.60) 100%)"
      }} />

      <div className="relative z-10 container-x flex flex-col items-center px-6">
        {/* Organic badge */}
        <div ref={badgeRef} className="mb-6 px-5 py-2 border text-white/70 text-[0.55rem] tracking-[0.25em] uppercase" style={{ borderColor: "rgba(92,138,110,0.55)", opacity: 0 }}>
          Wedding &amp; Event Organizer ✦ Natural Concept
        </div>

        <span ref={eyebrowRef} className="eyebrow mb-6" style={{ color: "#a8c9b2", opacity: 0 }}>
          {BRAND.tagline}
        </span>

        <h1 ref={titleRef} className="font-display text-white text-[48px] leading-[1.02] md:text-[78px] lg:text-[96px] max-w-4xl" style={{ opacity: 0 }}>
          Alami, Hangat,
          <br />
          <em style={{ color: "#a8c9b2" }}>Tak Terlupakan</em>
        </h1>

        <span className="gold-line mt-8 mb-8 w-24 mx-auto" />

        <p ref={descRef} className="max-w-xl text-white/78 text-base md:text-lg leading-relaxed" style={{ opacity: 0 }}>
          {BRAND.heroDesc}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
          <a
            href={waLink(`Halo Terra Events, saya ingin konsultasi untuk pernikahan saya.`)}
            target="_blank" rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gold text-white px-9 py-4 text-[0.65rem] tracking-[0.25em] uppercase inline-flex items-center gap-3 transition-colors"
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

        <div ref={statsRef} className="mt-14 flex items-center gap-8 md:gap-12 text-white/60" style={{ opacity: 0 }}>
          {[["400+","Acara Sukses"],["6+","Tahun Pengalaman"],["4.9★","Rating Klien"]].map(([val, label]) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl md:text-3xl text-gold">{val}</span>
              <span className="text-[0.58rem] tracking-[0.2em] uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#trust" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 z-10 flex flex-col items-center gap-1.5">
        <span className="eyebrow text-white/35" style={{ fontSize: "0.5rem" }}>SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
