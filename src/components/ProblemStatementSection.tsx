"use client";

import { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const contentBlocks = [
  {
    title: "You have an idea.",
    subtitle: "Not a startup. Not a pitch deck. Just a thought that wouldn't leave you alone.",
  },
  {
    title: "Then you looked for a door.",
    bubbles: [
      { 
        sender: "Incubators",
        text: "Come back when you have traction.", 
        className: "top-[8%] -left-[5%] sm:top-[15%] sm:-left-[25%] max-w-[180px] sm:max-w-[320px] rounded-tl-sm"
      },
      { 
        sender: "Accelerators",
        text: "Come back when you have revenue.", 
        className: "bottom-[12%] left-[2%] sm:bottom-[20%] sm:-left-[15%] max-w-[180px] sm:max-w-[320px] rounded-tl-sm"
      },
      { 
        sender: "The Internet",
        text: "Here are 200 frameworks. Good luck.", 
        className: "top-[30%] -right-[5%] sm:top-[40%] sm:-right-[25%] max-w-[180px] sm:max-w-[320px] rounded-tr-sm"
      },
    ]
  },
  {
    title: "Every door was locked.",
    bubbles: [
      { 
        sender: "You",
        text: "Who do I talk to first?", 
        className: "top-[10%] -left-[2%] sm:top-[20%] sm:-left-[20%] max-w-[160px] sm:max-w-[280px] rounded-br-sm"
      },
      { 
        sender: "You",
        text: "How do I know if my idea is any good?", 
        className: "bottom-[15%] -left-[5%] sm:bottom-[25%] sm:-left-[25%] max-w-[180px] sm:max-w-[300px] rounded-bl-sm"
      },
      { 
        sender: "You",
        text: "Where do I even begin?", 
        className: "top-[5%] right-[2%] sm:top-[15%] sm:-right-[15%] max-w-[160px] sm:max-w-[260px] rounded-tr-sm"
      },
      { 
        sender: "You",
        text: "Is there anyone out there building what I'm building?", 
        className: "bottom-[20%] -right-[5%] sm:bottom-[30%] sm:-right-[25%] max-w-[180px] sm:max-w-[320px] rounded-br-sm"
      },
    ]
  },
  {
    title: "Does this story sounds Familiar?",
  },
  {
    title: "That is why",
  },
];

// SVG icon paths for startup/entrepreneurship themed icons
const iconPaths: Record<string, string> = {
  // Lightbulb - ideas
  lightbulb: "M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2zm-1 18h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2z",
  // Lock - closed doors
  lock: "M17 10V7A5 5 0 0 0 7 7v3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zm-5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3-7H9V7a3 3 0 0 1 6 0v3z",
  // Question mark - uncertainty
  question: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92A3.4 3.4 0 0 0 13 15h-2v-.5a4 4 0 0 1 1.17-2.83l1.24-1.26A2 2 0 0 0 14 9a2 2 0 1 0-4 0H8a4 4 0 1 1 8 0 3.18 3.18 0 0 1-.93 2.25z",
  // Compass - lost direction
  compass: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.5 13.5l-7 3 3-7 7-3-3 7z",
  // Rocket - ambition
  rocket: "M12.75 3.94a17.04 17.04 0 0 0-4.38 5.69L5.8 11.2a1 1 0 0 0-.26 1l.87 3.47-2.12 2.12a1 1 0 0 0 1.41 1.41l2.12-2.12 3.47.87a1 1 0 0 0 1-.26l1.57-2.57a17.04 17.04 0 0 0 5.69-4.38c2.49-3.09 2.72-6.77 2.49-8.47a1 1 0 0 0-.86-.86c-1.7-.23-5.38 0-8.47 2.49zM16 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0z",
  // Target - goals
  target: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-14a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  // Puzzle - complexity
  puzzle: "M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5a2.5 2.5 0 1 0-5 0V5H4a2 2 0 0 0-2 2v3.8h1.5a2.5 2.5 0 0 1 0 5H2V19a2 2 0 0 0 2 2h3.8v-1.5a2.5 2.5 0 0 1 5 0V21H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 1 0 0-5z",
  // Map pin - where to go
  mapPin: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z",
  // Flag - milestones
  flag: "M14.4 6l-.24-1.2A2 2 0 0 0 12.2 3H5v18h2v-7h4.6l.24 1.2A2 2 0 0 0 13.8 17H21V6h-6.6z",
  // Shield - protection/challenges
  shield: "M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14.5L7 12.5l1.41-1.41L11 13.67l4.59-4.58L17 10.5l-6 6z",
  // Clock - time pressure
  clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",
  // Chart - metrics/traction
  chart: "M3.5 18.5l6-6 4 4L22 6.92 20.59 5.5l-7.09 8-4-4L2 17l1.5 1.5z",
  // Code brackets - tech complexity
  code: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
  // Handshake - partnerships
  handshake: "M20.29 8.29l-3.29 3.3V14a1 1 0 0 1-1 1h-2.59l-2.12 2.12a1 1 0 0 1-1.41 0L7.76 15H6a1 1 0 0 1-1-1v-1.76l-2.12-2.12a1 1 0 0 1 0-1.41L5 6.59V4a1 1 0 0 1 1-1h2.59l2.12-2.12a1 1 0 0 1 1.41 0L14.24 3H16a1 1 0 0 1 1 1v2.59l3.29 3.29a1 1 0 0 1 0 1.41z",
  // Brain - thinking
  brain: "M12 2a4 4 0 0 0-3.46 6A4 4 0 0 0 6 12a4 4 0 0 0 2.54 3.73A4 4 0 0 0 12 22a4 4 0 0 0 3.46-6A4 4 0 0 0 18 12a4 4 0 0 0-2.54-3.73A4 4 0 0 0 12 2z",
  // Key - access/unlocking
  key: "M12.65 10a6 6 0 1 0 0 4H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
  // Search/magnifying glass - finding answers
  search: "M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z",
  // Lightning - energy/disruption
  lightning: "M7 2v11h3v9l7-12h-4l4-8H7z",
  // X/close - rejection
  xMark: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
  // Dollar - funding
  dollar: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-1a4.17 4.17 0 0 1-3-4h2a2 2 0 0 0 2 2h2a1 1 0 1 0 0-2h-2a3 3 0 0 1 0-6V5h2v1a4.17 4.17 0 0 1 3 4h-2a2 2 0 0 0-2-2h-2a1 1 0 1 0 0 2h2a3 3 0 0 1 0 6v1z",
  // Mountain - obstacles
  mountain: "M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z",
};

// Icons distributed across a 5-col × 9-row grid with organic offsets
const parallaxIcons = [
  // ── Row 1: top 103–130% ──
  { size: 36, left: "5%",  top: "105%", speed: 2.31, opacity: 0.45, icon: "brain",     rotate: -22 },
  { size: 30, left: "24%", top: "110%", speed: 1.93, opacity: 0.38, icon: "dollar",    rotate: -8 },
  { size: 44, left: "46%", top: "103%", speed: 4.95, opacity: 0.50, icon: "mapPin",    rotate: -5 },
  { size: 41, left: "68%", top: "115%", speed: 3.81, opacity: 0.45, icon: "code",      rotate: 10 },
  { size: 53, left: "89%", top: "108%", speed: 3.11, opacity: 0.40, icon: "lock",      rotate: -15 },

  // ── Row 2: top 135–165% ──
  { size: 33, left: "7%",  top: "140%", speed: 1.55, opacity: 0.42, icon: "chart",     rotate: -10 },
  { size: 37, left: "28%", top: "155%", speed: 1.97, opacity: 0.40, icon: "question",  rotate: 12 },
  { size: 54, left: "50%", top: "145%", speed: 3.47, opacity: 0.42, icon: "clock",     rotate: 8 },
  { size: 24, left: "72%", top: "160%", speed: 4.21, opacity: 0.32, icon: "rocket",    rotate: 25 },
  { size: 38, left: "90%", top: "150%", speed: 2.91, opacity: 0.38, icon: "handshake", rotate: 20 },

  // ── Row 3: top 175–210% ──
  { size: 50, left: "4%",  top: "180%", speed: 3.80, opacity: 0.44, icon: "key",       rotate: 30 },
  { size: 41, left: "22%", top: "195%", speed: 4.19, opacity: 0.48, icon: "flag",      rotate: -5 },
  { size: 34, left: "45%", top: "185%", speed: 3.06, opacity: 0.42, icon: "shield",    rotate: -18 },
  { size: 39, left: "67%", top: "200%", speed: 2.80, opacity: 0.45, icon: "lightbulb", rotate: 15 },
  { size: 52, left: "88%", top: "190%", speed: 3.89, opacity: 0.50, icon: "compass",   rotate: 0 },

  // ── Row 4: top 215–245% ──
  { size: 49, left: "8%",  top: "220%", speed: 2.08, opacity: 0.42, icon: "search",    rotate: -12 },
  { size: 42, left: "30%", top: "235%", speed: 2.51, opacity: 0.50, icon: "code",      rotate: 5 },
  { size: 60, left: "52%", top: "225%", speed: 2.54, opacity: 0.38, icon: "question",  rotate: -10 },
  { size: 44, left: "73%", top: "240%", speed: 4.60, opacity: 0.45, icon: "rocket",    rotate: -25 },
  { size: 54, left: "92%", top: "218%", speed: 4.58, opacity: 0.42, icon: "target",    rotate: -5 },

  // ── Row 5: top 255–280% ──
  { size: 29, left: "6%",  top: "260%", speed: 3.59, opacity: 0.38, icon: "lightning",  rotate: 20 },
  { size: 48, left: "25%", top: "270%", speed: 4.15, opacity: 0.42, icon: "lightbulb", rotate: -15 },
  { size: 30, left: "48%", top: "258%", speed: 3.71, opacity: 0.35, icon: "key",       rotate: -25 },
  { size: 53, left: "70%", top: "275%", speed: 4.02, opacity: 0.48, icon: "puzzle",    rotate: -30 },
  { size: 26, left: "91%", top: "265%", speed: 3.90, opacity: 0.32, icon: "brain",     rotate: 5 },

  // ── Row 6: top 290–315% ──
  { size: 30, left: "3%",  top: "295%", speed: 1.85, opacity: 0.44, icon: "puzzle",    rotate: 15 },
  { size: 61, left: "24%", top: "305%", speed: 3.30, opacity: 0.38, icon: "xMark",     rotate: 15 },
  { size: 51, left: "47%", top: "298%", speed: 4.99, opacity: 0.50, icon: "mountain",  rotate: 8 },
  { size: 30, left: "69%", top: "310%", speed: 2.92, opacity: 0.42, icon: "chart",     rotate: 15 },
  { size: 43, left: "90%", top: "300%", speed: 2.08, opacity: 0.30, icon: "lock",      rotate: -20 },

  // ── Row 7: top 325–355% ──
  { size: 31, left: "8%",  top: "340%", speed: 2.59, opacity: 0.42, icon: "compass",   rotate: 20 },
  { size: 52, left: "27%", top: "330%", speed: 3.28, opacity: 0.38, icon: "target",    rotate: 0 },
  { size: 33, left: "50%", top: "345%", speed: 1.71, opacity: 0.42, icon: "clock",     rotate: -10 },
  { size: 35, left: "72%", top: "335%", speed: 3.53, opacity: 0.40, icon: "dollar",    rotate: 15 },
  { size: 62, left: "93%", top: "348%", speed: 3.36, opacity: 0.28, icon: "mountain",  rotate: -15 },

  // ── Sparse extras for depth ──
  { size: 39, left: "15%", top: "130%", speed: 2.16, opacity: 0.35, icon: "shield",    rotate: -8 },
  { size: 32, left: "58%", top: "130%", speed: 2.74, opacity: 0.35, icon: "flag",      rotate: 0 },
  { size: 27, left: "38%", top: "170%", speed: 4.69, opacity: 0.30, icon: "search",    rotate: 10 },
  { size: 46, left: "82%", top: "240%", speed: 3.50, opacity: 0.35, icon: "dollar",    rotate: -12 },
  { size: 28, left: "15%", top: "315%", speed: 2.40, opacity: 0.30, icon: "handshake", rotate: 8 },
  { size: 40, left: "60%", top: "320%", speed: 3.20, opacity: 0.35, icon: "shield",    rotate: -15 },
  { size: 34, left: "82%", top: "135%", speed: 2.60, opacity: 0.33, icon: "brain",     rotate: -18 },
  { size: 45, left: "42%", top: "210%", speed: 3.00, opacity: 0.30, icon: "xMark",     rotate: 12 },
  { size: 37, left: "78%", top: "310%", speed: 3.60, opacity: 0.33, icon: "lightning",  rotate: 10 },
  { size: 49, left: "10%", top: "238%", speed: 2.50, opacity: 0.32, icon: "mapPin",    rotate: 12 },
];

export default function ProblemStatementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const lineElements = gsap.utils.toArray<HTMLElement>(".problem-line");
      
      // Hide all lines EXCEPT the first one initially so there's no blank viewport
      lineElements.forEach((line, index) => {
        if (index > 0) {
          gsap.set(line, { opacity: 0, y: 28, filter: "blur(8px)" });
        } else {
          gsap.set(line, { opacity: 1, y: 0, filter: "blur(0px)" });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=12000",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      const LINE_SPACING = 5; // timeline units between each line
      let maxTime = 0;

      lineElements.forEach((line, index) => {
        const lineStart = index * LINE_SPACING;

        // Only animate IN the elements that were hidden (index > 0)
        if (index > 0) {
          tl.to(
            line,
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.0,
              ease: "power2.out",
            },
            lineStart,
          );
        }

        const outTime = lineStart + 3.2;
        tl.to(
          line,
          {
            opacity: 0,
            y: -28,
            filter: "blur(8px)",
            duration: 1.0,
            ease: "power2.in",
          },
          outTime,
        );

        // Parallax upward floating effect for text bubbles if they exist
        const bubbles = line.querySelectorAll('.text-bubble');
        if (bubbles.length > 0) {
          bubbles.forEach((bubble, bIndex) => {
            const speedMult = 1 + (bIndex % 3) * 0.4;
            tl.fromTo(bubble, 
              { y: 80 * speedMult }, 
              { y: -120 * speedMult, duration: 4.2, ease: "none" }, 
              lineStart
            );
          });
        }
        
        maxTime = Math.max(maxTime, outTime + 1.0);
      });

      // Transition background color — starts as last content line is ending
      tl.to(
        sectionRef.current,
        {
          backgroundColor: "#0b192c",
          duration: 2.5,
          ease: "power2.inOut",
        },
        maxTime - 1.0
      );


      // Set initial state for the logo and introducing text
      gsap.set(".introducing-text", { opacity: 0, scale: 1, y: 28, filter: "blur(8px)" });
      gsap.set(".xentro-logo", { opacity: 0, scale: 0.8, filter: "blur(12px)" });

      // Introducing Text appears after all lines
      tl.to(".introducing-text", { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, maxTime + 1.0);
      
      // Introducing shrinks and dissolves
      tl.to(".introducing-text", { opacity: 0, scale: 0.5, filter: "blur(12px)", duration: 1.2, ease: "power2.in" }, maxTime + 4.0);

      // Fade the logo in once the main sequence is mostly complete
      tl.to(".xentro-logo", { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, maxTime + 4.0);

      const totalDuration = maxTime + 7.0;
      const pillElements = gsap.utils.toArray<HTMLSpanElement>(".parallax-pill");
      pillElements.forEach((pill) => {
        const speed = parseFloat(pill.dataset.speed || "1");
        tl.to(
          pill,
          {
            y: -2000 * speed,
            ease: "none",
            duration: totalDuration,
          },
          0,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <div id="problem">
      <section ref={sectionRef} className="relative overflow-hidden bg-[#1B17FF] h-screen">
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-100 opacity-0" />
      <div className="relative mx-auto flex h-full max-w-5xl items-center justify-center px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {parallaxIcons.map((item, index) => (
            <svg
              key={index}
              data-speed={item.speed}
              className="parallax-pill absolute"
              viewBox="0 0 24 24"
              fill="white"
              style={{
                width: item.size,
                height: item.size,
                left: item.left,
                top: item.top,
                opacity: item.opacity,
                transform: `rotate(${item.rotate}deg)`,
              }}
            >
              <path d={iconPaths[item.icon]} />
            </svg>
          ))}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 flex-col">
          <h2 className={`introducing-text absolute ${headingFont.className} font-bold leading-[1.02] tracking-[0.15em] text-white text-[1.6rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[5rem] uppercase opacity-70`}>
            Introducing
          </h2>
          <div className="translate-x-4 md:translate-x-12">
            <Image
              src="/xentro-logo-no%20bg.svg"
              alt="Xentro logo"
              width={1200}
              height={1200}
              className="xentro-logo w-[72vw] max-w-[72vw] max-h-[55vh] h-auto"
            />
          </div>
        </div>

        <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
          {contentBlocks.map((block, index) => (
            <div
              key={index}
              className="problem-line absolute inset-0 flex flex-col items-center justify-center mx-auto w-full text-center px-4"
            >
              <h2
                className={`${headingFont.className} text-[2rem] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-[2.8rem] md:text-[3.4rem] relative z-10`}
              >
                {block.title}
              </h2>
              {block.subtitle && (
                <p className="mt-6 text-[1.1rem] sm:text-[1.3rem] text-white/80 max-w-2xl font-medium relative z-10">
                  {block.subtitle}
                </p>
              )}
              
              {/* Floating Text Bubbles */}
              {block.bubbles && block.bubbles.length > 0 && (
                <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
                  {block.bubbles.map((bubble, bIndex) => (
                    <div 
                      key={bIndex} 
                      className={`text-bubble absolute bg-white px-4 py-3 sm:px-5 sm:py-4 rounded-2xl shadow-xl text-left tracking-tight leading-snug ${bubble.className}`}
                    >
                      {bubble.sender && (
                        <div className="text-[#1B17FF] font-semibold text-[13px] sm:text-[15px] mb-1 leading-none">
                          {bubble.sender}
                        </div>
                      )}
                      <div className="text-slate-600 font-medium text-[13px] sm:text-base lg:text-[17px]">
                        {bubble.text}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}
