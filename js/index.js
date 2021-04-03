//catch item from "header-toggle"
const toggleMenu = document.querySelector(".header-toggle");
const toggleMenuImg = document.querySelector(".header-toggle img");

//catch items from "Formation"
const formationItem = document.querySelectorAll(".formation-item");
const formationTitle = document.querySelector(".formation-title");

//catch items from "Experience"
const experienceItem = document.querySelectorAll(".experience-item");
const experienceTitle = document.querySelector(".experience-title");

//catch item from "Curse"
const curseTitle = document.querySelector(".curse-title");
const curseItem = document.querySelectorAll(".curse-item");
const curse = document.querySelector(".curse");

const html = document.documentElement;


window.addEventListener("scroll", () => {
    
    colorToggleMenu();
})

function colorToggleMenu(){
    const scrollPerc = parseInt(100 * html.scrollTop / (html.scrollHeight - html.clientHeight));
    console.log(scrollPerc);
    if(scrollPerc <= 4){
        toggleMenu.style.display ="none";
    }

    if(scrollPerc >=5  && scrollPerc <= 30){
        toggleMenu.style.backgroundColor = "#457b9d";
        toggleMenu.style.display = "flex";
    }
    if(scrollPerc > 30 ){
        toggleMenu.style.backgroundColor = "#e63946";
    }
}

//add Event listener for area of formation
formationItem.forEach((i) => {
    i.addEventListener("mousemove", () => {
        formationTitle.style.color = "black";
    })

    i.addEventListener("mouseleave", () => {
        formationTitle.style.color = "#e63946";
    })
})

//add Event listener for area of Experience
experienceItem.forEach(i => {
    i.addEventListener("mousemove", () => {
        experienceTitle.style.color = "black";
    })

    i.addEventListener("mouseleave", () => {
        experienceTitle.style.color = "#e63946";
    })
})

curseItem.forEach(i => {
    i.addEventListener("mousemove", () => {
        curseTitle.style.color = "black";
    })

    i.addEventListener("mouseleave", () => {
        curseTitle.style.color = "#e63946";
    })
})
