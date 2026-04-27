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
    size: 170,
    top: "2%",
    left: "60%",
    delay: "-0.8s",
    duration: "8.2s",
    highlight: true,
  },
  {
    stat: "1.5K+",
    label: "Incubators",
    size: 142,
    top: "8%",
    left: "10%",
    delay: "-2.2s",
    duration: "9.1s",
  },
  {
    stat: "100+",
    label: "Unicorns",
    size: 160,
    top: "30%",
    left: "70%",
    delay: "-1.2s",
    duration: "8.7s",
  },
  {
    stat: "2K+",
    label: "Investors",
    size: 148,
    top: "45%",
    left: "8%",
    delay: "-3.1s",
    duration: "10s",
  },
  {
    stat: "600+",
    label: "Cities",
    size: 152,
    top: "63%",
    left: "68%",
    delay: "-1.7s",
    duration: "9.3s",
  },
  {
    stat: "₹30B+",
    label: "Funding",
    size: 146,
    top: "71%",
    left: "36%",
    delay: "-2.7s",
    duration: "8.9s",
  },
];

export default function ProblemStatementSection() {
  return (
    <section className="xentro-section-rise relative w-full overflow-hidden bg-[#060b14] py-24 md:py-32">
      <div className="w-full border-y border-white/10 bg-[#060b14]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "rgba(255,255,255,0.02)" }}
        />
        <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-6 py-18 sm:px-10 md:py-22 lg:grid-cols-[1.02fr_0.98fr] lg:px-16">
          <div className="max-w-[62ch]">
            <p className={`${headingFont.className} mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-white/55`}>
              Why XENTRO
            </p>

            <h2 className={`${headingFont.className} mb-7 text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.85rem] lg:text-[3.45rem]`}>
              "The system wasn't built for you."
            </h2>

            <p className={`${bodyFont.className} text-[1.12rem] leading-[1.86] text-white/72 sm:text-[1.24rem]`}>
              Most Indian students with startup ideas hit the same wall — no roadmap, no mentor, no platform that speaks to where they actually are. Not an IIT. Not in Bangalore. Just someone with an idea and nowhere concrete to go.
            </p>

            <p className={`${bodyFont.className} mt-6 text-[1.06rem] leading-[1.82] text-white/58 sm:text-[1.14rem]`}>
              Incubators want traction. Accelerators want revenue. The internet gives you a hundred frameworks but zero direction. Xentro was built to fix exactly that.
            </p>
          </div>

          <div className="relative mx-auto h-[390px] w-full max-w-[590px] sm:h-[470px] lg:h-[560px]">

            {bubbles.map((bubble, index) => (
              <div
                key={`bubble-${index}`}
                className="xentro-bubble-float absolute flex items-center justify-center rounded-full border border-white/90 bg-white text-[#0b192c] shadow-[0_18px_42px_rgba(0,0,0,0.32)]"
                style={{
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  top: bubble.top,
                  left: bubble.left,
                  animationDelay: bubble.delay,
                  animationDuration: bubble.duration,
                }}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <span className={`${headingFont.className} text-[1.4rem] font-extrabold leading-tight sm:text-[1.56rem]`}>
                    {bubble.stat}
                  </span>
                  <span className={`${bodyFont.className} mt-1 text-[0.72rem] font-bold uppercase tracking-[0.14em] opacity-90 sm:text-[0.8rem]`}>
                    {bubble.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}