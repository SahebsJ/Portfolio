// ===== Navbar Highlight on Scroll =====
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector(".navbar a[href*=" + id + "]").classList.add("active");
      });
    }
  });

  // Sticky Header
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
});

// ===== Dark/Light Theme Toggle =====
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
  themeToggle.innerHTML = "<i class='fa-solid fa-sun'></i>";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  if (body.classList.contains("light-theme")) {
    themeToggle.innerHTML = "<i class='fa-solid fa-sun'></i>";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.innerHTML = "<i class='fa-solid fa-moon'></i>";
    localStorage.setItem("theme", "dark");
  }
});
