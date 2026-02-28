<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ommi Mohan Krishan — Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- CURSOR -->
  <div class="cursor" id="cursor"></div>

  <!-- NAV -->
  <nav id="navbar">
    <a class="logo" href="#">Ommi Mohan Krishan</a>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- MOBILE MENU -->
  <div class="mobile-menu" id="mobileMenu">
    <ul>
      <li><a href="#about" class="mobile-link">About</a></li>
      <li><a href="#work" class="mobile-link">Work</a></li>
      <li><a href="#services" class="mobile-link">Services</a></li>
      <li><a href="#contact" class="mobile-link">Contact</a></li>
    </ul>
  </div>

  <!-- HERO -->
  <section class="hero" id="home">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <p class="hero-eyebrow reveal">Open to full-time opportunities — 2026</p>
      <h1 class="reveal">Creative <em>Designer</em><br>&amp; Developer</h1>
      <p class="hero-sub reveal">I build clean, user-focused digital products and I'm looking for a team where I can contribute, grow, and do my best work.</p>
      <div class="hero-cta reveal">
        <a href="#work" class="btn btn-primary">View My Work</a>
        <a href="resume.pdf" class="btn btn-ghost" target="_blank">Download CV</a>
      </div>
    </div>
    <div class="scroll-hint">
      <span>Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about">
    <p class="section-label scroll-reveal">01 — About</p>
    <div class="about-grid">
      <h2 class="scroll-reveal">Designing with <em>intent</em>,<br>building with craft.</h2>
      <div class="about-text scroll-reveal">
        <p>Hi, I am Mohan currenty pursuing my Bachlore degree on Ai and Data Science</p>
        <p>I'm currently looking for a full-time role where I can contribute to meaningful products, collaborate with a talented team, and work on large scale applicatiion. I thrive in fast-moving environments and care deeply about shipping quality work.</p>
        <div class="skills">
          <span class="skill-tag">Python</span>
          <span class="skill-tag">Frontend Development</span>
          <span class="skill-tag">Backend Development</span>
          <span class="skill-tag">MySql</span>
        </div>
      </div>
    </div>
  </section>

  <!-- WORK -->
  <section id="work">
    <p class="section-label scroll-reveal">02 — Selected Work</p>
    <div class="work-grid" id="workGrid">
      <!-- Injected by JS -->
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services">
    <p class="section-label scroll-reveal">03 — Expertise</p>
    <div class="services-list" id="servicesList">
      <!-- Injected by JS -->
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <p class="section-label scroll-reveal">04 — Contact</p>
    <div class="contact-inner">
      <div class="scroll-reveal">
        <h2>Let's find the right <em>fit</em> together.</h2>
        <p class="contact-sub">I'm actively looking for full-time opportunities. If you think I'd be a good addition to your team, I'd love to connect.</p>
        <div class="contact-details">
          <p><span>Email</span> mohankrish110077@gmail.com</p>
          <p><span>Phn number</span>9100336743</p>
          <p><span>Status</span> Actively job seeking</p>
        </div>
      </div>
      <form class="contact-form scroll-reveal" id="contactForm" novalidate>
        <input type="text" id="nameInput" placeholder="Your Name" required />
        <input type="email" id="emailInput" placeholder="Your Email" required />
        <input type="text" id="subjectInput" placeholder="Subject" />
        <textarea id="messageInput" placeholder="Tell me about the role or your team..." required></textarea>
        <button type="submit">Send Message →</button>
        <p class="form-status" id="formStatus"></p>
      </form>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>© 2026 Alex Morgan. All rights reserved.</p>
    <div class="social-links">
      <a href="#">Twitter</a>
      <a href="#">LinkedIn</a>
      <a href="#">GitHub</a>
      <a href="#">Dribbble</a>
    </div>
  </footer>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0a0a0a;
  --surface: #141414;
  --accent: #c8f04e;
  --text: #f0ede6;
  --muted: #777;
  --border: rgba(255,255,255,0.07);
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  overflow-x: hidden;
  cursor: none;
}

/* CUSTOM CURSOR */
.cursor {
  width: 12px; height: 12px;
  background: var(--accent);
  border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease, width 0.2s, height 0.2s;
  transform: translate(-50%, -50%);
}
.cursor.hovered {
  width: 36px; height: 36px;
  background: transparent;
  border: 1.5px solid var(--accent);
}

/* NAV */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.4rem 3rem;
  border-bottom: 1px solid transparent;
  backdrop-filter: blur(0);
  transition: border-color 0.4s, backdrop-filter 0.4s, background 0.4s;
}
nav.scrolled {
  border-color: var(--border);
  backdrop-filter: blur(18px);
  background: rgba(10,10,10,0.8);
}
.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem; color: var(--text);
  text-decoration: none; letter-spacing: 0.02em;
}
.nav-links { display: flex; gap: 2.2rem; list-style: none; }
.nav-links a {
  color: var(--muted); font-size: 0.82rem; text-decoration: none;
  letter-spacing: 0.08em; text-transform: uppercase; transition: color 0.2s;
}
.nav-links a:hover { color: var(--accent); }
.hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.hamburger span {
  display: block; width: 24px; height: 1.5px;
  background: var(--text); transition: all 0.3s;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* MOBILE MENU */
.mobile-menu {
  position: fixed; inset: 0; z-index: 99;
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s;
}
.mobile-menu.open { opacity: 1; pointer-events: all; }
.mobile-menu ul { list-style: none; text-align: center; }
.mobile-menu a {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 8vw, 4rem);
  color: var(--text); text-decoration: none;
  display: block; padding: 0.5rem 0;
  transition: color 0.2s;
}
.mobile-menu a:hover { color: var(--accent); }

/* HERO */
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 0 3rem 5rem;
  position: relative; overflow: hidden;
  border-bottom: 1px solid var(--border);
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 55% 55% at 75% 25%, rgba(200,240,78,0.09) 0%, transparent 70%),
    radial-gradient(ellipse 30% 40% at 10% 80%, rgba(200,240,78,0.04) 0%, transparent 60%);
  pointer-events: none;
}
.hero-content { position: relative; z-index: 1; }
.hero-eyebrow {
  font-size: 0.76rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 1.2rem;
}
.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3.5rem, 8vw, 7.5rem);
  line-height: 1.02; font-weight: 700; max-width: 860px;
}
.hero h1 em { font-style: italic; color: var(--accent); }
.hero-sub {
  margin-top: 1.8rem; max-width: 460px;
  color: var(--muted); font-size: 1rem; line-height: 1.75;
}
.hero-cta {
  margin-top: 2.5rem; display: flex; gap: 1rem; align-items: center;
}
.btn {
  display: inline-block; padding: 0.9rem 2.2rem;
  border-radius: 2px; font-size: 0.85rem; letter-spacing: 0.06em;
  text-decoration: none; font-weight: 500; transition: all 0.25s;
}
.btn-primary { background: var(--accent); color: #0a0a0a; }
.btn-primary:hover { background: #d8ff5a; transform: translateY(-2px); }
.btn-ghost { border: 1px solid var(--border); color: var(--text); }
.btn-ghost:hover { border-color: rgba(255,255,255,0.3); }

.hero-counter {
  position: absolute; right: 3rem; bottom: 5rem;
  display: flex; flex-direction: column; gap: 1.8rem;
  text-align: right; z-index: 1;
}
.counter-item .num {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem; color: var(--accent); line-height: 1;
  display: inline;
}
.counter-item .num-plus {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem; color: var(--accent);
}
.counter-item .label {
  display: block; font-size: 0.72rem; letter-spacing: 0.1em;
  color: var(--muted); text-transform: uppercase; margin-top: 0.2rem;
}

.scroll-hint {
  position: absolute; left: 3rem; bottom: 4rem;
  display: flex; align-items: center; gap: 1rem;
  font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--muted);
}
.scroll-line {
  width: 50px; height: 1px; background: var(--muted);
  position: relative; overflow: hidden;
}
.scroll-line::after {
  content: ''; position: absolute;
  left: -100%; top: 0; width: 100%; height: 100%;
  background: var(--accent);
  animation: scrollLine 2s ease infinite;
}
@keyframes scrollLine {
  0%   { left: -100%; }
  50%  { left: 0%; }
  100% { left: 100%; }
}

/* REVEAL ANIMATIONS */
.reveal, .scroll-reveal {
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible, .scroll-reveal.visible {
  opacity: 1; transform: translateY(0);
}
.reveal:nth-child(1) { transition-delay: 0.1s; }
.reveal:nth-child(2) { transition-delay: 0.25s; }
.reveal:nth-child(3) { transition-delay: 0.4s; }
.reveal:nth-child(4) { transition-delay: 0.55s; }
.reveal:nth-child(5) { transition-delay: 0.7s; }

/* SECTIONS */
section {
  padding: 6rem 3rem;
  border-bottom: 1px solid var(--border);
}
.section-label {
  font-size: 0.74rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 3rem;
}

/* ABOUT */
.about-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 4rem; align-items: start;
}
.about-grid h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.2rem); line-height: 1.2;
}
.about-grid h2 em { font-style: italic; color: var(--accent); }
.about-text p { color: var(--muted); line-height: 1.85; margin-bottom: 1rem; }
.skills { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 2rem; }
.skill-tag {
  padding: 0.35rem 0.9rem; border: 1px solid var(--border);
  font-size: 0.76rem; letter-spacing: 0.05em; color: var(--muted);
  border-radius: 2px; transition: border-color 0.2s, color 0.2s;
}
.skill-tag:hover { border-color: var(--accent); color: var(--accent); }

/* WORK */
.work-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 1.5px; margin-top: 3rem;
}
.work-card {
  background: var(--surface); padding: 2.5rem;
  position: relative; overflow: hidden;
  transition: background 0.3s; cursor: pointer;
}
.work-card:hover { background: #1c1c1c; }
.work-card::before {
  content: ''; position: absolute;
  inset: 0; border-left: 3px solid transparent;
  transition: border-color 0.3s;
}
.work-card:hover::before { border-color: var(--accent); }
.work-tag {
  font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 1rem;
}
.work-card h3 {
  font-family: 'Playfair Display', serif; font-size: 1.6rem;
  margin-bottom: 0.8rem; line-height: 1.2;
}
.work-card p { color: var(--muted); font-size: 0.88rem; line-height: 1.75; }
.work-arrow {
  display: inline-block; margin-top: 1.5rem;
  font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--text); border-bottom: 1px solid var(--border);
  padding-bottom: 0.2rem; transition: all 0.2s;
}
.work-card:hover .work-arrow { color: var(--accent); border-color: var(--accent); }

/* SERVICES */
.services-list { margin-top: 3rem; }
.service-item {
  display: grid; grid-template-columns: 80px 1fr auto;
  align-items: center; gap: 2rem;
  padding: 2rem 0; border-bottom: 1px solid var(--border);
  transition: padding-left 0.3s;
}
.service-item:hover { padding-left: 1rem; }
.service-num {
  font-family: 'Playfair Display', serif; font-size: 2rem;
  color: rgba(255,255,255,0.1); font-style: italic;
}
.service-item h3 { font-size: 1.05rem; font-weight: 400; }
.service-item p { color: var(--muted); font-size: 0.85rem; margin-top: 0.4rem; }
.service-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: flex-end; }

/* CONTACT */
.contact-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 5rem; align-items: start; margin-top: 2rem;
}
.contact-inner h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.5rem); line-height: 1.1; margin-bottom: 1.2rem;
}
.contact-inner h2 em { font-style: italic; color: var(--accent); }
.contact-sub { color: var(--muted); line-height: 1.75; margin-bottom: 2rem; }
.contact-details { display: flex; flex-direction: column; gap: 0.8rem; }
.contact-details p { font-size: 0.88rem; color: var(--muted); }
.contact-details span {
  display: inline-block; width: 90px;
  font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--accent);
}
.contact-form { display: flex; flex-direction: column; gap: 1rem; }
.contact-form input,
.contact-form textarea {
  background: var(--surface); border: 1px solid var(--border);
  color: var(--text); padding: 1rem 1.2rem; border-radius: 2px;
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
  outline: none; transition: border-color 0.25s;
  width: 100%;
}
.contact-form input:focus,
.contact-form textarea:focus { border-color: rgba(200,240,78,0.5); }
.contact-form textarea { resize: vertical; min-height: 130px; }
.contact-form button {
  cursor: pointer; border: none;
  background: var(--accent); color: #0a0a0a;
  padding: 1rem 1.5rem; font-size: 0.85rem; letter-spacing: 0.06em;
  font-weight: 500; border-radius: 2px;
  transition: background 0.2s, transform 0.2s;
  text-align: left;
}
.contact-form button:hover { background: #d8ff5a; transform: translateY(-2px); }
.form-status {
  font-size: 0.82rem; letter-spacing: 0.05em;
  color: var(--accent); min-height: 1.2rem;
}

/* FOOTER */
footer {
  padding: 2.5rem 3rem;
  display: flex; justify-content: space-between; align-items: center;
}
footer p { color: var(--muted); font-size: 0.8rem; }
.social-links { display: flex; gap: 1.8rem; }
.social-links a {
  color: var(--muted); font-size: 0.78rem; text-decoration: none;
  letter-spacing: 0.06em; text-transform: uppercase; transition: color 0.2s;
}
.social-links a:hover { color: var(--accent); }

/* RESPONSIVE */
@media (max-width: 900px) {
  .about-grid, .work-grid, .contact-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .hero-counter { position: static; flex-direction: row; justify-content: flex-start; gap: 3rem; margin-top: 3rem; text-align: left; }
  .counter-item .label { text-align: left; }
  .scroll-hint { display: none; }
  .service-item { grid-template-columns: 50px 1fr; }
  .service-tags { display: none; }
}
@media (max-width: 640px) {
  nav { padding: 1.2rem 1.5rem; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
  section, footer { padding-left: 1.5rem; padding-right: 1.5rem; }
  .hero { padding: 0 1.5rem 3rem; }
  .hero-counter { flex-direction: column; gap: 1.2rem; }
  body { cursor: auto; }
  .cursor { display: none; }
}



/* =========================================
   PORTFOLIO — script.js
   ========================================= */

// ── DATA ─────────────────────────────────

const projects = [
  {
    tag: "Web Application",
    title: "TechVeda",
    desc: "The Ayurvedic Predictor is a machine learning system that connects traditional Ayurvedic knowledge with modern technology. It analyzes symptoms, lifestyle, and body constitution to suggest health imbalances. Using Decision Tree and Random Forest algorithms, it generates accurate predictions and offers quick guidance, improving accessibility to Ayurvedic insights for users everywhere",
  },
  {
    tag: "Web page",
    title: "Personal Portfolio",
    desc: "I have created my personal portfolio using HTML,CSS and JS. With the help of AI integreation for increasing the productivity and enhancing the code."
  },
];

const services = [
  {
    num: "01",
    title: "Python",
    desc: "Translating user needs into intuitive, accessible, and visually refined interfaces.",
    tags: ["Figma", "User Research", "Prototyping"],
  },
  {
    num: "02",
    title: "Frontend Development",
    desc: "Writing clean, performant, and maintainable code that brings designs to life.",
    tags: ["HTML", "css", "JS"],
  },
  {
    num: "03",
    title: "Backend Developement",
    desc: "Building scalable component libraries and style guides that keep teams aligned.",
    tags: ["python", "", "Documentation"],
  },
  {
    num: "04",
    title: "MySql",
    desc: "Working closely with PMs, engineers, and stakeholders to ship great products on time.",
    tags: ["Agile", "Communication", "Handoff"],
  },
];

// ── RENDER PROJECTS ───────────────────────

function renderProjects() {
  const grid = document.getElementById("workGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (p) => `
    <div class="work-card scroll-reveal">
      <p class="work-tag">${p.tag}</p>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <span class="work-arrow">View Project →</span>
    </div>`
    )
    .join("");
}

// ── RENDER SERVICES ───────────────────────

function renderServices() {
  const list = document.getElementById("servicesList");
  if (!list) return;

  list.innerHTML = services
    .map(
      (s) => `
    <div class="service-item scroll-reveal">
      <span class="service-num">${s.num}</span>
      <div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
      <div class="service-tags">
        ${s.tags.map((t) => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");
}

// ── CUSTOM CURSOR ─────────────────────────

function initCursor() {
  const cursor = document.getElementById("cursor");
  if (!cursor) return;

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  const hoverTargets = document.querySelectorAll(
    "a, button, .work-card, .service-item, .skill-tag, input, textarea"
  );
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
  });
}

// ── NAV SCROLL EFFECT ─────────────────────

function initNavScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

// ── HAMBURGER MENU ────────────────────────

function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

// ── SCROLL REVEAL ─────────────────────────

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  // Hero reveals fire immediately
  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  // Observe scroll-reveal elements (added after render)
  const observeScrollReveal = () => {
    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });
  };

  // Small delay so JS-rendered elements are in DOM
  setTimeout(observeScrollReveal, 50);
}

// ── ANIMATED COUNTERS ────────────────────       

// ── CONTACT FORM ──────────────────────────

function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      status.style.color = "#ff6b6b";
      status.textContent = "Please fill in all required fields.";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.style.color = "#ff6b6b";
      status.textContent = "Please enter a valid email address.";
      return;
    }

    // Simulate sending
    const btn = form.querySelector("button");
    btn.textContent = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
      status.style.color = "var(--accent)";
      status.textContent = "Message sent! I'll get back to you as soon as possible.";
      form.reset();
      btn.textContent = "Send Message →";
      btn.disabled = false;
      setTimeout(() => (status.textContent = ""), 5000);
    }, 1800);
  });
}

// ── ACTIVE NAV LINK ON SCROLL ─────────────

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.style.color = link.getAttribute("href") === `#${current}` ? "var(--accent)" : "";
    });
  });
}

// ── INIT ──────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderServices();

  initNavScroll();
  initMobileMenu();
  initScrollReveal();
  initContactForm();
  initActiveNav();

  // Cursor last so hover targets include JS-rendered elements
  setTimeout(initCursor, 100);
});
  <script src="javascript.js"></script>
</body>
</html>
