import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/showcase/LoadingScreen";
import LuxuryCursor from "./components/showcase/LuxuryCursor";
import PageTransition from "./components/PageTransition";
import HomePage from "./pages/HomePage";
import LayoutDemoPage from "./pages/LayoutDemoPage";

const LEGACY_THEME_MAP = {
  "dubai-luxury": { theme: "minimal-zen", palette: "black-gold" },
  "beverly-hills": { theme: "magazine-parallax", palette: "rose-glam" },
  "royal-classic": { theme: "editorial-split", palette: "royal-bronze" },
  "velvet-noir": { theme: "cinematic-scroll", palette: "velvet-wine" },
  glassmorphism: { theme: "bento-mosaic", palette: "ocean-cyan" },
  "italian-marble": { theme: "minimal-zen", palette: "marble-cream" },
  "cinematic-fashion": { theme: "cinematic-scroll", palette: "monochrome" },
  "ultra-minimalist": { theme: "minimal-zen", palette: "platinum-silver" },
};

const LEGACY_COLOR_MAP = {
  "black-gold": "minimal-zen",
  "rose-glam": "magazine-parallax",
  "royal-bronze": "editorial-split",
  "velvet-wine": "cinematic-scroll",
  "ocean-cyan": "bento-mosaic",
  "marble-cream": "minimal-zen",
  monochrome: "cinematic-scroll",
  "platinum-silver": "minimal-zen",
};

function LegacyDemoRedirect() {
  const { slug } = useParams();
  const mapped = LEGACY_THEME_MAP[slug];
  if (mapped) {
    return <Navigate to={`/theme/${mapped.theme}?palette=${mapped.palette}`} replace />;
  }
  return <Navigate to="/" replace />;
}

function LegacyColorRedirect() {
  const { slug } = useParams();
  const theme = LEGACY_COLOR_MAP[slug] || "minimal-zen";
  return <Navigate to={`/theme/${theme}?palette=${slug}`} replace />;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route path="/theme/:slug" element={<LayoutDemoPage />} />
        <Route path="/colors/:slug" element={<LegacyColorRedirect />} />
        <Route path="/demo/:slug" element={<LegacyDemoRedirect />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppShell() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      {!loading && location.pathname === "/" && <LuxuryCursor />}
      <AnimatedRoutes />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
