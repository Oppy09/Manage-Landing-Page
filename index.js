const button = document.querySelector(".nav-btn");
const mobileLinks = document.querySelector(".mobile-sc");

button.addEventListener("click", function() {
    mobileLinks.classList.toggle("show");
});