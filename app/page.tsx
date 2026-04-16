"use client"

import Image from "next/image"

export default function Portfolio() {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Vivaan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0e0d;
          --bg2: #111714;
          --bg3: #182219;
          --accent: #1DCA90;
          --accent2: #0f6e56;
          --text: #e8f0eb;
          --muted: #7a9485;
          --border: rgba(29,202,144,0.15);
          --card: #131a15;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          color: var(--text);
          font-size: 16px;
          line-height: 1.6;
          overflow-x: hidden;
        }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 3rem;
          background: rgba(10,14,13,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: var(--accent);
          letter-spacing: 0.1em;
        }
        .nav-links { display: flex; gap: 2rem; }
        .nav-links a {
          font-size: 13px;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--accent); }

        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column; justify-content: center;
          padding: 7rem 3rem 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%);
        }

        .hero-ticker {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.15em;
          margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .ticker-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        .hero h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 1.05;
          color: var(--text);
          max-width: 800px;
          position: relative;
        }
        .hero h1 em {
          font-style: italic;
          color: var(--accent);
        }

        .hero-sub {
          margin-top: 1.5rem;
          font-size: 1.05rem;
          color: var(--muted);
          max-width: 520px;
          font-weight: 300;
          position: relative;
        }

        .hero-stats {
          margin-top: 3rem;
          display: flex; gap: 2rem; flex-wrap: wrap;
          position: relative;
        }
        .stat-box {
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1rem 1.5rem;
          background: rgba(29,202,144,0.04);
          min-width: 130px;
        }
        .stat-val {
          font-family: 'DM Mono', monospace;
          font-size: 1.4rem;
          color: var(--accent);
          font-weight: 500;
        }
        .stat-label {
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.1em;
          margin-top: 2px;
        }

        .hero-image {
          margin-top: 3rem;
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--card);
        }
        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-cta {
          margin-top: 2.5rem;
          display: flex; gap: 1rem;
          position: relative;
        }
        .btn {
          padding: 0.75rem 1.75rem;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }
        .btn-primary {
          background: var(--accent);
          color: #04342c;
        }
        .btn-primary:hover { background: #5DCAA5; }
        .btn-ghost {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--muted);
        }
        .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

        section { padding: 6rem 3rem; }
        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.2em;
          margin-bottom: 1rem;
        }
        .section-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          color: var(--text);
          margin-bottom: 3rem;
        }

        .about { background: var(--bg2); }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .about-text p {
          color: var(--muted);
          margin-bottom: 1rem;
          font-size: 1rem;
          font-weight: 300;
        }
        .about-text p strong { color: var(--text); font-weight: 500; }

        .skills-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
        }
        .skill-item {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: var(--muted);
          display: flex; align-items: center; gap: 0.5rem;
        }
        .skill-dot { width: 5px; height: 5px; background: var(--accent); border-radius: 50%; flex-shrink: 0; }

        .timeline { display: flex; flex-direction: column; gap: 0; }
        .timeline-item {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 2rem;
          padding: 2rem 0;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .timeline-item:first-child { padding-top: 0; }
        .t-date {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.05em;
          padding-top: 4px;
        }
        .t-role {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 2px;
        }
        .t-company {
          font-size: 13px;
          color: var(--accent);
          margin-bottom: 0.75rem;
          font-family: 'DM Mono', monospace;
        }
        .t-desc {
          font-size: 14px;
          color: var(--muted);
          font-weight: 300;
        }

        .dcf { background: var(--bg2); }
        .dcf-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .dcf-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.25rem;
        }
        .dcf-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.15em;
          margin-bottom: 0.5rem;
        }
        .dcf-val {
          font-family: 'DM Mono', monospace;
          font-size: 1.3rem;
          color: var(--accent);
          font-weight: 500;
        }
        .dcf-note {
          font-size: 11px;
          color: var(--muted);
          margin-top: 4px;
        }
        .dcf-desc {
          font-size: 14px;
          color: var(--muted);
          font-weight: 300;
          max-width: 700px;
          line-height: 1.8;
        }
        .dcf-tag {
          display: inline-block;
          margin-top: 1rem;
          background: rgba(29,202,144,0.1);
          border: 1px solid var(--border);
          color: var(--accent);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.1em;
        }

        .roadmap-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
        }
        .roadmap-step {
          background: var(--card);
          padding: 1.5rem;
        }
        .step-num {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        .step-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 0.5rem;
        }
        .step-detail {
          font-size: 12px;
          color: var(--muted);
          font-weight: 300;
        }

        .contact { text-align: center; }
        .contact-email {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: var(--text);
          text-decoration: none;
          border-bottom: 2px solid var(--accent);
          padding-bottom: 4px;
          transition: color 0.2s;
          display: inline-block;
          margin: 1rem 0 2rem;
        }
        .contact-email:hover { color: var(--accent); }
        .contact-links {
          display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap;
        }
        .c-link {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.1em;
          border: 1px solid var(--border);
          padding: 0.6rem 1.25rem;
          border-radius: 6px;
          transition: all 0.2s;
          cursor: pointer;
          background: transparent;
        }
        .c-link:hover { border-color: var(--accent); color: var(--accent); }

        footer {
          padding: 2rem 3rem;
          border-top: 1px solid var(--border);
          display: flex; justify-content: space-between; align-items: center;
        }
        .footer-left {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--muted);
        }
        .footer-right {
          font-size: 11px;
          color: var(--muted);
        }

        .fade-in { opacity: 0; transform: translateY(20px); animation: fadeUp 0.7s ease forwards; }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-1 { animation-delay: 0.1s; }
        .fade-in-2 { animation-delay: 0.25s; }
        .fade-in-3 { animation-delay: 0.4s; }
        .fade-in-4 { animation-delay: 0.55s; }
        .fade-in-5 { animation-delay: 0.7s; }

        .chart-wrap {
          margin-top: 2rem;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.5rem;
          background: var(--card);
        }
        .chart-title {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.15em;
          margin-bottom: 1rem;
        }
        .bar-row {
          display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;
        }
        .bar-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          width: 60px;
          flex-shrink: 0;
        }
        .bar-track {
          flex: 1; height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;
        }
        .bar-fill {
          height: 100%; border-radius: 3px; background: var(--accent);
          transition: width 1.5s ease;
        }
        .bar-val {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--accent);
          width: 40px;
          text-align: right;
          flex-shrink: 0;
        }

        @media (max-width: 700px) {
          nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          section { padding: 4rem 1.5rem; }
          .hero { padding: 6rem 1.5rem 3rem; }
          .about-grid { grid-template-columns: 1fr; gap: 2rem; }
          .timeline-item { grid-template-columns: 1fr; gap: 0.5rem; }
          footer { flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      <nav>
        <div className="nav-logo">VIVAAN.IO</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#dcf">Research</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg"></div>

        <div className="hero-ticker fade-in fade-in-1">
          <span className="ticker-dot"></span>
          ASU W. P. CAREY SCHOOL OF BUSINESS · ECONOMICS · CLASS OF 2028
        </div>

        <h1 className="fade-in fade-in-2">
          Future <em>Hedge Fund</em><br/>Manager.<br/>Building Now.
        </h1>

        <p className="hero-sub fade-in fade-in-3">
          Sophomore at Arizona State University studying Economics, with hands-on experience in finance, paper trading, and market analysis. Founder of Scholars of Business &amp; Economics at ASU.
        </p>

        <div className="hero-image fade-in fade-in-4">
          <Image src="/profile.jpg" alt="Vivaan Jain" fill style={{objectFit: 'cover'}} priority />
        </div>

        <div className="hero-stats fade-in fade-in-4">
          <div className="stat-box">
            <div className="stat-val">3.34</div>
            <div className="stat-label">GPA · DEAN&apos;S LIST</div>
          </div>
          <div className="stat-box">
            <div className="stat-val">Mar &apos;28</div>
            <div className="stat-label">GRADUATION</div>
          </div>
          <div className="stat-box">
            <div className="stat-val">IBIS</div>
            <div className="stat-label">APPLICANT 2025</div>
          </div>
          <div className="stat-box">
            <div className="stat-val">SBE</div>
            <div className="stat-label">FOUNDER · ASU</div>
          </div>
        </div>

        <div className="hero-cta fade-in fade-in-5">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
          <a href="#experience" className="btn btn-ghost">View experience</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="section-label">// ABOUT</div>
        <div className="section-title">Who I Am</div>

        <div className="about-grid">
          <div className="about-text">
            <p>I&apos;m a sophomore studying <strong>Economics at ASU&apos;s W. P. Carey School of Business</strong>, driven by a long-term goal of launching my own hedge fund. Every class, internship, and side project is a step toward that.</p>
            <p>I&apos;m actively involved in paper trading and market analysis, constantly building my understanding of how capital markets work — not just in theory, but in practice.</p>
            <p>I founded <strong>Scholars of Business and Economics (SBE)</strong> at ASU to connect like-minded students passionate about finance and economics, creating a community for serious career-builders.</p>
            <p>Currently applying to the <strong>Investment Banking Industry Scholars (IBIS) program</strong> at W. P. Carey to deepen my IB exposure and network.</p>
          </div>

          <div>
            <div style={{marginBottom: '1rem', fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.15em'}}>// SKILLS &amp; TOOLS</div>
            <div className="skills-grid">
              <div className="skill-item"><span className="skill-dot"></span>Microsoft Excel</div>
              <div className="skill-item"><span className="skill-dot"></span>MS Office Suite</div>
              <div className="skill-item"><span className="skill-dot"></span>JavaScript</div>
              <div className="skill-item"><span className="skill-dot"></span>HTML / CSS</div>
              <div className="skill-item"><span className="skill-dot"></span>Java</div>
              <div className="skill-item"><span className="skill-dot"></span>Financial Modeling</div>
              <div className="skill-item"><span className="skill-dot"></span>DCF Analysis</div>
              <div className="skill-item"><span className="skill-dot"></span>Paper Trading</div>
              <div className="skill-item"><span className="skill-dot"></span>Market Research</div>
              <div className="skill-item"><span className="skill-dot"></span>Managerial Acctg</div>
            </div>

            <div className="chart-wrap" style={{marginTop: '1.5rem'}}>
              <div className="chart-title">// COURSEWORK DEPTH</div>
              <div className="bar-row"><span className="bar-label">Macro Econ</span><div className="bar-track"><div className="bar-fill" style={{width: '90%'}}></div></div><span className="bar-val">90%</span></div>
              <div className="bar-row"><span className="bar-label">Mgmt Acctg</span><div className="bar-track"><div className="bar-fill" style={{width: '85%'}}></div></div><span className="bar-val">85%</span></div>
              <div className="bar-row"><span className="bar-label">Pol. Science</span><div className="bar-track"><div className="bar-fill" style={{width: '80%'}}></div></div><span className="bar-val">80%</span></div>
              <div className="bar-row"><span className="bar-label">Sociology</span><div className="bar-track"><div className="bar-fill" style={{width: '75%'}}></div></div><span className="bar-val">75%</span></div>
              <div className="bar-row"><span className="bar-label">History</span><div className="bar-track"><div className="bar-fill" style={{width: '70%'}}></div></div><span className="bar-val">70%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-label">// EXPERIENCE</div>
        <div className="section-title">Where I&apos;ve Worked</div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="t-date">APR 2026 – PRESENT</div>
            <div>
              <div className="t-role">Maintenance &amp; Operations Office Assistant</div>
              <div className="t-company">ASU FACILITIES DEVELOPMENT &amp; MANAGEMENT</div>
              <div className="t-desc">Managed office operations and work order systems, improving communication across teams. Coordinated maintenance projects and facility requests, developing strong organizational and administrative skills in a large-scale university environment.</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="t-date">MAR 2026 – PRESENT</div>
            <div>
              <div className="t-role">Office Assistant</div>
              <div className="t-company">ASU PSYCHOLOGY DEPARTMENT</div>
              <div className="t-desc">On-campus administrative support role. Managing office operations, coordinating with faculty, and developing organizational and communication skills in a professional academic environment.</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="t-date">MAY – AUG 2024</div>
            <div>
              <div className="t-role">Office Aide</div>
              <div className="t-company">ESSE TRADING</div>
              <div className="t-desc">Supported office operations at a trading firm, gaining exposure to the trading environment and financial services industry. Developed professional skills in a fast-paced, market-oriented setting.</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="t-date">MAY – JUN 2023</div>
            <div>
              <div className="t-role">Finance Intern</div>
              <div className="t-company">INNOLEARN</div>
              <div className="t-desc">Completed a finance internship gaining hands-on experience in financial operations, reporting, and analysis. First formal finance role that confirmed the direction toward a career in capital markets.</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="t-date">ASU · ONGOING</div>
            <div>
              <div className="t-role">Founder &amp; President</div>
              <div className="t-company">SCHOLARS OF BUSINESS &amp; ECONOMICS (SBE) · ASU</div>
              <div className="t-desc">Founded and lead a student organization connecting economics and business students at ASU. Organizing events, networking opportunities, and academic discussions to build a community of future finance professionals.</div>
            </div>
          </div>
        </div>
      </section>

      {/* DCF / RESEARCH */}
      <section className="dcf" id="dcf">
        <div className="section-label">// FINANCIAL RESEARCH</div>
        <div className="section-title">DCF Modeling &amp; Analysis</div>

        <div className="dcf-grid">
          <div className="dcf-card">
            <div className="dcf-label">METHODOLOGY</div>
            <div className="dcf-val">DCF</div>
            <div className="dcf-note">Discounted Cash Flow</div>
          </div>
          <div className="dcf-card">
            <div className="dcf-label">PROJECTION PERIOD</div>
            <div className="dcf-val">5–10 Yr</div>
            <div className="dcf-note">Free cash flow forecast</div>
          </div>
          <div className="dcf-card">
            <div className="dcf-label">KEY INPUTS</div>
            <div className="dcf-val">WACC</div>
            <div className="dcf-note">Weighted avg cost of capital</div>
          </div>
          <div className="dcf-card">
            <div className="dcf-label">TERMINAL VALUE</div>
            <div className="dcf-val">Gordon</div>
            <div className="dcf-note">Growth model approach</div>
          </div>
          <div className="dcf-card">
            <div className="dcf-label">SENSITIVITY</div>
            <div className="dcf-val">2×2</div>
            <div className="dcf-note">WACC × growth rate table</div>
          </div>
        </div>

        <p className="dcf-desc">
          Built comprehensive DCF models as part of self-directed financial research, applying concepts from macroeconomics and managerial accounting coursework. Models include revenue forecasting, free cash flow projections, WACC calculation, terminal value estimation, and sensitivity analysis. This work underpins my approach to equity research and lays the groundwork for the quantitative rigor required in hedge fund investing.
        </p>
        <div>
          <span className="dcf-tag">EQUITY RESEARCH</span>
          <span className="dcf-tag" style={{marginLeft: '0.5rem'}}>PAPER TRADING</span>
          <span className="dcf-tag" style={{marginLeft: '0.5rem'}}>MARKET ANALYSIS</span>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap">
        <div className="section-label">// HEDGE FUND ROADMAP</div>
        <div className="section-title">The Plan, Stage by Stage</div>

        <div className="roadmap-steps">
          <div className="roadmap-step">
            <div className="step-num">01 · NOW</div>
            <div className="step-title">Foundations</div>
            <div className="step-detail">ASU Economics degree, IBIS program, SBE founder, paper trading, DCF modeling, Excel mastery</div>
          </div>
          <div className="roadmap-step">
            <div className="step-num">02 · 2026–27</div>
            <div className="step-title">IB / Research Role</div>
            <div className="step-detail">Summer analyst internships at investment banks or asset managers. CFA Level I begin.</div>
          </div>
          <div className="roadmap-step">
            <div className="step-num">03 · 2028</div>
            <div className="step-title">Graduation &amp; FT</div>
            <div className="step-detail">B.S. Economics from W. P. Carey. Full-time analyst role. Python, Bloomberg Terminal proficiency.</div>
          </div>
          <div className="roadmap-step">
            <div className="step-num">04 · 2028–32</div>
            <div className="step-title">Build Track Record</div>
            <div className="step-detail">Analyst → Associate at fund. CFA charter. Develop investment thesis and portfolio strategy.</div>
          </div>
          <div className="roadmap-step">
            <div className="step-num">05 · 2033+</div>
            <div className="step-title">Launch Fund</div>
            <div className="step-detail">Raise capital from LPs. Launch hedge fund with clear mandate, risk framework, and edge.</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="section-label" style={{textAlign: 'center'}}>// CONTACT</div>
        <div className="section-title" style={{marginBottom: '0.5rem'}}>Let&apos;s Connect</div>
        <p style={{color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '14px'}}>Open to internship opportunities, finance conversations, and IB recruiting.</p>
        <a href="mailto:vivaanjain2904@gmail.com" className="contact-email">vivaanjain2904@gmail.com</a>
        <div className="contact-links">
          <a href="https://linkedin.com/in/vivaanjain2904" className="c-link" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <button onClick={downloadResume} className="c-link">RESUME PDF</button>
          <a href="https://webapp4.asu.edu/directory/person/4181869" className="c-link" target="_blank" rel="noopener noreferrer">ASU PROFILE</a>
        </div>
      </section>

      <footer>
        <div className="footer-left">© 2026 VIVAAN · ASU W. P. CAREY</div>
        <div className="footer-right">Future Hedge Fund Manager</div>
      </footer>
    </>
  )
}
