const revealItems = document.querySelectorAll(
  ".hero__content, .profile-card, .intro, .metrics div, .project, .process-grid div, .timeline article, .education, .skills-grid div, .interests, .contact"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

document.querySelectorAll(".project").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    if (card.classList.contains("project--large")) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(214, 162, 58, 0.18), transparent 16rem)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.backgroundImage = "";
  });
});
