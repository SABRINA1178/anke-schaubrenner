// ============================================================
//  Kaluna Fee — Anke Schaubrenner
//  Gemeinsames JS für alle Seiten
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // --- Coming Soon Toast für Social Icons ---
  const toast = document.createElement('div');
  toast.className = 'coming-soon-toast';
  toast.textContent = 'Coming Soon!';
  document.body.appendChild(toast);

  let toastTimer;
  document.querySelectorAll('.nav-social a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      clearTimeout(toastTimer);
      toast.classList.add('show');
      toastTimer = setTimeout(function () {
        toast.classList.remove('show');
      }, 2200);
    });
  });

  // --- Hamburger Menü ---
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Schließen bei Klick auf Link
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

});
