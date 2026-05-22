import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import SafeImage from "../ui/SafeImage";
import { images } from "../../data/images";

const GRID_ROTATE = -14;

function ImageCard({ src, caption, date, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-neutral-900 shadow-xl md:rounded-3xl ${className}`}>
      <SafeImage src={src} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      {caption && (
        <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4">
          <p className="font-editorial text-lg font-bold uppercase leading-none text-white md:text-2xl">{caption}</p>
          {date && <p className="mt-1 text-[10px] tracking-wide text-white/70 md:text-xs">{date}</p>}
        </div>
      )}
    </div>
  );
}

function TextCard({ children, variant = "dark", className = "" }) {
  const isDark = variant === "dark";
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-2xl p-4 shadow-xl md:rounded-3xl md:p-6 ${className}`}
      style={{ background: isDark ? "#111" : "#fff", color: isDark ? "#fff" : "#111" }}
    >
      <p className="font-editorial text-center text-xl font-bold uppercase leading-[0.95] tracking-tight md:text-3xl lg:text-4xl">
        {children}
      </p>
    </div>
  );
}

function HeroCenterCard({ image, scrollYProgress }) {
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <div className="relative h-full overflow-hidden rounded-2xl bg-[#c41e3a] shadow-2xl md:rounded-3xl">
      <div className="pointer-events-none absolute -right-8 top-1/2 z-0 h-[85%] w-[70%] -translate-y-1/2 opacity-20">
        <div className="h-full w-full rounded-full bg-white/30 blur-2xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col p-4 md:p-5">
        <div className="flex items-start justify-between">
          <span className="font-editorial text-[10px] font-bold tracking-[0.2em] text-white/90 md:text-xs">
            LUXE ATELIER
          </span>
          <div className="flex flex-col gap-1.5 opacity-80">
            <span className="block h-0.5 w-5 rounded-full bg-white md:w-6" />
            <span className="block h-0.5 w-5 rounded-full bg-white md:w-6" />
          </div>
        </div>

        <div className="relative flex flex-1 flex-col justify-end">
          <motion.div style={{ y: imgY }} className="absolute inset-x-0 bottom-16 top-8 md:bottom-20">
            <SafeImage
              src={image}
              alt="Luxe Atelier"
              className="mx-auto h-full max-h-full w-auto max-w-[95%] object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>

          <motion.div style={{ y: titleY }} className="relative z-20">
            <h1 className="font-editorial text-[2.5rem] font-black uppercase leading-[0.85] tracking-tighter text-white md:text-6xl lg:text-7xl">
              Luxe
              <br />
              Atelier
            </h1>
          </motion.div>

          <div className="relative z-30 mt-3 flex items-end gap-2">
            <a
              href="#services"
              className="flex flex-1 items-center justify-between gap-2 rounded-xl bg-black/85 px-3 py-2.5 backdrop-blur-sm transition hover:bg-black md:px-4 md:py-3"
            >
              <div>
                <p className="text-[9px] uppercase tracking-wider text-white/60 md:text-[10px]">Discover</p>
                <p className="font-editorial text-xs font-bold uppercase text-white md:text-sm">Our Services</p>
              </div>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black md:h-8 md:w-8">
                →
              </span>
            </a>
            <a
              href="#book"
              className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-black px-2.5 py-2 md:px-3"
            >
              <span className="text-[8px] font-bold text-[#c9a962] md:text-[9px]">Book</span>
              <span className="text-[7px] uppercase text-white/80 md:text-[8px]">now</span>
            </a>
          </div>

          <p className="mt-2 text-right text-[9px] text-white/70 md:text-[10px]">Luxury salon · Est. 2010</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Tilted masonry hero — inspired by editorial card-grid layouts (Skiper-style).
 */
export default function TiltedGalleryHero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const gridY2 = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const gridY3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const lenis = new Lenis();
    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <section ref={sectionRef} data-nav-theme="light" className="relative bg-[#e3e3e3]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ rotate: GRID_ROTATE, y: gridY }}
          className="relative grid w-[128vw] max-w-[1400px] grid-cols-12 grid-rows-6 gap-2 p-2 md:w-[115vw] md:gap-3 md:p-3"
        >
          <motion.div style={{ y: gridY3 }} className="col-span-3 row-span-2">
            <ImageCard src={images.gallery[0]} caption="Signature" date="Styling · Color" className="h-full min-h-[120px]" />
          </motion.div>

          <motion.div style={{ y: gridY2 }} className="col-span-2 col-start-4 row-span-2">
            <ImageCard src={images.preview.minimal} className="h-full min-h-[100px]" />
          </motion.div>

          <motion.div style={{ y: gridY3 }} className="col-span-3 col-start-10 row-span-2">
            <ImageCard src={images.gallery[1]} caption="Editorial" date="Beauty · Spa" className="h-full min-h-[120px]" />
          </motion.div>

          <motion.div style={{ y: gridY2 }} className="col-span-3 row-span-2 row-start-3">
            <TextCard variant="dark">Thinking of a luxury rebrand?</TextCard>
          </motion.div>

          <motion.div style={{ y: gridY }} className="col-span-6 col-start-4 row-span-4 row-start-2">
            <HeroCenterCard image={images.hero.fashion} scrollYProgress={scrollYProgress} />
          </motion.div>

          <motion.div style={{ y: gridY3 }} className="col-span-3 col-start-10 row-span-2 row-start-3">
            <ImageCard src={images.gallery[2]} className="h-full min-h-[120px]" />
          </motion.div>

          <motion.div style={{ y: gridY2 }} className="col-span-3 row-span-2 row-start-5">
            <ImageCard src={images.team[0]} caption="The Collective" date="Creative team" className="h-full min-h-[100px]" />
          </motion.div>

          <motion.div style={{ y: gridY3 }} className="col-span-3 col-start-4 row-span-2 row-start-5">
            <TextCard variant="light">More than a salon experience</TextCard>
          </motion.div>

          <motion.div style={{ y: gridY2 }} className="col-span-3 col-start-10 row-span-2 row-start-5">
            <ImageCard src={images.gallery[3]} className="h-full min-h-[100px]" />
          </motion.div>
        </motion.div>
      </div>

      <div className="h-[45vh]" aria-hidden />
    </section>
  );
}
