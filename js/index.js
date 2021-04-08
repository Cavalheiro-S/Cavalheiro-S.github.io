import addListeners from "./styles.js";
import changeCarrousel from "./carousel.js";
import colorToggleMenu from "./toggleMenu.js";


addListeners();
changeCarrousel();

window.addEventListener("scroll", () => {
    colorToggleMenu();
})



