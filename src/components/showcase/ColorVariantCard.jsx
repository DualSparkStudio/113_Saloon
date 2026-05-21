import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ColorVariantCard({ variant, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <Link
        to={`/colors/${variant.slug}`}
        className="group block rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all hover:border-white/20 hover:bg-white/[0.06]"
        style={{ boxShadow: `0 0 0 0 ${variant.glow}`, }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 8px 32px ${variant.glow}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="flex gap-2 mb-4">
          {variant.swatches.map((s) => (
            <div
              key={s}
              className="h-10 flex-1 rounded-lg border border-white/10 transition-transform group-hover:scale-105"
              style={{ background: s }}
            />
          ))}
        </div>
        <h3 className="font-display text-lg text-white">{variant.name}</h3>
        <p className="mt-1 text-xs text-white/40 line-clamp-1">{variant.description}</p>
        <p className="mt-3 text-[10px] tracking-[0.25em] text-white/30 uppercase group-hover:text-[#c9a962] transition-colors">
          Preview palette →
        </p>
      </Link>
    </motion.article>
  );
}
