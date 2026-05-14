export default function CTASection() {
  return (
    <section className="flex w-full justify-center bg-white px-6 py-24 pb-32 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        {/* Label */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-[2px] w-6 bg-[#1B17FF]"></div>
          <span className="text-[13px] font-bold uppercase tracking-widest text-[#1B17FF]">
            Get Started
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-balance text-[3.2rem] font-bold leading-[1.05] tracking-[-0.04em] text-black sm:text-[4.2rem] lg:text-[4.8rem]">
          Your idea is
          <br />
          <span className="text-[#1B17FF]">worth building.</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-[620px] text-[1.1rem] font-medium leading-[1.8] text-black/60 sm:text-[1.2rem]">
          Don't wait for the perfect moment or the right college. Xentro
          was built exactly for right now, exactly for you.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="https://app.xentro.in/join"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1B17FF] px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1B17FF]/90 sm:w-auto"
          >
            Join Xentro — It's Free <span>→</span>
          </a>
          <a
            href="#contact"
            className="flex w-full items-center justify-center rounded-lg border border-black/10 bg-transparent px-8 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-black/5 sm:w-auto"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}