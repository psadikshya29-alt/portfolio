// Select all ad cards
const adCards = document.querySelectorAll(".ad-card");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

// Open lightbox
adCards.forEach((card) => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    lightboxImg.src = imgSrc;
    lightbox.style.display = "flex";
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
// Mobile Menu

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.onclick = function () {
  menu.classList.toggle("show");
};

// Smooth Scroll

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    menu.classList.remove("show");
  });
});

// Scroll Animation

const cards = document.querySelectorAll(".project-card,.about-card,.ad-card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
