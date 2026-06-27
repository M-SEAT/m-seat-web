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

const languages = ["hr", "en", "de"];

const translations = {
  hr: {
    "meta.description": "M-SEAT je aplikacija za plan sjedenja, organizaciju gostiju, stolova, tlocrta sale i izvoz dokumenata.",
    "document.title": "M-SEAT - Plan sjedenja",
    "brand.aria": "M-SEAT početna",
    "brand.subtitle": "Plan sjedenja",
    "nav.aria": "Navigacija",
    "nav.features": "Funkcije",
    "nav.images": "Slike",
    "nav.how": "Kako radi",
    "nav.contact": "Kontakt",
    "hero.title": "Plan sjedenja.",
    "hero.copy": "Jednostavna aplikacija za goste, stolove, tlocrt sale, ispis i dijeljenje projekta s mladencima ili organizatorima.",
    "hero.try": "Isprobaj aplikaciju",
    "hero.contact": "Kontakt",
    "hero.qr.scan": "Skeniraj za otvaranje",
    "hero.qr.scan.primary": "Skeniraj za",
    "hero.qr.scan.secondary": "otvaranje",
    "hero.qr.aria": "Skeniraj ili otvori M-SEAT App",
    "hero.contact.sub": "Upit",
    "promo.aria": "M-SEAT promotivni prikaz",
    "promo.alt": "M-SEAT promotivni prikaz funkcija za plan sjedenja",
    "features.eyebrow": "Funkcije",
    "features.title": "Sve za raspored sjedenja na jednom mjestu.",
    "features.guests.title": "Organizacija gostiju",
    "features.guests.copy": "Dodavanje gostiju, napomene, djeca, grupe i status dolaska.",
    "features.tables.title": "Upravljanje stolovima",
    "features.tables.copy": "Kapaciteti, popunjenost stolova i brzo premještanje gostiju.",
    "features.floor.title": "Tlocrt sale",
    "features.floor.copy": "Vizualni raspored stolova i elemenata u prostoru sale.",
    "features.export.title": "PDF / Word / Excel izvoz",
    "features.export.copy": "Dokumenti za ispis, restoran, organizatora ili daljnju obradu.",
    "features.share.title": "Dijeljenje projekata",
    "features.share.copy": "Link za pregled ili uređivanje, vezan za email korisnika.",
    "images.eyebrow": "Slike aplikacije",
    "images.title": "Stvarni prikaz M-SEAT aplikacije.",
    "images.workspace.alt": "Glavna radna površina M-SEAT aplikacije",
    "images.workspace.caption": "Gosti, stolovi i tlocrt",
    "images.login.alt": "M-SEAT prijava",
    "images.login.caption": "Prijava",
    "images.project.alt": "M-SEAT odabir projekta",
    "images.project.caption": "Odabir projekta",
    "images.admin.alt": "M-SEAT projektne akcije i početni koraci",
    "images.admin.caption": "Projektne akcije",
    "images.print.alt": "M-SEAT izbornik ispisa",
    "images.print.caption": "Ispis",
    "images.export.alt": "M-SEAT detaljne opcije ispisa",
    "images.export.caption": "PDF, Word i Excel",
    "how.eyebrow": "Kako radi",
    "how.title": "Četiri koraka do gotovog plana.",
    "how.guests.title": "Dodaj goste",
    "how.guests.copy": "Unesi popis gostiju i označi njihove napomene ili status dolaska.",
    "how.tables.title": "Dodaj stolove",
    "how.tables.copy": "Postavi stolove, nazive i broj mjesta.",
    "how.arrange.title": "Napravi raspored",
    "how.arrange.copy": "Smjesti goste po stolovima i složi tlocrt sale.",
    "how.share.title": "Ispiši ili podijeli",
    "how.share.copy": "Izvezi PDF, Word, Excel ili pošalji link za pregled projekta.",
    "pricing.eyebrow": "Cijene",
    "pricing.title": "Uskoro",
    "pricing.copy": "Paketi i cijene bit će objavljeni nakon završnog testiranja.",
    "pricing.try": "Isprobaj aplikaciju",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Dogovor za izradu plana sjedenja.",
    "footer.top": "Na vrh",
  },
  en: {
    "meta.description": "M-SEAT is an app for seating plans, guest organization, tables, venue layouts and document export.",
    "document.title": "M-SEAT - Seating plan",
    "brand.aria": "M-SEAT home",
    "brand.subtitle": "Seating plan",
    "nav.aria": "Navigation",
    "nav.features": "Features",
    "nav.images": "Images",
    "nav.how": "How it works",
    "nav.contact": "Contact",
    "hero.title": "Seating plan.",
    "hero.copy": "A simple app for guests, tables, venue layouts, printing and sharing the project with couples or organizers.",
    "hero.try": "Try the app",
    "hero.contact": "Contact",
    "hero.qr.scan": "Scan to open",
    "hero.qr.scan.primary": "Scan to",
    "hero.qr.scan.secondary": "open",
    "hero.qr.aria": "Scan or open M-SEAT App",
    "hero.contact.sub": "Inquiry",
    "promo.aria": "M-SEAT promotional preview",
    "promo.alt": "M-SEAT promotional preview of seating plan features",
    "features.eyebrow": "Features",
    "features.title": "Everything for seating plans in one place.",
    "features.guests.title": "Guest organization",
    "features.guests.copy": "Add guests, notes, children, groups and attendance status.",
    "features.tables.title": "Table management",
    "features.tables.copy": "Capacities, table occupancy and quick guest moves.",
    "features.floor.title": "Venue layout",
    "features.floor.copy": "A visual layout of tables and venue elements.",
    "features.export.title": "PDF / Word / Excel export",
    "features.export.copy": "Documents for printing, restaurants, organizers or further editing.",
    "features.share.title": "Project sharing",
    "features.share.copy": "A view or edit link connected to the user's email address.",
    "images.eyebrow": "App images",
    "images.title": "A real look at the M-SEAT app.",
    "images.workspace.alt": "Main M-SEAT workspace",
    "images.workspace.caption": "Guests, tables and layout",
    "images.login.alt": "M-SEAT login",
    "images.login.caption": "Login",
    "images.project.alt": "M-SEAT project selection",
    "images.project.caption": "Project selection",
    "images.admin.alt": "M-SEAT project actions and first steps",
    "images.admin.caption": "Project actions",
    "images.print.alt": "M-SEAT print menu",
    "images.print.caption": "Print",
    "images.export.alt": "M-SEAT detailed export options",
    "images.export.caption": "PDF, Word and Excel",
    "how.eyebrow": "How it works",
    "how.title": "Four steps to a finished plan.",
    "how.guests.title": "Add guests",
    "how.guests.copy": "Enter your guest list and mark notes or attendance status.",
    "how.tables.title": "Add tables",
    "how.tables.copy": "Set tables, names and number of seats.",
    "how.arrange.title": "Create the plan",
    "how.arrange.copy": "Place guests at tables and arrange the venue layout.",
    "how.share.title": "Print or share",
    "how.share.copy": "Export PDF, Word, Excel or send a project preview link.",
    "pricing.eyebrow": "Pricing",
    "pricing.title": "Coming soon",
    "pricing.copy": "Packages and prices will be published after final testing.",
    "pricing.try": "Try the app",
    "contact.eyebrow": "Contact",
    "contact.title": "Arrange a seating plan service.",
    "footer.top": "Back to top",
  },
  de: {
    "meta.description": "M-SEAT ist eine App für Sitzpläne, Gästeorganisation, Tische, Saalpläne und Dokumentexport.",
    "document.title": "M-SEAT - Sitzplan",
    "brand.aria": "M-SEAT Startseite",
    "brand.subtitle": "Sitzplan",
    "nav.aria": "Navigation",
    "nav.features": "Funktionen",
    "nav.images": "Bilder",
    "nav.how": "Ablauf",
    "nav.contact": "Kontakt",
    "hero.title": "Sitzplan.",
    "hero.copy": "Eine einfache App für Gäste, Tische, Saalplan, Druck und Teilen des Projekts mit Paaren oder Organisatoren.",
    "hero.try": "App testen",
    "hero.contact": "Kontakt",
    "hero.qr.scan": "Zum Öffnen scannen",
    "hero.qr.scan.primary": "Zum Öffnen",
    "hero.qr.scan.secondary": "scannen",
    "hero.qr.aria": "M-SEAT App scannen oder öffnen",
    "hero.contact.sub": "Anfrage",
    "promo.aria": "M-SEAT Werbeansicht",
    "promo.alt": "M-SEAT Werbeansicht der Sitzplan-Funktionen",
    "features.eyebrow": "Funktionen",
    "features.title": "Alles für den Sitzplan an einem Ort.",
    "features.guests.title": "Gäste organisieren",
    "features.guests.copy": "Gäste, Notizen, Kinder, Gruppen und Teilnahme-Status verwalten.",
    "features.tables.title": "Tische verwalten",
    "features.tables.copy": "Kapazitäten, Tischbelegung und schnelles Verschieben von Gästen.",
    "features.floor.title": "Saalplan",
    "features.floor.copy": "Visuelle Anordnung von Tischen und Elementen im Saal.",
    "features.export.title": "PDF / Word / Excel Export",
    "features.export.copy": "Dokumente für Druck, Restaurant, Organisation oder weitere Bearbeitung.",
    "features.share.title": "Projekte teilen",
    "features.share.copy": "Link zum Ansehen oder Bearbeiten, verbunden mit der E-Mail des Nutzers.",
    "images.eyebrow": "App-Bilder",
    "images.title": "Echter Einblick in die M-SEAT App.",
    "images.workspace.alt": "M-SEAT Hauptarbeitsfläche",
    "images.workspace.caption": "Gäste, Tische und Saalplan",
    "images.login.alt": "M-SEAT Anmeldung",
    "images.login.caption": "Anmeldung",
    "images.project.alt": "M-SEAT Projektauswahl",
    "images.project.caption": "Projektauswahl",
    "images.admin.alt": "M-SEAT Projektaktionen und erste Schritte",
    "images.admin.caption": "Projektaktionen",
    "images.print.alt": "M-SEAT Druckmenü",
    "images.print.caption": "Druck",
    "images.export.alt": "M-SEAT detaillierte Exportoptionen",
    "images.export.caption": "PDF, Word und Excel",
    "how.eyebrow": "Ablauf",
    "how.title": "Vier Schritte zum fertigen Plan.",
    "how.guests.title": "Gäste hinzufügen",
    "how.guests.copy": "Gästeliste eingeben und Notizen oder Teilnahme-Status markieren.",
    "how.tables.title": "Tische hinzufügen",
    "how.tables.copy": "Tische, Namen und Sitzplätze festlegen.",
    "how.arrange.title": "Plan erstellen",
    "how.arrange.copy": "Gäste an Tische setzen und den Saalplan gestalten.",
    "how.share.title": "Drucken oder teilen",
    "how.share.copy": "PDF, Word, Excel exportieren oder einen Projektlink senden.",
    "pricing.eyebrow": "Preise",
    "pricing.title": "Demnächst",
    "pricing.copy": "Pakete und Preise werden nach dem finalen Test veröffentlicht.",
    "pricing.try": "App testen",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Sitzplan-Erstellung vereinbaren.",
    "footer.top": "Nach oben",
  },
};

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

  const languageToggle = document.querySelector("#languageToggle");
  if (languageToggle) {
    languageToggle.textContent = active.toUpperCase();
    languageToggle.setAttribute("aria-label", active === "hr" ? "Promijeni jezik" : active === "en" ? "Change language" : "Sprache ändern");
  }

  localStorage.setItem("mseat-web-language", active);
}

const savedLanguage = localStorage.getItem("mseat-web-language") || "hr";
applyLanguage(savedLanguage);

document.querySelector("#languageToggle")?.addEventListener("click", () => {
  const current = localStorage.getItem("mseat-web-language") || "hr";
  const next = languages[(languages.indexOf(current) + 1) % languages.length] || "hr";
  applyLanguage(next);
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
