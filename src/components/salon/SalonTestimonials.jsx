import { motion } from "framer-motion";
import { testimonials } from "../../data/sharedContent";
import ScrollReveal from "../ui/ScrollReveal";
import SalonSectionHeader from "./SalonSectionHeader";

export default function SalonTestimonials() {
  return (
    <section data-nav-theme="light" className="bg-[#f0f0f0] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SalonSectionHeader
          align="center"
          label="Client Love"
          title="What They Say"
          description="Guests who expect editorial results and white-glove service."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.1}>
              <motion.blockquote
                whileHover={{ y: -4 }}
                className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-lg md:rounded-3xl md:p-8"
              >
                <p className="font-editorial text-4xl leading-none text-[#c41e3a]">&ldquo;</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700 md:text-base">{t.quote}</p>
                <footer className="mt-6 border-t border-neutral-100 pt-4">
                  <cite className="font-editorial text-sm font-bold uppercase not-italic text-neutral-900">
                    {t.author}
                  </cite>
                  <p className="text-xs text-neutral-500">{t.title}</p>
                </footer>
              </motion.blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
