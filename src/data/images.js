/** Local images — served from /images/ for reliable loading */
const img = (name) => `/images/${name}`;

export const images = {
  hero: {
    salon: img("hero-salon.jpg"),
    hair: img("hero-hair.jpg"),
    beauty: img("hero-beauty.jpg"),
    styling: img("hero-styling.jpg"),
    spa: img("hero-spa.jpg"),
    makeup: img("hero-makeup.jpg"),
    fashion: img("hero-fashion.jpg"),
    interior: img("hero-interior.jpg"),
    dark: img("hero-dark.jpg"),
  },
  /** Real salon / haircut portfolio — used on homepage gallery bento */
  salonGallery: [
    img("gallery-cut-1.jpg"),
    img("gallery-cut-2.jpg"),
    img("gallery-cut-3.jpg"),
    img("gallery-cut-4.jpg"),
    img("gallery-cut-5.jpg"),
    img("gallery-cut-6.jpg"),
    img("gallery-cut-7.jpg"),
    img("gallery-cut-8.jpg"),
  ],
  gallery: [
    img("gallery-cut-1.jpg"),
    img("gallery-cut-2.jpg"),
    img("gallery-cut-3.jpg"),
    img("gallery-cut-4.jpg"),
    img("gallery-cut-5.jpg"),
    img("gallery-cut-6.jpg"),
  ],
  team: [
    img("team-1.jpg"),
    img("team-2.jpg"),
    img("team-3.jpg"),
    img("team-4.jpg"),
  ],
  preview: {
    cinematic: img("preview-2.jpg"),
    editorial: img("preview-3.jpg"),
    minimal: img("preview-1.jpg"),
    bento: img("preview-4.jpg"),
    magazine: img("preview-5.jpg"),
    brutalist: img("preview-6.jpg"),
  },
};
