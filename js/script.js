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

function applyLanguage(language, options = {}) {
  const { persist = true } = options;
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

  if (persist) {
    localStorage.setItem("mseat-web-language", active);
  }
}

const savedLanguage = localStorage.getItem("mseat-web-language");
applyLanguage(savedLanguage || "hr", { persist: Boolean(savedLanguage) });

document.querySelector("#languageSelect")?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

const languageModal = document.querySelector("#languageModal");
const languageModalClose = document.querySelector("#languageModalClose");
const languageModalSearch = document.querySelector("#languageModalSearch");
const languageModalOptions = document.querySelector("#languageModalOptions");
const languageModalSkip = document.querySelector("#languageModalSkip");

function closeLanguageModal() {
  languageModal?.classList.remove("is-visible");
  languageModal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("language-modal-open");
}

function chooseInitialLanguage(language) {
  applyLanguage(language);
  closeLanguageModal();
}

function renderLanguageModalOptions(filter = "") {
  if (!languageModalOptions) return;
  const normalizedFilter = filter.trim().toLowerCase();
  languageModalOptions.innerHTML = "";

  languageOptions
    .filter((language) => {
      const text = `${language.code} ${language.label}`.toLowerCase();
      return text.includes(normalizedFilter);
    })
    .forEach((language) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "language-modal-option";
      button.dataset.language = language.code;
      button.innerHTML = `<span>${language.label}</span><small>${language.code.toUpperCase()}</small>`;
      button.addEventListener("click", () => chooseInitialLanguage(language.code));
      languageModalOptions.append(button);
    });
}

if (languageModal && !savedLanguage) {
  renderLanguageModalOptions();
  languageModal.classList.add("is-visible");
  languageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("language-modal-open");
  languageModalSearch?.focus({ preventScroll: true });
}

languageModalSearch?.addEventListener("input", (event) => {
  renderLanguageModalOptions(event.target.value);
});

languageModalSkip?.addEventListener("click", () => {
  chooseInitialLanguage("hr");
});

languageModalClose?.addEventListener("click", () => {
  chooseInitialLanguage("hr");
});

const showcaseTabs = Array.from(document.querySelectorAll("[data-showcase-tab]"));
const showcaseSlides = Array.from(document.querySelectorAll("[data-showcase-slide]"));
const showcasePrevButton = document.querySelector("[data-showcase-prev]");
const showcaseNextButton = document.querySelector("[data-showcase-next]");
let activeShowcaseIndex = 0;
let showcaseResumeTimer = 0;
let showcaseIsPaused = false;

function setShowcaseSlide(index) {
  if (!showcaseTabs.length || !showcaseSlides.length) return;
  activeShowcaseIndex = (index + showcaseSlides.length) % showcaseSlides.length;

  showcaseSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeShowcaseIndex);
  });

  showcaseTabs.forEach((tab, tabIndex) => {
    tab.classList.toggle("is-active", tabIndex === activeShowcaseIndex);
  });
}

function pauseShowcaseRotation() {
  showcaseIsPaused = true;
  window.clearTimeout(showcaseResumeTimer);
  showcaseResumeTimer = window.setTimeout(() => {
    showcaseIsPaused = false;
  }, 20000);
}

showcaseTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setShowcaseSlide(Number(tab.dataset.showcaseTab || 0));
    pauseShowcaseRotation();
  });
});

showcasePrevButton?.addEventListener("click", () => {
  setShowcaseSlide(activeShowcaseIndex - 1);
  pauseShowcaseRotation();
});

showcaseNextButton?.addEventListener("click", () => {
  setShowcaseSlide(activeShowcaseIndex + 1);
  pauseShowcaseRotation();
});

if (showcaseSlides.length > 1) {
  window.setInterval(() => {
    if (showcaseIsPaused) return;
    setShowcaseSlide(activeShowcaseIndex + 1);
  }, 4200);
}


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
