/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
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
          <img src="/profile.jpg" alt="Vivaan Jain" />
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
            <div style={{ marginBottom: '1rem', fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.15em' }}>// SKILLS &amp; TOOLS</div>
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

            <div className="chart-wrap" style={{ marginTop: '1.5rem' }}>
              <div className="chart-title">// COURSEWORK DEPTH</div>
              <div className="bar-row"><span className="bar-label">Macro Econ</span><div className="bar-track"><div className="bar-fill" style={{ width: '90%' }}></div></div><span className="bar-val">90%</span></div>
              <div className="bar-row"><span className="bar-label">Mgmt Acctg</span><div className="bar-track"><div className="bar-fill" style={{ width: '85%' }}></div></div><span className="bar-val">85%</span></div>
              <div className="bar-row"><span className="bar-label">Pol. Science</span><div className="bar-track"><div className="bar-fill" style={{ width: '80%' }}></div></div><span className="bar-val">80%</span></div>
              <div className="bar-row"><span className="bar-label">Sociology</span><div className="bar-track"><div className="bar-fill" style={{ width: '75%' }}></div></div><span className="bar-val">75%</span></div>
              <div className="bar-row"><span className="bar-label">History</span><div className="bar-track"><div className="bar-fill" style={{ width: '70%' }}></div></div><span className="bar-val">70%</span></div>
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
            <div className="t-date">MAR 2026 – PRESENT</div>
            <div>
              <div className="t-role">Maintenance &amp; Operations Office Assistant</div>
              <div className="t-company">ASU FACILITIES DEVELOPMENT &amp; MANAGEMENT</div>
              <div className="t-desc">Provide customer service by answering phones and entering data into TMA facilities management software. Support night shift operations on ASU&apos;s Tempe campus, assisting with facilities-related tasks. Utilize Microsoft Office tools and standard office equipment to complete administrative and operational tasks.</div>
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

        <span className="dcf-tag">EQUITY RESEARCH</span>
        <span className="dcf-tag" style={{ marginLeft: '0.5rem' }}>PAPER TRADING</span>
        <span className="dcf-tag" style={{ marginLeft: '0.5rem' }}>MARKET ANALYSIS</span>
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
      <section className="contact" id="contact">
        <div className="section-label">// CONTACT</div>
        <div className="section-title">Let&apos;s Connect</div>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Open to internship opportunities, finance conversations, and IB recruiting.</p>

        <div className="contact-links">
          <a href="mailto:vivaanjain2904@gmail.com" className="c-link">EMAIL</a>
          <a href="https://linkedin.com/in/vivaanjain2904" className="c-link" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="/resume.pdf" className="c-link" target="_blank" rel="noopener noreferrer">RESUME PDF</a>
          <a href="https://webapp4.asu.edu/directory/person/4181869" className="c-link" target="_blank" rel="noopener noreferrer">ASU PROFILE</a>
        </div>
      </section>

      <footer>
        <div className="footer-left">VIVAAN.IO</div>
        <div className="footer-right">© 2026 · Built for the long run</div>
      </footer>
    </>
  )
}
