import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  PieChart,
  Sparkles,
} from 'lucide-react'
import './App.css'

const contacts = [
  { icon: Phone, label: '097 186 7250', href: 'tel:+84971867250' },
  { icon: Mail, label: 'klinh4733@gmail.com', href: 'mailto:klinh4733@gmail.com' },
  { icon: MapPin, label: 'Tay Ho, Ha Noi' },
]

const skillGroups = [
  {
    title: 'Data Processing & ETL',
    items: ['Python', 'SQL', 'ETL/ELT', 'Joins', 'Window functions', 'Query optimization'],
  },
  {
    title: 'Analytics',
    items: ['Diagnostic analytics', 'Time series', 'Funnel analysis', 'User path analysis', 'Segmentation'],
  },
  {
    title: 'Visualization & Reporting',
    items: ['Power BI', 'DAX', 'Power Query', 'Data modeling', 'Excel', 'Google Sheets'],
  },
]

const projects = [
  {
    title: 'Sales Electronics Performance Dashboard',
    type: 'Power BI',
    metric: '+30%',
    metricLabel: 'reporting efficiency',
    details: [
      'Built an interactive dashboard consolidating revenue, profit, and customer behavior data for electronics.',
      'Applied DAX and data storytelling to visualize business trends and monitor performance in real time.',
    ],
  },
  {
    title: 'Credit Risk Analysis',
    type: 'Python / SQL',
    metric: '2007-2014',
    metricLabel: 'loan history analyzed',
    details: [
      'Evaluated P2P lending credit risk using historical loan data and the MECE framework.',
      'Connected borrower profiles with loan characteristics to identify key default drivers.',
    ],
  },
  {
    title: 'App Optimization Analysis',
    type: 'User Journey',
    metric: 'Flow',
    metricLabel: 'payment friction mapped',
    details: [
      'Analyzed declines in e-wallet payment success rates across authentication and gateway redirects.',
      'Mapped bottlenecks by app version and network condition to propose payment flow improvements.',
    ],
  },
  {
    title: 'Adidas Sales Performance Dashboard',
    type: 'Excel',
    metric: '10k',
    metricLabel: 'orders visualized',
    details: [
      'Designed an interactive dashboard for revenue, profit margin, region, and sales method analysis.',
      'Used PivotTables, slicers, and dynamic charts to identify product performance and monthly growth.',
    ],
  },
]

const knowledge = [
  'Descriptive and diagnostic analytics',
  'Data cleansing, transformation, and modeling',
  'Business storytelling with quantitative and qualitative methods',
  'Relational database management',
]

function DataVisual() {
  return (
    <div className="data-visual" aria-label="Analytics dashboard preview">
      <div className="visual-topline">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="visual-grid">
        <div className="kpi-panel">
          <span>Revenue</span>
          <strong>+24.8%</strong>
          <small>QoQ growth</small>
        </div>
        <div className="chart-panel bars">
          <i style={{ height: '38%' }}></i>
          <i style={{ height: '62%' }}></i>
          <i style={{ height: '48%' }}></i>
          <i style={{ height: '78%' }}></i>
          <i style={{ height: '56%' }}></i>
        </div>
        <div className="chart-panel line-chart">
          <span></span>
        </div>
        <div className="kpi-panel dark">
          <span>Retention</span>
          <strong>20%</strong>
          <small>client lift</small>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" className="brand">
          NKL
        </a>
        <div>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <span className="eyebrow">
            <Sparkles size={16} />
            Available for Data Analyst roles
          </span>
          <h1>Nguyen Khanh Linh</h1>
          <p className="role">Data Analyst / Business Intelligence</p>
          <p className="intro">
            Economics graduate focused on transforming raw data into clear business insight through
            SQL, Python, Power BI, and structured storytelling.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="/nguyen-khanh-linh-cv.pdf" download>
              <Download size={18} />
              Download CV
            </a>
            <a className="secondary-action" href="#projects">
              View projects
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <DataVisual />
      </section>

      <section className="contact-strip" id="contact">
        {contacts.map((item) => {
          const Icon = item.icon
          const content = (
            <>
              <Icon size={19} />
              <span>{item.label}</span>
            </>
          )

          return item.href ? (
            <a href={item.href} key={item.label}>
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          )
        })}
      </section>

      <section className="section-grid" id="skills">
        <div className="section-heading">
          <span>Technical Strengths</span>
          <h2>Built for analytics work that needs both rigor and business context.</h2>
        </div>
        <div className="skill-list">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <Database size={22} />
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="two-column">
        <article className="profile-panel">
          <BarChart3 size={24} />
          <h2>About</h2>
          <p>
            Dedicated Economics graduate with strong technical skills in SQL, Python, and Power BI.
            I am seeking a Data Analyst role where I can support data-driven decision making with
            practical analysis, visual reporting, and actionable recommendations.
          </p>
          <ul>
            {knowledge.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="timeline">
          <article>
            <BriefcaseBusiness size={22} />
            <div>
              <span>Apr 2025 - Jan 2026</span>
              <h3>Sales Staff, SSM Printing Trading Company Limited</h3>
              <p>
                Managed 50+ B2B accounts, coordinated production delivery, and improved client
                retention by 20% through cost-optimization consultancy and personalized service.
              </p>
            </div>
          </article>
          <article>
            <GraduationCap size={22} />
            <div>
              <span>2021 - 2025</span>
              <h3>Bachelor of Economics, Thuong Mai University</h3>
              <p>GPA 3.24/4.0. Additional training in Power BI and SQL certificates.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading compact">
          <span>Portfolio</span>
          <h2>Projects that turn data into decision support.</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span>{project.type}</span>
                <PieChart size={21} />
              </div>
              <h3>{project.title}</h3>
              <div className="project-metric">
                <strong>{project.metric}</strong>
                <span>{project.metricLabel}</span>
              </div>
              <ul>
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <strong>Nguyen Khanh Linh</strong>
          <span>Data Analyst / Business Intelligence</span>
        </div>
        <a href="mailto:klinh4733@gmail.com">klinh4733@gmail.com</a>
      </footer>
    </main>
  )
}

export default App
