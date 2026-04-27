"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import gsap from "gsap";

type AudienceKey = "mentors" | "founders" | "investors";

type FeatureData = {
  id: string;
  title: string;
  description: string;
  className?: string;
};

type AudienceLogo = {
  icon: ReactNode;
  glowColor: string;
};

type AudienceData = {
  label: string;
  logo: AudienceLogo;
  features: FeatureData[];
};

const audienceOrder: AudienceKey[] = ["mentors", "founders", "investors"];

const audienceContent: Record<AudienceKey, AudienceData> = {
  mentors: {
    label: "Mentors",
    logo: {
      glowColor: "rgba(255, 150, 42, 0.38)",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-28 w-28 text-[#ffb347] filter-[drop-shadow(0_0_24px_rgba(255,146,40,0.85))] sm:h-40 sm:w-40">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.772-1.634.772H9.75c-.935 0-1.813-.415-2.422-1.126l-3.328-3.887A2.25 2.25 0 015.25 12.75v-2.25c0-.621.504-1.125 1.125-1.125z"
          />
        </svg>
      ),
    },
    features: [
      {
        id: "M-02",
        title: "Startup Discovery Feed",
        description: "Browse motivated startups matched to your expertise.",
        className: "col-span-2",
      },
      {
        id: "M-03",
        title: "Session Scheduling",
        description: "Plan calls and office hours without coordination chaos.",
      },
      {
        id: "M-04",
        title: "Feedback Workspace",
        description: "Deliver structured guidance founders can execute fast.",
      },
      {
        id: "M-05",
        title: "Impact Analytics",
        description: "Track mentor outcomes across startups and cohorts.",
        className: "col-span-2",
      },
    ],
  },
  founders: {
    label: "Founders",
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
        className: "col-span-2",
      },
      {
        id: "F-03",
        title: "Mentor Connect",
        description: "Get validation, pitch reviews, and direction quickly.",
      },
      {
        id: "F-04",
        title: "Startup Showcase",
        description: "Publish a profile investors can review in minutes.",
      },
      {
        id: "F-05",
        title: "Events & Cohorts",
        description: "Join sprints, pitch days, and growth-focused cohorts.",
        className: "col-span-2",
      },
    ],
  },
  investors: {
    label: "Investors",
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
        className: "col-span-2",
      },
      {
        id: "I-03",
        title: "Startup Analytics",
        description: "Review traction signals and core startup metrics.",
      },
      {
        id: "I-04",
        title: "Syndicate Co-investing",
        description: "Collaborate and co-invest with top mentors and leads.",
      },
      {
        id: "I-05",
        title: "Portfolio Tracking",
        description: "Monitor portfolio founders and progress over time.",
        className: "col-span-2",
      },
    ],
  },
};

type FeatureCardProps = {
  id: string;
  title: string;
  description: string;
  className?: string;
  tag?: string;
};

type LogoPanelProps = {
  activeAudience: AudienceKey;
  panelRef?: React.RefObject<HTMLElement | null>;
};

function FeatureCard({ id, title, description, className = "", tag = "Module" }: FeatureCardProps) {
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

      <div className="relative z-10 flex items-center justify-between text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-white/55">
        <span>{id}</span>
        <span>{tag}</span>
      </div>

      <div className="relative z-10 mt-4">
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
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px]"
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
          <LogoPanel logo={currentSection.logo} label={currentSection.label} panelRef={logoPanelRef} />

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
                    className={`h-12 w-full rounded-full border text-[0.69rem] font-semibold uppercase tracking-[0.19em] transition-all duration-200 ${
                      isActive
                        ? "border-white/70 bg-white text-[#070c16] shadow-[0_10px_25px_rgba(255,255,255,0.22)]"
                        : "border-white/35 bg-white/4 text-white/88 hover:border-white/55 hover:bg-white/10"
                    }`}
                  >
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
                  id={feature.id}
                  title={feature.title}
                  description={feature.description}
                  className={feature.className}
                  tag={currentSection.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}