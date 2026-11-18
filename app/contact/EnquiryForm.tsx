"use client";

import { useActionState } from "react";
import { sendEnquiry, type EnquiryState } from "./actions";
import Icon from "@/components/Icon";

const input =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3.5 text-base outline-none placeholder:text-muted/70 focus:border-brand-800";

export default function EnquiryForm() {
  const [state, formAction, pending] = useActionState<EnquiryState, FormData>(sendEnquiry, { ok: false, message: "" });

  if (state.ok) {
    return (
      <div className="rounded-sm bg-paper-2 p-10 flex flex-col items-center justify-center text-center">
        <span className="text-clay"><Icon name="check" className="w-8 h-8" /></span>
        <h2 className="mt-4 font-display text-3xl text-brand-900">Thank you!</h2>
        <p className="mt-2 text-muted">Your enquiry has been received. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-sm bg-paper-2 p-6 sm:p-10 space-y-2"
    >
      <input name="name" required placeholder="Your Name" className={input} />
      <input name="email" type="email" required placeholder="Email" className={input} />
      <input name="phone" type="tel" required placeholder="Mobile Number" className={input} />
      <select name="interest" className={input} defaultValue="">
        <option value="" disabled>Area of interest</option>
        <option>Napier & Organic Farming</option>
        <option>Food Dehydration</option>
        <option>Machinery & Plant Solutions</option>
        <option>Products / Bulk Order</option>
        <option>Other</option>
      </select>
      <textarea name="message" rows={4} required placeholder="Your Requirement" className={input} />
      {state.message && <p aria-live="polite" className="text-sm text-red-600">{state.message}</p>}
      <button
        type="submit"
        disabled={pending}
        className="!mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-brand-800 px-7 py-3.5 font-semibold text-white hover:bg-brand-900 disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send Enquiry"} <Icon name="arrow" className="w-5 h-5" />
      </button>
    </form>
  );
}
