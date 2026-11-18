"use server";

import { Resend } from "resend";

export type EnquiryState = { ok: boolean; message: string };

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const name = get("name");
  const email = get("email");
  const phone = get("phone");
  const interest = get("interest") || "Not specified";
  const message = get("message");

  if (!name || !email || !phone || !message) {
    return { ok: false, message: "Please fill in all required fields." };
  }

  const { RESEND_API_KEY, RESEND_FROM, RESEND_TO } = process.env;
  if (!RESEND_API_KEY || !RESEND_FROM || !RESEND_TO) {
    console.error("Missing RESEND_API_KEY, RESEND_FROM or RESEND_TO in .env");
    return { ok: false, message: "Email service is not configured. Please call us instead." };
  }

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: RESEND_TO.split(",").map((s) => s.trim()),
    replyTo: email,
    subject: `New enquiry from ${name} — ${interest}`,
    html: `
      <h2>New Website Enquiry</h2>
      <p><b>Name:</b> ${esc(name)}</p>
      <p><b>Email:</b> ${esc(email)}</p>
      <p><b>Phone:</b> ${esc(phone)}</p>
      <p><b>Interest:</b> ${esc(interest)}</p>
      <p><b>Message:</b><br/>${esc(message).replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return { ok: false, message: "Could not send your enquiry. Please try again." };
  }
  return { ok: true, message: "" };
}
