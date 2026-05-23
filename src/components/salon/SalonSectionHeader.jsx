import ScrollReveal from "../ui/ScrollReveal";

export default function SalonSectionHeader({
  label,
  title,
  description,
  dark = false,
  accent = false,
  align = "left",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const labelColor = accent ? "#fff" : dark ? "#c9a962" : "#c41e3a";
  const titleColor = accent || dark ? "#fff" : "#111";
  const descColor = accent ? "rgba(255,255,255,0.8)" : dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)";

  return (
    <ScrollReveal className={`mb-8 max-w-2xl max-md:mb-6 md:mb-16 ${alignClass}`}>
      <p
        className="font-editorial text-[10px] font-bold tracking-[0.35em] uppercase md:text-xs"
        style={{ color: labelColor }}
      >
        {label}
      </p>
      <h2
        className="mt-2 font-editorial text-2xl font-black uppercase leading-[0.95] tracking-tight max-md:text-[1.65rem] md:mt-3 md:text-5xl"
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed md:text-base" style={{ color: descColor }}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
