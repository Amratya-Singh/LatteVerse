const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

menuOpenButton.addEventListener("click", () => {
   // Toggle mobile menu visibility
   document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when any nav link is clicked
navLinks.forEach(link => {
   link.addEventListener("click", () => menuOpenButton.click()); 
});

// Close menu when clicking outside the navbar
document.addEventListener("click", function(event) {
   const isClickInsideNav = navMenu.contains(event.target);
   const isClickOnToggle = menuOpenButton.contains(event.target);

   if (!isClickInsideNav && !isClickOnToggle) {
      document.body.classList.remove("show-mobile-menu");
   }
});

// Prevent nav-menu from closing when clicked inside
navMenu.addEventListener("click", function(event) {
   event.stopPropagation(); // stops click from bubbling to document
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
   loop: true,
   grabCursor: true,
   spaceBetween: 25,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      0: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      1024: {
         slidesPerView: 3
      },
   }
});
