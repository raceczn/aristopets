const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "30px", // Reduced for quicker animations
  origin: "bottom",
  duration: 500, // Faster duration
};

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 250, // Reduced delay
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500, // Reduced delay
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 750, // Reduced delay
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1000, // Reduced delay
});

ScrollReveal().reveal(".intro__card", {
  ...scrollRevealOption,
  interval: 300, // Faster interval
});

ScrollReveal().reveal(
  ".about__row:nth-child(3) .about__image img, .about__row:nth-child(5) .about__image img",
  {
    ...scrollRevealOption,
    origin: "left",
  }
);
ScrollReveal().reveal(".about__row:nth-child(4) .about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__content span", {
  ...scrollRevealOption,
  delay: 250, 
});
ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 500, 
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 750, 
});

ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 300, 
});

ScrollReveal().reveal(".service__card", {
  duration: 500, 
  interval: 300, 
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".instagram__grid img", {
  duration: 500, 
  interval: 300, 
});
