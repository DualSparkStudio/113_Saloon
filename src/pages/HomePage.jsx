import ShowcaseNavbar from "../components/showcase/ShowcaseNavbar";
import ShowcaseHero from "../components/showcase/ShowcaseHero";
import SalonServices from "../components/salon/SalonServices";
import SalonAbout from "../components/salon/SalonAbout";
import SalonTeam from "../components/salon/SalonTeam";
import SalonGallery from "../components/salon/SalonGallery";
import SalonTestimonials from "../components/salon/SalonTestimonials";
import SalonBooking from "../components/salon/SalonBooking";
import SalonFooter from "../components/salon/SalonFooter";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#f0f0f0]">
      <ShowcaseNavbar light />
      <ShowcaseHero />
      <SalonServices />
      <SalonAbout />
      <SalonTeam />
      <SalonGallery />
      <SalonTestimonials />
      <SalonBooking />
      <SalonFooter />
    </div>
  );
}
