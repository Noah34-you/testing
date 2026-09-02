// MODU — interactions: header state, scroll reveals, archive hover preview, newsletter
(function () {
  'use strict';

  // Header: paper background after scroll
  var header = document.getElementById('site-header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll reveals
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(function (el) {
    io.observe(el);
  });

  // Archive: floating image preview follows the cursor
  var preview = document.getElementById('look-preview');
  var previewImg = preview.querySelector('img');
  document.querySelectorAll('.archive-row').forEach(function (row) {
    row.addEventListener('mouseenter', function () {
      previewImg.src = row.getAttribute('data-img');
      preview.classList.add('on');
    });
    row.addEventListener('mouseleave', function () {
      preview.classList.remove('on');
    });
    row.addEventListener('mousemove', function (e) {
      preview.style.left = e.clientX + 28 + 'px';
      preview.style.top = e.clientY - 140 + 'px';
    });
  });

  // Newsletter (demo — no data leaves the browser)
  var form = document.getElementById('news-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = form.querySelector('input');
    if (input.value.trim()) {
      form.hidden = true;
      document.getElementById('news-done').hidden = false;
    }
  });
})();
