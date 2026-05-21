import { motion } from "framer-motion";

export default function DemoHero({ theme }) {
  const isCinematic = theme.style === "cinematic";
  const isPlatinum = theme.style === "platinum";
  const isMarble = theme.style === "marble";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={theme.hero}
          alt={theme.brand}
          className="h-full w-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b ${theme.gradient}`}
          style={{
            background: theme.light
              ? `linear-gradient(to bottom, rgba(255,255,255,0.3), ${theme.bg})`
              : undefined,
          }}
        />
        {!theme.light && (
          <div className="absolute inset-0 bg-black/50" />
        )}
        {theme.style === "dubai" && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,98,0.15)_0%,transparent_50%)]" />
        )}
        {theme.style === "velvet" && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(155,77,106,0.2)_0%,transparent_60%)]" />
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 text-center md:px-10 md:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xs tracking-[0.5em] uppercase mb-6"
          style={{ color: theme.accent }}
        >
          {isCinematic ? "— EDITORIAL BEAUTY —" : "Est. MMXXVI · Luxury Salon"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`${theme.fontDisplay} leading-[0.95] ${
            isCinematic
              ? "text-6xl md:text-[10rem] font-bold uppercase tracking-tighter"
              : isPlatinum
              ? "text-5xl md:text-7xl font-light tracking-tight"
              : "text-5xl md:text-8xl"
          }`}
          style={{ color: theme.text }}
        >
          {isCinematic ? (
            <>
              <span className="block">BEAUTY</span>
              <span className="block text-white/30">REDEFINED</span>
            </>
          ) : (
            theme.tagline
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={`mx-auto mt-8 max-w-xl ${isPlatinum ? "text-lg font-light" : "text-base"} leading-relaxed`}
          style={{ color: theme.muted }}
        >
          {theme.description} Experience unparalleled artistry in an atmosphere
          of absolute refinement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#book"
            className="rounded-full px-10 py-4 text-xs tracking-[0.25em] uppercase transition-all hover:scale-105"
            style={{
              background: theme.accent,
              color: theme.light ? "#1a1a1a" : "#000",
              boxShadow: `0 0 40px ${theme.glow}`,
            }}
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="rounded-full border px-10 py-4 text-xs tracking-[0.25em] uppercase transition-all hover:scale-105"
            style={{
              borderColor: `${theme.accent}66`,
              color: theme.text,
            }}
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {isMarble && (
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: `linear-gradient(to top, ${theme.bg}, transparent)`,
          }}
        />
      )}
    </section>
  );
}
