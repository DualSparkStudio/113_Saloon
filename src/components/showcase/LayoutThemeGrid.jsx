import { layoutThemes } from "../../data/layoutThemes";
import LayoutThemeCard from "./LayoutThemeCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function LayoutThemeGrid() {
  return (
    <section id="themes" className="relative py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.08)_0%,transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <ScrollReveal className="mb-16 md:mb-20">
          <p className="text-xs tracking-[0.5em] text-[#c9a962]/70 uppercase">
            Salon Website Themes
          </p>
          <h2 className="mt-4 font-display text-3xl text-white md:text-5xl leading-tight">
            Six Unique Layouts ·
            <span className="luxury-gradient-text italic"> Eight Colours Each</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/45 leading-relaxed">
            Each theme is a full salon website demo — services, team, gallery, booking, FAQ, and contact.
            Swatches show the real background and accent you will see when applied.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-10">
          {layoutThemes.map((theme, i) => (
            <LayoutThemeCard key={theme.id} theme={theme} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
