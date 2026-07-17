"use client";

import { useSyncExternalStore } from "react";

const SunIcon = (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
  </svg>
);
const MoonIcon = (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

// Theme lives on <html data-theme>. Read it via useSyncExternalStore so the button
// always reflects the real DOM value (set pre-hydration by the no-flash script) with
// no setState-in-effect and no hydration mismatch.
function subscribe(callback: () => void) {
  const obs = new MutationObserver(callback);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
}
function getTheme(): "light" | "dark" {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function Nav() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next; // MutationObserver -> re-render
    try {
      localStorage.setItem("vael-theme", next);
    } catch {}
  }

  return (
    <div className="topbar">
      <div className="wrap">
        <span>
          <span className="node" />
          <b>Vael</b> design system
        </span>
        <span className="mono hidem">a case study</span>
        <button className="toggle" onClick={toggle} aria-label="Toggle color theme">
          <span className="ic">{theme === "dark" ? SunIcon : MoonIcon}</span>
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </div>
    </div>
  );
}
