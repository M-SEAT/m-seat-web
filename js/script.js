const revealItems = document.querySelectorAll(".section, .hero-shot");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
