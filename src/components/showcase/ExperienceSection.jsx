import ScrollReveal from "../ui/ScrollReveal";
import { motion } from "framer-motion";

const features = [
  { title: "6 Unique Layouts", desc: "Cinematic scroll, editorial split, minimal tabs, bento grid, magazine parallax, brutalist fashion." },
  { title: "8 Colours Per Theme", desc: "Switch palettes inside any demo — gold, rose, marble, platinum and more." },
  { title: "Full Live Demos", desc: "Every theme opens a complete interactive salon experience with real imagery." },
  { title: "Instant Impression", desc: "Convert salon owners in seconds with million-dollar aesthetics." },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-xs tracking-[0.5em] text-[#c9a962]/70 uppercase">
              The Experience
            </p>
            <h2 className="mt-4 font-display text-3xl text-white md:text-5xl leading-tight">
              A Digital Showroom
              <br />
              <span className="text-white/40 italic">Built for Elite Brands</span>
            </h2>
            <p className="mt-6 text-white/45 leading-relaxed">
              This is not a template gallery. It is a luxury digital design studio
              presentation — engineered to make salon owners feel they are browsing
              the world&apos;s most exclusive beauty destinations.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-panel rounded-2xl p-6 transition-shadow hover:shadow-[0_0_40px_rgba(201,169,98,0.1)]"
                >
                  <div className="mb-4 h-px w-8 bg-[#c9a962]/60" />
                  <h3 className="font-display text-lg text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/40">{f.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
