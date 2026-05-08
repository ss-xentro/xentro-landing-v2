import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JoinButtonWithPopup } from "@/components/JoinButtonWithPopup";

export const metadata: Metadata = {
  title: "Terms of Service – Xentro Ventures",
  description:
    "Read the binding Terms of Service governing your use of the Xentro Ventures platform.",
};

const BULLET = <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1B17FF]" />;

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">{BULLET}{item}</li>
      ))}
    </ul>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="font-semibold text-[#0b192c]">{title}</p>
      <div>{children}</div>
    </div>
  );
}

const sections = [
  {
    id: "intro",
    heading: "Agreement",
    content: (
      <div className="space-y-4">
        <p>
          This Terms of Service (&quot;Agreement&quot;) is a binding contract between XENTRO Ventures Private Limited
          (&quot;XENTRO,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and the individual or entity that registers, accesses, or uses
          our Platform (&quot;User,&quot; &quot;you&quot;). By clicking &quot;I Agree,&quot; completing registration, or using the Platform,
          you agree to be bound by this Agreement.
        </p>
        <p className="text-sm italic text-[#0b192c]/50">
          Not legal advice: This is a commercial agreement for a technology-enabled educational and
          incubation service. XENTRO is not a law firm and does not provide legal, investment, or
          financial advice.
        </p>
      </div>
    ),
  },
  {
    id: "definitions",
    heading: "1. Definitions",
    content: (
      <div className="space-y-3">
        {[
          ['"Platform"', "XENTRO's integrated digital incubation platform, including its website, mobile application, web application, and all associated tools, features, and services."],
          ['"Services"', "All features provided via the Platform, including Guided Learning Paths, Mentor Connect, Startup Showcase, Events & Cohorts, Community Spaces, and Progress Tracking tools."],
          ['"User Content"', "Information, materials, and data you submit to the Platform (e.g., founder profiles, startup information, pitch decks, messages, community posts), and outputs we help create for you."],
          ['"Mentor"', "A verified professional registered on the Platform to offer guidance, feedback, and advisory support to Users."],
          ['"Founder"', "A User who registers to develop, validate, and showcase a startup idea through the Platform."],
          ['"Confidential Information"', "Non-public information disclosed by one party to the other that is marked confidential or should reasonably be understood as such."],
          ['"Order"', "The online checkout, subscription form, or event registration that specifies your plan, access tier, term, and applicable fees."],
        ].map(([term, def]) => (
          <div key={term} className="flex items-start gap-3">
            {BULLET}
            <p><span className="font-semibold text-[#0b192c]">{term}</span> — {def}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "scope",
    heading: "2. Scope & Nature",
    content: (
      <div className="space-y-4">
        <SubSection title="2.1 Educational and incubation support only.">
          <p>The Platform is designed to guide school students and early-stage founders through the process of ideation, validation, and startup execution. XENTRO does not guarantee business success, investment outcomes, academic admission, or employment.</p>
        </SubSection>
        <SubSection title="2.2 Not an investment advisor or recruiter.">
          <p>XENTRO does not act as an investment advisor, employment agency, or recruiter. We do not make funding decisions, hiring decisions, or represent Users to third-party investors or employers.</p>
        </SubSection>
        <SubSection title="2.3 Mentor independence.">
          <p>Mentors on the Platform are independent professionals. Their opinions, advice, and feedback represent their own views and do not constitute professional legal, financial, or business advice.</p>
        </SubSection>
        <SubSection title="2.4 Third-party platforms.">
          <p>The Platform may integrate with or link to third-party services. Those platforms are governed by their own terms. Your use of such platforms is at your own discretion and risk.</p>
        </SubSection>
      </div>
    ),
  },
  {
    id: "account",
    heading: "3. Your Account",
    content: (
      <div className="space-y-4">
        <SubSection title="3.1 Registration.">
          <p>To access most features, you must create an account with accurate, complete, and current information.</p>
        </SubSection>
        <SubSection title="3.2 Account security.">
          <p>You are responsible for maintaining confidentiality of your login credentials. Notify us immediately at <a href="mailto:security@xentro.in" className="text-[#1B17FF] hover:underline">security@xentro.in</a> if you suspect unauthorised access.</p>
        </SubSection>
        <SubSection title="3.3 Eligibility.">
          <p>The Platform is open to school students, early-stage founders, and professionals registering as Mentors. Users below the age of 18 must obtain parental or guardian consent prior to registration.</p>
        </SubSection>
        <SubSection title="3.4 Accuracy of content.">
          <p>You represent and warrant that all information you submit is truthful, accurate, and not misleading. You will promptly update any inaccuracies.</p>
        </SubSection>
        <SubSection title="3.5 Prohibited content.">
          <p>You will not submit false startup information, misrepresent your qualifications or business status, or use the Platform to make misleading representations.</p>
        </SubSection>
      </div>
    ),
  },
  {
    id: "acceptable-use",
    heading: "4. Acceptable Use",
    content: (
      <div className="space-y-3">
        <p>You agree not to, and will not permit anyone to:</p>
        <BulletList items={[
          "Use the Platform to harass, spam, defame, or harm other Users, Mentors, or XENTRO personnel.",
          "Reverse engineer, decompile, or attempt to extract source code, algorithms, models, or proprietary data from the Platform.",
          "Use the Platform for any unlawful, deceptive, infringing, or fraudulent purpose.",
          "Upload or transmit malware, viruses, or any code designed to interfere with the Platform's security or functionality.",
          "Scrape, crawl, or systematically extract data from the Platform beyond normal use.",
          "Resell, sublicense, or provide access to the Platform to third parties without our prior written consent.",
          "Impersonate any person or entity, or misrepresent your affiliation with any organisation.",
        ]} />
      </div>
    ),
  },
  {
    id: "fees",
    heading: "5. Fees, Billing & Renewals",
    content: (
      <div className="space-y-4">
        <SubSection title="5.1 Plans & Pricing.">
          <p>All fees are in Indian Rupees (INR) unless otherwise stated and are non-refundable except as provided in Section 6.</p>
        </SubSection>
        <SubSection title="5.2 Auto-renewal.">
          <p>Unless otherwise specified, subscriptions automatically renew at the end of each billing period. You may disable auto-renewal at any time before the end of the current term.</p>
        </SubSection>
        <SubSection title="5.3 Late payments.">
          <p>Overdue amounts may accrue interest at 1.5% per month (or the maximum permitted by applicable law) along with reasonable collection costs.</p>
        </SubSection>
        <SubSection title="5.4 Taxes.">
          <p>All fees are exclusive of applicable taxes including GST. You are responsible for all taxes applicable to your use of the Platform.</p>
        </SubSection>
        <SubSection title="5.5 Chargebacks.">
          <p>Initiating a chargeback without first providing XENTRO a reasonable opportunity to resolve the issue is a material breach of this Agreement.</p>
        </SubSection>
      </div>
    ),
  },
  {
    id: "refunds",
    heading: "6. Cancellations & Refunds",
    content: (
      <div className="space-y-4">
        <SubSection title="1.Refund and policy:">
          <p>You can request a Refund within 24 hours . Return will be processed within 2-4 days</p>
          <p className="mt-2">Refund will be processed and &quot;credited&quot; within 7-10 working days.</p>
        </SubSection>
        <SubSection title="6.2 Non-refundable services.">
          <p>One-time services delivered by Mentors or coaches (e.g., pitch reviews, profile audits) that have been commenced or delivered are non-refundable.</p>
        </SubSection>
        <SubSection title="6.3 Quality concerns.">
          <p>If dissatisfied, your primary remedy is the pro-rata refund described above. You agree not to seek full refunds or additional damages beyond what is provided in this section.</p>
        </SubSection>
        <SubSection title="6.4 Effective date of cancellation.">
          <p>Cancellations take effect upon written confirmation from XENTRO. Pending tasks or sessions may be paused or stopped immediately.</p>
        </SubSection>
        <SubSection title="6.5 No refund for breach.">
          <p>If we terminate your access due to your breach of this Agreement, no refund will be issued.</p>
        </SubSection>
      </div>
    ),
  },
  {
    id: "changes",
    heading: "7. Service Changes & Beta",
    content: (
      <p>XENTRO may modify, update, or discontinue features of the Platform at any time. We will not materially reduce core functionality during a paid subscription term without reasonable prior notice. Beta, experimental, or preview features are provided &quot;AS IS&quot; with no guarantees and may be discontinued at any time without liability.</p>
    ),
  },
  {
    id: "data",
    heading: "8. Data, Security & Incident Response",
    content: (
      <div className="space-y-4">
        <SubSection title="8.1 Data processing.">
          <p>We process User Content solely to provide the Services, improve platform safety, comply with applicable law, and as otherwise permitted in our Privacy Policy.</p>
        </SubSection>
        <SubSection title="8.2 Security.">
          <p>We implement reasonable administrative, technical, and physical safeguards to protect User Content, including access controls and encryption. No method of transmission or storage is 100% secure.</p>
        </SubSection>
        <SubSection title="8.3 Incident response.">
          <p>If we become aware of unauthorised access to User Content, we will notify you without undue delay, describe the known facts, and take reasonable steps to mitigate the incident.</p>
        </SubSection>
        <SubSection title="8.4 Liability for data incidents.">
          <p>XENTRO&apos;s total liability for any security incident shall not exceed the greater of (i) the fees you paid in the three months immediately preceding the event or (ii) INR 10,000.</p>
        </SubSection>
        <SubSection title="8.5 Data retention & deletion.">
          <p>You may request deletion of specific User Content at any time. We will fulfil deletion requests within a reasonable period unless retention is required by law.</p>
        </SubSection>
        <SubSection title="8.6 Regional privacy.">
          <p>Our collection and use of personal data is governed by our <Link href="/privacy" className="text-[#1B17FF] hover:underline">Privacy Policy</Link>. For a Data Processing Addendum, contact <a href="mailto:privacy@xentro.in" className="text-[#1B17FF] hover:underline">privacy@xentro.in</a>.</p>
        </SubSection>
      </div>
    ),
  },
  {
    id: "ip",
    heading: "9. Intellectual Property",
    content: (
      <div className="space-y-4">
        <SubSection title="9.1 XENTRO's IP.">
          <p>XENTRO owns all rights in and to the Platform, including its software, design, learning content, algorithms, templates, workflows, and branding. Nothing in this Agreement transfers any ownership of XENTRO&apos;s IP to you.</p>
        </SubSection>
        <SubSection title="9.2 Your content.">
          <p>You retain ownership of all User Content you submit. By submitting User Content, you grant XENTRO a non-exclusive, worldwide, royalty-free licence to host, store, display, and process your content solely to provide the Services.</p>
        </SubSection>
        <SubSection title="9.3 Startup Showcase.">
          <p>By publishing a startup profile on the Showcase, you grant XENTRO permission to display your startup&apos;s name, description, and summary publicly in accordance with your privacy settings.</p>
        </SubSection>
        <SubSection title="9.4 Feedback.">
          <p>Any feedback, suggestions, or ideas you share with XENTRO may be used by us freely and without obligation or compensation to you.</p>
        </SubSection>
      </div>
    ),
  },
  {
    id: "warranties",
    heading: "10. Representations, Warranties & Disclaimers",
    content: (
      <div className="space-y-4">
        <SubSection title="10.1 Mutual authority.">
          <p>Each party represents that it has the legal right and authority to enter into this Agreement.</p>
        </SubSection>
        <SubSection title="10.2 User warranties.">
          <p>You warrant that: (a) you have the right to submit all User Content you provide; (b) your use of the Platform will comply with applicable laws; (c) all information you submit is truthful and not misleading.</p>
        </SubSection>
        <SubSection title="10.3 AS-IS disclaimer.">
          <p className="uppercase text-xs leading-relaxed text-[#0b192c]/60">
            THE PLATFORM AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, OR NON-INFRINGEMENT. XENTRO DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED OR ERROR-FREE.
          </p>
        </SubSection>
      </div>
    ),
  },
  {
    id: "indemnification",
    heading: "11. Indemnification",
    content: (
      <div className="space-y-3">
        <p>You agree to defend, indemnify, and hold harmless XENTRO, its directors, officers, employees, contractors, and Mentors from and against any claims, damages, liabilities, costs, and expenses arising out of or related to:</p>
        <BulletList items={[
          "Your User Content or information submitted to the Platform;",
          "Your use of the Platform in violation of this Agreement or applicable law;",
          "Your interactions with Mentors, investors, or third parties through the Platform;",
          "Any misrepresentations you make to other Users, Mentors, or third parties.",
        ]} />
      </div>
    ),
  },
  {
    id: "liability",
    heading: "12. Limitation of Liability",
    content: (
      <div className="space-y-3">
        <p className="uppercase text-xs leading-relaxed text-[#0b192c]/60">
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, XENTRO&apos;S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT OR THE PLATFORM SHALL NOT EXCEED THE GREATER OF (I) THE FEES YOU PAID TO XENTRO IN THE THREE MONTHS PRECEDING THE CLAIM OR (II) INR 10,000.
        </p>
        <p className="uppercase text-xs leading-relaxed text-[#0b192c]/60">
          XENTRO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL.
        </p>
      </div>
    ),
  },
  {
    id: "termination",
    heading: "13. Term & Termination",
    content: (
      <div className="space-y-4">
        <SubSection title="13.1 Term.">
          <p>This Agreement begins on the date you register or first use the Platform and continues until terminated by either party.</p>
        </SubSection>
        <SubSection title="13.2 Termination by you.">
          <p>You may terminate your account at any time by deactivating it through Platform settings or by contacting <a href="mailto:hello@xentro.in" className="text-[#1B17FF] hover:underline">hello@xentro.in</a>. Refund eligibility will be assessed under Section 6.</p>
        </SubSection>
        <SubSection title="13.3 Termination by XENTRO.">
          <p>We may suspend or terminate your access immediately if you breach this Agreement, engage in fraud or abuse, or if required by law.</p>
        </SubSection>
        <SubSection title="13.4 Effect of termination.">
          <p>Upon termination, your right to access the Platform ceases. Sections 9, 10, 11, 12, and 14 will survive termination.</p>
        </SubSection>
      </div>
    ),
  },
  {
    id: "general",
    heading: "14. General Provisions",
    content: (
      <div className="space-y-4">
        <SubSection title="14.1 Governing law.">
          <p>This Agreement is governed by the laws of the Republic of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.</p>
        </SubSection>
        <SubSection title="14.2 Dispute resolution.">
          <p>Before initiating legal proceedings, both parties agree to attempt to resolve disputes in good faith through direct negotiation for 30 days. If unresolved, disputes may be submitted to arbitration under the Arbitration and Conciliation Act, 1996 of India.</p>
        </SubSection>
        <SubSection title="14.3 Entire agreement.">
          <p>This Agreement, together with our Privacy Policy and any applicable Order, constitutes the entire agreement between you and XENTRO with respect to the Platform.</p>
        </SubSection>
        <SubSection title="14.4 Amendments.">
          <p>Material changes will be communicated via email or in-app notice at least 14 days before they take effect. Continued use of the Platform after the effective date constitutes acceptance.</p>
        </SubSection>
        <SubSection title="14.5 Severability.">
          <p>If any provision is found invalid or unenforceable, the remaining provisions will continue in full force and effect.</p>
        </SubSection>
        <SubSection title="14.6 Waiver.">
          <p>Failure by XENTRO to enforce any provision shall not constitute a waiver of our right to enforce it in the future.</p>
        </SubSection>
        <SubSection title="14.7 Assignment.">
          <p>You may not assign or transfer your rights without our prior written consent. XENTRO may assign this Agreement in connection with a merger, acquisition, or sale of assets.</p>
        </SubSection>
      </div>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    content: (
      <div className="space-y-3">
        <p>For questions, concerns, or notices regarding this Agreement, please contact us at:</p>
        <BulletList items={[
          "General: hello@xentro.in",
          "Grievance Officer: contact@xentro.in",
          "Security concerns: contact@xentro.in",
        ]} />
      </div>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b192c]" style={{ fontFamily: "var(--font-inter)" }}>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-black/5 bg-white/95 px-6 py-4 backdrop-blur-sm md:px-10">
        <Link href="/">
          <Image src="/xentro-logo-no%20bg%20black%20text.svg" alt="XENTRO" width={420} height={168} priority className="h-14 w-auto sm:h-16" />
        </Link>
        <JoinButtonWithPopup />
      </nav>

      {/* Hero */}
      <div className="border-b border-black/6 bg-[#f7f8fc] px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1B17FF]/20 bg-[#1B17FF]/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1B17FF]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1B17FF]">Legal</span>
          </div>
          <h1 className="text-[2.8rem] font-bold leading-[1.05] tracking-[-0.03em] text-[#0b192c] sm:text-[3.6rem] md:text-[4.2rem]" style={{ fontFamily: "var(--font-red-hat-display)" }}>
            Terms of Service
          </h1>
          <p className="mt-4 text-[0.9rem] font-semibold uppercase tracking-[0.1em] text-[#0b192c]/45">
            Version 1.0 · Governing Your Use of the Platform
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#0b192c]/55">
            <span>Last Updated: <span className="font-medium text-[#0b192c]/80">April 2025</span></span>
            <span className="opacity-40">·</span>
            <span className="font-medium text-[#0b192c]/80">Xentro Ventures Private Limited</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
        <div className="divide-y divide-black/6">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[240px_1fr] md:gap-16 md:py-12">
              <div className="md:pt-0.5">
                <h2 className="text-[1rem] font-semibold leading-snug text-[#0b192c] md:text-[0.95rem]" style={{ fontFamily: "var(--font-red-hat-display)" }}>
                  {section.heading}
                </h2>
              </div>
              <div className="text-[0.95rem] leading-[1.75] text-[#0b192c]/70">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/6 bg-[#f7f8fc] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <p className="text-[1.05rem] font-bold tracking-tight text-[#0b192c]" style={{ fontFamily: "var(--font-red-hat-display)" }}>
              Building India&apos;s First Digital<br />Entrepreneurial Ecosystem for Students
            </p>
            <div className="flex flex-col gap-2 text-sm text-[#0b192c]/60">
              <p className="font-semibold uppercase tracking-[0.08em] text-[#0b192c]/35 text-xs mb-1">Contact</p>
              <a href="mailto:contact@xentro.in" className="hover:text-[#1B17FF] transition-colors">contact@xentro.in</a>
              <a href="tel:+917993504337" className="hover:text-[#1B17FF] transition-colors">+91 79935 04337</a>
              <div className="mt-2 flex gap-4">
                <Link href="/privacy" className="hover:text-[#1B17FF] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-[#1B17FF] transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-[#0b192c]/35">© 2026 XENTRO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
