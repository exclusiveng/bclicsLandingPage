// Bclics landing page — light progressive enhancement.
// The page is fully usable without JS; this only adds the mobile menu
// toggle and a scroll-in reveal animation.

(function () {
  // ---- Mobile navigation toggle ----
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');

  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      var open = mobile.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Close the menu when a link inside it is tapped.
    mobile.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        mobile.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Scroll-in reveal ----
  var items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  items.forEach(function (el) { observer.observe(el); });
})();
