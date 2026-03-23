import React, { useState, useEffect } from 'react';
import { 
  FaReact, FaNode, FaPython, FaJava, FaDatabase, FaGitAlt,
  FaMobile, FaCode, FaBrain, FaLinkedin, FaGithub, FaEnvelope,
  FaDownload, FaExternalLinkAlt, FaTimes, FaMoon, FaSun,
  FaHtml5, FaCss3Alt, FaJs, FaDocker, FaAws
} from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiFirebase } from 'react-icons/si';

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    summary: "Full-stack marketplace with payment integration and real-time inventory tracking.",
    description: "Built a comprehensive e-commerce solution with user authentication, product management, shopping cart, and secure checkout. Implemented real-time inventory tracking and analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "placeholder-ecommerce.jpg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "AI Chatbot Assistant",
    summary: "Intelligent chatbot using NLP for customer service automation.",
    description: "Developed an AI-powered chatbot that uses natural language processing to understand queries and provide intelligent responses with continuous learning capabilities.",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    image: "placeholder-chatbot.jpg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    summary: "Cross-platform app for workout tracking and nutrition logging.",
    description: "Created a comprehensive fitness application with workout plans, calorie tracking, progress charts, and social features. Supports offline mode and cross-device sync.",
    tech: ["React Native", "Firebase", "Node.js"],
    image: "placeholder-fitness.jpg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    summary: "Interactive analytics platform with real-time data visualization.",
    description: "Built an enterprise dashboard for data analysis with interactive charts, custom reports, and data export. Handles large datasets efficiently.",
    tech: ["React", "D3.js", "PostgreSQL", "Express"],
    image: "placeholder-dashboard.jpg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 5,
    title: "Task Management System",
    summary: "Collaborative project management tool with team features.",
    description: "Developed a project management platform with task assignment, progress tracking, team collaboration, and automated notifications with calendar integration.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "placeholder-tasks.jpg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 6,
    title: "Weather Forecast App",
    summary: "Real-time weather application with location-based forecasts.",
    description: "Created a responsive weather app providing accurate forecasts, severe weather alerts, and historical data with location detection and multi-city tracking.",
    tech: ["React", "OpenWeather API", "Chart.js"],
    image: "placeholder-weather.jpg",
    liveUrl: "#",
    repoUrl: "#"
  }
];

const skillsData = {
  Frontend: [
    { name: "React.js", icon: <FaReact />, level: 90 },
    { name: "HTML5", icon: <FaHtml5 />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
    { name: "JavaScript", icon: <FaJs />, level: 88 }
  ],
  Backend: [
    { name: "Node.js", icon: <FaNode />, level: 85 },
    { name: "Python", icon: <FaPython />, level: 82 },
    { name: "Java", icon: <FaJava />, level: 78 }
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb />, level: 85 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
    { name: "Firebase", icon: <SiFirebase />, level: 75 }
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt />, level: 88 },
    { name: "Docker", icon: <FaDocker />, level: 70 },
    { name: "AWS", icon: <FaAws />, level: 65 }
  ]
};

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">Divin Daniel</div>
        <nav className="nav">
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('skills')}>Skills</button>
          <button onClick={() => scrollTo('projects')}>Projects</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Divin Daniel</span>
          </h1>
          <h2 className="hero-subtitle">Full-Stack Developer | Aspiring Data Scientist</h2>
          <p className="hero-description">
            Final-year BIT student building innovative web, mobile, AI and database solutions.
            Passionate about clean code, system design, and solving complex problems.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <FaEnvelope /> Contact Me
            </button>
            <button className="btn btn-secondary">
              <FaDownload /> Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content glass">
          <p className="about-text">
            I'm a final-year Business Information Technology student at the University of Johannesburg
            with a strong foundation in full-stack development and a growing passion for data science.
            My experience spans web and mobile applications, AI integration, and database architecture.
          </p>
          <div className="strengths">
            <h3>Core Strengths</h3>
            <ul>
              <li>System Design & Architecture</li>
              <li>Algorithm Development & Problem Solving</li>
              <li>Project Leadership & Team Collaboration</li>
              <li>Rapid Learning & Technology Adaptation</li>
              <li>Full-Stack Development (MERN, Python, Java)</li>
            </ul>
          </div>
          <div className="metrics">
            <div className="metric">
              <div className="metric-number">20+</div>
              <div className="metric-label">Projects Completed</div>
            </div>
            <div className="metric">
              <div className="metric-number">4+</div>
              <div className="metric-label">Years Development</div>
            </div>
            <div className="metric">
              <div className="metric-number">10+</div>
              <div className="metric-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category glass">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card glass" onClick={() => onClick(project)}>
      <div className="project-image">{project.image}</div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="project-tech">
          {project.tech.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveUrl} className="project-link" onClick={(e) => e.stopPropagation()}>
            <FaExternalLinkAlt /> Live
          </a>
          <a href={project.repoUrl} className="project-link" onClick={(e) => e.stopPropagation()}>
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="modal-title">{project.title}</h2>
        <div className="modal-image">{project.image}</div>
        <p className="modal-description">{project.description}</p>
        <div className="modal-tech">
          <h3>Technologies</h3>
          <div className="tech-tags">
            {project.tech.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        <div className="modal-links">
          <a href={project.liveUrl} className="btn btn-primary">
            <FaExternalLinkAlt /> View Live
          </a>
          <a href={project.repoUrl} className="btn btn-secondary">
            <FaGithub /> View Code
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

function Services() {
  const services = [
    { icon: <FaCode />, title: "Web Development", description: "Custom web applications with modern frameworks" },
    { icon: <FaMobile />, title: "Mobile Apps", description: "Cross-platform mobile solutions for iOS and Android" },
    { icon: <FaBrain />, title: "AI & Data Science", description: "Machine learning models and data-driven solutions" },
    { icon: <FaDatabase />, title: "System Design", description: "Scalable architecture and database optimization" }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card glass">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info glass">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <FaEnvelope />
              <span>divin.daniel@example.com</span>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com" className="social-link">
                <FaGithub />
              </a>
            </div>
          </div>
          
          <div className="contact-form-wrapper glass">
            {submitted ? (
              <div className="success-message">
                <h3>Thank you!</h3>
                <p>I'll get back to you soon.</p>
              </div>
            ) : (
              <div className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <button onClick={handleSubmit} className="btn btn-primary btn-full">
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button>
            <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
          </div>
          <p className="copyright">© 2025 Divin Daniel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <ContactForm />
        <Footer />
        <style>{`
:root {
  --color-primary: #1e90ff;
  --color-primary-dark: #1874cd;
  --color-bg: #0a0e27;
  --color-bg-alt: #0f1420;
  --color-surface: rgba(26, 34, 56, 0.6);
  --color-text: #e4e6eb;
  --color-text-muted: #b0b3b8;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.2);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.3);
  --transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}

[data-theme="light"] {
  --color-bg: #f5f7fa;
  --color-bg-alt: #fff;
  --color-surface: rgba(255,255,255,0.8);
  --color-text: #1a2238;
  --color-text-muted: #6b7280;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.15);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.glass {
  background: var(--color-surface);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: var(--shadow-md);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: var(--transition);
}

.header.scrolled {
  background: var(--color-surface);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav button {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
  padding: 0.5rem 0;
}

.nav button:hover {
  color: var(--color-primary);
}

.theme-toggle {
  background: var(--color-surface);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--color-text);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.theme-toggle:hover {
  background: var(--color-primary);
  color: white;
  transform: rotate(180deg);
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
}

.hero-content {
  max-width: 800px;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.highlight {
  color: var(--color-primary);
}

.hero-subtitle {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  max-width: 600px;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid rgba(255,255,255,0.1);
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
}

.btn-full {
  width: 100%;
}

.section {
  padding: 6rem 0;
}

.section-alt {
  background: var(--color-bg-alt);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
}

.about-content {
  padding: 2.5rem;
}

.about-text {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.strengths h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.strengths ul {
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.strengths li {
  padding-left: 1.5rem;
  position: relative;
}

.strengths li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-size: 1.25rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.metric {
  text-align: center;
}

.metric-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.metric-label {
  color: var(--color-text-muted);
  margin-top: 0.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  padding: 2rem;
}

.category-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.skill-icon {
  font-size: 1.5rem;
  color: var(--color-primary);
}

.skill-name {
  font-weight: 500;
}

.skill-bar {
  height: 8px;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), #4169e1);
  border-radius: 4px;
  transition: width 1s ease;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  padding: 0;
  cursor: pointer;
  transition: var(--transition);
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.project-summary {
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: rgba(30, 144, 255, 0.1);
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  transition: var(--transition);
}

.project-link:hover {
  color: var(--color-primary-dark);
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255,255,255,0.1);
  border: none;
  color: var(--color-text);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.modal-close:hover {
  background: var(--color-primary);
  color: white;
}

.modal-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.modal-image {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.modal-description {
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.modal-tech h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.modal-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.service-icon {
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.service-description {
  color: var(--color-text-muted);
  line-height: 1.6;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-info {
  padding: 2rem;
}

.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-muted);
}

.contact-item svg {
  font-size: 1.5rem;
  color: var(--color-primary);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 48px;
  height: 48px;
  background: var(--color-surface);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  font-size: 1.5rem;
  transition: var(--transition);
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-4px);
}

.contact-form-wrapper {
  padding: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 0.875rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  color: var(--color-text);
  font-family: inherit;
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background: rgba(255,255,255,0.08);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #f44336;
}

.error-message {
  color: #f44336;
  font-size: 0.875rem;
}

.success-message {
  text-align: center;
  padding: 2rem;
}

.success-message h3 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.footer {
  background: var(--color-bg-alt);
  padding: 3rem 0;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.footer-content {
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.footer-links button {
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: var(--transition);
}

.footer-links button:hover {
  color: var(--color-primary);
}

.copyright {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .section {
    padding: 4rem 0;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
}
        `}</style>
      </div>
    </ThemeProvider>
  );
}