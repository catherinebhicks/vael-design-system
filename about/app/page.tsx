import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScrollFX from "@/components/ScrollFX";
import ComponentGallery from "@/components/ComponentGallery";
import ChartGallery from "@/components/ChartGallery";

const swatches = [
  { name: "primary", hex: "#1976d2" },
  { name: "dark", hex: "#1565c0" },
  { name: "light", hex: "#42a5f5" },
  { name: "error", hex: "#d32f2f" },
  { name: "warning", hex: "#ed6c02" },
  { name: "success", hex: "#2e7d32" },
];

export default function Home() {
  return (
    <>
      <ScrollFX />
      <Nav />
      <Hero />

      {/* 2 · THE GAP */}
      <section className="sec">
        <div className="wrap secgrid">
          <div className="sechead reveal">
            <div className="kicker">
              <span className="no">01</span>
              <span className="eyebrow">The gap</span>
            </div>
            <h2 className="big">One designer, a system-sized problem.</h2>
          </div>
          <div className="secbody prose reveal">
            <p>
              Most design systems die in the space between{" "}
              <span className="em">&ldquo;we should have one&rdquo;</span> and{" "}
              <span className="em">&ldquo;someone has to actually build it.&rdquo;</span>
            </p>
            <p>
              The product had grown the way real products do — fast, and a little inconsistent. Three
              blues that didn&rsquo;t quite agree. Buttons with opinions about their own padding. Tables
              built four ways.
            </p>
            <div className="mismatch">
              <div className="b" style={{ background: "#1976d2" }}>#1976d2</div>
              <div className="b" style={{ background: "#1e88e5" }}>#1e88e5</div>
              <div className="b" style={{ background: "#1565c0" }}>#1565c0</div>
            </div>
            <p>
              The fix was obvious: tokens, a component library, real documentation, a way to keep it all
              honest. The catch was just as obvious — that&rsquo;s a team&rsquo;s worth of work, and there
              was no team. There was me, and a six-week cycle.
            </p>
            <div className="bigq">
              So the project became a question:{" "}
              <b>how much of a team&rsquo;s job can one designer actually own, if the cost of production
              falls away?</b>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · HOW I WORKED WITH CLAUDE */}
      <section className="sec">
        <div className="wrap secgrid">
          <div className="sechead reveal">
            <div className="kicker">
              <span className="no">02</span>
              <span className="eyebrow">How I worked with Claude</span>
            </div>
            <h2 className="big">A pair, not an autopilot.</h2>
          </div>
          <div className="secbody prose reveal">
            <p>
              I stopped treating AI like a fancier autocomplete and started treating it like a{" "}
              <span className="em">pair</span>. I set a standard once, and it held that standard across a
              hundred things.
            </p>
            <div className="split">
              <div className="who me">
                <span className="role">I brought</span>
                <h3>The judgment</h3>
                <ul>
                  <li>Taste — what&rsquo;s correct, what ships</li>
                  <li>Clarity — direction from my expertise when Claude was vague or unsure</li>
                  <li>The standards every token and component answers to</li>
                  <li>Accessibility &amp; governance calls</li>
                  <li>The &ldquo;why&rdquo; behind every decision</li>
                </ul>
              </div>
              <div className="who">
                <span className="role">Claude brought</span>
                <h3>The throughput</h3>
                <ul>
                  <li>Speed — a system&rsquo;s worth of output</li>
                  <li>Consistency across hundreds of decisions</li>
                  <li>Perfect recall of the conventions I set</li>
                  <li>A partner that never lost the thread</li>
                </ul>
              </div>
            </div>
            <p className="punch">
              But the surprise wasn&rsquo;t how much it could make. It was{" "}
              <b>where the leverage actually lived.</b>
            </p>
          </div>
        </div>
      </section>

      {/* 4 · WHERE THE LEVERAGE LIVED */}
      <section className="sec">
        <div className="wrap secgrid">
          <div className="sechead reveal">
            <div className="kicker">
              <span className="no">03</span>
              <span className="eyebrow">Where the leverage lived</span>
            </div>
            <h2 className="big">Not in making a button.</h2>
          </div>
          <div className="secbody reveal">
            <p className="lead">
              Anyone can get an AI to make a button. The real leverage was in the infrastructure that
              keeps a system honest — three rungs, each pulling me further out of production.
            </p>
            <div className="rungs">
              <div className="panel">
                <span className="tag">Rung 01 · tokens</span>
                <h3>It started with tokens.</h3>
                <p>
                  A system is only as trustworthy as its tokens. The decision I cared about most
                  wasn&rsquo;t which blue — it was the format: an open W3C standard, not a proprietary
                  blob. One traceable source for color, type, spacing, elevation, motion.
                </p>
                <div className="swrow">
                  {swatches.map((s) => (
                    <div key={s.name} className="sw" style={{ background: s.hex }}>
                      {s.name}
                    </div>
                  ))}
                </div>
                <p className="note">
                  <b>Eight spacing steps, not forty.</b> Restraint on purpose.
                </p>
              </div>
              <div className="panel">
                <span className="tag">Rung 02 · theme</span>
                <h3>Then the theme generated itself.</h3>
                <p>
                  A value changed in Figma, flowed through Supernova into the token source, and
                  regenerated the theme the product used. Nobody ever retyped a hex code.
                </p>
                <div className="codeblk">
                  <span className="cm">{"// generated file — do not edit manually"}</span>
                  <br />
                  <span className="key">primary</span>: {"{"}
                  <br />
                  {"  "}
                  <span className="key">main</span>: <span className="str">&quot;#1976d2&quot;</span>,{" "}
                  <span className="cm">{"// token: primary/main"}</span>
                  <br />
                  {"  "}
                  <span className="key">dark</span>: <span className="str">&quot;#1565c0&quot;</span>,{" "}
                  <span className="cm">{"// token: primary/dark"}</span>
                  <br />
                  {"}"}
                </div>
              </div>
              <div className="panel">
                <span className="tag">Rung 03 · docs</span>
                <h3>Then the docs wrote themselves.</h3>
                <p>
                  Instead of writing pages, Claude and I built the machine that generated them — a build
                  script (<span className="mono" style={{ color: "var(--blue)" }}>build.py</span>, ~485
                  lines) that turned source files into every page and kept them in lockstep with the code.
                  Then I went through and refined Claude&rsquo;s output for consistency and clarity, based on
                  the intended final use case and audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · WHAT AI COULDN'T DO */}
      <section className="sec">
        <div className="wrap secgrid">
          <div className="sechead reveal">
            <div className="kicker">
              <span className="no">04</span>
              <span className="eyebrow">What AI couldn&rsquo;t do</span>
            </div>
            <h2 className="big">The decisions were the whole job.</h2>
          </div>
          <div className="secbody prose reveal">
            <p>
              All that throughput only mattered because the decisions stayed mine — and the less time I
              spent typing, the more visible they got.
            </p>
            <div className="pillars">
              <div className="pillar">
                <h3>Taste</h3>
                <p>
                  Which three blues became one — and why the spacing scale stops at{" "}
                  <b>eight steps, not forty</b>, and a chart never shows more than four series. Restraint is
                  the system, not a limit on it.
                </p>
              </div>
              <div className="pillar">
                <h3>Accessibility</h3>
                <p>
                  I hand-audited each component against WCAG, then ran the Storybook a11y addon as a second
                  pass. <b>AA by choice, not AAA</b> — 7:1 contrast would break the semantic palette — and I
                  named what&rsquo;s still unaudited instead of hiding it.
                </p>
              </div>
              <div className="pillar">
                <h3>Governance</h3>
                <p>
                  <b>Two reviewers on every change — one design, one engineering</b> — and nothing enters the
                  system just because it&rsquo;s a variation of something already in it. A system without
                  governance rots.
                </p>
              </div>
              <div className="pillar">
                <h3>The &ldquo;why&rdquo;</h3>
                <p>
                  Every call has a <b>written decision record</b> — why AA over AAA, why a metric&rsquo;s
                  color is permanent once assigned (change one and you break recognition across every
                  historical chart). The reasons are what the next person actually needs.
                </p>
              </div>
            </div>
            <p className="aside">
              Claude was only ever as good as the standards I set — the bottleneck was never its speed. It
              was my judgment.{" "}
              <b>Which is exactly where a designer&rsquo;s time should go.</b>
            </p>
            <p className="liveline">
              None of this was improvised — every rule, and the reasoning behind it, lives on one page.{" "}
              <Link className="cta" href="/principles" style={{ marginLeft: 8, verticalAlign: "middle" }}>
                Read the rulebook &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 7 · AND THEN IT WAS SHELVED */}
      <section className="sec shelved">
        <div className="wrap secgrid">
          <div className="sechead reveal">
            <div className="kicker">
              <span className="no">05</span>
              <span className="eyebrow">And then it was shelved</span>
            </div>
            <h2>I took it all the way to a handoff.</h2>
          </div>
          <div className="secbody reveal">
            <p>
              The system built, plus a rollout scoped for the engineering team — everything ready for the
              cycle that would put it into the product.
            </p>
            <div className="handoff">
              <span className="hc"><span className="n">17</span> Shape Up pitches</span>
              <span className="hc"><span className="n">145</span> tickets</span>
              <span className="hc">ready for an engineering cycle</span>
            </div>
            <p>Then priorities shifted, and it was shelved before that cycle ever ran.</p>
            <p className="kick">
              This is where most of these stories quietly end.{" "}
              <span className="sig">I couldn&rsquo;t accept that.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 8 · REBUILT IN THE OPEN */}
      <section className="sec rebuilt">
        <div className="wrap secgrid">
          <div className="sechead reveal">
            <div className="kicker">
              <span className="no">06</span>
              <span className="eyebrow">Rebuilt in the open</span>
            </div>
            <h2 className="big">I wasn&rsquo;t going to let it die in a backlog.</h2>
          </div>
          <div className="secbody prose reveal">
            <p>
              So I carried it forward on my own — off the clock, with no one to hand it to — and rebuilt it
              clean, this time to be <span className="em">shown</span>. I re-authored a fresh theme and
              deliberately traded the internal generator for Storybook, so every component is live,
              interactive, and documented in one place.
            </p>
            <p className="liveline">
              The system isn&rsquo;t a screenshot in a case study. It&rsquo;s a live library you can open right now.
            </p>
            <ComponentGallery />
            <div className="showbar">
              <div className="m">
                <div className="n">
                  <span className="count" data-to="27">0</span>
                  <span className="ar">→</span>
                  <span className="count" data-to="44">0</span>
                </div>
                <div className="l">components</div>
              </div>
              <div className="m">
                <div className="n">MUI v7</div>
                <div className="l">+ MUI X</div>
              </div>
              <div className="m">
                <div className="n">Highcharts</div>
                <div className="l">charting layer</div>
              </div>
              <div className="m">
                <div className="n">
                  <a
                    href="https://6a46b2b4b5af28117f0804b1-bceecfravd.chromatic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid var(--blue)" }}
                  >
                    Chromatic
                  </a>
                </div>
                <div className="l">visual regression</div>
              </div>
              <a
                className="cta"
                href="https://catherinebhicks.github.io/vael-design-system/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the full Storybook →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9 · EVEN THE CHARTS */}
      <section className="sec">
        <div className="wrap secgrid">
          <div className="sechead reveal">
            <div className="kicker">
              <span className="no">07</span>
              <span className="eyebrow">Even the charts</span>
            </div>
            <h2 className="big">The surface most systems give up on.</h2>
          </div>
          <div className="secbody prose reveal">
            <p>
              Data visualization is where design systems quietly break. Components are easy to keep
              coherent; charts are where a team reaches for whatever library is handy and inherits its
              palette, its type, its conventions &mdash; a second design language bolted onto the first. I
              wasn&rsquo;t going to let the charts be the exception.
            </p>
            <p>
              So I didn&rsquo;t fork a charting engine to match the system, and I didn&rsquo;t hand-roll SVG.
              I took <span className="mono" style={{ color: "var(--blue)" }}>Highcharts</span> in styled mode
              and themed it completely &mdash; every chart reads the live theme as it renders, so it pulls
              its color, type, and ink from the same tokens as everything else and flips light and dark with
              the rest of the library. Same gallery, same tokens; a different kind of component.
            </p>
            <ChartGallery />
            <p className="liveline">
              Real Highcharts, themed to the system &mdash; not screenshots. A chart can&rsquo;t drift out of
              the system, because it was never outside it.{" "}
              <Link className="cta" href="/chart-layer" style={{ marginLeft: 8, verticalAlign: "middle" }}>
                See how it works &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 10 · CLOSE + FOOTER */}
      <section className="sec close">
        <div className="wrap secgrid">
          <div className="sechead reveal">
            <div className="kicker">
              <span className="no">08</span>
              <span className="eyebrow">Where it landed</span>
            </div>
          </div>
          <div className="secbody reveal">
            <p className="statement">
              A production design system, built with AI in a six-week cycle — then carried forward solo,
              expanded to 44 components, and <span className="sig">rebuilt in the open.</span>
            </p>
            <p className="closer">
              This isn&rsquo;t a story about AI replacing design work. It&rsquo;s the opposite. AI took
              everything that <b>wasn&rsquo;t</b> design off my plate — and left me with the part I was
              responsible for.
            </p>
            <div className="disclosure">
              <div className="dl">How AI was used here</div>
              <p>
                Claude generated tokens, components, and tooling under standards I set and edited — first
                for the production system, then again as I rebuilt it into Vael. The design decisions —
                what&rsquo;s correct, what ships, what&rsquo;s accessible — were mine.
              </p>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="sitefooter">
            <span>
              Designed &amp; built by <b style={{ color: "var(--ink)" }}>Catherine Hicks</b>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/catherinebhicks"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {" · "}
              <a href="mailto:catherine@afocuseddesign.com?subject=Vael%20Design%20System%20Case%20Study%20Contact">
                Contact
              </a>
              {" · "}© 2026
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
