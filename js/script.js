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

const languageOptions = [
  { code: "hr", label: "Hrvatski" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "sl", label: "Slovenščina" },
  { code: "bs", label: "Bosanski" },
];

const translations = window.MSEAT_TRANSLATIONS || {};
const languages = languageOptions.map((language) => language.code);

const getText = (language, key) => translations[language]?.[key] ?? translations.hr[key] ?? "";

function applyLanguage(language) {
  const active = translations[language] ? language : "hr";
  document.documentElement.lang = active;
  document.title = getText(active, "document.title");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getText(active, element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key) element.setAttribute(attr, getText(active, key));
    });
  });

  const languageSelect = document.querySelector("#languageSelect");
  if (languageSelect) {
    languageSelect.value = active;
  }

  localStorage.setItem("mseat-web-language", active);
}

const savedLanguage = localStorage.getItem("mseat-web-language") || "hr";
applyLanguage(savedLanguage);

document.querySelector("#languageSelect")?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});


const backToTopButton = document.querySelector("#backToTop");
const featuresSection = document.querySelector("#funkcije");

function updateBackToTop() {
  if (!backToTopButton || !featuresSection) return;
  const shouldShow = window.scrollY >= featuresSection.offsetTop - 80;
  backToTopButton.classList.toggle("is-visible", shouldShow);
}

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateBackToTop, { passive: true });
window.addEventListener("resize", updateBackToTop);
updateBackToTop();
