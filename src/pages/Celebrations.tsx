import { cn } from "../utils/cn";
import { CONTACT, IMAGES, OCCASIONS } from "../data/content";
import { ArrowIcon } from "../components/Icons";
import { CTA, MaskLines, Ornament, PageHero, Reveal, SectionHead } from "../components/ui";

type Props = { onEnquire: (type?: string) => void };

const ARRANGEMENTS = [
  { title: "Décor & Design", href: "#/decor", text: "Themes, colour concepts, lighting and florals built into the venue itself." },
  { title: "Catering", href: "#/catering", text: "Menus planned around the theme of your event and your family's preferences." },
  { title: "Spaces & Venues", href: "#/spaces", text: "Open lawns, banquet halls and styled event areas for every scale of gathering." },
  { title: "Stay", href: "#/stay", text: "Rooms at the resort, so the celebration never has to end at midnight." },
];

export default function Celebrations({ onEnquire }: Props) {
  return (
    <>
      <PageHero
        img={IMAGES.sangeet}
        eyebrow="Celebrations at Fair Farm"
        lines={[
          "Occasions worth",
          <em key="h" className="font-display italic text-gold-300">
            the whole guest list.
          </em>,
        ]}
        copy="Weddings, receptions, sangeet nights, corporate days and family milestones — hosted across open lawns and elegant halls, with décor and catering arranged in-house."
      >
        <CTA onClick={() => onEnquire()}>Plan Your Celebration</CTA>
        <CTA href="#/spaces" variant="ghostLight">View Spaces</CTA>
      </PageHero>

      {/* occasions in depth */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="wrap">
          <SectionHead
            eyebrow="What we host"
            lines={["Every kind of", "gathering."]}
            copy="Tell us the occasion and the scale — we shape the space, the décor and the menu around it."
          />

          {OCCASIONS.map((o, i) => (
            <Reveal key={o.id}>
              <div className="mt-20 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div className={cn("imgzoom arch relative lg:col-span-6", i % 2 === 1 && "lg:order-2")}>
                  <img src={o.img} alt={o.title} className="h-[380px] w-full object-cover sm:h-[460px]" loading="lazy" />
                  <span className="absolute left-1/2 top-6 -translate-x-1/2 border border-gold-500/40 bg-pine-950/80 px-3 py-1.5 font-display text-lg italic text-gold-300">
                    0{i + 1}
                  </span>
                </div>
                <div className={cn("lg:col-span-6", i % 2 === 1 && "lg:order-1")}>
                  <h3 className="font-display text-3xl font-medium text-pine-800 sm:text-5xl">{o.title}</h3>
                  <p className="mt-5 max-w-lg font-light leading-relaxed text-pine-800/75">{o.copy}</p>
                  <ul className="mt-7 space-y-3">
                    {o.tags.map((t) => (
                      <li key={t} className="flex items-center gap-3 text-pine-800/85">
                        <span className="h-1.5 w-1.5 rotate-45 bg-gold-600" />
                        <span className="font-light">{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap items-center gap-6">
                    <CTA onClick={() => onEnquire(o.enquiryType)}>Enquire — {o.title.split(" ")[0]}</CTA>
                    <a href={`tel:${CONTACT.phones.booking.tel}`} className="link-line text-xs uppercase tracking-[0.25em] text-pine-800/60 hover:text-gold-700">
                      or call {CONTACT.phones.booking.display}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* one roof ledger */}
      <section className="bg-pine-900 py-24 text-ivory-100 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHead
                tone="light"
                eyebrow="Under one roof"
                lines={["One venue,", "every arrangement."]}
                copy="The pieces of a great event — space, décor, food and rooms — are all at Fair Farm, planned together rather than pieced together."
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            {ARRANGEMENTS.map((a, i) => (
              <Reveal key={a.title} delay={i * 70}>
                <a
                  href={a.href}
                  className="group flex items-start justify-between gap-6 border-b border-ivory-100/15 py-8 transition-colors first:pt-0 hover:border-gold-500/60"
                >
                  <div>
                    <p className="font-display text-sm italic text-gold-500">0{i + 1}</p>
                    <h3 className="mt-1 font-display text-2xl text-ivory-100 transition-colors group-hover:text-gold-300 sm:text-3xl">
                      {a.title}
                    </h3>
                    <p className="mt-2 max-w-md font-light text-ivory-100/65">{a.text}</p>
                  </div>
                  <ArrowIcon className="mt-2 h-6 w-6 shrink-0 text-gold-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* closing CTA */}
      <section className="relative overflow-hidden bg-pine-950 py-24 text-ivory-100 sm:py-32">
        <div className="wrap relative text-center">
          <Ornament />
          <MaskLines
            as="h2"
            delay={150}
            className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-[1.1] font-medium sm:text-5xl lg:text-6xl"
            lines={[
              "Tell us the date —",
              <em key="c" className="font-display italic text-gold-300">
                we'll shape the rest.
              </em>,
            ]}
          />
          <Reveal delay={450}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CTA onClick={() => onEnquire()}>Book Your Event</CTA>
              <a href={CONTACT.whatsapp.url} target="_blank" rel="noreferrer" className="btn btn-ghost-light">
                <span>WhatsApp Us</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
