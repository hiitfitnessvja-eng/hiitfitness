"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function LandingChallenge() {
    return (
        <section className="py-16 sm:py-10 px-4 sm:px-6 bg-black text-white relative flex items-center justify-center min-h-[50vh] overflow-hidden">
            {/* Background with slight tint */}
            <div
                className="absolute inset-0 bg-[url('/images/HIIT_GYM_hero.jpg')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
            />

            <AnimateOnScroll className="max-w-4xl mx-auto relative z-10 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FE0000] mb-6 drop-shadow-[0_0_15px_rgba(254,0,0,0.5)]">
                    7-Day Intensive Challenge
                </h2>

                <p className="text-white text-lg sm:text-xl leading-relaxed mb-8 font-medium">
                    Daily 90-minute sessions, custom nutrition planning, body composition analysis, and exclusive gear. Break your limits and redefine what you thought was possible.
                </p>

                <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#FE0000] text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                    Join the Challenge
                </a>
            </AnimateOnScroll>
        </section>
    );
}
