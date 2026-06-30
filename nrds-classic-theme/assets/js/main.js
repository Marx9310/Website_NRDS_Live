(function () {
  'use strict';

  /* ---- Reveal on scroll ---- */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var el = e.target;
          var delay = parseInt(el.style.transitionDelay) || 0;
          setTimeout(function () { el.classList.add('is-in'); }, delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        var delay = parseInt(el.style.transitionDelay) || 0;
        setTimeout(function () { el.classList.add('is-in'); }, delay);
      } else {
        io.observe(el);
      }
    });
  }

  /* ---- Cookie helper ---- */
  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + value + '; expires=' + expires + '; path=/';
  }

  /* ---- Dark / light toggle ---- */
  function initTheme() {
    var body = document.body;

    function applyTheme(dark) {
      if (dark) {
        body.classList.add('v3-dark');
        body.classList.remove('v3-light');
      } else {
        body.classList.add('v3-light');
        body.classList.remove('v3-dark');
      }
      var btn = document.getElementById('nrds-theme-toggle');
      if (btn) btn.textContent = dark ? '◑' : '◐';
    }

    // Theme is already set server-side via cookie; just sync the icon
    var isDark = body.classList.contains('v3-dark');
    var btn = document.getElementById('nrds-theme-toggle');
    if (btn) btn.textContent = isDark ? '◑' : '◐';

    if (btn) {
      btn.addEventListener('click', function () {
        var nowDark = body.classList.contains('v3-dark');
        applyTheme(!nowDark);
        setCookie('nrds-theme', nowDark ? 'light' : 'dark', 365);
      });
    }
  }

  /* ---- Mobile hamburger ---- */
  function initHamburger() {
    var btn = document.querySelector('.v3-hamburger');
    var drawer = document.getElementById('v3-nav-drawer');
    if (!btn || !drawer) return;

    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      drawer.classList.toggle('is-open', !open);
    });

    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        btn.setAttribute('aria-expanded', 'false');
        drawer.classList.remove('is-open');
      });
    });
  }

  /* ---- Sticky nav scroll shrink ---- */
  function initNavScroll() {
    var nav = document.querySelector('.v3-nav');
    if (!nav) return;
    window.addEventListener('scroll', function () {
      nav.classList.toggle('v3-nav-scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ---- Contact form ---- */
  function initContactForm() {
    var form = document.getElementById('nrds-contact-form');
    if (!form) return;

    var btn = form.querySelector('button[type="submit"]');
    var errEl = form.querySelector('.form-error');
    var confEl = form.querySelector('.form-confirm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (btn) {
        btn.disabled = true;
        btn.textContent = btn.dataset.sending || 'Wird gesendet …';
      }
      if (errEl) errEl.style.display = 'none';

      var data = new FormData(form);

      fetch(form.closest('[data-kontakt-url]') ? form.closest('[data-kontakt-url]').dataset.kontaktUrl : 'kontakt.php', {
        method: 'POST',
        body: data
      })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (!json || json.ok !== true) throw new Error('send failed');
        form.reset();
        if (confEl) {
          confEl.style.display = '';
          form.querySelectorAll('.form-row, .field, .field-consent, button, .form-required-note').forEach(function (el) {
            el.style.display = 'none';
          });
        }
      })
      .catch(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = (btn.dataset.label || 'Anfrage senden') + ' →';
        }
        if (errEl) errEl.style.display = '';
      });
    });
  }

  /* ---- Boot splash removal ---- */
  function removeBoot() {
    var boot = document.querySelector('.boot');
    if (boot) {
      boot.classList.add('boot-done');
      setTimeout(function () { boot.remove(); }, 600);
    }
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initHamburger();
    initNavScroll();
    initContactForm();
    initReveal();
    removeBoot();
  });
}());
