import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services, team } from "../../data/sharedContent";
import SafeImage from "../../components/ui/SafeImage";
import PaletteSwitcher from "./PaletteSwitcher";
import DemoRichSections from "./DemoRichSections";

export default function CinematicScrollLayout({ theme, palette }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.3]);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ background: palette.bg, color: palette.text }}>
      <PaletteSwitcher themeSlug={theme.slug} palette={palette} />

      <nav className="flex justify-between items-center px-6 py-5 border-b" style={{ borderColor: `${palette.accent}22` }}>
        <span className="font-editorial text-sm tracking-[0.4em] uppercase">{theme.brand}</span>
      </nav>

      <section className="relative h-screen overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
          <SafeImage src={theme.hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${palette.bg}, transparent 50%)` }} />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 pb-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: palette.accent }}>Now Playing</motion.p>
          <motion.h1 initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-editorial text-6xl md:text-[8rem] font-bold uppercase leading-[0.85] tracking-tighter">
            {theme.tagline}
          </motion.h1>
          <motion.a href="#services" className="mt-8 inline-flex w-fit border px-8 py-3 text-xs tracking-[0.3em] uppercase" style={{ borderColor: palette.accent, color: palette.text }}>Explore →</motion.a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full overflow-hidden" style={{ background: `${palette.accent}33` }}>
          <motion.div className="h-full" style={{ scaleX: scrollYProgress, transformOrigin: "left", background: palette.accent }} />
        </div>
      </section>

      <section id="services" className="py-24 border-t" style={{ borderColor: `${palette.accent}22` }}>
        <p className="px-8 text-xs tracking-[0.4em] uppercase mb-8" style={{ color: palette.accent }}>Scene II — Services</p>
        <div className="flex gap-6 overflow-x-auto px-8 pb-8 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {services.map((s, i) => (
            <motion.div key={s.name} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="snap-center shrink-0 w-[85vw] md:w-[400px] p-8" style={{ border: `1px solid ${palette.accent}33`, background: palette.surface }}>
              <span className="text-6xl font-editorial opacity-20">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-editorial text-2xl uppercase mt-4">{s.name}</h3>
              <p className="mt-2" style={{ color: palette.accent }}>{s.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="min-h-[70vh] flex items-center px-8 md:px-16" style={{ background: palette.surface }}>
        <div className="max-w-xl">
          <h2 className="font-editorial text-4xl md:text-6xl uppercase">The Experience</h2>
          <p className="mt-6 leading-relaxed" style={{ color: palette.muted }}>Immersive fullscreen storytelling with horizontal service carousel.</p>
        </div>
      </section>

      <section className="py-24 px-8">
        <h2 className="font-editorial text-3xl uppercase mb-12">Cast</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {team.map((m) => (
            <div key={m.name} className="relative overflow-hidden aspect-[3/4]">
              <SafeImage src={m.image} alt={m.name} className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: `linear-gradient(to top, ${palette.bg}, transparent)` }}>
                <p className="text-xs uppercase tracking-widest">{m.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DemoRichSections palette={palette} theme={theme} />
    </div>
  );
}
