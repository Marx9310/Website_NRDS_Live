// Service detail page — renders one of the four services in depth.
// Reads ?s=01..04 and optional &gray=1; language + theme from localStorage.

const {
  useState: useStateLd,
  useEffect: useEffectLd
} = React;
function ldParam(k) {
  return new URLSearchParams(window.location.search).get(k);
}
function LeistungApp() {
  const sid = ldParam("s") || "01";
  const [lang, setLang] = useStateLd(() => {
    try {
      return localStorage.getItem("nr-lang") || "de";
    } catch (e) {
      return "de";
    }
  });
  const [dark, setDark] = useStateLd(() => {
    try {
      return localStorage.getItem("nr-dark") === "1";
    } catch (e) {
      return false;
    }
  });
  useEffectLd(() => {
    try {
      localStorage.setItem("nr-lang", lang);
    } catch (e) {}
  }, [lang]);
  useEffectLd(() => {
    try {
      localStorage.setItem("nr-dark", dark ? "1" : "0");
    } catch (e) {}
  }, [dark]);

  // Hide boot splash
  useEffectLd(() => {
    const boot = document.querySelector(".boot");
    if (boot) {
      requestAnimationFrame(() => {
        boot.classList.add("is-gone");
        setTimeout(() => boot.remove(), 500);
      });
    }
  }, []);
  const c = window.NRContent[lang];
  const home = "index.html";
  const stdKey = ldParam("std");
  const isStandard = !!(stdKey && c.standardDetails && c.standardDetails[stdKey]);
  const labels = lang === "de" ? {
    serviceEyebrow: "Leistung",
    standardEyebrow: "Standard",
    backServices: "Alle Leistungen",
    backStandards: "Alle Standards",
    includes: isStandard ? "Das steckt dahinter" : "Was wir liefern",
    why: isStandard ? "Warum es zählt" : "Warum es wichtig ist",
    otherServices: "Weitere Leistungen",
    otherStandards: "Weitere Standards",
    cta: "Erstgespräch vereinbaren",
    ctaText: "Unverbindlich klären, wo Sie stehen — in 30 Minuten."
  } : {
    serviceEyebrow: "Service",
    standardEyebrow: "Standard",
    backServices: "All services",
    backStandards: "All standards",
    includes: isStandard ? "What it covers" : "What we deliver",
    why: isStandard ? "Why it matters" : "Why it matters",
    otherServices: "Other services",
    otherStandards: "Other standards",
    cta: "Book an intro call",
    ctaText: "Find out where you stand — in 30 minutes, no obligation."
  };
  let detail, headTitle, badge, eyebrowLabel, backHref, backLabel, otherLabel, others;
  if (isStandard) {
    detail = c.standardDetails[stdKey];
    headTitle = detail.name;
    badge = null;
    eyebrowLabel = labels.standardEyebrow;
    backHref = `${home}#standards`;
    backLabel = labels.backStandards;
    otherLabel = labels.otherStandards;
    others = Object.keys(c.standardDetails).filter(k => k !== stdKey).map(k => ({
      key: k,
      title: c.standardDetails[k].name,
      href: `leistung.html?std=${k}`
    }));
  } else {
    const pillar = c.pillars.items.find(p => p.n === sid) || c.pillars.items[0];
    detail = c.serviceDetails[pillar.n];
    headTitle = pillar.title;
    badge = pillar.n;
    eyebrowLabel = labels.serviceEyebrow;
    backHref = `${home}#services`;
    backLabel = labels.backServices;
    otherLabel = labels.otherServices;
    others = c.pillars.items.filter(p => p.n !== pillar.n).map(p => ({
      key: p.n,
      title: p.title,
      badge: p.n,
      href: `leistung.html?s=${p.n}`
    }));
  }

  // update document title
  useEffectLd(() => {
    document.title = `${headTitle} — NoRisk Datasecurity`;
  }, [headTitle]);
  return /*#__PURE__*/React.createElement("div", {
    className: `v3 ${dark ? "v3-dark" : "v3-light"}`
  }, /*#__PURE__*/React.createElement("header", {
    className: "v3-nav ld-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: home,
    className: "v3-nav-logo",
    "aria-label": "NoRisk Datasecurity"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    scale: 1.6
  })), /*#__PURE__*/React.createElement("nav", {
    className: "v3-nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: backHref
  }, backLabel), /*#__PURE__*/React.createElement("a", {
    href: `${home}#contact`,
    className: "v3-nav-cta"
  }, /*#__PURE__*/React.createElement("span", null, c.nav.contact), /*#__PURE__*/React.createElement("span", {
    className: "v3-cta-arrow"
  }, "\u2197")))), /*#__PURE__*/React.createElement("section", {
    className: "ld-hero"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "ld-hero-eyebrow"
  }, badge && /*#__PURE__*/React.createElement("span", {
    className: "ld-hero-n"
  }, badge), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, eyebrowLabel)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ld-hero-title"
  }, headTitle)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    className: "ld-hero-lead"
  }, detail.lead))), /*#__PURE__*/React.createElement("section", {
    className: "v3-section ld-section"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    className: "v3-h2 ld-h2"
  }, labels.includes)), /*#__PURE__*/React.createElement("div", {
    className: "ld-includes"
  }, detail.includes.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.title,
    delay: i * 70,
    className: "ld-include"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ld-include-n"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    className: "ld-include-title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "ld-include-body"
  }, it.body))))), /*#__PURE__*/React.createElement("section", {
    className: "v3-section ld-section ld-why-section"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    className: "v3-h2 ld-h2"
  }, labels.why)), /*#__PURE__*/React.createElement("div", {
    className: "ld-why"
  }, detail.why.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.title,
    delay: i * 70,
    className: "ld-why-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ld-why-mark"
  }, "!"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "ld-why-title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "ld-why-body"
  }, it.body)))))), /*#__PURE__*/React.createElement("section", {
    className: "ld-cta"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    className: "ld-cta-text"
  }, labels.ctaText), /*#__PURE__*/React.createElement("a", {
    href: `${home}#contact`,
    className: "btn btn-primary ld-cta-btn"
  }, labels.cta, " ", /*#__PURE__*/React.createElement("span", {
    className: "btn-arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("section", {
    className: "v3-section ld-other"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "label ld-other-label"
  }, otherLabel)), /*#__PURE__*/React.createElement("div", {
    className: "ld-other-grid"
  }, others.map(o => /*#__PURE__*/React.createElement("a", {
    key: o.key,
    className: "ld-other-card",
    href: o.href
  }, o.badge && /*#__PURE__*/React.createElement("span", {
    className: "ld-other-n"
  }, o.badge), /*#__PURE__*/React.createElement("span", {
    className: "ld-other-title"
  }, o.title), /*#__PURE__*/React.createElement("span", {
    className: "ld-other-arrow"
  }, "\u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "global-toolbar"
  }, /*#__PURE__*/React.createElement("a", {
    className: "gt-version",
    href: `${home}`,
    title: "Zur Startseite"
  }, "\u2190 ", lang === "de" ? "Start" : "Home"), /*#__PURE__*/React.createElement("div", {
    className: "gt-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gt-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === "de" ? "is-on" : "",
    onClick: () => setLang("de")
  }, "DE"), /*#__PURE__*/React.createElement("button", {
    className: lang === "en" ? "is-on" : "",
    onClick: () => setLang("en")
  }, "EN")), /*#__PURE__*/React.createElement("div", {
    className: "gt-divider"
  }), /*#__PURE__*/React.createElement("button", {
    className: "gt-theme",
    onClick: () => setDark(!dark),
    title: dark ? "Light" : "Dark"
  }, dark ? "◐" : "◑")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(LeistungApp, null));