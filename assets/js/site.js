/* Iris Cai — a personal periodical
   gallery slideshow + gentle scroll reveals */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Photo gallery ---------- */
  var gallery = document.querySelector('.gallery');
  if (gallery) {
    var slides = Array.prototype.slice.call(gallery.querySelectorAll('.gallery-slide'));
    var dotsWrap = gallery.querySelector('.gallery-dots');
    var current = 0;
    var timer = null;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Photo ' + (i + 1));
      dot.addEventListener('click', function () { go(i); reset(); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function go(n) {
      current = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('active', i === current); });
      dots.forEach(function (d, i) { d.classList.toggle('active', i === current); });
    }
    function step(dir) { go(current + dir); reset(); }
    function start() { if (!reduceMotion) timer = setInterval(function () { go(current + 1); }, 5000); }
    function reset() { clearInterval(timer); start(); }

    var prev = gallery.querySelector('.gallery-nav.prev');
    var next = gallery.querySelector('.gallery-nav.next');
    if (prev) prev.addEventListener('click', function () { step(-1); });
    if (next) next.addEventListener('click', function () { step(1); });

    gallery.addEventListener('mouseenter', function () { clearInterval(timer); });
    gallery.addEventListener('mouseleave', start);
    start();
  }

  /* ---------- Scroll reveals (progressive enhancement) ----------
     Elements are fully visible by default. If JS + motion are on,
     we hide-then-reveal once as they enter the viewport. */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('[data-reveal]');
    if (targets.length) {
      targets.forEach(function (el) { el.style.opacity = '0'; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '';
            entry.target.classList.add('reveal');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      targets.forEach(function (el) { io.observe(el); });
    }
  }
})();
