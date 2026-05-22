import { motion } from "framer-motion";
import { stats } from "../../data/sharedContent";
import { images } from "../../data/images";
import AnimatedCounter from "../ui/AnimatedCounter";
import SafeImage from "../ui/SafeImage";
import ScrollReveal from "../ui/ScrollReveal";
import SalonSectionHeader from "./SalonSectionHeader";

export default function SalonAbout() {
  return (
    <section id="about" data-nav-theme="dark" className="scroll-mt-24 bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl md:rounded-3xl">
              <SafeImage src={images.hero.interior} alt="Luxe Atelier interior" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-editorial text-xs font-bold uppercase tracking-widest text-white/80">
                Prestige District · Suite 100
              </p>
            </div>
          </ScrollReveal>

          <div>
            <SalonSectionHeader
              dark
              label="Our Story"
              title="Where Art Meets Beauty"
              description="Founded on the belief that every guest deserves a transformative visit, Luxe Atelier blends cutting-edge technique with timeless elegance — beauty that speaks before you enter the room."
            />
            <ScrollReveal delay={0.15}>
              <p className="text-sm leading-relaxed text-white/50 md:text-base">
                From private suites to bespoke consultations, every detail is orchestrated for those who
                accept nothing less than perfection. Our master artisans partner exclusively with Oribe,
                Kérastase, and Davines.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {stats.map((stat) => {
                  const isWide = stat.value.replace(/,/g, "").length > 5;
                  return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.03 }}
                    className="flex min-w-0 flex-col items-center justify-center rounded-2xl bg-white/5 px-2 py-4 text-center ring-1 ring-white/10 sm:px-3"
                  >
                    <p
                      className={`w-full font-editorial font-black text-[#c9a962] ${
                        isWide
                          ? "text-base sm:text-lg md:text-xl"
                          : "text-xl sm:text-2xl md:text-3xl"
                      }`}
                    >
                      <AnimatedCounter value={stat.value} duration={2200} />
                    </p>
                    <p className="mt-1.5 px-0.5 text-[9px] uppercase leading-tight tracking-wider text-white/45 sm:text-[10px]">
                      {stat.label}
                    </p>
                  </motion.div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
