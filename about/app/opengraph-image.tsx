import { ImageResponse } from "next/og";

export const alt = "Vael — a design system, built with AI in the loop";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadPlexMono(): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600")
    ).text();
    const url = css.match(/src:\s*url\((https:[^)]+)\)\s*format/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const font = await loadPlexMono();
  const family = font ? "IBM Plex Mono" : "monospace";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0e14",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 92px",
          fontFamily: family,
          backgroundImage:
            "linear-gradient(90deg, #16202e 1px, transparent 1px), linear-gradient(#16202e 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", gap: 12, marginBottom: 34 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "#1976d2" }} />
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "#ff6a4d" }} />
        </div>
        <div style={{ display: "flex", fontSize: 150, color: "#fff", letterSpacing: "-8px", lineHeight: 1 }}>
          Vael<span style={{ color: "#42a5f5" }}>_</span>
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#93a2b8", marginTop: 30, maxWidth: 820 }}>
          A design system, built with AI in the loop.
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#5a6b82", marginTop: 44, letterSpacing: "1px" }}>
          27 → 44 components · 80+ doc pages · one designer
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "IBM Plex Mono", data: font, weight: 600 as const, style: "normal" as const }] : [],
    }
  );
}
