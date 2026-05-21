import { Link } from "react-router-dom";

export default function BackToShowcase({ className = "", style = {} }) {
  return (
    <Link
      to="/#themes"
      className={`inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-80 ${className}`}
      style={style}
    >
      ← Back to Showcase
    </Link>
  );
}
