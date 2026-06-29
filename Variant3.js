// Variant 3 — Dark Technical
// Near-black background, pale sage accent, monospace details.
// Full-bleed hero imagery, terminal-style data displays. Premium enterprise.

function Variant3({
  lang,
  dark
}) {
  const c = window.NRContent[lang];
  // Variant 3 is intrinsically dark; light mode renders an "inverted" pale version
  return /*#__PURE__*/React.createElement("div", {
    className: `v3 ${dark ? "v3-dark" : "v3-light"}`
  }, /*#__PURE__*/React.createElement(V3Nav, {
    c: c
  }), /*#__PURE__*/React.createElement(V3Hero, {
    c: c
  }), /*#__PURE__*/React.createElement(V3Marquee, {
    c: c
  }), /*#__PURE__*/React.createElement(V3Services, {
    c: c
  }), /*#__PURE__*/React.createElement(V3Standards, {
    c: c
  }), /*#__PURE__*/React.createElement(V3About, {
    c: c
  }), /*#__PURE__*/React.createElement(V3Founder, {
    c: c
  }), /*#__PURE__*/React.createElement(V3Why, {
    c: c
  }), /*#__PURE__*/React.createElement(V3Industries, {
    c: c
  }), /*#__PURE__*/React.createElement(V3Partners, {
    c: c
  }), /*#__PURE__*/React.createElement(V3Contact, {
    c: c
  }), /*#__PURE__*/React.createElement(V3Footer, {
    c: c
  }));
}
function V3Nav({
  c
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "v3-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "v3-nav-logo"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    scale: 1.9
  })), /*#__PURE__*/React.createElement("nav", {
    className: "v3-nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, c.nav.services), /*#__PURE__*/React.createElement("a", {
    href: "#standards"
  }, c.nav.standards), /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, c.nav.about), /*#__PURE__*/React.createElement("a", {
    href: "#partners"
  }, c.nav.partners), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "v3-nav-cta"
  }, /*#__PURE__*/React.createElement("span", null, c.nav.contact), /*#__PURE__*/React.createElement("span", {
    className: "v3-cta-arrow"
  }, "\u2197"))));
}
function V3Hero({
  c
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "v3-hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-hero-bg"
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    src: nrAsset("assets/hero.jpg"),
    label: "hero \xB7 dark architectural",
    ratio: "16/9"
  }), /*#__PURE__*/React.createElement("div", {
    className: "v3-hero-veil"
  })), /*#__PURE__*/React.createElement("div", {
    className: "v3-hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-hero-main"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h1", {
    className: "v3-hero-title"
  }, c.hero.titleParts.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "v3-hero-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v3-hero-word"
  }, p))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "v3-hero-sub"
  }, c.hero.subtitle)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 380,
    className: "v3-hero-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-primary"
  }, c.hero.ctaPrimary, " ", /*#__PURE__*/React.createElement("span", {
    className: "btn-arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "btn btn-ghost"
  }, c.hero.ctaSecondary))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 500,
    className: "v3-hero-strip"
  }, c.hero.meta.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v3-strip-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-strip-v"
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "v3-strip-k"
  }, v))))));
}
function V3Marquee({
  c
}) {
  const items = ["DSGVO", "ISO 27001", "NIS-2", "EU AI ACT", "BSI-GRUNDSCHUTZ", "TISAX", "DSGVO", "ISO 27001", "NIS-2", "EU AI ACT", "BSI-GRUNDSCHUTZ", "TISAX"];
  return /*#__PURE__*/React.createElement("div", {
    className: "v3-marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-marquee-track"
  }, items.concat(items).map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "v3-marquee-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v3-marquee-dot"
  }, "\u25C7"), it))));
}
function V3SectionHead({
  eyebrow,
  title,
  intro
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "v3-sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-sec-meta"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, eyebrow)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h2", {
    className: "v3-h2"
  }, title)), intro && /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    className: "v3-sec-intro"
  }, intro))));
}
function V3Services({
  c
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "v3-section",
    id: "services",
    style: {
      padding: "80px 40px"
    }
  }, /*#__PURE__*/React.createElement(V3SectionHead, {
    eyebrow: c.pillars.eyebrow,
    title: c.pillars.title,
    intro: c.pillars.intro
  }), /*#__PURE__*/React.createElement("div", {
    className: "v3-services"
  }, c.pillars.items.map((s, i) => {
    const href = `leistung.html?s=${s.n}`;
    return /*#__PURE__*/React.createElement(Reveal, {
      as: "a",
      href: href,
      key: s.title,
      delay: i * 60,
      className: "v3-service"
    }, /*#__PURE__*/React.createElement("div", {
      className: "v3-service-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "v3-service-n"
    }, s.n), /*#__PURE__*/React.createElement("div", {
      className: "v3-service-marker"
    }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("h3", {
      className: "v3-service-title"
    }, s.title), /*#__PURE__*/React.createElement("p", {
      className: "v3-service-body"
    }, s.body), /*#__PURE__*/React.createElement("ul", {
      className: "v3-service-points"
    }, s.points.map(p => /*#__PURE__*/React.createElement("li", {
      key: p
    }, /*#__PURE__*/React.createElement("span", {
      className: "v3-tick"
    }, "\u2192"), p))), /*#__PURE__*/React.createElement("div", {
      className: "v3-service-more"
    }, /*#__PURE__*/React.createElement("span", {
      className: "v3-service-more-inner"
    }, c.pillars.more, " ", /*#__PURE__*/React.createElement("span", {
      className: "v3-service-more-arrow"
    }, "\u2192"))));
  })));
}
function V3Standards({
  c
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "v3-section v3-section-tight",
    id: "standards"
  }, /*#__PURE__*/React.createElement(V3SectionHead, {
    eyebrow: c.standards.eyebrow,
    title: c.standards.title,
    intro: c.standards.intro
  }), /*#__PURE__*/React.createElement("div", {
    className: "v3-standards"
  }, c.standards.items.map((s, i) => {
    const href = `leistung.html?std=${s.link}`;
    return /*#__PURE__*/React.createElement(Reveal, {
      as: "a",
      href: href,
      key: s.code,
      delay: i * 60,
      className: "v3-standard"
    }, /*#__PURE__*/React.createElement("div", {
      className: "v3-standard-l"
    }, /*#__PURE__*/React.createElement("div", {
      className: "v3-standard-code"
    }, s.code)), /*#__PURE__*/React.createElement("div", {
      className: "v3-standard-r"
    }, /*#__PURE__*/React.createElement("div", {
      className: "v3-standard-title"
    }, s.title), /*#__PURE__*/React.createElement("div", {
      className: "v3-standard-body"
    }, s.body)), /*#__PURE__*/React.createElement("div", {
      className: "v3-standard-more"
    }, c.standards.more, " ", /*#__PURE__*/React.createElement("span", {
      className: "v3-standard-more-arrow"
    }, "\u2192")));
  })));
}
function V3About({
  c
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "v3-section v3-about",
    id: "about",
    style: {
      padding: "80px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-about-text"
  }, /*#__PURE__*/React.createElement(V3SectionHead, {
    eyebrow: c.about.eyebrow,
    title: c.about.title
  }), c.about.body.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("p", {
    className: "v3-about-p"
  }, p))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300,
    className: "v3-about-stats"
  }, c.about.stats.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v3-about-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-stat-k"
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "v3-stat-v"
  }, v))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140,
    className: "v3-about-img"
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    src: nrAsset("assets/office.jpg"),
    label: "office detail \xB7 4:3",
    ratio: "4/3"
  }))));
}
function V3Founder({
  c
}) {
  const f = c.founder;
  return /*#__PURE__*/React.createElement("section", {
    className: "v3-section v3-founder",
    id: "founder",
    style: {
      padding: "80px 40px"
    }
  }, /*#__PURE__*/React.createElement(V3SectionHead, {
    eyebrow: f.eyebrow,
    title: f.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "v3-founder-grid"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "v3-founder-portrait"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-founder-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: nrAsset("assets/founder.jpg"),
    alt: f.name
  })), /*#__PURE__*/React.createElement("div", {
    className: "v3-founder-sign"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v3-founder-role"
  }, f.role)), /*#__PURE__*/React.createElement("a", {
    className: "v3-founder-link",
    href: f.linkedinUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v3-founder-in"
  }, "in"), f.linkedin, /*#__PURE__*/React.createElement("span", {
    className: "v3-founder-arrow"
  }, "\u2197"))), /*#__PURE__*/React.createElement("div", {
    className: "v3-founder-body"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "v3-founder-quote"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v3-founder-quotemark"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", null, f.quote)), f.body.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("p", null, p))))));
}
function V3Why({
  c
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "v3-section",
    style: {
      padding: "80px 40px"
    }
  }, /*#__PURE__*/React.createElement(V3SectionHead, {
    eyebrow: c.why.eyebrow,
    title: c.why.title
  }), /*#__PURE__*/React.createElement("div", {
    className: "v3-why-grid"
  }, c.why.items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.title,
    delay: i * 60,
    className: "v3-why-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-why-n"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "v3-why-title"
  }, it.title), /*#__PURE__*/React.createElement("div", {
    className: "v3-why-body"
  }, it.body)))));
}
function V3Industries({
  c
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "v3-section",
    style: {
      padding: "80px 40px"
    }
  }, /*#__PURE__*/React.createElement(V3SectionHead, {
    eyebrow: c.industries.eyebrow,
    title: c.industries.title
  }), /*#__PURE__*/React.createElement("div", {
    className: "v3-industries"
  }, c.industries.items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it,
    delay: i * 30,
    className: "v3-industry"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v3-industry-n"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", null, it)))));
}
function V3Partners({
  c
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "v3-section",
    id: "partners",
    style: {
      padding: "80px 40px"
    }
  }, /*#__PURE__*/React.createElement(V3SectionHead, {
    eyebrow: c.partners.eyebrow,
    title: c.partners.title,
    intro: c.partners.intro
  }), /*#__PURE__*/React.createElement("div", {
    className: "v3-partners"
  }, window.NRPartners.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.name,
    delay: i * 100,
    className: "v3-partner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-partner-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: nrAsset(p.src),
    alt: p.name
  }))))));
}
function V3Contact({
  c
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "v3-section v3-contact",
    id: "contact",
    style: {
      padding: "80px 40px"
    }
  }, /*#__PURE__*/React.createElement(V3SectionHead, {
    eyebrow: c.contact.eyebrow,
    title: c.contact.title,
    intro: c.contact.intro
  }), /*#__PURE__*/React.createElement("div", {
    className: "v3-contact-grid"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "v3-contact-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-meta-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, c.contact.metaLabels.direct), /*#__PURE__*/React.createElement("div", {
    className: "v3-meta-v"
  }, "info@norisk-datasecurity.com")), /*#__PURE__*/React.createElement("div", {
    className: "v3-meta-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, c.contact.metaLabels.response), /*#__PURE__*/React.createElement("div", {
    className: "v3-meta-v"
  }, c.contact.responseValue)), /*#__PURE__*/React.createElement("div", {
    className: "v3-meta-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, c.contact.metaLabels.region), /*#__PURE__*/React.createElement("div", {
    className: "v3-meta-v"
  }, "DE \xB7 AT \xB7 CH")), /*#__PURE__*/React.createElement("div", {
    className: "v3-contact-quote"
  }, "\u201C", c.contact.intro, "\u201D")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140,
    className: "v3-contact-form"
  }, /*#__PURE__*/React.createElement(ContactForm, {
    t: c.contact.form
  }))));
}
function V3Footer({
  c
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "v3-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-footer-mark"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "v3-footer-logo",
    "aria-label": "NoRisk Datasecurity"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    scale: 2.6
  })), /*#__PURE__*/React.createElement("div", {
    className: "v3-footer-tagline"
  }, c.footer.tagline)), /*#__PURE__*/React.createElement("div", {
    className: "v3-footer-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-footer-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Address"), c.footer.address.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "v3-footer-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Legal"), c.footer.legal.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "v3-footer-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "\xA9 2026"), /*#__PURE__*/React.createElement("div", null, c.footer.copy))));
}
window.Variant3 = Variant3;