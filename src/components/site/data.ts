// ============================================================
// BRAND CONFIG — Terra Events (Demo Template — Tema Natural)
// ============================================================
export const BRAND = {
  name: "Terra Events",
  nameShort: "Terra",
  nameDisplay: ["Terra", "Events"] as const,
  niche: "Wedding & Event Organizer",
  tagline: "Alami, Hangat, Tak Terlupakan",
  heroDesc: "Terra Events menghadirkan pernikahan yang hangat dan alami — memadukan keindahan alam, detail organik, dan keanggunan modern untuk momen yang benar-benar terasa seperti Anda.",
  aboutDesc: "Terra Events percaya bahwa pernikahan terbaik adalah yang mencerminkan jiwa pasangannya. Kami spesialis dalam konsep natural-organic dan rustic-chic, menghadirkan nuansa hangat dan autentik yang membuat setiap tamu merasa nyaman dan setiap momen terasa intim dan bermakna.",
  city: "Indonesia",
  address: "Melayani venue indoor & outdoor di seluruh Indonesia",
  year: "2020",
  heroImg: "/img/wedding1.jpg",
  metaTitle: "Terra Events — Wedding & Event Organizer Natural Indonesia",
  metaDesc: "Wedding organizer dengan konsep natural, rustic-chic, dan organic untuk pernikahan yang hangat dan tak terlupakan. Percayakan hari istimewa Anda kepada Terra Events.",
};
// ============================================================

export const WHATSAPP_NUMBER = "6289677374440";
export const PHONE_DISPLAY = "0896-7737-4440";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Paket", href: "#paket" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#kontak" },
];

export const SERVICES = [
  {
    title: "Wedding Organizer",
    desc: "Koordinasi pernikahan menyeluruh dengan sentuhan personal dan hangat — kami pastikan hari H berjalan lancar dan penuh makna.",
    icon: "Sparkles",
  },
  {
    title: "Konsep Natural & Rustic",
    desc: "Kami spesialis desain outdoor, rustic-chic, garden party, dan konsep alam yang hangat dan fotogenik.",
    icon: "Star",
  },
  {
    title: "Outdoor & Venue Sourcing",
    desc: "Kami bantu Anda menemukan venue outdoor terbaik — dari kebun, villa, tepi pantai, hingga lahan bersejarah.",
    icon: "Gift",
  },
  {
    title: "Perencanaan Holistik",
    desc: "Dari konsep hingga hari H, kami rencanakan setiap elemen dengan teliti — termasuk cuaca, backup plan, dan alternatif.",
    icon: "ClipboardList",
  },
  {
    title: "Koordinasi Vendor Lokal",
    desc: "Jaringan vendor lokal terpilih yang memahami konsep natural — florist, katering organik, fotografer outdoor.",
    icon: "Heart",
  },
  {
    title: "Konsultasi Gratis",
    desc: "Mulai dengan sesi konsultasi santai — ceritakan visi Anda, kami bantu wujudkan dengan cara yang paling autentik.",
    icon: "MessageCircle",
  },
];

export const GALLERY = [
  { src: "/img/wedding1.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding2.jpg", cat: "Dekorasi", h: "short" },
  { src: "/img/wedding3.jpg", cat: "Wedding", h: "short" },
  { src: "/img/wedding4.jpg", cat: "Dekorasi", h: "tall" },
  { src: "/img/wedding5.jpg", cat: "Event", h: "tall" },
  { src: "/img/wedding6.jpg", cat: "Wedding", h: "short" },
  { src: "/img/wedding7.jpg", cat: "Dokumentasi", h: "short" },
  { src: "/img/wedding8.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding9.jpg", cat: "Dekorasi", h: "short" },
];

export const GALLERY_TABS = ["Semua", "Wedding", "Dekorasi", "Event", "Dokumentasi"] as const;

type Pkg = { name: string; tag?: string; price: number; popular?: boolean; features: string[] };

export const WO_PACKAGES: Pkg[] = [
  {
    name: "Paket Seedling",
    tag: "80 – 150 tamu",
    price: 5_800_000,
    features: [
      "Koordinator & 3 tim hari H",
      "Briefing & technical meeting",
      "Rundown & cue card",
      "Pendamping pengantin",
      "Konsultasi gratis 2x",
    ],
  },
  {
    name: "Paket Grove",
    tag: "200 – 300 tamu",
    price: 9_500_000,
    popular: true,
    features: [
      "Koordinator senior & 5 tim hari H",
      "Full briefing & gladi resik",
      "Custom rundown & timeline",
      "Pendamping kedua pengantin",
      "Koordinasi vendor & venue",
      "Konsultasi tak terbatas",
    ],
  },
  {
    name: "Paket Forest",
    tag: "350 – 500 tamu",
    price: 14_000_000,
    features: [
      "Koordinator senior & 8 tim hari H",
      "Full briefing & 2x gladi resik",
      "Custom concept & mood board",
      "VIP assistant keluarga",
      "Full vendor coordination",
      "Evaluasi & laporan pasca acara",
    ],
  },
  {
    name: "Paket Terra Signature",
    tag: "500+ / Grand Outdoor",
    price: 20_000_000,
    features: [
      "Event director & 12+ tim",
      "Unlimited meeting & planning",
      "Full outdoor production concept",
      "Emergency & contingency plan",
      "Full vendor & venue management",
      "Supervisi penuh hari H",
    ],
  },
];

export const DEKOR_PACKAGES: Pkg[] = [
  { name: "Dekorasi Meadow", tag: "Garden Simpel", price: 10_500_000, features: ["Pelaminan natural", "Backdrop kayu & greenery", "Wildflower arrangement", "Photobooth rustic", "Tikar & ornamen alam"] },
  { name: "Dekorasi Terra Garden", tag: "Outdoor Elegan", price: 16_500_000, popular: true, features: ["Pelaminan garden premium", "Full greenery concept", "Fresh botanical arrangement", "Photobooth instagramable", "Table setting natural"] },
  { name: "Dekorasi Wild Forest", tag: "Full Natural", price: 24_000_000, features: ["Pelaminan forest luxury", "Full botanika fresh", "Aisle & entrance natural", "Photobooth editorial", "Full area organic styling"] },
  { name: "Dekorasi Grand Terra", tag: "Big Outdoor Event", price: 38_000_000, features: ["Venue outdoor mewah", "Full floral & botanical", "Custom structure & arch", "Lighting fairy organic", "Complete experience design"] },
];

export const DOKUM_PACKAGES: Pkg[] = [
  { name: "Paket Bronze", tag: "Akad only", price: 3_800_000, features: ["1 fotografer", "1 videografer", "200 foto edit", "Highlight video 1 menit", "Soft file lengkap"] },
  { name: "Paket Copper", tag: "Akad + Resepsi", price: 6_000_000, popular: true, features: ["2 fotografer", "1 videografer", "400 foto edit", "Highlight video 2 menit", "Album cetak premium"] },
  { name: "Paket Amber", tag: "Full Day", price: 8_500_000, features: ["3 fotografer", "2 videografer", "Cinematic video 3 menit", "Same day edit", "Album & USB box"] },
  { name: "Paket Terra Cinematic", tag: "Pre + Full Day", price: 11_000_000, features: ["Tim sinematik lengkap", "Pre-wedding session outdoor", "Cinematic video 5 menit", "Foto unlimited", "Album luxury box"] },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Konsultasi Santai", desc: "Ceritakan impian Anda di suasana santai. Kami dengarkan dengan penuh perhatian.", icon: "MessageCircle" },
  { n: "02", title: "Konsep & Planning", desc: "Kami rancang konsep natural yang unik untuk Anda, lengkap dengan detail dan vendor.", icon: "ClipboardList" },
  { n: "03", title: "Eksekusi Hangat", desc: "Hari H kami pimpin dengan penuh kehangatan. Anda nikmati setiap momen berharga.", icon: "HeartHandshake" },
  { n: "04", title: "Kenangan Indah", desc: "Dokumentasi autentik yang menangkap keindahan momen alami pernikahan Anda.", icon: "Image" },
];

export const TESTIMONIALS = [
  {
    quote: "Terra Events benar-benar mengerti kami. Garden wedding kami terasa begitu personal dan hangat — tidak ada satu pun elemen yang terasa 'pasaran'. Semua tamu bilang ini pernikahan paling berkesan yang mereka hadiri!",
    name: "Rania & Bima",
    date: "Mei 2026",
    avatar: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=200&q=80",
  },
  {
    quote: "Kami ingin pernikahan yang terasa seperti 'kita banget' — dan Terra Events mewujudkannya dengan sempurna. Outdoor rustic concept-nya indah sekali, dan tim-nya sangat supportive dari awal hingga akhir.",
    name: "Putri & Arif",
    date: "April 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote: "Terra Events mengubah venue outdoor biasa menjadi taman surga yang luar biasa. Dekorasi botanical-nya luar biasa detail dan cantik. Saya tidak bisa bayangkan menikah tanpa mereka!",
    name: "Dewi & Raka",
    date: "Maret 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export const BLOG_POSTS = [
  {
    title: "5 Ide Garden Wedding 2026 yang Instagramable dan Berkesan",
    cat: "Inspirasi",
    date: "12 Mei 2026",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    title: "Panduan Lengkap Pernikahan Outdoor: Tips Antisipasi Cuaca & Venue",
    cat: "Panduan",
    date: "3 April 2026",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
  {
    title: "Botanical Wedding: Tren Natural yang Makin Diminati Pasangan Muda",
    cat: "Tips",
    date: "18 Maret 2026",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80",
  },
];

export const formatIDR = (n: number) =>
  "Rp " + n.toLocaleString("id-ID");
