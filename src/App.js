import React, { useState } from "react";
import { ReactTyped } from "react-typed"; // Fixed import for v2+
import "./App.css";
/* ------------------------------------------------------------------ */
/*  PROJECT DATA – matches public/images/ filenames                   */
/* ------------------------------------------------------------------ */

const WORKED_ON_PROJECTS = [
  {
    id: "walia-store",
    title: "Walia Store",
    desc:
      "Managed and improved the Walia Store platform, handling updates, maintenance, and optimizations for smooth operations.",
    badges: ["Management", "Maintenance", "Optimization", "Team Collaboration"],
    link: "https://walia.store/",
    img: "/images/9.png",
  },
  {
    id: "e-wallets",
    title: "E-Wallets Platform",
    desc:
      "Oversaw e-wallets development, added features, and maintained secure payment flows. Ensured proper integration with APIs and user dashboards.",
    badges: ["Management", "Payments", "Security", "API Integration"],
    link: "https://ewallets.online/",
    img: "/images/gt.png",
  },
  {
    id: "exit-exam-system",
    title: "Exit Exam System",
    desc:
      "Managed and improved the college exit exam platform, handling grading, student dashboards, and technical troubleshooting.",
    badges: ["Management", "PHP", "MySQL", "Student Dashboard", "Automation"],
    link: "https://exitexam.online/",
    img: "/images/8.png",
  },
];

const PERSONAL_PROJECTS = [
  {
    id: "cts-platform",
    title: "Ethiopian Blockchain Week",
    desc:
      "event website and internal dashboard and regestration  for the event .",
    badges: ["MySQL", "html, css", "javascript","php"],
    link: "https://www.etbw.online/",
    img: "/images/etbw.png",
  },
  {
    id: "luwak-arabica",
    title: "Luwak Arabica Coffee Export Website",
    desc:
      "Premium coffee export showcase for Luwak Arabica – product catalog, global partner map, inquiry forms, and elegant branding. Fully responsive with smooth scroll and contact integration.",
    badges: ["HTML", "CSS", "JavaScript", "Brand Design", "Responsive"],
    link: "https://luwakarabica.com/",
    img: "/images/5.png",   // <-- NEW IMAGE
  },
 {
  id: "lms",
  title: "Perchesig – Online Certification Platform",
  desc:
    "A training & certification portal for Ethiopians to buy, take, and earn digital certificates in tech, business, and soft skills. Features course enrollment, quizzes, automated grading, and printable PDF certificates.",
  badges: ["PHP", "MySQL", "Authentication", "Payments", "PDF Generation"],
  link: "#",
  img: "/images/2.JPG.png",
},
{
  id: "exchange",
  title: "FlexWork – Ethiopian Freelance Marketplace",
  desc:
    "A local Upwork-style platform where freelancers showcase portfolios, bid on jobs, and get hired. Includes secure escrow, ratings, messaging, and payout via mobile money (Telebirr, CBE Birr).",
  badges: ["Node.js", "Express", "JWT", "Payments", "Real-time Chat"],
  link: "#",
  img: "/images/6.JPG.png",
},
{
  id: "crypto-dashboard",
  title: "CTS Events – Blockchain Week & More",
  desc:
    "Official event management platform for CTS-hosted conferences (Blockchain Week, FinTech Summit, etc.). Handles speaker submissions, ticketing, schedules, live streaming, and sponsor dashboards.",
  badges: ["React", "Node.js", "MySQL", "Stripe", "Live Streaming"],
  link: "#",
  img: "/images/11.png",
},
  {
    id: "real-estate",
    title: "Homelengo Real Estate Platform",
    desc:
      "Real estate platform with property listing, database integration, and dashboard management.",
    badges: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    link: "https://cts-properties.com/",
    img: "/images/gh.jpg.png",
  },
 
  {
    id: "crypto-backend",
    title: "Coin Management Backend",
    desc:
      "Backend API for managing coin data, inserts, updates, and secure JWT authentication with role-based access.",
    badges: ["PHP", "MySQL", "JWT", "API", "Security"],
    link: "#",
    img: "/images/logo512.png",
  },
  {
    id: "blockchainweek",
    title: "BlockchainWeek Official Site",
    desc:
      "Developed and maintained the BlockchainWeek event platform — schedules, speakers, sponsors, and live sessions with interactive features.",
    badges: ["React", "Node.js", "API", "Responsive Design"],
    link: "#",
    img: "/images/blockchainweek.png",
  },
 
];

const SKILLS = [
  "React",
  "Node.js",
  "Express",
  "Laravel",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "JWT",
  "AWS",
  "Vanilla JS",
  "Tailwind",
  "html,css",
];

/* ------------------------------------------------------------------ */
/*  TYPED HEADLINE (Fixed for react-typed v2+)                         */
/* ------------------------------------------------------------------ */
const TypedHeadline = () => (
  <ReactTyped
    strings={[
      "Full-Stack Engineer",
      "Problem Solver",
      "Crypto & FinTech Builder",
      "Open-Source Contributor",
    ]}
    typeSpeed={50}
    backSpeed={30}
    backDelay={1500}
    loop
    smartBackspace
    className="typed-headline"
  />
);

/* ------------------------------------------------------------------ */
/*  MAIN APP COMPONENT                                                */
/* ------------------------------------------------------------------ */
function App() {
  const [popupImg, setPopupImg] = useState(null);
  const openPopup = (src) => setPopupImg(src);
  const closePopup = () => setPopupImg(null);

  const renderProject = (p, index, isPersonal = false) => {
  const isLastFive = isPersonal && index >= PERSONAL_PROJECTS.length - 5;

  return (
    <article
      className={`project-card ${isLastFive ? "special-project" : ""}`}
      key={p.id}
    >
      {/* Regular Projects (with image) */}
      {!isLastFive ? (
        <>
          <img
            src={p.img}
            alt={p.title}
            className="project-img"
            onClick={() => openPopup(p.img)}
            style={{ cursor: "pointer" }}
          />
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="badges">
            {p.badges.map((b) => (
              <span className="badge" key={b}>{b}</span>
            ))}
          </div>
          <div className="actions">
            <a className="btn" href={p.link} target="_blank" rel="noreferrer">
              View
            </a>
          </div>
        </>
      ) : (
        /* Special Style for Last 5 (No Image, No Link) */
        <div className="special-project-content">
          <div className="special-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
          </div>
          <h3>{p.title}</h3>
          <p className="special-desc">{p.desc}</p>
          <div className="badges">
            {p.badges.map((b) => (
              <span className="badge badge-muted" key={b}>{b}</span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

  return (
    <div className="container">
      {/* ==================== HERO ==================== */}
      {/* ==================== HERO ==================== */}
<header className="hero">
  <div className="avatar animate-fade-up" style={{ animationDelay: "0.1s" }}>
    NB
  </div>

  <h1 className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
    Natnael Birhanu — Web & Software Developer
  </h1>

  {/* ==== NEW HUMAN INTRO ==== */}
  <div className="intro-text animate-fade-up" style={{ animationDelay: "0.3s" }}>
    <p>
      Hey! I’m a Web & Software Developer who loves turning ideas into working
      products. For the last **2 years** I’ve been building and shipping
      features at <strong>CTS</strong> – from secure e-wallet flows to
      automated exit-exam platforms.
    </p>
    
    <p>
      I’m always open to new challenges, collaborations, or just a good
      coffee-chat about tech. Scroll down to see what I’ve built, or hit the
      contact card on the right!
    </p>
  </div>
  {/* ==== END NEW INTRO ==== */}

  <div className="lead-wrapper animate-fade-up" style={{ animationDelay: "0.4s" }}>
    <p className="lead">
      Passionate <strong>Web & Software Developer</strong> with{" "}
      <strong>2 years</strong> of professional experience .
    </p>

    <div className="highlight-pills">
      <span className="pill">Walia Store</span>
      <span className="pill">E-Wallets</span>
      <span className="pill">Exit Exam System</span>
      <span className="pill">Secure Payments</span>
      <span className="pill">API Integration</span>
    </div>

    <p className="lead" style={{ marginTop: "12px" }}>
      Independently built <strong>13+</strong> apps, sites, security and backend mentenance including LMS,
      crypto dashboards, real-estate platforms, and Stellar-based
      micro-investment systems.
    </p>

    <div className="highlight-pills" style={{ marginTop: "8px" }}>
      <span className="pill">React</span>
      <span className="pill">Node.js</span>
      <span className="pill">Laravel</span>
      <span className="pill">Docker</span>
      <span className="pill">JWT</span>
    </div>
  </div>
</header>

      {/* ==================== PROJECTS ==================== */}
      <section className="projects-section">
        <h2>Projects I Worked On</h2>
        <div className="projects-grid">
          {WORKED_ON_PROJECTS.map((p, i) => renderProject(p, i))}
        </div>

        <h2>Personal / Built By Me</h2>
        <div className="projects-grid">
          {PERSONAL_PROJECTS.map((p, i) => renderProject(p, i, true))}
        </div>
      </section>

      {/* ==================== SIDEBAR ==================== */}
      <aside className="sidebar">
        <h3>Skills & Tools</h3>
        <div className="skills">
          {SKILLS.map((s) => (
            <span className="badge" key={s}>{s}</span>
          ))}
        </div>
        <div className="contact-card">
          <h3>Contact Me</h3>
          <p>Email: <a href="mailto:natnael@example.com">natnael@example.com</a></p>
          <p>Phone: <a href="tel:+251912345678">+251 912 345 678</a></p>
        </div>
      </aside>

      {/* ==================== FOOTER ==================== */}
      <footer>© 2025 Natnael Birhanu • Built with React </footer>

      {/* ==================== POPUP LIGHTBOX ==================== */}
      <div
        className={`popup-page ${popupImg ? "active" : ""}`}
        onClick={closePopup}
      >
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closePopup}>×</button>
          {popupImg && <img src={popupImg} alt="Full size" />}
        </div>
      </div>
    </div>
  );
}

export default App;
