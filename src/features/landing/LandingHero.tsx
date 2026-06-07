"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { useBranch } from "./BranchContext";

const BRANCH_WHATSAPP = {
  currency_nagar: "919996667714",
  bhavanipuram: "919996664188"
};

const BACKGROUND_IMAGES = [
  "/gallery/SnapInsta.to_670194894_18069879743392552_585200093872474835_n.jpg",
  "/gallery/SnapInsta.to_657471662_18158979148441242_3958703957107308221_n.jpg",
  "/gallery/SnapInsta.to_670923159_18064505939364788_7035871039556836138_n.jpg",
  "/gallery/SnapInsta.to_670549867_18145322566435077_1378904094156786920_n.jpg",
  "/gallery/SnapInsta.to_662734728_18310153678272460_6065853207444644703_n.jpg",
  "/gallery/SnapInsta.to_658859738_17999106524867630_6602969736954030008_n.jpg",
  "/gallery/SnapInsta.to_671115999_18062607005400113_7178394530742367817_n.jpg",
  "/gallery/SnapInsta.to_658670209_18138759595444895_4923670017808512640_n.jpg",
  "/gallery/SnapInsta.to_659795511_18080987057628091_2049472422370424467_n.jpg",
  "/gallery/ChatGPT Image Jun 2, 2026, 12_53_31 PM.png"
];

export function LandingHero() {
  const { selectedBranch } = useBranch();
  const waNumber = BRANCH_WHATSAPP[selectedBranch];
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-play the manual swipe slider
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const itemWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
        
        // If we are near the end, rewind to the start. Otherwise, scroll to the next slide.
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black text-center pt-[calc(var(--header-height)+var(--header-content-gap)+1rem)] md:pt-[calc(var(--header-height)+var(--header-content-gap))]">
      {/* Background Images Manual + Auto Slider */}
      <div className="relative z-0 bg-black w-full h-[70vh] md:h-[80vh]">
        <div 
          ref={scrollContainerRef}
          className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide py-0 sm:py-4 md:py-8 items-center scroll-smooth"
        >
          {/* We use 3 sets to ensure plenty of swiping room before hitting the end */}
          {[...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES].map((img, idx) => (
            <div 
              key={`${img}-${idx}`} 
              className="w-[100vw] sm:w-[50vw] md:w-[33.333vw] h-full sm:h-[70vh] md:h-[80vh] p-0 sm:px-2 md:px-3 flex-shrink-0 snap-center cursor-pointer"
              onClick={() => {
                setCurrentIdx(idx % BACKGROUND_IMAGES.length);
                setIsGalleryOpen(true);
              }}
            >
              <div className="w-full h-full relative sm:rounded-2xl overflow-hidden sm:shadow-2xl transition-transform hover:scale-[1.02]">
                <Image
                  src={img}
                  alt="Background gallery image"
                  fill
                  className="object-cover sm:object-contain drop-shadow-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  quality={100}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimateOnScroll rootMargin="0px 0px -20px 0px" className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center py-10 md:py-16 px-4 sm:px-6">
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

      {/* Full Gallery Modal Slideshow */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col p-4 sm:p-6 backdrop-blur-md">
          <div className="flex justify-between items-center mb-2 z-10">
            <h2 className="text-white text-xl md:text-2xl font-extrabold uppercase tracking-widest">Our Gallery</h2>
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="text-white hover:text-[#FE0000] bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="relative flex-1 flex items-center justify-center min-h-0">
            {/* Prev Button */}
            <button 
               onClick={(e) => { e.stopPropagation(); setCurrentIdx((prev) => (prev - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length); }}
               className="absolute left-2 md:left-8 z-20 p-3 md:p-4 bg-black/50 hover:bg-[#FE0000] text-white rounded-full transition-all backdrop-blur-md border border-white/10 hover:scale-110"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Current Slide */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                 src={BACKGROUND_IMAGES[currentIdx]}
                 alt="Gallery Slide"
                 fill
                 className="object-contain drop-shadow-2xl"
                 priority
                 sizes="100vw"
                 quality={100}
                 unoptimized
              />
            </div>

            {/* Next Button */}
            <button 
               onClick={(e) => { e.stopPropagation(); setCurrentIdx((prev) => (prev + 1) % BACKGROUND_IMAGES.length); }}
               className="absolute right-2 md:right-8 z-20 p-3 md:p-4 bg-black/50 hover:bg-[#FE0000] text-white rounded-full transition-all backdrop-blur-md border border-white/10 hover:scale-110"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto py-4 mt-2 px-2 snap-x scrollbar-hide justify-start md:justify-center">
             {BACKGROUND_IMAGES.map((img, idx) => (
               <button 
                 key={idx} 
                 onClick={() => setCurrentIdx(idx)} 
                 className={`relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 snap-center ${currentIdx === idx ? 'border-[#FE0000] scale-110 shadow-[0_0_15px_rgba(254,0,0,0.5)]' : 'border-transparent opacity-40 hover:opacity-100'}`}
               >
                 <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" sizes="80px" />
               </button>
             ))}
          </div>
        </div>
      )}
    </section>
  );
}
