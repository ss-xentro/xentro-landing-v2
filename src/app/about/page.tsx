import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JoinButtonWithPopup } from "@/components/JoinButtonWithPopup";

export const metadata: Metadata = {
  title: "About Xentro – India's Connected Startup Ecosystem",
  description:
    "Learn how Xentro is building India's most connected and inclusive entrepreneurial ecosystem to remove barriers between startups, mentors, investors, and opportunities.",
};

const sections = [
  {
    id: "introduction",
    heading: "The Problem",
    content: (
      <div className="space-y-4">
        <p>
          India's startup ecosystem is growing at historic speed. In 2025–26 alone, more than 55,200 startups were officially recognized, taking the national total to over 2.23 lakh startups. Together, these ventures have created 23.36 lakh+ direct jobs.
        </p>
        <p>
          On paper, the ecosystem looks larger than ever. But scale has not automatically created connection.
        </p>
        <p className="font-semibold text-[#0b192c]">India does not have a shortage of ideas, ambition, or builders. What it still lacks is something more fundamental: the ability for the right people to find each other at the right time.</p>
        <ul className="space-y-2 list-none">
          {[
            "A founder with a strong idea often spends months trying to reach the right mentor.",
            "A mentor willing to guide founders rarely discovers startups that truly fit their expertise.",
            "An investor searching for promising early-stage opportunities still depends heavily on limited circles, warm introductions, and fragmented networks.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1B17FF]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "paradox",
    heading: "The Paradox",
    content: (
      <div className="space-y-4">
        <p>
          The result is a paradox. India has built startup density — but not enough startup discoverability.
        </p>
        <p>
          Today, over 2.23 lakh startups exist across the country, yet for many early-stage founders, access still remains uneven.
        </p>
        <ul className="space-y-2 list-none">
          {[
            "The right mentor is often invisible.",
            "The right investor is often inaccessible.",
            "The right incubator or strategic collaborator is often outside their immediate network.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1B17FF]" />
              {item}
            </li>
          ))}
        </ul>
        <p className="pt-2">
          At the same time, the funding environment has become more selective. Angel investment activity fell by 44% in 2025, making early-stage capital increasingly relationship-driven rather than purely opportunity-driven.
        </p>
        <p>
          Geography deepens the gap. While a few major startup hubs continue to attract visibility, countless founders from emerging cities, campuses, and regional ecosystems remain under-networked, under-discovered, and underrepresented.
        </p>
      </div>
    ),
  },
  {
    id: "solution",
    heading: "Our Solution",
    content: (
      <div className="space-y-4">
        <p>
          Xentro is a digital ecosystem platform designed to solve the connectivity and inclusion gap in India's startup ecosystem.
        </p>
        <p>
          We are building a system where startups, mentors, investors, institutions, and ecosystem partners do not operate in isolated silos — but in one connected environment where discovery becomes easier, access becomes fairer, and opportunities become more meaningful.
        </p>
        <p className="font-semibold text-[#0b192c]">
          Because the next great startup opportunity in India may not fail because of lack of talent. It may fail simply because the right connection never happened.
        </p>
      </div>
    ),
  },
  {
    id: "vision",
    heading: "Our Vision",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-[#0b192c]">
          To build India's most connected and inclusive entrepreneurial ecosystem — where access to opportunity is not limited by geography, network, or privilege.
        </p>
        <p>
          Xentro envisions a future where every founder with ambition can access the right people, resources, and opportunities needed to build meaningful ventures.
        </p>
      </div>
    ),
  },
  {
    id: "mission",
    heading: "Our Mission",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-[#0b192c]">
          To remove friction from the startup journey by building a digital ecosystem that connects:
        </p>
        <ul className="space-y-2 list-none">
          {[
            "startups with opportunity",
            "mentors with meaningful impact",
            "investors with quality deal flow",
            "institutions with entrepreneurial outcomes",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1B17FF]" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          Our mission is to help entrepreneurs move faster from potential to execution by making the ecosystem more discoverable, collaborative, and accessible.
        </p>
      </div>
    ),
  },
  {
    id: "how-we-solve",
    heading: "How Xentro Solves This",
    content: (
      <div className="space-y-4">
        <p>
          Xentro is a digital ecosystem platform built to solve the connectivity and inclusion gap in India's startup ecosystem.
        </p>
        <p>
          Instead of founders, mentors, investors, and institutions operating in separate circles, Xentro brings them into one connected network — where discovery is relevant, access is easier, and collaboration happens with intent.
        </p>
      </div>
    ),
  },
  {
    id: "what-enables",
    heading: "What Xentro Enables",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-[#0b192c] mb-2">For startups</p>
          <p>
            Greater visibility beyond immediate networks, with faster access to mentors, investors, institutions, and ecosystem opportunities.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#0b192c] mb-2">For mentors</p>
          <p>
            Meaningful access to startups that align with their expertise, industry, and stage.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#0b192c] mb-2">For investors</p>
          <p>
            Smarter discovery of relevant early-stage ventures and stronger long-term deal flow visibility.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#0b192c] mb-2">For institutions and ecosystem partners</p>
          <p>
            A more structured way to engage founders, support innovation, and strengthen entrepreneurial outcomes.
          </p>
        </div>
        <p className="pt-2 font-semibold text-[#0b192c]">
          At its core, Xentro exists to make the right startup connections happen faster, smarter, and more inclusively.
        </p>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-white text-[#0b192c]"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-black/5 bg-white/95 px-6 py-2.5 backdrop-blur-sm md:px-10">
        <Link href="/">
          <Image
            src="/xentro-logo-no%20bg%20black%20text.svg"
            alt="XENTRO"
            width={420}
            height={168}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>
        <JoinButtonWithPopup />
      </nav>

      {/* ── Hero ── */}
      <div className="border-b border-black/6 bg-[#f7f8fc] px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Company chip */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1B17FF]/20 bg-[#1B17FF]/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1B17FF]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1B17FF]">
              Company
            </span>
          </div>

          <h1
            className="text-[3.8rem] font-bold leading-[1.05] tracking-[-0.03em] text-[#0b192c] sm:text-[4.6rem] md:text-[5.4rem]"
            style={{ fontFamily: "var(--font-red-hat-display)" }}
          >
            About Xentro
          </h1>

          <p className="mt-4 text-[1.1rem] font-semibold uppercase tracking-[0.1em] text-[#0b192c]/45">
            Mission · Vision · Ecosystem
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#0b192c]/55">
            <span>
              Building{" "}
              <span className="font-medium text-[#0b192c]/80">
                India's Connected Startup Ecosystem
              </span>
            </span>
            <span className="opacity-40">·</span>
            <span className="font-medium text-[#0b192c]/80">
              Xentro Ventures Private Limited
            </span>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <main className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
        <div className="divide-y divide-black/6">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[240px_1fr] md:gap-16 md:py-12"
            >
              {/* Left — heading */}
              <div className="md:pt-0.5">
                <h2
                  className="text-[2rem] font-bold leading-snug text-[#0b192c] md:text-[1.6rem]"
                  style={{ fontFamily: "var(--font-red-hat-display)" }}
                >
                  {section.heading}
                </h2>
              </div>

              {/* Right — content */}
              <div className="text-[1.15rem] leading-[1.75] text-[#0b192c]/70">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-black/6 bg-[#f7f8fc] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p
                className="text-[1.05rem] font-bold tracking-tight text-[#0b192c]"
                style={{ fontFamily: "var(--font-red-hat-display)" }}
              >
                Building India's First Digital
                <br />
                Entrepreneurial Ecosystem for Students
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-[#0b192c]/60">
              <p className="font-semibold uppercase tracking-[0.08em] text-[#0b192c]/35 text-xs mb-1">
                Connect
              </p>
              <a
                href="mailto:contact@xentro.in"
                className="hover:text-[#1B17FF] transition-colors"
              >
                contact@xentro.in
              </a>
              <a
                href="tel:+917993504337"
                className="hover:text-[#1B17FF] transition-colors"
              >
                +91 79935 04337
              </a>
              <div className="mt-2 flex gap-4">
                <Link
                  href="/about"
                  className="hover:text-[#1B17FF] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-[#1B17FF] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-[#1B17FF] transition-colors"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
