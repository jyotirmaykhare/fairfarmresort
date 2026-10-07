import { useEffect, useState, type FormEvent } from "react";
import { cn } from "../utils/cn";
import { CONTACT, ENQUIRY_TYPES, NAV_LINKS } from "../data/content";
import {
  ArrowIcon,
  CheckIcon,
  CloseIcon,
  FlowerIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "./Icons";
import { CTA, Ornament } from "./ui";

export type EnquiryState = { open: boolean; type: string };

/* ================= NAV ================= */
export function Nav({
  route,
  onEnquire,
}: {
  route: string;
  onEnquire: (type?: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [route]);

  const wordmark = (
    <a href="#/" className="flex items-center gap-3 text-ivory-100">
      <FlowerIcon className="w-8 h-8 text-gold-400" />
      <span className="leading-none">
        <span className="block font-display text-xl tracking-[0.18em] font-semibold">FAIR FARM</span>
        <span className="mt-1 block text-[9px] tracking-[0.42em] text-gold-300/90 uppercase">
          Resort · Jalandhar
        </span>
      </span>
    </a>
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-pine-950/92 backdrop-blur-md border-b border-ivory-100/10 py-3"
            : "bg-gradient-to-b from-pine-950/85 to-transparent py-5"
        )}
      >
        <div className="wrap flex items-center justify-between gap-6">
          {wordmark}

          <nav className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.slice(1).map((l) => {
              const isActive = route === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "link-line text-[11px] uppercase tracking-[0.22em] transition-colors",
                    isActive ? "text-gold-300" : "text-ivory-100/85 hover:text-gold-300"
                  )}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACT.phones.booking.tel}`}
              className="hidden lg:flex items-center gap-2 text-ivory-100/90 hover:text-gold-300 transition-colors"
            >
              <PhoneIcon className="w-4 h-4 text-gold-400" />
              <span className="text-sm tracking-wide">{CONTACT.phones.booking.display}</span>
            </a>
            <CTA onClick={() => onEnquire()} className="hidden md:inline-flex !px-5 !py-3">
              Plan Your Event
            </CTA>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="xl:hidden text-ivory-100 hover:text-gold-300 transition-colors"
              aria-label="Open menu"
            >
              <MenuIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-[70] bg-pine-950 text-ivory-100 flex flex-col transition-all duration-500 xl:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="wrap flex items-center justify-between py-5">
          {wordmark}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="text-ivory-100 hover:text-gold-300 transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon className="w-7 h-7" />
          </button>
        </div>
        <nav className="wrap mt-8 flex flex-col gap-1 overflow-y-auto">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "flex items-center justify-between border-b border-ivory-100/10 py-4 font-display text-3xl transition-all duration-500",
                route === l.href ? "text-gold-400" : "text-ivory-100",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: menuOpen ? `${120 + i * 55}ms` : "0ms" }}
            >
              {l.label}
              <ArrowIcon className="w-5 h-5 text-gold-500" />
            </a>
          ))}
        </nav>
        <div className="wrap mt-auto py-8 flex flex-wrap gap-4 text-sm text-ivory-100/70">
          <a href={`tel:${CONTACT.phones.booking.tel}`} className="flex items-center gap-2 hover:text-gold-300">
            <PhoneIcon className="w-4 h-4 text-gold-400" /> {CONTACT.phones.booking.display}
          </a>
          <a href={CONTACT.whatsapp.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold-300">
            <WhatsAppIcon className="w-4 h-4 text-gold-400" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

/* ================= FOOTER ================= */
export function Footer({ onEnquire }: { onEnquire: (type?: string) => void }) {
  return (
    <footer className="bg-pine-950 text-ivory-100 relative overflow-hidden">
      <div className="bg-mandala absolute -right-40 -bottom-40 w-[560px] h-[560px] opacity-[0.05] pointer-events-none" />
      <div className="wrap pt-16">
        <Ornament />
      </div>
      <div className="wrap grid gap-12 py-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <a href="#/" className="flex items-center gap-3">
            <FlowerIcon className="w-9 h-9 text-gold-400" />
            <span className="leading-none">
              <span className="block font-display text-2xl tracking-[0.16em] font-semibold">FAIR FARM</span>
              <span className="mt-1 block text-[9px] tracking-[0.42em] text-gold-300/90 uppercase">Resort · Jalandhar</span>
            </span>
          </a>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory-100/70 font-light">
            A destination on G.T. Road for weddings, receptions, parties, corporate gatherings and stays —
            with lush lawns, banquet halls, catering and décor brought together under one roof.
          </p>
          <a
            href={CONTACT.website}
            target="_blank"
            rel="noreferrer"
            className="link-line mt-6 inline-block text-sm text-gold-300"
          >
            fairfarmresorts.com
          </a>
        </div>

        <div className="lg:col-span-2">
          <h4 className="eyebrow text-gold-400">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-ivory-100/80">
            {NAV_LINKS.slice(1).map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-line hover:text-gold-300 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="eyebrow text-gold-400">Reach Us</h4>
          <ul className="mt-5 space-y-4 text-sm text-ivory-100/80">
            <li className="flex gap-3">
              <PhoneIcon className="w-4 h-4 mt-0.5 shrink-0 text-gold-400" />
              <div>
                <p className="text-ivory-100/55 text-xs uppercase tracking-widest mb-1">{CONTACT.phones.reservation.label}</p>
                <a href={`tel:${CONTACT.phones.reservation.tel}`} className="hover:text-gold-300">{CONTACT.phones.reservation.display}</a>
                <p className="text-ivory-100/55 text-xs uppercase tracking-widest mb-1 mt-3">{CONTACT.phones.booking.label}</p>
                <a href={`tel:${CONTACT.phones.booking.tel}`} className="hover:text-gold-300">{CONTACT.phones.booking.display}</a>
              </div>
            </li>
            <li className="flex gap-3">
              <MailIcon className="w-4 h-4 mt-0.5 shrink-0 text-gold-400" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-300">{CONTACT.email}</a>
            </li>
            <li className="flex gap-3">
              <PinIcon className="w-4 h-4 mt-0.5 shrink-0 text-gold-400" />
              <a href={CONTACT.maps.directions} target="_blank" rel="noreferrer" className="hover:text-gold-300 leading-relaxed">
                {CONTACT.addressSingle}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="eyebrow text-gold-400">Plan an Occasion</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {["Wedding", "Reception / Party", "Corporate Event", "Catering", "Decoration", "Stay / Rooms"].map((t) => (
              <li key={t}>
                <button
                  type="button"
                  onClick={() => onEnquire(t)}
                  className="group flex items-center gap-2 text-ivory-100/80 hover:text-gold-300 transition-colors"
                >
                  <span className="h-px w-5 bg-gold-500/60 transition-all group-hover:w-8 group-hover:bg-gold-400" />
                  {t} enquiry
                </button>
              </li>
            ))}
          </ul>
          <CTA onClick={() => onEnquire()} className="mt-8">Book Your Event</CTA>
        </div>
      </div>

      <div className="border-t border-ivory-100/10">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-ivory-100/50">
          <p>
            © {new Date().getFullYear()} Fair Farm Resort — {CONTACT.descriptor}
          </p>
          <p>{CONTACT.landmark}</p>
        </div>
      </div>
    </footer>
  );
}

/* ================= FLOATING ACTIONS ================= */
export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-[65] flex flex-col gap-3 transition-all duration-500",
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      )}
    >
      <a
        href={CONTACT.whatsapp.url}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="pulse-ring flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-pine-900 transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
      <a
        href={`tel:${CONTACT.phones.booking.tel}`}
        aria-label="Call the resort"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/50 bg-pine-900 text-gold-300 transition-transform hover:scale-110"
      >
        <PhoneIcon className="w-5 h-5" />
      </a>
    </div>
  );
}

/* ================= ENQUIRY MODAL ================= */
export function EnquiryModal({
  open,
  type,
  onClose,
}: {
  open: boolean;
  type: string;
  onClose: () => void;
}) {
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

  useEffect(() => {
    if (open) {
      setSent(false);
      setError("");
      setForm((f) => ({ ...f, type }));
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, type]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

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
    `Hello Fair Farm Resort — I'd like to plan ${form.type === "Other" ? "an occasion" : `a ${form.type.toLowerCase()}`}.` +
      (form.date ? ` Tentative date: ${form.date}.` : "") +
      (form.guests ? ` Approx. guests: ${form.guests}.` : "") +
      ` — ${form.name}`
  );

  const mailBody = encodeURIComponent(
    `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nEnquiry: ${form.type}\nDate: ${form.date || "-"}\nGuests: ${form.guests || "-"}\n\n${form.message}`
  );

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <button
        type="button"
        aria-label="Close enquiry form"
        onClick={onClose}
        className="absolute inset-0 bg-pine-950/85 backdrop-blur-sm cursor-default"
      />
      <div className="theme-dark relative w-full max-w-lg max-h-[90vh] overflow-y-auto border border-gold-500/25 bg-pine-900 p-7 sm:p-9 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-ivory-100/70 hover:text-gold-300 transition-colors"
          aria-label="Close"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        {!sent ? (
          <>
            <p className="eyebrow text-gold-400">Enquire</p>
            <h3 className="mt-3 font-display text-3xl text-ivory-100 font-medium">
              Let's plan <em className="text-gold-300 not-italic font-display italic">your occasion</em>
            </h3>
            <p className="mt-2 text-sm text-ivory-100/65 font-light">
              Share a few details — our team will call you back to walk through dates, spaces and menus.
            </p>
            <form onSubmit={submit} className="mt-6 space-y-4">
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
                  <span className="mb-1 block text-[10px] uppercase tracking-[0.25em] text-ivory-100/50">Tentative date</span>
                  <input className="field" type="date" value={form.date} onChange={(e) => set("date", e.target.value)} />
                </label>
                <input className="field self-end" placeholder="Approx. guests" value={form.guests} onChange={(e) => set("guests", e.target.value)} />
              </div>
              <textarea
                className="field min-h-24 resize-y"
                placeholder="Tell us about the occasion…"
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
              />
              {error && <p className="text-sm text-gold-300">{error}</p>}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button type="submit" className="btn btn-gold">
                  <span>Send Enquiry</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
                <a href={`tel:${CONTACT.phones.booking.tel}`} className="text-sm text-ivory-100/70 hover:text-gold-300 transition-colors">
                  or call {CONTACT.phones.booking.display}
                </a>
              </div>
            </form>
          </>
        ) : (
          <div className="py-4 text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/50 text-gold-300">
              <CheckIcon className="w-8 h-8" />
            </span>
            <h3 className="mt-5 font-display text-3xl text-ivory-100 font-medium">
              Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}.
            </h3>
            <p className="mt-3 text-sm text-ivory-100/70 font-light leading-relaxed">
              Your {form.type.toLowerCase()} enquiry is noted. For an instant response, reach us directly:
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <a href={`${CONTACT.whatsapp.url}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-gold justify-center">
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp the Details</span>
              </a>
              <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`${form.type} enquiry — ${form.name}`)}&body=${mailBody}`} className="btn btn-ghost-light justify-center">
                <MailIcon className="w-4 h-4" />
                <span>Email the Details</span>
              </a>
              <a href={`tel:${CONTACT.phones.booking.tel}`} className="btn btn-ghost-light justify-center">
                <PhoneIcon className="w-4 h-4" />
                <span>Call {CONTACT.phones.booking.display}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
