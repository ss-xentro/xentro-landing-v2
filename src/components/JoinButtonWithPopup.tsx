export function JoinButtonWithPopup({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const buttonClass = variant === "dark"
    ? "flex items-center gap-1.5 rounded-lg bg-[#1B17FF] px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#1B17FF]/85"
    : "flex items-center gap-1.5 rounded-lg bg-[#1B17FF] px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#1B17FF]/85";

  return (
    <a
      href="https://app.xentro.in/join"
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass}
    >
      Join Now <span className="text-[14px]">→</span>
    </a>
  );
}
