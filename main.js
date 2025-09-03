

const sections = document.querySelectorAll("section");

const revealSection = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealSection);

document.addEventListener("DOMContentLoaded", () => {
  revealSection();
});

// Button Click Effect
document.querySelectorAll(".btn, button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.9)";
    setTimeout(() => btn.style.transform = "scale(1)", 150);
  });
});

// Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
});

// Projects Data
const projectsData = {
  1: {
    image: "Screenshot 2025-09-03 231454.png",
    name: "Simple Calculator",
    link: "https://github.com/Mernna-Mohammed/Simple-Calculator"
  },
  2: {
    image: "Screenshot 2025-09-04 001722.png",
    name: "Interactive Form Page",
    link: "https://github.com/Mernna-Mohammed/Interactive-Form"
  },
  3: {
    image: "Screenshot 2025-09-03 232648.png",
    name: "Page Interaction Buttons",
    link: "https://github.com/Mernna-Mohammed/Page-Interaction"
  }
};


document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const projectId = card.dataset.project;
    const project = projectsData[projectId];

    if (project) {
      card.innerHTML = `
        <div class="project-details">
          <img src="${project.image}" alt="${project.name}">
          <h4>${project.name}</h4>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `;
    }
  });
});

