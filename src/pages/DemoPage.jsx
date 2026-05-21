import { useParams, Navigate } from "react-router-dom";
import { getThemeBySlug } from "../data/themes";
import SalonDemo from "../components/demo/SalonDemo";

export default function DemoPage() {
  const { slug } = useParams();
  const theme = getThemeBySlug(slug);

  if (!theme) {
    return <Navigate to="/" replace />;
  }

  return <SalonDemo theme={theme} />;
}
