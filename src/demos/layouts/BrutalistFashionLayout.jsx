import { services, team, testimonials, galleryImages } from "../../data/sharedContent";
import SafeImage from "../../components/ui/SafeImage";
import PaletteSwitcher from "./PaletteSwitcher";
import DemoRichSections from "./DemoRichSections";

export default function BrutalistFashionLayout({ theme, palette }) {
  const border = palette.light ? palette.text : palette.accent;
  const contrastBg = palette.light ? palette.text : palette.accent;
  const contrastText = palette.light ? palette.bg : (palette.light ? "#111" : "#000");

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: palette.bg, color: palette.text }}>
      <PaletteSwitcher themeSlug={theme.slug} palette={palette} />

      <header className="border-b-4" style={{ borderColor: border }}>
        <h1 className="font-editorial text-[14vw] md:text-[10rem] font-bold uppercase leading-[0.8] tracking-tighter px-4 md:px-6 pb-4">
          {theme.brand.split(" ")[0]}
          <span className="block" style={{ WebkitTextStroke: `2px ${border}`, color: "transparent" }}>{theme.brand.split(" ").slice(1).join(" ") || "BEAUTY"}</span>
        </h1>
      </header>

      <section className="grid md:grid-cols-12 border-b-4" style={{ borderColor: border }}>
        <div className="md:col-span-5 border-r-4 p-6 md:p-12 flex flex-col justify-end min-h-[40vh]" style={{ borderColor: border }}>
          <p className="text-4xl md:text-6xl font-bold uppercase leading-none">{theme.tagline}</p>
        </div>
        <div className="md:col-span-7 relative min-h-[50vh]">
          <SafeImage src={theme.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute top-8 right-8 border-4 px-6 py-4 font-bold text-2xl rotate-3" style={{ background: palette.accent, borderColor: border, color: contrastText }}>NEW</div>
        </div>
      </section>

      <section className="border-b-4" style={{ borderColor: border }}>
        {services.slice(0, 4).map((s, i) => (
          <div key={s.name} className="grid md:grid-cols-12 border-b-2 last:border-b-0" style={{ borderColor: border, background: i % 2 === 1 ? contrastBg : palette.bg, color: i % 2 === 1 ? contrastText : palette.text }}>
            <div className="md:col-span-2 p-6 border-r-2 font-editorial text-6xl font-bold opacity-30" style={{ borderColor: border }}>{String(i + 1).padStart(2, "0")}</div>
            <div className="md:col-span-7 p-6 md:p-10 flex items-center">
              <h3 className="text-2xl md:text-4xl font-bold uppercase">{s.name}</h3>
            </div>
            <div className="md:col-span-3 p-6 border-l-2 flex items-center justify-end font-bold text-xl" style={{ borderColor: border }}>{s.price}</div>
          </div>
        ))}
      </section>

      <section className="py-16 border-b-4" style={{ borderColor: border }}>
        <h2 className="px-6 text-8xl md:text-[10rem] font-bold uppercase opacity-10 leading-none mb-8">TEAM</h2>
        <div className="flex overflow-x-auto snap-x border-t-4" style={{ borderColor: border, scrollbarWidth: "none" }}>
          {team.map((m) => (
            <div key={m.name} className="snap-center shrink-0 w-[70vw] md:w-[400px] border-r-4" style={{ borderColor: border }}>
              <SafeImage src={m.image} alt={m.name} className="w-full aspect-[3/4] object-cover" />
              <div className="p-6 border-t-4" style={{ background: palette.accent, borderColor: border, color: contrastText }}>
                <p className="font-bold text-2xl uppercase">{m.name}</p>
                <p className="text-sm font-bold mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 border-b-4" style={{ borderColor: border }}>
        <SafeImage src={galleryImages[0]} alt="" className="w-full h-80 md:h-auto object-cover border-b-4 md:border-b-0 md:border-r-4" style={{ borderColor: border }} />
        <div className="p-12 flex flex-col justify-center border-b-4 md:border-b-0" style={{ background: palette.accent, color: contrastText, borderColor: border }}>
          <p className="text-3xl font-bold uppercase leading-tight">&ldquo;{testimonials[2].quote}&rdquo;</p>
        </div>
      </section>

      <DemoRichSections palette={palette} theme={theme} />
    </div>
  );
}
