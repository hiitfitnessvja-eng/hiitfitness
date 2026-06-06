"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Instagram, Facebook, MapPin, Phone, Youtube } from "lucide-react";
import { useBranch } from "./BranchContext";

const BRANCHES_FOOTER_DATA = {
  currency_nagar: {
    name: "Currency Nagar branch",
    address: "2nd Floor, Sri Anuja Balaji Square, vi Seshadri street, 3rd Ln, opp. Currency Nagar, Ramavarapadu, Kanuru, Andhra Pradesh 521108",
    phones: [
      { display: "999 666 7714", tel: "tel:+919996667714" },
      { display: "999 666 5573", tel: "tel:+919996665573" }
    ]
  },
  bhavanipuram: {
    name: "Bhavanipuram Branch",
    address: "2nd floor, 76-13-1/A, Royal Enfield showroom building, Joji Nagar, Bhavanipuram, Vijayawada - 520012",
    phones: [
      { display: "999 666 4188", tel: "tel:+919996664188" },
      { display: "999 666 4288", tel: "tel:+919996664288" }
    ]
  }
};

export function LandingFooter() {
  const { selectedBranch } = useBranch();
  return (
    <footer className="bg-black border-t border-[#FE0000]/30 pt-16 pb-8 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#FE0000]/50 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FE0000]/5 blur-[120px] rounded-full pointer-events-none" />

      <AnimateOnScroll className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="flex items-center gap-3 sm:gap-5 leading-tight">
                  <Image 
                    src="/images/99558_FLAT_JP_AC_03-nobg-cropped.svg" 
                    alt="HIIT Icon" 
                    width={80} 
                    height={80} 
                    className="object-contain w-14 h-14 sm:w-20 sm:h-20 shrink-0" 
                  />
                  <span className="flex flex-col justify-center">
                    <span className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-widest">
                      HIIT FITNESS
                    </span>
                    <span className="font-sans text-xs sm:text-sm md:text-base font-bold uppercase text-[#FE0000] tracking-widest mt-1.5 sm:mt-2">
                      High Intensity Interval Training
                    </span>
                  </span>
              </span>
            </Link>
            <p className="text-white text-sm leading-relaxed mb-6 font-medium">
              HIIT Training – Burn More Calories, Build Endurance, Get Results Faster
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/hiitfitness01?igsh=MWt5Y29ueXM5bDMwcw==" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 drop-shadow-md">
                <Image src="/images/instagram.svg" alt="Instagram" width={32} height={32} className="w-8 h-8 object-contain" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 drop-shadow-md">
                <Image src="/images/facebook.svg" alt="Facebook" width={32} height={32} className="w-8 h-8 object-contain" />
              </a>
              <a href="https://youtube.com/@hiit_fitness?si=P0vvcx4SiFozU5QH" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 drop-shadow-md">
                <Image src="/images/youtube.svg" alt="YouTube" width={44} height={32} className="w-11 h-8 object-contain" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-l-2 border-[#FE0000] pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-white hover:text-[#FE0000] text-sm font-medium transition-colors">Our Programs</a></li>
              <li><a href="#services" className="text-white hover:text-[#FE0000] text-sm font-medium transition-colors">Services</a></li>
              <li><a href="#facilities" className="text-white hover:text-[#FE0000] text-sm font-medium transition-colors">Facilities</a></li>
              <li><a href="#plans" className="text-white hover:text-[#FE0000] text-sm font-medium transition-colors">Pricing Plans</a></li>
              <li><a href="#testimonials" className="text-white hover:text-[#FE0000] text-sm font-medium transition-colors">Success Stories</a></li>
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm font-medium text-center sm:text-left">
            © {new Date().getFullYear()} HIIT Fitness. All rights reserved.
          </p>

        </div>
      </AnimateOnScroll>
    </footer>
  );
}
