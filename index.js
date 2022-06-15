const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");

function showMenu() {
  if (hamburgerMenu.classList.contains("show-menu")) {
    document.activeElement.blur();
    hamburgerMenu.classList.remove("show-menu");
    hamburgerBtn.setAttribute("aria-expanded", false);
  } else {
    hamburgerMenu.classList.add("show-menu");
    hamburgerBtn.setAttribute("aria-expanded", true);
  }
}
hamburgerBtn.addEventListener("click", () => showMenu());
