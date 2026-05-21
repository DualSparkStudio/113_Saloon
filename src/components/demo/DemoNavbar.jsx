import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DemoNavbar({ theme }) {
  const [scrolled, setScrolled] = useState(false);
  const isLight = theme.light;
  const isGlass = theme.style === "glass";
  const isCinematic = theme.style === "cinematic";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "About", "Team", "Gallery", "Book"];

  const navStyle = isGlass
    ? scrolled
      ? { background: "rgba(255,255,255,0.08)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.12)" }
      : {}
    : isLight
    ? scrolled
      ? { background: "rgba(255,255,255,0.95)", boxShadow: "0 4px 30px rgba(0,0,0,0.08)" }
      : {}
    : scrolled
    ? { background: `${theme.surface}`, borderBottom: `1px solid ${theme.accent}22` }
    : {};

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-6 py-4 transition-all duration-500 ${isCinematic ? "uppercase tracking-widest" : ""}`}
        style={navStyle}
      >
        <Link
          to="/"
          className={`${theme.fontDisplay} text-lg md:text-xl tracking-wider`}
          style={{ color: theme.text }}
        >
          {theme.brand}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-100"
                style={{ color: theme.muted, opacity: 0.8 }}
                onMouseEnter={(e) => (e.target.style.color = theme.accent)}
                onMouseLeave={(e) => (e.target.style.color = theme.muted)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#book"
          className="rounded-full px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all hover:scale-105"
          style={{
            background: isCinematic ? "transparent" : theme.accent,
            color: isLight || isCinematic ? (isCinematic ? theme.text : "#1a1a1a") : "#000",
            border: isCinematic ? `1px solid ${theme.text}` : "none",
          }}
        >
          Reserve
        </a>
      </nav>
    </motion.header>
  );
}
