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

const hamburgerBtn = document.querySelector("#hamburger-btn");
const menu= document.querySelector("#mobile-menu");

hamburgerBtn.addEventListener("click",()=>{
  menu.classList.toggle("open");
})

// ==========================================================
// GROUP 3 - Mobile Tab Switcher
// ==========================================================

// Write your Group 3 code below this line.

// ==========================================================
// GROUP 4 - Desktop Tab Switcher
// ==========================================================

const tab_btn = document.querySelectorAll(".tab-btn");

const btn_about = document.getElementById("btn-about");
const btn_schedule = document.getElementById("btn-schedule");

const about_panel = document.getElementById("desktop-panel-about");
const schedule_panel = document.getElementById("desktop-panel-schedule");


// tab_btn.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     tab.classList.toggle("active");
//     about_panel.classList.toggle("hidden");
//     schedule_panel.classList.toggle("hidden");
//   })
// })

btn_about.addEventListener("click", () => {
  btn_schedule.classList.remove("active");
  btn_about.classList.add("active");
  schedule_panel.classList.add("hidden");
  about_panel.classList.remove("hidden");

})

btn_schedule.addEventListener("click", () => {
  btn_about.classList.remove("active");
  btn_schedule.classList.add("active");
  schedule_panel.classList.remove("hidden");
  about_panel.classList.add("hidden");
})