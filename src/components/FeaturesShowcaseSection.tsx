"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import gsap from "gsap";
import { MdHiking } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";

type AudienceKey = "mentors" | "founders" | "investors";

type FeatureData = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
};

type AudienceLogo = {
  icon: ReactNode;
  glowColor: string;
};

type AudienceData = {
  label: string;
  tabIcon: ReactNode;
  logo: AudienceLogo;
  features: FeatureData[];
};

const audienceOrder: AudienceKey[] = ["mentors", "founders", "investors"];

const audienceContent: Record<AudienceKey, AudienceData> = {
  mentors: {
    label: "Mentors",
    tabIcon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7.5 8.25h9m-9 3h6M4.5 5.25h15v10.5h-9l-4.5 3v-3h-1.5V5.25z" />
      </svg>
    ),
    logo: {
      glowColor: "rgba(255, 150, 42, 0.38)",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-28 w-28 text-[#ffb347] filter-[drop-shadow(0_0_24px_rgba(255,146,40,0.85))] sm:h-40 sm:w-40" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 8.5h12m-12 3.5h8M3.5 4.5h17v11.5h-9.5L6 20v-4h-2.5V4.5z" />
        </svg>
      ),
    },
    features: [
      {
        id: "M-02",
        title: "Startup Discovery Feed",
        description: "Browse motivated startups matched to your expertise.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.35-4.35m1.1-5.4a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
          </svg>
        ),
        className: "col-span-2",
      },
      {
        id: "M-03",
        title: "Session Scheduling",
        description: "Plan calls and office hours without coordination chaos.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.75v5.25l3 1.5m5.25-1.5a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z" />
          </svg>
        ),
      },
      {
        id: "M-04",
        title: "Feedback Workspace",
        description: "Deliver structured guidance founders can execute fast.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16.86 3.49a2.12 2.12 0 113 3l-10.2 10.2-4.35 1.35 1.35-4.35 10.2-10.2z" />
          </svg>
        ),
      },
      {
        id: "M-05",
        title: "Impact Analytics",
        description: "Track mentor outcomes across startups and cohorts.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7.5 16.5V12m4.5 4.5V9.75m4.5 6.75v-3m-9 6h10.5" />
          </svg>
        ),
        className: "col-span-2",
      },
    ],
  },
  founders: {
    label: "Founders",
    tabIcon: (
      <MdHiking className="h-4 w-4" aria-hidden="true" />
    ),
    logo: {
      glowColor: "rgba(255, 255, 255, 0.34)",
      icon: (
        <MdHiking
          className="h-28 w-28 text-white filter-[drop-shadow(0_0_24px_rgba(255,255,255,0.82))] sm:h-40 sm:w-40"
          aria-hidden="true"
        />
      ),
    },
    features: [
      {
        id: "F-02",
        title: "Guided Learning Paths",
        description: "Videos, templates, and checklists to build with clarity.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3.75l1.875 3.75 4.125.6-3 2.925.75 4.125L12 13.5l-3.75 1.65.75-4.125-3-2.925 4.125-.6L12 3.75z" />
          </svg>
        ),
        className: "col-span-2",
      },
      {
        id: "F-03",
        title: "Mentor Connect",
        description: "Get validation, pitch reviews, and direction quickly.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7.5 9h9m-9 3.75h5.25m-7.5 6.75l2.7-2.7a2.25 2.25 0 011.59-.66h7.11a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H7.35A2.25 2.25 0 005.1 6.75V19.5z" />
          </svg>
        ),
      },
      {
        id: "F-04",
        title: "Startup Showcase",
        description: "Publish a profile investors can review in minutes.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5.25 16.5l4.5-4.5 3.75 3.75 5.25-5.25m-5.25 0h5.25v5.25" />
          </svg>
        ),
      },
      {
        id: "F-05",
        title: "Events & Cohorts",
        description: "Join sprints, pitch days, and growth-focused cohorts.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.25 3.75v3m7.5-3v3M4.5 8.25h15m-13.5 12h12a1.5 1.5 0 001.5-1.5v-10.5a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5z" />
          </svg>
        ),
        className: "col-span-2",
      },
    ],
  },
  investors: {
    label: "Investors",
    tabIcon: (
      <TbCurrencyDollar className="h-4 w-4" aria-hidden="true" />
    ),
    logo: {
      glowColor: "rgba(74, 222, 128, 0.34)",
      icon: (
        <TbCurrencyDollar
          className="h-28 w-28 text-[#4ade80] filter-[drop-shadow(0_0_24px_rgba(34,197,94,0.76))] sm:h-40 sm:w-40"
          aria-hidden="true"
        />
      ),
    },
    features: [
      {
        id: "I-02",
        title: "Deal Flow Pipeline",
        description: "Track emerging startups in a clean pipeline view.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.75 8.25h12m-9-3l-3 3 3 3m10.5 4.5h-12m9 3l3-3-3-3" />
          </svg>
        ),
        className: "col-span-2",
      },
      {
        id: "I-03",
        title: "Startup Analytics",
        description: "Review traction signals and core startup metrics.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 19.5h15m-12-3V9.75m4.5 6.75v-9m4.5 9v-4.5" />
          </svg>
        ),
      },
      {
        id: "I-04",
        title: "Syndicate Co-investing",
        description: "Collaborate and co-invest with top mentors and leads.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7.5a3 3 0 116 0 3 3 0 01-6 0zM5.25 18.75a5.25 5.25 0 0110.5 0m1.5-9a2.25 2.25 0 110 4.5m-1.125 4.5h3.375" />
          </svg>
        ),
      },
      {
        id: "I-05",
        title: "Portfolio Tracking",
        description: "Monitor portfolio founders and progress over time.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v10.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 17.25V6.75A2.25 2.25 0 016.75 4.5zm2.25 4.5h6m-6 3h4.5" />
          </svg>
        ),
        className: "col-span-2",
      },
    ],
  },
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  isVisible?: boolean;
  delayMs?: number;
};

type LogoPanelProps = {
  activeAudience: AudienceKey;
  panelRef?: React.RefObject<HTMLElement | null>;
};

function FeatureCard({ title, description, icon, className = "", isVisible = true, delayMs = 0 }: FeatureCardProps) {
  const baseClass = "border-white/15 bg-[#0f1624]";

  return (
    <article
      className={`${baseClass} ${className} group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.1rem] border p-5 text-white transition-all duration-300 hover:border-white/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)] sm:p-6`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : "translate3d(0, 46px, 0) scale(0.9)",
        transition: "transform 760ms cubic-bezier(0.18, 0.84, 0.24, 1), opacity 620ms ease-out",
        transitionDelay: `${delayMs}ms`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />

      <div className="relative z-10 mt-1">
        <div className="mb-3 text-white/95">
          {icon}
        </div>
        <h3 className="text-[1.12rem] font-semibold leading-tight text-white sm:text-[1.3rem]">
          {title}
        </h3>
        <p className="mt-3 text-[0.82rem] leading-relaxed text-white/72 sm:text-[0.9rem]">
          {description}
        </p>
      </div>
    </article>
  );
}

function LogoPanel({ activeAudience, panelRef }: LogoPanelProps) {
  return (
    <article
      ref={panelRef}
      className="relative aspect-square w-full overflow-hidden rounded-[1.1rem]"
    >
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        {audienceOrder.map((key) => {
          const logo = audienceContent[key].logo;
          const label = audienceContent[key].label;
          const isActive = key === activeAudience;

          // Pure CSS Liquid Morphing Transition via direct inline styles for 100% reliability
          return (
            <div
              key={key}
              className="absolute inset-0 flex items-center justify-center z-10"
              style={{
                transition: "all 800ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-15deg)",
                filter: isActive ? "blur(0px)" : "blur(12px)",
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              {/* Background Glow */}
              <span
                aria-hidden="true"
                className="absolute h-40 w-40 sm:h-52 sm:w-52 rounded-[38%_62%_59%_41%/42%_39%_61%_58%] blur-2xl"
                style={{
                  backgroundColor: logo.glowColor,
                  transition: "all 700ms ease-out",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scale(1)" : "scale(0.5)",
                }}
              />

              {/* The Actual Icon */}
              <div className="relative z-10">
                <span className="sr-only">{label} logo</span>
                {logo.icon}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default function FeaturesShowcaseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeAudience, setActiveAudience] = useState<AudienceKey>("founders");
  const [isInView, setIsInView] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [logoPanelHeight, setLogoPanelHeight] = useState(0);
  const logoPanelRef = useRef<HTMLElement | null>(null);
  const revealFrameRef = useRef<number | null>(null);
  const currentSection = audienceContent[activeAudience];

  const triggerCardReveal = () => {
    if (revealFrameRef.current !== null) {
      window.cancelAnimationFrame(revealFrameRef.current);
    }

    revealFrameRef.current = window.requestAnimationFrame(() => {
      setCardsVisible(true);
      revealFrameRef.current = null;
    });
  };

  const switchAudience = (nextAudience: AudienceKey) => {
    setCardsVisible(false);
    setActiveAudience(nextAudience);
    triggerCardReveal();
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(Boolean(entry?.isIntersecting));
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) {
      setCardsVisible(false);
      return;
    }

    setCardsVisible(false);
    triggerCardReveal();

    return () => {
      if (revealFrameRef.current !== null) {
        window.cancelAnimationFrame(revealFrameRef.current);
      }
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const interval = window.setInterval(() => {
      setActiveAudience((previous) => {
        const currentIndex = audienceOrder.indexOf(previous);
        const nextIndex = (currentIndex + 1) % audienceOrder.length;
        const nextAudience = audienceOrder[nextIndex];
        setCardsVisible(false);
        triggerCardReveal();
        return nextAudience;
      });
    }, 15000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isInView]);

  useEffect(() => {
    const panel = logoPanelRef.current;

    if (!panel) return;

    const updateHeight = () => {
      setLogoPanelHeight(Math.round(panel.getBoundingClientRect().height));
    };

    updateHeight();

    const observer = new ResizeObserver(() => {
      updateHeight();
    });

    observer.observe(panel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const bentoWrapperStyle = logoPanelHeight
    ? ({ "--logo-panel-height": `${logoPanelHeight}px` } as CSSProperties)
    : undefined;

  return (
    <section id="features" ref={sectionRef} className="relative isolate w-full overflow-hidden bg-[#030712] py-18 sm:py-24">
      {/* Background Grid Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-size-[32px_32px]"
        style={{ WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 20%, transparent 80%)", maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 20%, transparent 80%)" }}
      />

      <div className="relative z-10 mx-auto max-w-280 px-6 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/55">
            Platform Features
          </p>

          <h2 className="mb-3 text-[2.2rem] font-semibold leading-none text-white sm:text-[2.85rem] lg:text-[3.2rem]">
            Engineered for Liftoff
          </h2>

          <p className="max-w-xl text-[0.95rem] leading-relaxed text-white/72 sm:text-[1.05rem]">
            Pick a role to view exactly what that audience gets inside XENTRO.
          </p>
        </div>

        <div
          className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.42fr)] lg:items-stretch"
          style={bentoWrapperStyle}
        >
          <LogoPanel activeAudience={activeAudience} panelRef={logoPanelRef} />

          {/* Right column: buttons on top, feature cards below */}
          <div className="flex flex-col gap-4">
            {/* Audience selector buttons */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {audienceOrder.map((audience) => {
                const isActive = audience === activeAudience;
                return (
                  <button
                    type="button"
                    key={audience}
                    onClick={() => switchAudience(audience)}
                    aria-pressed={isActive}
                    className={`flex h-12 w-full items-center justify-center gap-2 rounded-full border text-[0.69rem] font-semibold uppercase tracking-[0.19em] transition-all duration-200 ${
                      isActive
                        ? "border-white/70 bg-white text-[#070c16] shadow-[0_10px_25px_rgba(255,255,255,0.22)]"
                        : "border-white/35 bg-white/4 text-white/88 hover:border-white/55 hover:bg-white/10"
                    }`}
                  >
                    {audienceContent[audience].tabIcon}
                    {audienceContent[audience].label}
                  </button>
                );
              })}
            </div>

            {/* Feature cards */}
            <div className="grid flex-1 grid-cols-3 auto-rows-[132px] gap-4 sm:auto-rows-[154px] sm:gap-5 lg:auto-rows-auto lg:grid-rows-2 lg:min-h-0">
              {currentSection.features.map((feature) => (
                <FeatureCard
                  key={`${activeAudience}-${feature.id}`}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  className={feature.className}
                  isVisible={cardsVisible}
                  delayMs={110 + currentSection.features.findIndex((item) => item.id === feature.id) * 120}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}