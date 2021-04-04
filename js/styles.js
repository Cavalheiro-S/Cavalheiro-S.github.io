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

//catch item from "Project"
const projectsTitle = document.querySelector(".projects-title");
const projectItem = document.querySelectorAll(".project-item");


export default function addListeners(){
    //add Event listener 
    styleTitle(formationItem,formationTitle);
    styleTitle(experienceItem,experienceTitle);
    styleTitle(curseItem,curseTitle);
    styleTitle(projectItem,projectsTitle);
}
function styleTitle(item, title){
    item.forEach(i =>{
        i.addEventListener("mousemove", () =>{
            title.style.color = "black";
        })

        i.addEventListener("mouseleave", () =>{
            title.style.color = "#e63946";
        })
    })
}


