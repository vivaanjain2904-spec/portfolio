"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionConfig,
  type Variants,
} from "motion/react"

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
/*  Motion variants                                                    */
/* ------------------------------------------------------------------ */

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

const heroStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

// Shared props for reveal-on-scroll blocks.
const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.18 },
} as const

const cardHover = {
  whileHover: { y: -5 },
  transition: { type: "spring" as const, stiffness: 300, damping: 24 },
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PortfolioPage() {
  const reduce = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)

  // Page-wide scroll progress bar.
  const { scrollYProgress } = useScroll()

  // Scroll-driven "zoom into the frame" hero.
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const stageScale = useTransform(heroProgress, [0, 1], [1, 5.2])
  const stageRotate = useTransform(heroProgress, [0, 1], [0, 7])
  const stageOpacity = useTransform(heroProgress, [0, 0.7, 1], [1, 1, 0])
  const contentY = useTransform(heroProgress, [0, 1], [0, -70])
  const contentOpacity = useTransform(heroProgress, [0, 0.78], [1, 0])

  const stageStyle = reduce ? undefined : { scale: stageScale, rotate: stageRotate, opacity: stageOpacity }
  const contentStyle = reduce ? undefined : { y: contentY, opacity: contentOpacity }

  return (
    <MotionConfig reducedMotion="user">
      <div className="overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />

        {/* Scroll progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-[70]"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />

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
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={stageStyle}
              aria-hidden="true"
            >
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
            </motion.div>

            <div
              className="absolute inset-0 z-[5] pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 44rem 28rem at 50% 46%, var(--paper) 32%, transparent 74%)",
              }}
            />

            <motion.div className="relative z-10 text-center max-w-3xl mx-auto" style={contentStyle}>
              <motion.div variants={heroStagger} initial="hidden" animate="show">
                <motion.p
                  variants={fadeUp}
                  className="font-mono text-[11px] uppercase tracking-[.22em] text-muted-foreground mb-6"
                >
                  Economics &amp; Finance — W. P. Carey School of Business · ’28
                </motion.p>
                <motion.h1
                  variants={fadeUp}
                  className="font-serif text-[13vw] sm:text-[9vw] md:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-light"
                >
                  The long road to running{" "}
                  <em className="italic text-primary">my own fund.</em>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-[15px] md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed"
                >
                  I&apos;m Vivaan Jain — a sophomore at Arizona State studying Economics &amp;
                  Finance, building the modeling, markets, and engineering skills to launch a hedge
                  fund. Every course, role, and project is one frame in that story.
                </motion.p>
                <motion.div variants={fadeUp} className="mt-9 flex items-center justify-center gap-4">
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
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">
                Scroll to zoom in
              </div>
              <div className="animate-bob w-px h-8 bg-muted-foreground" />
            </motion.div>
          </section>

          {/* ===== ABOUT ===== */}
          <section id="about" className="border-t border-border px-6 md:px-10 py-24 md:py-32">
            <div className="max-w-6xl mx-auto">
              <motion.p
                {...inView}
                variants={fadeUp}
                className="font-mono text-[11px] uppercase tracking-[.2em] text-primary mb-8"
              >
                About
              </motion.p>

              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                <motion.figure {...inView} variants={fadeUp} className="lg:col-span-5">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border grain-card">
                    <Image
                      src="/vivaan-profile.jpg"
                      alt="Vivaan Jain, standing in a study lined with finance and business books"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      style={{ objectPosition: "center 15%" }}
                      priority
                    />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Vivaan Jain · Tempe, AZ
                  </figcaption>
                </motion.figure>

                <div className="lg:col-span-7">
                  <motion.p
                    {...inView}
                    variants={fadeUp}
                    className="dropcap font-serif text-2xl md:text-[28px] leading-[1.42] tracking-tight"
                  >
                    I&apos;m driven by a single long-term goal: launching my own hedge fund. At W. P.
                    Carey I&apos;m building the foundation for it — three-statement and DCF valuation
                    modeling, equity research, and the discipline of the markets through active paper
                    trading. In parallel I taught myself to ship software, designing and deploying
                    Vaelor, a full-stack AI trading platform, from database to client portal. I care
                    about the same thing in a spreadsheet and a codebase: rigor you can defend, and an
                    edge you can measure.
                  </motion.p>
                </div>
              </div>

              <motion.div
                {...inView}
                variants={stagger}
                className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden"
              >
                {[
                  { k: "GPA", v: "3.47" },
                  { k: "Honors", v: "Dean’s List" },
                  { k: "Graduating", v: "2028" },
                  { k: "Licensing", v: "SIE — in progress" },
                ].map((s) => (
                  <motion.div key={s.k} variants={fadeUp} className="bg-background p-5 md:p-6">
                    <div className="font-serif text-2xl md:text-3xl tracking-tight">{s.v}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground mt-2">
                      {s.k}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ===== EXPERIENCE ===== */}
          <section id="experience" className="px-6 md:px-10 pb-8 md:pb-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-16 pb-8 mb-12">
                <motion.h2 {...inView} variants={fadeUp} className="font-serif text-4xl md:text-5xl tracking-tight">
                  Experience
                </motion.h2>
                <motion.p
                  {...inView}
                  variants={fadeUp}
                  className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground max-w-xs"
                >
                  Four roles across university finance operations, trade, and a finance internship.
                </motion.p>
              </div>

              <motion.div {...inView} variants={stagger} className="space-y-6">
                {experience.map((job) => (
                  <motion.article
                    key={job.n}
                    variants={fadeUp}
                    {...cardHover}
                    className="grain-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-colors duration-300"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                      <div className="md:col-span-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ background: job.color }} />
                          <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">
                            {job.category}
                          </span>
                        </div>
                        <div className="font-mono text-6xl md:text-7xl leading-none text-border mb-3">
                          {job.n}
                        </div>
                        <h3 className="font-serif text-2xl leading-tight tracking-tight">{job.role}</h3>
                        <p className="text-sm text-primary mt-1">{job.org}</p>
                        <p className="font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground mt-3">
                          {job.meta}
                        </p>
                      </div>
                      <div className="md:col-span-8">
                        <ul className="space-y-3">
                          {job.points.map((pt, i) => (
                            <li key={i} className="text-[15px] leading-relaxed text-muted-foreground flex gap-3">
                              <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ===== PROJECTS ===== */}
          <section id="projects" className="px-6 md:px-10 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-16 pb-8 mb-12">
                <motion.h2 {...inView} variants={fadeUp} className="font-serif text-4xl md:text-5xl tracking-tight">
                  Selected Work
                </motion.h2>
                <motion.p
                  {...inView}
                  variants={fadeUp}
                  className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground max-w-xs"
                >
                  Where the finance and the engineering meet.
                </motion.p>
              </div>

              <motion.div {...inView} variants={stagger} className="grid md:grid-cols-2 gap-6">
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
                    "group grain-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-colors duration-300 flex flex-col"
                  return p.href ? (
                    <motion.a
                      key={p.n}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeUp}
                      {...cardHover}
                      className={cls}
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <motion.article key={p.n} variants={fadeUp} {...cardHover} className={cls}>
                      {inner}
                    </motion.article>
                  )
                })}
              </motion.div>
            </div>
          </section>

          {/* ===== SKILLS ===== */}
          <section id="skills" className="px-6 md:px-10 pb-16 md:pb-24">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-16 pb-8 mb-12">
                <motion.h2 {...inView} variants={fadeUp} className="font-serif text-4xl md:text-5xl tracking-tight">
                  Skills &amp; Tools
                </motion.h2>
              </div>
              <motion.div {...inView} variants={stagger} className="divide-y divide-border border-y border-border">
                {skillGroups.map((g) => (
                  <motion.div key={g.label} variants={fadeUp} className="grid md:grid-cols-12 gap-4 md:gap-8 py-7">
                    <h3 className="md:col-span-4 font-serif text-xl tracking-tight">{g.label}</h3>
                    <p className="md:col-span-8 text-[15px] leading-relaxed text-muted-foreground">{g.items}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ===== LEADERSHIP · CERTIFICATIONS · COURSEWORK ===== */}
          <section id="more" className="px-6 md:px-10 pb-24 md:pb-32">
            <motion.div {...inView} variants={stagger} className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              <motion.div variants={fadeUp} {...cardHover} className="grain-card border border-border rounded-2xl p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[.16em] text-primary mb-4">Leadership</p>
                <h3 className="font-serif text-xl tracking-tight leading-snug">Model United Nations</h3>
                <p className="text-sm text-primary mt-1">Alpha Urbane Project · Rep. of Luxembourg</p>
                <p className="text-[14px] leading-relaxed text-muted-foreground mt-4">
                  Drafted and presented position papers and resolutions; negotiated with international
                  delegates and delivered formal speeches to the assembly.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} {...cardHover} className="grain-card border border-border rounded-2xl p-6 md:p-8">
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
              </motion.div>

              <motion.div variants={fadeUp} {...cardHover} className="grain-card border border-border rounded-2xl p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[.16em] text-primary mb-4">
                  Relevant Coursework
                </p>
                <p className="text-[14px] leading-relaxed text-muted-foreground">
                  Managerial Accounting · Microeconomics · Macroeconomics · Business Statistics ·
                  Business Calculus · Introduction to Programming
                </p>
              </motion.div>
            </motion.div>
          </section>

          {/* ===== CONTACT / FOOTER ===== */}
          <footer id="contact" className="bg-foreground text-background px-6 md:px-10 py-24 md:py-32">
            <motion.div {...inView} variants={stagger} className="max-w-4xl mx-auto text-center">
              <motion.p
                variants={fadeUp}
                className="font-mono text-[11px] uppercase tracking-[.22em] text-background/50 mb-6"
              >
                Let&apos;s connect
              </motion.p>
              <motion.h3
                variants={fadeUp}
                className="font-serif text-3xl md:text-5xl leading-tight tracking-tight"
              >
                Open to internships &amp; finance
                <br className="hidden sm:block" /> conversations
                <span className="text-primary">.</span>
              </motion.h3>
              <motion.a
                variants={fadeUp}
                href="mailto:vivaanjain2904@gmail.com"
                className="inline-block mt-8 font-serif text-xl md:text-2xl text-background border-b border-background/30 hover:border-background pb-1 transition-colors"
              >
                vivaanjain2904@gmail.com
              </motion.a>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex items-center justify-center gap-6 font-mono text-[11px] uppercase tracking-[.16em] text-background/60"
              >
                <Link
                  href="https://linkedin.com/in/vivaanjain2904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </Link>
                <span className="w-1 h-1 rounded-full bg-background/30" />
                <Link href="/vivaan-resume.pdf" target="_blank" className="hover:text-primary transition-colors">
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
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-16 font-mono text-[11px] tracking-[.14em] text-background/40"
              >
                © {new Date().getFullYear()} Vivaan Jain · Building toward the fund.
              </motion.p>
            </motion.div>
          </footer>
        </main>
      </div>
    </MotionConfig>
  )
}
