import { motion } from "framer-motion";
import LuxuryButton from "../ui/LuxuryButton";
import Particles from "./Particles";

const words = ["Choose Your", "Luxury Salon", "Experience"];

export default function ShowcaseHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1560066984-138d7174e2b7?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050505]/90 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.08)_0%,transparent_70%)]" />
      </div>

      <Particles count={40} />

      <div className="noise-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-6 text-xs tracking-[0.5em] text-[#c9a962]/80 uppercase"
        >
          Premium Salon Website Themes
        </motion.p>

        <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-7xl lg:text-8xl">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.15 }}
            >
              <motion.span
                className={`inline-block ${i === 1 ? "luxury-gradient-text italic" : "text-white"}`}
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1.5 + i * 0.15,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-base text-white/50 md:text-lg"
        >
          Six unique salon website layouts — each with eight switchable colour
          palettes built in. Preview layouts and colours together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <LuxuryButton href="#themes" variant="gold" size="lg">
            View All Themes
          </LuxuryButton>
          <LuxuryButton href="#experience" variant="outline" size="lg">
            The Experience
          </LuxuryButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="mt-20 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-[#c9a962]/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
