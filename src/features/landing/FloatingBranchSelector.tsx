"use client";

import { useBranch } from "./BranchContext";
import { MapPin } from "lucide-react";
import { useMobileHeader } from "./MobileHeaderContext";
import { useEffect, useState, useRef } from "react";

export function FloatingBranchSelector() {
  const { selectedBranch, setSelectedBranch } = useBranch();
  const { headerHidden, isMobile } = useMobileHeader();
  const [visualViewportTop, setVisualViewportTop] = useState(0);
  const lastViewportTopRef = useRef(-1);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const vv = window.visualViewport;
    if (!vv) return;

    const update = () => {
      const top = Math.round(vv.offsetTop || 0);
      if (top !== lastViewportTopRef.current) {
        lastViewportTopRef.current = top;
        setVisualViewportTop(top);
      }
    };
    update();

    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    window.addEventListener("orientationchange", update);

    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="z-50 flex items-center bg-black/90 backdrop-blur-md border border-stone-800 p-1 hover:border-stone-700 transition-all duration-300 fixed rounded-r-xl rounded-l-none border-l-0 bottom-9 left-0 pl-1 pr-2 py-1.5 shadow-2xl"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-1 text-white hover:text-[#FE0000] transition-colors"
      >
        <MapPin className={`w-4 h-4 text-[#FE0000] ${!isOpen ? "animate-pulse" : ""}`} />
        <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase whitespace-nowrap">
          {isOpen ? "Close" : (selectedBranch === "currency_nagar" ? "Currency Nagar" : "Bhavanipuram")}
        </span>
      </button>

      <div 
        className={`flex items-center overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-w-[400px] opacity-100 ml-1 gap-1" : "max-w-0 opacity-0 ml-0 gap-0"
        }`}
      >
        <button
          onClick={() => { setSelectedBranch("currency_nagar"); setIsOpen(false); }}
          className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
            selectedBranch === "currency_nagar"
              ? "bg-[#FE0000] text-white"
              : "text-stone-300 hover:text-white hover:bg-stone-800"
          }`}
        >
          Currency Nagar
        </button>
        <button
          onClick={() => { setSelectedBranch("bhavanipuram"); setIsOpen(false); }}
          className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
            selectedBranch === "bhavanipuram"
              ? "bg-[#FE0000] text-white"
              : "text-stone-300 hover:text-white hover:bg-stone-800"
          }`}
        >
          Bhavanipuram
        </button>
      </div>
    </div>
  );
}
