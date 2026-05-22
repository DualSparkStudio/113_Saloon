import { salonInfo, faqs } from "../../data/sharedContent";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#book" },
];

export default function SalonFooter() {
  return (
    <footer id="contact" data-nav-theme="dark" className="scroll-mt-24 border-t border-white/10 bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-editorial text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
              Luxe<span className="text-[#c9a962]">Atelier</span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              A luxury salon experience — precision styling, couture colour, and restorative rituals in
              the heart of the Prestige District.
            </p>
          </div>

          <div>
            <p className="font-editorial text-[10px] font-bold tracking-[0.3em] text-[#c9a962] uppercase">
              Visit Us
            </p>
            <address className="mt-4 space-y-2 text-sm not-italic text-white/55">
              <p>{salonInfo.address}</p>
              <p>
                <a href={`tel:${salonInfo.phone}`} className="transition hover:text-white">
                  {salonInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${salonInfo.email}`} className="transition hover:text-white">
                  {salonInfo.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="font-editorial text-[10px] font-bold tracking-[0.3em] text-[#c9a962] uppercase">
              Hours
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/55">
              {salonInfo.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-white/80">{h.days}</span>
                  <br />
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-8">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-white/40 transition hover:text-[#c9a962]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/30">© 2026 Luxe Atelier Salon. All rights reserved.</p>
          <p className="text-xs text-white/25">{faqs[3]?.a}</p>
        </div>
      </div>
    </footer>
  );
}
