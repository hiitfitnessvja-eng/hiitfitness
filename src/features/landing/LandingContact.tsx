"use client";

import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { useBranch } from "./BranchContext";

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const BRANCHES_DATA = {
  currency_nagar: {
    label: "HIIT FITNESS - CURRENCY NAGAR",
    address: "2nd Floor, Sri Anuja Balaji Square, vi Seshadri street, 3rd Ln, opp. Currency Nagar, Ramavarapadu, Kanuru, Andhra Pradesh 521108",
    phones: [
      { display: "999 666 7714", tel: "tel:+919996667714" },
      { display: "999 666 5573", tel: "tel:+919996665573" },
    ],
    lat: 16.5215298,
    lng: 80.6783943,
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir//16.5215298,80.6783943",
    timings: {
      weekdays: "5 AM – 10:30 AM, 5 PM – 9 PM",
      sunday: "6 AM – 11 AM"
    }
  },
  bhavanipuram: {
    label: "HIIT FITNESS - BHAVANIPURAM",
    address: "2nd floor, 76-13-1/A, Royal Enfield showroom building, Joji Nagar, Bhavanipuram, Vijayawada - 520012",
    phones: [
      { display: "999 666 4188", tel: "tel:+919996664188" },
      { display: "999 666 4288", tel: "tel:+919996664288" },
    ],
    lat: 16.5368743,
    lng: 80.6014375,
    googleMapsDirectionsUrl: "https://maps.app.goo.gl/U5coN7fPwEJLxxRr8",
    timings: {
      weekdays: "5 AM – 10:30 AM, 5 PM – 9 PM",
      sunday: "6 AM – 11 AM"
    }
  }
};

export function LandingContact() {
  const { selectedBranch, setSelectedBranch } = useBranch();
  const gym = BRANCHES_DATA[selectedBranch];

  const googleMapsEmbedSrc = `https://maps.google.com/maps?q=${gym.lat},${gym.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="w-full scroll-mt-[var(--header-height)] bg-stone-50 border-t border-stone-200">
      <AnimateOnScroll className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#FE0000] uppercase tracking-tight">Visit the gym</h2>
            <p className="text-stone-500 font-semibold mt-1">Select a branch to see its location</p>
          </div>
          
          {/* Branch Switcher */}
          <div className="flex bg-white p-1.5 rounded-xl border border-stone-200 shadow-sm shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setSelectedBranch("currency_nagar")}
              className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedBranch === "currency_nagar"
                  ? "bg-[#FE0000] text-white shadow-md"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              Kanuru
            </button>
            <button
              onClick={() => setSelectedBranch("bhavanipuram")}
              className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedBranch === "bhavanipuram"
                  ? "bg-[#FE0000] text-white shadow-md"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              Bhavanipuram
            </button>
          </div>
        </div>

        {/* Full-width Map */}
        <div className="w-full h-[50vh] md:h-[65vh] min-h-[400px] relative bg-stone-200 group">
          <iframe
            title={`${gym.label} Google Map`}
            src={googleMapsEmbedSrc}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
          {/* Floating Action Button */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none w-full px-4 flex justify-center">
            <div className="pointer-events-auto">
                <Button asChild size="lg" className="rounded-full shadow-2xl bg-[#FE0000] text-white hover:bg-red-700 font-bold px-8 py-6 text-base group-hover:scale-105 transition-transform duration-300 border-4 border-white">
                <a
                    href={gym.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                >
                    <MapPinIcon />
                    Get Directions
                </a>
                </Button>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

