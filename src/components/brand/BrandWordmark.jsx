/**
 * Primary logotype — Playfair Display for an editorial luxury feel.
 * Section headings keep font-editorial (Oswald); brand name uses serif only.
 */
const SIZES = {
  sm: "text-[1.05rem] md:text-[1.5rem]",
  md: "text-xl md:text-[1.75rem]",
  lg: "text-4xl md:text-[2.75rem]",
};

export default function BrandWordmark({
  size = "md",
  light = false,
  stacked = false,
  className = "",
}) {
  const mainColor = light ? "text-white" : "text-neutral-900";
  const accentColor = light ? "text-[#c9a962]" : "text-[#8B6914]";

  const word = (
    <>
      <span className={mainColor}>Luxe</span>
      <span className={`italic ${accentColor}`}> Atelier</span>
    </>
  );

  if (stacked) {
    return (
      <span
        className={`font-display block text-center font-semibold leading-[1.05] tracking-[0.02em] ${SIZES[size]} ${className}`}
      >
        <span className={`block ${mainColor}`}>Luxe</span>
        <span className={`block italic ${accentColor}`}>Atelier</span>
      </span>
    );
  }

  return (
    <span
      className={`font-display inline-block font-semibold leading-none tracking-[0.02em] ${SIZES[size]} ${className}`}
    >
      {word}
    </span>
  );
}
