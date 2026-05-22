import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const NAV_OFFSET = 88;

export default function ShowcaseNavbar({ light = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  /** light = white bar + dark text | dark | accent = glass bar + light text */
  const [navTheme, setNavTheme] = useState(light ? "light" : "dark");

  const updateNavTheme = useCallback(() => {
    if (!light) {
      setNavTheme(window.scrollY > 50 ? "dark" : "dark");
      return;
    }

    const sections = document.querySelectorAll("[data-nav-theme]");
    if (!sections.length) {
      setNavTheme("light");
      return;
    }

    const probe = window.scrollY + NAV_OFFSET;
    let active = sections[0].dataset.navTheme || "light";

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (probe >= top && probe < bottom) {
        active = section.dataset.navTheme;
      }
    });

    setNavTheme(active);
  }, [light]);

  useEffect(() => {
    updateNavTheme();
    window.addEventListener("scroll", updateNavTheme, { passive: true });
    window.addEventListener("resize", updateNavTheme);
    return () => {
      window.removeEventListener("scroll", updateNavTheme);
      window.removeEventListener("resize", updateNavTheme);
    };
  }, [updateNavTheme]);

  const useLightBar = navTheme === "light";

  const navShell = useLightBar
    ? "rounded-2xl border border-neutral-200/90 bg-white/95 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md"
    : "glass-panel rounded-2xl border border-white/10 py-3 shadow-2xl";

  const logoMain = useLightBar ? "text-neutral-900" : "text-white";
  const logoAccent = useLightBar ? "text-[#8B6914]" : "text-[#c9a962]";
  const linkClass = useLightBar
    ? "text-xs font-semibold tracking-[0.25em] text-neutral-800 uppercase transition-colors hover:text-neutral-950"
    : "text-xs font-semibold tracking-[0.25em] text-white/90 uppercase transition-colors hover:text-[#c9a962]";
  const ctaClass = useLightBar
    ? "hidden rounded-full bg-neutral-900 px-6 py-2.5 text-xs font-semibold tracking-[0.2em] text-white uppercase shadow-md transition-all hover:bg-neutral-800 md:inline-block"
    : "hidden rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-xs font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm transition-all hover:bg-white/20 md:inline-block";
  const menuBar = useLightBar ? "bg-neutral-900" : "bg-white";

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 md:px-8 ${navShell}`}
      >
        <Link to="/" className="group flex items-center gap-2">
          <span className={`font-editorial text-xl font-bold tracking-[0.15em] md:text-2xl ${logoMain}`}>
            LUXE<span className={`${logoAccent} transition-colors group-hover:opacity-80`}>ATELIER</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#book" className={ctaClass}>
          Book Now
        </a>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`h-0.5 w-6 ${menuBar} transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 ${menuBar} transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 ${menuBar} transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mx-4 mt-2 rounded-2xl border p-6 md:hidden ${
            useLightBar ? "border-neutral-200 bg-white shadow-xl" : "glass-panel border-white/10"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium tracking-widest uppercase ${
                useLightBar ? "text-neutral-800" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
