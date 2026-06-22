import { Instagram, Youtube, MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { BRAND, PHONE_DISPLAY, NAV_LINKS, waLink } from "./data";

const SOCIALS = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Youtube,   label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="text-white/65" style={{ background: "var(--always-dark)" }}>
      <div className="container-x pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-4 lg:col-span-5">
            <a href="#top" className="font-display text-3xl md:text-4xl text-white inline-block mb-5">
              {BRAND.nameDisplay[0]}{" "}
              <span className="italic text-gold">{BRAND.nameDisplay[1]}</span>
            </a>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs mb-7 italic">
              "{BRAND.tagline}" — {BRAND.niche} yang hadir untuk mewujudkan momen terbaik hidup Anda.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-10 h-10 grid place-items-center border border-white/12 hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div className="md:col-span-2">
            <div className="eyebrow text-gold mb-6">Menu</div>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="eyebrow text-gold mb-6">Layanan</div>
            <ul className="space-y-3 text-sm">
              <li>Wedding Organizer</li>
              <li>Dekorasi & Konsep</li>
              <li>Paket Pernikahan</li>
              <li>Koordinasi Vendor</li>
              <li>Dokumentasi</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="eyebrow text-gold mb-6">Kontak</div>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                <a href={`tel:${PHONE_DISPLAY.replace(/-/g,"")}`} className="hover:text-gold transition-colors">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                <span>08:00 – 20:00 WIB, Setiap Hari</span>
              </li>
            </ul>
            <a
              href={waLink(`Halo ${BRAND.nameShort}, saya ingin informasi lebih lanjut.`)}
              target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-gold text-white px-5 py-3 text-[0.62rem] tracking-[0.2em] uppercase hover:opacity-85 transition-opacity"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Chat WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="font-display italic text-gold/60 text-sm">{BRAND.niche}</div>
        </div>
      </div>
    </footer>
  );
}
