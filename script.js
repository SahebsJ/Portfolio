// ---------------- Navbar Toggle ----------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


// ---------------- Scroll Section Active Link + Sticky Header ----------------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky Header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle navbar on scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ---------------- Dark / Light Toggle ----------------
const themeToggleInput = document.getElementById('theme-toggle-input');

// Load theme from localStorage
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeToggleInput.checked = true;
}

themeToggleInput.addEventListener("change", () => {
  if (themeToggleInput.checked) {
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }
});

// ---------------- Particles.js Config ----------------
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#7c3aed" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    move: { enable: true, speed: 2 }
  }
});

// ---------------- Trivia Section ----------------
const facts = [
  "Honey never spoils. Archaeologists have found edible honey in ancient tombs.",
  "Bananas are berries, but strawberries are not.",
  "Sharks existed before trees.",
  "Octopuses have three hearts.",
  "A day on Venus is longer than its year."
];

const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", source: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", source: "Will Rogers" },
  { text: "It always seems impossible until it’s done.", source: "Nelson Mandela" },
  { text: "Success is not in what you have, but who you are.", source: "Bo Bennett" },
  { text: "Happiness depends upon ourselves.", source: "Aristotle" }
];

const triviaSection = document.querySelector('.trivia');
const factText = document.getElementById("fact-of-day");
const quoteText = document.getElementById("quote-text");
const quoteSource = document.getElementById("quote-source");

function newFact() {
  factText.textContent = facts[Math.floor(Math.random() * facts.length)];
  triviaSection.style.backgroundImage =
    `url('https://source.unsplash.com/1600x900/?abstract,${Math.random()}')`;
}

function newQuote() {
  let q = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `"${q.text}"`;
  quoteSource.textContent = `– ${q.source}`;
}

document.getElementById("new-fact").addEventListener("click", newFact);
document.getElementById("new-quote").addEventListener("click", newQuote);

// Load initial content
newFact();
newQuote();

// ---------------- Skills Animation ----------------
const skillLevels = document.querySelectorAll(".skill-level");

function animateSkills() {
  skillLevels.forEach(level => {
    let skillTop = level.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (skillTop < windowHeight - 50 && level.style.width === "") {
      let finalWidth = level.getAttribute("data-level");
      level.style.width = finalWidth;
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills); // ensure runs on page load
