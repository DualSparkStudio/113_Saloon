import { useEffect } from "react";
import { Link } from "react-router-dom";
import { colorVariants } from "../../data/colorVariants";
import { services, team, testimonials, galleryImages } from "../../data/sharedContent";

export default function ColorVariantDemo({ variant }) {
  const v = variant;

  useEffect(() => {
    document.documentElement.style.setProperty("--cv-accent", v.accent);
    document.documentElement.style.setProperty("--cv-bg", v.bg);
    document.documentElement.style.setProperty("--cv-text", v.text);
    document.documentElement.style.setProperty("--cv-surface", v.surface);
    document.documentElement.style.setProperty("--cv-muted", v.muted);
    document.body.style.background = v.bg;
    document.body.style.color = v.text;
    return () => {
      document.body.style.background = "#050505";
      document.body.style.color = "#f5f5f5";
    };
  }, [v]);

  return (
    <div className="min-h-screen font-sans" style={{ background: v.bg, color: v.text }}>
      {/* Color switcher bar */}
      <div
        className="sticky top-0 z-50 border-b px-4 py-3 backdrop-blur-xl"
        style={{ background: `${v.surface}ee`, borderColor: `${v.accent}33` }}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase" style={{ color: v.muted }}>
              Same layout · Different colours
            </p>
            <p className="font-display text-sm" style={{ color: v.text }}>
              Previewing: <span style={{ color: v.accent }}>{v.name}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {colorVariants.map((c) => (
              <Link
                key={c.slug}
                to={`/colors/${c.slug}`}
                title={c.name}
                className="h-8 w-8 rounded-full border-2 transition-transform hover:scale-110"
                style={{
                  background: c.swatches[1],
                  borderColor: c.slug === v.slug ? v.accent : "transparent",
                  boxShadow: c.slug === v.slug ? `0 0 12px ${v.glow}` : "none",
                }}
              />
            ))}
          </div>
          <Link
            to="/"
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ color: v.accent }}
          >
            ← Showcase
          </Link>
        </div>
      </div>

      {/* Fixed layout structure */}
      <header className="mx-auto max-w-6xl px-6 py-8 flex justify-between items-center">
        <span className="font-display text-xl tracking-wider">LUXE ATELIER</span>
        <nav className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase" style={{ color: v.muted }}>
          {["Services", "About", "Team", "Book"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:opacity-100 opacity-70" style={{ color: v.text }}>{l}</a>
          ))}
        </nav>
        <a href="#book" className="rounded-full px-5 py-2 text-xs tracking-widest uppercase" style={{ background: v.accent, color: v.light ? "#111" : "#000" }}>Book</a>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-center">
        <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: v.accent }}>Colour palette demo</p>
        <h1 className="font-display text-4xl md:text-6xl">Your Salon, In {v.name}</h1>
        <p className="mt-6 max-w-lg mx-auto" style={{ color: v.muted }}>{v.description}. This is the identical page structure — only colours change.</p>
        <div className="mt-8 flex justify-center gap-3">
          {v.swatches.map((s) => (
            <div key={s} className="h-12 w-12 rounded-xl border" style={{ background: s, borderColor: `${v.accent}44` }} />
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl mb-8 text-center">Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {services.slice(0, 3).map((s) => (
            <div key={s.name} className="rounded-2xl p-6" style={{ background: v.surface, border: `1px solid ${v.accent}22` }}>
              <h3 className="font-display">{s.name}</h3>
              <p className="mt-2 text-sm" style={{ color: v.accent }}>{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img src={galleryImages[0]} alt="" className="rounded-2xl aspect-[4/3] object-cover" />
        <div>
          <h2 className="font-display text-3xl">About</h2>
          <p className="mt-4 leading-relaxed" style={{ color: v.muted }}>One layout, infinite brand moods. Switch colours above to compare palettes instantly.</p>
        </div>
      </section>

      <section id="team" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl mb-8 text-center">Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <img src={m.image} alt="" className="rounded-xl aspect-square object-cover" />
              <p className="mt-2 text-sm font-medium">{m.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl p-8 text-center" style={{ background: v.surface, border: `1px solid ${v.accent}22` }}>
          <p className="italic" style={{ color: v.muted }}>&ldquo;{testimonials[0].quote}&rdquo;</p>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-md px-6 py-16">
        <h2 className="font-display text-2xl text-center mb-6">Book</h2>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input className="w-full rounded-xl px-4 py-3 text-sm outline-none" placeholder="Name" style={{ background: v.light ? "#eee" : "rgba(255,255,255,0.06)", color: v.text, border: `1px solid ${v.accent}33` }} />
          <button type="submit" className="w-full rounded-full py-3 text-xs tracking-widest uppercase" style={{ background: v.accent, color: v.light ? "#111" : "#000" }}>Reserve</button>
        </form>
      </section>

      <footer className="border-t py-8 text-center text-xs" style={{ borderColor: `${v.accent}22`, color: v.muted }}>
        <Link to="/#color-variants" style={{ color: v.accent }}>← Compare all colour palettes</Link>
      </footer>
    </div>
  );
}
