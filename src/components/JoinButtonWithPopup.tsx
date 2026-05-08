"use client";

import { useState } from "react";

export function JoinButtonWithPopup({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [showPopup, setShowPopup] = useState(false);

  const buttonClass = variant === "dark"
    ? "flex items-center gap-1.5 rounded-lg bg-[#1B17FF] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#1B17FF]/85"
    : "flex items-center gap-1.5 rounded-lg bg-[#1B17FF] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#1B17FF]/85";

  return (
    <>
      <button onClick={() => setShowPopup(true)} className={buttonClass}>
        Join <span className="text-[15px]">→</span>
      </button>

      {/* Coming Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black/50 p-4" onClick={() => setShowPopup(false)}>
          <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl md:p-12" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#0f1438] md:text-4xl" style={{ fontFamily: "var(--font-red-hat-display)" }}>
                Coming Soon
              </h2>
              <p className="mb-8 text-base text-[#66708f] md:text-lg">
                We&apos;re working hard to bring you the best experience. Stay tuned!
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="rounded-lg bg-[#1B17FF] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1B17FF]/85"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
