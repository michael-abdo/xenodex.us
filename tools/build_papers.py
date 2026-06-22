#!/opt/homebrew/bin/python3
"""Regenerate the xenodex.us paper pages + PDFs from the canonical markdown.

Source of truth: /Users/Mike/2025-2030/Xenodex/knowledge/funding/papers/final/<stem>.md
For each paper this writes:
  papers/<stem>.html      = site wrapper (header / badge-row / footer) around a
                            pandoc-rendered HTML body of the markdown.
  papers/pdf/<stem>.pdf   = xelatex build (math glyphs mapped to LaTeX, since this
                            TeX install lacks newunicodechar / a math-complete font).
Also fixes the publications.html listing (#1's retitle + #5's em-dash-seam excerpt).

Run:  /opt/homebrew/bin/python3 tools/build_papers.py
"""
import pathlib, subprocess, tempfile

FINAL = pathlib.Path("/Users/Mike/2025-2030/Xenodex/knowledge/funding/papers/final")
SITE = pathlib.Path("/Users/Mike/2025-2030/xenodex.us")
PANDOC = "/opt/homebrew/bin/pandoc"
XELATEX = "/Library/TeX/texbin/xelatex"

# stem -> (short <title>, badge css class, badge label)
PAPERS = {
    "01_self_refutation": ("Testing a Prenatal-Hormone Hierarchy", "preprint", "Preprint"),
    "02_leakage_methods": ("Label Leakage in ASR-Derived Text Channels", "methods", "Methods"),
    "03_twin_residual": ("Non-Shared Developmental Residual", "preprint", "Preprint"),
    "04_model_with_refutation": ("Prenatal Hormonal Milieu as a Common Cause", "preprint", "Preprint"),
    "05_perspective": ("Reading the Receipt, Not the Person", "preprint", "Preprint"),
}

# Unicode math glyph -> LaTeX, as raw-latex inlines (PDF build only; HTML keeps Unicode).
def _R(t): return "`" + t + "`{=latex}"
GLYPHS = [
    ("⁻⁵", _R(r"\textsuperscript{-5}")), ("⁻³", _R(r"\textsuperscript{-3}")),
    ("→", _R(r"\ensuremath{\rightarrow}")), ("↔", _R(r"\ensuremath{\leftrightarrow}")),
    ("≈", _R(r"\ensuremath{\approx}")), ("≥", _R(r"\ensuremath{\geq}")),
    ("≤", _R(r"\ensuremath{\leq}")), ("≠", _R(r"\ensuremath{\neq}")),
    ("−", _R(r"\ensuremath{-}")), ("×", _R(r"\ensuremath{\times}")),
    ("±", _R(r"\ensuremath{\pm}")), ("·", _R(r"\ensuremath{\cdot}")),
    ("α", _R(r"\ensuremath{\alpha}")), ("κ", _R(r"\ensuremath{\kappa}")),
    ("³", _R(r"\textsuperscript{3}")), ("⁵", _R(r"\textsuperscript{5}")),
    ("⁻", _R(r"\textsuperscript{-}")),
]

HEAD = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — Xenodex Sciences</title>
  <link rel="icon" type="image/png" href="../images/logo_white.png">
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="../academic.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <script src="../components/scroll-effects.js"></script>
</head>
<body>
  <script src="../components/header.js"></script>
  <main class="article">
    <a class="back-to-pubs" href="../pages/publications.html">← All publications</a>
    <div class="article-badge-row">
      <span class="pub-badge badge-{bclass}">{blabel}</span>
      <span class="pub-doi">DOI: forthcoming</span>
      <span class="pub-links"><a href="pdf/{stem}.pdf">Download PDF ▸</a></span>
    </div>
    <div class="article-body">
'''
TAIL = '''
    </div>
  </main>
  <script src="../components/footer.js"></script>
</body>
</html>
'''


def build_html(stem, title, bclass, blabel):
    body = subprocess.run([PANDOC, str(FINAL / f"{stem}.md"), "-f", "markdown", "-t", "html"],
                          capture_output=True, text=True, check=True).stdout
    page = HEAD.format(title=title, bclass=bclass, blabel=blabel, stem=stem) + body + TAIL
    (SITE / "papers" / f"{stem}.html").write_text(page, encoding="utf-8")


def build_pdf(stem):
    md = (FINAL / f"{stem}.md").read_text(encoding="utf-8")
    for a, b in GLYPHS:
        md = md.replace(a, b)
    with tempfile.NamedTemporaryFile("w", suffix=".md", delete=False, encoding="utf-8") as tf:
        tf.write(md); tmp = tf.name
    subprocess.run([PANDOC, tmp, "-o", str(SITE / "papers" / "pdf" / f"{stem}.pdf"),
                    "--pdf-engine=" + XELATEX, "-V", "geometry:margin=1in", "-V", "fontsize=11pt"],
                   check=True)


def fix_listing():
    p = SITE / "pages" / "publications.html"
    t = p.read_text(encoding="utf-8")
    t = t.replace(
        "Faces Do Not Carry a Prenatal-Hormone Effect-Size Hierarchy: A Pre-Registered Self-Refutation at Celebrity Scale",
        "Testing a Prenatal-Hormone Effect-Size Hierarchy in Facial Morphology: A Pre-Registered Self-Refutation at Celebrity Scale")
    t = t.replace(
        "Physiognomy the claim that a person&#x27;s face causes or directly displays their character is false and modern",
        "Physiognomy, the claim that a person&#x27;s face causes or directly displays their character, is false, and modern")
    t = t.replace("Physiognomy asserts body to", "Physiognomy asserts body-to")
    p.write_text(t, encoding="utf-8")


def main():
    for stem, (title, bclass, blabel) in PAPERS.items():
        build_html(stem, title, bclass, blabel)
        build_pdf(stem)
        print(f"  built {stem}: html + pdf")
    fix_listing()
    print("  fixed publications.html listing")


if __name__ == "__main__":
    main()
