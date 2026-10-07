type IconProps = { className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const PhoneIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="M5 4.5C5 3.7 5.7 3 6.5 3h2L10 7l-2 1.5c.8 2 2.5 3.7 4.5 4.5L14 11l4 1.5v2c0 .8-.7 1.5-1.5 1.5C10 16 8 11 5 4.5Z" />
    <path d="M14.5 5.5c2.5.5 4 2 4.5 4.5" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2.5A9.5 9.5 0 0 0 3.8 16.8L2.5 21.5l4.8-1.3A9.5 9.5 0 1 0 12 2.5Zm0 17.2c-1.6 0-3-.4-4.3-1.2l-.3-.2-2.8.7.8-2.7-.2-.3A7.7 7.7 0 1 1 12 19.7Zm4.3-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.3 6.3 0 0 1-3.1-2.7c-.2-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5L9.7 8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1 2.2-.2 3.7 1 1.9 2.6 3.4 4.6 4.2 2.4 1 3.3.8 4 .6.6-.2 1.3-.8 1.4-1.4.1-.5.1-1 0-1.1l-.5-.4Z" />
  </svg>
);

export const MailIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);

export const PinIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="M12 21s-6.5-5.8-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.2 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.3" />
  </svg>
);

export const ArrowIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="M6 18 18 6M9 6h9v9" />
  </svg>
);

export const MenuIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="M3.5 7h17M3.5 12h11M3.5 17h17" />
  </svg>
);

export const CloseIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const CheckIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const ChevronLeft = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="m14.5 5.5-6.5 6.5 6.5 6.5" />
  </svg>
);

export const ChevronRight = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
  </svg>
);

/* Marigold flower — the brand motif */
export const FlowerIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <circle cx="12" cy="12" r="2.4" />
    <ellipse cx="12" cy="6.2" rx="2.1" ry="3.2" />
    <ellipse cx="12" cy="17.8" rx="2.1" ry="3.2" />
    <ellipse cx="6.2" cy="12" rx="3.2" ry="2.1" />
    <ellipse cx="17.8" cy="12" rx="3.2" ry="2.1" />
    <ellipse cx="7.9" cy="7.9" rx="2" ry="2.8" transform="rotate(-45 7.9 7.9)" />
    <ellipse cx="16.1" cy="16.1" rx="2" ry="2.8" transform="rotate(-45 16.1 16.1)" />
    <ellipse cx="16.1" cy="7.9" rx="2" ry="2.8" transform="rotate(45 16.1 7.9)" />
    <ellipse cx="7.9" cy="16.1" rx="2" ry="2.8" transform="rotate(45 7.9 16.1)" />
  </svg>
);

export const LeafIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="M19 5c-8 0-13 4.5-13 11 0 1.8.6 3 1.5 3.5C13 19.5 19 14 19 5Z" />
    <path d="M6.5 19.5C9 14 13 10 17 7.5" />
  </svg>
);

export const DiyaIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="M4.5 14h15c-.5 3.5-3.5 6-7.5 6s-7-2.5-7.5-6Z" />
    <path d="M12 11.5c1.5-1.2 1.8-2.8.3-4.5-.3 1-1.3 1.3-1.8 2.2-.4.9 0 1.9 1.5 2.3Z" />
  </svg>
);

export const RingsIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <circle cx="9" cy="13.5" r="5" />
    <circle cx="15.5" cy="10.5" r="5" />
    <path d="m15.5 2.8 1.6 1.9-1.6 1.9-1.6-1.9Z" />
  </svg>
);

export const UsersIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19.5c.5-3.5 2.7-5.5 5.5-5.5s5 2 5.5 5.5" />
    <path d="M15 5.3a3.2 3.2 0 0 1 0 5.9M17.5 14.4c1.6.8 2.7 2.6 3 5.1" />
  </svg>
);

export const CalendarIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    <path d="M7.5 13h3M7.5 16.5h6" />
  </svg>
);

export const SparkIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="M12 3.5c.6 3.8 2.4 5.9 6.5 6.5-4.1.6-5.9 2.7-6.5 6.5-.6-3.8-2.4-5.9-6.5-6.5 4.1-.6 5.9-2.7 6.5-6.5Z" />
    <path d="M18.5 15.5c.3 1.8 1.1 2.7 3 3-1.9.3-2.7 1.2-3 3-.3-1.8-1.1-2.7-3-3 1.9-.3 2.7-1.2 3-3Z" />
  </svg>
);

export const ArchIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="M5 20V11a7 7 0 0 1 14 0v9" />
    <path d="M3.5 20h17M9 20v-6a3 3 0 0 1 6 0v6" />
  </svg>
);

export const DiningIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="M6 3.5v6M4 3.5v3.5a2 2 0 0 0 4 0V3.5M6 9.5V20.5" />
    <path d="M17.5 3.5c-2 1-3 3.5-3 6.5 0 2 1 3 2.5 3v7.5M17.5 3.5v9.5" />
  </svg>
);

export const CompassIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5Z" />
  </svg>
);

export const KeyIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <circle cx="8" cy="8.5" r="4.5" />
    <path d="m11.5 11.5 8 8M17 17l2-2M14.5 14.5l2-2" />
  </svg>
);

export const CameraIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13.5" r="3.5" />
  </svg>
);

export const BriefcaseIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <rect x="3.5" y="7.5" width="17" height="12.5" rx="1.5" />
    <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M3.5 12.5h17M12 11v3" />
  </svg>
);

export const ExpandIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S}>
    <path d="M9 4.5H4.5V9M15 4.5h4.5V9M9 19.5H4.5V15M15 19.5h4.5V15" />
  </svg>
);

export const ICON_MAP: Record<string, (p: IconProps) => React.ReactElement> = {
  compass: CompassIcon,
  leaf: LeafIcon,
  spark: SparkIcon,
  dining: DiningIcon,
  key: KeyIcon,
  camera: CameraIcon,
  rings: RingsIcon,
  briefcase: BriefcaseIcon,
  arch: ArchIcon,
  expand: ExpandIcon,
  flower: FlowerIcon,
  users: UsersIcon,
  phone: PhoneIcon,
  diya: DiyaIcon,
};
