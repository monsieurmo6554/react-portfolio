import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Smartphone,
  Globe,
  Server,
  GitBranch
} from 'lucide-react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'TypeScript', icon: Code },
    { name: 'Node.js', icon: Server },
    { name: 'Express', icon: Server },
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Git', icon: GitBranch },
    { name: 'REST APIs', icon: Globe },
    { name: 'React Native', icon: Smartphone }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/monsieurmo6554/ecommerce-platform',
      demo: 'https://your-ecommerce-demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      tech: ['React', 'TypeScript', 'Socket.io', 'Express'],
      github: 'https://github.com/monsieurmo6554/task-manager',
      demo: 'https://your-task-manager-demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and interactive charts.',
      tech: ['React', 'Chart.js', 'Weather API', 'CSS Grid'],
      github: 'https://github.com/monsieurmo6554/weather-dashboard',
      demo: 'https://your-weather-demo.com'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="nav">
          <div className="container nav-container">
            <a href="#home" className="nav-brand" onClick={(e) => {e.preventDefault(); scrollToSection('home');}}>
              Hammed Portfolio
            </a>
            <ul className="nav-links">
              <li>
                <a href="#about" className="nav-link" onClick={(e) => {e.preventDefault(); scrollToSection('about');}}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link" onClick={(e) => {e.preventDefault(); scrollToSection('skills');}}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link" onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <p className="hero-subtitle">Hello, I'm</p>
              <h1 className="hero-title">Hammed Ogunrinola</h1>
              <p className="hero-description">
                I create modern, responsive web applications using React and cutting-edge technologies. 
                Passionate about clean code, user experience, and continuous learning.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary" onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}>
                  View My Work
                </a>
                <a href="#contact" className="btn btn-secondary" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}}>
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>About Me</h2>
            <div className="grid grid-2">
              <div>
                <h3>Who I Am</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  I'm a passionate React developer with a strong foundation in modern web technologies. 
                  I enjoy building scalable applications that solve real-world problems and create 
                  exceptional user experiences.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  My journey in web development started with curiosity about how websites work, 
                  and has evolved into a passion for creating efficient, maintainable, and 
                  user-friendly applications.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open source projects, or sharing knowledge with the developer community.
                </p>
              </div>
              <div>
                <h3>What I Do</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--surface-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong>Frontend Development</strong><br />
                    Building responsive and interactive user interfaces with React, JavaScript, and modern CSS
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--surface-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong>Backend Integration</strong><br />
                    Connecting frontend applications with APIs and managing application state
                  </li>
                  <li style={{ padding: '1rem', background: 'var(--surface-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong>Performance Optimization</strong><br />
                    Ensuring applications are fast, accessible, and optimized for all devices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section" style={{ background: 'var(--surface-color)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Skills & Technologies</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="skill-item">
                    <IconComponent className="skill-icon" />
                    <span style={{ fontWeight: '500' }}>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured Projects</h2>
            <div className="grid grid-3">
              {projects.map((project, index) => (
                <div key={index} className="card project-card">
                  <div className="project-image">
                    <Code size={48} />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                      <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ background: 'var(--surface-color)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Get In Touch</h2>
            <div className="contact-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" className="form-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" className="form-textarea" required></textarea>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn btn-primary">
                    <Mail size={16} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="social-links">
              <a href="https://github.com/monsieurmo6554" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/hammedogunrinola" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hammedogunrinola@gmail.com" className="social-link">
                <Mail size={20} />
              </a>
            </div>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              © 2024 Hammed Ogunrinola. Built with React & Vite.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
