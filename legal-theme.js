// Legal pages: follow the main site's light/dark choice (persisted in
// localStorage by the site), and allow toggling here too.
(function () {
  var KEY = "nr-dark";
  function apply(dark) {
    document.body.classList.toggle("nr-dark", dark);
    var btn = document.querySelector(".legal-theme");
    if (btn) btn.textContent = dark ? "◐" : "◑";
  }
  var stored = "0";
  try { stored = localStorage.getItem(KEY) || "0"; } catch (e) {}
  apply(stored === "1");

  var btn = document.querySelector(".legal-theme");
  if (btn) {
    btn.addEventListener("click", function () {
      var dark = !document.body.classList.contains("nr-dark");
      apply(dark);
      try { localStorage.setItem(KEY, dark ? "1" : "0"); } catch (e) {}
    });
  }

  // React to changes made in another tab (e.g. the main site)
  window.addEventListener("storage", function (e) {
    if (e.key === KEY) apply(e.newValue === "1");
  });
})();
