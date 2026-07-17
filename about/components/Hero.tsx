"use client";

import { useEffect, useRef } from "react";

const lines: { t: string; c: string | null }[] = [
  { t: "export const theme = {", c: null },
  { t: '  primary:   "#1976d2",', c: "#1976d2" },
  { t: '  dark:      "#1565c0",', c: "#1565c0" },
  { t: '  light:     "#42a5f5",', c: "#42a5f5" },
  { t: '  success:   "#2e7d32",', c: "#2e7d32" },
  { t: "}", c: null },
];

export default function Hero() {
  const codeRef = useRef<HTMLDivElement>(null);
  const assemblyRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const pipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const code = codeRef.current;
    const assembly = assemblyRef.current;
    const arrow = arrowRef.current;
    const btn = btnRef.current;
    const pipe = pipeRef.current;
    if (!code || !assembly || !arrow || !btn || !pipe) return;

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    // reset (handles React StrictMode double-invoke in dev)
    code.textContent = "";
    assembly.querySelectorAll(".swatch").forEach((s) => s.remove());
    arrow.classList.remove("on");
    btn.classList.remove("on");
    pipe.classList.remove("run");
    pipe.querySelectorAll(".st").forEach((n) => n.classList.remove("lit"));

    const addSwatch = (color: string) => {
      const s = document.createElement("span");
      s.className = "swatch";
      s.style.background = color;
      assembly.insertBefore(s, arrow);
      requestAnimationFrame(() => requestAnimationFrame(() => s.classList.add("on")));
    };

    const endState = () => {
      code.textContent = lines.map((l) => l.t).join("\n");
      lines
        .filter((l) => l.c)
        .forEach((l) => {
          const s = document.createElement("span");
          s.className = "swatch on";
          s.style.background = l.c as string;
          assembly.insertBefore(s, arrow);
        });
      arrow.classList.add("on");
      btn.classList.add("on");
      pipe.querySelectorAll(".st").forEach((n) => n.classList.add("lit"));
      pipe.classList.add("run");
    };

    const play = async () => {
      const cur = document.createElement("span");
      cur.className = "cur";
      for (const ln of lines) {
        for (let i = 0; i < ln.t.length; i++) {
          if (cancelled) return;
          code.append(ln.t[i]);
          code.appendChild(cur);
          await wait(15);
          if (cur.parentNode) code.removeChild(cur);
        }
        code.append("\n");
        code.appendChild(cur);
        if (ln.c) {
          await wait(55);
          addSwatch(ln.c);
        }
        await wait(85);
      }
      if (cur.parentNode) code.removeChild(cur);
      await wait(170);
      arrow.classList.add("on");
      await wait(150);
      btn.classList.add("on");
      const nodes = Array.from(pipe.querySelectorAll<HTMLElement>(".st"));
      for (let i = 0; i < nodes.length; i++) {
        if (cancelled) return;
        await wait(170);
        nodes[i].classList.add("lit");
      }
      pipe.classList.add("run");
    };

    if (rm) {
      endState();
      return;
    }
    const timer = setTimeout(play, 650);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className="hero">
      <div className="wrap">
        <div className="hgrid">
          <div className="hero-anim">
            <span className="eyebrow">A design system, built with AI in the loop</span>
            <h1>
              Vael<span className="cursor">_</span>
            </h1>
            <p className="thesis">
              Built with AI as my pair. Shelved. <span className="sig">Carried forward on my own.</span>
            </p>
            <p className="body">
              It began as a design system for a bioscience startup — production standards, a six-week
              cycle. When it was shelved, I rebuilt it clean, in the open, and took it further.
            </p>
            <div className="statchips">
              <span className="chip">
                <span className="n">
                  <span className="count" data-to="27">0</span>→<span className="count" data-to="44">0</span>
                </span>{" "}
                components
              </span>
              <span className="chip">
                <span className="n count" data-to="80" data-suf="+">0</span> doc pages
              </span>
              <span className="chip">
                <span className="n">1</span> designer
              </span>
            </div>
          </div>

          <div className="stage stage-in" aria-hidden="true">
            <div className="bar">
              <i />
              <i />
              <i />
              <span>theme.tokens.ts — generated</span>
            </div>
            <div className="code" ref={codeRef} />
            <div className="assembly" ref={assemblyRef}>
              <span className="arrowto" ref={arrowRef}>
                →
              </span>
              <button className="btn-live" ref={btnRef}>
                Primary action
              </button>
            </div>
          </div>
        </div>

        <div className="pipe" ref={pipeRef}>
          <span className="st">Brainstorm</span>
          <span className="lnk" />
          <span className="st">Figma</span>
          <span className="lnk" />
          <span className="st">AI Pair Programming</span>
          <span className="lnk" />
          <span className="st">Clean-Up</span>
          <span className="lnk" />
          <span className="st">Product</span>
        </div>
      </div>
    </header>
  );
}
