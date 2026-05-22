import { motion } from "framer-motion";
import { services } from "../../data/sharedContent";
import ScrollReveal from "../ui/ScrollReveal";
import SalonSectionHeader from "./SalonSectionHeader";

export default function SalonServices() {
  return (
    <section id="services" data-nav-theme="light" className="scroll-mt-24 bg-[#f0f0f0] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SalonSectionHeader
          label="Our Menu"
          title="Signature Treatments"
          description="Precision cuts, couture colour, and restorative rituals — each service is tailored in a private suite with premium product lines."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-lg md:rounded-3xl md:p-8"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-[#c41e3a]" />
                <h3 className="font-editorial text-xl font-bold uppercase leading-tight text-neutral-900 md:text-2xl">
                  {s.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
                <div className="mt-6 flex items-end justify-between border-t border-neutral-100 pt-4">
                  <span className="font-editorial text-lg font-bold text-[#c41e3a]">{s.price}</span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">{s.duration}</span>
                </div>
                <a
                  href="#book"
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-neutral-800 transition hover:text-[#c41e3a]"
                >
                  Reserve →
                </a>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
