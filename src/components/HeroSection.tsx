import Image from "next/image";

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
  return (
    <>
      {/* ═══════ WHITE TOP HERO SECTION ═══════ */}
      <div className="bg-white text-[#0b192c] pt-8 pb-14 md:pb-16 relative overflow-hidden">

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
        <div className="absolute bottom-0 inset-x-0 h-[250px] bg-[#0b192c] rounded-t-3xl" />

        {/* Video — sits on top of the dark strip (z-10 > strip) */}
        <div className="max-w-[1100px] mx-auto px-2 md:px-8 pt-3 md:pt-4 pb-0 relative z-10">
          <div className="w-full aspect-video rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(11,25,44,0.35)] bg-[#0a1523] border-[6px] border-[#0b192c]/40">
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
