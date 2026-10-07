import { CATERING_CONTEXTS, CONTACT, IMAGES } from "../data/content";
import { ICON_MAP } from "../components/Icons";
import { CTA, MaskLines, Ornament, PageHero, Reveal, SectionHead } from "../components/ui";

type Props = { onEnquire: (type?: string) => void };

export default function Catering({ onEnquire }: Props) {
  return (
    <>
      <PageHero
        img={IMAGES.food}
        eyebrow="Catering & Dining"
        tall
        lines={[
          "The Fair Farm",
          <em key="t" className="font-display italic text-gold-300">
            Table.
          </em>,
        ]}
        copy="Food is where a celebration lands in memory. Menus at Fair Farm are planned around the theme of your event and the preferences of your family."
      >
        <CTA onClick={() => onEnquire("Catering")}>Plan Your Menu</CTA>
        <CTA href="#/celebrations" variant="ghostLight">Explore Celebrations</CTA>
      </PageHero>

      {/* story */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHead
                eyebrow="Hospitality, served"
                lines={["Planned around your", "event — and your people."]}
              />
              <Reveal delay={350}>
                <div className="imgzoom mt-10 hidden overflow-hidden lg:block">
                  <img src={IMAGES.table} alt="A styled table at Fair Farm Resort" className="h-[320px] w-full object-cover" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-pine-800/80 lg:col-span-7">
            <Reveal>
              <p>
                A celebration in Punjab is measured, in large part, at the table. Our catering is planned
                the way our décor is — around the theme of your event, and around what your family
                actually loves to eat.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Wedding receptions, outdoor events, festivals and corporate gatherings are all catered
                in-house, with service that keeps pace with the evening — from the first welcome plate to
                the last round of dessert.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Sit with our team, describe the occasion and the guest list, and the menu takes shape
                around it.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="border-l-2 border-gold-500 pl-6 font-display text-2xl italic text-pine-800/70">
                "The menu is part of the décor — it should feel like the same occasion."
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* contexts ledger */}
      <section className="bg-pine-900 py-24 text-ivory-100 sm:py-32">
        <div className="wrap">
          <SectionHead
            tone="light"
            eyebrow="Catering experiences"
            lines={["For every kind", "of gathering."]}
          />
          <div className="mt-14 grid gap-x-14 sm:grid-cols-2">
            {CATERING_CONTEXTS.map((c, i) => {
              const Icon = ICON_MAP[c.icon];
              return (
                <Reveal key={c.title} delay={(i % 2) * 90}>
                  <div className="group flex items-start gap-5 border-b border-ivory-100/15 py-8">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold-500/40 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-pine-900">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-ivory-100">{c.title}</h3>
                      <p className="mt-1.5 max-w-md font-light text-ivory-100/65">{c.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* menu note */}
      <section className="overflow-hidden bg-ivory-100 py-24 sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="imgzoom -rotate-2 border-8 border-ivory-50 shadow-2xl">
                <img src={IMAGES.food} alt="A banquet spread at Fair Farm Resort" className="h-[380px] w-full object-cover sm:h-[440px]" loading="lazy" />
              </div>
              <div className="drift absolute -bottom-6 -right-2 sm:right-6">
                <span className="flex h-28 w-28 rotate-6 items-center justify-center rounded-full border border-gold-500/50 bg-pine-900 text-center text-[10px] uppercase leading-relaxed tracking-[0.22em] text-gold-300 shadow-xl">
                  Menus on
                  <br />
                  request
                </span>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHead
              eyebrow="Your menu, composed with you"
              lines={["A table your guests", "will talk about."]}
              copy="Full menus, tastings and per-event pricing are shared on request — composed for your guest list, your occasion and your preferences."
            />
            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTA onClick={() => onEnquire("Catering")}>Plan Your Menu</CTA>
                <a href={`mailto:${CONTACT.email}`} className="btn btn-ghost-dark">
                  <span>Email {CONTACT.email}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* closing */}
      <section className="bg-pine-950 py-24 text-ivory-100 sm:py-32">
        <div className="wrap text-center">
          <Ornament />
          <MaskLines
            as="h2"
            delay={150}
            className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-[1.1] font-medium sm:text-5xl lg:text-6xl"
            lines={[
              "Begin with the menu.",
              <em key="b" className="font-display italic text-gold-300">
                The rest follows.
              </em>,
            ]}
          />
          <Reveal delay={450}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CTA onClick={() => onEnquire("Catering")}>Plan Your Menu</CTA>
              <a href={`tel:${CONTACT.phones.booking.tel}`} className="btn btn-ghost-light">
                <span>Call {CONTACT.phones.booking.display}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
