// Active Navbar Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
// Typing Animation
const textArray = ["Digital Marketer", "Web Developer", "IT Student"];

let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
  if (charIndex < textArray[index].length) {
    typingElement.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();
// Ripple Effect
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});
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
// Skill Scroll Animation
const skillCards = document.querySelectorAll(".skill-card");

function showSkills() {
  skillCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", showSkills);
window.addEventListener("load", showSkills);

// Contact Animation (no HTML change)
const contactItems = document.querySelectorAll("#contact p");

function showContact() {
  contactItems.forEach((item, index) => {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 200); // delay animation
    }
  });
}

window.addEventListener("scroll", showContact);
window.addEventListener("load", showContact);
