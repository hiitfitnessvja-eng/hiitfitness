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
      <AnimateOnScroll className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FE0000] mb-4">
            Infrastructure that hits different
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 justify-items-center max-w-7xl mx-auto w-full px-4">
          {facilities.map((f) => (
            <div key={f.title} className="w-full">
              <MobileInViewHover className="w-full p-2 md:p-0">
                <article
                  className="bg-white rounded-xl border border-stone-200 transition-all duration-300 ease-out hover:scale-[1.04] hover:border-[#FE0000] hover:shadow-2xl flex flex-col p-3 sm:p-4"
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
                  
                  <div className="pt-5 px-2 flex-1">
                    <h3 className="text-xl font-bold text-[#FE0000] mb-3 uppercase tracking-wide">
                      {f.title}
                    </h3>
                    <p className="text-stone-600 md:text-black md:font-bold text-sm md:text-base leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </article>
              </MobileInViewHover>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}

