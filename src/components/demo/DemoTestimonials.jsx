import { testimonials } from "../../data/themes";
import ScrollReveal from "../ui/ScrollReveal";
import { motion } from "framer-motion";

export default function DemoTestimonials({ theme }) {
  return (
    <section className="relative py-28 md:py-36">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at center, ${theme.accent}15, transparent 70%)`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <ScrollReveal className="mb-16 text-center">
          <p
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: theme.accent }}
          >
            Testimonials
          </p>
          <h2
            className={`mt-4 ${theme.fontDisplay} text-3xl md:text-5xl`}
            style={{ color: theme.text }}
          >
            Voices of Distinction
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.12}>
              <motion.blockquote
                whileHover={{ y: -4 }}
                className="rounded-2xl p-8 h-full flex flex-col"
                style={{
                  background: theme.light ? theme.surface : theme.surface,
                  border: `1px solid ${theme.accent}22`,
                  boxShadow: theme.light ? "0 4px 24px rgba(0,0,0,0.05)" : "none",
                }}
              >
                <span
                  className={`${theme.fontDisplay} text-4xl leading-none`}
                  style={{ color: theme.accent }}
                >
                  &ldquo;
                </span>
                <p
                  className="mt-4 flex-1 italic leading-relaxed"
                  style={{ color: theme.muted }}
                >
                  {t.quote}
                </p>
                <footer className="mt-6">
                  <cite
                    className={`not-italic ${theme.fontDisplay} text-base block`}
                    style={{ color: theme.text }}
                  >
                    {t.author}
                  </cite>
                  <span className="text-xs" style={{ color: theme.accent }}>
                    {t.title}
                  </span>
                </footer>
              </motion.blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
