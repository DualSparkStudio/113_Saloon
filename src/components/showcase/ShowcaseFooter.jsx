import { Link } from "react-router-dom";
import { layoutThemes } from "../../data/layoutThemes";
import { colorVariants } from "../../data/colorVariants";

export default function ShowcaseFooter() {
  const defaultPalette = colorVariants[0].slug;

  return (
    <footer id="contact" className="relative border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-[0.15em] text-white">
              LUXE<span className="text-[#c9a962]">ATELIER</span>
            </p>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              Six layouts · eight colour palettes each.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-4">Themes</p>
            <ul className="space-y-2">
              {layoutThemes.map((t) => (
                <li key={t.id}>
                  <Link
                    to={`/theme/${t.slug}?palette=${defaultPalette}`}
                    className="text-sm text-white/50 hover:text-[#c9a962] transition-colors"
                  >
                    {t.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-4">Contact</p>
            <p className="text-sm text-white/50">hello@luxeatelier.com</p>
            <p className="mt-2 text-sm text-white/50">+1 (888) LUXE-SALON</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-white/30">© 2026 LuxeAtelier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
