import { useParams, Navigate } from "react-router-dom";
import { getColorBySlug } from "../data/colorVariants";
import ColorVariantDemo from "../demos/color/ColorVariantDemo";

export default function ColorDemoPage() {
  const { slug } = useParams();
  const variant = getColorBySlug(slug);

  if (!variant) return <Navigate to="/#color-variants" replace />;

  return <ColorVariantDemo variant={variant} />;
}
