import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JoinButtonWithPopup } from "@/components/JoinButtonWithPopup";

export const metadata: Metadata = {
  title: "Privacy Policy – Xentro Ventures",
  description:
    "Read how Xentro Ventures Private Limited collects, uses, and protects your personal data in accordance with Indian privacy law.",
};

const sections = [
  {
    id: "about",
    heading: "About Us",
    content: (
      <div className="space-y-4">
        <p>
          Xentro Ventures Private Limited is an innovation-driven platform that
          connects startups, mentors, investors, and institutions to foster a
          structured and collaborative entrepreneurial ecosystem.
        </p>
        <p>
          Our platform is purpose-built to accelerate startup growth by enabling
          founders to build validated profiles, connect with the right mentors and
          investors, discover relevant programs, and track their journey through
          structured milestones and feedback loops.
        </p>
      </div>
    ),
  },
  {
    id: "introduction",
    heading: "Introduction",
    content: (
      <p>
        This Privacy Policy explains how Xentro Ventures Private Limited
        collects, uses, shares, and safeguards information about you when you
        use our websites, applications, and extensions. This Privacy Policy is
        not a contract and does not create legal rights beyond those required by
        law; your use of the Services is governed by our Terms of Service.
      </p>
    ),
  },
  {
    id: "scope",
    heading: "Scope",
    content: (
      <div className="space-y-4">
        <p>
          This Privacy Policy applies to information processed by Xentro in
          connection with all platform users — including founders, startup teams,
          mentors, institutional partners, investors, website visitors, and
          prospective users.
        </p>
        <p>
          This Policy covers data collected directly by Xentro through its
          platform, services, and related interactions. It does not apply to
          information processed by Xentro solely as a data processor under
          separate client agreements, or to third-party websites not owned or
          controlled by Xentro.
        </p>
      </div>
    ),
  },
  {
    id: "mentors",
    heading: "Data We Collect from Mentors",
    content: (
      <div className="space-y-3">
        <p className="font-semibold text-[#0b192c]">Purpose of Collection</p>
        <ul className="space-y-2 list-none">
          {[
            "To create and manage mentor profiles, enable startups to identify suitable mentors, and facilitate informed engagement.",
            "To verify IIC association, ensure credibility, and enable participation in institution-linked mentoring programs.",
            "To assess technical expertise and match mentors with relevant startup requirements.",
            "To process payments, honoraria, or payouts, generate invoices, and comply with financial regulations.",
            "To provide secure access, authenticate users, and prevent unauthorized access or misuse.",
            "To facilitate interaction between mentors and startups and maintain records for service improvement.",
            "To schedule mentoring sessions and match mentors with startups based on availability and expertise.",
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
    id: "startups",
    heading: "Data We Collect from Start-ups",
    content: (
      <div className="space-y-3">
        <p className="font-semibold text-[#0b192c]">Purpose of Collection</p>
        <ul className="space-y-2 list-none">
          {[
            "To create and manage start-up profiles enabling visibility to mentors, investors, and institutions.",
            "To evaluate credibility, validate founder identity, and build trust within the platform ecosystem.",
            "To match start-ups with suitable mentors, investors, and opportunities.",
            "To connect start-ups with investors by analysing funding needs, traction, and business potential.",
            "To facilitate participation in incubation, acceleration, and institutional programs.",
            "To analyse performance, track growth metrics, and generate insights to improve recommendations.",
            "To process payments, manage subscriptions, generate invoices, and ensure regulatory compliance.",
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
    id: "institutions",
    heading: "Data We Collect from Institutions",
    content: (
      <div className="space-y-3">
        <p className="font-semibold text-[#0b192c]">Purpose of Collection</p>
        <ul className="space-y-2 list-none">
          {[
            "To verify authenticity, create and manage institutional profiles, and ensure accountability.",
            "To publish program details and streamline application review and selection processes.",
            "To track participation, manage startup journeys, and evaluate program effectiveness.",
            "To enable seamless interaction between institutions, startups, mentors, and support.",
            "To securely authenticate institutional users and prevent unauthorised access.",
            "To process payments, generate invoices, and ensure compliance with legal requirements.",
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
    id: "sharing",
    heading: "Sharing Your Information",
    content: (
      <div className="space-y-4">
        <p>
          Xentro does not sell, rent, or trade your personal or startup data. We
          process and share such data only on the basis of your consent, for
          legitimate uses as permitted under applicable law, or to comply with
          legal obligations.
        </p>
        <ul className="space-y-2 list-none">
          {[
            "Mentors: Relevant founder and startup data may be shared with opted mentors to enable effective mentoring, based on your consent.",
            "Institutions & Program Partners: Startup profiles and application data may be shared with institutions where you apply or participate.",
            "Service Providers: Data may be processed by trusted third-party vendors under appropriate contractual safeguards.",
            "Government & Regulatory Authorities: Data may be disclosed where required under applicable law or regulatory obligations.",
            "Legal & Safety Requirements: We may disclose data if required by a court order or to protect the rights and safety of Xentro or its users.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1B17FF]" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          All processing and sharing is carried out in accordance with the
          Digital Personal Data Protection Act, 2023.
        </p>
      </div>
    ),
  },
  {
    id: "ai",
    heading: "AI Usage & Automated Decision Making",
    content: (
      <p>
        We use Artificial Intelligence to enhance user experience, improve
        platform performance, and maintain a safe environment, following a
        privacy-by-design approach.
      </p>
    ),
  },
  {
    id: "security",
    heading: "Security & Data Protection",
    content: (
      <div className="space-y-4">
        <p>
          Xentro implements reasonable technical, administrative, and
          organizational measures to protect personal and startup data against
          unauthorized access, disclosure, alteration, or destruction, in
          accordance with the Digital Personal Data Protection Act, 2023.
          Measures include secure data storage, encryption protocols, access
          controls, and restricted internal access on a need-to-know basis.
        </p>
        <p>
          While Xentro adopts industry-standard safeguards, no system is
          completely secure. Xentro shall not be liable for unauthorized access
          or breaches beyond its reasonable control. In the event of a data
          breach, Xentro shall take reasonable steps to mitigate impact and
          notify relevant authorities and affected users where required.
        </p>
      </div>
    ),
  },
  {
    id: "legal",
    heading: "Legal Compliance",
    content: (
      <p>
        Xentro processes personal data in compliance with applicable Indian laws,
        including the Digital Personal Data Protection Act, 2023. Xentro ensures
        that personal data is processed only for lawful purposes, based on valid
        consent, legitimate uses, or to fulfill legal obligations. Processing
        activities follow principles of purpose limitation, data minimization,
        accuracy, and security.
      </p>
    ),
  },
  {
    id: "rights",
    heading: "Customer Rights, Choices & Obligations",
    content: (
      <div className="space-y-4">
        <p>
          You have the following rights regarding your personal data:
        </p>
        <p className="font-semibold text-[#0b192c]">Your Obligations</p>
        <ul className="space-y-2 list-none">
          {[
            "Providing accurate and truthful information on the Platform.",
            "Not sharing confidential information of third parties without authorisation.",
            "Keeping your login credentials secure and not sharing them with others.",
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
    id: "cookies",
    heading: "Usage of Cookies",
    content: (
      <div className="space-y-4">
        <p>
          The Xentro platform uses cookies and similar tracking technologies to
          maintain secure sessions, personalize your experience, and analyse
          platform usage. You may configure cookie preferences through your
          browser settings.
        </p>
        {[
          {
            type: "Essential Cookies",
            desc: "Required for core platform functionality including login sessions, security tokens, and form data. Cannot be disabled without impairing platform use.",
          },
          {
            type: "Analytical Cookies",
            desc: "Used to collect aggregate usage statistics and understand how users navigate the platform. Data is collected in anonymised form where possible.",
          },
          {
            type: "Preference Cookies",
            desc: "Used to remember your account settings, dashboard layout preferences, and notification choices.",
          },
          {
            type: "Functional Cookies",
            desc: "Enable features such as auto-saving draft applications, maintaining pitch deck upload progress, and remembering session filters.",
          },
        ].map((c) => (
          <div key={c.type}>
            <p className="font-semibold text-[#0b192c]">{c.type}</p>
            <p className="mt-1">{c.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "third-party",
    heading: "Third-Party Sites & Services",
    content: (
      <p>
        Our Services may link to or integrate with third-party sites and
        platforms that we do not control. Their privacy practices govern their
        services; we are not responsible for their policies.
      </p>
    ),
  },
  {
    id: "credentials",
    heading: "Credential Handling",
    content: (
      <ul className="space-y-2 list-none">
        {[
          "Credentials, access tokens, and authentication data are stored using industry-standard encryption and access controls.",
          "Xentro uses such credentials strictly based on your explicit instructions to perform authorized actions on your behalf.",
          "Use of third-party platforms remains subject to their respective terms.",
          "Use of app-based two-factor authentication (2FA), passkeys, or delegated tokens is recommended.",
          "Where you voluntarily share one-time passwords or authentication codes, you consent to their limited use by Xentro solely for completing authorized activities.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1B17FF]" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "retention",
    heading: "Data Retention",
    content: (
      <div className="space-y-4">
        <p>
          At Xentro, we retain personal data only for as long as necessary to
          fulfill the purposes for which it was collected, including to meet
          legal, regulatory, contractual, and operational requirements.
        </p>
        {[
          {
            label: "User-Controlled Data",
            desc: "You may access, update, or delete certain information at any time. Such data will be retained until you choose to delete it or request its removal.",
          },
          {
            label: "Automated Deletion & Anonymization",
            desc: "Certain categories of data are automatically deleted or anonymized after a defined retention period.",
          },
          {
            label: "Account-Linked Data",
            desc: "We retain some information for the duration of your account. Upon deletion, such data will be removed or anonymized, subject to legal obligations.",
          },
          {
            label: "Legal & Business Retention",
            desc: "We may retain specific data for longer periods for legitimate business purposes, including legal compliance and dispute resolution.",
          },
          {
            label: "Data Deletion Process",
            desc: "When data is deleted, we follow a structured process for secure removal. There may be a short delay between deletion requests and complete removal.",
          },
        ].map((item) => (
          <div key={item.label}>
            <p className="font-semibold text-[#0b192c]">{item.label}</p>
            <p className="mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "minors",
    heading: "Minors",
    content: (
      <p>
        Our Platform is intended for use by school students and early-stage
        founders. Where users are below the age of 18, we require parental or
        guardian consent prior to registration, in accordance with applicable
        law. We do not knowingly collect sensitive personal data from minors
        without such consent.
      </p>
    ),
  },
  {
    id: "refund-policy",
    heading: "1.Refund and policy:",
    content: (
      <div className="space-y-4">
        <p>You can request a Refund within 24 hours . Return will be processed within 2-4 days</p>
        <p>Refund will be processed and &quot;credited&quot; within 7-10 working days.</p>
      </div>
    ),
  },
  {
    id: "updates",
    heading: "Policy Updates",
    content: (
      <p>
        We may update this Privacy Policy periodically to reflect changes in our
        practices, legal requirements, or Platform features. We will notify you
        of material changes via email or a prominent Platform notice at least 14
        days before they take effect. Continued use of the Platform after the
        effective date constitutes acceptance of the revised Policy.
      </p>
    ),
  },
  {
    id: "grievance",
    heading: "Grievance Officer",
    content: (
      <div className="space-y-2">
        <p>
          For any questions, data requests, or concerns, please contact:
        </p>
        <a
          href="mailto:contact@xentroventures.com"
          className="inline-block text-[#1B17FF] font-medium hover:underline"
        >
          contact@xentroventures.com
        </a>
      </div>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    content: (
      <div className="space-y-3">
        <p>
          This Privacy Policy is governed by and construed in accordance with
          the laws of India. Any disputes arising out of or in connection with
          this Policy shall be subject to the exclusive jurisdiction of the
          competent courts in India.
        </p>
        <p className="text-sm text-[#0b192c]/50 italic">
          Note: Technical Data is subject to changes as reviewed by the
          technical team.
        </p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen bg-white text-[#0b192c]"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-black/5 bg-white/95 px-6 py-4 backdrop-blur-sm md:px-10">
        <Link href="/">
          <Image
            src="/xentro-logo-no%20bg%20black%20text.svg"
            alt="XENTRO"
            width={420}
            height={168}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>
        <JoinButtonWithPopup />
      </nav>

      {/* ── Hero ── */}
      <div className="border-b border-black/6 bg-[#f7f8fc] px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Legal chip */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1B17FF]/20 bg-[#1B17FF]/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1B17FF]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1B17FF]">
              Legal
            </span>
          </div>

          <h1
            className="text-[2.8rem] font-bold leading-[1.05] tracking-[-0.03em] text-[#0b192c] sm:text-[3.6rem] md:text-[4.2rem]"
            style={{ fontFamily: "var(--font-red-hat-display)" }}
          >
            Privacy Policy
          </h1>

          <p className="mt-4 text-[0.9rem] font-semibold uppercase tracking-[0.1em] text-[#0b192c]/45">
            Our Personal Statement · Cookies · Third-Parties
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#0b192c]/55">
            <span>
              Effective Date:{" "}
              <span className="font-medium text-[#0b192c]/80">
                April 14, 2026
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
                  className="text-[1rem] font-semibold leading-snug text-[#0b192c] md:text-[0.95rem]"
                  style={{ fontFamily: "var(--font-red-hat-display)" }}
                >
                  {section.heading}
                </h2>
              </div>

              {/* Right — content */}
              <div className="text-[0.95rem] leading-[1.75] text-[#0b192c]/70">
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
                Building India&apos;s First Digital
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
                  href="/privacy"
                  className="hover:text-[#1B17FF] transition-colors"
                >
                  Privacy Policy
                </Link>
                <a
                  href="https://www.xentro.in/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1B17FF] transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs text-[#0b192c]/35">
            © 2026 XENTRO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
