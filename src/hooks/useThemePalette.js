import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { colorVariants, getColorBySlug } from "../data/colorVariants";

const DEFAULT = colorVariants[0];

export function useThemePalette() {
  const [searchParams] = useSearchParams();
  const paletteSlug = searchParams.get("palette");
  const palette = getColorBySlug(paletteSlug) || DEFAULT;

  useEffect(() => {
    document.body.style.background = palette.bg;
    document.body.style.color = palette.text;
    return () => {
      document.body.style.background = "#050505";
      document.body.style.color = "#f5f5f5";
    };
  }, [palette]);

  return palette;
}
