"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { useBranch } from "./BranchContext";

const BRANCH_WHATSAPP = {
  currency_nagar: "919996667714",
  bhavanipuram: "919996664188"
};

const BACKGROUND_IMAGES = [
  "/gallery/SnapInsta.to_670194894_18069879743392552_585200093872474835_n.jpg", // 1
  "/gallery/SnapInsta.to_657471662_18158979148441242_3958703957107308221_n.jpg", // 2
  "/gallery/SnapInsta.to_670923159_18064505939364788_7035871039556836138_n.jpg", // 3
  "/gallery/SnapInsta.to_670549867_18145322566435077_1378904094156786920_n.jpg", // 4
  "/gallery/SnapInsta.to_662734728_18310153678272460_6065853207444644703_n.jpg", // 5
  "/gallery/SnapInsta.to_658859738_17999106524867630_6602969736954030008_n.jpg", // 6
  "/gallery/SnapInsta.to_671115999_18062607005400113_7178394530742367817_n.jpg", // 7
  "/gallery/SnapInsta.to_658670209_18138759595444895_4923670017808512640_n.jpg", // 8
  "/gallery/SnapInsta.to_659795511_18080987057628091_2049472422370424467_n.jpg"  // 9
];

export function LandingHero() {
  const { selectedBranch } = useBranch();
  const waNumber = BRANCH_WHATSAPP[selectedBranch];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80dvh] flex items-end justify-center px-4 sm:px-6 pb-20 md:pb-20 pt-[calc(var(--header-height)+var(--header-content-gap)+3.25rem)] md:pt-[calc(var(--header-height)+var(--header-content-gap))] overflow-hidden bg-black text-center">
      {/* Background Images Crossfade Slideshow - Mirror Triptych Layout */}
      <div className="absolute inset-0 z-0 flex gap-2 md:gap-4 overflow-hidden bg-black" style={{ perspective: '1500px' }}>
        
        {/* Left Mirror (Desktop only) */}
        <div className="hidden md:block relative flex-1 h-full origin-right transform overflow-hidden" style={{ transform: 'rotateY(-25deg) scale(1.1)' }}>
          {BACKGROUND_IMAGES.map((img, idx) => (
            <div
              key={`left-${img}`}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${img}')`,
                opacity: idx === (currentIdx - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length ? 1 : 0,
              }}
            />
          ))}
        </div>

        {/* Center Canvas */}
        <div className="relative w-full md:flex-1 h-full z-10 md:scale-[1.05] overflow-hidden">
          {BACKGROUND_IMAGES.map((img, idx) => (
            <div
              key={`center-${img}`}
              className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${img}')`,
                opacity: idx === currentIdx ? 1 : 0,
              }}
            />
          ))}
        </div>

        {/* Right Mirror (Desktop only) */}
        <div className="hidden md:block relative flex-1 h-full origin-left transform overflow-hidden" style={{ transform: 'rotateY(25deg) scale(1.1)' }}>
          {BACKGROUND_IMAGES.map((img, idx) => (
            <div
              key={`right-${img}`}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${img}')`,
                opacity: idx === (currentIdx + 1) % BACKGROUND_IMAGES.length ? 1 : 0,
              }}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-[1] bg-black/20" />

      <AnimateOnScroll rootMargin="0px 0px -20px 0px" className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center pt-10 md:pt-0">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center w-full max-w-2xl mx-auto flex-wrap">
          <Link
            href={`https://wa.me/${waNumber}?text=Hi!%20I'm%20interested%20in%20joining%20the%20community%20at%20HIIT%20Fitness.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-1 inline-flex items-center justify-center min-h-[2.75rem] sm:min-h-[3rem] px-6 rounded-sm text-xs sm:text-sm font-black transition-all uppercase tracking-[0.15em] text-white bg-[#FE0000] border border-[#FE0000] overflow-hidden hover:scale-[1.02] order-1 sm:order-2"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              JOIN COMMUNITY
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7" /></svg>
            </span>
          </Link>

          <button
            onClick={() => setIsGalleryOpen(true)}
            className="group relative flex-1 inline-flex items-center justify-center min-h-[2.75rem] sm:min-h-[3rem] px-6 rounded-sm text-xs sm:text-sm font-black transition-all uppercase tracking-[0.15em] text-white bg-white/20 backdrop-blur-md border border-white/50 hover:border-white hover:bg-white/30 overflow-hidden hover:scale-[1.02] order-2 sm:order-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              VIEW GALLERY
            </span>
          </button>

          <Link
            href="#videos"
            className="group relative flex-1 inline-flex items-center justify-center min-h-[2.75rem] sm:min-h-[3rem] px-6 rounded-sm text-xs sm:text-sm font-black transition-all uppercase tracking-[0.15em] text-[#FE0000] bg-black/60 backdrop-blur-md border border-[#FE0000]/60 hover:border-[#FE0000] hover:text-white overflow-hidden hover:scale-[1.02] order-3 sm:order-3"
          >
            {/* Slide fill effect */}
            <span className="absolute inset-0 bg-[#FE0000] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10 flex items-center gap-2">
              OUR COMMUNITY
            </span>
          </Link>
        </div>
      </AnimateOnScroll>

      {/* Full Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col p-4 sm:p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-8 sticky top-0 bg-black/90 p-4 rounded-xl z-10 backdrop-blur-sm">
            <h2 className="text-white text-2xl md:text-3xl font-extrabold uppercase tracking-widest">Our Gallery</h2>
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="text-stone-400 hover:text-[#FE0000] bg-stone-900 hover:bg-stone-800 p-2 rounded-full transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pb-20">
            {BACKGROUND_IMAGES.map((img) => (
              <div key={img} className="relative aspect-square bg-stone-950 p-2 sm:p-3 rounded-2xl group border-2 border-stone-800 hover:border-[#FE0000] transition-colors shadow-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-stone-800/50">
                  <Image
                    src={img}
                    alt="Gallery image"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
