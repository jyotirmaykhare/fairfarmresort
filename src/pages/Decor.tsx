import { CONTACT, DECOR_ON_REQUEST, DECOR_PROCESS, DECOR_SERVICES, IMAGES } from "../data/content";
import { DiyaIcon, FlowerIcon } from "../components/Icons";
import { CTA, MaskLines, Ornament, PageHero, Reveal, SectionHead } from "../components/ui";

type Props = { onEnquire: (type?: string) => void };

const DECOR_IMAGERY = [
  { src: IMAGES.stage, label: "Stage & florals" },
  { src: IMAGES.entrance, label: "Entrances & walkways" },
  { src: IMAGES.hero, label: "Lawns after dark" },
];

export default function Decor({ onEnquire }: Props) {
  return (
    <>
      <PageHero
        img={IMAGES.stage}
        eyebrow="Décor & Design"
        tall
        lines={[
          "From empty grounds",
          <em key="d" className="font-display italic text-gold-300">
            to your celebration.
          </em>,
        ]}
        copy="Themes, colour concepts, lighting and flowers — our décor team transforms each space at Fair Farm around your occasion, never off the shelf."
      >
        <CTA onClick={() => onEnquire("Decoration")}>Plan Your Décor</CTA>
        <CTA href="#/spaces" variant="ghostLight">View Spaces</CTA>
      </PageHero>

      {/* story */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHead
                eyebrow="How we work"
                lines={["A space, transformed", "for the occasion."]}
              />
              <Reveal delay={350}>
                <div className="mt-8 flex items-center gap-4 text-gold-600">
                  <DiyaIcon className="h-8 w-8" />
                  <span className="h-px flex-1 bg-gold-600/40" />
                  <FlowerIcon className="h-8 w-8" />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-pine-800/80 lg:col-span-7">
            <Reveal>
              <p>
                The same lawn can feel like a hundred different celebrations. That is the craft we care
                about most at Fair Farm — taking an open, green space and dressing it until it belongs
                entirely to your occasion.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Every setup begins with your theme and your colour scheme. From there, lighting decides
                how the evening feels after sunset, flowers carry the palette through stages and walkways,
                and contemporary décor trends are folded in where they suit the moment.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                The result is a customized ambience — one built for your event alone, and taken down
                before the next family arrives with a celebration of its own.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* what we create — ledger */}
      <section className="bg-pine-900 py-24 text-ivory-100 sm:py-32">
        <div className="wrap">
          <SectionHead
            tone="light"
            eyebrow="What we create"
            lines={["The elements of", "an ambience."]}
          />
          <div className="mt-14 grid gap-x-14 sm:grid-cols-2">
            {DECOR_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 90}>
                <div className="group border-b border-ivory-100/15 py-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl text-ivory-100 transition-colors group-hover:text-gold-300">
                      {s.title}
                    </h3>
                    <span className="font-display text-sm italic text-gold-500">0{i + 1}</span>
                  </div>
                  <p className="mt-2 max-w-md font-light text-ivory-100/65">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 border border-gold-500/25 bg-pine-950 p-8 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="eyebrow text-gold-400">Available on request</p>
                  <p className="mt-3 max-w-md font-light text-ivory-100/70">
                    Some concepts are shaped per event — ask us what's possible for your date.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {DECOR_ON_REQUEST.map((t) => (
                    <span key={t} className="border border-gold-500/40 px-4 py-2 text-xs tracking-wide text-gold-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* process */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="wrap">
          <SectionHead
            eyebrow="The journey"
            lines={["Four steps to", "a dressed venue."]}
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {DECOR_PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 110}>
                <div className="relative border-t-2 border-gold-500/60 pt-6">
                  <span className="font-display text-5xl font-light text-gold-600/80">{p.n}</span>
                  <h3 className="mt-3 font-display text-2xl text-pine-800">{p.title}</h3>
                  <p className="mt-2 font-light leading-relaxed text-pine-800/70">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* imagery */}
      <section className="bg-pine-950 py-24 text-ivory-100 sm:py-32">
        <div className="wrap">
          <SectionHead
            tone="light"
            eyebrow="Recent moods"
            lines={["Settings we've", "shaped."]}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {DECOR_IMAGERY.map((d, i) => (
              <Reveal key={d.label} delay={i * 120}>
                <figure className="imgzoom arch relative">
                  <img src={d.src} alt={d.label} className="h-[380px] w-full object-cover sm:h-[440px]" loading="lazy" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-950/90 to-transparent p-5 pt-14">
                    <span className="font-display text-lg italic text-gold-300">{d.label}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* closing */}
      <section className="bg-ivory-200 py-24 sm:py-32">
        <div className="wrap text-center">
          <Ornament />
          <MaskLines
            as="h2"
            delay={150}
            className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-[1.1] font-medium text-pine-800 sm:text-5xl lg:text-6xl"
            lines={[
              "Describe the mood —",
              <em key="m" className="font-display italic text-gold-600">
                we'll build the setting.
              </em>,
            ]}
          />
          <Reveal delay={450}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CTA onClick={() => onEnquire("Decoration")}>Plan Your Décor</CTA>
              <a href={`tel:${CONTACT.phones.booking.tel}`} className="btn btn-ghost-dark">
                <span>Call {CONTACT.phones.booking.display}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
