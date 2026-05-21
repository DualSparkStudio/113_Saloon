/** Swatch matches applied theme: background fill + accent border ring */
export default function PaletteSwatch({ variant, active, size = 36, className = "" }) {
  return (
    <span
      title={variant.name}
      role="img"
      aria-label={variant.name}
      className={`inline-block rounded-full border-[3px] shrink-0 transition-all hover:scale-110 ${className}`}
      style={{
        width: size,
        height: size,
        background: variant.bg,
        borderColor: variant.accent,
        boxShadow: active
          ? `0 0 0 2px ${variant.bg}, 0 0 0 4px ${variant.accent}, 0 0 16px ${variant.glow}`
          : `inset 0 0 0 1px ${variant.light ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)"}`,
      }}
    />
  );
}
