import ScrollReveal from "../ui/ScrollReveal";
import { motion } from "framer-motion";

export default function DemoBooking({ theme }) {
  const isGlass = theme.style === "glass";

  const formStyle = isGlass
    ? {
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.12)",
      }
    : {
        background: theme.light ? theme.surface : theme.surface,
        border: `1px solid ${theme.accent}22`,
      };

  const inputClass =
    "w-full rounded-xl px-5 py-4 text-sm outline-none transition-all focus:ring-2";

  return (
    <section id="book" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <ScrollReveal className="text-center mb-12">
          <p
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: theme.accent }}
          >
            Reservations
          </p>
          <h2
            className={`mt-4 ${theme.fontDisplay} text-3xl md:text-5xl`}
            style={{ color: theme.text }}
          >
            Book Your Experience
          </h2>
          <p className="mt-4" style={{ color: theme.muted }}>
            Secure your private appointment with our concierge team.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.form
            className="rounded-3xl p-8 md:p-12 space-y-5"
            style={formStyle}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className={inputClass}
                style={{
                  background: theme.light ? "#f5f5f5" : "rgba(255,255,255,0.05)",
                  color: theme.text,
                  border: `1px solid ${theme.accent}22`,
                }}
              />
              <input
                type="email"
                placeholder="Email Address"
                className={inputClass}
                style={{
                  background: theme.light ? "#f5f5f5" : "rgba(255,255,255,0.05)",
                  color: theme.text,
                  border: `1px solid ${theme.accent}22`,
                }}
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className={inputClass}
              style={{
                background: theme.light ? "#f5f5f5" : "rgba(255,255,255,0.05)",
                color: theme.text,
                border: `1px solid ${theme.accent}22`,
              }}
            />
            <select
              className={inputClass}
              style={{
                background: theme.light ? "#f5f5f5" : "rgba(255,255,255,0.05)",
                color: theme.text,
                border: `1px solid ${theme.accent}22`,
              }}
              defaultValue=""
            >
              <option value="" disabled>Select Service</option>
              <option>Signature Cut & Style</option>
              <option>Balayage & Color</option>
              <option>Luxury Treatment</option>
              <option>Bridal Experience</option>
            </select>
            <input
              type="date"
              className={inputClass}
              style={{
                background: theme.light ? "#f5f5f5" : "rgba(255,255,255,0.05)",
                color: theme.text,
                border: `1px solid ${theme.accent}22`,
              }}
            />
            <textarea
              placeholder="Special requests..."
              rows={4}
              className={inputClass}
              style={{
                background: theme.light ? "#f5f5f5" : "rgba(255,255,255,0.05)",
                color: theme.text,
                border: `1px solid ${theme.accent}22`,
              }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-full py-4 text-xs tracking-[0.3em] uppercase font-medium"
              style={{
                background: theme.accent,
                color: theme.light ? "#1a1a1a" : "#000",
                boxShadow: `0 0 40px ${theme.glow}`,
              }}
            >
              Confirm Reservation
            </motion.button>
          </motion.form>
        </ScrollReveal>
      </div>
    </section>
  );
}
