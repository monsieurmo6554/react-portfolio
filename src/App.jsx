import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Swift', 'Kotlin', 'HTML/CSS']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Vite']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'FastAPI', 'Python']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL']
    },
    {
      category: 'Mobile',
      skills: ['Capacitor', 'React Native', 'iOS (Swift)', 'Android (Kotlin)']
    },
    {
      category: 'Testing',
      skills: ['Selenium', 'Playwright', 'Jest', 'XCTest', 'Espresso', 'Postman', 'Newman', 'Appium']
    },
    {
      category: 'AI/ML',
      skills: ['LangGraph', 'OpenAI GPT-4', 'LangChain']
    },
    {
      category: 'CI/CD & Automation',
      skills: ['GitHub Actions', 'Azure DevOps', 'Fastlane']
    },
    {
      category: 'Cloud & Hosting',
      skills: ['AWS Amplify', 'CloudFront', 'Render', 'Railway', 'Firebase']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Jira', 'Confluence', 'RevenueCat']
    }
  ];

  const projects = [
    {
      title: 'Job Application AI Agent',
      description: 'Multi-agent AI system with LangGraph orchestrating 3 GPT-4 agents. Analyzes job descriptions, calculates match scores, generates personalized cover letters and resume suggestions. Reduces application time from 2 hours to 5 minutes.',
      tech: ['Python', 'FastAPI', 'LangGraph', 'OpenAI GPT-4', 'React', 'TailwindCSS'],
      github: 'https://github.com/monsieurmo6554',
      demo: null
    },
    {
      title: 'DriveSwift Theory-Test Suite',
      description: '4 SKU bundle (Car, Motorcycle, ADI, LGV-PCV) with freemium + auto-renew subscriptions. Features 36 hazard perception clips, offline mode, and RevenueCat integration. Approved on App Store.',
      tech: ['React', 'Capacitor', 'TypeScript', 'RevenueCat', 'DVSA API'],
      github: 'https://github.com/monsieurmo6554',
      demo: null,
      appStore: 'https://apps.apple.com'
    },
    {
      title: 'NaijaSoundHub - Music Streaming',
      description: 'Full-featured music streaming application with playlist management, audio playback controls, and offline capabilities. Successfully published with active users.',
      tech: ['React', 'Capacitor', 'TypeScript', 'Audio APIs', 'Firebase'],
      github: 'https://github.com/monsieurmo6554/NaijaSoundHub',
      demo: 'https://play.google.com/store/apps/details?id=com.naijasoundhub.app',
      appStore: 'https://apps.apple.com/app/id6738930833'
    },
    {
      title: 'Soothly - Wellness & Sleep App',
      description: 'Wellness and relaxation app featuring sleep sounds, meditation tracks, and native device integration. Cross-platform deployment with in-app purchases.',
      tech: ['React', 'Capacitor', 'JavaScript', 'Native APIs', 'Firebase'],
      github: 'https://github.com/monsieurmo6554/Soothly',
      demo: 'https://play.google.com/store/apps/details?id=com.soothly.app',
      appStore: 'https://apps.apple.com/app/id6744158639'
    },
    {
      title: 'Additional Mobile Apps Portfolio',
      description: '3 additional live applications including productivity and utility apps. All feature in-app purchases, push notifications, offline-first architecture, and cross-platform deployment.',
      tech: ['React', 'Capacitor', 'TypeScript', 'JavaScript', 'Firebase'],
      github: 'https://github.com/monsieurmo6554',
      demo: null
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
                <a href="#experience" className="nav-link" onClick={(e) => {e.preventDefault(); scrollToSection('experience');}}>
                  Experience
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
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Software Engineer (Web, Mobile, Automation)</h2>
              <p className="hero-description">
                5+ years delivering web & mobile products in aviation and gaming. At Altitude Angel, I automated 400+ tests, cut QA time by 40%, and run Azure pipelines.
                At home, I've designed, coded, and monetized 6 live apps across the App Store including DriveSwift (4 SKUs), NaijaSoundHub, and Soothly.
                I build production-ready applications using React, TypeScript, AI/ML, and modern full-stack technologies.
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
                <h3>Professional Background</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Software Engineer with 5+ years of end-to-end delivery experience in web & mobile products across aviation and gaming industries.
                  Currently at Altitude Angel, where I've automated 400+ tests, reduced QA time by 40%, and manage Azure DevOps pipelines for zero-downtime releases.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  My expertise spans the complete software development lifecycle: from writing PBIs and test strategies, to developing automated test suites
                  (Selenium, Playwright, Espresso, Appium), to running CI/CD pipelines and signing off on production releases. I've reduced defects by 25%
                  through shift-left testing approaches and comprehensive automation frameworks.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Previously at Bet365, I automated 200+ regression tests and executed testing across sports betting platforms with real-time odds and payment processing systems.
                </p>
              </div>
              <div>
                <h3>Personal Projects & Entrepreneurship</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Beyond my day job, I design, develop, and monetize my own applications. I have 6 live SKUs across the App Store, all generating revenue through
                  subscriptions and in-app purchases:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><strong>DriveSwift Theory-Test Suite</strong> - 4 SKU bundle (Car, Motorcycle, ADI, LGV-PCV) with freemium model, RevenueCat subscriptions, and 36 hazard perception clips</li>
                  <li><strong>NaijaSoundHub</strong> - Music streaming application</li>
                  <li><strong>Soothly</strong> - Wellness & sleep-sounds app</li>
                  <li><strong>3 Additional Apps</strong> - Productivity and utility applications</li>
                </ul>
                <p style={{ marginBottom: '1.5rem' }}>
                  I also built a <strong>Job Application AI Agent</strong> using LangGraph orchestrating 3 GPT-4 agents that analyze job descriptions,
                  calculate match scores, and generate personalized cover letters—reducing application time from 2 hours to 5 minutes.
                </p>
                <p>
                  I'm comfortable owning the backlog, writing code, reviewing PRs, and releasing via Azure DevOps. I bring both QA rigor and full-stack development capabilities to every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section" style={{ background: 'var(--surface-color)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Core Tech Stack</h2>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {skillCategories.map((category, index) => (
                <div key={index} style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>
                    {category.category}
                  </h3>
                  <p style={{ lineHeight: '1.8', color: 'var(--text-primary)' }}>
                    {category.skills.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured Projects</h2>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {projects.map((project, index) => (
                <div key={index} style={{ marginBottom: '3rem', padding: '2rem', background: 'var(--surface-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>{project.title}</h3>
                  <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{project.description}</p>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Tech Stack: </strong>
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{project.tech.join(', ')}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {project.github && (
                      <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Play Store
                      </a>
                    )}
                    {project.appStore && (
                      <a href={project.appStore} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        App Store
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section" style={{ background: 'var(--surface-color)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Professional Experience</h2>

            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <h3 style={{ margin: 0 }}>Software Engineer (Web, Mobile, Automation)</h3>
                <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>May 2022 → Present</span>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Altitude Angel - Global UAV traffic-management platform</p>
              <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
                <li>Automated 400+ tests (Selenium, Postman, Newman, Espresso) reducing manual effort to 15% and defects by 25%</li>
                <li>Implemented parallel Selenium Grid achieving 40% faster regression testing</li>
                <li>Developed mobile test automation using Espresso (Android) and Appium (iOS) with Page Object Model design pattern</li>
                <li>Integrated automated tests into Azure DevOps pipelines with scheduled nightly runs and PR-triggered test suites</li>
                <li>Owned Azure pipelines for dev → pat → pre → prod with zero-downtime releases twice weekly</li>
                <li>Created PBIs, bug tickets & test cases; groomed 3 sprints ahead in collaboration with Product Owners</li>
                <li>Mentored team members on test automation best practices and mobile testing frameworks</li>
              </ul>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <h3 style={{ margin: 0 }}>QA Analyst</h3>
                <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>2019 → 2022</span>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Bet365 - Global online sports betting and gaming company</p>
              <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
                <li>Automated 200+ regression tests with shift-left approach achieving 25% defect reduction</li>
                <li>Developed and maintained Appium test suites for mobile applications, improving testing efficiency by 30%</li>
                <li>Performed functional, integration, and regression testing on live betting features with real-time odds updates</li>
                <li>Validated payment processing systems including deposits, withdrawals, and third-party integrations</li>
                <li>Participated in release testing for major sporting events ensuring platform stability under high traffic</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Key Technical Achievements</h2>
            <div className="grid grid-2">
              <div style={{ padding: '1.5rem', background: 'var(--surface-color)', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>AI/ML System Architecture</h3>
                <p>Built production-ready multi-agent system with LangGraph orchestrating 3 specialized GPT-4 agents using TypedDict state management and sequential workflow.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'var(--surface-color)', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Revenue-Generating Products</h3>
                <p>Successfully monetized 6 live applications with subscription models and in-app purchases across the App Store.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'var(--surface-color)', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Test Automation Leadership</h3>
                <p>400+ automated tests across multiple frameworks achieving 85% test coverage and 40% faster regression cycles.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'var(--surface-color)', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Cross-Platform Architecture</h3>
                <p>Built shared codebases serving web and mobile platforms with native performance, deployed to App Store and Play Store.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="section" style={{ background: 'var(--surface-color)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Education & Certifications</h2>
            <div className="grid grid-2">
              <div>
                <h3 style={{ marginBottom: '1.5rem' }}>Education & Training</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--background-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                    <strong>DevLab Academy</strong><br />
                    <span style={{ color: 'var(--text-secondary)' }}>SDET → Full-Stack (February - April 2023)</span>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--background-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                    <strong>CODEHANCE</strong><br />
                    <span style={{ color: 'var(--text-secondary)' }}>Full-Stack Development Bootcamp (2023 - Present)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ marginBottom: '1.5rem' }}>Certifications</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--background-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                    <strong>ISTQB Foundation Certified Tester</strong>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--background-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                    <strong>Certified Tester Foundation Level (CTFL)</strong>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--background-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                    <strong>Certified SDET Professional</strong><br />
                    <span style={{ color: 'var(--text-secondary)' }}>(Core Java, Advanced Java)</span>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--background-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                    <strong>Alliance Francaise</strong><br />
                    <span style={{ color: 'var(--text-secondary)' }}>(Centre International d'etudes pedagogiques)</span>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--background-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                    <strong>Apple App Store Connect Certified</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Get In Touch</h2>
            <div className="contact-form">
              <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                  I'm always interested in hearing about new opportunities, challenging projects, and collaboration.
                  Feel free to reach out!
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <a href="mailto:hammedogunrinola2225@gmail.com" className="btn btn-primary">
                    hammedogunrinola2225@gmail.com
                  </a>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                    Phone: 07440 791 981
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <a href="https://github.com/monsieurmo6554" style={{ margin: '0 1rem', color: 'var(--primary-color)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/hammed-ogunrinola-b40303233/" style={{ margin: '0 1rem', color: 'var(--primary-color)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:hammedogunrinola2225@gmail.com" style={{ margin: '0 1rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
                Email
              </a>
            </div>
            <p style={{ color: 'var(--text-secondary)', margin: 0, textAlign: 'center' }}>
              © 2025 Hammed Ogunrinola. Software Engineer (Web, Mobile, Automation)
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
