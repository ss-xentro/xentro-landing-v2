"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "How does XENTRO work?",
    answer:
      "XENTRO connects founders, mentors, and investors in one platform. You can build your startup profile, get mentor feedback, and join events and cohorts without switching tools.",
  },
  {
    question: "Is there any additional fee?",
    answer:
      "No hidden charges. You only pay for the selected plan, and you can pause or cancel anytime from your account.",
  },
  {
    question: "How can I get the app?",
    answer:
      "You can get started directly from the web platform today. Mobile app access is rolled out in phases after account onboarding.",
  },
  {
    question: "What features are included?",
    answer:
      "Core features include learning paths, mentor connect, startup showcase, events, and progress tools tailored for your role.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className="w-full bg-[#060b14] px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[1.8rem] bg-[#eef1f5] px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <h2 className="text-[2.15rem] font-bold leading-[1.06] tracking-[-0.02em] text-[#101420] sm:text-[2.8rem]">
              Any questions?
              <br />
              We got you.
            </h2>

            <p className="mt-8 max-w-md text-[1rem] leading-[1.8] text-[#30374a]/85 sm:text-[1.06rem]">
              Find quick answers about pricing, access, and platform features. If you need anything else, our team is happy to help.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[#4a4bd0] transition-colors hover:text-[#3234b4]"
            >
              More FAQs
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div>
            {faqItems.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <article key={item.question} className="border-b border-[#a8afbc]">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  >
                    <span className="text-[1.16rem] font-semibold tracking-[-0.01em] text-[#151a28]">
                      {item.question}
                    </span>
                    <span className="relative h-6 w-6 text-[1.25rem] font-semibold text-[#2a3142]" aria-hidden="true">
                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                          isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                        }`}
                      >
                        +
                      </span>
                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                          isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                        }`}
                      >
                        -
                      </span>
                    </span>
                  </button>

                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity,transform] duration-400 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 translate-y-0" : "grid-rows-[0fr] opacity-0 -translate-y-1"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-8 text-[1rem] leading-[1.75] text-[#31384b]/90">{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
