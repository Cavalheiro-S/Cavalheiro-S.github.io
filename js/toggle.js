const buttonToggle = document.querySelector("[data-toggle='button']");
const menuToggle = document.querySelector("[data-toggle='menu']");
const itemsToggle = document.querySelectorAll(".header__item");
const buttonContact = document.querySelector(".toggle__contact");
export default function main(){

    buttonToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("toggle__menu--open");
    });

    itemsToggle.forEach(itemOfMenu => {

        itemOfMenu.addEventListener("click", () => {
            menuToggle.classList.toggle("toggle__menu--open");
        });
    })

    buttonContact.addEventListener("click", () => {
        menuToggle.classList.toggle("toggle__menu--open");
    })
}




