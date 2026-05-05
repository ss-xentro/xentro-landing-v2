"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ROLES = [
  {
    id: "founders",
    title: "For Founders",
    description: "Guided learning paths, Mentor Connect, Startup Showcase, and exclusive Events to accelerate your build.",
  },
  {
    id: "mentors",
    title: "For Mentors",
    description: "Startup Discovery Feed, Session Scheduling, and Impact Analytics to maximize your guidance.",
  },
  {
    id: "investors",
    title: "For Investors",
    description: "Deal Flow Pipeline, Startup Analytics, and Syndicate Co-investing to back the best teams.",
  },
  {
    id: "institutions",
    title: "For Institutions",
    description: "Portfolio Management, Cohort Tracking, and Community Tools for accelerators, VC firms, and incubators.",
  },
];

export default function FeaturesShowcaseSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeRole, setActiveRole] = useState(-1);
  const previousRole = useRef(-1);

  // Handle text crossfading outside of ScrollTrigger
  useEffect(() => {
    if (previousRole.current === activeRole) return;

    // Fade out previous
    if (previousRole.current !== -1) {
      gsap.to(`.role-text-${previousRole.current}`, { opacity: 0, y: -20, duration: 0.3, overwrite: "auto" });
    } else {
      gsap.to(`.role-text-intro`, { opacity: 0, y: -20, duration: 0.3, overwrite: "auto" });
    }

    // Fade in current
    if (activeRole !== -1) {
      gsap.to(`.role-text-${activeRole}`, { opacity: 1, y: 0, duration: 0.3, delay: 0.1, overwrite: "auto" });
    } else {
      gsap.to(`.role-text-intro`, { opacity: 1, y: 0, duration: 0.3, delay: 0.1, overwrite: "auto" });
    }

    previousRole.current = activeRole;
  }, [activeRole]);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Initial Setup
    gsap.set(".bubble", { scale: 0, opacity: 0 });
    gsap.set(".role-text", { opacity: 0, y: 20 });
    gsap.set(".role-text-intro", { opacity: 1, y: 0 });

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500", // Drastically reduced scroll distance to make bubbles appear quickly
          scrub: 1.5,    // Increased scrub interpolation for smoothness
          pin: true,
        }
      });
      
      // Set bubble origin to the migrated center
      gsap.set(".bubble", { x: "25vw", y: 0 });

      // 1. Logo Entrance
      tl.fromTo(".main-logo", 
        { scale: 0.5, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
      );

      // 2. Migration
      tl.to(".main-logo", { x: "25vw", duration: 1, ease: "power2.inOut" });

      // 3. Bubble 1 (Founders)
      tl.to(".bubble-0", { 
        scale: 1, opacity: 1, x: "32vw", y: "-22vh", duration: 1,
        onStart: () => setActiveRole(0),
        onReverseComplete: () => setActiveRole(-1)
      }, "+=0.2");

      // 4. Bubble 2 (Mentors)
      tl.to(".bubble-1", { 
        scale: 1, opacity: 1, x: "25vw", y: "25vh", duration: 1,
        onStart: () => setActiveRole(1),
        onReverseComplete: () => setActiveRole(0)
      }, "+=0.2");

      // 5. Bubble 3 (Investors)
      tl.to(".bubble-2", { 
        scale: 1, opacity: 1, x: "12vw", y: "-10vh", duration: 1,
        onStart: () => setActiveRole(2),
        onReverseComplete: () => setActiveRole(1)
      }, "+=0.2");

      // 6. Bubble 4 (Institutions)
      tl.to(".bubble-3", { 
        scale: 1, opacity: 1, x: "38vw", y: "10vh", duration: 1,
        onStart: () => setActiveRole(3),
        onReverseComplete: () => setActiveRole(2)
      }, "+=0.2");



      // Scroll buffer: keeps section pinned for longer after animations finish
      tl.to({}, { duration: 3.5 });
    });

    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500", // Drastically reduced scroll distance to make bubbles appear quickly
          scrub: 1.5,    // Increased scrub interpolation for smoothness
          pin: true,
        }
      });
      
      // Set bubble origin to the migrated center on mobile
      gsap.set(".bubble", { x: 0, y: "22vh" });

      tl.fromTo(".main-logo", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power2.out" });
      tl.to(".main-logo", { y: "22vh", duration: 1, ease: "power2.inOut" });

      tl.to(".bubble-0", { 
        scale: 1, opacity: 1, x: "28vw", y: "8vh", duration: 1,
        onStart: () => setActiveRole(0),
        onReverseComplete: () => setActiveRole(-1)
      }, "+=0.2");

      tl.to(".bubble-1", { 
        scale: 1, opacity: 1, x: "-28vw", y: "8vh", duration: 1,
        onStart: () => setActiveRole(1),
        onReverseComplete: () => setActiveRole(0)
      }, "+=0.2");

      tl.to(".bubble-2", { 
        scale: 1, opacity: 1, x: "28vw", y: "36vh", duration: 1,
        onStart: () => setActiveRole(2),
        onReverseComplete: () => setActiveRole(1)
      }, "+=0.2");

      // Bubble 4 (Institutions)
      tl.to(".bubble-3", { 
        scale: 1, opacity: 1, x: "-28vw", y: "36vh", duration: 1,
        onStart: () => setActiveRole(3),
        onReverseComplete: () => setActiveRole(2)
      }, "+=0.2");



      // Scroll buffer: keeps section pinned for longer after animations finish
      tl.to({}, { duration: 3.5 });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  const handleBubbleClick = (index: number) => {
    setActiveRole(index);
  };

  return (
    <div id="features">
      <section ref={containerRef} className="relative h-screen w-full bg-[#1B17FF] overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Panel - Text */}
        <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-24 h-[45vh] lg:h-full z-20">
          <div className="relative w-full max-w-xl h-[200px] sm:h-[220px] lg:h-[300px]">
            {/* Intro Text */}
            <div className="role-text-intro absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none">
              <h2 className={`${headingFont.className} text-white text-4xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight`}>
                Engineered for Liftoff
              </h2>
              <p className="text-white/80 text-lg lg:text-xl">
                Scroll to see how XENTRO powers every side of the startup ecosystem.
              </p>
            </div>

            {ROLES.map((role, i) => (
              <div key={role.id} className={`role-text role-text-${i} absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none`}>
                <h2 className={`${headingFont.className} text-white text-4xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight`}>
                  {role.title}
                </h2>
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>


        </div>

        {/* Right Panel - Spacer */}
        <div className="relative h-[50vh] lg:h-full pointer-events-none z-10"></div>
      </div>

      {/* Animation Elements - Centered absolutely */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <div className="relative w-0 h-0 flex items-center justify-center">
          
          {/* Bubbles */}
          {ROLES.map((role, i) => (
             <div 
               key={role.id}
               onClick={() => handleBubbleClick(i)}
               className={`bubble bubble-${i} absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full border-[3px] border-white flex flex-col items-center justify-center shadow-2xl transition-all duration-300 pointer-events-auto cursor-pointer`}
               style={{
                 backgroundColor: activeRole === i ? 'white' : '#1B17FF',
                 color: activeRole === i ? '#1B17FF' : 'white',
               }}
             >
               <span className={`${headingFont.className} font-bold text-sm sm:text-base lg:text-lg`}>{role.title.replace('For ', '')}</span>
             </div>
          ))}

          {/* Main Logo */}
          <div className="main-logo absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] border-4 border-white/20">
             <Image src="/favicon.svg" alt="Xentro" fill className="object-contain p-6 sm:p-8 lg:p-12" priority />
          </div>

        </div>
      </div>
      </section>
    </div>
  );
}