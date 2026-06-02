"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const testimonials = [
    {
        name: "SamRam",
        review: "The gym offers a clean and well-maintained environment with modern equipment and a motivating atmosphere. Trainers are knowledgeable, supportive, and provide personalized guidance. The staff is friendly and always ready to help.",
    },
    {
        name: "Kiranmai vattiprolu",
        review: "Amazing gym and trainers! Every day we get different and effective workouts that keep things exciting.",
    },
    {
        name: "Sai Vamsi Kode",
        review: "This gym has taken my fitness to the next level. The equipment is perfect for building muscle and burning fat, and seeing others work hard keeps me motivated. Having access to trainers has helped me fine tune my workouts and nutrition.",
    },
    {
        name: "jeji gopal",
        review: "I absolutely love this gym! The facilities are top-notch and always clean. The variety of equipment caters to everyone, from beginners to advanced athletes, and there’s never a long wait. The staff is incredibly friendly and knowledgeable.",
    },
    {
        name: "CHINTA HIMAJA",
        review: "Hey all…😊 Actually my brother and me have recently joined this HIIT Fitness and we must say, we were thoroughly impressed..",
    },
    {
        name: "chenna clinical",
        review: "I have been going to HIIT FITNESS currency nagar from past 3 Months. I am completely new to the gym workouts. I do a desk job where I need to sit for hours together, so gradually my body feels much better.",
    }
];

export function LandingTestimonials() {
    return (
        <section id="testimonials" className="py-12 bg-black text-white scroll-mt-[var(--header-height)] border-b border-[#FE0000] overflow-hidden">
            <style>{`
                @keyframes scrollTestimonials {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-testimonials {
                    animation: scrollTestimonials 40s linear infinite;
                }
                .animate-scroll-testimonials:hover {
                    animation-play-state: paused;
                }
            `}</style>
            <AnimateOnScroll className="max-w-6xl mx-auto mb-10 text-center px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#FE0000] mb-2 uppercase tracking-tight">
                    Member Testimonials
                </h2>
            </AnimateOnScroll>

            <div className="relative w-full max-w-[100vw]">
                <div className="flex animate-scroll-testimonials gap-4 sm:gap-6 w-max px-4">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div 
                            key={`${t.name}-${i}`} 
                            className="w-[300px] sm:w-[400px] shrink-0 h-auto bg-stone-900/40 backdrop-blur-md border border-stone-800 rounded-2xl p-6 sm:p-8 relative hover:border-[#FE0000]/60 transition-all duration-300 group flex flex-col justify-between whitespace-normal"
                        >
                            <div>
                                <span className="text-6xl text-[#FE0000] opacity-30 font-serif leading-none absolute top-4 left-4 select-none">
                                    &ldquo;
                                </span>
                                <p className="text-stone-300 text-sm sm:text-base italic mb-6 relative z-10 leading-relaxed font-medium mt-6">
                                    {t.review}
                                </p>
                            </div>
                            <div className="flex items-center gap-4 pt-5 border-t border-stone-800/80 mt-auto w-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-stone-800 to-stone-900 rounded-full flex items-center justify-center font-bold text-lg uppercase border border-[#FE0000]/40 text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-sm text-white tracking-wide">{t.name}</h4>
                                    <div className="text-[#FE0000] text-[10px] font-bold uppercase tracking-wider mt-1">Verified Member</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

