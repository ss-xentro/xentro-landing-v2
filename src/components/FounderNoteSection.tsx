"use client";

import { useEffect, useRef, useState } from "react";

const founderParagraphOne =
  "XENTRO was built to remove the friction that slows early builders down. Students, founders, mentors, investors, and institutions should not have to jump between scattered tools to discover opportunities, get feedback, and show progress.";

const founderParagraphTwo =
  "Our goal is simple: create one focused ecosystem where every stage of the journey feels supported, intentional, and easier to act on. That means guided learning, cleaner mentor access, stronger startup visibility, and a platform that makes momentum visible.";

type DissolveWordsProps = {
  text: string;
  startDelay: number;
  className: string;
};

function DissolveWords({ text, startDelay, className }: DissolveWordsProps) {
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          className={`xentro-word-dissolve ${wordIndex < words.length - 1 ? "mr-[0.32em]" : ""}`}
          style={{ animationDelay: `${startDelay + wordIndex * 48}ms` }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default function FounderNoteSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [copyRevealed, setCopyRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting) return;

        setCopyRevealed(true);
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

  return (
    <section id="founder" ref={sectionRef} className="w-full bg-[#4f678a] py-24 md:py-32">
      <div className="mx-auto max-w-300 px-6 sm:px-8 lg:px-10">
        <div className="relative mx-auto h-140 max-w-275">
          <div className="absolute left-0 top-1/2 z-10 w-85 -translate-y-1/2 sm:w-95 lg:w-107.5">
            <div className="relative h-117.5 overflow-hidden rounded-[999px] bg-[#20314d] shadow-[0_24px_60px_rgba(18,28,44,0.28)] sm:h-135 lg:h-145">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80')",
                  backgroundPosition: "center top",
                }}
              />
              <div className="absolute inset-0 bg-linear-to-b from-[#4f1e0c]/28 via-transparent to-[#08111f]/22" />
            </div>
          </div>

          <div className="absolute right-0 top-1/2 w-[calc(100%-220px)] -translate-y-1/2 rounded-[2.5rem] bg-[#ececec] shadow-[0_34px_90px_rgba(8,18,36,0.22)] sm:w-[calc(100%-260px)] lg:w-[calc(100%-300px)]">
            <div className="py-8 pl-42.5 pr-8 sm:py-10 sm:pl-52.5 sm:pr-12 lg:py-12 lg:pl-60 lg:pr-14">
              <div className="max-w-135 text-[#27344d]">
                <div className="text-[2.4rem] leading-none text-[#2f3d59]" aria-hidden="true">
                  "
                </div>

                {copyRevealed && (
                  <DissolveWords
                    text={founderParagraphOne}
                    startDelay={40}
                    className="mt-3 text-[1.02rem] leading-[1.52] text-[#27344d] sm:text-[1.1rem] lg:text-[1.15rem]"
                  />
                )}

                {copyRevealed && (
                  <DissolveWords
                    text={founderParagraphTwo}
                    startDelay={920}
                    className="mt-5 text-[1.02rem] leading-[1.52] text-[#42526b] sm:text-[1.1rem] lg:text-[1.15rem]"
                  />
                )}

                <div className="mt-3 text-right text-[2.4rem] leading-none text-[#2f3d59]" aria-hidden="true">
                  "
                </div>

                <div className="mt-8">
                  <p className="text-[0.98rem] font-extrabold uppercase tracking-[0.14em] text-[#27344d]">
                    Founder Note
                  </p>
                  <p className="mt-1 text-[0.92rem] italic text-[#64728a]">XENTRO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}