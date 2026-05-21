import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ThemeCard({ theme, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <Link to={`/demo/${theme.slug}`} className="block">
        <div
          className="relative overflow-hidden rounded-3xl transition-all duration-700"
          style={{
            boxShadow: hovered
              ? `0 30px 60px -15px rgba(0,0,0,0.6), 0 0 60px ${theme.glow}`
              : "0 20px 40px -15px rgba(0,0,0,0.4)",
          }}
        >
          <div className="glass-panel absolute inset-0 z-10 rounded-3xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <motion.img
              src={theme.preview}
              alt={theme.name}
              className="h-full w-full object-cover"
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
              style={{ opacity: hovered ? 0.85 : 0.7 }}
            />
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}22, transparent 60%)`,
              }}
            />
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-20 p-6 md:p-8">
            <div
              className="mb-3 inline-block rounded-full px-3 py-1 text-[10px] tracking-[0.3em] uppercase"
              style={{
                background: `${theme.accent}22`,
                color: theme.accent,
                border: `1px solid ${theme.accent}44`,
              }}
            >
              Theme {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-xl text-white md:text-2xl">
              {theme.shortName}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-white/50">
              {theme.description}
            </p>

            <motion.div
              className="mt-5 flex items-center gap-3"
              initial={false}
              animate={{ opacity: hovered ? 1 : 0.7, x: hovered ? 0 : -5 }}
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all"
                style={{
                  background: theme.accent,
                  color: theme.light ? "#1a1a1a" : "#000",
                }}
              >
                Live Preview
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </motion.div>
          </div>

          <motion.div
            className="absolute top-4 right-4 z-20 rounded-full px-3 py-1 text-[10px] tracking-widest text-white/60 uppercase glass-panel"
            animate={{ opacity: hovered ? 1 : 0 }}
          >
            Enter Demo →
          </motion.div>
        </div>
      </Link>
    </motion.article>
  );
}
