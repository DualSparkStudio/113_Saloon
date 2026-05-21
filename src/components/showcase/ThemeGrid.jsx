import { themes } from "../../data/themes";
import ThemeCard from "./ThemeCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function ThemeGrid() {
  return (
    <section id="themes" className="relative py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.05)_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <ScrollReveal className="mb-20 text-center">
          <p className="text-xs tracking-[0.5em] text-[#c9a962]/70 uppercase">
            Curated Collection
          </p>
          <h2 className="mt-4 font-display text-3xl text-white md:text-5xl">
            Eight Luxury <span className="luxury-gradient-text italic">Experiences</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/40">
            Each theme is a complete, production-ready salon brand experience.
            Click any card to enter the live demo.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {themes.map((theme, i) => (
            <ThemeCard key={theme.id} theme={theme} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
