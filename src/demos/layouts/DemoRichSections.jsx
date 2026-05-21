import { motion } from "framer-motion";
import {
  services,
  team,
  testimonials,
  galleryImages,
  salonInfo,
  faqs,
  stats,
} from "../../data/sharedContent";
import SafeImage from "../../components/ui/SafeImage";

export function DemoAboutBlock({ palette, theme }) {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <SafeImage src={galleryImages[0]} alt="Salon interior" className="rounded-2xl w-full aspect-[4/3] object-cover" />
        <div>
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: palette.accent }}>About {theme.brand}</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">A Sanctuary of Artistry</h2>
          <p className="mt-6 leading-relaxed" style={{ color: palette.muted }}>
            Founded on the belief that every guest deserves transformation, we blend cutting-edge technique
            with timeless elegance. Private suites, bespoke consultations, and world-class artisans await you.
          </p>
          <p className="mt-4 leading-relaxed" style={{ color: palette.muted }}>
            From precision colour to bridal couture, our team delivers experiences designed for those who
            accept nothing less than extraordinary.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl md:text-3xl" style={{ color: palette.accent }}>{s.value}</p>
                <p className="text-xs mt-1" style={{ color: palette.muted }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DemoGalleryBlock({ palette }) {
  return (
    <section id="gallery" className="py-20 md:py-28 px-6 md:px-12 border-t" style={{ borderColor: `${palette.accent}18` }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: palette.accent }}>Portfolio</p>
        <h2 className="font-display text-3xl md:text-5xl mb-12">Moments of Beauty</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img}
              whileHover={{ scale: 1.02 }}
              className={`overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2 aspect-[16/10]" : "aspect-square"}`}
            >
              <SafeImage src={img} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DemoTestimonialsBlock({ palette }) {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12" style={{ background: `${palette.accent}10` }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-4 text-center" style={{ color: palette.accent }}>Testimonials</p>
        <h2 className="font-display text-3xl md:text-5xl text-center mb-14">Voices of Distinction</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-2xl p-8 h-full flex flex-col"
              style={{ background: palette.surface, border: `1px solid ${palette.accent}22` }}
            >
              <p className="italic flex-1 leading-relaxed" style={{ color: palette.muted }}>&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6">
                <cite className="not-italic font-display block" style={{ color: palette.text }}>{t.author}</cite>
                <span className="text-xs" style={{ color: palette.accent }}>{t.title}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DemoTeamBlock({ palette }) {
  return (
    <section id="team" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t" style={{ borderColor: `${palette.accent}18` }}>
      <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: palette.accent }}>Our Artisans</p>
      <h2 className="font-display text-3xl md:text-5xl mb-14">Meet the Team</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((m) => (
          <div key={m.name} className="text-center">
            <SafeImage src={m.image} alt={m.name} className="w-full aspect-[3/4] object-cover rounded-2xl" />
            <h3 className="font-display text-lg mt-5">{m.name}</h3>
            <p className="text-sm" style={{ color: palette.accent }}>{m.role}</p>
            <p className="text-xs mt-2 leading-relaxed" style={{ color: palette.muted }}>{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DemoServicesGrid({ palette }) {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <h3 className="font-display text-2xl mb-8">Full Service Menu</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl p-6"
            style={{ background: palette.surface, border: `1px solid ${palette.accent}20` }}
          >
            <div className="flex justify-between items-start gap-4">
              <h4 className="font-display text-lg">{s.name}</h4>
              <span className="text-sm shrink-0" style={{ color: palette.accent }}>{s.price}</span>
            </div>
            <p className="text-xs mt-1" style={{ color: palette.muted }}>{s.duration}</p>
            <p className="text-sm mt-3 leading-relaxed" style={{ color: palette.muted }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DemoFaqBlock({ palette }) {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-3xl mx-auto">
      <p className="text-xs tracking-[0.4em] uppercase mb-4 text-center" style={{ color: palette.accent }}>FAQ</p>
      <h2 className="font-display text-3xl text-center mb-12">Common Questions</h2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="rounded-xl p-5 group"
            style={{ background: palette.surface, border: `1px solid ${palette.accent}18` }}
          >
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              {f.q}
              <span style={{ color: palette.accent }}>+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: palette.muted }}>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function DemoBookingBlock({ palette, theme }) {
  const inputStyle = {
    background: palette.light ? "#f0f0f0" : "rgba(255,255,255,0.06)",
    color: palette.text,
    border: `1px solid ${palette.accent}33`,
  };

  return (
    <section id="book" className="py-20 md:py-28 px-6 md:px-12 border-t" style={{ borderColor: `${palette.accent}18` }}>
      <div className="max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-4 text-center" style={{ color: palette.accent }}>Reservations</p>
        <h2 className="font-display text-3xl md:text-5xl text-center">Book Your Experience</h2>
        <p className="text-center mt-4" style={{ color: palette.muted }}>
          Secure your appointment at {theme.brand}. Our concierge will confirm within 2 hours.
        </p>
        <form className="mt-10 space-y-4 rounded-3xl p-8" style={{ background: palette.surface, border: `1px solid ${palette.accent}22` }} onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="w-full rounded-xl px-5 py-4 text-sm outline-none" style={inputStyle} />
            <input type="email" placeholder="Email" className="w-full rounded-xl px-5 py-4 text-sm outline-none" style={inputStyle} />
          </div>
          <input type="tel" placeholder="Phone" className="w-full rounded-xl px-5 py-4 text-sm outline-none" style={inputStyle} />
          <select className="w-full rounded-xl px-5 py-4 text-sm outline-none" style={inputStyle} defaultValue="">
            <option value="" disabled>Select Service</option>
            {services.map((s) => (
              <option key={s.name} value={s.name}>{s.name}</option>
            ))}
          </select>
          <input type="date" className="w-full rounded-xl px-5 py-4 text-sm outline-none" style={inputStyle} />
          <textarea placeholder="Special requests or preferred stylist..." rows={4} className="w-full rounded-xl px-5 py-4 text-sm outline-none resize-none" style={inputStyle} />
          <button
            type="submit"
            className="w-full rounded-full py-4 text-xs tracking-[0.3em] uppercase font-medium"
            style={{ background: palette.accent, color: palette.light ? "#111" : "#000" }}
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
}

export function DemoContactBlock({ palette, theme }) {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-12" style={{ background: palette.surface }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: palette.accent }}>Visit Us</p>
          <h2 className="font-display text-3xl md:text-4xl">Find Your Sanctuary</h2>
          <p className="mt-6 leading-relaxed" style={{ color: palette.muted }}>
            Located in the heart of the city&apos;s most prestigious district. Valet parking and private suites for every guest.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li><span style={{ color: palette.accent }}>Address — </span>{salonInfo.address}</li>
            <li><span style={{ color: palette.accent }}>Phone — </span>{salonInfo.phone}</li>
            <li><span style={{ color: palette.accent }}>Email — </span>{salonInfo.email}</li>
          </ul>
        </div>
        <div className="rounded-2xl p-8" style={{ border: `1px solid ${palette.accent}22` }}>
          <h3 className="font-display text-xl mb-6">Opening Hours</h3>
          {salonInfo.hours.map((h) => (
            <div key={h.days} className="flex justify-between py-3 border-b text-sm" style={{ borderColor: `${palette.accent}15` }}>
              <span style={{ color: palette.muted }}>{h.days}</span>
              <span>{h.time}</span>
            </div>
          ))}
          <div className="mt-8 aspect-video rounded-xl flex items-center justify-center text-sm" style={{ background: `${palette.accent}12`, color: palette.muted }}>
            {theme.brand} · Interactive Map
          </div>
        </div>
      </div>
    </section>
  );
}

/** Full supplementary content appended to every layout demo */
export default function DemoRichSections({ palette, theme }) {
  return (
    <>
      <DemoAboutBlock palette={palette} theme={theme} />
      <DemoGalleryBlock palette={palette} />
      <DemoTestimonialsBlock palette={palette} />
      <DemoTeamBlock palette={palette} />
      <DemoServicesGrid palette={palette} />
      <DemoFaqBlock palette={palette} />
      <DemoBookingBlock palette={palette} theme={theme} />
      <DemoContactBlock palette={palette} theme={theme} />
    </>
  );
}
