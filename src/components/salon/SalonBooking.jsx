import { motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "../../data/sharedContent";
import { BOOKING_SERVICE_OPTIONS } from "../../config/booking";
import { submitAppointment } from "../../utils/submitAppointment";
import ScrollReveal from "../ui/ScrollReveal";
import SalonSectionHeader from "./SalonSectionHeader";

const fieldClass =
  "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 outline-none transition focus:border-[#c41e3a] focus:ring-2 focus:ring-[#c41e3a]/25 disabled:cursor-not-allowed disabled:opacity-60";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  message: "",
};

export default function SalonBooking() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const minDate = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.service || !form.date) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailValid) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const serviceLabel =
      BOOKING_SERVICE_OPTIONS.find((s) => s.value === form.service)?.label ?? form.service;

    setStatus("loading");

    try {
      await submitAppointment({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        serviceLabel,
        date: form.date,
        message: form.message.trim(),
      });
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="book" data-nav-theme="accent" className="scroll-mt-24 bg-[#c41e3a] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SalonSectionHeader
              accent
              label="Reservations"
              title="Book Your Visit"
              description="Secure a private appointment with our concierge. New clients receive a complimentary 20-minute style consultation."
            />
            <ScrollReveal delay={0.1}>
              <div className="space-y-3">
                {faqs.slice(0, 2).map((item) => (
                  <div key={item.q} className="rounded-2xl bg-black/20 p-4 backdrop-blur-sm md:rounded-3xl">
                    <p className="font-editorial text-xs font-bold uppercase text-white">{item.q}</p>
                    <p className="mt-1 text-sm text-white/75">{item.a}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-6 text-neutral-900 shadow-2xl [color-scheme:light] md:rounded-3xl md:p-10"
            >
              {status === "success" && (
                <div
                  role="status"
                  className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900"
                >
                  Thank you! Your appointment request was sent to our team. We will contact you shortly
                  to confirm.
                </div>
              )}

              {status === "error" && errorMessage && (
                <div
                  role="alert"
                  className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
                >
                  {errorMessage}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className={fieldClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className={fieldClass}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className={fieldClass}
                />
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className={fieldClass}
                >
                  <option value="" disabled className="text-neutral-500">
                    Select Service *
                  </option>
                  {BOOKING_SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="text-neutral-900">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="date"
                name="date"
                required
                min={minDate}
                value={form.date}
                onChange={handleChange}
                disabled={status === "loading"}
                className={`mt-4 ${fieldClass}`}
              />
              <textarea
                name="message"
                placeholder="Special requests (optional)"
                rows={3}
                value={form.message}
                onChange={handleChange}
                disabled={status === "loading"}
                className={`mt-4 resize-none ${fieldClass}`}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 w-full rounded-full bg-neutral-900 py-4 font-editorial text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Sending…" : "Request Appointment"}
              </button>
              <p className="mt-3 text-center text-[10px] text-neutral-500">
                Your request is sent directly to our concierge team.
              </p>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
