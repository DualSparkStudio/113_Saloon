import ScrollReveal from "../ui/ScrollReveal";

export default function DemoContact({ theme }) {
  const details = [
    { label: "Address", value: "1 Luxury Boulevard, Suite 100" },
    { label: "Hours", value: "Mon–Sat 9AM – 8PM · Sun by appointment" },
    { label: "Phone", value: "+1 (888) 555-LUXE" },
    { label: "Email", value: `concierge@${theme.brand.toLowerCase().replace(/\s/g, "")}.com` },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-36 border-t" style={{ borderColor: `${theme.accent}15` }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <p
              className="text-xs tracking-[0.4em] uppercase"
              style={{ color: theme.accent }}
            >
              Visit Us
            </p>
            <h2
              className={`mt-4 ${theme.fontDisplay} text-3xl md:text-5xl`}
              style={{ color: theme.text }}
            >
              Find Your Sanctuary
            </h2>
            <p className="mt-6 leading-relaxed" style={{ color: theme.muted }}>
              Located in the heart of the city&apos;s most prestigious district,
              our salon offers private suites, valet parking, and complimentary
              refreshments for every guest.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <ul className="space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex gap-6">
                  <span
                    className="text-xs tracking-[0.3em] uppercase w-24 shrink-0 pt-1"
                    style={{ color: theme.accent }}
                  >
                    {d.label}
                  </span>
                  <span style={{ color: theme.text }}>{d.value}</span>
                </li>
              ))}
            </ul>
            <div
              className="mt-10 aspect-video rounded-2xl flex items-center justify-center"
              style={{
                background: theme.light ? "#eee" : theme.surface,
                border: `1px solid ${theme.accent}22`,
              }}
            >
              <p className="text-sm" style={{ color: theme.muted }}>
                Interactive Map · {theme.brand}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
