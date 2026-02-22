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