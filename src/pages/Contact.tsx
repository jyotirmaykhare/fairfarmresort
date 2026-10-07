import { useState, type FormEvent } from "react";
import { CONTACT, ENQUIRY_TYPES, IMAGES } from "../data/content";
import {
  ArrowIcon,
  CheckIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "../components/Icons";
import { PageHero, Reveal, SectionHead } from "../components/ui";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "Wedding",
    date: "",
    guests: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please share at least your name and phone number so we can reach you.");
      return;
    }
    setError("");
    setSent(true);
  };

  const waText = encodeURIComponent(
    `Hello Fair Farm Resort — I'd like to enquire about ${form.type === "Other" ? "an occasion" : `a ${form.type.toLowerCase()}`}.` +
      (form.date ? ` Tentative date: ${form.date}.` : "") +
      (form.guests ? ` Approx. guests: ${form.guests}.` : "") +
      ` — ${form.name}`
  );

  const mailBody = encodeURIComponent(
    `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nEnquiry: ${form.type}\nDate: ${form.date || "-"}\nGuests: ${form.guests || "-"}\n\n${form.message}`
  );

  const channels = [
    {
      icon: PhoneIcon,
      label: CONTACT.phones.reservation.label,
      value: CONTACT.phones.reservation.display,
      href: `tel:${CONTACT.phones.reservation.tel}`,
    },
    {
      icon: PhoneIcon,
      label: CONTACT.phones.booking.label,
      value: CONTACT.phones.booking.display,
      href: `tel:${CONTACT.phones.booking.tel}`,
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: CONTACT.whatsapp.display,
      href: CONTACT.whatsapp.url,
      external: true,
    },
    {
      icon: MailIcon,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: PinIcon,
      label: "Address",
      value: CONTACT.addressSingle,
      href: CONTACT.maps.directions,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        img={IMAGES.entrance}
        eyebrow="Contact & Enquiries"
        lines={[
          "Say hello —",
          <em key="h" className="font-display italic text-gold-300">
            plan it all.
          </em>,
        ]}
        copy="Weddings, events, parties, catering, décor or a stay — one conversation is enough to begin."
      />

      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          {/* channels */}
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Reach the resort"
              lines={["Every way", "to reach us."]}
              copy="For the quickest response, call or WhatsApp — the team is on the property most days."
            />
            <div className="mt-10">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 70}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex items-start gap-5 border-b border-pine-800/15 py-6 transition-colors hover:border-gold-600"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-600/40 text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-pine-900">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.3em] text-pine-800/50">{c.label}</span>
                      <span className="mt-1 block font-light leading-relaxed text-pine-800/85 transition-colors group-hover:text-gold-700">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="border border-pine-800/20 bg-ivory-50 p-7 sm:p-10">
                {!sent ? (
                  <>
                    <p className="eyebrow text-gold-600">Enquiry form</p>
                    <h3 className="mt-3 font-display text-3xl font-medium text-pine-800">
                      Tell us about <em className="font-display italic text-gold-600">the occasion</em>
                    </h3>
                    <form onSubmit={submit} className="mt-7 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <input className="field" placeholder="Full name *" value={form.name} onChange={(e) => set("name", e.target.value)} />
                        <input className="field" placeholder="Phone *" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <input className="field" type="email" placeholder="Email" value={form.email} onChange={(e) => set("email", e.target.value)} />
                        <select className="field" value={form.type} onChange={(e) => set("type", e.target.value)}>
                          {ENQUIRY_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-1 block text-[10px] uppercase tracking-[0.25em] text-pine-800/50">Tentative date</span>
                          <input className="field" type="date" value={form.date} onChange={(e) => set("date", e.target.value)} />
                        </label>
                        <label className="block">
                          <span className="mb-1 block text-[10px] uppercase tracking-[0.25em] text-pine-800/50">Approx. guests</span>
                          <input className="field" placeholder="e.g. 300" value={form.guests} onChange={(e) => set("guests", e.target.value)} />
                        </label>
                      </div>
                      <textarea
                        className="field min-h-32 resize-y"
                        placeholder="Tell us about the occasion — ceremonies, catering, décor, rooms…"
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                      />
                      {error && <p className="text-sm text-maroon-500">{error}</p>}
                      <div className="flex flex-wrap items-center gap-5 pt-2">
                        <button type="submit" className="btn btn-gold">
                          <span>Send Enquiry</span>
                          <ArrowIcon className="h-3.5 w-3.5" />
                        </button>
                        <p className="text-sm font-light text-pine-800/60">
                          Prefer to talk?{" "}
                          <a href={`tel:${CONTACT.phones.booking.tel}`} className="link-line text-gold-700">
                            {CONTACT.phones.booking.display}
                          </a>
                        </p>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold-600/50 text-gold-600">
                      <CheckIcon className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 font-display text-3xl font-medium text-pine-800">
                      Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}.
                    </h3>
                    <p className="mx-auto mt-3 max-w-md font-light leading-relaxed text-pine-800/70">
                      Your {form.type.toLowerCase()} enquiry is noted. For an instant response, send the
                      same details straight to our team:
                    </p>
                    <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3">
                      <a href={`${CONTACT.whatsapp.url}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-gold justify-center">
                        <WhatsAppIcon className="h-4 w-4" />
                        <span>WhatsApp the Details</span>
                      </a>
                      <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`${form.type} enquiry — ${form.name}`)}&body=${mailBody}`} className="btn btn-ghost-dark justify-center">
                        <MailIcon className="h-4 w-4" />
                        <span>Email the Details</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-center text-sm font-light text-pine-800/55">
                Enquiries are welcome for weddings, receptions, parties, corporate events, catering,
                decoration and stays.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
