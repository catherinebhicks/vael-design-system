#!/usr/bin/env python3
"""Assemble the rendered slide PNGs into a 16:9 PowerPoint deck (image-per-slide,
pixel-perfect to the Vael HTML). Slide order = case-study narrative order."""
import glob, os
from pptx import Presentation
from pptx.util import Inches

RENDER_DIR = os.path.join(os.path.dirname(__file__), "render")
OUT = os.path.join(os.path.dirname(__file__), "Vael-Case-Study-Deck.pptx")

# Standard PowerPoint 16:9 canvas
prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
blank = prs.slide_layouts[6]  # fully blank layout

pngs = sorted(glob.glob(os.path.join(RENDER_DIR, "[0-9]*_*.png")))
for png in pngs:
    slide = prs.slides.add_slide(blank)
    slide.shapes.add_picture(png, 0, 0, width=prs.slide_width, height=prs.slide_height)
    # name the slide after the template for easy navigation in PowerPoint
    name = os.path.splitext(os.path.basename(png))[0].split("_", 1)[-1]
    slide.shapes.title if False else None

prs.save(OUT)
print(f"wrote {OUT} with {len(pngs)} slides")
