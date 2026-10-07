import { cn } from "../utils/cn";
import {
  CHAPTERS,
  CONTACT,
  GALLERY,
  IMAGES,
  OCCASIONS,
  TICKER_ITEMS,
  VENUES,
} from "../data/content";
import { ICON_MAP, PhoneIcon, PinIcon, WhatsAppIcon } from "../components/Icons";
import {
  CTA,
  Eyebrow,
  Marquee,
  MaskLines,
  Ornament,
  Reveal,
  SectionHead,
} from "../components/ui";

type Props = { onEnquire: (type?: string) => void };

const DECOR_CARDS = [
  {
    n: "01",
    title: "Themes & Colour Concepts",
    text: "Every celebration begins with a mood. Our décor team shapes a theme and colour scheme around your occasion, then carries it through drapes, walkways and tables.",
    img: IMAGES.stage,
    tags: ["Theme-based décor", "Colour schemes"],
  },
  {
    n: "02",
    title: "Lighting & Florals",
    text: "Fairy-light canopies, lantern-lined walkways, marigolds and roses — the details that decide how the evening feels long after sunset.",
    img: IMAGES.entrance,
    tags: ["Lighting design", "Floral decoration"],
  },
  {
    n: "03",
    title: "A Customized Ambience",
    text: "No two occasions are dressed alike. Contemporary décor trends, executed with Punjabi warmth, turn an open ground into your celebration.",
    img: IMAGES.hero,
    tags: ["Customized ambience", "Contemporary trends"],
  },
];

export default function Home({ onEnquire }: Props) {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-pine-950 text-ivory-100">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Fair Farm Resort lawns dressed for an evening celebration"
            className="kenburns h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pine-950/95 via-pine-950/60 to-pine-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-transparent to-pine-950/50" />
        </div>

        <span className="absolute right-7 top-1/2 hidden -translate-y-1/2 rotate-180 text-[10px] uppercase tracking-[0.5em] text-ivory-100/45 xl:block [writing-mode:vertical-rl]">
          G.T. Road · Amritsar Bye Pass · Jalandhar
        </span>

        <div className="wrap relative flex flex-1 flex-col justify-end pb-10 pt-40">
          <Eyebrow className="text-gold-400">A Celebration Destination — Jalandhar, Punjab</Eyebrow>
          <MaskLines
            as="h1"
            delay={150}
            className="mt-6 max-w-4xl font-display text-[13.5vw] leading-[1.02] font-medium sm:text-6xl lg:text-7xl xl:text-8xl"
            lines={[
              "Sprawling lawns.",
              "Bespoke décor.",
              <em key="l3" className="font-display italic text-gold-300">
                Celebrations remembered.
              </em>,
            ]}
          />
          <Reveal delay={550}>
            <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-ivory-100/80 sm:text-lg">
              Fair Farm Resort is Jalandhar's address for weddings, receptions, parties and corporate
              gatherings — banquet halls, lush green lawns, in-house catering and décor, together under
              one roof.
            </p>
          </Reveal>
          <Reveal delay={700}>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTA onClick={() => onEnquire()}>Plan Your Celebration</CTA>
              <CTA href="#/spaces" variant="ghostLight">
                Explore Fair Farm
              </CTA>
            </div>
          </Reveal>
        </div>

        <div className="relative border-t border-ivory-100/15 bg-pine-950/40 backdrop-blur-sm">
          <div className="wrap grid gap-5 py-6 text-sm text-ivory-100/85 sm:grid-cols-3">
            <a href={CONTACT.maps.directions} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition-colors hover:text-gold-300">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span className="font-light">G.T. Road, Amritsar Bye Pass, Near Verka Milk Plant, Jalandhar</span>
            </a>
            <a href={`tel:${CONTACT.phones.reservation.tel}`} className="flex items-start gap-3 transition-colors hover:text-gold-300">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span className="font-light">
                Reservations — {CONTACT.phones.reservation.display}
              </span>
            </a>
            <p className="flex items-start gap-3 font-light">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="currentColor">
                <circle cx="12" cy="12" r="2.4" />
                <ellipse cx="12" cy="6.2" rx="2.1" ry="3.2" />
                <ellipse cx="12" cy="17.8" rx="2.1" ry="3.2" />
                <ellipse cx="6.2" cy="12" rx="3.2" ry="2.1" />
                <ellipse cx="17.8" cy="12" rx="3.2" ry="2.1" />
              </svg>
              Banquets · Lawns · Rooms · Catering · Décor
            </p>
          </div>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <Marquee
        items={TICKER_ITEMS}
        className="border-y border-gold-500/25 bg-pine-800 py-4 text-ivory-100"
        itemClassName="font-display italic text-lg text-gold-200"
      />

      {/* ============ STORY / CHAPTERS ============ */}
      <section className="relative overflow-hidden bg-ivory-100 py-24 sm:py-32">
        <div className="bg-mandala pointer-events-none absolute -right-56 -top-56 h-[640px] w-[640px] opacity-[0.07]" />
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHead
                eyebrow="The Fair Farm Story"
                lines={[
                  "Arrive as guests,",
                  <em key="f" className="font-display italic text-gold-600">
                    leave as family.
                  </em>,
                ]}
                copy="Set on G.T. Road along the Amritsar Bye Pass, Fair Farm Resort was built for gatherings — the kind where the whole family arrives, the lawns fill up, and the evening refuses to end. Weddings, receptions, parties, corporate events and stays all unfold here, with décor, catering and rooms arranged around one thing: your occasion."
              />
              <Reveal delay={420}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <CTA href="#/spaces" variant="ghostDark">Explore the Resort</CTA>
                  <CTA onClick={() => onEnquire()}>Enquire Now</CTA>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-7">
            {CHAPTERS.map((c, i) => {
              const Icon = ICON_MAP[c.icon];
              return (
                <Reveal key={c.n} delay={i * 60}>
                  <div className="group flex gap-6 border-b border-pine-800/15 py-7 first:pt-0">
                    <span className="w-12 shrink-0 font-display text-2xl text-gold-600">{c.n}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl text-pine-800 transition-colors group-hover:text-gold-700 sm:text-3xl">
                        {c.title}
                      </h3>
                      <p className="mt-2 max-w-lg font-light leading-relaxed text-pine-800/70">{c.text}</p>
                    </div>
                    <Icon className="mt-2 h-6 w-6 shrink-0 text-pine-800/30 transition-colors group-hover:text-gold-600" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CELEBRATIONS ============ */}
      <section className="relative overflow-hidden bg-pine-900 py-24 text-ivory-100 sm:py-32">
        <div className="bg-mandala pointer-events-none absolute -bottom-64 -left-64 h-[700px] w-[700px] opacity-[0.05]" />
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              tone="light"
              eyebrow="Celebrations"
              lines={[
                "Occasions worth",
                <em key="g" className="font-display italic text-gold-300">
                  the whole guest list.
                </em>,
              ]}
            />
            <Reveal delay={250}>
              <a href="#/celebrations" className="link-line flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-300">
                All celebrations <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>

          {OCCASIONS.map((o, i) => (
            <Reveal key={o.id}>
              <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={cn("imgzoom arch relative", i % 2 === 1 && "lg:order-2")}>
                  <img src={o.img} alt={o.title} className="h-[380px] w-full object-cover sm:h-[440px]" loading="lazy" />
                  <span className="absolute bottom-5 left-5 border border-gold-500/40 bg-pine-950/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold-300">
                    {o.tags[0]}
                  </span>
                </div>
                <div className={cn(i % 2 === 1 && "lg:order-1")}>
                  <p className="font-display text-xl italic text-gold-500">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-3xl font-medium sm:text-4xl">{o.title}</h3>
                  <p className="mt-4 max-w-md font-light leading-relaxed text-ivory-100/70">{o.copy}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {o.tags.map((t) => (
                      <span key={t} className="border border-ivory-100/20 px-3 py-1 text-xs font-light text-ivory-100/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-6">
                    <CTA onClick={() => onEnquire(o.enquiryType)}>Enquire Now</CTA>
                    <a href="#/celebrations" className="link-line text-xs uppercase tracking-[0.25em] text-ivory-100/70 hover:text-gold-300">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SPACES TEASER ============ */}
      <section className="bg-ivory-200 py-24 sm:py-32">
        <div className="wrap">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <SectionHead
              className="lg:col-span-7"
              eyebrow="Spaces & Venues"
              lines={["Room for every ritual,", "every reception."]}
              copy="Large lawns, banquet halls and styled event areas — capacity, layout and availability shared on enquiry."
            />
            <Reveal delay={250} className="lg:col-span-5 lg:pb-2 lg:text-right">
              <CTA href="#/spaces" variant="ghostDark">View Spaces</CTA>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <a href="#/spaces" className="imgzoom group relative block h-[380px] overflow-hidden lg:h-full lg:min-h-[560px]">
                <img src={VENUES[0].img} alt={VENUES[0].name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory-100">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-300">{VENUES[0].setting}</p>
                  <h3 className="mt-1 font-display text-2xl sm:text-3xl">{VENUES[0].name}</h3>
                  <p className="mt-2 text-xs font-light text-ivory-100/75">Capacity & layout — available on request</p>
                </div>
              </a>
            </Reveal>
            <div className="flex flex-col gap-5 lg:col-span-7">
              {VENUES.slice(1).map((v, i) => (
                <Reveal key={v.id} delay={i * 120}>
                  <a href="#/spaces" className="imgzoom group relative block h-[262px] overflow-hidden lg:h-[262px]">
                    <img src={v.img} alt={v.name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-pine-950/85 via-pine-950/30 to-transparent" />
                    <div className="absolute inset-y-0 left-0 flex max-w-[75%] flex-col justify-center p-6 text-ivory-100">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold-300">{v.setting}</p>
                      <h3 className="mt-1 font-display text-2xl sm:text-3xl">{v.name}</h3>
                      <p className="mt-2 text-xs font-light text-ivory-100/75">Capacity & layout — available on request</p>
                    </div>
                  </a>
                </Reveal>
              ))}
              <Reveal delay={260}>
                <a href="#/stay" className="group flex items-center justify-between border border-pine-800/25 px-6 py-5 transition-colors hover:border-gold-600 hover:bg-ivory-100">
                  <span className="font-display text-xl text-pine-800">
                    Guest rooms on the property <span className="text-gold-600">— Stay at Fair Farm</span>
                  </span>
                  <span className="text-gold-600 transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DÉCOR STACKED CARDS ============ */}
      <section className="relative overflow-hidden bg-pine-950 py-24 text-ivory-100 sm:py-32">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              tone="light"
              eyebrow="Décor & Design"
              lines={[
                "From empty grounds",
                <em key="d" className="font-display italic text-gold-300">
                  to your celebration.
                </em>,
              ]}
              copy="Themes, colour concepts, lighting and florals — our team transforms each space around your occasion."
            />
            <Reveal delay={250}>
              <a href="#/decor" className="link-line flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-300">
                Explore Décor <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>

          <div className="mt-16 space-y-8 lg:space-y-12">
            {DECOR_CARDS.map((d, i) => (
              <Reveal key={d.n}>
                <div className="lg:sticky" style={{ top: `${100 + i * 28}px` }}>
                  <div className="grid overflow-hidden border border-gold-500/25 bg-pine-900 shadow-2xl lg:grid-cols-2">
                    <div className="imgzoom relative h-64 sm:h-80 lg:h-auto">
                      <img src={d.img} alt={d.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-8 sm:p-12">
                      <p className="font-display text-xl italic text-gold-500">{d.n}</p>
                      <h3 className="mt-2 font-display text-3xl font-medium sm:text-4xl">{d.title}</h3>
                      <p className="mt-4 max-w-md font-light leading-relaxed text-ivory-100/70">{d.text}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {d.tags.map((t) => (
                          <span key={t} className="border border-gold-500/40 px-3 py-1 text-xs text-gold-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATERING TEASER ============ */}
      <section className="overflow-hidden bg-ivory-100 py-24 sm:py-32">
        <div className="wrap grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="The Fair Farm Table"
              lines={["Menus planned around", "your celebration."]}
              copy="Catering at Fair Farm is composed around the theme of your event and the preferences of your family — for wedding receptions, outdoor events, festivals and corporate gatherings alike."
            />
            <Reveal delay={420}>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTA onClick={() => onEnquire("Catering")}>Plan Your Menu</CTA>
                <CTA href="#/catering" variant="ghostDark">Discover Dining</CTA>
              </div>
            </Reveal>
          </div>
          <div className="relative h-[440px] sm:h-[520px]">
            <Reveal>
              <div className="imgzoom absolute left-0 top-0 w-[74%] -rotate-3 border-8 border-ivory-50 shadow-2xl">
                <img src={IMAGES.food} alt="A banquet laid out at Fair Farm Resort" className="h-[320px] w-full object-cover sm:h-[360px]" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="imgzoom absolute bottom-0 right-0 w-[56%] rotate-3 border-8 border-ivory-50 shadow-2xl">
                <img src={IMAGES.table} alt="Table setting with brass and marigold" className="h-[240px] w-full object-cover sm:h-[270px]" loading="lazy" />
              </div>
            </Reveal>
            <div className="drift absolute left-[56%] top-[54%] z-10">
              <span className="flex h-28 w-28 items-center justify-center rounded-full border border-gold-500/50 bg-pine-900 text-center text-[10px] uppercase leading-relaxed tracking-[0.22em] text-gold-300 shadow-xl">
                In-house
                <br />
                catering
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STAY TEASER ============ */}
      <section className="relative overflow-hidden bg-pine-900 py-24 text-ivory-100 sm:py-32">
        <div className="bg-mandala pointer-events-none absolute -right-48 -top-48 h-[560px] w-[560px] opacity-[0.05]" />
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="imgzoom arch relative">
              <img src={IMAGES.room} alt="A guest room at Fair Farm Resort" className="h-[420px] w-full object-cover sm:h-[480px]" loading="lazy" />
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:pl-6">
            <SectionHead
              tone="light"
              eyebrow="Stay at Fair Farm"
              lines={["Keep the night", <em key="s" className="font-display italic text-gold-300">going.</em>]}
              copy="Rooms at the resort mean hosts and travelling guests stay steps away from the celebration. Room categories, amenities and tariffs are shared on request by our reservations team."
            />
            <Reveal delay={420}>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTA href="#/stay">Explore Your Stay</CTA>
                <a href={`tel:${CONTACT.phones.reservation.tel}`} className="btn btn-ghost-light">
                  <PhoneIcon className="h-4 w-4" />
                  <span>Call Reservations</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ GALLERY STRIP ============ */}
      <section className="bg-pine-950 py-24 text-ivory-100 sm:py-32">
        <div className="wrap flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            tone="light"
            eyebrow="Gallery"
            lines={["Moments from", "the grounds."]}
          />
          <Reveal delay={250}>
            <a href="#/gallery" className="link-line flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-300">
              View Gallery <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="strip-scroll mt-12 flex snap-x gap-5 overflow-x-auto px-5 pb-4 sm:px-8">
            {GALLERY.slice(0, 7).map((g) => (
              <a key={g.src} href="#/gallery" className="imgzoom group relative w-[280px] shrink-0 snap-start overflow-hidden sm:w-[340px]">
                <img src={g.src} alt={g.caption} className="h-[400px] w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-300">{g.cat}</p>
                  <p className="mt-1 font-display text-lg italic text-ivory-100">{g.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============ LOCATION BAND ============ */}
      <section className="bg-ivory-200 py-20 sm:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Finding Fair Farm"
              lines={["On G.T. Road,", "easy to reach."]}
              copy="Along the Amritsar Bye Pass, near Verka Milk Plant — our team is happy to guide your guests in, from anywhere in the city."
            />
            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={CONTACT.maps.directions} target="_blank" rel="noreferrer" className="btn btn-gold">
                  <PinIcon className="h-4 w-4" />
                  <span>Get Directions</span>
                </a>
                <a href={CONTACT.whatsapp.url} target="_blank" rel="noreferrer" className="btn btn-ghost-dark">
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="imgzoom relative overflow-hidden">
              <img src={IMAGES.aerial} alt="The Fair Farm Resort grounds from above" className="h-[360px] w-full object-cover sm:h-[400px]" loading="lazy" />
              <div className="absolute bottom-5 left-5 flex max-w-xs items-start gap-3 border border-gold-500/30 bg-pine-950/85 p-5 text-ivory-100 backdrop-blur-sm">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <p className="text-sm font-light leading-relaxed">{CONTACT.addressSingle}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden bg-pine-950 py-24 text-ivory-100 sm:py-36">
        <div className="bg-mandala pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />
        <div className="wrap relative text-center">
          <Ornament />
          <MaskLines
            as="h2"
            delay={150}
            className="mx-auto mt-8 max-w-4xl font-display text-4xl leading-[1.1] font-medium sm:text-5xl lg:text-6xl"
            lines={[
              "Your celebration deserves",
              <em key="f" className="font-display italic text-gold-300">
                a setting worth remembering.
              </em>,
            ]}
          />
          <Reveal delay={450}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CTA onClick={() => onEnquire()}>Plan Your Event</CTA>
              <a href={`tel:${CONTACT.phones.booking.tel}`} className="btn btn-ghost-light">
                <PhoneIcon className="h-4 w-4" />
                <span>Call {CONTACT.phones.booking.display}</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={600}>
            <p className="mt-8 text-sm font-light text-ivory-100/60">
              <a href={CONTACT.whatsapp.url} target="_blank" rel="noreferrer" className="link-line text-gold-300">WhatsApp</a>
              <span className="mx-3 text-ivory-100/30">·</span>
              <a href={`mailto:${CONTACT.email}`} className="link-line text-gold-300">{CONTACT.email}</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
