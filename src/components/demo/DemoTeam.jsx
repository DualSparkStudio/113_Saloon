import { team } from "../../data/themes";
import ScrollReveal from "../ui/ScrollReveal";
import { motion } from "framer-motion";

export default function DemoTeam({ theme }) {
  const isCinematic = theme.style === "cinematic";

  return (
    <section id="team" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ScrollReveal className="mb-16 text-center">
          <p
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: theme.accent }}
          >
            {isCinematic ? "THE CAST" : "Master Artisans"}
          </p>
          <h2
            className={`mt-4 ${theme.fontDisplay} text-3xl md:text-5xl`}
            style={{ color: theme.text }}
          >
            Meet Our Stylists
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className="relative mx-auto aspect-[3/4] max-w-[280px] overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(to top, ${theme.accent}88, transparent 50%)`,
                    }}
                  />
                </div>
                <h3
                  className={`mt-5 ${theme.fontDisplay} text-lg`}
                  style={{ color: theme.text }}
                >
                  {member.name}
                </h3>
                <p className="text-sm" style={{ color: theme.accent }}>
                  {member.role}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
