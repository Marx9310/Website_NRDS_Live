// Main app: renders the NoRisk site (Variant 3 — Dark Technical) with
// language + light/dark controls. Theme + language persist to localStorage
// so the standalone legal pages (Impressum/Datenschutz) match the site.

const {
  useEffect: useEffectApp
} = React;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  lang: "de",
  dark: false
} /*EDITMODE-END*/;
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const lang = t.lang;
  const dark = t.dark;

  // Hide initial boot splash once mounted
  useEffectApp(() => {
    const boot = document.querySelector(".boot");
    if (boot) {
      requestAnimationFrame(() => {
        boot.classList.add("is-gone");
        setTimeout(() => boot.remove(), 500);
      });
    }
  }, []);

  // Persist theme + language so legal pages can match the site look
  useEffectApp(() => {
    try {
      localStorage.setItem("nr-dark", dark ? "1" : "0");
      localStorage.setItem("nr-lang", lang);
    } catch (e) {}
  }, [dark, lang]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalToolbar, {
    lang: lang,
    dark: dark,
    setTweak: setTweak
  }), /*#__PURE__*/React.createElement(window.Variant3, {
    lang: lang,
    dark: dark,
    key: lang
  }), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Sprache & Theme"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Sprache",
    value: lang,
    options: [{
      value: "de",
      label: "Deutsch"
    }, {
      value: "en",
      label: "English"
    }],
    onChange: v => setTweak("lang", v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Dark Mode",
    value: dark,
    onChange: v => setTweak("dark", v)
  })));
}

// Floating language + theme toggle
function GlobalToolbar({
  lang,
  dark,
  setTweak
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "global-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gt-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === "de" ? "is-on" : "",
    onClick: () => setTweak("lang", "de")
  }, "DE"), /*#__PURE__*/React.createElement("button", {
    className: lang === "en" ? "is-on" : "",
    onClick: () => setTweak("lang", "en")
  }, "EN")), /*#__PURE__*/React.createElement("div", {
    className: "gt-divider"
  }), /*#__PURE__*/React.createElement("button", {
    className: "gt-theme",
    onClick: () => setTweak("dark", !dark),
    title: dark ? "Switch to light" : "Switch to dark"
  }, dark ? "◐" : "◑"));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));