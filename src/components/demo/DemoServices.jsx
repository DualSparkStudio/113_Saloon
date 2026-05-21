import { motion } from "framer-motion";
import { services } from "../../data/themes";
import ScrollReveal from "../ui/ScrollReveal";

export default function DemoServices({ theme }) {
  const isGlass = theme.style === "glass";
  const isCinematic = theme.style === "cinematic";

  const cardStyle = isGlass
    ? {
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
      }
    : theme.light
    ? {
        background: theme.surface,
        border: `1px solid ${theme.accent}22`,
        boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
      }
    : {
        background: theme.surface,
        border: `1px solid ${theme.accent}18`,
      };

  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ScrollReveal className="mb-16 text-center md:text-left">
          <p
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: theme.accent }}
          >
            {isCinematic ? "MENU" : "Our Services"}
          </p>
          <h2
            className={`mt-4 ${theme.fontDisplay} text-3xl md:text-5xl`}
            style={{ color: theme.text }}
          >
            {isCinematic ? "THE COLLECTION" : "Curated Luxury Treatments"}
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl p-8 transition-shadow"
                style={{
                  ...cardStyle,
                  boxShadow: `0 0 0 transparent`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px ${theme.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="mb-4 h-px w-10"
                  style={{ background: theme.accent }}
                />
                <h3
                  className={`${theme.fontDisplay} text-xl`}
                  style={{ color: theme.text }}
                >
                  {s.name}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className="text-sm font-medium"
                    style={{ color: theme.accent }}
                  >
                    {s.price}
                  </span>
                  <span className="text-xs" style={{ color: theme.muted }}>
                    {s.duration}
                  </span>
                </div>
                <a
                  href="#book"
                  className="mt-6 inline-block text-xs tracking-[0.2em] uppercase transition-colors"
                  style={{ color: theme.muted }}
                  onMouseEnter={(e) => (e.target.style.color = theme.accent)}
                  onMouseLeave={(e) => (e.target.style.color = theme.muted)}
                >
                  Reserve →
                </a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
