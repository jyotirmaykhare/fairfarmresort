import { CONTACT, IMAGES, STAY_POINTS } from "../data/content";
import { ArrowIcon, ICON_MAP, PhoneIcon } from "../components/Icons";
import { CTA, PageHero, Reveal, SectionHead } from "../components/ui";

type Props = { onEnquire: (type?: string) => void };

const NEARBY = [
  { title: "Celebrations", href: "#/celebrations", text: "Weddings, receptions, parties and corporate gatherings hosted on the property." },
  { title: "Spaces & Venues", href: "#/spaces", text: "Lawns, banquet halls and styled event areas — all steps from your room." },
  { title: "Dining", href: "#/catering", text: "In-house catering planned around your event and your preferences." },
];

export default function Stay({ onEnquire }: Props) {
  return (
    <>
      <PageHero
        img={IMAGES.room}
        eyebrow="Stay at Fair Farm"
        tall
        lines={[
          "Keep the night",
          <em key="n" className="font-display italic text-gold-300">
            going.
          </em>,
        ]}
        copy="Guest rooms at the resort mean hosts and travelling family stay steps away from the celebration — no late-night goodbyes at the gate."
      >
        <CTA onClick={() => onEnquire("Stay / Rooms")}>Enquire About a Stay</CTA>
        <a href={`tel:${CONTACT.phones.reservation.tel}`} className="btn btn-ghost-light">
          <PhoneIcon className="h-4 w-4" />
          <span>Call Reservations</span>
        </a>
      </PageHero>

      {/* stay points */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHead
                eyebrow="Rest, on the grounds"
                lines={["A resort that", "hosts you fully."]}
                copy="Fair Farm is first a celebration destination — and the rooms exist for the same reason: so the people at the heart of the occasion can stay through all of it."
              />
              <Reveal delay={380}>
                <div className="mt-9 border border-gold-600/40 bg-ivory-200 p-7">
                  <p className="eyebrow text-gold-700">Good to know</p>
                  <p className="mt-4 font-light leading-relaxed text-pine-800/80">
                    Room categories, amenities, occupancy and tariffs are shared directly by our
                    reservations team — along with availability for your dates.
                  </p>
                  <a href={`tel:${CONTACT.phones.reservation.tel}`} className="link-line mt-5 inline-block text-sm text-gold-700">
                    {CONTACT.phones.reservation.label}: {CONTACT.phones.reservation.display}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-7">
            {STAY_POINTS.map((p, i) => {
              const Icon = ICON_MAP[p.icon];
              return (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="group flex items-start gap-6 border-b border-pine-800/15 py-8 first:pt-0">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold-600/40 text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-pine-900">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-pine-800 sm:text-3xl">{p.title}</h3>
                      <p className="mt-2 max-w-lg font-light leading-relaxed text-pine-800/70">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={300}>
              <div className="imgzoom mt-10 overflow-hidden">
                <img src={IMAGES.room} alt="Guest room at Fair Farm Resort" className="h-[340px] w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* while you're here */}
      <section className="bg-pine-900 py-24 text-ivory-100 sm:py-32">
        <div className="wrap">
          <SectionHead
            tone="light"
            eyebrow="While you're here"
            lines={["The rest of", "Fair Farm."]}
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-ivory-100/15 bg-ivory-100/15 lg:grid-cols-3">
            {NEARBY.map((n, i) => (
              <Reveal key={n.title} delay={i * 100} className="bg-pine-900">
                <a href={n.href} className="group flex h-full flex-col justify-between gap-10 p-8 transition-colors hover:bg-pine-800">
                  <div>
                    <p className="font-display text-sm italic text-gold-500">0{i + 1}</p>
                    <h3 className="mt-2 font-display text-2xl text-ivory-100">{n.title}</h3>
                    <p className="mt-3 font-light leading-relaxed text-ivory-100/65">{n.text}</p>
                  </div>
                  <ArrowIcon className="h-6 w-6 text-gold-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* closing */}
      <section className="bg-ivory-200 py-20 sm:py-28">
        <div className="wrap flex flex-wrap items-center justify-between gap-8">
          <div>
            <SectionHead
              eyebrow="Reservations"
              lines={["Ask about rooms", "for your dates."]}
            />
          </div>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-4">
              <CTA onClick={() => onEnquire("Stay / Rooms")}>Enquire About a Stay</CTA>
              <a href={CONTACT.whatsapp.url} target="_blank" rel="noreferrer" className="btn btn-ghost-dark">
                <span>WhatsApp Us</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
