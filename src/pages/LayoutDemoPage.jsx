import { useParams, useSearchParams, Navigate } from "react-router-dom";
import { getLayoutBySlug } from "../data/layoutThemes";
import LayoutDemoRouter from "../demos/layouts/LayoutDemoRouter";

export default function LayoutDemoPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const paletteSlug = searchParams.get("palette") || "black-gold";
  const theme = getLayoutBySlug(slug);

  if (!theme) return <Navigate to="/#themes" replace />;

  return <LayoutDemoRouter key={`${slug}-${paletteSlug}`} theme={theme} />;
}
