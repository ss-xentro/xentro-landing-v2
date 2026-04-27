"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    name: "Startups",
    subtitle: "For early-stage founders\nready to build & grow.",
    price: "799",
    period: "/month",
    features: [
      "Startup profile & dashboard",
      "Mentor matching",
      "Community access",
      "Pitch deck tools",
      "Resource library",
    ],
  },
  {
    name: "Mentors",
    subtitle: "For experienced founders\n& industry experts.",
    price: "1,299",
    period: "/month",
    features: [
      "Mentor dashboard",
      "Startup discovery feed",
      "Session scheduling",
      "Impact analytics",
      "Priority support",
    ],
    highlight: true,
    badge: "Popular",
  },
  {
    name: "Investors",
    subtitle: "For angels & micro-VCs\nscouting early talent.",
    price: "3,500",
    period: "/month",
    features: [
      "Deal flow pipeline",
      "Startup analytics",
      "Direct founder access",
      "Portfolio tracking",
      "Premium support",
    ],
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.1} className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01" />
    </svg>
  );
}

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pricing-header",
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      headerTl
        .fromTo(
          ".pricing-eyebrow",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }
        )
        .fromTo(
          ".pricing-main-title",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
          "-=0.28"
        )
        .fromTo(
          ".pricing-desc",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
          "-=0.3"
        );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 52 },
          {
            opacity: 1,
            y: 0,
            duration: 0.62,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      if (bottomRef.current) {
        gsap.fromTo(
          bottomRef.current,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.62,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bottomRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="relative overflow-hidden py-24 md:py-30">
      <div className="absolute inset-0 bg-[#060b14]" />

      <div
        className="absolute inset-0 opacity-100"
        style={{ background: "rgba(255,255,255,0.02)" }}
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{ background: "rgba(255,255,255,0.01)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="pricing-header mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="pricing-eyebrow mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-white/60">
              Pricing
            </span>
            <h2 className="pricing-main-title text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Plans
            </h2>
          </div>
          <p className="pricing-desc max-w-xs text-left text-base text-white/75 md:text-right md:text-lg">
            Choose a plan that&apos;s right for you.
            <br />
            Pause or cancel anytime.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan, index) => (
            <div
              key={plan.name}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative"
            >
              {plan.badge && (
                <div className="absolute -top-3 right-6 z-10">
                  <span className="inline-block rounded-full bg-[#a3e635] px-4 py-1 text-xs font-bold text-[#0E0F28]">
                    {plan.badge}
                  </span>
                </div>
              )}

              <article
                className={`relative flex h-full flex-col rounded-2xl p-8 transition-transform duration-300 group-hover:-translate-y-2 ${
                  plan.highlight ? "bg-white ring-2 ring-[#a3e635]" : "bg-white"
                }`}
              >
                <div className="mb-6">
                  <h3 className="mb-1 text-xl font-bold text-[#0E0F28]">{plan.name}</h3>
                  <p className="whitespace-pre-line text-sm text-gray-500">{plan.subtitle}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-[#0E0F28] lg:text-6xl">₹{plan.price}</span>
                    <span className="text-base font-medium text-gray-400">{plan.period}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-200" />
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-[#2b40f6]">
                        <CheckIcon />
                      </span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0E0F28] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1a1b3a]"
                >
                  Get Started
                  <ArrowRightIcon />
                </a>
              </article>
            </div>
          ))}
        </div>

        <div
          ref={bottomRef}
          className="relative flex flex-col gap-6 rounded-2xl bg-[#0E0F28] p-8 md:flex-row md:items-center md:justify-between md:p-10"
        >
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="text-[#a3e635]">
                <BuildingIcon />
              </span>
              <h3 className="text-xl font-bold text-white">Institutions</h3>
            </div>
            <p className="mb-4 text-sm text-white/60">For schools, universities & incubators.</p>
            <div className="flex flex-wrap items-center gap-3">
              {["Universities", "Incubators", "Accelerators"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 text-sm text-white/80">
                  <span className="h-2 w-2 rounded-full bg-[#a3e635]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center md:gap-8">
            <div className="text-right">
              <span className="text-4xl font-extrabold text-white md:text-5xl">Contact</span>
              <span className="ml-1 text-base font-medium text-white/50">for pricing</span>
            </div>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0E0F28] transition-all duration-300 hover:bg-gray-100"
            >
              Get Started
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}