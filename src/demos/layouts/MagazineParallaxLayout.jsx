import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services, galleryImages } from "../../data/sharedContent";
import SafeImage from "../../components/ui/SafeImage";
import PaletteSwitcher from "./PaletteSwitcher";
import DemoRichSections from "./DemoRichSections";

const timeline = [
  { year: "2010", title: "Founded", desc: "A vision for editorial beauty." },
  { year: "2016", title: "Expanded", desc: "Second location, doubled artistry." },
  { year: "2022", title: "Awarded", desc: "Best Luxury Salon — National." },
  { year: "2026", title: "Today", desc: "Leading the industry forward." },
];

export default function MagazineParallaxLayout({ theme, palette }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const col1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div ref={ref} className="min-h-screen" style={{ background: palette.bg, color: palette.text }}>
      <PaletteSwitcher themeSlug={theme.slug} palette={palette} />

      <nav className="flex justify-between items-center px-8 py-6 border-b" style={{ borderColor: `${palette.accent}22` }}>
        <span className="font-display text-2xl italic">{theme.brand}</span>
      </nav>

      <section className="relative min-h-[90vh] overflow-hidden px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          <motion.div style={{ y: col1Y }}>
            <p className="text-xs tracking-[0.4em] uppercase" style={{ color: palette.accent }}>The Collective</p>
            <h1 className="font-display text-5xl md:text-6xl mt-4 leading-tight italic">{theme.tagline}</h1>
          </motion.div>
          <motion.div style={{ y: col2Y }} className="relative z-10">
            <SafeImage src={theme.hero} alt="" className="w-full aspect-[3/4] object-cover shadow-2xl" />
          </motion.div>
          <motion.div style={{ y: col1Y }} className="md:pt-48">
            <p className="text-sm leading-relaxed" style={{ color: palette.muted }}>Parallax columns, timeline story, masonry gallery.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="font-display text-4xl text-center mb-16 italic">Treatments</h2>
        <div className="columns-1 md:columns-2 gap-8 space-y-6">
          {services.map((s) => (
            <div key={s.name} className="break-inside-avoid p-6 border" style={{ background: palette.surface, borderColor: `${palette.accent}22` }}>
              <h3 className="font-display text-xl">{s.name}</h3>
              <p className="mt-2" style={{ color: palette.accent }}>{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="timeline" className="py-24 px-8" style={{ background: palette.surface, color: palette.text }}>
        <h2 className="font-display text-4xl text-center mb-20 italic">Our Timeline</h2>
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: `${palette.accent}44` }} />
          {timeline.map((item) => (
            <div key={item.year} className="relative pl-16 pb-16 last:pb-0">
              <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: palette.accent, color: palette.light ? "#111" : "#fff" }}>{item.year.slice(2)}</div>
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm" style={{ color: palette.muted }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="font-display text-4xl mb-12 italic">Portfolio</h2>
        <div className="columns-2 md:columns-3 gap-4">
          {galleryImages.map((img) => (
            <SafeImage key={img} src={img} alt="" className="mb-4 w-full object-cover rounded-lg" />
          ))}
        </div>
      </section>

      <DemoRichSections palette={palette} theme={theme} />
    </div>
  );
}
