from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak
from xml.sax.saxutils import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = str(ROOT / "public" / "cv.pdf")
PURPLE = colors.HexColor("#392b50")
VIOLET = colors.HexColor("#59427a")
YELLOW = colors.HexColor("#d5b345")
INK = colors.HexColor("#272331")
MUTED = colors.HexColor("#625d6d")
PALE = colors.HexColor("#f1eef6")
WHITE = colors.white

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="SectionCV", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9.2, leading=12, textColor=VIOLET, spaceBefore=5, spaceAfter=4, tracking=.7))
styles.add(ParagraphStyle(name="BodyCV", parent=styles["Normal"], fontName="Helvetica", fontSize=8.2, leading=11.1, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="SmallCV", parent=styles["Normal"], fontName="Helvetica", fontSize=7.5, leading=9.4, textColor=MUTED, spaceAfter=1))
styles.add(ParagraphStyle(name="DateCV", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=7.3, leading=9.5, textColor=MUTED))
styles.add(ParagraphStyle(name="EntryCV", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=8.3, leading=10.2, textColor=INK, spaceAfter=1))
styles.add(ParagraphStyle(name="PubTitleCV", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=8.1, leading=10.1, textColor=INK, spaceAfter=1))
styles.add(ParagraphStyle(name="PubMetaCV", parent=styles["Normal"], fontName="Helvetica", fontSize=7.2, leading=9, textColor=VIOLET, spaceAfter=1))

def P(text, style="BodyCV"):
    return Paragraph(text, styles[style])

def section(title):
    return [P(escape(title.upper()), "SectionCV"), Table([[""]], colWidths=[1.05 * inch], rowHeights=[1.5], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), YELLOW)])), Spacer(1, 4)]

def entry(title, org, date, detail=""):
    right = [P(escape(title), "EntryCV"), P(escape(org), "SmallCV")]
    if detail:
        right.append(P(escape(detail), "SmallCV"))
    return Table([[P(escape(date), "DateCV"), right]], colWidths=[1.15 * inch, 5.75 * inch], style=TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6), ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))

def bullet(text):
    return P("•&nbsp; " + text, "BodyCV")

def header(canvas, doc):
    canvas.saveState()
    width, height = letter
    canvas.setFillColor(PURPLE)
    canvas.rect(0, height - .94 * inch, width, .94 * inch, fill=1, stroke=0)
    canvas.setFillColor(YELLOW)
    canvas.rect(.58 * inch, height - .99 * inch, .48 * inch, .045 * inch, fill=1, stroke=0)
    canvas.setFillColor(WHITE)
    canvas.setFont("Helvetica-Bold", 20)
    canvas.drawString(.58 * inch, height - .46 * inch, "Ali Golestaneh")
    canvas.setFont("Helvetica", 8.2)
    canvas.setFillColor(colors.HexColor("#e4dced"))
    canvas.drawString(.6 * inch, height - .70 * inch, "Robotics researcher · Ph.D. student at Worcester Polytechnic Institute")
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(colors.HexColor("#f3eef8"))
    canvas.drawRightString(width - .58 * inch, height - .43 * inch, "sgolestaneh@wpi.edu")
    canvas.drawRightString(width - .58 * inch, height - .63 * inch, "aligolestaneh.com  ·  Scholar  ·  GitHub  ·  LinkedIn")
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7)
    canvas.drawString(.58 * inch, .35 * inch, "Robotics Engineering · ELPIS Lab · Worcester Polytechnic Institute")
    canvas.drawRightString(width - .58 * inch, .35 * inch, f"Page {doc.page}")
    canvas.restoreState()

doc = BaseDocTemplate(OUTPUT, pagesize=letter, leftMargin=.58*inch, rightMargin=.58*inch, topMargin=1.12*inch, bottomMargin=.55*inch,
                     title="Ali Golestaneh - Curriculum Vitae", author="Ali Golestaneh", subject="Robotics research curriculum vitae")
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0, id="cv")
doc.addPageTemplates([PageTemplate(id="cv", frames=[frame], onPage=header)])

story = []
story.extend(section("Research profile"))
story.append(P("Robotics Engineering Ph.D. student at Worcester Polytechnic Institute and member of the ELPIS Lab. Research interests include motion and kinodynamic planning, robot learning, nonprehensile manipulation, adaptive planning, and planning under uncertainty."))

story.extend(section("Education"))
story.append(entry("Ph.D. in Robotics Engineering", "Worcester Polytechnic Institute · ELPIS Lab", "Aug 2024–present", "GPA 4.0/4.0 across the first 36 credits."))
story.append(entry("B.S. in Mechanical Engineering", "Iran University of Science and Technology", "Sep 2018–Sep 2023", "GPA 16.12/20 (3.34/4.0)."))
story.append(entry("High School Diploma · Mathematics and Physics", "National Organization for Development of Exceptional Talents (NODET)", "Sep 2014–Jul 2018", "GPA 19.01/20 (4.0/4.0)."))

story.extend(section("Research experience"))
story.append(entry("Research Assistant · Learning Dynamics for Manipulation and Motion Planning", "ELPIS Lab, Worcester Polytechnic Institute", "Aug 2024–present", "Kinodynamic planning and nonprehensile manipulation; UR10/UR16e trajectory control and learned physics residuals."))
story.append(entry("Research Assistant · Simulation and Construction of Legged Robots", "Mechatronics Laboratory, Iran University of Science and Technology", "Sep 2021–Jul 2024", "Legged-robot simulation, construction, and control."))

story.extend(section("Selected engineering projects and internship"))
story.append(bullet("Unitree G1 humanoid development and control (Jan 2026); OpenManipulator X robotics control (Nov 2024)."))
story.append(bullet("B.S. dissertation: quadruped-robot simulator (Oct 2021–Sep 2023)."))
story.append(bullet("Mechanical Engineering Intern, Rahe Andisheh Company (Jul–Sep 2020): reverse-engineered a shrimp-pond oxygenation machine; designed chassis, selected gearbox and actuator components, and supported structural analysis, manufacturing, and testing."))

story.extend(section("Teaching experience"))
story.append(entry("Teaching Assistant · Motion Planning and Machine Learning for Robotics", "Worcester Polytechnic Institute", "Aug 2025–May 2026"))
story.append(entry("Teaching Assistant · Mechanical Applications in Robotics; Sensing and Perception in Robotics", "Worcester Polytechnic Institute", "Jan–May 2025"))
story.append(entry("Teaching Assistant · Fundamentals of Computer Programming", "Iran University of Science and Technology", "Sep 2023–Feb 2024"))
story.append(entry("Teaching Assistant · Vectorial Dynamics and Dynamics of Machinery", "Iran University of Science and Technology", "Sep 2022–Feb 2023"))
story.append(entry("Physics Teacher", "NODET High School", "Sep 2021–May 2024"))

story.append(PageBreak())
story.extend(section("Selected publications"))
papers = [
    ("AURA: Asymptotically Optimal Uncertainty-Robust Replanning Algorithm for Kinodynamic Systems", "Seyedali Golestaneh, Zhuoyun Zhong, Donghyung Lee, and Constantinos Chamzas", "IEEE Robotics and Automation Letters, 2026 · Accepted September 2026", "https://arxiv.org/abs/2605.27699"),
    ("MetaPusher: Meta Learning and Planning for Nonprehensile Manipulation of Unseen Objects with Rapid Online Adaption", "Donghyung Lee, Seyedali Golestaneh, Jaskrit Singh, Zhuoyun Zhong, Athanasios Kapoutsis, and Constantinos Chamzas", "arXiv preprint, 2026 · Co-first author", "https://arxiv.org/abs/2609.21122"),
    ("Terminal Matters: Kinodynamic Planning with a Terminal Cost and Learned Uncertainty in Belief State-Cost Space", "Zhuoyun Zhong, Seyedali Golestaneh, and Constantinos Chamzas", "arXiv preprint, 2026", "https://arxiv.org/abs/2605.09046"),
    ("ActivePusher: Active Learning and Planning with Residual Physics for Nonprehensile Manipulation", "Zhuoyun Zhong, Seyedali Golestaneh, and Constantinos Chamzas", "IEEE International Conference on Robotics and Automation (ICRA), 2026 · Best Student Paper Award", "https://arxiv.org/abs/2506.04646"),
    ("Robust and Efficient Phase Estimation in Legged Robots via Signal Imaging and Deep Neural Networks", "Kamyab Yazdipaz, Nooshin Kohli, Seyed Ali Golestaneh, and Mohammad Shahbazi", "IEEE Access, vol. 13, pp. 49018–49029, 2025", "https://doi.org/10.1109/ACCESS.2025.3549165"),
]
for title, authors, meta, url in papers:
    story.append(KeepTogether([P(escape(title), "PubTitleCV"), P(escape(authors), "SmallCV"), P(escape(meta) + " · <link href='" + url + "' color='#59427a'>Paper</link>", "PubMetaCV"), Spacer(1, 4)]))

story.extend(section("Awards and recognition"))
for title, organization, year in [
    ("Best Student Paper Award", "IEEE International Conference on Robotics and Automation (ICRA)", "2026"),
    ("Best Student Paper Award", "Hellenic Robotics Forum (HRF)", "2026"),
    ("Glenn Yee Travel Award", "Robotics Engineering Graduate Student, WPI", "2026"),
    ("Top 10% among Mechanical Engineering students", "Iran University of Science and Technology", "2022"),
    ("Top 0.75% among 144,437 participants in the National University Entrance Exam", "Iran", "2018"),
    ("4th place · Soccer 2D Simulation", "RoboCup Iran Open International Competitions", "2014"),
]:
    story.append(entry(title, organization, year))

story.extend(section("Technical skills and languages"))
story.append(P("Programming: C++, Python, MATLAB, EES. Robotics and simulation: ROS, Genesis, MuJoCo, Arduino. Engineering: SolidWorks, CATIA, ADAMS. Tools: Linux, Windows, LaTeX, Microsoft Office, Vim.", "SmallCV"))
story.append(P("Languages: Persian (native), English (fluent).", "SmallCV"))

doc.build(story)
