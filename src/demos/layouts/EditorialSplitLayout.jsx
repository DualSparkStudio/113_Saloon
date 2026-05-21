import { motion } from "framer-motion";
import { services, team, testimonials, galleryImages } from "../../data/sharedContent";
import SafeImage from "../../components/ui/SafeImage";
import PaletteSwitcher from "./PaletteSwitcher";
import DemoRichSections from "./DemoRichSections";

export default function EditorialSplitLayout({ theme, palette }) {
  const navItems = ["Services", "Story", "Artists", "Gallery", "Contact"];

  return (
    <div className="min-h-screen" style={{ background: palette.bg, color: palette.text }}>
      <PaletteSwitcher themeSlug={theme.slug} palette={palette} />

      <div className="flex">
      <aside className="hidden lg:flex fixed left-0 top-[52px] bottom-0 w-64 flex-col justify-between border-r p-10 z-40" style={{ borderColor: `${palette.accent}22`, background: palette.bg }}>
        <div>
          <p className="font-classic text-2xl tracking-wide">{theme.brand}</p>
          <nav className="mt-16 space-y-4">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block text-xs tracking-[0.25em] uppercase transition-colors" style={{ color: palette.muted }}>{item}</a>
            ))}
          </nav>
        </div>
      </aside>

      <main className="lg:ml-64 flex-1 w-full pt-[52px]">
        <section className="min-h-screen grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-10 lg:p-16 order-2 lg:order-1">
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: palette.accent }}>Issue № 01</p>
            <h1 className="font-classic text-5xl lg:text-7xl leading-[1.1]">{theme.tagline}</h1>
            <p className="mt-8 leading-relaxed max-w-md" style={{ color: palette.muted }}>Editorial split — sticky sidebar, asymmetric grids.</p>
            <a href="#services" className="mt-10 inline-block border-b pb-1 text-xs tracking-[0.3em] uppercase" style={{ borderColor: palette.accent, color: palette.accent }}>Discover Services</a>
          </div>
          <div className="relative min-h-[50vh] lg:min-h-screen order-1 lg:order-2">
            <SafeImage src={theme.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: `${palette.accent}15` }} />
          </div>
        </section>

        <section id="services" className="py-24 px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <h2 className="font-classic text-4xl">Services</h2>
            </div>
            <div className="lg:col-span-8">
              {services.map((s, i) => (
                <motion.div key={s.name} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`flex justify-between py-6 border-b ${i === 0 ? "border-t" : ""}`} style={{ borderColor: `${palette.accent}22` }}>
                  <span className="font-classic text-xl">{s.name}</span>
                  <span className="text-sm" style={{ color: palette.accent }}>{s.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="py-24 px-10 lg:px-16 relative">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 lg:col-start-6">
              <SafeImage src={galleryImages[1]} alt="" className="w-full aspect-[3/4] object-cover" />
            </div>
            <div className="lg:col-span-5 lg:absolute lg:left-16 lg:top-1/2 lg:-translate-y-1/2 p-10 max-w-md z-10" style={{ background: palette.surface, boxShadow: `0 20px 60px ${palette.glow}` }}>
              <h2 className="font-classic text-3xl">Our Story</h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: palette.muted }}>Magazine craft for luxury salons.</p>
            </div>
          </div>
        </section>

        <section id="artists" className="py-24 px-10 lg:px-16" style={{ background: palette.surface, color: palette.text }}>
          <h2 className="font-classic text-3xl mb-12">The Artists</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {team.slice(0, 2).map((m) => (
              <div key={m.name} className="flex gap-6">
                <SafeImage src={m.image} alt={m.name} className="w-32 h-40 object-cover" />
                <div>
                  <p className="font-classic text-xl">{m.name}</p>
                  <p className="text-sm mt-1" style={{ color: palette.accent }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="py-24 px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-3">
            <SafeImage src={galleryImages[0]} alt="" className="col-span-7 row-span-2 aspect-[4/5] object-cover w-full" />
            <SafeImage src={galleryImages[2]} alt="" className="col-span-5 aspect-square object-cover w-full" />
            <SafeImage src={galleryImages[3]} alt="" className="col-span-5 aspect-square object-cover w-full" />
          </div>
        </section>

        <section className="py-16 px-10 text-center">
          <p className="font-classic text-2xl italic max-w-2xl mx-auto">&ldquo;{testimonials[1].quote}&rdquo;</p>
        </section>

        <DemoRichSections palette={palette} theme={theme} />
      </main>
      </div>
    </div>
  );
}
