import React, { useState } from "react";
import "./App.css";

const PROJECTS = [
  {
    id: "wallet",
    title: "E-Wallets Platform",
    desc:
      "Secure payment and e-wallet platform with dashboard management and API integrations.",
    badges: ["PHP", "Payments", "Security", "API"],
    link: "https://ewallets.online/",
    img: "/images/gt.png",
  },

  {
    id: "exit",
    title: "Exit Exam System",
    desc:
      "College exam management system with grading, dashboards, and automation features.",
    badges: ["PHP", "MySQL", "Dashboard"],
    link: "https://exitexam.online/",
    img: "/images/8.png",
  },

  {
    id: "real-estate",
    title: "Homelengo Real Estate",
    desc:
      "Real estate listing platform with property management and admin dashboard.",
    badges: ["PHP", "MySQL", "JavaScript"],
    link: "https://cts-properties.com/",
    img: "/images/gh.jpg.png",
  },

  {
    id: "coffee",
    title: "Luwak Arabica",
    desc:
      "Responsive coffee export website with branding and inquiry forms.",
    badges: ["HTML", "CSS", "JavaScript"],
    link: "https://luwakarabica.com/",
    img: "/images/5.png",
  },
];

const SKILLS = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "PHP",
  "Laravel",
  "MySQL",
  "JWT",
  "REST APIs",
  "Docker",
  "Git",
];

function App() {
  const [popupImg, setPopupImg] = useState(null);

  return (
    <div className="container">

      <header className="hero">

        <span className="hero-tag">
          Full Stack Developer • IT Operations
        </span>

        <h1>Natnael Birhanu</h1>

        <h2>
          Building secure web applications, APIs,
          dashboards, and business systems.
        </h2>

        <p className="hero-description">
          Web & software developer with 2+ years
          of professional experience at CTS,
          building production platforms,
          authentication systems, dashboards,
          and backend solutions.
        </p>

       <div className="hero-buttons">
  <a href="#projects" className="btn">
    View Projects
  </a>

  <a
    href="//Natnael Birhanu Cv Draft 2026.pdf"
    className="btn secondary-btn"
    target="_blank"
    rel="noreferrer"
  >
    Download CV
  </a>

  <a
    href="https://github.com/natiii300"
    className="btn secondary-btn"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>
</div>

        <div className="tech-stack">
          <span>React</span>
          <span>Laravel</span>
          <span>PHP</span>
          <span>Node.js</span>
          <span>JWT</span>
          <span>MySQL</span>
          <span>Django</span>
                <span>swift</span>
          <span>Python</span>

        </div>
      </header>

      <section className="experience-section">
        <h2>Experience</h2>

        <div className="experience-card">
          <div className="experience-top">
            <div>
              <h3>CTS</h3>

              <span className="experience-role">
                Web & Software Developer
              </span>
            </div>

            <span className="experience-date">
              2024 — Present
            </span>
          </div>

          <p>
            Worked on production applications,
            APIs, admin systems, e-wallet platforms,
            and internal software solutions.
          </p>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.id}>
              <img
                src={p.img}
                alt={p.title}
                className="project-img"
                onClick={() => setPopupImg(p.img)}
              />

              <div className="project-content">
                <h3>{p.title}</h3>

                <p>{p.desc}</p>

                <div className="badges">
                  {p.badges.map((b) => (
                    <span className="badge" key={b}>
                      {b}
                    </span>
                  ))}
                </div>

                <div className="actions">
                  <a
                    className="btn"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="sidebar">
        <h3>Skills</h3>

        <div className="skills">
          {SKILLS.map((s) => (
            <span className="badge" key={s}>
              {s}
            </span>
          ))}
        </div>

        <div className="contact-card">
          <h3>Contact</h3>

          <p>
            GitHub:
            <a
              href="https://github.com/natiii300"
              target="_blank"
              rel="noreferrer"
            >
              natiii300
            </a>
          </p>
        </div>
      </aside>

      <footer>
        © 2026 Natnael Birhanu • Built with React
      </footer>

      {popupImg && (
        <div
          className="popup-page active"
          onClick={() => setPopupImg(null)}
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setPopupImg(null)}
            >
              ×
            </button>

            <img src={popupImg} alt="popup" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
