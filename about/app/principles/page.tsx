import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The rulebook — Vael design system",
  description:
    "The written rules the Vael design system runs on — constraint, consequence, accessibility, voice, governance, and the decision records behind them.",
};

type Card = { rule: string; why: string };
type Theme = { id: string; name: string; kicker: string; intro?: string; cards: Card[] };

const THEMES: Theme[] = [
  {
    id: "constraint",
    name: "Constraint",
    kicker: "01",
    intro:
      "Restraint, grounded in how people actually perceive and remember — not taste by fiat. Most of these numbers come from research, not preference.",
    cards: [
      {
        rule: "8 spacing steps, not forty",
        why: "The scale stops at 64px because anything larger is a layout concern, not a spacing one. An 8px base divides cleanly into 4px and 2px half-steps and aligns to common screen densities; a 4px base makes too many increments and weakens rhythm, while a 12–16px base is too coarse for dense tables and toolbars.",
      },
      {
        rule: "No more than 4 series, 2 axes per chart",
        why: "Pre-attentive visual processing reliably tracks about four distinct colored elements without counting. A third y-axis has no natural placement and floats inside the plot area, creating ambiguity about which axis governs which series. The ceiling is enforced in code.",
      },
      {
        rule: "No more than 6 top-level nav items",
        why: "Six is the practical limit of working memory for immediately scannable items (Miller's Law, 7 ± 2). And drawers animate in ≤250ms — the upper edge of Nielsen's 100–300ms 'fast but noticeable' window; above it, users wait on the animation instead of continuing to navigate.",
      },
      {
        rule: "One icon library, enforced in lint",
        why: "FontAwesome is the single source — never @mui/icons-material, ad-hoc SVG, or emoji. It's the one hard prohibition, enforceable in lint, because visual consistency across every screen depends on it.",
      },
      {
        rule: "One Contained button per section",
        why: "The single most important action in a section gets the contained treatment. More than one and the hierarchy the button is meant to create disappears — so a section makes its primary action obvious and lets everything else step back.",
      },
      {
        rule: "Motion is functional, never decorative",
        why: "Every animation has a reason — continuity, confirmation, drawing attention to transient content. No parallax, ever. No scroll-triggered reveals, no 'draw-in' animations on a chart the user opened to read, no lift-on-hover for its own sake. Entering is slightly slower than leaving; arriving draws attention, leaving gets out of the way.",
      },
      {
        rule: "Desktop-first, on purpose",
        why: "Breakpoints exist to support graceful degradation, not to build a mobile version. The primary user is an analyst at a desk doing desktop-class work; optimizing for mobile would force compromises that hurt them. Mobile is a secondary surface for monitoring, not the target.",
      },
    ],
  },
  {
    id: "consequence",
    name: "Designed for consequence",
    kicker: "02",
    intro:
      "The system is opinionated because the domain has stakes — monitoring and operations software, where a missed signal has real cost. That raises the bar on what's acceptable.",
    cards: [
      {
        rule: "Critical state never auto-dismisses",
        why: "Errors and warnings describe ongoing states that require action, so they route to persistent banners — never an auto-hiding toast. Auto-dismissing a warning before the user has read and responded is a usability failure in a context where missing an alarm has consequences.",
      },
      {
        rule: "A destructive action can't look like a safe one",
        why: "Destructive actions take the error color and a confirmation step. A filled primary-blue 'Abort' button looks identical to a safe one — and in software where an action can stop a running job, that resemblance is a trap, not a style choice.",
      },
      {
        rule: "Depth in the domain over generalist breadth",
        why: "Benchmarked against six major design systems, then chose to go deep where none of them do — real-time and streaming-data patterns. The highest-leverage move was to define something no general-purpose system covers, rather than chase comprehensiveness the product doesn't need.",
      },
    ],
  },
  {
    id: "accessibility",
    name: "Accessibility",
    kicker: "03",
    cards: [
      {
        rule: "WCAG 2.1 AA — by choice, not by default",
        why: "Not AAA: its 7:1 contrast requirement conflicts with the semantic palette. Not Level A: insufficient for enterprise. AA is the legal baseline and the achievable target — and it's written down as a decision record, with the reasoning, rather than assumed.",
      },
      {
        rule: "Differentiate by line style and color, never color alone",
        why: "Every chart series carries a distinct line style as well as a color, and status is never signalled by color alone. That keeps the system legible for colorblind users and in print and screenshots, where color can't be relied on.",
      },
      {
        rule: "Name the gaps, don't hide them",
        why: "Base MUI components inherit MUI's audited accessibility; the custom components were hand-audited for the common failure modes — aria-labels on icon-only controls, aria-hidden on decorative ones. The full screen-reader pass of AG Grid and React Flow is still pending, and the docs say so rather than implying complete coverage.",
      },
    ],
  },
  {
    id: "voice",
    name: "Voice",
    kicker: "04",
    intro: "A design system that has opinions about language, not just pixels. The words are part of the system.",
    cards: [
      {
        rule: "Error messages in three parts",
        why: "What happened, why, and what to do. “File couldn't be uploaded. Files must be under 10 MB. Try compressing it or splitting it into parts.” — not “Upload error: 413.” And lead with the meaning, not the status code: most people don't know what a 404 is, and a number first creates anxiety before understanding.",
      },
      {
        rule: "Sentence case, and no apologizing",
        why: "Sentence case everywhere — labels, headings, errors — title case only for proper nouns. Drop the filler: no 'please,' no 'sorry / oops,' 'select' not 'click,' 'use' not 'utilize.' Explain and move forward — 'Something went wrong loading this job. Try refreshing.' — never 'Sorry! We couldn't load your job.'",
      },
      {
        rule: "Written to be heard and translated",
        why: "Screen-reader users hear every word in isolation, so labels have to make sense out of context — 'Delete job,' not a bare 'Delete.' Avoid idioms that don't translate. Dates use an unambiguous long format — 'Apr 9, 2026,' not '4/9/26' — and numbers use commas for thousands, periods for decimals.",
      },
    ],
  },
  {
    id: "governance",
    name: "Governance",
    kicker: "05",
    cards: [
      {
        rule: "Two reviewers: one design, one engineering",
        why: "Every change goes through a cross-discipline review regardless of which side it touches. It's the check that keeps the system coherent as it grows, instead of letting it drift one discipline at a time.",
      },
      {
        rule: "No duplicate components without a reason",
        why: "A component earns a place only when it's being built in multiple places independently, or forcing teams into one-off solutions — never for a cosmetic variation. Token values that bypass the semantic system, and changes that remove accessibility requirements, aren't accepted. That's how a system avoids sprawl.",
      },
      {
        rule: "V0 → V1 only when it's earned",
        why: "The library stays pre-release until every component is independently audited for accessibility, dark mode is finalized, motion tokens are approved, token naming is settled, at least one product has shipped on it, and the contribution process has run end-to-end. Deprecated items stay available for at least one minor version, with a migration path.",
      },
    ],
  },
  {
    id: "decision-records",
    name: "Decision records",
    kicker: "06",
    cards: [
      {
        rule: "Metric → color mappings are permanent",
        why: "CPU is blue, memory is red — and once assigned they never change, because changing one breaks visual recognition across every historical chart and report. In a data system, stability of meaning beats flexibility.",
      },
      {
        rule: "The reasons live in writing",
        why: "Every consequential call — AA over AAA, permanent color mappings, the eight-step scale, one icon library — is a written decision record with its rationale. The reasons are what the next person actually needs: the record hands them the why, not just the what.",
      },
    ],
  },
];

export default function PrinciplesPage() {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--dim)", textDecoration: "none" }}>
            <span className="node" />
            <b style={{ color: "var(--ink)" }}>&larr;</b> Back to the case study
          </Link>
          <span className="mono hidem">The rulebook</span>
        </div>
      </div>

      <main className="sec">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div className="kicker">
            <span className="no">&mdash;</span>
            <span className="eyebrow">The rules I set</span>
          </div>
          <h1 className="big" style={{ marginTop: 10 }}>
            The rules the system runs on.
          </h1>
          <p className="lead" style={{ marginTop: 16 }}>
            None of this was improvised. Every component sits on a set of written rules — what&rsquo;s
            allowed, what isn&rsquo;t, and why. That&rsquo;s the part a system actually runs on, and the part
            that&rsquo;s usually missing. These are the calls that mattered most, and the reasoning behind
            each.
          </p>

          {THEMES.map((t) => (
            <section key={t.id} id={t.id} style={{ marginTop: "clamp(40px, 6vw, 64px)", scrollMarginTop: 72 }}>
              <div className="kicker">
                <span className="no">{t.kicker}</span>
                <span className="eyebrow">{t.name}</span>
              </div>
              {t.intro && (
                <p className="lead" style={{ marginTop: 12, fontSize: "1rem" }}>
                  {t.intro}
                </p>
              )}
              <div className="rules" style={{ display: "grid", gap: 16, marginTop: 18 }}>
                {t.cards.map((c) => (
                  <div key={c.rule} className="panel">
                    <h3 style={{ fontFamily: "var(--font-mono)", color: "var(--ink)", fontSize: "1.02rem", marginBottom: 8 }}>
                      {c.rule}
                    </h3>
                    <p style={{ color: "var(--dim)", fontSize: "1rem", lineHeight: 1.6, maxWidth: "68ch" }}>{c.why}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <p className="liveline" style={{ marginTop: "clamp(40px, 6vw, 64px)" }}>
            These aren&rsquo;t a PDF nobody opens — they live next to the components they govern, in the
            system itself.
          </p>
          <p style={{ marginTop: 18 }}>
            <a
              className="cta"
              href="https://catherinebhicks.github.io/vael-design-system/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: 0 }}
            >
              Open the full Storybook →
            </a>
          </p>
          <p style={{ marginTop: 20 }}>
            <Link href="/" style={{ color: "var(--dim)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
              &larr; Back to the case study
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
