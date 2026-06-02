"use client";

import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      // Calculate time until midnight tonight
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const msUntilMidnight = midnight.getTime() - now.getTime();
      
      // Add 5 days (in ms) so it stays an evergreen 5-day offer that resets daily
      const fiveDaysMs = 5 * 24 * 60 * 60 * 1000;
      
      return Math.floor((msUntilMidnight + fiveDaysMs) / 1000);
    };

    // Initial set
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Prevent hydration mismatch on the server
  if (!mounted) {
    return <div className="invisible w-[280px] h-[100px]" />; 
  }

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = Math.floor(timeLeft % 60);

  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="bg-[#0a0a0a] rounded-b-2xl rounded-t-none p-3 sm:p-5 border border-[#FE0000]/60 border-t-0 shadow-[0_10px_50px_rgba(254,0,0,0.7)] flex flex-col items-center justify-center w-max mx-auto absolute -top-16 left-1/2 -translate-x-1/2 sm:-top-10 sm:left-auto sm:translate-x-0 sm:-right-4 z-[100] transition-transform duration-300">
      <div className="text-white text-[10px] sm:text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-1 sm:gap-2">
        <span className="text-[#FE0000]">🔥</span> OFFER ENDS IN
      </div>
      <div className="flex items-start gap-2 text-white font-black text-4xl sm:text-5xl tabular-nums tracking-widest">
        <div className="flex flex-col items-center">
          <span>{format(days)}</span>
          <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">Days</span>
        </div>
        <span className="text-[#FE0000] text-3xl sm:text-4xl mt-1">:</span>
        <div className="flex flex-col items-center">
          <span>{format(hours)}</span>
          <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">Hrs</span>
        </div>
        <span className="text-[#FE0000] text-3xl sm:text-4xl mt-1">:</span>
        <div className="flex flex-col items-center">
          <span>{format(minutes)}</span>
          <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">Mins</span>
        </div>
        <span className="text-[#FE0000] text-3xl sm:text-4xl mt-1">:</span>
        <div className="flex flex-col items-center">
          <span>{format(seconds)}</span>
          <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">Secs</span>
        </div>
      </div>
    </div>
  );
}
