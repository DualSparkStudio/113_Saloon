import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function parseStatValue(value) {
  const cleaned = String(value).trim();
  const suffixMatch = cleaned.match(/^([\d,.]+)(\+?)$/);
  const numericPart = (suffixMatch?.[1] ?? cleaned).replace(/,/g, "");
  const end = parseFloat(numericPart) || 0;
  const suffix = suffixMatch?.[2] ?? "";
  const decimals = numericPart.includes(".") ? (numericPart.split(".")[1]?.length ?? 1) : 0;
  const useComma = cleaned.includes(",");

  return { end, suffix, decimals, useComma };
}

function formatNumber(current, { decimals, useComma }) {
  if (decimals > 0) {
    return current.toFixed(decimals);
  }
  if (useComma) {
    return Math.round(current).toLocaleString("en-US");
  }
  return String(Math.round(current));
}

export default function AnimatedCounter({ value, duration = 2000, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const parsed = parseStatValue(value);
  const [number, setNumber] = useState(() => formatNumber(0, parsed));

  useEffect(() => {
    if (!inView) return;

    const target = parseStatValue(value);
    let frameId = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = target.end * eased;
      setNumber(formatNumber(current, target));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setNumber(formatNumber(target.end, target));
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, value, duration]);

  return (
    <span
      ref={ref}
      className={`inline-flex max-w-full items-baseline justify-center gap-px leading-none tabular-nums ${className}`}
    >
      <span>{number}</span>
      {parsed.suffix ? (
        <span className="shrink-0 text-[0.72em] font-black leading-none">{parsed.suffix}</span>
      ) : null}
    </span>
  );
}
