"use client";

import { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  },
  {
    title: "Every door was locked.",
  },
  {
    title: "Does this story sounds Familiar?",
  },
  {
    title: "That is why",
  },
];

const parallaxPills = [
  { width: 48, height: 48, left: "15%", top: "266%", speed: 4.15, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.48 },
  { width: 27, height: 27, left: "44%", top: "284%", speed: 4.69, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.42 },
  { width: 39, height: 39, left: "21%", top: "223%", speed: 2.16, color: "from-white/30 to-white/5", blur: "blur-[1px]", opacity: 0.53 },
  { width: 31, height: 31, left: "11%", top: "345%", speed: 2.59, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.49 },
  { width: 44, height: 44, left: "57%", top: "213%", speed: 4.60, color: "from-white/30 to-white/5", blur: "blur-none", opacity: 0.65 },
  { width: 52, height: 52, left: "42%", top: "337%", speed: 3.28, color: "from-white/30 to-white/5", blur: "blur-none", opacity: 0.43 },
  { width: 30, height: 30, left: "18%", top: "301%", speed: 1.85, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.52 },
  { width: 44, height: 44, left: "40%", top: "118%", speed: 4.95, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.69 },
  { width: 41, height: 41, left: "19%", top: "198%", speed: 4.19, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.64 },
  { width: 34, height: 34, left: "56%", top: "190%", speed: 3.06, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.54 },
  { width: 54, height: 54, left: "56%", top: "103%", speed: 3.47, color: "from-white/30 to-white/5", blur: "blur-[1px]", opacity: 0.49 },
  { width: 33, height: 33, left: "8%", top: "135%", speed: 1.55, color: "from-white/30 to-white/5", blur: "blur-none", opacity: 0.49 },
  { width: 42, height: 42, left: "27%", top: "224%", speed: 2.51, color: "from-white/30 to-white/5", blur: "blur-none", opacity: 0.68 },
  { width: 36, height: 36, left: "26%", top: "106%", speed: 2.31, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.59 },
  { width: 50, height: 50, left: "21%", top: "165%", speed: 3.80, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.52 },
  { width: 49, height: 49, left: "25%", top: "213%", speed: 2.08, color: "from-white/30 to-white/5", blur: "blur-[1px]", opacity: 0.52 },
  { width: 59, height: 59, left: "26%", top: "320%", speed: 2.47, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.37 },
  { width: 61, height: 61, left: "33%", top: "296%", speed: 3.30, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.45 },
  { width: 30, height: 30, left: "39%", top: "103%", speed: 1.93, color: "from-white/30 to-white/5", blur: "blur-none", opacity: 0.44 },
  { width: 32, height: 32, left: "39%", top: "228%", speed: 2.74, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.70 },
  { width: 29, height: 29, left: "11%", top: "256%", speed: 3.59, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.43 },
  { width: 53, height: 53, left: "90%", top: "127%", speed: 3.11, color: "from-white/30 to-white/5", blur: "blur-[1px]", opacity: 0.48 },
  { width: 37, height: 37, left: "88%", top: "159%", speed: 2.05, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.41 },
  { width: 53, height: 53, left: "22%", top: "268%", speed: 4.02, color: "from-white/30 to-white/5", blur: "blur-[1px]", opacity: 0.62 },
  { width: 51, height: 51, left: "40%", top: "296%", speed: 4.99, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.69 },
  { width: 30, height: 30, left: "54%", top: "338%", speed: 3.89, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.50 },
  { width: 49, height: 49, left: "7%", top: "242%", speed: 2.50, color: "from-white/30 to-white/5", blur: "blur-none", opacity: 0.34 },
  { width: 39, height: 39, left: "79%", top: "195%", speed: 2.80, color: "from-white/30 to-white/5", blur: "blur-none", opacity: 0.52 },
  { width: 34, height: 34, left: "51%", top: "216%", speed: 4.90, color: "from-white/30 to-white/5", blur: "blur-[1px]", opacity: 0.42 },
  { width: 33, height: 33, left: "50%", top: "348%", speed: 1.71, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.52 },
  { width: 30, height: 30, left: "78%", top: "323%", speed: 2.92, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.52 },
  { width: 30, height: 30, left: "52%", top: "261%", speed: 3.71, color: "from-white/30 to-white/5", blur: "blur-none", opacity: 0.39 },
  { width: 24, height: 24, left: "8%", top: "148%", speed: 2.34, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.61 },
  { width: 37, height: 37, left: "28%", top: "162%", speed: 1.97, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.48 },
  { width: 26, height: 26, left: "18%", top: "275%", speed: 3.90, color: "from-white/30 to-white/5", blur: "blur-[1px]", opacity: 0.33 },
  { width: 31, height: 31, left: "95%", top: "343%", speed: 3.32, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.32 },
  { width: 38, height: 38, left: "86%", top: "160%", speed: 2.91, color: "from-white/30 to-white/5", blur: "blur-none", opacity: 0.42 },
  { width: 62, height: 62, left: "78%", top: "342%", speed: 3.36, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.31 },
  { width: 52, height: 52, left: "93%", top: "195%", speed: 3.89, color: "from-white/30 to-white/5", blur: "blur-[1px]", opacity: 0.69 },
  { width: 41, height: 41, left: "72%", top: "113%", speed: 3.81, color: "from-white/30 to-white/5", blur: "blur-none", opacity: 0.55 },
  { width: 54, height: 54, left: "90%", top: "199%", speed: 4.58, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.59 },
  { width: 35, height: 35, left: "64%", top: "322%", speed: 3.53, color: "from-white/30 to-white/5", blur: "blur-none", opacity: 0.49 },
  { width: 43, height: 43, left: "91%", top: "303%", speed: 2.08, color: "from-white/30 to-white/5", blur: "blur-[2px]", opacity: 0.31 },
  { width: 24, height: 24, left: "58%", top: "161%", speed: 4.21, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.33 },
  { width: 60, height: 60, left: "34%", top: "239%", speed: 2.54, color: "from-white/30 to-white/5", blur: "blur-[3px]", opacity: 0.42 },
];

export default function ProblemStatementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineElements = gsap.utils.toArray<HTMLElement>(".problem-line");
      gsap.set(lineElements, {
        opacity: 0,
        y: 28,
        filter: "blur(8px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2800",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      let maxTime = 0;

      lineElements.forEach((line, index) => {
        tl.to(
          line,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power2.out",
          },
          index * 2.5,
        );

        const outTime = index * 2.5 + 1.6;
        tl.to(
          line,
          {
            opacity: 0,
            y: -28,
            filter: "blur(8px)",
            duration: 0.6,
            ease: "power2.in",
          },
          outTime,
        );
        
        maxTime = Math.max(maxTime, outTime + 0.6);
      });

      // Transition background color from #1B17FF to dark navy (#0b192c)
      tl.to(
        sectionRef.current,
        {
          backgroundColor: "#0b192c",
          duration: 1.5,
          ease: "power2.inOut",
        },
        11.0 // Starts transitioning as the 5th item (index 4) is ending
      );


      // Set initial state for the logo and introducing text
      gsap.set(".introducing-text", { opacity: 0, scale: 1, y: 28, filter: "blur(8px)" });
      gsap.set(".xentro-logo", { opacity: 0, scale: 0.8, filter: "blur(12px)" });

      // Introducing Text appears at 12.5
      tl.to(".introducing-text", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }, 12.5);
      
      // Introducing shrinks and dissolves
      tl.to(".introducing-text", { opacity: 0, scale: 0.5, filter: "blur(12px)", duration: 0.8, ease: "power2.in" }, 14.5);

      // Fade the logo in once the main sequence is mostly complete
      tl.to(".xentro-logo", { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.9, ease: "power2.out" }, 14.5);

      const pillElements = gsap.utils.toArray<HTMLSpanElement>(".parallax-pill");
      pillElements.forEach((pill) => {
        const speed = parseFloat(pill.dataset.speed || "1");
        tl.to(
          pill,
          {
            y: -2000 * speed,
            ease: "none",
            duration: 18.0,
          },
          0,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="problem" ref={sectionRef} className="relative overflow-hidden bg-[#1B17FF] h-screen">
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-100 opacity-0" />
      <div className="relative mx-auto flex h-full max-w-5xl items-center justify-center px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {parallaxPills.map((pill, index) => (
            <span
              key={index}
              data-speed={pill.speed}
              className={`parallax-pill absolute rounded-3xl bg-linear-to-b ${pill.color} ${pill.blur}`}
              style={{
                width: pill.width,
                height: pill.height,
                left: pill.left,
                top: pill.top,
                opacity: pill.opacity,
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 flex-col">
          <h2 className={`introducing-text absolute ${headingFont.className} font-semibold leading-[1.02] tracking-[-0.03em] text-white text-[4.5rem] sm:text-[6rem] md:text-[7.5rem]`}>
            Introducing
          </h2>
          <div className="translate-x-4 md:translate-x-12">
            <Image
              src="/xentro-logo-no%20bg.svg"
              alt="Xentro logo"
              width={1200}
              height={1200}
              className="xentro-logo w-[48vw] max-w-[48vw] max-h-[48vh] h-auto"
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
                className={`${headingFont.className} text-[2rem] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-[2.8rem] md:text-[3.4rem]`}
              >
                {block.title}
              </h2>
              {block.subtitle && (
                <p className="mt-6 text-[1.1rem] sm:text-[1.3rem] text-white/80 max-w-2xl font-medium">
                  {block.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
