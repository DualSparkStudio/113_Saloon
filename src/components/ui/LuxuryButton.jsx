import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LuxuryButton({
  children,
  to,
  href,
  onClick,
  variant = "gold",
  className = "",
  size = "md",
}) {
  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const variants = {
    gold:
      "bg-gradient-to-r from-amber-600/90 via-[#c9a962] to-amber-700/90 text-black font-medium shadow-[0_0_30px_rgba(201,169,98,0.3)] hover:shadow-[0_0_50px_rgba(201,169,98,0.5)]",
    outline:
      "border border-white/20 text-white hover:border-[#c9a962]/60 hover:text-[#c9a962] bg-white/5 backdrop-blur-sm",
    ghost: "text-white/80 hover:text-[#c9a962] underline-offset-4 hover:underline",
  };

  const base = `inline-flex items-center justify-center gap-2 rounded-full tracking-widest uppercase transition-all duration-500 ${sizes[size]} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    className: base,
  };

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={base}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
