import { salonInfo } from "../data/sharedContent";

/**
 * Shop owner inbox — all appointment requests are sent here.
 */
export const SHOP_OWNER_EMAIL = salonInfo.email;

export const BOOKING_EMAIL_SUBJECT = "New Appointment Request — Luxe Atelier";

/**
 * Free key from https://web3forms.com — enter SHOP_OWNER_EMAIL, copy key to .env.local
 * Example: VITE_WEB3FORMS_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 */
export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() || "";

export const BOOKING_SERVICE_OPTIONS = [
  { value: "cut", label: "Cut & Style" },
  { value: "colour", label: "Colour / Balayage" },
  { value: "keratin", label: "Keratin Treatment" },
  { value: "bridal", label: "Bridal Experience" },
  { value: "spa", label: "Spa Ritual" },
];
