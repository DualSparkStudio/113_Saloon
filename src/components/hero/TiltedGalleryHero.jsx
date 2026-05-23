import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
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
      className={`flex h-full items-center justify-center overflow-hidden rounded-2xl p-4 shadow-xl md:rounded-3xl md:p-6 ${className}`}
      style={{ background: isDark ? "#111" : "#fff", color: isDark ? "#fff" : "#111" }}
    >
      <p className="font-editorial text-center text-[0.65rem] font-bold uppercase leading-[0.95] tracking-tight max-md:text-[0.6rem] sm:text-sm md:text-3xl lg:text-4xl">
        {children}
      </p>
    </div>
  );
}

function HeroCenterCard({ image, scrollYProgress, isMobile }) {
  const imgY = useTransform(scrollYProgress, (v) => v * (isMobile ? -24 : -40));
  const titleY = useTransform(scrollYProgress, (v) => v * (isMobile ? 12 : 20));
  const imgMotion = { y: imgY };
  const titleMotion = { y: titleY };

  return (
    <div className="relative h-full overflow-hidden rounded-2xl bg-[#c41e3a] shadow-2xl md:rounded-3xl">
      <div className="pointer-events-none absolute -right-8 top-1/2 z-0 h-[85%] w-[70%] -translate-y-1/2 opacity-20">
        <div className="h-full w-full rounded-full bg-white/30 blur-2xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col p-3 max-md:p-2.5 md:p-5">
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
          <motion.div style={imgMotion} className="absolute inset-x-0 bottom-12 top-6 max-md:bottom-10 max-md:top-4 md:bottom-20 md:top-8">
            <SafeImage
              src={image}
              alt="Luxe Atelier"
              className="mx-auto h-full max-h-full w-auto max-w-[95%] object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>

          <motion.div style={titleMotion} className="relative z-20">
            <h1 className="font-editorial text-[2rem] font-black uppercase leading-[0.85] tracking-tighter text-white max-md:text-[1.75rem] md:text-6xl lg:text-7xl">
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
const MOBILE_MQ = "(max-width: 767px)";
const LENIS_MQ = "(min-width: 768px)";

export default function TiltedGalleryHero() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(MOBILE_MQ).matches : false
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const gridY = useTransform(scrollYProgress, (v) => v * (isMobile ? -100 : -180));
  const gridY2 = useTransform(scrollYProgress, (v) => v * (isMobile ? -160 : -320));
  const gridY3 = useTransform(scrollYProgress, (v) => v * (isMobile ? -55 : -100));

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(LENIS_MQ);
    if (!mq.matches) return undefined;

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
    <section
      ref={sectionRef}
      data-nav-theme="light"
      className="relative max-w-full overflow-x-clip bg-[#e3e3e3] max-md:bg-white md:bg-[#e3e3e3]"
    >
      <div className="relative top-0 flex h-[min(50dvh,340px)] w-full max-w-full items-center justify-center overflow-x-clip overflow-y-hidden pt-[4.5rem] md:sticky md:h-screen md:max-h-none md:pt-0">
        <div className="flex w-full max-w-full justify-center overflow-x-clip px-1 md:px-0">
          <motion.div
            style={{ rotate: GRID_ROTATE, y: gridY }}
            className="relative grid w-full max-w-[min(100%,520px)] shrink-0 grid-cols-12 grid-rows-6 gap-1.5 p-1.5 max-md:origin-center max-md:scale-[0.88] md:w-[115vw] md:max-w-[1400px] md:scale-100 md:gap-3 md:p-3 lg:w-[128vw]"
          >
          <motion.div style={{ y: gridY3 }} className="col-span-3 row-span-2">
            <ImageCard
              src={images.gallery[0]}
              caption="Signature"
              date="Styling · Color"
              className="h-full min-h-[72px] md:min-h-[120px]"
            />
          </motion.div>

          <motion.div style={{ y: gridY2 }} className="col-span-2 col-start-4 row-span-2">
            <ImageCard src={images.preview.minimal} className="h-full min-h-[64px] md:min-h-[100px]" />
          </motion.div>

          <motion.div style={{ y: gridY3 }} className="col-span-3 col-start-10 row-span-2">
            <ImageCard
              src={images.gallery[1]}
              caption="Editorial"
              date="Beauty · Spa"
              className="h-full min-h-[72px] md:min-h-[120px]"
            />
          </motion.div>

          <motion.div style={{ y: gridY2 }} className="col-span-3 row-span-2 row-start-3">
            <TextCard variant="dark" className="max-md:p-2.5">
              Thinking of a luxury rebrand?
            </TextCard>
          </motion.div>

          <motion.div style={{ y: gridY }} className="col-span-6 col-start-4 row-span-4 row-start-2">
            <HeroCenterCard
              image={images.hero.fashion}
              scrollYProgress={scrollYProgress}
              isMobile={isMobile}
            />
          </motion.div>

          <motion.div style={{ y: gridY3 }} className="col-span-3 col-start-10 row-span-2 row-start-3">
            <ImageCard src={images.gallery[2]} className="h-full min-h-[72px] md:min-h-[120px]" />
          </motion.div>

          <motion.div style={{ y: gridY2 }} className="col-span-3 row-span-2 row-start-5">
            <ImageCard
              src={images.team[0]}
              caption="The Collective"
              date="Creative team"
              className="h-full min-h-[64px] md:min-h-[100px]"
            />
          </motion.div>

          <motion.div style={{ y: gridY3 }} className="col-span-3 col-start-4 row-span-2 row-start-5">
            <TextCard variant="light" className="max-md:p-2.5">
              More than a salon experience
            </TextCard>
          </motion.div>

          <motion.div style={{ y: gridY2 }} className="col-span-3 col-start-10 row-span-2 row-start-5">
            <ImageCard src={images.gallery[3]} className="h-full min-h-[64px] md:min-h-[100px]" />
          </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="hidden h-[45vh] md:block" aria-hidden />
    </section>
  );
}
