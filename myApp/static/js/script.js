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


// Scroll to Top Button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = "&#8679;";
scrollTopBtn.id = "scroll-top-btn";
document.body.appendChild(scrollTopBtn);

// Apply CSS styles
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "20px";
scrollTopBtn.style.right = "20px";
scrollTopBtn.style.width = "60px";
scrollTopBtn.style.height = "60px";
scrollTopBtn.style.background = "linear-gradient(145deg,rgb(190, 109, 170),rgb(218, 119, 220))"; // Gradient for playful effect
scrollTopBtn.style.color = "#fff";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.borderRadius = "50%";
scrollTopBtn.style.display = "none"; // Initially hidden
scrollTopBtn.style.justifyContent = "center";
scrollTopBtn.style.alignItems = "center";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.fontSize = "28px";
scrollTopBtn.style.fontWeight = "bold";
scrollTopBtn.style.boxShadow = "2px 4px 10px rgba(0, 0, 0, 0.2)";
scrollTopBtn.style.zIndex = "1000"; // Ensure it's on top of other elements
scrollTopBtn.style.transition = "transform 0.3s ease"; // Smooth transition on hover

// Hover effect for a fun, kiddie feel
scrollTopBtn.addEventListener("mouseover", () => {
  scrollTopBtn.style.transform = "scale(1.1)"; // Slightly enlarge button on hover
});

scrollTopBtn.addEventListener("mouseout", () => {
  scrollTopBtn.style.transform = "scale(1)"; // Reset to original size when mouse leaves
});

// Function to show/hide button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Function to scroll to top when button is clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


