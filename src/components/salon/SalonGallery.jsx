import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { images } from "../../data/images";
import SafeImage from "../ui/SafeImage";
import SalonSectionHeader from "./SalonSectionHeader";

const salonCuts = images.salonGallery;

/** Bento collage — 8 salon haircut / styling photos */
const GALLERY_TILES = [
  {
    src: salonCuts[0],
    alt: "Stylist cutting client hair in salon",
    className: "col-span-2 row-span-2 col-start-1 row-start-1",
    origin: "15% 20%",
  },
  {
    src: salonCuts[1],
    alt: "Precision haircut with clippers",
    className: "col-span-6 row-span-3 col-start-3 row-start-1",
    origin: "50% 25%",
  },
  {
    src: salonCuts[2],
    alt: "Barbers working in modern salon",
    className: "col-span-4 row-span-1 col-start-9 row-start-1",
    origin: "85% 15%",
  },
  {
    src: salonCuts[3],
    alt: "Close-up hair styling and scissors",
    className: "col-span-4 row-span-2 col-start-9 row-start-2",
    origin: "88% 35%",
  },
  {
    src: salonCuts[4],
    alt: "Salon interior with styling chair",
    className: "col-span-3 row-span-4 col-start-1 row-start-3",
    origin: "12% 70%",
  },
  {
    src: salonCuts[5],
    alt: "Haircut fade detail",
    className: "col-span-4 row-span-2 col-start-4 row-start-4",
    origin: "42% 75%",
  },
  {
    src: salonCuts[6],
    alt: "Stylist finishing a client's look",
    className: "col-span-2 row-span-4 col-start-8 row-start-3",
    origin: "68% 65%",
  },
  {
    src: salonCuts[7],
    alt: "Professional salon grooming session",
    className: "col-span-4 row-span-2 col-start-9 row-start-4",
    origin: "90% 80%",
  },
];

function GalleryTile({ src, alt, className, origin, index, inView }) {
  return (
    <motion.div
      className={`relative overflow-hidden bg-black ${className}`}
      style={{ transformOrigin: origin }}
      initial={{ scale: 2.2, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 2.2, opacity: 0 }}
      transition={{
        duration: 1.1,
        delay: 0.08 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <SafeImage src={src} alt={alt} className="h-full w-full object-cover" />
    </motion.div>
  );
}

export default function SalonGallery() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, amount: 0.2 });

  return (
    <section id="gallery" data-nav-theme="dark" className="scroll-mt-24 bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SalonSectionHeader
          dark
          label="Portfolio"
          title="Recent Work"
          description="Real cuts, colour, and styling from our chair — precision work you can expect in-studio."
        />

        <div ref={gridRef}>
          <motion.div
            className="relative hidden overflow-hidden md:grid md:h-[min(82vh,780px)] md:min-h-[560px] md:grid-cols-12 md:grid-rows-6 md:gap-2.5"
            initial={{ scale: 1.12 }}
            animate={inView ? { scale: 1 } : { scale: 1.12 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {GALLERY_TILES.map((tile, i) => (
              <GalleryTile key={tile.src} {...tile} index={i} inView={inView} />
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-2 md:hidden"
            initial={{ scale: 1.08 }}
            animate={inView ? { scale: 1 } : { scale: 1.08 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {salonCuts.map((src, i) => (
              <motion.div
                key={src}
                className={`relative overflow-hidden bg-black ${i === 1 ? "col-span-2 aspect-[16/10]" : "aspect-square"}`}
                style={{ transformOrigin: "50% 50%" }}
                initial={{ scale: 1.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <SafeImage
                  src={src}
                  alt={GALLERY_TILES[i]?.alt ?? "Salon haircut"}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
