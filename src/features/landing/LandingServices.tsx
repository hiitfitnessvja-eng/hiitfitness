"use client";

import { useEffect, useRef, useState } from "react";
import { User, Dumbbell, HeartPulse, Users, Activity, Flame } from "lucide-react";

const servicesList = [
  { title: "Personal Training (1-1)", icon: <User className="w-6 h-6 text-white" /> },
  { title: "Strength Training", icon: <Dumbbell className="w-6 h-6 text-white" /> },
  { title: "Weight Loss Program", icon: <Flame className="w-6 h-6 text-white" /> },
  { title: "Functional Training", icon: <Activity className="w-6 h-6 text-white" /> },
  { title: "Group Training (HIIT)", icon: <Users className="w-6 h-6 text-white" /> },
  { title: "Cardio Training", icon: <HeartPulse className="w-6 h-6 text-white" /> },
  { title: "Fully Equipped Weight Area", icon: <Dumbbell className="w-6 h-6 text-white" /> },
];

// Desktop 3-column coordinates (Center is index 4 at 0,0)
const desktopCoords = [
  { x: -1, y: -1 }, // 0
  { x:  0, y: -1 }, // 1
  { x:  1, y: -1 }, // 2
  { x: -1, y:  0 }, // 3
  { x:  0, y:  0 }, // 4 (Center)
  { x:  1, y:  0 }, // 5
  { x:  0, y:  1 }, // 6
];

export function LandingServices() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
      else setInView(false);
    }, { threshold: 0.2 });
    
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className={`py-16 sm:py-24 px-4 sm:px-6 scroll-mt-[var(--header-height)] bg-black overflow-hidden relative ${!inView ? "out-of-view" : ""}`}
    >
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight uppercase">
          Our Services
        </h2>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto h-[850px] md:h-[450px] flex justify-center items-center">
        {servicesList.map((service, i) => {
          // Mobile vertical offsets (Center is 3)
          const mobileOffset = i - 3;
          const { x, y } = desktopCoords[i];

          // Compute absolute distance from center for staggered delays
          const dist = Math.max(Math.abs(x), Math.abs(y));
          
          return (
             <div 
               key={i}
               // Base positioning centers the cards completely in the middle
               className={`absolute w-[90%] max-w-[280px] md:max-w-[320px] bg-[#FE0000] p-3 md:p-5 rounded-2xl flex items-center gap-3 md:gap-4 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_15px_35px_rgba(0,0,0,0.8)] cursor-pointer h-[64px] md:h-[80px]`}
               style={{
                  // Pass CSS variables for responsive transforms
                  '--x-desk': x,
                  '--y-desk': y,
                  '--y-mob': mobileOffset,
                  '--dist': dist,
                  // When NOT in view, scale down based on distance to look like a thick deck of cards
                  '--scale-stacked': 1 - (dist * 0.05),
                  
                  zIndex: 20 - dist,
                  opacity: inView ? 1 : (1 - dist * 0.1),
                  transitionDelay: inView ? `${dist * 100}ms` : "0ms"
               } as React.CSSProperties}
             >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center shrink-0 bg-black/20 text-white shadow-inner">
                  {/* Need to scale down the lucide icon slightly on mobile */}
                  <div className="scale-75 md:scale-100">{service.icon}</div>
                </div>
                <span className="text-white font-extrabold text-[15px] sm:text-base md:text-lg leading-snug tracking-wide">
                  {service.title}
                </span>
             </div>
          );
        })}
      </div>

      <style>{`
        #services .max-w-6xl > div {
          /* Mobile: 64px height + 1.5cm vertical gap */
          transform: translateY(calc(var(--y-mob) * (64px + 1.5cm))) scale(1);
        }
        
        #services.out-of-view .max-w-6xl > div {
           transform: translateY(0px) translateX(0px) scale(var(--scale-stacked));
        }

        @media (min-width: 768px) {
          #services .max-w-6xl > div {
            /* Desktop: 3 columns. 80px height + 1.5cm gap vertically, and 340px + 3cm gap horizontally */
            transform: translate(calc(var(--x-desk) * (340px + 3cm)), calc(var(--y-desk) * (80px + 1.5cm))) scale(1);
          }
          #services.out-of-view .max-w-6xl > div {
             transform: translateY(0px) translateX(0px) scale(var(--scale-stacked));
          }
        }
      `}</style>
      
    </section>
  );
}
