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
    size: 132,
    top: "8%",
    left: "56%",
    delay: "-0.8s",
    duration: "8.2s",
    highlight: true,
  },
  {
    stat: "1.5K+",
    label: "Incubators",
    size: 108,
    top: "20%",
    left: "16%",
    delay: "-2.2s",
    duration: "9.1s",
  },
  {
    stat: "100+",
    label: "Unicorns",
    size: 122,
    top: "34%",
    left: "70%",
    delay: "-1.2s",
    duration: "8.7s",
  },
  {
    stat: "2K+",
    label: "Investors",
    size: 114,
    top: "50%",
    left: "24%",
    delay: "-3.1s",
    duration: "10s",
  },
  {
    stat: "600+",
    label: "Cities",
    size: 118,
    top: "64%",
    left: "74%",
    delay: "-1.7s",
    duration: "9.3s",
  },
  {
    stat: "₹30B+",
    label: "Funding",
    size: 110,
    top: "78%",
    left: "44%",
    delay: "-2.7s",
    duration: "8.9s",
  },
];

export default function ProblemStatementSection() {
  return (
    <section className="xentro-section-rise relative w-full overflow-hidden bg-[#060b14] py-20 md:py-24">
      <div className="w-full border-y border-white/10 bg-[#060b14]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 18%, rgba(92,123,252,0.18), rgba(92,123,252,0) 34%), radial-gradient(circle at 84% 18%, rgba(110,215,255,0.16), rgba(110,215,255,0) 30%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0) 42%)",
          }}
        />
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 py-14 sm:px-10 md:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-16">
          <div className="max-w-[62ch]">
            <p className={`${headingFont.className} mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-white/55`}>
              Why XENTRO
            </p>

            <h2 className={`${headingFont.className} mb-6 text-[2.05rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.55rem] lg:text-[3.1rem]`}>
              "The system wasn't built for you."
            </h2>

            <p className={`${bodyFont.className} text-[1.04rem] leading-[1.85] text-white/72 sm:text-[1.15rem]`}>
              Most Indian students with startup ideas hit the same wall — no roadmap, no mentor, no platform that speaks to where they actually are. Not an IIT. Not in Bangalore. Just someone with an idea and nowhere concrete to go.
            </p>

            <p className={`${bodyFont.className} mt-5 text-[0.98rem] leading-[1.8] text-white/58 sm:text-[1.05rem]`}>
              Incubators want traction. Accelerators want revenue. The internet gives you a hundred frameworks but zero direction. Xentro was built to fix exactly that.
            </p>
          </div>

          <div className="relative mx-auto h-[320px] w-full max-w-[500px] sm:h-[380px] lg:h-[430px]">
            <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(92,123,252,0.24)_0%,rgba(110,215,255,0.12)_46%,rgba(43,64,246,0)_74%)]" />

            {bubbles.map((bubble, index) => (
              <div
                key={`bubble-${index}`}
                className={`xentro-bubble-float absolute flex items-center justify-center rounded-full border shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-sm ${
                  bubble.highlight
                    ? "border-[#7ed7ff]/35 bg-[#0f1728]/92 text-[#7ed7ff]"
                    : "border-white/12 bg-white/6 text-white/78"
                }`}
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
                  <span className={`${headingFont.className} text-[1.1rem] font-bold leading-tight sm:text-[1.2rem]`}>
                    {bubble.stat}
                  </span>
                  <span className="mt-0.5 text-[0.55rem] font-semibold uppercase tracking-wider opacity-70 sm:text-[0.6rem]">
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