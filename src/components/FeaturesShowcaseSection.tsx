"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import gsap from "gsap";

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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 4.5l6.75 3.75L12 12 5.25 8.25 12 4.5zM5.25 12L12 15.75 18.75 12M5.25 15.75L12 19.5l6.75-3.75" />
      </svg>
    ),
    logo: {
      glowColor: "rgba(255, 150, 42, 0.38)",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-28 w-28 text-[#ffb347] filter-[drop-shadow(0_0_24px_rgba(255,146,40,0.85))] sm:h-40 sm:w-40" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.7}
            d="M7.5 20.25V10.5m0 0V9a3 3 0 013-3h.75a.75.75 0 01.75.75v3.75m-4.5 0H4.5a.75.75 0 00-.75.75v6a.75.75 0 00.75.75H7.5m0 0h5.25c1.518 0 2.863-1.013 3.277-2.473l1.513-5.25a1.5 1.5 0 00-1.442-1.902H13.5m-6 0h6"
          />
        </svg>
      ),
    },
    features: [
      {
        id: "M-02",
        title: "Startup Discovery Feed",
        description: "Browse motivated startups matched to your expertise.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3.75 5.25h16.5v13.5H3.75V5.25zm4.5 0v13.5m7.5-13.5v13.5" />
          </svg>
        ),
        className: "col-span-2",
      },
      {
        id: "M-03",
        title: "Session Scheduling",
        description: "Plan calls and office hours without coordination chaos.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M8.25 3.75v3m7.5-3v3M4.5 8.25h15m-13.5 12h12a1.5 1.5 0 001.5-1.5v-10.5a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5z" />
          </svg>
        ),
      },
      {
        id: "M-04",
        title: "Feedback Workspace",
        description: "Deliver structured guidance founders can execute fast.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M8.25 9.75h7.5m-7.5 3.75h4.5M6 4.5h12A1.5 1.5 0 0119.5 6v12A1.5 1.5 0 0118 19.5H6A1.5 1.5 0 014.5 18V6A1.5 1.5 0 016 4.5z" />
          </svg>
        ),
      },
      {
        id: "M-05",
        title: "Impact Analytics",
        description: "Track mentor outcomes across startups and cohorts.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4.5 19.5h15M7.5 15V9m4.5 6V6.75m4.5 8.25v-3" />
          </svg>
        ),
        className: "col-span-2",
      },
    ],
  },
  founders: {
    label: "Founders",
    tabIcon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 3.75l2.625 5.25 5.625.75-4.125 4.125 1.125 5.625L12 16.5l-5.25 3 1.125-5.625L3.75 9.75l5.625-.75L12 3.75z" />
      </svg>
    ),
    logo: {
      glowColor: "rgba(255, 255, 255, 0.34)",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-28 w-28 text-white filter-[drop-shadow(0_0_24px_rgba(255,255,255,0.82))] sm:h-40 sm:w-40">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
    features: [
      {
        id: "F-02",
        title: "Guided Learning Paths",
        description: "Videos, templates, and checklists to build with clarity.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4.5 6.75A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v10.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 17.25V6.75zm4.5 0v10.5m0-8.25h6" />
          </svg>
        ),
        className: "col-span-2",
      },
      {
        id: "F-03",
        title: "Mentor Connect",
        description: "Get validation, pitch reviews, and direction quickly.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7.5 7.5h9m-9 4.5h5.25m-8.25 7.5l3.258-3.258a2.25 2.25 0 011.591-.659h7.401A2.25 2.25 0 0019.5 13.5V6.75A2.25 2.25 0 0017.25 4.5H6.75A2.25 2.25 0 004.5 6.75v12.75z" />
          </svg>
        ),
      },
      {
        id: "F-04",
        title: "Startup Showcase",
        description: "Publish a profile investors can review in minutes.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4.5 6.75A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v10.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 17.25V6.75zm3 8.25l2.625-2.625 2.25 2.25 3.375-3.375" />
          </svg>
        ),
      },
      {
        id: "F-05",
        title: "Events & Cohorts",
        description: "Join sprints, pitch days, and growth-focused cohorts.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M8.25 3.75v3m7.5-3v3M4.5 8.25h15m-3.75 6.75h.008v.008h-.008V15zm-4.5 0h.008v.008h-.008V15zm-4.5 0h.008v.008H7.5V15zm10.5 3.75h.008v.008h-.008v-.008zm-4.5 0h.008v.008h-.008v-.008zm-4.5 0h.008v.008H7.5v-.008z" />
          </svg>
        ),
        className: "col-span-2",
      },
    ],
  },
  investors: {
    label: "Investors",
    tabIcon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3.75 19.5h16.5M6.75 15.75h3v-6h-3v6zm7.5 0h3V6.75h-3v9z" />
      </svg>
    ),
    logo: {
      glowColor: "rgba(110, 215, 255, 0.34)",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-28 w-28 text-[#7ed7ff] filter-[drop-shadow(0_0_24px_rgba(90,198,255,0.76))] sm:h-40 sm:w-40">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 3h12l4 9-10 9L2 12l4-9z"
          />
        </svg>
      ),
    },
    features: [
      {
        id: "I-02",
        title: "Deal Flow Pipeline",
        description: "Track emerging startups in a clean pipeline view.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4.5 6.75h7.5v4.5H4.5v-4.5zm0 6h7.5v4.5H4.5v-4.5zm9-3h6v7.5h-6v-7.5z" />
          </svg>
        ),
        className: "col-span-2",
      },
      {
        id: "I-03",
        title: "Startup Analytics",
        description: "Review traction signals and core startup metrics.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4.5 19.5h15m-12-3V9.75m4.5 6.75v-9m4.5 9v-4.5" />
          </svg>
        ),
      },
      {
        id: "I-04",
        title: "Syndicate Co-investing",
        description: "Collaborate and co-invest with top mentors and leads.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 7.5a3 3 0 116 0 3 3 0 01-6 0zM5.25 18.75a5.25 5.25 0 0110.5 0m1.5-9a2.25 2.25 0 110 4.5m-1.125 4.5h3.375" />
          </svg>
        ),
      },
      {
        id: "I-05",
        title: "Portfolio Tracking",
        description: "Monitor portfolio founders and progress over time.",
        icon: (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M6.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v10.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 17.25V6.75A2.25 2.25 0 016.75 4.5zm2.25 4.5h6m-6 3h4.5" />
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
};

type LogoPanelProps = {
  activeAudience: AudienceKey;
  panelRef?: React.RefObject<HTMLElement | null>;
};

function FeatureCard({ title, description, icon, className = "" }: FeatureCardProps) {
  const baseClass = "border-white/15 bg-[#0f1624]";

  return (
    <article
      className={`${baseClass} ${className} group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.1rem] border p-5 text-white transition-all duration-300 hover:border-white/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)] sm:p-6`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />

      <div className="relative z-10 mt-1">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/8 text-white/95">
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
      className="relative aspect-square w-full overflow-hidden rounded-[1.1rem] bg-[#111a2b]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(255,255,255,0.04)" }}
      />
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
  const [activeAudience, setActiveAudience] = useState<AudienceKey>("founders");
  const [logoPanelHeight, setLogoPanelHeight] = useState(0);
  const logoPanelRef = useRef<HTMLElement | null>(null);
  const currentSection = audienceContent[activeAudience];

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
    <section className="relative isolate w-full overflow-hidden bg-[#030712] py-18 sm:py-24">
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
                    onClick={() => setActiveAudience(audience)}
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
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}