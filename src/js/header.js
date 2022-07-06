const header = document.querySelector("header");
const btnOpenNavmenu = document.querySelector(".navmenu__img");
const btnCloseNavmenu = document.querySelector(".navmenu__close");
const navmenuContainer = document.querySelector(".navmenu__container");
const linksNavmenu = navmenuContainer.querySelectorAll("a");
const listenerHeader = () => {
    openNavmenu();
    closeNavmenu();
    linkCloseNavmenu();
}


const openNavmenu = () => {
    btnOpenNavmenu.onclick = () => {
        navmenuContainer.classList.add("navmenu__container--open");
    }
}

const closeNavmenu = () => {
    btnCloseNavmenu.onclick = (event) => {
        event.preventDefault();
        navmenuContainer.classList.remove("navmenu__container--open");
    }
}

const linkCloseNavmenu = () => {
    linksNavmenu.forEach(link => {
        link.onclick = () => {
            navmenuContainer.classList.remove("navmenu__container--open");
        }
    })
}

export default listenerHeader;