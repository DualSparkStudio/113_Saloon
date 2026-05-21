import ShowcaseNavbar from "../components/showcase/ShowcaseNavbar";
import ShowcaseHero from "../components/showcase/ShowcaseHero";
import LayoutThemeGrid from "../components/showcase/LayoutThemeGrid";
import ExperienceSection from "../components/showcase/ExperienceSection";
import ShowcaseFooter from "../components/showcase/ShowcaseFooter";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#050505]">
      <ShowcaseNavbar />
      <ShowcaseHero />
      <LayoutThemeGrid />
      <ExperienceSection />
      <ShowcaseFooter />
    </div>
  );
}
