"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const values = [
    {
        title: "Integrity",
        description: "Honest work and transparent results. No shortcuts, just dedication to the process.",
    },
    {
        title: "Discipline",
        description: "Success earned through daily commitment. We value consistency over intensity.",
    },
    {
        title: "Community",
        description: "Training alongside like-minded individuals. We push each other to reach new heights.",
    },
    {
        title: "Innovation",
        description: "Latest sports science and methodology. Constantly evolving to bring you the best.",
    },
];

export function LandingPhilosophy() {
    return (
        <section className="py-16 sm:py-10 px-4 sm:px-6 bg-white border-y border-stone-200">
            <style>{`
              .group-fan[data-in-view="false"] .philosophy-card {
                opacity: 0;
                transform: scale(0.8) translateY(20px);
              }
              .group-fan[data-in-view="true"] .philosophy-card {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
              .philosophy-card {
                transition: opacity 1s cubic-bezier(0.34, 1.56, 0.64, 1), transform 1s cubic-bezier(0.34, 1.56, 0.64, 1);
              }
              .philosophy-card:nth-child(1) { transition-delay: 0.1s; }
              .philosophy-card:nth-child(2) { transition-delay: 0.2s; }
              .philosophy-card:nth-child(3) { transition-delay: 0.3s; }
              .philosophy-card:nth-child(4) { transition-delay: 0.4s; }
            `}</style>
            <AnimateOnScroll className="max-w-6xl mx-auto group-fan">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#FE0000] mb-4">
                        Built on discipline. Driven by results.
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                    {values.map((v) => (
                        <div key={v.title} className="philosophy-card bg-white rounded-xl p-6 border-2 border-[#FE0000] hover:-translate-y-1 transition-all duration-300">
                            <h3 className="text-xl font-bold text-[#FE0000] mb-3 uppercase tracking-wide">
                                {v.title}
                            </h3>
                            <p className="text-black font-bold text-sm md:text-base leading-relaxed">
                                {v.description}
                            </p>
                        </div>
                    ))}
                </div>
            </AnimateOnScroll>
        </section>
    );
}
