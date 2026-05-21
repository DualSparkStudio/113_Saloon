import { useThemePalette } from "../../hooks/useThemePalette";
import CinematicScrollLayout from "./CinematicScrollLayout";
import EditorialSplitLayout from "./EditorialSplitLayout";
import MinimalZenLayout from "./MinimalZenLayout";
import BentoMosaicLayout from "./BentoMosaicLayout";
import MagazineParallaxLayout from "./MagazineParallaxLayout";
import BrutalistFashionLayout from "./BrutalistFashionLayout";

const LAYOUTS = {
  cinematic: CinematicScrollLayout,
  editorial: EditorialSplitLayout,
  minimal: MinimalZenLayout,
  bento: BentoMosaicLayout,
  magazine: MagazineParallaxLayout,
  brutalist: BrutalistFashionLayout,
};

export default function LayoutDemoRouter({ theme }) {
  const palette = useThemePalette();
  const Component = LAYOUTS[theme.layoutType];
  if (!Component) return null;
  return <Component theme={theme} palette={palette} />;
}
