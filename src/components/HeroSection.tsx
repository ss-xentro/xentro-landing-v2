"use client";

import { useRef, useState, useEffect } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Problem", href: "#problem" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const metrics = [
  { value: "120 +", label: "Startups" },
  { value: "45 +", label: "Investors" },
  { value: "80 +", label: "Mentors" },
];

const heroHeadlineLines = [
  [
    { text: "Your" },
    { text: "Idea" },
  ],
  [
    { text: "Deserves" },
    { text: "A" },
    { text: "Real", emphasized: true },
  ],
  [
    { text: "Shot" },
  ],
];

export default function HeroSection() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollUpStartY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY <= 100) {
          // Always show at the top
          setIsNavVisible(true);
          scrollUpStartY.current = currentScrollY;
        } else if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setIsNavVisible(false);
          scrollUpStartY.current = currentScrollY;
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up
          // Require ~20 lines (300px) of upward scroll before showing
          if (scrollUpStartY.current - currentScrollY > 300) {
            setIsNavVisible(true);
          }
        }
        
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      {/* ═══════ WHITE TOP HERO SECTION ═══════ */}
      <div id="top" className="bg-white text-[#0b192c] pt-4 md:pt-6 pb-14 md:pb-16 relative overflow-hidden">

        {/* ── Navbar ── */}
        <nav className={`fixed top-0 inset-x-0 z-50 flex items-center px-5 py-2 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:px-8 lg:px-10 bg-white/95 backdrop-blur-sm border-b border-black/5 transition-transform duration-300 ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}>
          {/* Logo — left column */}
          <div className="flex shrink-0 items-center gap-3 md:col-start-1 md:justify-self-start">
            <Image
              src="/xentro-logo-no%20bg%20black%20text.svg"
              alt="XENTRO"
              width={420}
              height={168}
              priority
              className="h-10 w-auto sm:h-12 lg:h-14"
            />
          </div>

          {/* Nav Links — centered */}
          <div className="hidden items-center justify-center gap-8 text-[15px] font-extrabold md:col-start-2 md:flex md:justify-self-center lg:gap-10">
            {navItems.map((item) => (
              <div key={item.label} className="group flex flex-col items-center">
                <a
                  href={item.href}
                  className={`transition-colors hover:text-[#0b192c] pb-1 font-extrabold ${item.href === "#top" ? "text-[#0b192c]" : "text-[#0b192c]/60"}`}
                >
                  {item.label}
                </a>
                <div
                  className={`w-5 h-[3px] bg-[#1B17FF] rounded-full -mt-0.5 transition-transform duration-200 origin-left ${item.href === "#top" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                ></div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <div className="hidden items-center justify-end text-[13px] font-extrabold md:col-start-3 md:flex md:justify-self-end">
            <a
              href="https://app.xentro.in/join"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#1B17FF] px-4 py-2 text-[12px] text-white transition-colors hover:bg-[#1B17FF]/85"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#0b192c]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`absolute top-full left-0 w-full bg-white border-b border-black/5 flex flex-col items-center py-6 gap-5 shadow-lg transition-all duration-300 md:hidden origin-top ${isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors hover:text-[#0b192c] text-[16px] font-bold ${item.href === "#top" ? "text-[#0b192c] font-extrabold" : "text-[#0b192c]/60"}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://app.xentro.in/join"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#1B17FF] text-white px-7 py-2.5 hover:bg-[#1B17FF]/85 transition-colors rounded-lg text-[14px] font-extrabold mt-2 w-[80%] text-center"
            >
              Join Now
            </a>
          </div>
        </nav>

        {/* ── Hero Content — two columns side by side ── */}
        <div className="pt-32 md:pt-40 grid grid-cols-1 md:grid-cols-[1.3fr_0.85fr] gap-8 max-w-[1100px] mx-auto px-6 md:px-12 lg:px-10 relative z-10">
          {/* Left Hero — Main headline */}
          <div>
            <h1 className="text-[3.2rem] sm:text-[4.2rem] lg:text-[4.8rem] font-bold leading-[1.08] tracking-[-0.02em] mb-4">
              {heroHeadlineLines.map((line, lineIndex) => (
                <span key={`line-${lineIndex}`} className="block">
                  {line.map((word, wordIndex) => (
                    <span
                      key={`${word.text}-${wordIndex}`}
                      className={`xentro-word-dissolve ${wordIndex < line.length - 1 ? "mr-[0.32em]" : ""} ${word.emphasized ? "text-[#071829]" : ""}`}
                      style={{ animationDelay: `${lineIndex * 260 + wordIndex * 115}ms` }}
                    >
                      {word.text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
          </div>

          {/* Right Hero — Description + metrics */}
          <div className="md:pl-10 md:border-l border-[#0b192c]/15 flex flex-col justify-between py-2">
            <p className="text-[#0b192c]/65 text-[16px] lg:text-[17px] leading-relaxed mb-6 max-w-[360px]">
              XENTRO is India&apos;s digital entrepreneurship ecosystem built for students, founders, mentors, and investors.
            </p>
            <div>
              <p className="text-[11px] lg:text-[12px] text-[#0b192c]/40 font-semibold uppercase tracking-[0.15em] mb-3">Daily Active Users</p>
              <div className="flex items-start gap-7">
                {metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="text-2xl lg:text-[1.75rem] font-bold mb-1 text-[#0b192c]">{metric.value}</div>
                    <div className="text-[11px] lg:text-xs text-[#0b192c]/50 leading-relaxed font-medium uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ VIDEO TRANSITION ZONE ═══════ */}
      {/* bg-white wrapper so the top of the zone is still white */}
      <div className="bg-white relative">
        {/*
          ↓ DARK STRIP — adjust h-[Xpx] to control how much dark is visible.
            This is independent of padding and video height.
        */}
        <div className="absolute bottom-0 inset-x-0 h-[250px] bg-[#1B17FF] rounded-t-3xl" />

        {/* Video — sits on top of the dark strip (z-10 > strip) */}
        <div className="max-w-[1100px] mx-auto px-2 md:px-8 pt-3 md:pt-4 pb-0 relative z-10">
          <div className="w-full aspect-video overflow-hidden rounded-[28px] bg-transparent">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/SgmuplXU2iY?autoplay=1&mute=1&loop=1&playlist=SgmuplXU2iY&controls=0&rel=0&modestbranding=1&playsinline=1"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
