import { motion } from "framer-motion";
import { services } from "../../data/sharedContent";
import ScrollReveal from "../ui/ScrollReveal";
import SafeImage from "../ui/SafeImage";
import SalonSectionHeader from "./SalonSectionHeader";

export default function SalonServices() {
  return (
    <section id="services" data-nav-theme="light" className="scroll-mt-24 bg-white pt-4 pb-16 md:bg-[#f0f0f0] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SalonSectionHeader
          label="Our Menu"
          title="Signature Treatments"
          description="Precision cuts, couture colour, and restorative rituals — each service is tailored in a private suite with premium product lines."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:rounded-3xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <SafeImage
                    src={s.image}
                    alt={s.imageAlt || s.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-neutral-800 uppercase backdrop-blur-sm">
                    {s.duration}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="mb-3 h-1 w-10 rounded-full bg-[#c41e3a]" />
                  <h3 className="font-editorial text-xl font-bold uppercase leading-tight text-neutral-900 md:text-2xl">
                    {s.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
                  <div className="mt-5 flex items-end justify-between border-t border-neutral-100 pt-4">
                    <span className="font-editorial text-lg font-bold text-[#c41e3a]">{s.price}</span>
                  </div>
                  <a
                    href="#book"
                    className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-neutral-800 transition hover:text-[#c41e3a]"
                  >
                    Reserve →
                  </a>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
