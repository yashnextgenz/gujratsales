import type { Metadata } from "next";
import { Container } from "@/components/ui";
import EnquiryForm from "./EnquiryForm";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <Container className="py-16 md:py-24 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label text-brand-600">Contact</p>
          <h1 className="font-display mt-5 text-5xl md:text-7xl leading-[1.02] text-brand-900">
            Let&apos;s talk <em className="text-brand-600">business.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            Your project, sourcing or plant requirement. Every enquiry gets a reply within 24 hours.
          </p>
          <dl className="mt-12 border-t border-line">
            {[
              { k: "Phone", v: "+91 98765 43210", href: "tel:+919876543210" },
              { k: "Email", v: "info@gujaratsales.com", href: "mailto:info@gujaratsales.com" },
              { k: "Office", v: "Ahmedabad, Gujarat", href: undefined },
            ].map((c) => (
              <div key={c.k} className="flex items-baseline justify-between gap-4 border-b border-line py-5">
                <dt className="label text-muted">{c.k}</dt>
                <dd className="font-display text-xl text-brand-900">
                  {c.href ? <a href={c.href} className="link-underline">{c.v}</a> : c.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>
      </Container>
      <Container className="pb-24">
        <iframe
          title="Gujarat Sales location"
          src="https://www.google.com/maps?q=Ahmedabad,Gujarat&output=embed"
          className="w-full h-80 rounded-sm border border-line grayscale-[60%]"
          loading="lazy"
        />
      </Container>
    </>
  );
}
