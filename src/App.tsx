import { useCallback, useEffect, useState, type ReactNode } from "react";
import { EnquiryModal, FloatingActions, Footer, Nav } from "./components/Chrome";
import Home from "./pages/Home";
import Celebrations from "./pages/Celebrations";
import Spaces from "./pages/Spaces";
import Decor from "./pages/Decor";
import Catering from "./pages/Catering";
import Stay from "./pages/Stay";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

const TITLES: Record<string, string> = {
  "#/": "Fair Farm Resort, Jalandhar — Weddings, Celebrations & Events",
  "#/celebrations": "Celebrations — Fair Farm Resort, Jalandhar",
  "#/spaces": "Spaces & Venues — Fair Farm Resort, Jalandhar",
  "#/decor": "Décor & Design — Fair Farm Resort, Jalandhar",
  "#/catering": "Catering & Dining — Fair Farm Resort, Jalandhar",
  "#/stay": "Stay — Fair Farm Resort, Jalandhar",
  "#/gallery": "Gallery — Fair Farm Resort, Jalandhar",
  "#/location": "Location & Travel — Fair Farm Resort, Jalandhar",
  "#/contact": "Contact & Enquiries — Fair Farm Resort, Jalandhar",
};

function getRoute() {
  const h = window.location.hash || "#/";
  return h in TITLES ? h : "#/";
}

export default function App() {
  const [route, setRoute] = useState(getRoute);
  const [enquiry, setEnquiry] = useState({ open: false, type: "Wedding" });

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.title = TITLES[route] ?? TITLES["#/"];
  }, [route]);

  const onEnquire = useCallback((type = "Wedding") => setEnquiry({ open: true, type }), []);
  const closeEnquiry = useCallback(() => setEnquiry((s) => ({ ...s, open: false })), []);

  let page: ReactNode;
  switch (route) {
    case "#/celebrations":
      page = <Celebrations onEnquire={onEnquire} />;
      break;
    case "#/spaces":
      page = <Spaces onEnquire={onEnquire} />;
      break;
    case "#/decor":
      page = <Decor onEnquire={onEnquire} />;
      break;
    case "#/catering":
      page = <Catering onEnquire={onEnquire} />;
      break;
    case "#/stay":
      page = <Stay onEnquire={onEnquire} />;
      break;
    case "#/gallery":
      page = <Gallery onEnquire={onEnquire} />;
      break;
    case "#/location":
      page = <Location onEnquire={onEnquire} />;
      break;
    case "#/contact":
      page = <Contact />;
      break;
    default:
      page = <Home onEnquire={onEnquire} />;
  }

  return (
    <div className="grain min-h-screen bg-ivory-100 font-body text-pine-800">
      <Nav route={route} onEnquire={onEnquire} />
      <main key={route}>{page}</main>
      <Footer onEnquire={onEnquire} />
      <FloatingActions />
      <EnquiryModal open={enquiry.open} type={enquiry.type} onClose={closeEnquiry} />
    </div>
  );
}
