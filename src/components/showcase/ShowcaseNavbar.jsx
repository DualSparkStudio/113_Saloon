import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ShowcaseNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Themes", href: "#themes" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 md:px-10 ${
          scrolled
            ? "glass-panel rounded-2xl py-3 shadow-2xl"
            : ""
        }`}
      >
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-display text-xl tracking-[0.2em] text-white md:text-2xl">
            LUXE<span className="text-[#c9a962] transition-colors group-hover:text-[#e8d5a3]">ATELIER</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-[0.25em] text-white/60 uppercase transition-colors hover:text-[#c9a962]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#themes"
          className="hidden rounded-full border border-[#c9a962]/40 bg-[#c9a962]/10 px-6 py-2.5 text-xs tracking-[0.2em] text-[#c9a962] uppercase backdrop-blur-sm transition-all hover:bg-[#c9a962]/20 hover:shadow-[0_0_30px_rgba(201,169,98,0.3)] md:inline-block"
        >
          Explore Themes
        </a>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`h-px w-6 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-px w-6 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel mx-4 mt-2 rounded-2xl p-6 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm tracking-widest text-white/70 uppercase"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
