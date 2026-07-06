"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Content — sourced directly from Vivaan Jain's resume               */
/* ------------------------------------------------------------------ */

const experience = [
  {
    n: "01",
    category: "Finance Operations",
    color: "var(--chart-1)",
    role: "Office Assistant",
    org: "ASU Department of Psychology",
    meta: "Tempe, AZ · Mar – May 2026",
    points: [
      "Processed financial documentation and expense reports in Workday, ensuring accuracy across departmental reimbursement records.",
      "Managed front-desk operations including call handling, scheduling, mail distribution, and maintenance of confidential departmental records.",
      "Supported faculty and staff with inventory tracking, data entry, and ad hoc administrative projects.",
    ],
  },
  {
    n: "02",
    category: "Facilities Operations",
    color: "var(--chart-3)",
    role: "Maintenance & Operations Office Assistant",
    org: "ASU Facilities Development & Management",
    meta: "Tempe, AZ · Mar 2026 – Present",
    points: [
      "Maintained data integrity across work orders and asset records in TMA facilities management software during evening shift operations.",
      "Handled inbound calls and service requests, routing issues to appropriate teams and ensuring timely follow-up on open tickets.",
    ],
  },
  {
    n: "03",
    category: "Trade & Supply Ops",
    color: "var(--chart-2)",
    role: "Office Aide",
    org: "ESSE Trading Impex LLP",
    meta: "May – Aug 2024",
    points: [
      "Tracked purchase orders and supplier shipments in Microsoft Excel; reconciled invoices to POs and flagged pricing discrepancies for finance review.",
      "Prepared weekly order-processing and shipment-tracking reports used to support inventory and operations decisions.",
      "Coordinated agendas and logistics for cross-departmental meetings between procurement, logistics, and finance teams.",
    ],
  },
  {
    n: "04",
    category: "Finance Internship",
    color: "var(--chart-4)",
    role: "Finance Intern",
    org: "InnoLearn Solutions Pvt Ltd",
    meta: "May – Jun 2023",
    points: [
      "Assisted the finance team with organizing financial records, supporting data analysis, and preparing documentation for internal review cycles.",
      "Built and maintained a user-records database in Excel using Pivot Tables, VLOOKUP, and advanced formulas to track key performance metrics.",
      "Designed Gmail automation workflows to streamline team communication and reduce manual follow-up overhead.",
    ],
  },
]

const projects = [
  {
    n: "01",
    title: "Vaelor",
    subtitle: "AI Trading & Investment Platform",
    year: "2026",
    href: "https://vaelor.dev",
    description:
      "Designed, built, and deployed a full-stack, multi-user paper-trading and portfolio analytics platform with real-time market data, ML-driven buy/sell signals, smart stop-loss logic, an integrated backtesting engine, sector-allocation analytics, and a JWT-authenticated client portal.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Neon PostgreSQL",
      "ML Signals",
      "Backtesting",
      "Yahoo Finance",
      "Vercel",
    ],
  },
  {
    n: "02",
    title: "Target Corporation",
    subtitle: "Discounted Cash Flow Valuation Model",
    year: "Independent Project",
    href: null,
    description:
      "Built a full Excel operating model with 5-year income statement projections, unlevered free cash flow buildup, WACC, and terminal value under both Gordon Growth and exit-multiple methodologies. Ran sensitivity and scenario analysis on WACC and terminal growth to derive an implied share price range.",
    tags: [
      "DCF",
      "WACC",
      "Gordon Growth",
      "Exit Multiple",
      "Sensitivity Analysis",
      "Equity Research",
    ],
  },
]

const skillGroups = [
  {
    label: "Financial Analysis & Modeling",
    items:
      "DCF Valuation · Three-Statement Modeling · Comparable Companies (Comps) · Precedent Transactions · LBO Modeling · Equity Research · Capital Markets · Financial Statement Analysis · Variance Analysis · Sensitivity & Scenario Analysis · Forecasting · Budgeting",
  },
  {
    label: "Microsoft Office Suite",
    items:
      "Excel (Advanced — Pivot Tables, VLOOKUP, XLOOKUP, INDEX/MATCH, SUMIFS, Data Tables, Macros) · PowerPoint (Pitch Decks, Financial Slide Formatting) · Word · Outlook",
  },
  {
    label: "Data & Programming",
    items:
      "Python (pandas, scikit-learn, Streamlit, VADER NLP) · SQL / PostgreSQL · TypeScript · JavaScript · React · Next.js · HTML / CSS · Java · Data Visualization · Statistical Analysis",
  },
  {
    label: "Platforms & Tools",
    items:
      "Bloomberg Terminal (familiar) · Workday · TMA Facilities Management · Google Workspace · Git / GitHub · Vercel",
  },
]

const heroFrames = [
  { label: "01 · MARKETS", w: "82%", h: "60%", border: "rgba(23,20,15,.16)", rust: false },
  { label: "02 · MODELING", w: "56%", h: "40%", border: "rgba(23,20,15,.22)", rust: false },
  { label: "03 · BUILDING", w: "30%", h: "22%", border: "rgba(193,68,28,.35)", rust: true },
  { label: "04", w: "12%", h: "8%", border: "rgba(23,20,15,.28)", rust: false },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PortfolioPage() {
  const heroRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)

  // Scroll-linked "zoom into the frame" hero, matched to reduced-motion.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    let ticking = false
    const update = () => {
      const hero = heroRef.current
      const stage = stageRef.current
      const content = heroContentRef.current
      if (hero && stage && content) {
        const heroH = hero.offsetHeight * 0.85
        const p = Math.min(Math.max(window.scrollY / heroH, 0), 1)
        stage.style.transform = `scale(${1 + p * 4.4}) rotate(${p * 7}deg)`
        stage.style.opacity = String(1 - Math.max(0, (p - 0.7) / 0.3))
        content.style.transform = `translateY(${p * -50}px)`
        content.style.opacity = String(1 - Math.min(1, p * 1.3))
      }
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    update()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Reveal-on-scroll for every element tagged `.reveal`.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="overflow-x-hidden">
      <div className="noise-overlay" aria-hidden="true" />

      {/* ===== NAV ===== */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="#hero" className="font-serif italic text-lg tracking-tight">
            Vivaan<span className="text-primary"> / </span>Jain
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[.14em] text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <span className="font-mono text-[11px] tracking-[.14em] border border-border rounded-full px-3 py-1.5 text-muted-foreground">
            ECON · FINANCE ’28
          </span>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section
          id="hero"
          ref={heroRef}
          className="relative min-h-[100svh] flex items-center justify-center px-6"
          style={{ perspective: "1400px" }}
        >
          <div ref={stageRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {heroFrames.map((f) => (
              <div
                key={f.label}
                className="hero-frame"
                style={{ width: f.w, height: f.h, borderColor: f.border }}
              >
                <span
                  className="font-mono text-[10px] tracking-[.14em]"
                  style={{ color: f.rust ? "var(--rust)" : "var(--ink-soft)" }}
                >
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="absolute inset-0 z-[5] pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 44rem 28rem at 50% 46%, var(--paper) 32%, transparent 74%)",
            }}
          />

          <div ref={heroContentRef} className="relative z-10 text-center max-w-3xl mx-auto">
            <p className="font-mono text-[11px] uppercase tracking-[.22em] text-muted-foreground mb-6">
              Economics &amp; Finance — W. P. Carey School of Business · ’28
            </p>
            <h1 className="font-serif text-[13vw] sm:text-[9vw] md:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-light">
              The long road to running{" "}
              <em className="italic text-primary">my own fund.</em>
            </h1>
            <p className="mt-6 text-[15px] md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              I&apos;m Vivaan Jain — a sophomore at Arizona State studying Economics &amp; Finance,
              building the modeling, markets, and engineering skills to launch a hedge fund. Every
              course, role, and project is one frame in that story.
            </p>
            <div className="mt-9 flex items-center justify-center gap-4">
              <a
                href="#projects"
                className="font-mono text-[11px] uppercase tracking-[.16em] bg-primary text-primary-foreground rounded-full px-5 py-2.5 hover:opacity-90 transition-opacity"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="font-mono text-[11px] uppercase tracking-[.16em] border border-border rounded-full px-5 py-2.5 hover:border-foreground transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 z-10">
            <div className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">
              Scroll to zoom in
            </div>
            <div className="animate-bob w-px h-8 bg-muted-foreground" />
          </div>
        </section>

        {/* ===== ABOUT / FIELD GUIDE ===== */}
        <section id="about" className="border-t border-border px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-4xl mx-auto">
            <p className="font-mono text-[11px] uppercase tracking-[.2em] text-primary mb-6 reveal">
              About
            </p>
            <p className="dropcap font-serif text-2xl md:text-[32px] leading-[1.4] tracking-tight reveal">
              I&apos;m driven by a single long-term goal: launching my own hedge fund. At W. P. Carey
              I&apos;m building the foundation for it — three-statement and DCF valuation modeling,
              equity research, and the discipline of the markets through active paper trading. In
              parallel I taught myself to ship software, designing and deploying Vaelor, a full-stack
              AI trading platform, from database to client portal. I care about the same thing in a
              spreadsheet and a codebase: rigor you can defend, and an edge you can measure.
            </p>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden reveal">
              {[
                { k: "GPA", v: "3.47" },
                { k: "Honors", v: "Dean’s List" },
                { k: "Graduating", v: "2028" },
                { k: "Licensing", v: "SIE — in progress" },
              ].map((s) => (
                <div key={s.k} className="bg-background p-5 md:p-6">
                  <div className="font-serif text-2xl md:text-3xl tracking-tight">{s.v}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground mt-2">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== EXPERIENCE ===== */}
        <section id="experience" className="px-6 md:px-10 pb-8 md:pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-16 pb-8 mb-12">
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight reveal">Experience</h2>
              <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground max-w-xs reveal">
                Four roles across university finance operations, trade, and a finance internship.
              </p>
            </div>

            <div className="space-y-6">
              {experience.map((job) => (
                <article
                  key={job.n}
                  className="grain-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-colors duration-300 reveal"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: job.color }}
                        />
                        <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">
                          {job.category}
                        </span>
                      </div>
                      <div className="font-mono text-6xl md:text-7xl leading-none text-border mb-3">
                        {job.n}
                      </div>
                      <h3 className="font-serif text-2xl leading-tight tracking-tight">
                        {job.role}
                      </h3>
                      <p className="text-sm text-primary mt-1">{job.org}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground mt-3">
                        {job.meta}
                      </p>
                    </div>
                    <div className="md:col-span-8">
                      <ul className="space-y-3">
                        {job.points.map((pt, i) => (
                          <li
                            key={i}
                            className="text-[15px] leading-relaxed text-muted-foreground flex gap-3"
                          >
                            <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section id="projects" className="px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-16 pb-8 mb-12">
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight reveal">
                Selected Work
              </h2>
              <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground max-w-xs reveal">
                Where the finance and the engineering meet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p) => {
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <div className="font-mono text-5xl leading-none text-border">{p.n}</div>
                      {p.href && (
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                    <div className="mt-6">
                      <h3 className="font-serif text-3xl tracking-tight group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-primary mt-1">{p.subtitle}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground mt-2">
                        {p.year}
                      </p>
                    </div>
                    <p className="text-[15px] leading-relaxed text-muted-foreground mt-5">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-6">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] uppercase tracking-[.1em] border border-border rounded-full px-2.5 py-1 text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </>
                )
                const cls =
                  "group grain-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-colors duration-300 reveal flex flex-col"
                return p.href ? (
                  <Link
                    key={p.n}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                  >
                    {inner}
                  </Link>
                ) : (
                  <article key={p.n} className={cls}>
                    {inner}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section id="skills" className="px-6 md:px-10 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-16 pb-8 mb-12">
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight reveal">
                Skills &amp; Tools
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {skillGroups.map((g) => (
                <div key={g.label} className="grid md:grid-cols-12 gap-4 md:gap-8 py-7 reveal">
                  <h3 className="md:col-span-4 font-serif text-xl tracking-tight">{g.label}</h3>
                  <p className="md:col-span-8 text-[15px] leading-relaxed text-muted-foreground">
                    {g.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LEADERSHIP · CERTIFICATIONS · COURSEWORK ===== */}
        <section id="more" className="px-6 md:px-10 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="grain-card border border-border rounded-2xl p-6 md:p-8 reveal">
              <p className="font-mono text-[10px] uppercase tracking-[.16em] text-primary mb-4">
                Leadership
              </p>
              <h3 className="font-serif text-xl tracking-tight leading-snug">
                Model United Nations
              </h3>
              <p className="text-sm text-primary mt-1">Alpha Urbane Project · Rep. of Luxembourg</p>
              <p className="text-[14px] leading-relaxed text-muted-foreground mt-4">
                Drafted and presented position papers and resolutions; negotiated with international
                delegates and delivered formal speeches to the assembly.
              </p>
            </div>

            <div className="grain-card border border-border rounded-2xl p-6 md:p-8 reveal">
              <p className="font-mono text-[10px] uppercase tracking-[.16em] text-primary mb-4">
                Licenses &amp; Certifications
              </p>
              <ul className="space-y-4">
                <li>
                  <p className="font-serif text-lg tracking-tight">Bloomberg Market Concepts</p>
                  <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground mt-1">
                    BMC — Completed
                  </p>
                </li>
                <li>
                  <p className="font-serif text-lg tracking-tight">Securities Industry Essentials</p>
                  <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground mt-1">
                    SIE Exam — In progress
                  </p>
                </li>
              </ul>
            </div>

            <div className="grain-card border border-border rounded-2xl p-6 md:p-8 reveal">
              <p className="font-mono text-[10px] uppercase tracking-[.16em] text-primary mb-4">
                Relevant Coursework
              </p>
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                Managerial Accounting · Microeconomics · Macroeconomics · Business Statistics ·
                Business Calculus · Introduction to Programming
              </p>
            </div>
          </div>
        </section>

        {/* ===== CONTACT / FOOTER ===== */}
        <footer
          id="contact"
          className="bg-foreground text-background px-6 md:px-10 py-24 md:py-32"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-[11px] uppercase tracking-[.22em] text-background/50 mb-6">
              Let&apos;s connect
            </p>
            <h3 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight">
              Open to internships &amp; finance
              <br className="hidden sm:block" /> conversations
              <span className="text-primary">.</span>
            </h3>
            <a
              href="mailto:vivaanjain2904@gmail.com"
              className="inline-block mt-8 font-serif text-xl md:text-2xl text-background border-b border-background/30 hover:border-background pb-1 transition-colors"
            >
              vivaanjain2904@gmail.com
            </a>

            <div className="mt-12 flex items-center justify-center gap-6 font-mono text-[11px] uppercase tracking-[.16em] text-background/60">
              <Link
                href="https://linkedin.com/in/vivaanjain2904"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </Link>
              <span className="w-1 h-1 rounded-full bg-background/30" />
              <Link
                href="/vivaan-resume.pdf"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                Résumé PDF
              </Link>
              <span className="w-1 h-1 rounded-full bg-background/30" />
              <Link
                href="https://vaelor.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Vaelor
              </Link>
            </div>

            <p className="mt-16 font-mono text-[11px] tracking-[.14em] text-background/40">
              © {new Date().getFullYear()} Vivaan Jain · Building toward the fund.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
