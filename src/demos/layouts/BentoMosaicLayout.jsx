import { motion } from "framer-motion";
import { services, team, testimonials, galleryImages } from "../../data/sharedContent";
import SafeImage from "../../components/ui/SafeImage";
import PaletteSwitcher from "./PaletteSwitcher";
import DemoRichSections from "./DemoRichSections";

export default function BentoMosaicLayout({ theme, palette }) {
  return (
    <div className="min-h-screen p-4 md:p-6" style={{ background: palette.bg, color: palette.text }}>
      <PaletteSwitcher themeSlug={theme.slug} palette={palette} />

      <div className="max-w-7xl mx-auto pt-2">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-2 md:col-span-2 rounded-3xl p-6 flex flex-col justify-between min-h-[120px] border" style={{ background: `${palette.accent}22`, borderColor: `${palette.accent}33` }}>
            <p className="font-display text-2xl">{theme.brand}</p>
            <p className="text-xs" style={{ color: palette.muted }}>Bento Mosaic</p>
          </div>

          <motion.div className="col-span-2 md:col-span-3 row-span-2 rounded-3xl overflow-hidden min-h-[280px] relative">
            <SafeImage src={theme.hero} alt="" className="h-full w-full object-cover min-h-[280px]" />
            <div className="absolute inset-0 flex items-end p-8" style={{ background: `linear-gradient(to top, ${palette.bg}ee, transparent)` }}>
              <h1 className="font-display text-3xl md:text-4xl">{theme.tagline}</h1>
            </div>
          </motion.div>

          <a href="#book" className="col-span-2 md:col-span-1 rounded-3xl flex items-center justify-center p-6 text-sm font-medium" style={{ background: palette.accent, color: palette.light ? "#111" : "#000" }}>Book →</a>

          <div className="col-span-1 rounded-3xl p-5 border" style={{ background: palette.surface, borderColor: `${palette.accent}22` }}>
            <p className="text-3xl font-display" style={{ color: palette.accent }}>15+</p>
            <p className="text-xs" style={{ color: palette.muted }}>Years</p>
          </div>
          <div className="col-span-1 rounded-3xl p-5 border" style={{ background: palette.surface, borderColor: `${palette.accent}22` }}>
            <p className="text-3xl font-display" style={{ color: palette.accent }}>50K</p>
            <p className="text-xs" style={{ color: palette.muted }}>Clients</p>
          </div>

          {services.slice(0, 3).map((s, i) => (
            <div key={s.name} className={`rounded-3xl p-5 border ${i === 0 ? "col-span-2 md:col-span-2" : "col-span-2 md:col-span-1"}`} style={{ background: palette.surface, borderColor: `${palette.accent}22` }}>
              <p className="text-xs uppercase tracking-widest" style={{ color: palette.accent }}>{s.duration}</p>
              <p className="font-medium mt-2">{s.name}</p>
              <p className="text-sm mt-1" style={{ color: palette.muted }}>{s.price}</p>
            </div>
          ))}

          {team.slice(0, 3).map((m, i) => (
            <div key={m.name} className={`rounded-3xl overflow-hidden relative ${i === 0 ? "col-span-2 row-span-2 min-h-[200px]" : "col-span-1 min-h-[100px]"}`}>
              <SafeImage src={m.image} alt={m.name} className="h-full w-full object-cover min-h-[100px]" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-xs" style={{ background: `${palette.bg}cc` }}>{m.name}</div>
            </div>
          ))}

          <div className="col-span-4 md:col-span-3 rounded-3xl p-8 border flex items-center" style={{ background: `${palette.accent}12`, borderColor: `${palette.accent}22` }}>
            <p className="italic" style={{ color: palette.muted }}>&ldquo;{testimonials[0].quote}&rdquo;</p>
          </div>

          <div className="col-span-4 md:col-span-6 grid grid-cols-3 gap-3">
            {galleryImages.slice(0, 6).map((img, i) => (
              <div key={img} className={`rounded-2xl overflow-hidden ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
                <SafeImage src={img} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          <div id="book" className="col-span-4 md:col-span-3 rounded-3xl p-8" style={{ background: palette.accent, color: palette.light ? "#111" : "#000" }}>
            <h2 className="font-display text-2xl">Book Your Visit</h2>
            <button type="button" className="mt-4 px-8 py-3 rounded-full text-sm border-2" style={{ borderColor: palette.light ? "#111" : "#000", background: palette.surface, color: palette.text }}>Reserve Now</button>
          </div>
        </div>
      </div>
      <DemoRichSections palette={palette} theme={theme} />
    </div>
  );
}
