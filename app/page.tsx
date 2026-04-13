"use client"

import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f0c]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f0c]/90 backdrop-blur-sm border-b border-[rgba(29,202,144,0.1)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-serif text-xl text-[#1DCA90]">VJ</Link>
          <div className="hidden md:flex gap-8">
            <Link href="#about" className="font-mono text-xs text-[#7a9485] tracking-widest hover:text-[#1DCA90] transition-colors">ABOUT</Link>
            <Link href="#experience" className="font-mono text-xs text-[#7a9485] tracking-widest hover:text-[#1DCA90] transition-colors">EXPERIENCE</Link>
            <Link href="#research" className="font-mono text-xs text-[#7a9485] tracking-widest hover:text-[#1DCA90] transition-colors">RESEARCH</Link>
            <Link href="#roadmap" className="font-mono text-xs text-[#7a9485] tracking-widest hover:text-[#1DCA90] transition-colors">ROADMAP</Link>
            <Link href="#contact" className="font-mono text-xs text-[#7a9485] tracking-widest hover:text-[#1DCA90] transition-colors">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <p className="fade-in fade-in-1 font-mono text-xs text-[#1DCA90] tracking-[0.3em] mb-4">FINANCE & ECONOMICS</p>
        <h1 className="fade-in fade-in-2 font-serif text-5xl md:text-7xl text-[#e8f0eb] mb-4">Vivaan Jain</h1>
        <p className="fade-in fade-in-3 font-light text-lg text-[#7a9485] max-w-xl mb-8">
          Sophomore at Arizona State University studying Economics
        </p>
        
        {/* Profile Image */}
        <div className="fade-in fade-in-4 mt-4 w-48 h-48 rounded-xl overflow-hidden border border-[rgba(29,202,144,0.15)] bg-[#131a15] relative">
          <Image 
            src="/profile.jpg" 
            alt="Vivaan Jain"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Scroll Indicator */}
        <div className="fade-in fade-in-5 mt-16">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#1DCA90] to-transparent mx-auto"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs text-[#1DCA90] tracking-[0.3em] mb-4">01 — ABOUT</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#e8f0eb] mb-8">The Foundation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#a8b8ae] leading-relaxed mb-6">
                A sophomore at the W. P. Carey School of Business at Arizona State University, pursuing a Bachelor of Science in Economics with a 3.34 GPA and Dean&apos;s List recognition.
              </p>
              <p className="text-[#a8b8ae] leading-relaxed">
                With hands-on experience in office administration, data management, and business operations, I&apos;m building a foundation in finance through paper trading, market analysis, and DCF valuation research.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-[#1DCA90] pl-4">
                <p className="font-mono text-xs text-[#7a9485] tracking-wider">UNIVERSITY</p>
                <p className="text-[#e8f0eb]">Arizona State University</p>
              </div>
              <div className="border-l-2 border-[rgba(29,202,144,0.3)] pl-4">
                <p className="font-mono text-xs text-[#7a9485] tracking-wider">MAJOR</p>
                <p className="text-[#e8f0eb]">B.S. Economics</p>
              </div>
              <div className="border-l-2 border-[rgba(29,202,144,0.3)] pl-4">
                <p className="font-mono text-xs text-[#7a9485] tracking-wider">GRADUATION</p>
                <p className="text-[#e8f0eb]">March 2028</p>
              </div>
              <div className="border-l-2 border-[rgba(29,202,144,0.3)] pl-4">
                <p className="font-mono text-xs text-[#7a9485] tracking-wider">FOCUS</p>
                <p className="text-[#e8f0eb]">Financial Markets & Valuation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-[#080c09]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs text-[#1DCA90] tracking-[0.3em] mb-4">02 — EXPERIENCE</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#e8f0eb] mb-12">Professional Journey</h2>
          
          <div className="space-y-12">
            {/* ASU Maintenance & Operations */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#1DCA90] mt-2 pulse-dot"></div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl text-[#e8f0eb]">Maintenance & Operations Office Assistant</h3>
                    <span className="font-mono text-xs text-[#7a9485]">03/2026 — PRESENT</span>
                  </div>
                  <p className="text-[#1DCA90] mb-3">ASU Facilities Development & Management</p>
                  <ul className="text-[#a8b8ae] space-y-2 text-sm">
                    <li>• Provide customer service by answering phones and entering data into TMA facilities management software simultaneously</li>
                    <li>• Support night shift operations (5:00 PM–11:00 PM) on ASU&apos;s Tempe campus, assisting with facilities-related tasks</li>
                    <li>• Utilize Microsoft Office tools and standard office equipment to complete administrative and operational tasks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ASU Psychology Department */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#1DCA90] mt-2 pulse-dot"></div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl text-[#e8f0eb]">Office Assistant, Department of Psychology</h3>
                    <span className="font-mono text-xs text-[#7a9485]">03/2026 — PRESENT</span>
                  </div>
                  <p className="text-[#1DCA90] mb-3">Arizona State University</p>
                  <ul className="text-[#a8b8ae] space-y-2 text-sm">
                    <li>• Provide front-desk support; manage calls, mail, scheduling, and departmental records</li>
                    <li>• Support financial documentation processing and maintain accurate data entry in Workday</li>
                    <li>• Handle confidential information and assist with inventory, organization, and administrative projects</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ESSE Trading */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[rgba(29,202,144,0.5)] mt-2"></div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl text-[#e8f0eb]">Office Aide</h3>
                    <span className="font-mono text-xs text-[#7a9485]">05/2024 — 08/2024</span>
                  </div>
                  <p className="text-[#1DCA90] mb-3">ESSE Trading Impex LLP</p>
                  <ul className="text-[#a8b8ae] space-y-2 text-sm">
                    <li>• Coordinated with suppliers, clients, and departments for order processing and shipment tracking</li>
                    <li>• Maintained spreadsheets, invoices, and purchase orders, supported data entry and report preparation</li>
                    <li>• Organized meetings, prepared agendas, and managed inter-department communication</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* InnoLearn Solutions */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[rgba(29,202,144,0.3)] mt-2"></div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl text-[#e8f0eb]">Finance Intern</h3>
                    <span className="font-mono text-xs text-[#7a9485]">05/2023 — 06/2023</span>
                  </div>
                  <p className="text-[#1DCA90] mb-3">InnoLearn Solutions Pvt Ltd</p>
                  <ul className="text-[#a8b8ae] space-y-2 text-sm">
                    <li>• Enhanced team communication by implementing Gmail automation protocols</li>
                    <li>• Reduced website load time by optimizing HTML scripts and improved user engagement</li>
                    <li>• Managed a database of user records using advanced spreadsheet techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs text-[#1DCA90] tracking-[0.3em] mb-4">03 — RESEARCH</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#e8f0eb] mb-8">DCF Analysis</h2>
          
          <div className="bg-[#0d1310] border border-[rgba(29,202,144,0.1)] rounded-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1DCA90]"></span>
              <span className="font-mono text-xs text-[#7a9485] tracking-wider">VALUATION METHODOLOGY</span>
            </div>
            
            <h3 className="font-serif text-2xl text-[#e8f0eb] mb-4">Discounted Cash Flow Model</h3>
            <p className="text-[#a8b8ae] mb-6 leading-relaxed">
              Through hands-on paper trading and market analysis, I&apos;ve developed a strong understanding of DCF valuation methodology. This approach helps determine the intrinsic value of investments by forecasting future cash flows and discounting them to present value.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-[#080c09] rounded-lg">
                <p className="font-mono text-2xl text-[#1DCA90] mb-2">FCF</p>
                <p className="text-xs text-[#7a9485]">Free Cash Flow Analysis</p>
              </div>
              <div className="text-center p-4 bg-[#080c09] rounded-lg">
                <p className="font-mono text-2xl text-[#1DCA90] mb-2">WACC</p>
                <p className="text-xs text-[#7a9485]">Cost of Capital</p>
              </div>
              <div className="text-center p-4 bg-[#080c09] rounded-lg">
                <p className="font-mono text-2xl text-[#1DCA90] mb-2">TV</p>
                <p className="text-xs text-[#7a9485]">Terminal Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 px-6 bg-[#080c09]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs text-[#1DCA90] tracking-[0.3em] mb-4">04 — ROADMAP</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#e8f0eb] mb-12">The Path Forward</h2>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#1DCA90] via-[rgba(29,202,144,0.3)] to-transparent"></div>
            
            <div className="space-y-12 pl-12">
              <div className="relative">
                <div className="absolute -left-[2.15rem] w-3 h-3 rounded-full bg-[#1DCA90]"></div>
                <p className="font-mono text-xs text-[#1DCA90] mb-2">NOW</p>
                <h3 className="text-xl text-[#e8f0eb] mb-2">Building Foundation</h3>
                <p className="text-[#a8b8ae]">Economics degree at ASU, paper trading, DCF analysis, and professional experience</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[2.15rem] w-3 h-3 rounded-full bg-[rgba(29,202,144,0.5)]"></div>
                <p className="font-mono text-xs text-[#7a9485] mb-2">2026-2027</p>
                <h3 className="text-xl text-[#e8f0eb] mb-2">Finance Internship</h3>
                <p className="text-[#a8b8ae]">Seeking roles in investment banking, asset management, or hedge fund operations</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[2.15rem] w-3 h-3 rounded-full bg-[rgba(29,202,144,0.3)]"></div>
                <p className="font-mono text-xs text-[#7a9485] mb-2">2028</p>
                <h3 className="text-xl text-[#e8f0eb] mb-2">Graduate & Enter Industry</h3>
                <p className="text-[#a8b8ae]">Launch career in quantitative finance or portfolio management</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[2.15rem] w-3 h-3 rounded-full border border-[rgba(29,202,144,0.3)] bg-transparent"></div>
                <p className="font-mono text-xs text-[#7a9485] mb-2">FUTURE</p>
                <h3 className="text-xl text-[#e8f0eb] mb-2">Hedge Fund Manager</h3>
                <p className="text-[#a8b8ae]">Lead investment strategies and build a track record of alpha generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs text-[#1DCA90] tracking-[0.3em] mb-4">05 — CONTACT</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#e8f0eb] mb-8">Let&apos;s Connect</h2>
          <p className="text-[#a8b8ae] mb-12 max-w-lg mx-auto">
            Interested in discussing finance, markets, or potential opportunities? I&apos;d love to hear from you.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a 
              href="mailto:vivaanjain2904@gmail.com" 
              className="font-mono text-xs text-[#7a9485] tracking-widest border border-[rgba(29,202,144,0.15)] px-5 py-3 rounded-md hover:border-[#1DCA90] hover:text-[#1DCA90] transition-colors"
            >
              vivaanjain2904@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/vivaanjain2904" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#7a9485] tracking-widest border border-[rgba(29,202,144,0.15)] px-5 py-3 rounded-md hover:border-[#1DCA90] hover:text-[#1DCA90] transition-colors"
            >
              LINKEDIN
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#7a9485] tracking-widest border border-[rgba(29,202,144,0.15)] px-5 py-3 rounded-md hover:border-[#1DCA90] hover:text-[#1DCA90] transition-colors"
            >
              RESUME PDF
            </a>
          </div>
          
          <p className="font-mono text-xs text-[#3d4f44]">(480) 973-0455</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[rgba(29,202,144,0.1)]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-[#3d4f44]">© 2026 Vivaan Jain</p>
          <p className="font-mono text-xs text-[#3d4f44]">Built with precision</p>
        </div>
      </footer>
    </div>
  )
}
