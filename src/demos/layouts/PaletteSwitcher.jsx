import { Link, useSearchParams } from "react-router-dom";
import { colorVariants } from "../../data/colorVariants";
import PaletteSwatch from "../../components/ui/PaletteSwatch";
import BackToShowcase from "./BackToShowcase";

export default function PaletteSwitcher({ themeSlug, palette }) {
  const [searchParams] = useSearchParams();
  const current = searchParams.get("palette") || palette.slug;

  return (
    <div
      className="sticky top-0 z-[100] border-b px-4 py-3 backdrop-blur-xl"
      style={{
        background: palette.light ? `${palette.bg}f2` : `${palette.bg}ee`,
        borderColor: `${palette.accent}44`,
        color: palette.text,
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <BackToShowcase style={{ color: palette.accent }} />
          <div className="min-w-0">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Colour palette</p>
            <p className="text-sm font-medium truncate" style={{ color: palette.accent }}>
              {palette.name}
            </p>
          </div>
          <PaletteSwatch variant={palette} active size={28} />
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          {colorVariants.map((c) => (
            <Link
              key={c.slug}
              to={`/theme/${themeSlug}?palette=${c.slug}`}
              replace
              aria-current={current === c.slug ? "true" : undefined}
            >
              <PaletteSwatch variant={c} active={current === c.slug} size={36} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
