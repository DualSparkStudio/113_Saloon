import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import SafeImage from "../ui/SafeImage";
import { images } from "../../data/images";

const defaultImages = [
  images.gallery[0],
  images.gallery[1],
  images.gallery[2],
  images.gallery[3],
  images.gallery[4],
  images.gallery[5],
  images.hero.salon,
  images.hero.hair,
  images.hero.beauty,
  images.hero.styling,
  images.hero.spa,
  images.hero.makeup,
];

function ScrollHint({ text, color }) {
  return (
    <span
      className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:to-current after:content-['']"
      style={{ color }}
    >
      {text}
    </span>
  );
}

function Column({ columnImages, y }) {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {columnImages.map((src, i) => (
        <div key={`${src}-${i}`} className="relative h-full w-full overflow-hidden">
          <SafeImage src={src} alt="" className="pointer-events-none h-full w-full object-cover" />
        </div>
      ))}
    </motion.div>
  );
}

/**
 * Skiper 30 Parallax — adapted from Skiper UI for LuxeAtelier.
 * Inspired by https://www.siena.film/films/my-project-x
 */
export default function SkiperParallaxHero({
  images: imageList = defaultImages,
  palette,
  theme,
  introTitle,
  introSubtitle,
  description,
  actions,
  showEndScreen = true,
}) {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  const imgs = imageList.length >= 12 ? imageList : defaultImages;

  useEffect(() => {
    const lenis = new Lenis();
    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    rafId = requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const title = introTitle ?? theme?.tagline ?? "Luxury Redefined";
  const subtitle = introSubtitle ?? theme?.brand ?? "Luxe Atelier";

  return (
    <div className="w-full" style={{ background: palette?.bg ?? "#050505", color: palette?.text ?? "#f5f5f5" }}>
      <div className="relative flex h-screen items-center justify-center px-6">
        <div className="absolute left-1/2 top-[10%] z-10 grid max-w-4xl -translate-x-1/2 content-start justify-items-center gap-6 text-center">
          <ScrollHint text="scroll down to see" color={palette?.muted ?? palette?.text ?? "#f5f5f5"} />
          {subtitle && (
            <p className="text-xs tracking-[0.4em] uppercase" style={{ color: palette?.accent }}>
              {subtitle}
            </p>
          )}
          <h1 className="font-display w-full text-4xl leading-tight sm:text-5xl md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-base md:text-lg" style={{ color: palette?.muted }}>
              {description}
            </p>
          )}
          {actions}
        </div>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden p-[2vw]"
        style={{ background: palette?.surface ?? "#fff" }}
      >
        <Column columnImages={[imgs[0], imgs[1], imgs[2]]} y={y} />
        <Column columnImages={[imgs[3], imgs[4], imgs[5]]} y={y2} />
        <Column columnImages={[imgs[6], imgs[7], imgs[8]]} y={y3} />
        <Column columnImages={[imgs[9], imgs[10], imgs[11]]} y={y4} />
      </div>

      {showEndScreen && (
        <div className="relative flex h-screen items-center justify-center">
          <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
            <ScrollHint text="scroll up to see" color={palette?.muted ?? palette?.text ?? "#f5f5f5"} />
          </div>
        </div>
      )}
    </div>
  );
}
