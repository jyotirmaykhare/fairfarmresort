/* ============================================================
   FAIR FARM RESORT — CENTRAL CONTENT CONFIGURATION
   Single source of truth. Update contact details, venues and
   collections here; every page reads from this file.
   Only verified property information is published. Anything
   unconfirmed is marked "Available on request" on the site.
   ============================================================ */

import heroImg from "../assets/img/hero.jpg";
import lawnDayImg from "../assets/img/lawn-day.jpg";
import banquetImg from "../assets/img/banquet.jpg";
import stageImg from "../assets/img/stage.jpg";
import foodImg from "../assets/img/food.jpg";
import roomImg from "../assets/img/room.jpg";
import entranceImg from "../assets/img/entrance.jpg";
import aerialImg from "../assets/img/aerial.jpg";
import tableImg from "../assets/img/table.jpg";
import sangeetImg from "../assets/img/sangeet.jpg";

export const IMAGES = {
  hero: heroImg,
  lawnDay: lawnDayImg,
  banquet: banquetImg,
  stage: stageImg,
  food: foodImg,
  room: roomImg,
  entrance: entranceImg,
  aerial: aerialImg,
  table: tableImg,
  sangeet: sangeetImg,
};

export const CONTACT = {
  name: "Fair Farm Resort",
  descriptor: "Jalandhar · Punjab",
  addressSingle:
    "G.T. Road, Amritsar Bye Pass, Near Verka Milk Plant, Jalandhar City, Punjab, India",
  addressLines: [
    "G.T. Road, Amritsar Bye Pass,",
    "Near Verka Milk Plant,",
    "Jalandhar City, Punjab, India",
  ],
  landmark: "Near Verka Milk Plant, on the Amritsar Bye Pass",
  phones: {
    reservation: { label: "Reservations", display: "+91-181-229 0442", tel: "+911812290442" },
    booking: { label: "Bookings & Events", display: "+91-97797 14003", tel: "+919779714003" },
  },
  whatsapp: { display: "+91-97797 14003", url: "https://wa.me/919779714003" },
  email: "booking@fairfarmresorts.com",
  maps: {
    directions:
      "https://www.google.com/maps/search/?api=1&query=Fair+Farm+Resort+Jalandhar",
    embed:
      "https://www.google.com/maps?q=Fair%20Farm%20Resort%2C%20G.T.%20Road%2C%20Amritsar%20Bye%20Pass%2C%20Jalandhar&output=embed&z=14",
  },
  website: "https://fairfarmresorts.com/",
};

export const NAV_LINKS = [
  { label: "Home", href: "#/" },
  { label: "Celebrations", href: "#/celebrations" },
  { label: "Spaces", href: "#/spaces" },
  { label: "Décor", href: "#/decor" },
  { label: "Dining", href: "#/catering" },
  { label: "Stay", href: "#/stay" },
  { label: "Gallery", href: "#/gallery" },
  { label: "Location", href: "#/location" },
  { label: "Contact", href: "#/contact" },
];

export const TICKER_ITEMS = [
  "Weddings",
  "Receptions",
  "Engagements",
  "Sangeet Nights",
  "Birthdays",
  "Anniversaries",
  "Corporate Gatherings",
  "Festivals",
  "Family Celebrations",
];

export const ENQUIRY_TYPES = [
  "Wedding",
  "Reception / Party",
  "Corporate Event",
  "Catering",
  "Decoration",
  "Stay / Rooms",
  "Other",
];

/* ---------- homepage narrative ---------- */
export const CHAPTERS = [
  {
    n: "01",
    title: "Arrive",
    text: "Turn off the Amritsar Bye Pass onto G.T. Road — the lawns open up and the city noise fades behind you.",
    icon: "compass",
  },
  {
    n: "02",
    title: "Discover",
    text: "Walk the grounds with our team — the lawns, the banquet halls, and every corner that could hold your occasion.",
    icon: "leaf",
  },
  {
    n: "03",
    title: "Celebrate",
    text: "Décor built around your theme and colours, lights that stay on past midnight, rituals given room to breathe.",
    icon: "spark",
  },
  {
    n: "04",
    title: "Dine",
    text: "A menu planned around your event — composed for your guest list and served warm through the evening.",
    icon: "dining",
  },
  {
    n: "05",
    title: "Stay",
    text: "When the night winds down, rooms at the resort mean nobody has to say goodbye too soon.",
    icon: "key",
  },
  {
    n: "06",
    title: "Remember",
    text: "You leave with photographs — and with a place your family will want to return to.",
    icon: "camera",
  },
] as const;

/* ---------- occasions ---------- */
export type Occasion = {
  id: string;
  title: string;
  img: string;
  copy: string;
  tags: string[];
  enquiryType: string;
};

export const OCCASIONS: Occasion[] = [
  {
    id: "weddings",
    title: "Weddings",
    img: stageImg,
    copy: "From the first ceremony to the final farewell — weddings at Fair Farm unfold across open lawns and elegant halls, with décor, catering and rooms together under one roof.",
    tags: ["Ceremonies", "Receptions", "Engagements", "Pre-wedding celebrations", "Family celebrations"],
    enquiryType: "Wedding",
  },
  {
    id: "receptions",
    title: "Receptions & Parties",
    img: sangeetImg,
    copy: "Sangeet nights that run late, receptions that fill the lawn, and parties planned down to the last lantern — hosted against settings dressed for the occasion.",
    tags: ["Sangeet nights", "Receptions", "Private parties", "Milestone evenings"],
    enquiryType: "Reception / Party",
  },
  {
    id: "corporate",
    title: "Corporate Gatherings",
    img: banquetImg,
    copy: "Conferences, team gatherings and business events held away from the office — with catering, spaces and décor arranged around your agenda.",
    tags: ["Corporate events", "Conferences", "Team gatherings", "Business dinners"],
    enquiryType: "Corporate Event",
  },
  {
    id: "family",
    title: "Family Celebrations",
    img: tableImg,
    copy: "Birthdays, anniversaries and gatherings of every kind — long tables, green lawns, and a team that treats your guests like our own.",
    tags: ["Birthdays", "Anniversaries", "Gatherings", "Festive celebrations"],
    enquiryType: "Reception / Party",
  },
];

/* ---------- spaces / venues ----------
   Capacities, areas and detailed facilities are intentionally
   unpublished until confirmed by the resort — the site presents
   them as "Available on request". */
export type Venue = {
  id: string;
  name: string;
  setting: string;
  img: string;
  suitable: string[];
  copy: string;
};

export const VENUES: Venue[] = [
  {
    id: "lawns",
    name: "The Open Lawns",
    setting: "Outdoor",
    img: lawnDayImg,
    suitable: ["Weddings", "Receptions", "Large gatherings", "Outdoor events"],
    copy: "The signature of Fair Farm — large, lush green lawns laid out under open sky, dressed with mandaps, canopies and light for the biggest nights of your life.",
  },
  {
    id: "halls",
    name: "Banquet Halls",
    setting: "Indoor",
    img: banquetImg,
    suitable: ["Receptions", "Corporate events", "Dinners", "Celebrations"],
    copy: "Elegant indoor halls with bespoke interiors — tables set, chandeliers lit, and every detail arranged for receptions, dinners and gatherings of every scale.",
  },
  {
    id: "areas",
    name: "Event Areas & Entrances",
    setting: "Indoor & Outdoor",
    img: entranceImg,
    suitable: ["Intimate functions", "Styled corners", "Entrances", "Photo moments"],
    copy: "Entrances, walkways and event areas styled to your occasion — because the first steps into a celebration are part of the celebration itself.",
  },
];

/* ---------- décor ---------- */
export const DECOR_SERVICES = [
  { title: "Theme-based décor", text: "Complete settings built around the theme of your event — conceived, then carried through the venue." },
  { title: "Colour concepts", text: "Colour schemes that travel through every detail, from drapes and mandaps to the tables." },
  { title: "Lighting design", text: "Fairy-light canopies, warm washes and lanterns that decide how the evening feels after sunset." },
  { title: "Floral decoration", text: "Marigolds, roses and seasonal blooms worked through stages, entrances and walkways." },
  { title: "Customized ambience", text: "Settings shaped around your occasion and your preferences — never off the shelf." },
  { title: "Contemporary décor trends", text: "Current ideas in event design, executed with characteristic Punjabi warmth." },
];

export const DECOR_ON_REQUEST = [
  "Stage & mandap concepts",
  "Entrance décor",
  "Table styling",
  "Bespoke installations",
];

export const DECOR_PROCESS = [
  { n: "01", title: "Consult", text: "Tell us the occasion, the mood and the colours you love." },
  { n: "02", title: "Concept", text: "Our team shapes a theme and palette around your celebration." },
  { n: "03", title: "Craft", text: "Florals, lighting and décor are built into the space itself." },
  { n: "04", title: "Celebrate", text: "You walk in as a guest; the setting does the rest." },
];

/* ---------- catering ---------- */
export const CATERING_CONTEXTS = [
  { title: "Wedding receptions", text: "Feasts for long guest lists, planned around the theme of your event and served warm through the evening.", icon: "rings" },
  { title: "Outdoor events", text: "Counters and service laid out across the lawns for open-air celebrations.", icon: "leaf" },
  { title: "Festivals", text: "Festive menus composed for seasonal celebrations and family occasions.", icon: "spark" },
  { title: "Corporate gatherings", text: "From working lunches to gala dinners for business events and team gatherings.", icon: "briefcase" },
];

/* ---------- verified property highlights ---------- */
export const PROPERTY_HIGHLIGHTS = [
  { icon: "leaf", title: "Lush green lawns", text: "Large, open lawns at the heart of the property." },
  { icon: "arch", title: "Banquet halls", text: "Indoor halls finished with bespoke interiors." },
  { icon: "spark", title: "Stunning decorations", text: "Theme-based décor, colours, lighting and flowers." },
  { icon: "dining", title: "In-house catering", text: "Menus planned around your event and preferences." },
  { icon: "expand", title: "Ample space", text: "Room for ceremonies, gatherings and every ritual between." },
  { icon: "key", title: "Guest rooms", text: "Rooms at the resort for hosts and travelling guests." },
  { icon: "flower", title: "Event decoration", text: "Customized ambience created for each occasion." },
  { icon: "users", title: "Celebration-first", text: "A destination built around marriages, parties and events." },
];

/* ---------- gallery ---------- */
export type GalleryItem = {
  src: string;
  cat: string;
  caption: string;
};

export const GALLERY_CATS = ["All", "Resort", "Celebrations", "Décor", "Dining", "Spaces", "Rooms"];

export const GALLERY: GalleryItem[] = [
  { src: heroImg, cat: "Celebrations", caption: "The lawn, dressed for the evening" },
  { src: lawnDayImg, cat: "Spaces", caption: "Open lawns in daylight" },
  { src: stageImg, cat: "Décor", caption: "Florals and warm light on the stage" },
  { src: foodImg, cat: "Dining", caption: "A banquet, laid out" },
  { src: entranceImg, cat: "Décor", caption: "The walkway, strung with light" },
  { src: banquetImg, cat: "Spaces", caption: "Banquet hall set for a reception" },
  { src: sangeetImg, cat: "Celebrations", caption: "A sangeet night under the canopy" },
  { src: roomImg, cat: "Rooms", caption: "A guest room at the resort" },
  { src: tableImg, cat: "Dining", caption: "Brass, ivory and marigold on the table" },
  { src: aerialImg, cat: "Resort", caption: "The grounds from above" },
];

/* ---------- stay ----------
   Room categories, sizes, amenities and tariffs are not yet
   confirmed by the resort — presented as available on request. */
export const STAY_POINTS = [
  { icon: "key", title: "Rooms at the resort", text: "Accommodation on the property, for hosts and travelling guests." },
  { icon: "users", title: "For the whole party", text: "Keep family close through multi-day celebrations." },
  { icon: "phone", title: "Details on request", text: "Room categories, amenities and tariffs are shared by our reservations team." },
];
