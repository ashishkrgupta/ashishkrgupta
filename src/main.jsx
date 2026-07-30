import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './header-actions.css';

const roles = [
  {
    company: 'Securonix', role: 'Senior Staff Engineer', period: 'Nov 2020 — Present', location: 'Pune, India',
    tags: ['Security', 'Kafka', 'Kubernetes'],
    intro: 'Leading architecture and delivery for a SOAR platform trusted by enterprise security teams globally.',
    wins: ['Designed services processing 1M–5M security events daily at sub-second latency.', 'Improved API response time 5× with Redis caching, while reducing database read load by 60%.', 'Created 90+ connector integrations and a Python SDK that cut onboarding from 4 weeks to under 3 days.', 'Mentored 8+ engineers and accelerated delivery through AI-assisted engineering practices.']
  },
  {
    company: 'Citicorp Services India', role: 'Officer, Software Engineer', period: 'Sep 2018 — Nov 2020', location: 'Pune, India',
    tags: ['Fintech', 'Spring Boot', 'Elasticsearch'],
    intro: 'Built core data infrastructure connecting financial reference data to global Citi systems.',
    wins: ['Built ingestion pipelines processing 10K+ reference data updates each day.', 'Reduced data-quality incident resolution from 4+ hours to under 15 minutes with live analytics.', 'Delivered APIs for 5–10 downstream systems with <200ms p95 latency at 500 requests/second.']
  },
  {
    company: 'Synechron', role: 'Senior Associate, Software Engineer', period: 'Jul 2017 — Sep 2018', location: 'Pune, India',
    tags: ['Trading', 'MongoDB', 'PCF'],
    intro: 'Architected trading middleware for real-time order placement between Bloomberg and HSBC.',
    wins: ['Supported 500+ concurrent traders and 5K+ daily transactions at <500ms confirmation latency.', 'Developed live Angular dashboards for positions and cash-balance monitoring.', 'Helped lower post-release defects by 35% through stronger review practices.']
  },
  {
    company: 'Cognizant', role: 'Associate, Java Developer', period: 'May 2016 — Jul 2017', location: 'Mumbai, India',
    tags: ['Enterprise', 'Mule ESB', 'Cassandra'],
    intro: 'Delivered a configurable tax platform spanning complex regulatory workflows across 13 countries.',
    wins: ['Implemented resilient integrations with 99.9% message-delivery reliability.', 'Reduced tax computation processing time by 50% with configurable Drools rules.', 'Maintained zero production audit failures across local tax authority requirements.']
  },
  {
    company: 'Cylsys Software Solutions', role: 'Java Developer', period: 'Mar 2013 — Apr 2016', location: 'Mumbai, India',
    tags: ['CRM', 'Solr', 'Full stack'],
    intro: 'Built real-estate CRM platforms used by more than 100 clients.',
    wins: ['Developed full sales-lifecycle features across 5K+ property inventories.', 'Reduced property search latency from 3+ seconds to under 500ms with Solr indexing.']
  }
];

const skills = [
  ['Architecture', ['Distributed Systems', 'Microservices', 'Event-driven', 'CQRS', 'System Design']],
  ['Engineering', ['Java', 'Spring Boot', 'Python', 'FastAPI', 'JavaScript']],
  ['Data & messaging', ['Apache Kafka', 'Redis', 'PostgreSQL', 'MongoDB', 'Elasticsearch']],
  ['Cloud & delivery', ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'CI/CD']]
];

function App() {
  const [activeRole, setActiveRole] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  const jump = id => { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  return <>
    <header className={scrolled ? 'nav nav--scrolled' : 'nav'}>
      <button className="brand" onClick={() => jump('#top')} aria-label="Back to top"><span>AKG</span><i>ashish.dev</i></button>
      <div className="nav-actions">
        <nav className={menuOpen ? 'links links--open' : 'links'}>
          <button onClick={() => jump('#experience')}>Experience</button><button onClick={() => jump('#expertise')}>Expertise</button><button onClick={() => jump('#contact')}>Contact</button>
        </nav>
        <div className="quick-contact">
          <a href="tel:+917208769992" aria-label="Call Ashish"><span>☎</span><i>Call</i></a>
          <a href="https://wa.me/917208769992" target="_blank" rel="noreferrer" aria-label="Message Ashish on WhatsApp"><span>◔</span><i>WhatsApp</i></a>
        </div>
        <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title="Toggle color theme"><span>{theme === 'dark' ? '☀' : '☾'}</span><i>{theme === 'dark' ? 'Light' : 'Dark'}</i></button>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? '×' : '☰'}</button>
      </div>
    </header>

    <main id="top">
      <section className="hero section">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span></span> Available for staff & principal opportunities</p>
          <h1>Building systems<br/>that <em>move fast.</em></h1>
          <p className="lede">I’m Ashish Kumar Gupta, a Senior Staff Engineer who turns complex, high-volume systems into dependable platforms for cybersecurity and fintech.</p>
          <div className="hero-actions"><a className="button button--primary" href="mailto:ashishkrgupta@hotmail.com">Let’s talk <b>↗</b></a><button className="button button--ghost" onClick={() => jump('#experience')}>Explore my work <b>↓</b></button></div>
          <div className="availability"><span className="pulse"></span> Pune, India <small>•</small> Working globally</div>
        </div>
        <div className="hero-art reveal">
          <div className="orbit orbit--one"></div><div className="orbit orbit--two"></div>
          <div className="monogram"><small>AKG</small><strong>13<sup>+</sup></strong><span>years of engineering</span></div>
          <div className="float-card float-card--top"><b>&lt; 1s</b><span>event latency</span></div>
          <div className="float-card float-card--bottom"><b>1M–5M</b><span>events / day</span></div>
        </div>
      </section>

      <section className="metrics section" aria-label="Career highlights">
        {[['13+', 'years shaping software'], ['500+', 'enterprise teams supported'], ['90+', 'security integrations built'], ['13', 'countries served']].map(([n, l]) => <div className="metric" key={l}><b>{n}</b><span>{l}</span></div>)}
      </section>

      <section id="experience" className="work section">
        <div className="section-title"><p className="eyebrow">Selected journey</p><h2>Impact, measured<br/>in outcomes.</h2><p>Click a role to explore the work behind the numbers.</p></div>
        <div className="career">
          <div className="role-list">{roles.map((role, index) => <button key={role.company} className={activeRole === index ? 'role active' : 'role'} onClick={() => setActiveRole(index)}><span className="role-index">0{index + 1}</span><span><b>{role.company}</b><small>{role.period}</small></span><i>↗</i></button>)}</div>
          <article className="role-detail" key={activeRole}>
            <div className="role-detail-head"><div><p>{roles[activeRole].location}</p><h3>{roles[activeRole].role}</h3></div><span className="role-period">{roles[activeRole].period}</span></div>
            <p className="intro">{roles[activeRole].intro}</p>
            <ul>{roles[activeRole].wins.map(win => <li key={win}>{win}</li>)}</ul>
            <div className="tag-row">{roles[activeRole].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>
        </div>
      </section>

      <section id="expertise" className="expertise section">
        <div className="section-title"><p className="eyebrow">Technical range</p><h2>Fluent across<br/>the platform.</h2></div>
        <div className="skill-grid">{skills.map(([group, items], index) => <article className="skill-card" key={group}><span>0{index + 1}</span><h3>{group}</h3><div>{items.map(item => <button key={item} onClick={() => navigator.clipboard?.writeText(item)} title="Click to copy">{item}</button>)}</div></article>)}</div>
      </section>

      <section className="open-source section"><div><p className="eyebrow">Beyond the day job</p><h2>Making integration<br/>work less repetitive.</h2></div><article><span className="package-icon">⌘</span><div><p>Open source package</p><h3>scnx-soar-integration-starter <a href="https://pypi.org/project/scnx-soar-integration-starter/" target="_blank" rel="noreferrer">↗</a></h3><span>Python SDK that helps security teams build SOAR connectors faster — cutting setup from four weeks to less than three days.</span></div></article></section>

      <section id="contact" className="contact"><div className="section"><p className="eyebrow">Start a conversation</p><h2>Have a tough systems<br/>problem to solve?</h2><a href="mailto:ashishkrgupta@hotmail.com" className="email">ashishkrgupta@hotmail.com <span>↗</span></a><div className="contact-links"><a href="https://www.linkedin.com/in/ashish-kumar-gupta-9a183525" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="tel:+917208769992">+91 7208769992</a></div></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Ashish Kumar Gupta</span><span>Designed & built with intent.</span></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App />);
