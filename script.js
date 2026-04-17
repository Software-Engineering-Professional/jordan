// ==========================================================
// SITE - Active nav link on scroll
// ==========================================================
(function () {
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll("#desktop-nav .nav-link");

  if (!sections.length || !navLinks.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove("active");
          });
          var active = document.querySelector(
            '#desktop-nav .nav-link[href="#' + entry.target.id + '"]',
          );
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();

// ==========================================================
// SITE - Scroll reveal for content rows and cards
// ==========================================================
(function () {
  var targets = document.querySelectorAll(
    ".build-row, .process-item, .pair-card, .hero-left, .hero-right",
  );

  targets.forEach(function (el) {
    el.classList.add("reveal");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -60px 0px" },
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();

// ==========================================================
// GROUP 1 - Desktop Navbar: Dark / Light Mode Toggle
// ==========================================================

// Write your Group 1 code below this line.

// ==========================================================
// GROUP 2 - Mobile Navbar: Hamburger Menu Toggle
// ==========================================================

// Write your Group 2 code below this line.

// ==========================================================
// GROUP 3 - Mobile Tab Switcher
// ==========================================================

// Write your Group 3 code below this line.
const tabAbout =document.querySelector('#mobile-panel-about')
const tabPanel =document.querySelector('.tab-panel')
const tabSchedule = document.querySelector("#mobile-panel-schedule")
tabSchedule.addEventListener('click', () => {
  tabAbout.classList.remove("hidden")
  tabSchedule.classList.add('active')
})
const btnAbout = document.getElementById("btn-about")
const btnSchedule = document.getElementById("btn-schedule")

btnAbout.addEventListener('click', () => {
  btnAbout.classList.add("active")
  btnSchedule.classList.remove("active")
  tabAbout.classList.remove("hidden");
  tabSchedule.classList.add("hidden");
  
})
btnSchedule.addEventListener('click', () => {
  btnSchedule.classList.add("active")
  btnAbout.classList.remove("active")
  tabAbout.classList.add("hidden");
  tabSchedule.classList.remove("hidden");
})


const tabBtn  = document.querySelectorAll('.tab-btn')
tabBtn.forEach((btn) => {
  btn.addEventListener('click', () => {


  })
})


// ==========================================================
// GROUP 4 - Desktop Tab Switcher
// ==========================================================

// Write your Group 4 code below this line.
