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

  const mobileTopStyle = undefined;

  return (
    <div
      className="z-50 flex items-center gap-1 bg-black/90 backdrop-blur-md border border-stone-800 p-1 hover:border-stone-700 transition-all duration-300 fixed rounded-r-xl rounded-l-none border-l-0 bottom-24 md:bottom-28 left-0 pl-2 pr-3 md:pl-3 md:pr-1.5 hover:pl-4"
    >
      <div className="flex items-center gap-1 pl-2 pr-1 text-white">
        <MapPin className="w-3.5 h-3.5 text-[#FE0000] animate-pulse" />
        <span className="text-xs font-bold tracking-widest uppercase hidden md:inline">Branch:</span>
      </div>
      <button
        onClick={() => setSelectedBranch("currency_nagar")}
        className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
          selectedBranch === "currency_nagar"
            ? "bg-[#FE0000] text-white    /30"
            : "text-white hover:text-white hover:bg-stone-900"
        }`}
      >
        Currency Nagar
      </button>
      <button
        onClick={() => setSelectedBranch("bhavanipuram")}
        className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
          selectedBranch === "bhavanipuram"
            ? "bg-[#FE0000] text-white    /30"
            : "text-white hover:text-white hover:bg-stone-900"
        }`}
      >
        Bhavanipuram
      </button>
    </div>
  );
}
