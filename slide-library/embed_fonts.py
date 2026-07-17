#!/usr/bin/env python3
"""Fetch IBM Plex (Sans 400/500/600/700, Mono 400/500/600) latin woff2 from
Google Fonts and emit self-contained @font-face rules with base64 data URIs,
so the slide library renders correctly inside Claude Design's sandbox (which
blocks the external @import)."""
import urllib.request, base64, re

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
CSS_URL = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"

def fetch(url, binary=False):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read() if binary else r.read().decode("utf-8")

css = fetch(CSS_URL)
# split into (leading-comment, @font-face block)
blocks = re.findall(r"/\*\s*([^*]+?)\s*\*/\s*(@font-face\s*\{[^}]*\})", css)
out = []
kept = 0
for label, block in blocks:
    if label.strip() != "latin":
        continue  # keep only the latin subset to stay small
    fam = re.search(r"font-family:\s*'([^']+)'", block).group(1)
    wght = re.search(r"font-weight:\s*(\d+)", block).group(1)
    url = re.search(r"src:\s*url\(([^)]+)\)\s*format\('woff2'\)", block).group(1)
    data = fetch(url, binary=True)
    b64 = base64.b64encode(data).decode("ascii")
    out.append(
        f"@font-face{{font-family:'{fam}';font-style:normal;font-weight:{wght};"
        f"font-display:swap;src:url(data:font/woff2;base64,{b64}) format('woff2');}}"
    )
    kept += 1
    print(f"embedded {fam} {wght}  ({len(data)//1024} KB)")

with open("fonts-embedded.css", "w") as f:
    f.write("/* IBM Plex — self-hosted (latin), embedded for Claude Design sandbox */\n")
    f.write("\n".join(out) + "\n")
print(f"wrote fonts-embedded.css with {kept} faces")
