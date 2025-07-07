// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});



let animated = false;

function animatePercentages() {
  if (animated) return;

  const skillSection = document.querySelector(".skills");
  const skillPos = skillSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (skillPos < windowHeight - 100) {
    const counters = document.querySelectorAll(".per");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const updateCount = () => {
        if (count < target) {
          count++;
          counter.textContent = `${count}%`;
          setTimeout(updateCount, 20); // Speed: lower = faster
        } else {
          counter.textContent = `${target}%`;
        }
      };

      updateCount();
    });

    animated = true; // Run only once
  }
}

window.addEventListener("scroll", animatePercentages);


window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');
  preloader.style.display = 'none';   // hide preloader
  mainContent.style.display = 'block'; // show page content
});
