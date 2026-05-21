import { colorVariants } from "../../data/colorVariants";
import ColorVariantCard from "./ColorVariantCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function ColorVariantGrid() {
  return (
    <section id="color-variants" className="relative py-28 border-t border-white/5 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ScrollReveal className="mb-12 text-center md:text-left">
          <p className="text-xs tracking-[0.5em] text-white/35 uppercase">
            Colour Palettes
          </p>
          <h2 className="mt-4 font-display text-2xl text-white md:text-4xl">
            See the Same Design in Different Colours
          </h2>
          <p className="mt-4 max-w-2xl text-white/40 text-sm md:text-base leading-relaxed">
            One fixed layout — swap palettes instantly. Perfect for showing clients how
            their brand mood changes with gold, rose, marble, platinum, and more.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full glass-panel px-5 py-2.5 text-xs text-white/50">
            <span className="h-2 w-2 rounded-full bg-[#c9a962] animate-pulse" />
            Identical structure · 8 colour options
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {colorVariants.map((variant, i) => (
            <ColorVariantCard key={variant.id} variant={variant} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
