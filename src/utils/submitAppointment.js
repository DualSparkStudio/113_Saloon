import {
  BOOKING_EMAIL_SUBJECT,
  SHOP_OWNER_EMAIL,
  WEB3FORMS_ACCESS_KEY,
} from "../config/booking";

async function submitViaWeb3Forms({ name, email, phone, serviceLabel, date, message }) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: BOOKING_EMAIL_SUBJECT,
      from_name: "Luxe Atelier — Booking",
      name,
      email,
      phone,
      service: serviceLabel,
      preferred_date: date,
      special_requests: message?.trim() || "—",
      replyto: email,
      botcheck: "",
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Email service error. Please try again.");
  }

  return data;
}

/** FormSubmit via hidden form — works without API key; requires one-time email activation */
function submitViaFormSubmit({ name, email, phone, serviceLabel, date, message }) {
  return new Promise((resolve, reject) => {
    const frameName = "formsubmit-booking-frame";
    let frame = document.querySelector(`iframe[name="${frameName}"]`);

    if (!frame) {
      frame = document.createElement("iframe");
      frame.name = frameName;
      frame.title = "FormSubmit";
      frame.setAttribute("aria-hidden", "true");
      frame.style.cssText = "display:none;width:0;height:0;border:0";
      document.body.appendChild(frame);
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = `https://formsubmit.co/${encodeURIComponent(SHOP_OWNER_EMAIL)}`;
    form.target = frameName;
    form.style.display = "none";

    const fields = {
      _subject: BOOKING_EMAIL_SUBJECT,
      _template: "table",
      _captcha: "false",
      _replyto: email,
      name,
      email,
      phone,
      service: serviceLabel,
      preferred_date: date,
      special_requests: message?.trim() || "—",
    };

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    let settled = false;
    const finish = (ok, err) => {
      if (settled) return;
      settled = true;
      form.remove();
      if (ok) resolve({ success: true, provider: "formsubmit" });
      else reject(err);
    };

    frame.onload = () => finish(true);
    frame.onerror = () => finish(false, new Error("Could not send request."));

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      finish(true);
    }, 4000);
  });
}

export async function submitAppointment(payload) {
  if (WEB3FORMS_ACCESS_KEY) {
    return submitViaWeb3Forms(payload);
  }

  return submitViaFormSubmit(payload);
}

export function isBookingEmailConfigured() {
  return Boolean(WEB3FORMS_ACCESS_KEY);
}
