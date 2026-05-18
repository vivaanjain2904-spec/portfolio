import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Starry Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-background to-background" />
        {/* Stars */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.6), transparent),
            radial-gradient(2px 2px at 130px 80px, white, transparent),
            radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.5), transparent),
            radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 250px 160px, white, transparent),
            radial-gradient(2px 2px at 300px 90px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 350px 200px, rgba(255,255,255,0.8), transparent),
            radial-gradient(2px 2px at 400px 150px, white, transparent),
            radial-gradient(1px 1px at 450px 50px, rgba(255,255,255,0.5), transparent),
            radial-gradient(2px 2px at 500px 180px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 550px 100px, white, transparent),
            radial-gradient(2px 2px at 600px 220px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 650px 60px, rgba(255,255,255,0.8), transparent),
            radial-gradient(2px 2px at 700px 140px, white, transparent),
            radial-gradient(1px 1px at 750px 250px, rgba(255,255,255,0.5), transparent),
            radial-gradient(2px 2px at 800px 80px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 850px 190px, white, transparent),
            radial-gradient(2px 2px at 900px 120px, rgba(255,255,255,0.6), transparent)`,
          backgroundSize: '1000px 300px',
        }} />
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="text-primary font-medium tracking-wider text-sm">
            VIVAAN.IO
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Research</a>
            <a href="#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Roadmap</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen pt-32 pb-20 px-6 lg:px-12 flex flex-col justify-center">
          <div className="mx-auto max-w-7xl w-full">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-xs text-primary tracking-[0.2em] uppercase">
                ASU W. P. Carey School of Business · Finance &amp; Economics · Class of 2028
              </p>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="text-foreground">Future </span>
              <span className="font-serif italic text-primary">Hedge Fund</span>
              <br />
              <span className="text-foreground">Manager.</span>
              <br />
              <span className="font-serif italic text-primary">Building </span>
              <span className="text-muted-foreground">Now.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed">
              Sophomore at Arizona State University studying Finance &amp; Economics, with hands-on experience in finance, paper trading, and market analysis.
            </p>

            {/* Profile Image */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden">
              <Image
                src="/vivaan-profile.jpg"
                alt="Vivaan Jain"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section - Two Column Layout */}
        <section id="about" className="py-24 px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Column - Text */}
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a sophomore studying <span className="text-foreground font-semibold">Finance &amp; Economics at ASU&apos;s W. P. Carey School of Business</span>, driven by a long-term goal of launching my own hedge fund. Every class, internship, and side project is a step toward that.
                </p>
                <p>
                  I&apos;m actively involved in paper trading and market analysis, constantly building my understanding of how capital markets work — not just in theory, but in practice.
                </p>
              </div>

              {/* Right Column - Skills Grid */}
              <div>
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">// Skills &amp; Tools</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Microsoft Excel", "MS Office Suite",
                    "JavaScript", "HTML / CSS",
                    "Java", "Financial Modeling",
                    "DCF Analysis", "Paper Trading",
                    "Market Research", "Managerial Acctg"
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-3 p-4 bg-card/30 border border-border/30 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-muted-foreground font-mono">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Coursework Depth */}
                <div className="mt-12">
                  <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">// Coursework Depth</p>
                  <div className="space-y-4">
                    {[
                      { name: "Macro Econ", progress: 90 },
                      { name: "Mgmt Acctg", progress: 85 },
                      { name: "Pol. Science", progress: 80 },
                      { name: "Sociology", progress: 75 },
                      { name: "History", progress: 70 }
                    ].map((course) => (
                      <div key={course.name} className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground w-24">{course.name}</span>
                        <div className="flex-1 h-2 bg-border/30 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-primary w-12 text-right">{course.progress}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DCF Modeling Section */}
        <section id="research" className="py-24 px-6 lg:px-12 border-t border-border/30">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs text-primary tracking-[0.2em] uppercase mb-4">// Financial Research</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">DCF Modeling &amp; Analysis</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              <div className="p-6 bg-card/30 border border-border/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-3 tracking-wide">METHODOLOGY</p>
                <p className="text-2xl font-bold text-primary font-mono">DCF</p>
                <p className="text-xs text-muted-foreground mt-2">Discounted Cash Flow</p>
              </div>
              <div className="p-6 bg-card/30 border border-border/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-3 tracking-wide">PROJECTION PERIOD</p>
                <p className="text-2xl font-bold text-primary font-mono">5-10 Yr</p>
                <p className="text-xs text-muted-foreground mt-2">Free cash flow forecast</p>
              </div>
              <div className="p-6 bg-card/30 border border-border/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-3 tracking-wide">KEY INPUTS</p>
                <p className="text-2xl font-bold text-primary font-mono">WACC</p>
                <p className="text-xs text-muted-foreground mt-2">Weighted avg cost of capital</p>
              </div>
              <div className="p-6 bg-card/30 border border-border/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-3 tracking-wide">TERMINAL VALUE</p>
                <p className="text-2xl font-bold text-primary font-mono">Gordon</p>
                <p className="text-xs text-muted-foreground mt-2">Growth model approach</p>
              </div>
              <div className="p-6 bg-card/30 border border-border/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-3 tracking-wide">SENSITIVITY</p>
                <p className="text-2xl font-bold text-primary font-mono">2x2</p>
                <p className="text-xs text-muted-foreground mt-2">WACC x growth rate table</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Built comprehensive DCF models as part of self-directed financial research, applying concepts from macroeconomics and managerial accounting coursework. Models include revenue forecasting, free cash flow projections, WACC calculation, terminal value estimation, and sensitivity analysis. This work underpins my approach to equity research and lays the groundwork for the quantitative rigor required in hedge fund investing.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 border border-primary text-primary rounded text-xs tracking-wide">
                EQUITY RESEARCH
              </span>
              <span className="px-4 py-2 border border-primary text-primary rounded text-xs tracking-wide">
                PAPER TRADING
              </span>
              <span className="px-4 py-2 border border-primary text-primary rounded text-xs tracking-wide">
                MARKET ANALYSIS
              </span>
            </div>
          </div>
        </section>

        {/* AI Portfolio Agent - Featured Project */}
        <section className="py-24 px-6 lg:px-12 border-t border-border/30">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs text-primary tracking-[0.2em] uppercase mb-4">// Algorithmic Trading</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">AI Portfolio Agent</h2>
            
            {/* Project Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              <div className="p-6 bg-card/30 border border-border/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-3 tracking-wide">MODELS TRAINED</p>
                <p className="text-2xl font-bold text-primary font-mono">541</p>
                <p className="text-xs text-muted-foreground mt-2">Random Forest classifiers</p>
              </div>
              <div className="p-6 bg-card/30 border border-border/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-3 tracking-wide">UNIVERSE</p>
                <p className="text-2xl font-bold text-primary font-mono">S&amp;P + NQ</p>
                <p className="text-xs text-muted-foreground mt-2">S&amp;P 500 &amp; NASDAQ tickers</p>
              </div>
              <div className="p-6 bg-card/30 border border-border/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-3 tracking-wide">TRADING</p>
                <p className="text-2xl font-bold text-primary font-mono">Alpaca</p>
                <p className="text-xs text-muted-foreground mt-2">Live paper trading API</p>
              </div>
              <div className="p-6 bg-card/30 border border-border/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-3 tracking-wide">BACKTESTING</p>
                <p className="text-2xl font-bold text-primary font-mono">Built-in</p>
                <p className="text-xs text-muted-foreground mt-2">Strategy validation engine</p>
              </div>
              <div className="p-6 bg-card/30 border border-border/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-3 tracking-wide">DEPLOYMENT</p>
                <p className="text-2xl font-bold text-primary font-mono">Live</p>
                <p className="text-xs text-muted-foreground mt-2">Streamlit Cloud</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Built a full-stack algorithmic trading dashboard powered by 541 trained Random Forest models across S&amp;P 500 and NASDAQ tickers. Features a cross-sectional stock screener, backtesting engine, candlestick charts, and a live news feed — all integrated with the Alpaca paper trading API. Reflects my hands-on approach to quantitative investing and systematic strategy development on the path toward running a fund.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 border border-primary text-primary rounded text-xs tracking-wide">
                MACHINE LEARNING
              </span>
              <span className="px-4 py-2 border border-primary text-primary rounded text-xs tracking-wide">
                PAPER TRADING
              </span>
              <span className="px-4 py-2 border border-primary text-primary rounded text-xs tracking-wide">
                QUANTITATIVE FINANCE
              </span>
            </div>

            <Link 
              href="https://ai-portfolio-agent-vivaan.streamlit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm border border-primary px-4 py-2 rounded"
            >
              View Live Project
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 lg:px-12 border-t border-border/30">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs text-primary tracking-[0.2em] uppercase mb-4">// Experience</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">Professional Experience</h2>
            
            <div className="space-y-12">
              <div className="grid md:grid-cols-4 gap-6 pb-12 border-b border-border/30">
                <div>
                  <p className="text-xs text-muted-foreground tracking-wide">MAR – MAY 2026</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Office Assistant</h3>
                  <p className="text-sm text-primary mb-4">ASU DEPARTMENT OF PSYCHOLOGY</p>
                  <p className="text-muted-foreground leading-relaxed">Process financial documentation in Workday, maintaining accuracy across departmental expense and reimbursement records. Manage front-desk operations including call handling, scheduling, mail, and confidential departmental records.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 pb-12 border-b border-border/30">
                <div>
                  <p className="text-xs text-muted-foreground tracking-wide">MAR 2026 – PRESENT</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Maintenance &amp; Operations Office Assistant</h3>
                  <p className="text-sm text-primary mb-4">ASU FACILITIES DEVELOPMENT &amp; MANAGEMENT</p>
                  <p className="text-muted-foreground leading-relaxed">Maintain data integrity in TMA facilities management software while managing inbound calls during evening shift operations. Support administrative and operational workflows on Tempe campus using Microsoft Office and standard office equipment.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 pb-12 border-b border-border/30">
                <div>
                  <p className="text-xs text-muted-foreground tracking-wide">MAY – AUG 2024</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Office Aide</h3>
                  <p className="text-sm text-primary mb-4">ESSE TRADING IMPEX LLP</p>
                  <p className="text-muted-foreground leading-relaxed">Tracked purchase orders and shipments across multiple suppliers in Excel; reconciled invoices to POs and flagged pricing discrepancies. Prepared weekly order-processing and shipment-tracking reports to support operations decisions.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <p className="text-xs text-muted-foreground tracking-wide">MAY – JUN 2023</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Finance Intern</h3>
                  <p className="text-sm text-primary mb-4">INNOLEARN SOLUTIONS PVT LTD</p>
                  <p className="text-muted-foreground leading-relaxed">Assisted finance team with organizing financial records, supporting data analysis, and preparing documentation for internal review. Built and maintained a user-records database in Excel using pivot tables, VLOOKUP, and advanced spreadsheet techniques.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section - 5 Columns */}
        <section id="roadmap" className="py-24 px-6 lg:px-12 border-t border-border/30">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs text-primary tracking-[0.2em] uppercase mb-4">// Roadmap</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">Hedge Fund Roadmap</h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              <div className="border-t-2 border-border/50 pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Foundations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">ASU Finance &amp; Economics degree, paper trading, DCF modeling, Excel mastery</p>
              </div>
              <div className="border-t-2 border-border/50 pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">IB / Research Role</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Summer analyst internships at investment banks or asset managers. CFA Level I begin.</p>
              </div>
              <div className="border-t-2 border-border/50 pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Graduation &amp; FT</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">B.S. Finance &amp; Economics from W. P. Carey. Full-time analyst role. Python, Bloomberg Terminal proficiency.</p>
              </div>
              <div className="border-t-2 border-border/50 pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Build Track Record</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Analyst → Associate at fund. CFA charter. Develop investment thesis and portfolio strategy.</p>
              </div>
              <div className="border-t-2 border-border/50 pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Launch Fund</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Raise capital from LPs. Launch hedge fund with clear mandate, risk framework, and edge.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 lg:px-12 border-t border-border/30">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-xs text-primary tracking-[0.2em] uppercase mb-4">// Contact</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Let&apos;s Connect</h2>
            <p className="text-muted-foreground mb-8">Open to internship opportunities, finance conversations, and IB recruiting.</p>
            
            <p className="text-3xl md:text-4xl font-serif text-foreground mb-12 border-b border-border/50 pb-8 inline-block">
              vivaanjain2904@gmail.com
            </p>

            <div className="flex justify-center gap-4">
              <Link 
                href="https://linkedin.com/in/vivaanjain2904" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors text-sm tracking-wide"
              >
                LINKEDIN
              </Link>
              <Link 
                href="/vivaan-resume.pdf" 
                target="_blank"
                className="px-6 py-3 border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors text-sm tracking-wide"
              >
                RESUME PDF
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 lg:px-12 border-t border-border/30">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Vivaan Jain. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Building toward the fund.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
