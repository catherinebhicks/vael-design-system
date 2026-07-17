#!/usr/bin/env python3
"""Native-EDITABLE Vael slide-library template.

Each of the 14 templates becomes a real PowerPoint slide: grid-paper background
image (for the Blueprint look) with native editable text boxes + image-slot
rectangles on top. Team duplicates the slide they want and types over the text.
Positions map the HTML layout (1280x720 px) to EMU at 1px = 9525 EMU (96 dpi).
Fonts: install IBM Plex Sans + IBM Plex Mono (free, Google Fonts) for exact match.
"""
import os
from pptx import Presentation
from pptx.util import Emu, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml.ns import qn
from pptx.chart.data import CategoryChartData
from pptx.enum.chart import XL_CHART_TYPE

HERE = os.path.dirname(__file__)
REN = os.path.join(HERE, "render")
PX = 9525  # EMU per CSS px at 96 dpi

# Blueprint tokens
INK=RGBColor(0x14,0x1c,0x28); DIM=RGBColor(0x54,0x63,0x7a); FAINT=RGBColor(0x58,0x67,0x80)
BLUE=RGBColor(0x15,0x65,0xc0); BLUE2=RGBColor(0x19,0x76,0xd2); BLUESOFT=RGBColor(0x42,0xa5,0xf5)
SIGNAL=RGBColor(0xb8,0x40,0x1b); SUCCESS=RGBColor(0x2e,0x7d,0x32)
PANEL=RGBColor(0xff,0xff,0xff); LINE2=RGBColor(0xc4,0xd3,0xe6); PANEL2=RGBColor(0xf4,0xf8,0xff)
SLOTBG=RGBColor(0xe9,0xef,0xf7)
MONO="IBM Plex Mono"; SANS="IBM Plex Sans"

prs = Presentation()
prs.slide_width = Emu(1280*PX); prs.slide_height = Emu(720*PX)
BLANK = prs.slide_layouts[6]

def slide(accent=False):
    s = prs.slides.add_slide(BLANK)
    bg = os.path.join(REN, "blank-accent.png" if accent else "blank-base.png")
    pic = s.shapes.add_picture(bg, 0, 0, width=prs.slide_width, height=prs.slide_height)
    s.shapes._spTree.remove(pic._element); s.shapes._spTree.insert(2, pic._element)
    return s

def text(s, x, y, w, h, runs, size, color, font=SANS, bold=False, spacing=None,
         align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.TOP, line=1.1, upper=False):
    """runs: str OR list of (text,color|None,bold|None) tuples for mixed styling."""
    tb = s.shapes.add_textbox(Emu(x*PX), Emu(y*PX), Emu(w*PX), Emu(h*PX))
    tf = tb.text_frame; tf.word_wrap = True; tf.vertical_anchor = anchor
    tf.margin_left=0; tf.margin_right=0; tf.margin_top=0; tf.margin_bottom=0
    p = tf.paragraphs[0]; p.alignment = align
    try: p.line_spacing = line
    except Exception: pass
    if isinstance(runs, str): runs = [(runs, color, bold)]
    for t, c, b in runs:
        r = p.add_run(); r.text = (t.upper() if upper else t)
        f = r.font; f.name = font; f.size = Pt(size)
        f.color.rgb = c if c is not None else color
        f.bold = bold if b is None else b
        if spacing is not None:  # letter-spacing in points -> EMU (1pt=12700)
            rPr = r._r.get_or_add_rPr(); rPr.set('spc', str(int(spacing*100)))
    return tb

def rect(s, x, y, w, h, fill, line_color=None, radius=True, dashed=False):
    shp = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE if radius else MSO_SHAPE.RECTANGLE,
                             Emu(x*PX), Emu(y*PX), Emu(w*PX), Emu(h*PX))
    shp.shadow.inherit = False
    if fill is None: shp.fill.background()
    else: shp.fill.solid(); shp.fill.fore_color.rgb = fill
    if line_color is None: shp.line.fill.background()
    else:
        shp.line.color.rgb = line_color; shp.line.width = Pt(1)
        if dashed:
            ln = shp.line._get_or_add_ln(); d = ln.makeelement(qn('a:prstDash'), {'val':'dash'}); ln.append(d)
    return shp

def slot(s, x, y, w, h, label):
    rect(s, x, y, w, h, SLOTBG, LINE2, radius=True, dashed=True)
    text(s, x, y+h/2-14, w, 28, label, 12, FAINT, MONO, align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)

def ishape(s, shape, x, y, w, h, fill, line_color=None, lw=1.5):
    """Native vector icon — no font-glyph dependency (IBM Plex lacks ◆◎●○ etc.)."""
    shp = s.shapes.add_shape(shape, Emu(int(x*PX)), Emu(int(y*PX)), Emu(int(w*PX)), Emu(int(h*PX)))
    shp.shadow.inherit = False
    if fill is None: shp.fill.background()
    else: shp.fill.solid(); shp.fill.fore_color.rgb = fill
    if line_color is None: shp.line.fill.background()
    else: shp.line.color.rgb = line_color; shp.line.width = Pt(lw)
    return shp

# ---- Material Icons (installed system font) — codepoints; PowerPoint renders these
# by codepoint (ligature names would NOT render). Requires Material Icons installed. ----
MAT = "Material Icons"
MI = dict(center_focus_strong=0xE3B4, verified=0xEF76, bolt=0xEA0B, content_cut=0xE14E,
          fact_check=0xF0C5, schedule=0xE8B5, sync=0xE627, auto_awesome=0xE65F, track_changes=0xE8E1,
          check_circle=0xE86C, circle=0xEF4A, contrast=0xEB37, radio_button_unchecked=0xE836,
          star=0xE838, mail=0xE158, language=0xE894, trending_up=0xE8E5, arrow_forward=0xE5C8,
          east=0xF1DF, cancel=0xE5C9, add=0xE145, info=0xE88E, check=0xE5CA)
def micon(s, x, y, box, name, color, pt, anchor=MSO_ANCHOR.MIDDLE):
    """Place a Material Icons glyph centered in a box (px), color, size (pt)."""
    text(s, x, y, box, box, chr(MI[name]), pt, color, MAT, align=PP_ALIGN.CENTER, anchor=anchor)

def eyebrow(s, y, idx, label, x=96):
    if idx:
        text(s, x, y, 60, 30, idx, 18, BLUE2, MONO, bold=True)
        x += 46
    text(s, x, y, 700, 30, label, 14.25, BLUE2, MONO, spacing=3, upper=True)

# ---- 01 Cover ---------------------------------------------------------------
s = slide()
eyebrow(s, 84, None, "Case Study")
text(s, 96, 300, 1000, 90, "NetBase Pro", 45, INK, MONO, bold=True, spacing=-1)
text(s, 96, 402, 820, 90, "Turning real-time social listening into decisions product teams actually trust.", 19.5, DIM, SANS, line=1.4)
rect(s, 96, 636, 1088, 0.5, LINE2, radius=False)
for i,(k,v) in enumerate([("ROLE","Lead Product Designer"),("TIMELINE","2019 · 14 weeks"),("CLIENT","NetBase Solutions")]):
    xx = 96 + i*300
    text(s, xx, 654, 280, 20, k, 9.75, FAINT, MONO, spacing=2)
    text(s, xx, 678, 280, 26, v, 14.25, INK, SANS, bold=True)

# ---- 02 Project meta --------------------------------------------------------
s = slide()
eyebrow(s, 72, "01", "Overview")
text(s, 96, 116, 900, 70, "The engagement", 39, INK, MONO, bold=True, spacing=-1)
cells=[("ROLE","Lead Product Designer"),("TEAM","2 designers · 5 eng · 1 PM"),("TIMELINE","14 weeks · 2019"),
       ("PLATFORM","Responsive web app"),("TOOLS","Figma · Maze · Dovetail"),("SCOPE","Research → UI → handoff")]
cw,ch,gx,gy=336,120,28,28
for i,(k,v) in enumerate(cells):
    cx=96+(i%3)*(cw+gx); cy=232+(i//3)*(ch+gy)
    rect(s, cx, cy, cw, ch, PANEL, LINE2)
    text(s, cx+26, cy+22, cw-52, 20, k, 9.75, FAINT, MONO, spacing=2)
    text(s, cx+26, cy+50, cw-52, 50, v, 14.25, INK, SANS, bold=True, line=1.3)

# ---- 03 Section divider -----------------------------------------------------
s = slide(accent=True)
eyebrow(s, 150, None, "Part two")
text(s, 90, 178, 600, 200, "02", 150, BLUESOFT, MONO, bold=True, spacing=-4)
text(s, 96, 392, 1000, 80, "Research & discovery", 45, INK, MONO, bold=True, spacing=-1)
text(s, 96, 486, 720, 80, "Eleven analyst interviews and a competitive teardown of the social-listening landscape.", 18, DIM, SANS, line=1.4)

# ---- 04 Statement / pull quote ---------------------------------------------
s = slide()
rect(s, 96, 250, 6, 300, SIGNAL, radius=False)
text(s, 136, 250, 900, 220,
     [("“The redesign didn't just look better — it ", INK, None),
      ("cut our reporting time from a day to an hour.", SIGNAL, None), ("”", INK, None)],
     33, INK, MONO, line=1.2)
text(s, 136, 470, 700, 40, "— VP of Insights, NetBase Solutions", 15, DIM, MONO)

# ---- 05 Text + image --------------------------------------------------------
s = slide()
eyebrow(s, 150, "03", "The challenge")
text(s, 96, 196, 560, 130, "Analysts drowned in signal", 30, INK, MONO, bold=True, spacing=-1, line=1.05)
text(s, 96, 300, 520, 110, "Brand teams tracked millions of conversations a day, but the old dashboard buried the one number that mattered under twelve that didn't.", 15.75, DIM, SANS, line=1.5)
for i,b in enumerate(["Insights took hours to assemble by hand","No shared view between analysts and executives","Alerts fired late — after the story had already broken"]):
    by=430+i*46
    rect(s, 96, by+6, 10, 10, BLUE2, radius=False)
    text(s, 122, by, 470, 42, b, 15, INK, SANS, line=1.3)
# browser frame + slot (right)
rect(s, 690, 210, 494, 320, PANEL, LINE2)
rect(s, 690, 210, 494, 52, PANEL, LINE2)
text(s, 760, 226, 380, 22, "app.netbase.com / dashboard", 11, FAINT, MONO)
for i,c in enumerate([RGBColor(0xf0,0xc0,0xb2),RGBColor(0xf0,0xdc,0xb2),RGBColor(0xc2,0xd9,0xc4)]):
    rect(s, 712+i*20, 230, 11, 11, c)
slot(s, 690, 262, 494, 268, "Replace with screenshot · 16:10")

# ---- 06 Metric callout 3-up -------------------------------------------------
s = slide()
eyebrow(s, 150, "07", "Impact")
text(s, 96, 196, 900, 70, "What the redesign moved", 39, INK, MONO, bold=True, spacing=-1)
stats=[("NEW ENTERPRISE USERS","15",None,"↑ first quarter"),
       ("ACCOUNTS UPGRADED","8",None,"↑ +2 recovered sales"),
       ("TASK SUCCESS RATE","43","%","up from 19% first-click")]
cw2=336;
for i,(lab,val,unit,foot) in enumerate(stats):
    cx=96+i*(cw2+28); cy=320
    rect(s, cx, cy, cw2, 200, PANEL, LINE2)
    text(s, cx+30, cy+28, cw2-60, 20, lab, 9.75, FAINT, MONO, spacing=2)
    runs=[(val, INK, None)] + ([(unit, DIM, None)] if unit else [])
    text(s, cx+30, cy+56, cw2-60, 70, runs, 42, INK, MONO, bold=True)
    up = foot.startswith("↑")
    if up:
        micon(s, cx+30, cy+149, 18, "trending_up", SUCCESS, 12)
        text(s, cx+52, cy+150, cw2-82, 30, foot.replace("↑ ",""), 12, SUCCESS, SANS, bold=True)
    else:
        text(s, cx+30, cy+150, cw2-60, 30, foot, 12, DIM, SANS)

# ---- 07 Closing -------------------------------------------------------------
s = slide()
eyebrow(s, 84, None, "Thank you", x=96);
# recolor the eyebrow to signal
text(s, 96, 300, 1000, 90, "Let's build the next one.", 48, INK, MONO, bold=True, spacing=-1)
micon(s, 96, 410, 22, "mail", BLUE, 14, anchor=MSO_ANCHOR.TOP)
text(s, 122, 410, 420, 40, "catherine@afocuseddesign.com", 15, BLUE, MONO)
micon(s, 470, 410, 22, "language", BLUE, 14, anchor=MSO_ANCHOR.TOP)
text(s, 496, 410, 360, 40, "afocuseddesign.com", 15, BLUE, MONO)
rect(s, 96, 636, 1088, 0.5, LINE2, radius=False)
for i,(k,v) in enumerate([("DESIGNER","Catherine Hicks"),("STUDIO","A Focused Design Studio")]):
    xx=96+i*300
    text(s, xx, 654, 340, 20, k, 9.75, FAINT, MONO, spacing=2)
    text(s, xx, 678, 340, 26, v, 14.25, INK, SANS, bold=True)

# ---- 08 Before / after ------------------------------------------------------
s = slide()
eyebrow(s, 72, "05", "The redesign")
text(s, 96, 116, 900, 70, "From cluttered to decisive", 39, INK, MONO, bold=True, spacing=-1)
for i,(lab,cap,after) in enumerate([("BEFORE","Twelve equally-weighted widgets, no clear entry point.",False),
                                    ("AFTER","One headline metric, drill-down on demand.",True)]):
    cx=96+i*544
    accent = BLUE2 if after else FAINT
    rect(s, cx, 226, 10, 10, accent)
    text(s, cx+22, 220, 300, 22, lab, 11, accent, MONO, spacing=2)
    rect(s, cx, 256, 494, 250, PANEL, LINE2)
    rect(s, cx, 256, 494, 44, PANEL, LINE2)
    slot(s, cx, 300, 494, 206, "Screenshot")
    text(s, cx, 520, 494, 40, cap, 12.75, DIM, SANS, line=1.4)

# ---- 09 Feature deep-dive (image left) --------------------------------------
s = slide()
rect(s, 96, 200, 560, 320, PANEL, LINE2)
rect(s, 96, 200, 560, 52, PANEL, LINE2)
text(s, 166, 216, 400, 22, "app.netbase.com / compare", 11, FAINT, MONO)
slot(s, 96, 252, 560, 268, "Feature screenshot · 16:10")
rect(s, 700, 214, 150, 34, PANEL2, LINE2)
micon(s, 712, 221, 20, "auto_awesome", BLUE, 12)
text(s, 736, 222, 130, 20, "FEATURE 03", 10.5, BLUE, MONO, spacing=1)
text(s, 700, 268, 484, 120, "Side-by-side Compare", 33, INK, MONO, bold=True, spacing=-1, line=1.05)
text(s, 700, 372, 470, 90, "Analysts pit up to four brands against each other on the same axes — the feature that closed the most enterprise deals.", 15.75, DIM, SANS, line=1.5)
for i,b in enumerate(["Drag any metric onto the shared axis","Snapshot to a shareable report in one click","Saved comparisons sync across the team"]):
    by=474+i*38
    rect(s, 700, by+6, 9, 9, BLUE2, radius=False)
    text(s, 724, by, 460, 34, b, 13.5, INK, SANS)

# ---- 10 Process / timeline --------------------------------------------------
s = slide()
eyebrow(s, 120, "04", "How we worked")
text(s, 96, 166, 900, 70, "Four phases, fourteen weeks", 39, INK, MONO, bold=True, spacing=-1)
steps=[("WEEKS 1–3","Discover","11 analyst interviews + competitive teardown."),
       ("WEEKS 4–6","Define","IA, job stories, and the new metric hierarchy."),
       ("WEEKS 7–11","Design","Wireframes → hi-fi, tested in two Maze rounds."),
       ("WEEKS 12–14","Deliver","Spec, component handoff, and launch support.")]
colw=272; y0=352
rect(s, 106, y0+8, 3*colw, 3, LINE2, radius=False)  # track
for i,(num,title,desc) in enumerate(steps):
    cx=96+i*colw
    rect(s, cx, y0, 20, 20, PANEL, BLUE2)  # node
    text(s, cx, y0+42, colw-30, 20, num, 9.75, BLUE, MONO, spacing=1)
    text(s, cx, y0+66, colw-30, 30, title, 16.5, INK, MONO, bold=True)
    text(s, cx, y0+100, colw-40, 90, desc, 12.75, DIM, SANS, line=1.4)

# ---- 11 Metrics + quote -----------------------------------------------------
s = slide()
eyebrow(s, 150, "07", "Outcome")
for i,(lab,val,unit,foot) in enumerate([("REPORTING TIME","1"," day → 1 hr","↑ 8× faster"),
                                        ("NEW ENTERPRISE ACCOUNTS","15",None,"↑ first two quarters")]):
    cy=220+i*150
    rect(s, 96, cy, 560, 130, PANEL, LINE2)
    text(s, 122, cy+24, 500, 20, lab, 9.75, FAINT, MONO, spacing=2)
    runs=[(val, INK, None)] + ([(unit, DIM, None)] if unit else [])
    text(s, 122, cy+48, 500, 50, runs, 34, INK, MONO, bold=True)
    micon(s, 122, cy+99, 18, "trending_up", SUCCESS, 12, anchor=MSO_ANCHOR.TOP)
    text(s, 144, cy+100, 480, 24, foot.replace("↑ ",""), 11, SUCCESS, SANS, bold=True)
rect(s, 720, 250, 6, 240, BLUE2, radius=False)
text(s, 760, 250, 420, 200, [("“It ", INK, None),("cut our reporting time from a day to an hour.", BLUE2, None),("”", INK, None)], 27, INK, MONO, line=1.2)
text(s, 760, 452, 400, 30, "— VP of Insights, NetBase", 15, DIM, MONO)

# ---- 12 Screenshot grid 2x2 -------------------------------------------------
s = slide()
eyebrow(s, 72, "06", "The system")
text(s, 96, 116, 900, 70, "One language, every surface", 39, INK, MONO, bold=True, spacing=-1)
labels=["Dashboard","Compare view","Alerts","Report export"]
gw=(1088-24)/2; gh=(460-24)/2
for i,l in enumerate(labels):
    gx=96+(i%2)*(gw+24); gy=232+(i//2)*(gh+24)
    slot(s, gx, gy, gw, gh, l)

# ---- 13 Persona -------------------------------------------------------------
s = slide()
eyebrow(s, 72, "03", "Who we designed for")
text(s, 96, 116, 900, 70, "The insights analyst", 39, INK, MONO, bold=True, spacing=-1)
rect(s, 96, 232, 300, 240, PANEL, LINE2)
av=s.shapes.add_shape(MSO_SHAPE.OVAL, Emu((96+102)*PX), Emu(264*PX), Emu(96*PX), Emu(96*PX))
av.fill.solid(); av.fill.fore_color.rgb=BLUESOFT; av.line.fill.background(); av.shadow.inherit=False
text(s, 96+102, 292, 96, 40, "MR", 26, PANEL, MONO, bold=True, align=PP_ALIGN.CENTER)
text(s, 96, 378, 300, 30, "Maya R.", 18, INK, MONO, bold=True, align=PP_ALIGN.CENTER)
text(s, 96, 410, 300, 40, "Senior Insights Analyst · Global CPG brand", 12, DIM, SANS, align=PP_ALIGN.CENTER, line=1.3)
cols=[("GOALS",["Spot a trend before the news cycle does","Ship a board-ready read by Monday","Defend every number with a source"]),
      ("FRUSTRATIONS",["Rebuilds the same report every week","Exports break formatting in the deck","Alerts arrive after the moment passes"])]
for i,(h,items) in enumerate(cols):
    cx=444+i*380
    text(s, cx, 240, 340, 20, h, 10.5, BLUE, MONO, spacing=1)
    for j,it in enumerate(items):
        iy=280+j*54
        rect(s, cx, iy+6, 8, 8, BLUESOFT, radius=False)
        text(s, cx+20, iy, 320, 50, it, 13.5, INK, SANS, line=1.3)

# ---- 14 Research summary ----------------------------------------------------
s = slide()
eyebrow(s, 72, "02", "What we learned")
text(s, 96, 116, 1000, 130, "Three findings that shaped everything", 39, INK, MONO, bold=True, spacing=-1, line=1.05)
chips=["11 interviews","15-platform teardown","First-click test · n=9"]
cx=96
for c in chips:
    w=len(c)*8.5+40
    rect(s, cx, 250, w, 36, PANEL2, LINE2)
    text(s, cx+18, 258, w, 20, c, 10.5, BLUE, MONO, spacing=1)
    cx+=w+12
finds=[("01","Analysts trusted a number only when they could see its source in one click."),
       ("02","The weekly report was rebuilt by hand — the same steps, every single Monday."),
       ("03","Executives wanted one headline, not a wall of equally-weighted widgets."),
       ("04","Late alerts were worse than none — they arrived after the story had broken.")]
for i,(n,t) in enumerate(finds):
    fx=96+(i%2)*544; fy=340+(i//2)*130
    text(s, fx, fy, 60, 40, n, 22, BLUESOFT, MONO, bold=True)
    text(s, fx+62, fy, 440, 90, t, 15, INK, SANS, line=1.4)

# ============================ ADDITIONAL 10 TEMPLATES ========================
def card_row(s, items, y, h, builder):
    n=len(items); gap=28; cw=(1088-gap*(n-1))/n
    for i,it in enumerate(items):
        cx=96+i*(cw+gap); rect(s, cx, y, cw, h, PANEL, LINE2); builder(s, cx, cw, it)

# ---- 15 Goals ----
s = slide()
eyebrow(s, 72, "02", "The goal")
text(s, 96, 112, 780, 130, "Make the one number that matters impossible to miss.", 30, INK, MONO, bold=True, spacing=-1, line=1.1)
for i,(k,v) in enumerate([("SPEED","Cut weekly reporting from a day to under an hour."),
                          ("TRUST","Every metric traceable to its source in one click."),
                          ("ADOPTION","Win 10+ enterprise accounts in two quarters.")]):
    cx=96+i*360
    rect(s, cx, 372, 336, 150, PANEL, LINE2); rect(s, cx, 372, 6, 150, BLUE2, radius=False)
    text(s, cx+28, 396, 300, 20, k, 9.75, BLUE, MONO, spacing=2)
    text(s, cx+28, 426, 292, 90, v, 14.25, INK, SANS, line=1.35)

# ---- 16 Design principles ----
s = slide()
eyebrow(s, 72, "03", "What I designed against")
text(s, 96, 116, 900, 70, "Three principles", 39, INK, MONO, bold=True, spacing=-1)
for i,(ic,h,p) in enumerate([("center_focus_strong","Signal over noise","Every screen answers one question first. Everything else earns its place or gets cut."),
                          ("verified","Trust every number","No metric appears without a one-click path to the data behind it."),
                          ("bolt","Fast by default","The common read takes zero setup. Depth is available, never required.")]):
    cx=96+i*(336+28)
    rect(s, cx, 240, 336, 252, PANEL, LINE2)
    rect(s, cx+28, 270, 46, 46, PANEL2, LINE2)
    micon(s, cx+28, 270, 46, ic, BLUE2, 20)
    text(s, cx+28, 338, 290, 34, h, 16.5, INK, MONO, bold=True)
    text(s, cx+28, 382, 288, 100, p, 12, DIM, SANS, line=1.5)

# ---- 17 Approach pillars ----
s = slide()
eyebrow(s, 72, "04", "How we approached it")
text(s, 96, 116, 900, 70, "Three moves", 39, INK, MONO, bold=True, spacing=-1)
for i,(nn,h,p) in enumerate([("01","Cut to one metric","Chose a single headline number per view and demoted the rest to drill-downs."),
                             ("02","Source on demand","Attached a traceable data path to every figure, one click away."),
                             ("03","Alert in real time","Moved notifications from nightly batch to the moment a threshold breaks.")]):
    cx=96+i*(336+28)
    rect(s, cx, 240, 336, 252, PANEL, LINE2)
    text(s, cx+28, 272, 100, 30, nn, 15, BLUESOFT, MONO, bold=True)
    text(s, cx+28, 314, 290, 34, h, 16.5, INK, MONO, bold=True)
    text(s, cx+28, 358, 288, 110, p, 12, DIM, SANS, line=1.5)

# ---- 18 Testimonial + photo ----
s = slide()
rect(s, 96, 228, 6, 250, SIGNAL, radius=False)
text(s, 136, 228, 720, 190, "“She turned a wall of dashboards into something my whole team actually reads on Monday morning.”", 27, INK, MONO, line=1.25)
av=s.shapes.add_shape(MSO_SHAPE.OVAL, Emu(136*PX), Emu(452*PX), Emu(68*PX), Emu(68*PX))
av.fill.solid(); av.fill.fore_color.rgb=BLUESOFT; av.line.fill.background(); av.shadow.inherit=False
text(s, 136, 470, 68, 34, "DM", 20, PANEL, MONO, bold=True, align=PP_ALIGN.CENTER)
text(s, 224, 456, 500, 26, "Derek M.", 16, INK, SANS, bold=True)
text(s, 224, 486, 500, 24, "VP of Insights · NetBase Solutions", 13, DIM, SANS)

# ---- 19 Data chart (native editable line chart) ----
s = slide()
eyebrow(s, 72, "07", "Adoption")
text(s, 96, 116, 900, 70, "Enterprise seats, first two quarters", 33, INK, MONO, bold=True, spacing=-1)
cd = CategoryChartData(); cd.categories = ["Jan","Feb","Mar","Apr","May","Jun"]
cd.add_series("Seats", (2,4,7,11,13,15))
gf = s.shapes.add_chart(XL_CHART_TYPE.LINE_MARKERS, Emu(90*PX), Emu(250*PX), Emu(700*PX), Emu(360*PX), cd)
gf.chart.has_legend = False
text(s, 832, 322, 360, 80, "15", 40, BLUE2, MONO, bold=True)
text(s, 832, 402, 340, 120, "new enterprise accounts by end of Q2 — 8 of them upgrades from the free tier.", 15, DIM, SANS, line=1.5)

# ---- 20 Competitive matrix (native editable table) ----
s = slide()
eyebrow(s, 72, "03", "Where we could win")
text(s, 96, 116, 900, 70, "The competitive gap", 39, INK, MONO, bold=True, spacing=-1)
# Scores = Material harvey balls in-cell: circle (full) / contrast (partial) / radio_button_unchecked (none).
rows=[["Platform","Real-time","Compare","Alerts","Analyst-ready"],
      ["NetBase Pro","●","●","●","●"],["Brandwatch","●","◐","●","○"],
      ["Sprinklr","◐","○","●","◐"],["Talkwalker","●","○","◐","○"]]
SCORE={"●":("circle",SUCCESS),"◐":("contrast",RGBColor(0xef,0x6c,0x00)),"○":("radio_button_unchecked",LINE2)}
TB_X, TB_Y, RH = 96, 244, 60
gt = s.shapes.add_table(5, 5, Emu(TB_X*PX), Emu(TB_Y*PX), Emu(1088*PX), Emu(5*RH*PX)).table
gt.first_row = False; gt.horz_banding = False
for ci,w in enumerate([320,192,192,192,192]): gt.columns[ci].width = Emu(w*PX)
for rr in gt.rows: rr.height = Emu(RH*PX)
for ri,row in enumerate(rows):
    for cii,val in enumerate(row):
        cell=gt.cell(ri,cii); cell.fill.solid()
        cell.fill.fore_color.rgb = PANEL2 if ri==1 else PANEL
        cell.vertical_anchor = MSO_ANCHOR.MIDDLE
        para=cell.text_frame.paragraphs[0]; para.alignment=PP_ALIGN.LEFT if cii==0 else PP_ALIGN.CENTER
        score = ri>=1 and cii>=1
        para.text = chr(MI[SCORE[val][0]]) if score else val
        r=para.runs[0]; f=r.font
        if score: f.name=MAT; f.size=Pt(15); f.color.rgb=SCORE[val][1]
        elif ri==0: f.name=MONO; f.size=Pt(11); f.color.rgb=FAINT
        elif cii==0: f.name=MONO; f.size=Pt(15); f.bold=True; f.color.rgb=(BLUE if ri==1 else INK)

# ---- 21 User flow ----
s = slide()
eyebrow(s, 96, "04", "The lifecycle")
text(s, 96, 140, 900, 70, "One flow, end to end", 39, INK, MONO, bold=True, spacing=-1)
steps=[("01","Create","Pick a template or start blank."),("02","Design","Set metrics, axes, and thresholds."),
       ("03","Preview","See the live read before you share."),("04","Distribute","Share, schedule, or set alerts."),
       ("05","Track","Monitor and iterate over time.")]
bw=182; arw=44; y0=360
for i,(fn,h,p) in enumerate(steps):
    cx=96+i*(bw+arw)
    rect(s, cx, y0, bw, 156, PANEL, LINE2)
    text(s, cx, y0+22, bw, 20, fn, 10, BLUESOFT, MONO, align=PP_ALIGN.CENTER)
    text(s, cx, y0+44, bw, 26, h, 15, INK, MONO, bold=True, align=PP_ALIGN.CENTER)
    text(s, cx+16, y0+78, bw-32, 70, p, 11, DIM, SANS, align=PP_ALIGN.CENTER, line=1.35)
    if i<4: micon(s, cx+bw, y0+62, arw, "arrow_forward", BLUESOFT, 16)

# ---- 22 Personas grid ----
s = slide()
eyebrow(s, 72, "03", "Who we designed for")
text(s, 96, 116, 900, 70, "Three people, one tool", 39, INK, MONO, bold=True, spacing=-1)
pg=[("MR","Maya · Analyst","Lives in the data all day","ship a board-ready read by Monday"),
    ("TK","Theo · Executive","Has 30 seconds","one headline he can trust"),
    ("SL","Sana · Strategist","Plans the next quarter","spot a trend before the news cycle")]
for i,(ini,name,role,need) in enumerate(pg):
    cx=96+i*(336+28)
    rect(s, cx, 240, 336, 250, PANEL, LINE2)
    ov=s.shapes.add_shape(MSO_SHAPE.OVAL, Emu((cx+28)*PX), Emu(270*PX), Emu(64*PX), Emu(64*PX))
    ov.fill.solid(); ov.fill.fore_color.rgb=BLUESOFT; ov.line.fill.background(); ov.shadow.inherit=False
    text(s, cx+28, 286, 64, 30, ini, 18, PANEL, MONO, bold=True, align=PP_ALIGN.CENTER)
    text(s, cx+28, 350, 290, 26, name, 16, INK, MONO, bold=True)
    text(s, cx+28, 380, 290, 22, role, 12, DIM, SANS)
    rect(s, cx+28, 414, 280, 0.5, LINE2, radius=False)
    text(s, cx+28, 426, 288, 70, "Needs to " + need + ".", 13, INK, SANS, line=1.4)

# ---- 23 Sitemap / IA ----
s = slide()
eyebrow(s, 72, "04", "Information architecture")
text(s, 96, 116, 900, 70, "Where this lives", 39, INK, MONO, bold=True, spacing=-1)
rroot=rect(s, 550, 236, 180, 48, BLUE2); rroot.line.fill.background()
text(s, 550, 250, 180, 24, "NetBase Pro", 15, PANEL, MONO, bold=True, align=PP_ALIGN.CENTER)
rect(s, 639, 284, 2, 30, LINE2, radius=False)
branches=[("Monitor",["Feed","Alerts"],False),("Dashboard",["Overview","Compare","Reports"],True),
          ("Explore",["Search","Segments"],False),("Admin",["Team","Billing"],False)]
bx0=110; bw2=260
for i,(name,leaves,focus) in enumerate(branches):
    cx=bx0+i*(bw2+18)
    nb=rect(s, cx, 330, bw2, 44, PANEL, BLUE2 if focus else LINE2)
    text(s, cx, 342, bw2, 24, name, 14, (BLUE if focus else INK), MONO, bold=True, align=PP_ALIGN.CENTER)
    if focus: micon(s, cx+bw2-34, 338, 20, "star", BLUE2, 13)
    lx=cx
    for lf in leaves:
        lw=len(lf)*9+24
        rect(s, lx, 392, lw, 32, PANEL2, LINE2)
        text(s, lx, 400, lw, 18, lf, 11, DIM, MONO, align=PP_ALIGN.CENTER)
        lx+=lw+8

# ---- 24 Learnings ----
s = slide()
eyebrow(s, 72, "08", "What I took away")
text(s, 96, 116, 900, 70, "Three learnings", 39, INK, MONO, bold=True, spacing=-1)
for i,(ic,h,p) in enumerate([("content_cut","Subtraction is the feature","The biggest usability win came from what we removed, not what we added."),
                          ("fact_check","Trust is a UI problem","People believe a number when they can reach its source — proximity beats persuasion."),
                          ("schedule","Timing is a design material","Moving alerts earlier changed the product's value more than any layout choice.")]):
    cx=96+i*(336+28)
    micon(s, cx-2, 246, 34, ic, BLUE2, 21, anchor=MSO_ANCHOR.TOP)
    text(s, cx, 300, 300, 60, h, 16.5, INK, MONO, bold=True, line=1.2)
    text(s, cx, 372, 300, 120, p, 12, DIM, SANS, line=1.5)

# ---- 25 Hypothesis ----
s = slide()
eyebrow(s, 72, "03", "Hypothesis")
text(s, 96, 122, 640, 220,
     [("Analysts will trust the new dashboard because ", INK, None),
      ("every number links to its source.", BLUE2, None)], 30, INK, MONO, bold=False, line=1.2)
rect(s, 96, 384, 900, 150, PANEL, LINE2); rect(s, 96, 384, 6, 150, SIGNAL, radius=False)
text(s, 126, 408, 850, 20, "THE UNTESTED ASSUMPTION", 10.5, SIGNAL, MONO, spacing=2)
text(s, 126, 436, 840, 90, "Baked into that sentence: that a faster read matters more to them than the depth they'd lose. We hadn't earned it by asking anyone — so we flagged it before drawing.", 14, INK, SANS, line=1.5)

# ---- 26 Constraint ----
s = slide()
gb=rect(s, 96, 182, 60, 60, RGBColor(0xf6,0xe4,0xdc), RGBColor(0xe6,0xc3,0xb4));
micon(s, 96, 182, 60, "sync", SIGNAL, 26)
text(s, 96, 268, 500, 20, "THE REAL CONSTRAINT", 11, SIGNAL, MONO, spacing=2)
text(s, 96, 300, 520, 90, "Everything had to run on the live stream", 26, INK, MONO, bold=True, spacing=-1, line=1.1)
text(s, 96, 400, 460, 90, "No nightly batch to lean on — every view had to render off a pipeline that refreshed every 90 seconds.", 15, DIM, SANS, line=1.5)
text(s, 690, 190, 400, 20, "HOW IT RESHAPED THE DESIGN", 11, FAINT, MONO, spacing=2)
for i,t in enumerate(["Designed loading & partial states into every screen, not as an afterthought",
                      "Capped the historical range so live queries stayed fast",
                      "Scoped v1 to the three highest-traffic views; deferred custom widgets"]):
    yy=234+i*92
    micon(s, 688, yy-2, 22, "east", SIGNAL, 15, anchor=MSO_ANCHOR.TOP)
    text(s, 726, yy, 460, 80, t, 15, INK, SANS, line=1.4)

# ---- 27 Results (honest / no-metric) ----
s = slide()
eyebrow(s, 72, "09", "Results")
text(s, 96, 116, 900, 70, "The honest outcome", 39, INK, MONO, bold=True, spacing=-1)
rect(s, 96, 300, 528, 220, PANEL, LINE2); rect(s, 96, 300, 528, 5, BLUE2, radius=False)
micon(s, 128, 335, 18, "track_changes", BLUE, 12, anchor=MSO_ANCHOR.TOP)
text(s, 150, 336, 460, 20, "THE MEASURE THAT MATTERED", 10.5, BLUE, MONO, spacing=2)
text(s, 130, 372, 470, 130, "Feature adoption — would teams build their weekly read here instead of exporting to a slide?", 17, INK, SANS, line=1.45)
rect(s, 656, 300, 528, 220, PANEL, LINE2); rect(s, 656, 300, 528, 5, SUCCESS, radius=False)
micon(s, 688, 335, 18, "check_circle", SUCCESS, 12, anchor=MSO_ANCHOR.TOP)
text(s, 710, 336, 460, 20, "WHAT IT ACTUALLY PRODUCED", 10.5, SUCCESS, MONO, spacing=2)
text(s, 690, 372, 470, 130, "A scoped, constraint-aware concept the team could pick up and build — a one-line prompt turned buildable.", 17, INK, SANS, line=1.45)

# ---- 28 Validation / assumption-check ----
s = slide()
eyebrow(s, 72, "02", "Before I designed")
text(s, 96, 116, 900, 70, "I checked the premise", 39, INK, MONO, bold=True, spacing=-1)
rect(s, 96, 244, 340, 244, PANEL, LINE2)
tk=s.shapes.add_shape(MSO_SHAPE.OVAL, Emu((96+138)*PX), Emu(276*PX), Emu(64*PX), Emu(64*PX))
tk.fill.solid(); tk.fill.fore_color.rgb=RGBColor(0xe3,0xf0,0xe4); tk.line.color.rgb=RGBColor(0xbc,0xdc,0xbf); tk.shadow.inherit=False
micon(s, 96+138, 276, 64, "check", SUCCESS, 24)
text(s, 96, 356, 340, 30, "5 analysts", 18, INK, MONO, bold=True, align=PP_ALIGN.CENTER)
text(s, 116, 388, 300, 40, "across 3 accounts, before a single wireframe", 12, DIM, SANS, align=PP_ALIGN.CENTER, line=1.4)
text(s, 492, 250, 400, 20, "WHAT THEY CONFIRMED", 11, BLUE, MONO, spacing=2)
for i,t in enumerate(["The source-of-truth problem was real — trust broke without a traceable number",
                      "Speed beat customization for the daily read",
                      "Late alerts were the most-wanted gap, not a nice-to-have"]):
    yy=290+i*62
    micon(s, 490, yy-1, 22, "check_circle", SUCCESS, 14, anchor=MSO_ANCHOR.TOP)
    text(s, 520, yy, 620, 56, t, 15, INK, SANS, line=1.4)

# ================= KIT ESSENTIALS & STRUCTURE (7 templates) ==================

# ---- 29 How to use this kit ----
s = slide()
eyebrow(s, 72, None, "Start here")
text(s, 96, 112, 900, 50, "How to use this kit", 39, INK, MONO, bold=True, spacing=-1)
text(s, 96, 180, 880, 60, "Every slide is a finished 16:9 template. Duplicate the one you need, replace the placeholder text and image slots, and you have a deck.", 15, DIM, SANS, line=1.5)
kit=[("do", "DO", BLUE, BLUE2, "check_circle", ["Duplicate the slide you need and type over the placeholders.",
      "Keep one idea per slide — a third bullet often wants its own.",
      "Use the signal accent for a single emphasis per slide.",
      "Keep body text readable from the back of the room."]),
     ("dont", "DON'T", SIGNAL, SIGNAL, "cancel", ["Rebuild a layout from scratch — start from a template.",
      "Restyle the colors, fonts, or spacing; consistency is the point.",
      "Shrink text to cram more on — cut the content instead.",
      "Paint the whole slide in the accent color."])]
for i,(_,head,hc,tc,mark,items) in enumerate(kit):
    cx=96+i*560
    rect(s, cx, 268, 528, 300, PANEL, LINE2); rect(s, cx, 268, 528, 5, tc, radius=False)
    text(s, cx+34, 300, 460, 20, head, 10.5, hc, MONO, spacing=2)
    for j,it in enumerate(items):
        iy=340+j*54
        micon(s, cx+32, iy-1, 22, mark, tc, 13, anchor=MSO_ANCHOR.TOP)
        text(s, cx+62, iy, 434, 50, it, 13.5, INK, SANS, line=1.3)

# ---- 30 Agenda / contents ----
s = slide()
eyebrow(s, 72, None, "Agenda")
text(s, 96, 112, 900, 60, "What's inside", 42, INK, MONO, bold=True, spacing=-1)
ag=[("01","Overview","The problem, the client, and my role.",True),
    ("02","Research","Who we talked to and what we learned.",False),
    ("03","Approach","The decisions that shaped the design.",False),
    ("04","The work","Key screens and features up close.",False),
    ("05","Results","What changed, and how we know.",False),
    ("06","Reflection","What I'd carry into the next project.",False)]
for i,(n,t,d,cur) in enumerate(ag):
    cx=96+(i%2)*560; cy=232+(i//2)*128
    text(s, cx, cy, 50, 40, n, 24, BLUESOFT, MONO, bold=True)
    text(s, cx+56, cy-2, 450, 30, t, 17, (BLUE if cur else INK), MONO, bold=True)
    text(s, cx+56, cy+30, 450, 40, d, 12.75, DIM, SANS, line=1.35)
    rect(s, cx, cy+92, 504, 0.5, (BLUE2 if cur else LINE2), radius=False)

# ---- 31 Title + body (workhorse) ----
s = slide()
eyebrow(s, 96, "00", "Section label")
text(s, 96, 150, 960, 70, "A clear, single-idea headline", 45, INK, MONO, bold=True, spacing=-1)
text(s, 96, 246, 860, 100, "The everyday workhorse: one heading and a paragraph or a short list. Reach for it whenever a slide doesn't need a special layout — most of them don't.", 16.5, DIM, SANS, line=1.5)
for i,b in enumerate(["Swap this list for a paragraph, or delete it entirely.",
                      "Three points is plenty; a fourth usually means a second slide.",
                      "Lead with the takeaway, then support it."]):
    by=396+i*48
    rect(s, 96, by+6, 10, 10, BLUE2, radius=False)
    text(s, 122, by, 760, 42, b, 15, INK, SANS, line=1.3)

# ---- 32 Two-column (generic) ----
s = slide()
eyebrow(s, 96, "00", "Section label")
text(s, 96, 140, 900, 60, "Two things, side by side", 39, INK, MONO, bold=True, spacing=-1)
twocol=[("LEFT COLUMN","Use this layout for anything that comes in pairs — problem and solution, two related ideas, or “us vs. them” told in words."),
        ("RIGHT COLUMN","Keep both columns balanced in length. If one side runs much longer than the other, it probably wants to be its own slide.")]
for i,(h,p) in enumerate(twocol):
    cx=96+i*560
    text(s, cx, 244, 500, 20, h, 11, BLUE, MONO, spacing=2)
    text(s, cx, 282, 500, 120, p, 15, INK, SANS, line=1.5)
    for j in range(2):
        by=430+j*40
        rect(s, cx, by+6, 9, 9, BLUE2, radius=False)
        text(s, cx+24, by, 470, 34, "A supporting point.", 13.5, INK, SANS)

# ---- 33 Full-bleed image ----
s = slide()
slot(s, 0, 0, 1280, 720, "Replace with full-bleed image · 16:9")
rect(s, 0, 560, 1280, 160, INK, radius=False)
text(s, 44, 600, 700, 20, "OPTIONAL CAPTION", 11, RGBColor(0xcf,0xe0,0xf5), MONO, spacing=2)
text(s, 44, 630, 1000, 50, "One line that frames what we're looking at.", 27, PANEL, MONO, bold=True)

# ---- 34 Section-progress divider ----
s = slide(accent=True)
eyebrow(s, 150, None, "Part three of five")
text(s, 90, 178, 600, 200, "03", 150, BLUESOFT, MONO, bold=True, spacing=-4)
text(s, 96, 392, 1000, 80, "Designing the solution", 45, INK, MONO, bold=True, spacing=-1)
prog=[("01","Overview","done"),("02","Research","done"),("03","Design","current"),
      ("04","Results",""),("05","Reflection","")]
px_=96
for n,lab,state in prog:
    w=len(lab)*9.5+80
    fill = BLUE2 if state=="current" else PANEL
    edge = BLUE2 if state=="current" else LINE2
    txt = PANEL if state=="current" else (DIM if state=="done" else FAINT)
    numc = RGBColor(0xcf,0xe6,0xff) if state=="current" else BLUESOFT
    rect(s, px_, 504, w, 46, fill, edge)
    text(s, px_+20, 517, 30, 24, n, 13, numc, MONO, bold=True)
    text(s, px_+50, 517, w-50, 24, lab, 13, txt, MONO)
    px_+=w+14

# ---- 35 Appendix / backup divider ----
s = slide(accent=True)
text(s, 96, 150, 400, 30, "APPENDIX", 14.25, SIGNAL, MONO, spacing=3, upper=True)
text(s, 88, 196, 400, 200, "+", 150, LINE2, MONO, bold=True)
text(s, 96, 392, 1000, 80, "Backup & detail", 45, INK, MONO, bold=True, spacing=-1)
text(s, 96, 486, 760, 80, "Supporting material for the deep questions — pull these in only if the room asks. The main story ended on the previous slide.", 18, DIM, SANS, line=1.4)
rect(s, 96, 590, 372, 44, None, LINE2, dashed=True)
micon(s, 114, 602, 20, "info", FAINT, 13, anchor=MSO_ANCHOR.TOP)
text(s, 140, 602, 360, 24, "Everything past here is optional", 12.75, FAINT, MONO)

OUT = os.path.join(HERE, "Vael-Slide-Library-EDITABLE.pptx")
prs.save(OUT)
print(f"wrote {OUT} with {len(prs.slides._sldIdLst)} slides")
