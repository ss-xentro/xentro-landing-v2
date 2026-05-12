"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Be_Vietnam_Pro, Montserrat } from "next/font/google";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const bodyFont = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

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

const BUBBLES = [
  { size: 48, left: "12%", delay: "0s", duration: "10s", opacity: 0.26 },
  { size: 58, left: "26%", delay: "2.2s", duration: "13s", opacity: 0.24 },
  { size: 40, left: "38%", delay: "1.1s", duration: "12.5s", opacity: 0.21 },
  { size: 54, left: "54%", delay: "3.6s", duration: "14s", opacity: 0.25 },
  { size: 48, left: "68%", delay: "4.8s", duration: "11.8s", opacity: 0.22 },
  { size: 42, left: "82%", delay: "6.1s", duration: "10.8s", opacity: 0.20 },
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
  const [showPopup, setShowPopup] = useState(false);

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
      <div className="absolute inset-0 bg-[#1B17FF]" />

      {/* Animated bubbles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {BUBBLES.map((bubble, idx) => (
          <span
            key={idx}
            className="absolute rounded-full bg-white/25 xentro-bubble-rise"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              bottom: `-${bubble.size * 0.5}px`,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
              opacity: bubble.opacity,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-[0.24]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 120px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="pricing-header mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className={`pricing-eyebrow ${bodyFont.className} mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-white/65`}>
              Pricing
            </span>
            <h2 className={`pricing-main-title ${headingFont.className} text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl`}>
              Plans
            </h2>
          </div>
          <p className={`pricing-desc ${bodyFont.className} max-w-xs text-left text-base text-[#d7dcff] md:text-right md:text-lg`}>
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

              <article
                className={`relative flex h-full flex-col rounded-2xl p-8 transition-transform duration-300 group-hover:-translate-y-2 ${
                  plan.highlight ? "bg-[#f1f3f8]" : "bg-[#f1f3f8]"
                }`}
              >
                <div className="mb-6">
                  <h3 className={`${headingFont.className} mb-1 text-xl font-bold text-[#151b3e]`}>{plan.name}</h3>
                  <p className={`${bodyFont.className} whitespace-pre-line text-sm text-[#66708f]`}>{plan.subtitle}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`${headingFont.className} text-5xl font-extrabold text-[#0f1438] lg:text-6xl`}>₹{plan.price}</span>
                    <span className={`${bodyFont.className} text-base font-medium text-[#8a93ac]`}>{plan.period}</span>
                  </div>
                  <div className="mt-4 h-px bg-[#d7ddeb]" />
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-[#3448ff]">
                        <CheckIcon />
                      </span>
                      <span className={`${bodyFont.className} text-sm text-[#3f4663]`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowPopup(true)}
                  className={`${headingFont.className} inline-flex items-center justify-center gap-2 rounded-full bg-[#080c2f] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0e1446]`}
                >
                  Get Started
                  <ArrowRightIcon />
                </button>
              </article>
            </div>
          ))}
        </div>

        <div
          ref={bottomRef}
          className="relative flex flex-col gap-6 rounded-2xl bg-[#060a2f] p-8 md:flex-row md:items-center md:justify-between md:p-10"
        >
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="text-[#a8eb3b]">
                <BuildingIcon />
              </span>
              <h3 className={`${headingFont.className} text-xl font-bold text-white`}>Institutions</h3>
            </div>
            <p className={`${bodyFont.className} mb-4 text-sm text-white/65`}>For schools, universities & incubators.</p>
            <div className="flex flex-wrap items-center gap-3">
              {["Universities", "Incubators", "Accelerators"].map((tag) => (
                <span key={tag} className={`${bodyFont.className} inline-flex items-center gap-1.5 text-sm text-white/82`}>
                  <span className="h-2 w-2 rounded-full bg-[#a8eb3b]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center md:gap-8">
            <div className="text-right">
              <span className={`${headingFont.className} text-4xl font-extrabold text-white md:text-5xl`}>Contact</span>
              <span className={`${bodyFont.className} ml-1 text-base font-medium text-white/58`}>for pricing</span>
            </div>
            <button
              onClick={() => setShowPopup(true)}
              className={`${headingFont.className} inline-flex items-center gap-2 rounded-full bg-[#f7f8fb] px-6 py-3 text-sm font-semibold text-[#0a0d30] transition-all duration-300 hover:bg-white`}
            >
              Get Started
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Coming Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative rounded-2xl bg-white p-8 shadow-2xl md:p-12">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <h2 className={`${headingFont.className} mb-4 text-3xl font-bold text-[#0f1438] md:text-4xl`}>
                Coming Soon
              </h2>
              <p className={`${bodyFont.className} mb-8 text-base text-[#66708f] md:text-lg`}>
                We&apos;re working hard to bring you the best experience. Stay tuned!
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className={`${headingFont.className} rounded-full bg-[#080c2f] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0e1446]`}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}