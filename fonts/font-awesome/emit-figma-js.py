#!/usr/bin/env python3
"""Emit complete use_figma build code (data + logic) per batch, so the SVG data
is embedded accurately (never hand-transcribed). Output: vael-icons/figma-js/build-NN.js
Each file is passed verbatim as the `code` arg of use_figma against the Vael Icons file."""
import os, json, glob

HERE=os.path.dirname(os.path.abspath(__file__))
BATCHES=os.path.join(HERE,"vael-icons","batches")
OUT=os.path.join(HERE,"vael-icons","figma-js")
os.makedirs(OUT, exist_ok=True)
for f in glob.glob(os.path.join(OUT,"*.js")): os.remove(f)

LOGIC = r'''
// --- build one batch of Vael icons ---
const PAGE_NAME = "__PAGE__";
let page = figma.root.children.find(p=>p.name===PAGE_NAME);
if(!page){ page=figma.createPage(); page.name=PAGE_NAME; }
await figma.setCurrentPageAsync(page);
// find where to continue laying out (below existing content)
let baseY = 40;
for(const c of page.children){ baseY = Math.max(baseY, c.y + c.height + 8); }
const per = 16, gap = 44;
let i = 0; const made = {};
for(const [key, svg] of Object.entries(SVGS)){
  const node = figma.createNodeFromSvg(svg);
  const s = 24/Math.max(node.width, node.height);
  node.rescale(s);
  node.findAll(n => n.type!=="FRAME" && "fills" in n && Array.isArray(n.fills) && n.fills.length)
      .forEach(v => { v.fills = [{type:"SOLID", color:{r:0.102,g:0.102,b:0.114}}]; });
  const c = figma.createComponent();
  c.resize(24,24); c.name = key; c.fills = [];
  c.appendChild(node);
  node.x = (24 - node.width)/2; node.y = (24 - node.height)/2;
  c.x = 40 + (i%per)*gap;
  c.y = baseY + Math.floor(i/per)*gap;
  made[key] = c.key; i++;
}
return { built: i, page: page.id, firstKeys: Object.keys(made).slice(0,3), keys: made };
'''

for bf in sorted(glob.glob(os.path.join(BATCHES,"batch-*.json"))):
    n = os.path.basename(bf).replace("batch-","").replace(".json","")
    data = json.load(open(bf))
    page = "Icons"
    js = "const SVGS = " + json.dumps(data) + ";\n" + LOGIC.replace("__PAGE__", page)
    open(os.path.join(OUT, f"build-{n}.js"), "w").write(js)
print("emitted", len(glob.glob(os.path.join(OUT,'*.js'))), "build files to", OUT)
