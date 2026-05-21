import { images } from "./images";

export const services = [
  { name: "Signature Cut & Style", price: "From $185", duration: "90 min", desc: "Precision cut, luxury wash, and bespoke styling with our creative directors." },
  { name: "Balayage & Color Artistry", price: "From $420", duration: "3 hrs", desc: "Hand-painted dimension, seamless blends, and couture colour correction." },
  { name: "Luxury Keratin Treatment", price: "From $350", duration: "2.5 hrs", desc: "Smoothing ritual with premium keratin for mirror-like shine." },
  { name: "Bridal Beauty Experience", price: "From $1,200", duration: "Full day", desc: "Trial, day-of styling, and an on-site artist for your celebration." },
  { name: "Executive Grooming", price: "From $95", duration: "45 min", desc: "Refined cuts and grooming in a private suite." },
  { name: "Spa & Wellness Ritual", price: "From $280", duration: "2 hrs", desc: "Scalp therapy, aromatherapy, and restorative treatments." },
];

export const team = [
  { name: "Isabella Laurent", role: "Creative Director", image: images.team[0], bio: "15 years crafting looks for editorial and red carpet." },
  { name: "Marcus Chen", role: "Master Colorist", image: images.team[1], bio: "Award-winning balayage specialist and colour educator." },
  { name: "Sofia Al-Rashid", role: "Senior Stylist", image: images.team[2], bio: "Known for transformative cuts and luxury bridal styling." },
  { name: "Elena Vasquez", role: "Beauty Specialist", image: images.team[3], bio: "Expert in keratin, treatments, and scalp wellness." },
];

export const testimonials = [
  { quote: "An experience that transcends a salon visit. Pure artistry.", author: "Victoria Ashford", title: "Fashion Editor" },
  { quote: "The attention to detail is unmatched. I leave feeling like royalty.", author: "James Whitmore", title: "CEO, Whitmore Group" },
  { quote: "Finally, a salon that understands true luxury. Worth every moment.", author: "Amara Singh", title: "Creative Director" },
];

export const galleryImages = images.gallery;

export const salonInfo = {
  address: "1 Luxury Boulevard, Prestige District, Suite 100",
  phone: "+1 (888) 555-LUXE",
  email: "concierge@luxeatelier.com",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
    { days: "Saturday", time: "8:00 AM – 9:00 PM" },
    { days: "Sunday", time: "By private appointment" },
  ],
};

export const faqs = [
  { q: "Do you offer consultations?", a: "Yes. Every new client receives a complimentary 20-minute style consultation." },
  { q: "What is your cancellation policy?", a: "We require 48 hours notice. Late cancellations may incur a 50% service fee." },
  { q: "Do you use premium product lines?", a: "We partner exclusively with luxury professional brands including Oribe, Kerastase, and Davines." },
  { q: "Is parking available?", a: "Complimentary valet parking is available for all appointment guests." },
];

export const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "50,000+", label: "Clients Worldwide" },
  { value: "12", label: "Industry Awards" },
  { value: "4.9", label: "Average Rating" },
];

export const BRAND = "LUXE ATELIER";
