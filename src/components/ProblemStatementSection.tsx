"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Montserrat, Open_Sans } from "next/font/google";

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

type Bubble = {
  stat: string;
  label: string;
  size: number;
  color: string;
  top: string;
  left: string;
  delay: string;
  duration: string;
  highlight?: boolean;
};

const bubbles: Bubble[] = [
  {
    stat: "112K+",
    label: "Startups",
    size: 196,
    color: "#93c5fd",
    top: "2.5%",
    left: "60%",
    delay: "-0.8s",
    duration: "8.2s",
    highlight: true,
  },
  {
    stat: "1.5K+",
    label: "Incubators",
    size: 136,
    color: "#dbeafe",
    top: "8%",
    left: "10%",
    delay: "-2.2s",
    duration: "9.1s",
  },
  {
    stat: "100+",
    label: "Unicorns",
    size: 174,
    color: "#60a5fa",
    top: "30%",
    left: "70%",
    delay: "-1.2s",
    duration: "8.7s",
  },
  {
    stat: "2K+",
    label: "Investors",
    size: 122,
    color: "#bfdbfe",
    top: "45%",
    left: "8%",
    delay: "-3.1s",
    duration: "10s",
  },
  {
    stat: "600+",
    label: "Cities",
    size: 166,
    color: "#3b82f6",
    top: "63%",
    left: "68%",
    delay: "-1.7s",
    duration: "9.3s",
  },
  {
    stat: "₹30B+",
    label: "Funding",
    size: 148,
    color: "#7dd3fc",
    top: "71%",
    left: "36%",
    delay: "-2.7s",
    duration: "8.9s",
  },
];

type ParsedStat = {
  prefix: string;
  value: number;
  suffix: string;
  decimals: number;
};

function parseStat(stat: string): ParsedStat {
  const match = stat.match(/^([^\d]*)([\d]+(?:\.[\d]+)?)(.*)$/);

  if (!match) {
    return { prefix: "", value: 0, suffix: stat, decimals: 0 };
  }

  const [, prefix, rawValue, suffix] = match;
  const decimals = rawValue.includes(".") ? rawValue.split(".")[1].length : 0;

  return {
    prefix,
    value: Number(rawValue),
    suffix,
    decimals,
  };
}

function formatAnimatedStat(parsed: ParsedStat, progress: number): string {
  const safeProgress = Math.min(Math.max(progress, 0), 1);
  const currentValue = parsed.value * safeProgress;

  if (parsed.decimals > 0) {
    return `${parsed.prefix}${currentValue.toFixed(parsed.decimals)}${parsed.suffix}`;
  }

  return `${parsed.prefix}${Math.round(currentValue)}${parsed.suffix}`;
}

export default function ProblemStatementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);
  const parsedStatsRef = useRef<ParsedStat[]>(bubbles.map((bubble) => parseStat(bubble.stat)));
  const [bubblesRevealed, setBubblesRevealed] = useState(false);
  const [copyRevealed, setCopyRevealed] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<string[]>(
    parsedStatsRef.current.map((parsed) => `${parsed.prefix}0${parsed.suffix}`),
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const startAnimation = () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setCopyRevealed(true);

      if (prefersReducedMotion) {
        setBubblesRevealed(true);
        setAnimatedStats(bubbles.map((bubble) => bubble.stat));
        return;
      }

      setBubblesRevealed(true);

      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;

        const nextStats = parsedStatsRef.current.map((parsed, index) => {
          const duration = 1100 + index * 170;
          const progress = elapsed / duration;
          return formatAnimatedStat(parsed, progress);
        });

        setAnimatedStats(nextStats);

        if (elapsed < 1100 + (bubbles.length - 1) * 170) {
          animationFrameRef.current = window.requestAnimationFrame(tick);
        }
      };

      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        startAnimation();
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="xentro-section-rise relative w-full overflow-hidden bg-white py-24 md:py-32">
      <div className="w-full border-y border-slate-200 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 12% 14%, rgba(96, 165, 250, 0.16), transparent 38%), radial-gradient(circle at 88% 80%, rgba(59, 130, 246, 0.14), transparent 42%)" }}
        />
        <div className="mx-auto grid max-w-310 items-center gap-16 px-6 py-18 sm:px-10 md:py-22 lg:grid-cols-[1.02fr_0.98fr] lg:px-16">
          <div className="max-w-[62ch]">
            <p className={`${headingFont.className} mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-slate-700`}>
              Why XENTRO
            </p>

            <h2 className={`${headingFont.className} mb-7 text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[#0f2f72] sm:text-[2.85rem] lg:text-[3.45rem]`}>
              <span
                className="block"
                style={{
                  opacity: copyRevealed ? 1 : 0,
                  transform: copyRevealed ? "translateY(0)" : "translateY(20px)",
                  filter: copyRevealed ? "blur(0)" : "blur(8px)",
                  transition: "opacity 650ms ease-out, transform 700ms cubic-bezier(0.2, 0.84, 0.22, 1), filter 650ms ease-out",
                  transitionDelay: "0ms",
                }}
              >
              The system wasn't built for you
              </span>
            </h2>

            <p
              className={`${bodyFont.className} text-[1.12rem] leading-[1.86] text-slate-900 sm:text-[1.24rem]`}
              style={{
                opacity: copyRevealed ? 1 : 0,
                transform: copyRevealed ? "translateY(0)" : "translateY(22px)",
                filter: copyRevealed ? "blur(0)" : "blur(8px)",
                transition: "opacity 650ms ease-out, transform 720ms cubic-bezier(0.2, 0.84, 0.22, 1), filter 650ms ease-out",
                transitionDelay: "170ms",
              }}
            >
              Most Indian students with startup ideas hit the same wall — no roadmap, no mentor, no platform that speaks to where they actually are Not an IIT Not in Bangalore Just someone with an idea and nowhere concrete to go
            </p>

            <p
              className={`${bodyFont.className} mt-6 text-[1.06rem] leading-[1.82] text-slate-700 sm:text-[1.14rem]`}
              style={{
                opacity: copyRevealed ? 1 : 0,
                transform: copyRevealed ? "translateY(0)" : "translateY(24px)",
                filter: copyRevealed ? "blur(0)" : "blur(9px)",
                transition: "opacity 650ms ease-out, transform 740ms cubic-bezier(0.2, 0.84, 0.22, 1), filter 650ms ease-out",
                transitionDelay: "340ms",
              }}
            >
              Incubators want traction Accelerators want revenue The internet gives you a hundred frameworks but zero direction Xentro was built to fix exactly that
            </p>
          </div>

          <div className="relative mx-auto h-97.5 w-full max-w-147.5 sm:h-117.5 lg:h-140">

            {bubbles.map((bubble, index) => (
              <div
                key={`bubble-${index}`}
                className="absolute"
                style={{
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  top: bubble.top,
                  left: bubble.left,
                  opacity: bubblesRevealed ? 1 : 0,
                  transform: bubblesRevealed ? "translate3d(0, 0, 0) scale(1)" : "translate3d(0, 54px, 0) scale(0.72)",
                  transition: "transform 780ms cubic-bezier(0.18, 0.84, 0.24, 1), opacity 600ms ease-out",
                  transitionDelay: bubblesRevealed ? `${index * 130}ms` : "0ms",
                }}
              >
                <div
                  className="xentro-bubble-float flex h-full w-full items-center justify-center rounded-full border border-blue-300 text-slate-950 shadow-[0_18px_42px_rgba(30,58,138,0.2)]"
                  style={{
                    backgroundColor: bubble.color,
                    animationDelay: bubble.delay,
                    animationDuration: bubble.duration,
                  }}
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className={`${headingFont.className} text-[1.4rem] font-extrabold leading-tight sm:text-[1.56rem]`}>
                      {animatedStats[index]}
                    </span>
                    <span className={`${bodyFont.className} mt-1 text-[0.72rem] font-bold uppercase tracking-[0.14em] opacity-90 sm:text-[0.8rem]`}>
                      {bubble.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}