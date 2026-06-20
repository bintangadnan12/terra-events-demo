import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/components/site/data";
import { lazy, Suspense } from "react";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

// Above-fold: loaded immediately
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Floating } from "@/components/site/Floating";

// Below-fold: lazy-loaded to split the 785 kB bundle
const About = lazy(() => import("@/components/site/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("@/components/site/Services").then((m) => ({ default: m.Services })));
const Gallery = lazy(() => import("@/components/site/Gallery").then((m) => ({ default: m.Gallery })));
const Packages = lazy(() => import("@/components/site/Packages").then((m) => ({ default: m.Packages })));
const Process = lazy(() => import("@/components/site/Process").then((m) => ({ default: m.Process })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then((m) => ({ default: m.Testimonials })));
const Calculator = lazy(() => import("@/components/site/Calculator").then((m) => ({ default: m.Calculator })));
const Blog = lazy(() => import("@/components/site/Blog").then((m) => ({ default: m.Blog })));
const FinalCTA = lazy(() => import("@/components/site/FinalCTA").then((m) => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("@/components/site/Footer").then((m) => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: BRAND.metaTitle },
      { name: "description", content: BRAND.metaDesc },
      { property: "og:title", content: BRAND.metaTitle },
      { property: "og:description", content: BRAND.metaDesc },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollAnimations();
  return (
    <main className="bg-bg text-ink overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustBar />
      <Suspense fallback={null}>
        <About />
        <Services />
        <Gallery />
        <Packages />
        <Process />
        <Testimonials />
        <Calculator />
        <Blog />
        <FinalCTA />
        <Footer />
      </Suspense>
      <Floating />
    </main>
  );
}
