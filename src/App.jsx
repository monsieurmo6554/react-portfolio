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
    { name: 'React Native', icon: Smartphone },
    { name: 'Capacitor', icon: Smartphone },
    { name: 'Mobile Apps', icon: Smartphone }
  ];

  const projects = [
    {
      title: 'NaijaSoundHub - Music App',
      description: 'A music streaming application built with React + Capacitor, successfully published on both Google Play Store and Apple App Store with real users and reviews.',
      tech: ['React', 'Capacitor', 'TypeScript', 'Audio APIs'],
      github: 'https://github.com/monsieurmo6554/NaijaSoundHub',
      demo: 'https://play.google.com/store/apps/details?id=com.naijasoundhub.app',
      appStore: 'https://apps.apple.com/app/id6738930833'
    },
    {
      title: 'Soothly - Wellness App',
      description: 'A wellness and relaxation mobile application with native device integration, cross-platform deployment, and active users on both major app stores.',
      tech: ['React', 'Capacitor', 'JavaScript', 'Native APIs'],
      github: 'https://github.com/monsieurmo6554/Soothly',
      demo: 'https://play.google.com/store/apps/details?id=com.soothly.app',
      appStore: 'https://apps.apple.com/app/id6744158639'
    },
    {
      title: 'Web Portfolio Project',
      description: 'This portfolio website - a responsive React application showcasing modern web development skills and deployment practices.',
      tech: ['React', 'Vite', 'CSS Variables', 'Netlify'],
      github: 'https://github.com/monsieurmo6554/react-portfolio',
      demo: 'https://hammed-portfolio.netlify.app'
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
                Full-stack developer with 2 published mobile apps: NaijaSoundHub (music streaming) and Soothly (wellness app) - both live on Play Store & App Store. 
                I create modern web and mobile applications using React, Capacitor, and cutting-edge technologies. 
                Passionate about clean code, user experience, and delivering production-ready solutions.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary" onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}>
                  View My Apps
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
                  I'm a passionate full-stack developer with proven expertise in React and mobile app development. 
                  I have successfully published 2 mobile applications on both Google Play Store and Apple App Store, 
                  demonstrating my ability to deliver production-ready solutions that real users download and use.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  My experience spans the complete development lifecycle - from initial concept and development 
                  using React + Capacitor, through testing and optimization, to final deployment and app store approval. 
                  I understand the intricacies of cross-platform development and the requirements for successful app launches.
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
                    <strong>Web Development</strong><br />
                    Building responsive and interactive web applications with React, JavaScript, and modern frameworks
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--surface-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong>Mobile App Development</strong><br />
                    Creating cross-platform mobile applications using Capacitor with native device integration
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--surface-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong>Backend Integration</strong><br />
                    Connecting applications with APIs and managing application state across platforms
                  </li>
                  <li style={{ padding: '1rem', background: 'var(--surface-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong>Deployment & DevOps</strong><br />
                    Complete deployment pipeline experience from development to production across web and mobile platforms
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
                      {project.appStore ? (
                        <>
                          <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            <Smartphone size={16} />
                            Play Store
                          </a>
                          <a href={project.appStore} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            <Smartphone size={16} />
                            App Store
                          </a>
                        </>
                      ) : (
                        project.title !== 'Web Portfolio Project' && (
                          <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                            Demo
                          </a>
                        )
                      )}
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
              <div style={{ textAlign: 'center' }}>
                <button type="button" className="btn btn-primary">
                  <Mail size={16} />
                  hammedogunrinola@yahoo.com
                </button>
              </div>
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
              <a href="https://www.linkedin.com/in/hammed-ogunrinola-b40303233/" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hammedogunrinola@yahoo.com" className="social-link">
                <Mail size={20} />
              </a>
            </div>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              © 2025 Hammed Ogunrinola. Built with React & Vite.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
