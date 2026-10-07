import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "../utils/cn";
import { GALLERY, GALLERY_CATS, IMAGES } from "../data/content";
import { ChevronLeft, ChevronRight, CloseIcon } from "../components/Icons";
import { CTA, PageHero, Reveal } from "../components/ui";

type Props = { onEnquire: (type?: string) => void };

export default function Gallery({ onEnquire }: Props) {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat)),
    [cat]
  );

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  return (
    <>
      <PageHero
        img={IMAGES.entrance}
        eyebrow="Gallery"
        lines={[
          "The grounds,",
          <em key="g" className="font-display italic text-gold-300">
            dressed & lit.
          </em>,
        ]}
        copy="Lawns, halls, décor, dining and rooms — a look at Fair Farm as it fills up for a celebration."
      />

      <section className="bg-ivory-100 py-20 sm:py-28">
        <div className="wrap">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {GALLERY_CATS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCat(c);
                    setLightbox(null);
                  }}
                  className={cn(
                    "border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300",
                    cat === c
                      ? "border-gold-600 bg-gold-500 text-pine-900"
                      : "border-pine-800/25 text-pine-800/70 hover:border-gold-600 hover:text-gold-700"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 columns-2 gap-5 lg:columns-3 [column-fill:_balance]">
            {items.map((g, i) => (
              <Reveal key={g.src + cat} delay={(i % 3) * 90} className="mb-5 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="imgzoom group relative block w-full overflow-hidden text-left"
                >
                  <img
                    src={g.src}
                    alt={g.caption}
                    className={cn("w-full object-cover", i % 3 === 0 ? "h-[340px] sm:h-[440px]" : i % 3 === 1 ? "h-[260px] sm:h-[320px]" : "h-[300px] sm:h-[380px]")}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold-300">{g.cat}</p>
                    <p className="mt-1 font-display text-lg italic text-ivory-100">{g.caption}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-pine-800/15 pt-10">
              <p className="max-w-md font-display text-2xl italic text-pine-800/70">
                The best measure of a venue is seeing it dressed for someone's big day.
              </p>
              <CTA onClick={() => onEnquire()}>Plan Your Celebration</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* lightbox */}
      {lightbox !== null && items[lightbox] && (
        <div className="fixed inset-0 z-[85] flex flex-col bg-pine-950/95 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <p className="text-xs uppercase tracking-[0.3em] text-ivory-100/60">
              {items[lightbox].cat} — {lightbox + 1} / {items.length}
            </p>
            <button type="button" onClick={close} className="text-ivory-100 transition-colors hover:text-gold-300" aria-label="Close gallery">
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-5 pb-8 sm:px-20">
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center border border-ivory-100/25 text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-300 sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <figure className="flex max-h-full flex-col items-center">
              <img src={items[lightbox].src} alt={items[lightbox].caption} className="max-h-[72vh] w-auto max-w-full object-contain shadow-2xl" />
              <figcaption className="mt-4 font-display text-lg italic text-gold-300">{items[lightbox].caption}</figcaption>
            </figure>
            <button
              type="button"
              onClick={() => step(1)}
              className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center border border-ivory-100/25 text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-300 sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
