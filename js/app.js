const navbar = document.getElementById("toggle_nav");
const toggler = document.getElementById("nav_toggler");

toggler.addEventListener("click", () => {
  navbar.classList.toggle("toggle_nav");
});
