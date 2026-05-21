import ScrollReveal from "../ui/ScrollReveal";
import { motion } from "framer-motion";

export default function DemoAbout({ theme }) {
  const isCinematic = theme.style === "cinematic";

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={theme.preview}
                alt="About"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent}33, transparent)`,
                }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="text-xs tracking-[0.4em] uppercase"
              style={{ color: theme.accent }}
            >
              Our Story
            </p>
            <h2
              className={`mt-4 ${theme.fontDisplay} text-3xl md:text-5xl leading-tight`}
              style={{ color: theme.text }}
            >
              {isCinematic ? (
                <>WHERE ART<br />MEETS BEAUTY</>
              ) : (
                <>A Legacy of<br />Extraordinary Craft</>
              )}
            </h2>
            <p
              className="mt-6 leading-relaxed"
              style={{ color: theme.muted }}
            >
              Founded on the belief that every client deserves a transformative
              experience, {theme.brand} has redefined luxury salon culture.
              Our master artisans blend cutting-edge techniques with timeless
              elegance — creating beauty that speaks before you enter the room.
            </p>
            <p
              className="mt-4 leading-relaxed"
              style={{ color: theme.muted }}
            >
              From private suites to bespoke consultations, every detail is
              orchestrated for those who accept nothing less than perfection.
            </p>
            <motion.div
              className="mt-10 grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {[
                { num: "15+", label: "Years Excellence" },
                { num: "50K+", label: "Clients Served" },
                { num: "12", label: "Award Wins" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className={`${theme.fontDisplay} text-2xl md:text-3xl`}
                    style={{ color: theme.accent }}
                  >
                    {stat.num}
                  </p>
                  <p className="mt-1 text-xs" style={{ color: theme.muted }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
