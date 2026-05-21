import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, team } from "../../data/sharedContent";
import SafeImage from "../../components/ui/SafeImage";
import PaletteSwitcher from "./PaletteSwitcher";
import DemoRichSections from "./DemoRichSections";

const TABS = ["Services", "About", "Team", "Book"];

export default function MinimalZenLayout({ theme, palette }) {
  const [tab, setTab] = useState("Services");

  return (
    <div className="min-h-screen font-minimal" style={{ background: palette.bg, color: palette.text }}>
      <PaletteSwitcher themeSlug={theme.slug} palette={palette} />

      <header className="border-b" style={{ borderColor: `${palette.accent}15`, background: `${palette.bg}cc` }}>
        <div className="max-w-2xl mx-auto px-6 py-5">
          <span className="text-lg font-medium tracking-tight">{theme.brand}</span>
        </div>
      </header>

      <section className="max-w-2xl mx-auto px-6 pt-16 pb-16 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-light tracking-tight">
          {theme.tagline}
        </motion.h1>
        <p className="mt-6 text-lg font-light" style={{ color: palette.muted }}>Beauty, simplified.</p>
        <div className="mt-12 rounded-3xl overflow-hidden">
          <SafeImage src={theme.hero} alt="" className="w-full aspect-[16/10] object-cover" />
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-4">
        <div className="flex rounded-full p-1" style={{ background: `${palette.accent}15` }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} className="flex-1 py-2.5 text-sm rounded-full transition-all" style={{ background: tab === t ? palette.surface : "transparent", color: tab === t ? palette.text : palette.muted, boxShadow: tab === t ? `0 2px 8px ${palette.glow}` : "none" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12 min-h-[50vh]">
        <AnimatePresence mode="wait">
          {tab === "Services" && (
            <motion.div key="svc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
              {services.map((s) => (
                <div key={s.name} className="flex justify-between py-5 border-b" style={{ borderColor: `${palette.accent}15` }}>
                  <div>
                    <p className="font-medium">{s.name}</p>
                    <p className="text-sm" style={{ color: palette.muted }}>{s.duration}</p>
                  </div>
                  <p style={{ color: palette.accent }}>{s.price}</p>
                </div>
              ))}
            </motion.div>
          )}
          {tab === "About" && (
            <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="text-lg font-light leading-relaxed" style={{ color: palette.muted }}>Zen Beauty Lab — clarity in every detail. Tab navigation, single column, maximum whitespace.</p>
              <SafeImage src={theme.hero} alt="" className="mt-8 rounded-2xl w-full aspect-video object-cover" />
            </motion.div>
          )}
          {tab === "Team" && (
            <motion.div key="team" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
              {team.map((m) => (
                <div key={m.name} className="flex items-center gap-5">
                  <SafeImage src={m.image} alt={m.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <p className="font-medium">{m.name}</p>
                    <p className="text-sm" style={{ color: palette.accent }}>{m.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
          {tab === "Book" && (
            <motion.div key="book" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <button type="button" className="w-full rounded-full py-4 text-sm font-medium" style={{ background: palette.accent, color: palette.light ? "#111" : "#fff" }}>Schedule Visit</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <DemoRichSections palette={palette} theme={theme} />
    </div>
  );
}
