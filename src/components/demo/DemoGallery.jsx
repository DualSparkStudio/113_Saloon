import { galleryImages } from "../../data/themes";
import ScrollReveal from "../ui/ScrollReveal";
import { motion } from "framer-motion";

export default function DemoGallery({ theme }) {
  const isCinematic = theme.style === "cinematic";

  return (
    <section id="gallery" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ScrollReveal className="mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: theme.accent }}
          >
            Gallery
          </p>
          <h2
            className={`mt-4 ${theme.fontDisplay} text-3xl md:text-5xl`}
            style={{ color: theme.text }}
          >
            {isCinematic ? "THE EDITORIAL" : "Moments of Beauty"}
          </h2>
        </ScrollReveal>

        <div
          className={`grid gap-3 ${
            isCinematic
              ? "grid-cols-2 md:grid-cols-3"
              : "grid-cols-2 md:grid-cols-3"
          }`}
        >
          {galleryImages.map((img, i) => (
            <ScrollReveal
              key={img}
              delay={i * 0.05}
              className={i === 0 && isCinematic ? "col-span-2 row-span-2" : ""}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`overflow-hidden rounded-xl ${
                  i === 0 && isCinematic ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
