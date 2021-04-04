import addListeners from "./styles.js";

//catch item from "header-toggle"
const toggleMenu = document.querySelector(".header-toggle");
const toggleMenuImg = document.querySelector(".header-toggle img");

//catch item from "goTop"
const goTop = document.querySelector(".goTop");

//catch click of button carrousel
const btnBack = document.querySelector(".btn-back");
const btnAfter = document.querySelector(".btn-after");
const carrouselImage = document.querySelector(".project-card-image img");
const carrouselTitle = document.querySelector(".project-title h3");
const carrouselDescription = document.querySelector(".project-description p");
addListeners.call();


function changeCarrousel(){
    const imgs = ["./imgs/Project_Caixa-Fruits.png", "./imgs/Project-CRUD-Products.png", "./imgs/github.png"];
    const titles = ["Caixa Frutaria", "CRUD para produtos e fornecedores ", "Github"];
    const description = [
    "Projeto idealizado com base nos conhecimentos adquiridos no " 
    +"segundo semestre do curso técnico de desenvolvimento de sistemas <br> "
    +"Consiste em um aplicativo que simula basicamente o funcionamento de uma caixa registradora, " 
    +"registrando os dados processados em arquivos .txt, "
    +"a persistência dos dados é armazenada na área de trabalho do usúario em uma "
    +"pasta criada pelo app chamada 'Arquivos'",
    "Projeto CRUD com intuito de manipular produtos e fornecedores , o programa é composto por tela de login , "
    +"tela de menu , tela CRUD para produtos e uma tela CRUD para fornecedores",
    "EXEMPLO PROJETO GITHUB"
    ]

    let cont = 0
    btnAfter.addEventListener("click", () =>{
        cont ++;
        if(cont > imgs.length - 1 ){
            cont = 0;
        }
        carrouselImage.src = imgs[cont];
        carrouselTitle.innerHTML = titles[cont];
        carrouselDescription.innerHTML = description[cont];
        console.log(imgs[cont]);
    })
    btnBack.addEventListener("click", () => {
        cont --;
        if(cont < 0){
            cont = imgs.length - 1;
        }
        carrouselImage.src = imgs[cont];
        carrouselTitle.innerHTML = titles[cont];
        carrouselDescription.innerHTML = description[cont];
    })
}

changeCarrousel();

const html = document.documentElement;

window.addEventListener("scroll", () => {
    
    colorToggleMenu();
})

function colorToggleMenu(){
    const scrollPerc = parseInt(100 * html.scrollTop / (html.scrollHeight - html.clientHeight));
    console.log(scrollPerc);
    if(scrollPerc <= 4){
        toggleMenu.style.display ="none";
        goTop.style.display = "none";
    }

    if(scrollPerc >=5  && scrollPerc <= 30){
        toggleMenu.style.backgroundColor = "#457b9d";
        toggleMenu.style.display = "flex";
        goTop.style.display = "flex";
    }
    if(scrollPerc > 30 ){
        toggleMenu.style.backgroundColor = "#e63946";
    }
}


