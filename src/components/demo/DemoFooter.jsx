import { Link } from "react-router-dom";

export default function DemoFooter({ theme }) {
  return (
    <footer
      className="py-16 border-t"
      style={{
        borderColor: `${theme.accent}15`,
        background: theme.light ? theme.surface : theme.surface,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p
              className={`${theme.fontDisplay} text-xl tracking-wider`}
              style={{ color: theme.text }}
            >
              {theme.brand}
            </p>
            <p className="mt-2 text-sm" style={{ color: theme.muted }}>
              {theme.tagline}
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all hover:scale-105"
            style={{
              borderColor: `${theme.accent}44`,
              color: theme.accent,
            }}
          >
            ← Back to Showcase
          </Link>
        </div>

        <div
          className="mt-12 pt-8 border-t text-center text-xs"
          style={{ borderColor: `${theme.accent}15`, color: theme.muted }}
        >
          © 2026 {theme.brand}. Demo theme by LuxeAtelier.
        </div>
      </div>
    </footer>
  );
}
