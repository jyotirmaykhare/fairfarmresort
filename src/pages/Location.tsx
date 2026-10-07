import { CONTACT, IMAGES } from "../data/content";
import { CalendarIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "../components/Icons";
import { CTA, PageHero, Reveal, SectionHead } from "../components/ui";

type Props = { onEnquire: (type?: string) => void };

export default function Location({ onEnquire }: Props) {
  return (
    <>
      <PageHero
        img={IMAGES.aerial}
        eyebrow="Location & Travel"
        lines={[
          "On G.T. Road,",
          <em key="j" className="font-display italic text-gold-300">
            Jalandhar.
          </em>,
        ]}
        copy="Along the Amritsar Bye Pass, near Verka Milk Plant — a well-known landmark address that guests from across the region can find easily."
      >
        <a href={CONTACT.maps.directions} target="_blank" rel="noreferrer" className="btn btn-gold">
          <PinIcon className="h-4 w-4" />
          <span>Get Directions</span>
        </a>
        <a href={`tel:${CONTACT.phones.booking.tel}`} className="btn btn-ghost-light">
          <PhoneIcon className="h-4 w-4" />
          <span>Call the Resort</span>
        </a>
      </PageHero>

      {/* map + details */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full min-h-[380px] border border-pine-800/20 p-2">
              <iframe
                title="Fair Farm Resort on Google Maps"
                src={CONTACT.maps.embed}
                className="h-[380px] w-full border-0 sm:h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="The address"
              lines={["Easy to find,", "easy to fill."]}
            />
            <div className="mt-8 space-y-6">
              <Reveal>
                <div className="flex items-start gap-4 border border-pine-800/20 bg-ivory-50 p-6">
                  <PinIcon className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-pine-800/50">Address</p>
                    <p className="mt-2 font-light leading-relaxed text-pine-800/85">{CONTACT.addressSingle}</p>
                    <p className="mt-3 text-sm font-light text-pine-800/60">{CONTACT.landmark}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex items-start gap-4 border border-pine-800/20 bg-ivory-50 p-6">
                  <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
                  <div className="w-full">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-pine-800/50">Speak to us</p>
                    <div className="mt-2 space-y-1.5 font-light text-pine-800/85">
                      <p>
                        {CONTACT.phones.reservation.label} —{" "}
                        <a href={`tel:${CONTACT.phones.reservation.tel}`} className="link-line text-gold-700">
                          {CONTACT.phones.reservation.display}
                        </a>
                      </p>
                      <p>
                        {CONTACT.phones.booking.label} —{" "}
                        <a href={`tel:${CONTACT.phones.booking.tel}`} className="link-line text-gold-700">
                          {CONTACT.phones.booking.display}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-wrap gap-4">
                  <a href={CONTACT.whatsapp.url} target="_blank" rel="noreferrer" className="btn btn-ghost-dark">
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>WhatsApp Us</span>
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="btn btn-ghost-dark">
                    <MailIcon className="h-4 w-4" />
                    <span>{CONTACT.email}</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* arrival guidance */}
      <section className="bg-pine-900 py-24 text-ivory-100 sm:py-32">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              tone="light"
              eyebrow="Planning your arrival"
              lines={["Bring the whole", "guest list."]}
              copy="Hosting out-of-town family or a corporate group? Share your dates with our team — we'll help plan arrival guidance for your guests, and rooms at the resort keep everyone close through the celebrations."
            />
            <Reveal delay={380}>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTA onClick={() => onEnquire()}>Plan Your Event</CTA>
                <CTA href="#/stay" variant="ghostLight">Explore Stays</CTA>
              </div>
            </Reveal>
          </div>
          <div className="space-y-5">
            {[
              { icon: PinIcon, title: "By road", text: "Directly on G.T. Road along the Amritsar Bye Pass — share the landmark 'Near Verka Milk Plant' with drivers." },
              { icon: CalendarIcon, title: "For your guests", text: "Our team will happily guide guests in and confirm the best route on the day." },
              { icon: PhoneIcon, title: "On the day", text: "One call to the resort and we'll direct any guest who's running behind." },
            ].map((t, i) => (
              <Reveal key={t.title} delay={i * 110}>
                <div className="flex items-start gap-5 border border-ivory-100/15 bg-pine-950/50 p-6">
                  <t.icon className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <h3 className="font-display text-xl text-ivory-100">{t.title}</h3>
                    <p className="mt-1.5 font-light text-ivory-100/65">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
