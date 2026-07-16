#!/usr/bin/env python3
"""
Vael Icons generator — selects a prioritized subset of FontAwesome Free icons and
emits Figma-ready batches for building the Vael Icons library.

Why this exists: Figma's build tooling can only create an icon from inline SVG
(no fetch, no bulk upload), so every icon placed in Figma costs build budget.
This script picks a sensible top-N (curated UI core -> design-relevant categories
-> major brands), all verified against the local SVG set, and writes:
  - manifest.json         ordered [{weight, name}]  (the source of truth)
  - batches/batch-NN.json {"weight/name": "<minified svg>"}  (fed to Figma)

Add more later:  python3 generate-icons.py --count 800
The full free set (2,883) always lives in ./svgs — nothing is lost by not
placing them all in Figma; re-run with a higher --count (or add names to CORE).

Usage:
  python3 generate-icons.py --count 500          # select + write manifest + batches
  python3 generate-icons.py --count 500 --batch-size 40
"""
import os, re, json, argparse, glob

HERE = os.path.dirname(os.path.abspath(__file__))
SVGS = os.path.join(HERE, "svgs")

# --- essential UI core: always included first, in this order (all solid) ---
CORE = [
    # navigation / chevrons / carets / angles
    "chevron-down","chevron-up","chevron-left","chevron-right",
    "angle-down","angle-up","angle-left","angle-right","angles-right","angles-left",
    "caret-down","caret-up","caret-left","caret-right",
    "arrow-up","arrow-down","arrow-left","arrow-right",
    "arrow-right-long","arrow-left-long","arrow-up-right-from-square","arrow-rotate-right","arrow-rotate-left",
    "arrows-rotate","arrow-right-arrow-left","arrow-up-from-bracket","arrow-down-to-bracket","up-down-left-right",
    # actions
    "plus","minus","xmark","check","check-double","pen","pen-to-square","trash","trash-can","copy","paste",
    "download","upload","share","share-nodes","print","floppy-disk","filter","arrow-up-a-z","arrow-down-a-z",
    "rotate","rotate-right","rotate-left","expand","compress","crop-simple","scissors","clone","link","link-slash",
    "paperclip","magnifying-glass","magnifying-glass-plus","magnifying-glass-minus","sliders","gear","gears","wrench",
    # status / feedback
    "circle-check","circle-info","circle-exclamation","circle-xmark","circle-question","triangle-exclamation",
    "ban","spinner","circle-notch","check-circle","bell","bell-slash","flag","thumbtack",
    # objects (common)
    "user","users","user-group","user-plus","circle-user","address-card","id-card",
    "envelope","envelope-open","calendar","calendar-days","clock","house","house-chimney",
    "eye","eye-slash","lock","lock-open","unlock","key","shield","shield-halved",
    "star","star-half-stroke","heart","bookmark","tag","tags","folder","folder-open","file","file-lines",
    "image","images","video","camera","link","paperclip","location-dot","map","map-pin","phone","comment","comments",
    "thumbs-up","thumbs-down","ellipsis","ellipsis-vertical","bars","bars-staggered","grip","grip-vertical",
    "table","table-cells","table-list","list","list-ul","list-ol","list-check","grid","border-all",
    "circle","square","circle-half-stroke","toggle-on","toggle-off","bolt","fire","lightbulb",
    # media playback
    "play","pause","stop","forward","backward","forward-step","backward-step","volume-high","volume-xmark",
    "circle-play","circle-pause","expand","shuffle","repeat",
    # commerce
    "cart-shopping","bag-shopping","credit-card","dollar-sign","money-bill","receipt","wallet","gift","truck","box",
    # misc common
    "globe","language","font","palette","droplet","sun","moon","cloud","wifi","battery-full","plug",
    "chart-line","chart-bar","chart-pie","chart-simple","calendar-check","clipboard","clipboard-list",
    "circle-half-stroke","arrow-trend-up","arrow-trend-down","rocket","wand-magic-sparkles","robot","code","terminal",
    "quote-left","quote-right","bullhorn","graduation-cap","book","book-open","briefcase","building","location-crosshairs",
]

# --- design-relevant categories, in fill priority order ---
PRIORITY_CATEGORIES = [
    "arrows","editing","text-formatting","media-playback","communication","files","design","coding",
    "business","money","shopping","security","devices-hardware","charts-diagrams","time","toggle",
    "spinners","alerts","accessibility","writing","photos-images","audio","film-video","marketing",
    "users-people","maps","travel-hotel","transportation","logistics","household","weather","education",
    "science","food-beverage","sports-fitness","clothing-fashion","nature","gaming","emoji","holidays",
]

# --- major brands, always included (from brands set) ---
BRANDS = [
    "github","gitlab","linkedin","x-twitter","twitter","facebook","facebook-f","instagram","youtube","tiktok",
    "figma","sketch","dribbble","behance","slack","discord","google","google-drive","apple","microsoft","windows",
    "android","chrome","firefox","safari","aws","docker","react","vuejs","angular","node-js","js","python","html5",
    "css3","sass","npm","wordpress","shopify","stripe","paypal","spotify","medium","dev","stack-overflow","codepen",
    "figma","framer","notion",
]

def load_available():
    avail = {}
    for w in ("solid","regular","brands"):
        d = os.path.join(SVGS, w)
        avail[w] = {os.path.basename(p)[:-4] for p in glob.glob(os.path.join(d,"*.svg"))}
    return avail

def parse_categories():
    cats={}; cur=None; in_icons=False
    for line in open(os.path.join(HERE,"categories.yml")):
        if re.match(r'^[a-z0-9\-]+:\s*$', line):
            cur=line.split(':')[0].strip(); cats.setdefault(cur,[]); in_icons=False
        elif re.match(r'^\s+icons:\s*$', line): in_icons=True
        elif re.match(r'^\s+\w', line) and not re.match(r'^\s+-', line): in_icons=False
        else:
            m=re.match(r'^\s+-\s+([a-z0-9\-]+)\s*$', line)
            if m and in_icons and cur: cats[cur].append(m.group(1))
    return cats

def select(count):
    avail = load_available()
    cats = parse_categories()
    ordered=[]; seen=set()
    def add(weight,name):
        if name in seen: return False
        if name not in avail.get(weight,set()): return False
        ordered.append({"weight":weight,"name":name}); seen.add(name); return True
    # 1) core UI (solid)
    for n in CORE: add("solid",n)
    # 2) fill from priority categories (solid) until count - brands headroom
    brand_budget = min(len(BRANDS), 50)
    target = count - brand_budget
    for cat in PRIORITY_CATEGORIES:
        for n in cats.get(cat,[]):
            if len(ordered) >= target: break
            add("solid",n)
        if len(ordered) >= target: break
    # 3) brands
    for b in BRANDS:
        if len([o for o in ordered]) >= count: break
        add("brands",b)
    # 4) if still short, top up from any remaining solid category icons
    if len(ordered) < count:
        for cat in PRIORITY_CATEGORIES:
            for n in cats.get(cat,[]):
                if len(ordered) >= count: break
                add("solid",n)
            if len(ordered) >= count: break
    return ordered[:count]

def minify_svg(path):
    s=open(path).read()
    s=re.sub(r"<!--.*?-->","",s,flags=re.S)
    s=re.sub(r"\s+"," ",s).strip()
    return s

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--count", type=int, default=500)
    ap.add_argument("--batch-size", type=int, default=40)
    ap.add_argument("--out", default=os.path.join(HERE,"vael-icons"))
    args=ap.parse_args()

    manifest = select(args.count)
    os.makedirs(args.out, exist_ok=True)
    json.dump(manifest, open(os.path.join(args.out,"manifest.json"),"w"), indent=0)

    # emit batches of {"weight/name": svg}
    bdir=os.path.join(args.out,"batches"); os.makedirs(bdir, exist_ok=True)
    for f in glob.glob(os.path.join(bdir,"*.json")): os.remove(f)
    n=0
    for i in range(0, len(manifest), args.batch_size):
        chunk=manifest[i:i+args.batch_size]; obj={}
        for it in chunk:
            p=os.path.join(SVGS, it["weight"], it["name"]+".svg")
            obj[f'{it["weight"]}/{it["name"]}']=minify_svg(p)
        json.dump(obj, open(os.path.join(bdir,f"batch-{n:02d}.json"),"w"))
        n+=1
    print(f"selected {len(manifest)} icons -> {args.out}/manifest.json")
    print(f"emitted {n} batches of <= {args.batch_size} into {bdir}")
    # weight breakdown
    from collections import Counter
    c=Counter(it["weight"] for it in manifest)
    print("by weight:", dict(c))

if __name__=="__main__":
    main()
