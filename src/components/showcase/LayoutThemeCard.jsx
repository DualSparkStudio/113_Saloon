import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { colorVariants } from "../../data/colorVariants";
import LayoutPreviewMockup from "./LayoutPreviewMockup";
import SafeImage from "../ui/SafeImage";
import PaletteSwatch from "../ui/PaletteSwatch";

export default function LayoutThemeCard({ theme, index }) {
  const [hovered, setHovered] = useState(false);
  const defaultPalette = colorVariants[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] transition-all duration-500"
        style={{
          boxShadow: hovered ? "0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,169,98,0.15)" : undefined,
        }}
      >
        <Link to={`/theme/${theme.slug}?palette=${defaultPalette.slug}`} className="block">
          <div className="relative aspect-[21/9] md:aspect-[2/1] overflow-hidden">
            <SafeImage
              src={theme.preview}
              alt={theme.name}
              className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40" />
            <LayoutPreviewMockup layoutType={theme.layoutType} />
          </div>

          <div className="p-6 md:p-10">
            <span className="inline-block rounded-full bg-[#c9a962]/15 border border-[#c9a962]/30 px-3 py-1 text-[10px] tracking-[0.3em] text-[#c9a962] uppercase mb-3">
              Unique Layout · 8 Colours
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-white">{theme.shortName}</h3>
            <p className="mt-3 text-sm md:text-base text-white/50 leading-relaxed">{theme.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {theme.features.map((f) => (
                <li key={f} className="text-[10px] tracking-wide text-white/35 bg-white/5 rounded-full px-2.5 py-1">
                  {f}
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#c9a962] uppercase group-hover:gap-3 transition-all">
              Live Preview — Full Demo
              <span>→</span>
            </span>
          </div>
        </Link>

        <div className="px-6 pb-6 md:px-10 md:pb-10 pt-0 border-t border-white/5">
          <p className="text-[10px] tracking-[0.3em] text-white/35 uppercase mb-3">
            Preview colour (background + accent)
          </p>
          <div className="flex flex-wrap gap-2.5">
            {colorVariants.map((c) => (
              <Link
                key={c.slug}
                to={`/theme/${theme.slug}?palette=${c.slug}`}
                title={`${c.name} — ${c.description}`}
                onClick={(e) => e.stopPropagation()}
              >
                <PaletteSwatch variant={c} active={false} size={32} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
