import { cn } from "../utils/cn";
import { CONTACT, IMAGES, PROPERTY_HIGHLIGHTS, VENUES } from "../data/content";
import { CheckIcon, ICON_MAP, PinIcon } from "../components/Icons";
import { CTA, PageHero, Reveal, SectionHead } from "../components/ui";

type Props = { onEnquire: (type?: string) => void };

export default function Spaces({ onEnquire }: Props) {
  return (
    <>
      <PageHero
        img={IMAGES.lawnDay}
        eyebrow="Spaces & Venues"
        lines={[
          "Room for every ritual,",
          <em key="s" className="font-display italic text-gold-300">
            every reception.
          </em>,
        ]}
        copy="From open lawns to banquet halls — each space at Fair Farm is dressed, lit and catered around your event."
      >
        <CTA onClick={() => onEnquire()}>Enquire About a Space</CTA>
        <a href={`tel:${CONTACT.phones.booking.tel}`} className="btn btn-ghost-light">
          <span>Call {CONTACT.phones.booking.display}</span>
        </a>
      </PageHero>

      {/* venues */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="wrap">
          <SectionHead
            eyebrow="The venues"
            lines={["Three settings,", "one property."]}
            copy="Walk each space with our team — capacity, layout and availability are shared on enquiry, so your event is planned around facts, not guesswork."
          />

          {VENUES.map((v, i) => (
            <Reveal key={v.id}>
              <div className="mt-20 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div className={cn("imgzoom relative overflow-hidden lg:col-span-7", i % 2 === 1 && "lg:order-2")}>
                  <img src={v.img} alt={v.name} className="h-[380px] w-full object-cover sm:h-[460px]" loading="lazy" />
                  <span className="absolute left-5 top-5 border border-gold-500/40 bg-pine-950/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold-300">
                    {v.setting}
                  </span>
                </div>
                <div className={cn("lg:col-span-5", i % 2 === 1 && "lg:order-1")}>
                  <p className="eyebrow text-gold-600">Venue 0{i + 1}</p>
                  <h3 className="mt-3 font-display text-3xl font-medium text-pine-800 sm:text-4xl">{v.name}</h3>
                  <p className="mt-4 font-light leading-relaxed text-pine-800/75">{v.copy}</p>

                  <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-pine-800/50">Suited to</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {v.suitable.map((s) => (
                      <span key={s} className="border border-pine-800/25 px-3 py-1 text-xs font-light text-pine-800/75">
                        {s}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-7 space-y-3 border-t border-pine-800/15 pt-6 text-sm">
                    <li className="flex items-center gap-3 text-pine-800/80">
                      <CheckIcon className="h-4 w-4 shrink-0 text-gold-600" />
                      Capacity & area — available on request
                    </li>
                    <li className="flex items-center gap-3 text-pine-800/80">
                      <CheckIcon className="h-4 w-4 shrink-0 text-gold-600" />
                      Décor & catering — arranged in-house
                    </li>
                    <li className="flex items-center gap-3 text-pine-800/80">
                      <CheckIcon className="h-4 w-4 shrink-0 text-gold-600" />
                      Dates & packages — shared on enquiry
                    </li>
                  </ul>

                  <div className="mt-8">
                    <CTA onClick={() => onEnquire()}>Enquire About This Space</CTA>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <p className="mt-16 max-w-2xl border-l-2 border-gold-500 pl-6 font-display text-xl italic leading-relaxed text-pine-800/70 sm:text-2xl">
              Detailed specifications, availability and packages are shared on enquiry — walk the grounds
              with our team before you decide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* property highlights ledger */}
      <section className="bg-pine-900 py-24 text-ivory-100 sm:py-32">
        <div className="wrap">
          <SectionHead
            tone="light"
            eyebrow="What the property offers"
            lines={["Built for", "gatherings."]}
            copy="Everything below is at the heart of Fair Farm — the reason families and organisations keep returning."
          />
          <div className="mt-14 grid gap-x-14 sm:grid-cols-2">
            {PROPERTY_HIGHLIGHTS.map((h, i) => {
              const Icon = ICON_MAP[h.icon];
              return (
                <Reveal key={h.title} delay={(i % 2) * 90}>
                  <div className="group flex items-start gap-5 border-b border-ivory-100/15 py-7">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold-500/40 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-pine-900">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-ivory-100 sm:text-2xl">{h.title}</h3>
                      <p className="mt-1.5 font-light text-ivory-100/65">{h.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* closing */}
      <section className="bg-ivory-200 py-20 sm:py-28">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Plan a visit"
              lines={["Walk the grounds", "before you decide."]}
              copy="Photographs only say so much. Visit Fair Farm, stand on the lawns, see the halls dressed — and plan the day with our team on the spot."
            />
          </div>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <CTA onClick={() => onEnquire()}>Plan a Visit</CTA>
              <a href={CONTACT.maps.directions} target="_blank" rel="noreferrer" className="btn btn-ghost-dark">
                <PinIcon className="h-4 w-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
