"use client";

import { useEffect } from "react";

export default function ScrollFX() {
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // scroll reveals
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let revealIO: IntersectionObserver | null = null;
    if (rm) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      revealIO = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              revealIO?.unobserve(e.target);
            }
          }),
        { threshold: 0.12 }
      );
      reveals.forEach((el) => revealIO!.observe(el));
    }

    // stat count-ups
    const countUp = (el: HTMLElement) => {
      const to = Number(el.dataset.to || "0");
      const suf = el.dataset.suf || "";
      if (rm) {
        el.textContent = to + suf;
        return;
      }
      let start: number | null = null;
      const dur = 1100;
      const step = (t: number) => {
        if (start === null) start = t;
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * to) + suf;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const countIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target as HTMLElement);
            countIO.unobserve(e.target);
          }
        }),
      { threshold: 0.6 }
    );
    document.querySelectorAll<HTMLElement>(".count").forEach((el) => countIO.observe(el));

    // scroll progress
    const prog = document.getElementById("scroll-progress");
    const onScroll = () => {
      if (!prog) return;
      const h = document.documentElement;
      const denom = h.scrollHeight - h.clientHeight || 1;
      prog.style.width = (h.scrollTop / denom) * 100 + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      revealIO?.disconnect();
      countIO.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div className="progress" id="scroll-progress" />;
}
