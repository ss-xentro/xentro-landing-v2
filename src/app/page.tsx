import Image from "next/image";
import CTASection from "@/components/CTASection";
import FeatureRibbon from "@/components/FeatureRibbon";
import FounderNoteSection from "@/components/FounderNoteSection";
import FeaturesShowcaseSection from "@/components/FeaturesShowcaseSection";
import PricingSection from "@/components/PricingSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";

export default function Home() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Problem", href: "#problem" },
    { label: "Features", href: "#features" },
    { label: "Team", href: "#team" },
    { label: "Pricing", href: "#pricing" },
  ];

  const metrics = [
    { value: "120 +", label: "Startups" },
    { value: "45 +", label: "Investors" },
    { value: "80 +", label: "Mentors" },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* ═══════ WHITE TOP HERO SECTION ═══════ */}
      <div className="bg-white text-[#0b192c] pt-8 pb-[40px] relative overflow-hidden">
        {/* Subtle decorative gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7ed7ff]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0b192c]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        {/* ── Navbar ── */}
        <nav className="relative z-10 mb-10 md:mb-14 flex items-center justify-between pl-6 pr-6 md:pl-8 md:pr-12 lg:pl-10 lg:pr-24">
          {/* Logo — pushed further left */}
          <div className="flex w-45 items-center gap-3 -ml-1">
            <Image
              src="/logo-nobgcopy.webp"
              alt="XENTRO"
              width={180}
              height={72}
              priority
              className="h-12 w-auto"
            />
          </div>

          {/* Nav Links — centered */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[15px] md:flex lg:gap-10">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <a
                  href={item.href}
                  className={`transition-colors hover:text-[#0b192c] pb-1 ${item.label === "Home" ? "text-[#0b192c] font-semibold" : "text-[#0b192c]/60"}`}
                >
                  {item.label}
                </a>
                {item.label === "Home" && (
                  <div className="w-5 h-[3px] bg-[#7ed7ff] rounded-full -mt-0.5"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Button */}
          <div className="hidden w-45 items-center justify-end text-[13px] font-semibold sm:flex">
              <a href="#pricing" className="bg-[#071829] text-white px-6 py-2.5 hover:bg-[#0d2744] transition-colors rounded-lg">
              Get Started
            </a>
          </div>
        </nav>

        {/* ── Hero Content — two columns side by side ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.85fr] gap-8 max-w-[1100px] mx-auto px-6 md:px-12 lg:px-10 relative z-10">
          {/* Left Hero — Main headline */}
          <div>
            <h1 className="text-[3.2rem] sm:text-[4.2rem] lg:text-[4.8rem] font-bold leading-[1.08] tracking-[-0.02em] mb-4">
              Your Idea
              <br />
              Deserves A{" "}
                <span className="text-[#071829]">Real</span>
              <br />
              Shot
            </h1>
            <div className="flex items-center gap-4 lg:gap-6 mt-6">
              <div className="flex flex-col border-r border-[#0b192c]/20 pr-4 lg:pr-6 h-full py-1">
                <span className="text-[11px] text-[#0b192c]/50 font-medium">Establish</span>
                <span className="text-xl lg:text-2xl font-bold mt-1">2026</span>
              </div>
              <h2 className="whitespace-nowrap text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] font-semibold leading-none tracking-[-0.02em]">
                Digital Ecosystem
              </h2>
            </div>
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

      {/* ═══════ VIDEO — 50/50 split across white & dark blue ═══════ */}
      <div className="relative z-20" style={{ background: 'linear-gradient(to bottom, white 50%, #0b192c 50%)' }}>
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-6">
          <div className="w-full aspect-[21/9] rounded-[24px] overflow-hidden shadow-[0_16px_50px_rgba(11,25,44,0.3)] bg-[#0a1523]">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/SgmuplXU2iY?si=iXZIy2kpSYMcTnS7&autoplay=0"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Dark blue continues */}
      <div className="bg-[#0b192c]"></div>

      {/* Feature Ribbon */}
      <FeatureRibbon />

      {/* Problem Statement Section */}
      <ProblemStatementSection />

      {/* Features Showcase Section */}
      <FeaturesShowcaseSection />

      {/* Founder Note Section */}
      <FounderNoteSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <CTASection />

      <footer className="border-t border-white/10 bg-[#060b14] px-6 py-8 text-sm text-white/60 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-white">XENTRO</p>
          <p>Building India&apos;s digital entrepreneurship ecosystem.</p>
          <p>© 2026 XENTRO</p>
        </div>
      </footer>
    </div>
  );
}
