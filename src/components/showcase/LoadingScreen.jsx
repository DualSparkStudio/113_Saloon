import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";
import BrandWordmark from "../brand/BrandWordmark";

export const LOADER_DURATION_MS = 2400;

const easeLuxury = [0.22, 1, 0.36, 1];

export default function LoadingScreen({ isLoading }) {
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, (v) => `${v}%`);
  const [percentLabel, setPercentLabel] = useState(0);

  useMotionValueEvent(progress, "change", (v) => setPercentLabel(Math.round(v)));

  useEffect(() => {
    if (!isLoading) return undefined;
    progress.set(0);
    setPercentLabel(0);
    const controls = animate(progress, 100, {
      duration: LOADER_DURATION_MS / 1000,
      ease: easeLuxury,
    });
    return () => controls.stop();
  }, [isLoading, progress]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="loader-screen fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden"
          initial={false}
          exit={{ opacity: 1 }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-[#f4f2ed]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201, 169, 98, 0.18), transparent 65%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(196, 30, 58, 0.06), transparent 50%)",
            }}
          />
          <div className="noise-overlay pointer-events-none absolute inset-0" />

          {/* Exit — curtain rises to reveal the site */}
          <motion.div
            className="absolute inset-0 z-30 bg-[#f4f2ed]"
            initial={{ y: "100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />

          <motion.div
            className="relative z-10 flex w-full max-w-sm flex-col items-center px-8"
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: easeLuxury }}
          >
            {/* Top ornament */}
            <motion.div
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.15, duration: 0.8, ease: easeLuxury }}
            >
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c9a962]/80" />
              <span className="font-editorial text-[10px] font-bold tracking-[0.45em] text-[#c41e3a] uppercase">
                Luxury Salon
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#c9a962]/80" />
            </motion.div>

            {/* Monogram */}
            <motion.div
              className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a962]/30 bg-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.7, ease: easeLuxury }}
            >
              <span className="font-display text-xl font-semibold tracking-wide text-neutral-900">LA</span>
              <motion.span
                className="absolute inset-0 rounded-full border border-[#c9a962]/50"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 1.35, opacity: 0 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: easeLuxury }}
            >
              <BrandWordmark size="lg" stacked className="mx-auto" />
            </motion.div>

            <motion.p
              className="mt-4 font-sans text-[11px] tracking-[0.35em] text-neutral-500 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Est. 2010 · Prestige District
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="mt-10 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="relative h-px w-full overflow-hidden bg-neutral-300/60">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#c41e3a] via-[#c9a962] to-[#c9a962]"
                  style={{ width: progressWidth }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase">Preparing</span>
                <span className="font-editorial text-[10px] font-bold tracking-[0.2em] text-neutral-600 tabular-nums">
                  {percentLabel}%
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom accent */}
          <motion.div
            className="absolute bottom-0 left-0 z-10 h-0.5 bg-[#c41e3a]"
            style={{ width: progressWidth }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
