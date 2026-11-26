import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Code2, Terminal, Database, BrainCircuit, Workflow, Menu, X, ExternalLink, BriefcaseBusiness, GraduationCap, Download, Sparkles } from 'lucide-react';
import './styles.css';

const skills = [
  { name: 'Java', group: 'Programming', icon: Code2 },
  { name: 'Python', group: 'Programming', icon: Terminal },
  { name: 'SQL', group: 'Database', icon: Database },
  { name: 'DSA', group: 'Core CS', icon: Code2 },
  { name: 'REST APIs', group: 'Backend', icon: Workflow },
  { name: 'n8n', group: 'Automation', icon: Workflow },
  { name: 'AI Automation', group: 'AI Tools', icon: BrainCircuit },
  { name: 'FAISS & Embeddings', group: 'AI Tools', icon: BrainCircuit },
  { name: 'Streamlit', group: 'Frameworks', icon: Code2 },
  { name: 'Flask', group: 'Frameworks', icon: Code2 },
];

const projects = [
  {
    number: '01',
    title: 'ESG Report Automation',
    description: 'An automation workflow for extracting and structuring ESG disclosures from BRSR reports, using document processing, TF-IDF, embeddings and LLM-assisted report generation.',
    tags: ['Python', 'Streamlit', 'FAISS', 'LLM', 'python-docx'],
    accent: 'mint',
    outcome: 'BRSR-focused document workflow'
  },
  {
    number: '02',
    title: 'AI-Powered Job Tracker',
    description: 'A local AI automation system that processes job-related Gmail messages, classifies opportunities with an LLM and organizes them in Google Sheets for tracking and analysis.',
    tags: ['n8n', 'Gmail API', 'Google Sheets', 'Ollama', 'Qwen 2.5'],
    accent: 'violet',
    outcome: 'Email-to-tracker automation'
  },
  {
    number: '03',
    title: 'Smart Complaint Analyzer',
    description: 'A web application that analyzes complaint text, predicts categories and sentiment, and assigns urgency levels to help organize incoming complaints.',
    tags: ['Python', 'Flask', 'SQLite', 'scikit-learn', 'TextBlob'],
    accent: 'blue',
    outcome: 'Text classification workflow'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']];
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>A<span>.</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES</div>
            <h1>Hi, I'm <span className="gradient-text">Ashrith.</span><br/>I build things<br/><span className="muted-heading">for the real world.</span></h1>
            <p className="hero-lede">Aspiring Software Engineer focused on Python, Java, backend development and practical AI automation.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowDown size={16}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={14}/> Hyderabad, India</span><span className="meta-divider"/><span>Software Engineering · Python · Automation</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-glow"/>
              <img src="/ashrith-profile.jpeg" alt="Portrait of Ashrith" className="portrait"/>
              <div className="portrait-caption"><span className="caption-mark">✳</span><div><strong>ASHRITH</strong><small>DEVELOPER · BUILDER · LEARNER</small></div></div>
            </div>
            <div className="floating-card card-top"><Sparkles size={16}/><span>Curious by nature<br/><b>Building every day</b></span></div>
            <div className="floating-card card-bottom"><span className="code-icon">&lt;/&gt;</span><span>Turning ideas into<br/><b>working software</b></span></div>
          </div>
          <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="section-heading-row"><h2>Engineer in progress.<br/><span className="muted-heading">Problem solver by mindset.</span></h2><p className="section-intro">I enjoy learning how systems work and turning that understanding into useful applications.</p></div>
          <div className="about-grid">
            <div className="about-main glass-card"><div className="small-label">A LITTLE ABOUT ME</div><p>I'm a final-year B.Tech student at <strong>Keshav Memorial Engineering College</strong>, Hyderabad. I work with Java and Python, build automation workflows, and explore how AI can make everyday processes more efficient.</p><p>I'm currently strengthening my software engineering foundations through DSA, backend concepts, APIs and hands-on projects. I value clean problem-solving, consistency and learning by building.</p><div className="about-stat-row"><div><strong>8.0</strong><span>Current CGPA</span></div><div><strong>2027</strong><span>Graduation year*</span></div><div><strong>03</strong><span>Featured projects</span></div></div><small className="fine-print">*Update graduation year if your official passing year differs.</small></div>
            <div className="about-side">
              <div className="info-card"><div className="info-icon"><GraduationCap/></div><div><span className="small-label">EDUCATION</span><strong>B.Tech</strong><p>Keshav Memorial Engineering College</p></div></div>
              <div className="info-card"><div className="info-icon"><BriefcaseBusiness/></div><div><span className="small-label">CURRENT ROLE</span><strong>Python Developer Intern</strong><p>Moh Technology · Remote</p></div></div>
              <div className="quote-card"><span>“</span><p>Stay curious. Keep building. Make progress visible.</p><small>MY WORKING PRINCIPLE</small></div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-kicker">02 / TOOLKIT</div><div className="section-heading-row"><h2>Tools I use to<br/><span className="muted-heading">make things happen.</span></h2><p className="section-intro">A growing toolkit across programming, databases, backend development and AI-powered automation.</p></div>
          <div className="skills-grid">{skills.map(({name, group, icon: Icon}) => <div className="skill-chip" key={name}><div className="skill-icon"><Icon size={18}/></div><div><strong>{name}</strong><span>{group}</span></div><span className="skill-arrow">↗</span></div>)}</div>
          <p className="skills-note"><span className="status-dot"/> Skills reflect my current learning and project experience.</p>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div><div className="section-heading-row"><h2>Projects with a<br/><span className="muted-heading">purpose behind them.</span></h2><p className="section-intro">A few things I've built while exploring automation, document intelligence and practical software development.</p></div>
          <div className="project-list">{projects.map(project => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-topline"><span>PROJECT / {project.number}</span><span className="project-symbol"><ArrowUpRight size={19}/></span></div><div className="project-content"><div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-outcome"><span className="small-label">FOCUS</span><strong>{project.outcome}</strong></div></div></article>)}</div>
          <p className="project-footnote">Want to see the implementation? Ask me for the relevant GitHub repository or a project walkthrough.</p>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-kicker">04 / EXPERIENCE</div><div className="section-heading-row"><h2>Learning by<br/><span className="muted-heading">doing the work.</span></h2><p className="section-intro">My first step into a professional development environment.</p></div>
          <div className="timeline-card"><div className="timeline-marker"><span/></div><div className="timeline-body"><div className="timeline-top"><span className="small-label">INTERNSHIP · REMOTE</span><span className="timeline-date">2026</span></div><h3>Python Developer Intern</h3><h4>Moh Technology</h4><p>Selected for a remote Python Developer internship. Focused on gaining practical development experience, improving engineering habits and learning through real tasks.</p><div className="tag-list"><span>Python</span><span>Backend Development</span><span>APIs</span></div><p className="fine-print">Internship duration: 3 months (as accepted). Add specific responsibilities and outcomes as the internship progresses.</p></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-kicker">05 / CONTACT</div><div className="contact-copy"><h2>Have an opportunity<br/>or an idea? <span className="gradient-text">Let's connect.</span></h2><p>I'm open to early-career software engineering opportunities, collaboration and conversations about building useful technology.</p><a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">Say hello <Mail size={17}/></a></div><div className="contact-links"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn <ArrowUpRight size={15}/></a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github/> GitHub <ArrowUpRight size={15}/></a><a href="mailto:YOUR_EMAIL@example.com"><Mail/> Email <ArrowUpRight size={15}/></a></div><footer><a className="brand" href="#home">A<span>.</span></a><span>DESIGNED & BUILT BY ASHRITH</span><span>© 2026</span></footer></div></section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);