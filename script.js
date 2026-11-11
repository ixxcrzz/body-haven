
// BODY HAVEN WEBSITE INTERACTIONS

// Reveal elements smoothly as visitors scroll
const revealElements = document.querySelectorAll(
  ".intro, .section-heading, .service-card, .quote-banner, .gallery-grid img, .contact"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});

// Add a staggered entrance to service cards
document.querySelectorAll(".service-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.12}s`;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId.length > 1) {
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});
