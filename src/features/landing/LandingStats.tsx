"use client";

import { useEffect, useState, useRef } from "react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const stats = [
    { num: 2, suffix: "", label: "CENTERS" },
    { num: 20, suffix: "+", label: "TRAINERS" },
    { num: 10, suffix: "K+", label: "MEMBERS" },
];

function useInView(ref: React.RefObject<Element>, margin: string) {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { rootMargin: margin, threshold: 0.1 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, margin]);
    return inView;
}

function CountUp({ end, suffix }: { end: number, suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, "-50px");

    useEffect(() => {
        if (!inView) return;
        let startTimestamp: number;
        const duration = 2000; // 2 seconds

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out expo for a fast start and smooth slow-down
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(easeOut * end));
            
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(step);
    }, [inView, end]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export function LandingStats() {
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black text-white border-b border-[#FE0000]">
            <AnimateOnScroll className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
                        Inspire transformation. <span className="text-[#FE0000] block mt-2 md:inline md:mt-0">Build your legacy</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-stone-900/50 backdrop-blur-md border border-stone-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-2 hover:border-[#FE0000]/50 duration-300">
                            {/* Accent dot */}
                            <div className="w-4 h-4 rounded-full bg-[#FE0000] mb-6 shadow-inner border-2 border-black" />

                            <div className="text-4xl sm:text-5xl font-black text-white mb-2 tabular-nums tracking-tighter">
                                <CountUp end={stat.num} suffix={stat.suffix} />
                            </div>

                            <div className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-[0.2em]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </AnimateOnScroll>
        </section>
    );
}
