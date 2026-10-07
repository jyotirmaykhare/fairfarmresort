import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { ArrowIcon, FlowerIcon } from "./Icons";

/* ---------- scroll reveal wrapper ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={shown ? "shown" : ""}
      className={className}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ---------- line-mask heading reveal ---------- */
export function MaskLines({
  lines,
  className,
  lineClassName,
  as: Tag = "h2",
  delay = 0,
  step = 130,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
  step?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={cn(className, inView && "masks-in")}>
      {lines.map((line, i) => (
        <span className="mask-line" key={i}>
          <span
            className={cn("mask-inner", lineClassName)}
            style={{ transitionDelay: `${delay + i * step}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/* ---------- eyebrow label ---------- */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-3 text-gold-600", className)}>
      <span className="h-px w-10 bg-current opacity-70" />
      {children}
    </span>
  );
}

/* ---------- ornamental divider ---------- */
export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3 text-gold-500", className)} aria-hidden="true">
      <span className="h-px w-16 sm:w-24 bg-gold-500/50" />
      <svg viewBox="0 0 24 24" className="w-3 h-3 rotate-45" fill="currentColor">
        <rect x="7" y="7" width="10" height="10" />
      </svg>
      <FlowerIcon className="w-5 h-5" />
      <svg viewBox="0 0 24 24" className="w-3 h-3 rotate-45" fill="currentColor">
        <rect x="7" y="7" width="10" height="10" />
      </svg>
      <span className="h-px w-16 sm:w-24 bg-gold-500/50" />
    </div>
  );
}

/* ---------- marquee ticker ---------- */
export function Marquee({
  items,
  className,
  itemClassName,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={cn("marquee-wrap overflow-hidden", className)}>
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {items.map((it, i) => (
              <span key={i} className={cn("flex items-center", itemClassName)}>
                <span className="whitespace-nowrap">{it}</span>
                <FlowerIcon className="mx-6 w-3.5 h-3.5 shrink-0 text-gold-500" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- CTA link / button ---------- */
export function CTA({
  href,
  onClick,
  variant = "gold",
  children,
  className,
  arrow = true,
}: {
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "ghostLight" | "ghostDark";
  children: ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  const cls = cn(
    "btn",
    variant === "gold" && "btn-gold",
    variant === "ghostLight" && "btn-ghost-light",
    variant === "ghostDark" && "btn-ghost-dark",
    className
  );
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowIcon className="w-3.5 h-3.5" />}
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

/* ---------- subpage hero ---------- */
export function PageHero({
  img,
  eyebrow,
  lines,
  copy,
  children,
  tall,
}: {
  img: string;
  eyebrow: string;
  lines: ReactNode[];
  copy?: string;
  children?: ReactNode;
  tall?: boolean;
}) {
  return (
    <header className={cn("relative overflow-hidden bg-pine-950 text-ivory-100", tall ? "min-h-[86vh]" : "min-h-[68vh]")}>
      <div className="absolute inset-0">
        <img src={img} alt="" className="kenburns h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-950/95 via-pine-950/70 to-pine-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-transparent to-pine-950/60" />
      </div>
      <div className={cn("wrap relative flex flex-col justify-end", tall ? "pt-44 pb-20" : "pt-40 pb-16")}>
        <Eyebrow className="text-gold-400">{eyebrow}</Eyebrow>
        <MaskLines
          as="h1"
          delay={150}
          lines={lines}
          className="mt-5 font-display text-[13vw] leading-[1.04] sm:text-6xl lg:text-7xl font-medium"
        />
        {copy && (
          <Reveal delay={500}>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-ivory-100/80 font-light leading-relaxed">{copy}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={650}>
            <div className="mt-8 flex flex-wrap gap-4">{children}</div>
          </Reveal>
        )}
      </div>
    </header>
  );
}

/* ---------- section heading block ---------- */
export function SectionHead({
  eyebrow,
  lines,
  copy,
  tone = "dark",
  className,
  children,
}: {
  eyebrow: string;
  lines: ReactNode[];
  copy?: string;
  tone?: "dark" | "light";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={className}>
      <Eyebrow className={tone === "dark" ? "text-gold-600" : "text-gold-400"}>{eyebrow}</Eyebrow>
      <MaskLines
        as="h2"
        delay={100}
        lines={lines}
        className={cn(
          "mt-4 font-display text-4xl leading-[1.06] sm:text-5xl lg:text-6xl font-medium",
          tone === "dark" ? "text-pine-800" : "text-ivory-100"
        )}
      />
      {copy && (
        <Reveal delay={300}>
          <p
            className={cn(
              "mt-5 max-w-xl leading-relaxed font-light",
              tone === "dark" ? "text-pine-800/75" : "text-ivory-100/75"
            )}
          >
            {copy}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
