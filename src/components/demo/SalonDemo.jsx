import { useEffect } from "react";
import DemoNavbar from "./DemoNavbar";
import DemoHero from "./DemoHero";
import DemoServices from "./DemoServices";
import DemoAbout from "./DemoAbout";
import DemoTeam from "./DemoTeam";
import DemoTestimonials from "./DemoTestimonials";
import DemoGallery from "./DemoGallery";
import DemoBooking from "./DemoBooking";
import DemoContact from "./DemoContact";
import DemoFooter from "./DemoFooter";

export default function SalonDemo({ theme }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.background = theme.bg;
    document.body.style.color = theme.text;
    return () => {
      document.body.style.background = "#050505";
      document.body.style.color = "#f5f5f5";
    };
  }, [theme]);

  const isGlass = theme.style === "glass";

  return (
    <div
      className={`min-h-screen ${theme.fontBody}`}
      style={{ background: theme.bg, color: theme.text }}
      data-theme={theme.style}
    >
      <DemoNavbar theme={theme} />
      <DemoHero theme={theme} />
      <DemoServices theme={theme} />
      <DemoAbout theme={theme} />
      <DemoTeam theme={theme} />
      <DemoTestimonials theme={theme} />
      <DemoGallery theme={theme} />
      <DemoBooking theme={theme} />
      <DemoContact theme={theme} />
      <DemoFooter theme={theme} />

      {isGlass && (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full opacity-30 blur-[120px]"
            style={{ background: theme.accent }}
          />
          <div
            className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full opacity-20 blur-[100px]"
            style={{ background: "#818cf8" }}
          />
        </div>
      )}
    </div>
  );
}
