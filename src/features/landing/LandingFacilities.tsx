"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { MobileInViewHover } from "@/components/ui/mobile-in-view-hover";

const facilities = [
  {
    title: "Cardio & training floor",
    description:
      "Treadmills, ellipticals, and cardio machines in a spacious layout. Linear LED lighting and dedicated zones so you can focus — morning or evening slots, no crowding.",
    imageSrc: "/images/HIIT_GYM.jpg",
    alt: "Gym cardio section with treadmills and ellipticals, strength area in background, modern LED lighting",
  },
  {
    title: "Functional training station",
    description:
      "Multi-station cable machine with adjustable pulleys and weight stacks. Versatile for rows, presses, and cable work — plus on-machine exercise guides so you train right.",
    imageSrc: "/images/functional_station_generated.png",
    alt: "Functional trainer cable machine with pulleys and weight stacks in modern gym",
  },
  {
    title: "Free weights area",
    description:
      "Full range of dumbbells from light to heavy, neatly racked. Rubber flooring for grip and safety, with mirrors and focused lighting so you can train with confidence.",
    imageSrc: "/images/HIIT_GYM4.jpg",
    alt: "Dumbbell racks and free weights section with professional rubber flooring",
  },
] as const;

export function LandingFacilities() {
  return (
    <section id="facilities" className="py-16 sm:py-10 px-4 sm:px-6 bg-stone-50 scroll-mt-[var(--header-height)]">
      <AnimateOnScroll className="max-w-7xl mx-auto w-full group-fan">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FE0000] mb-4">
            Infrastructure that hits different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 justify-items-center max-w-7xl mx-auto w-full px-4">
          {facilities.map((f, i) => {
            // Calculate horizontal offset from center for desktop
            const xOffset = i === 0 ? "100%" : i === 2 ? "-100%" : "0";
            return (
            <div 
              key={f.title} 
              className="w-full facility-card"
              style={{ '--x-offset': xOffset, '--delay': `${i * 150}ms` } as React.CSSProperties}
            >
              <MobileInViewHover className="w-full p-2 md:p-0 h-full">
                <article
                  className="bg-white rounded-xl border border-stone-200 transition-all duration-300 ease-out hover:scale-[1.04] hover:border-[#FE0000] hover:shadow-2xl flex flex-col p-3 sm:p-4 h-full"
                >
                  {/* Photo Frame Boundary */}
                  <div className="relative bg-stone-950 p-2 sm:p-3 rounded-2xl border-2 border-stone-800 shadow-xl group">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-stone-800/50">
                      <Image
                        src={f.imageSrc}
                        alt={f.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-5 px-2 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#FE0000] mb-3 uppercase tracking-wide">
                      {f.title}
                    </h3>
                    <p className="text-black font-bold text-sm md:text-base leading-relaxed flex-1">
                      {f.description}
                    </p>
                  </div>
                </article>
              </MobileInViewHover>
            </div>
            );
          })}
        </div>
      </AnimateOnScroll>

      <style>{`
        /* Desktop fan-out animation */
        @media (min-width: 768px) {
          .animate-in-scroll-placeholder:not(.animate-in-scroll-visible) .facility-card {
            opacity: 0;
            transform: translateX(var(--x-offset)) scale(0.85);
          }
          .animate-in-scroll-visible .facility-card {
            opacity: 1;
            transform: translateX(0) scale(1);
            transition: all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
            transition-delay: var(--delay);
          }
        }
        /* Mobile stagger animation */
        @media (max-width: 767px) {
          .animate-in-scroll-placeholder:not(.animate-in-scroll-visible) .facility-card {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          .animate-in-scroll-visible .facility-card {
            opacity: 1;
            transform: translateY(0) scale(1);
            transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
            transition-delay: var(--delay);
          }
        }
      `}</style>
    </section>
  );
}

