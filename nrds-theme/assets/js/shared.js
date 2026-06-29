function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Shared helpers used across all variants

const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

// Resolve an asset path to an inlined blob URL when running as a bundled
// standalone file (window.__resources, keyed by data-resource-id), otherwise
// fall back to the normal relative path so the multi-page site keeps working.
function nrAsset(path) {
  var r = typeof window !== "undefined" && window.__resources || {};
  var map = {
    "assets/logo-dark.png": r.logoDark,
    "assets/logo-light.png": r.logoLight,
    "assets/hero.jpg": r.hero,
    "assets/office.jpg": r.office,
    "assets/founder.jpg": r.founder,
    "assets/partner-gdd.png": r.partnerGdd,
    "assets/partner-erecht24.png": r.partnerErecht
  };
  return map[path] || path;
}

// State-based reveal — survives React re-renders (no imperative class that
// React could reset on re-render). Sync in-view check + IO + safety fallback.
function Reveal({
  children,
  delay = 0,
  as: As = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const reveal = () => {
      if (!cancelled) setShown(true);
    };
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh && r.bottom > 0) {
      const t = setTimeout(reveal, delay);
      return () => {
        cancelled = true;
        clearTimeout(t);
      };
    }
    const safety = setTimeout(reveal, 2000 + delay);
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          clearTimeout(safety);
          setTimeout(reveal, delay);
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px"
    });
    io.observe(el);
    return () => {
      cancelled = true;
      clearTimeout(safety);
      io.disconnect();
    };
  }, [delay, shown]);
  return /*#__PURE__*/React.createElement(As, _extends({
    ref: ref,
    className: `reveal ${shown ? "is-in" : ""} ${className}`
  }, rest), children);
}

// Striped placeholder for imagery the user will replace
function ImagePlaceholder({
  label,
  ratio = "16/9",
  style = {},
  src
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setErrored(true);
    img.src = src;
  }, [src]);
  const showImage = src && loaded && !errored;
  return /*#__PURE__*/React.createElement("div", {
    className: "img-slot",
    style: {
      aspectRatio: ratio,
      ...style
    }
  }, showImage ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: ""
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "img-stripes"
  }), /*#__PURE__*/React.createElement("div", {
    className: "img-label"
  }, "[ ", label, " ]")));
}

// NoRisk logo — uses the real logo image. Renders both color versions;
// CSS shows the correct one for the current background (light/dark).
function Wordmark({
  scale = 1
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "wordmark",
    style: {
      "--wm-scale": scale
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "wm-img wm-dark",
    src: nrAsset("assets/logo-dark.png"),
    alt: "NoRisk Datasecurity"
  }), /*#__PURE__*/React.createElement("img", {
    className: "wm-img wm-light",
    src: nrAsset("assets/logo-light.png"),
    alt: "NoRisk Datasecurity"
  }));
}

// Section eyebrow used across variants
function Eyebrow({
  children,
  n
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, n != null && /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-n"
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-text"
  }, children));
}

// Contact form — submits to kontakt.php (PHP mailer) via fetch.
// Falls back gracefully with an error message if the request fails.
function ContactForm({
  t,
  onSubmit
}) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const data = new FormData(form);
      const res = await fetch("kontakt.php", {
        method: "POST",
        body: data
      });
      const json = await res.json();
      if (!res.ok || !json || json.ok !== true) throw new Error("send failed");
      setStatus("sent");
      onSubmit?.();
    } catch (err) {
      setStatus("error");
    }
  }
  if (status === "sent") {
    return /*#__PURE__*/React.createElement("form", {
      className: "form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-confirm"
    }, t.confirm));
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: handleSubmit,
    noValidate: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, t.name, " *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    required: true
  })), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, t.company, " *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "company",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, t.email, " *"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    required: true
  })), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, t.phone), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    name: "phone"
  }))), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, t.topic), /*#__PURE__*/React.createElement("select", {
    name: "topic"
  }, t.topics.map(tp => /*#__PURE__*/React.createElement("option", {
    key: tp
  }, tp)))), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, t.message), /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    rows: "4"
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "website",
    tabIndex: "-1",
    autoComplete: "off",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-9999px",
      width: "1px",
      height: "1px",
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "field-consent"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "consent",
    required: true
  }), /*#__PURE__*/React.createElement("span", null, t.consent)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: status === "sending"
  }, status === "sending" ? t.sending : t.submit, " ", /*#__PURE__*/React.createElement("span", {
    className: "btn-arrow"
  }, "\u2192")), status === "error" && /*#__PURE__*/React.createElement("div", {
    className: "form-error"
  }, t.error), /*#__PURE__*/React.createElement("div", {
    className: "form-required-note"
  }, t.requiredNote));
}
Object.assign(window, {
  Reveal,
  ImagePlaceholder,
  Wordmark,
  Eyebrow,
  ContactForm,
  nrAsset
});