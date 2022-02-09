//catch click of button carrousel
const btnBack = document.querySelector(".button--back");
const btnAfter = document.querySelector(".button--next");
const carrouselImage = document.querySelector(".carrousel__image");
const carrouselTitle = document.querySelector(".carrousel h3");
const carrouselDescription = document.querySelector(".project__description p");
const carrouselLinkGithub = document.querySelector(".carrousel__link");

const linksFooter = document.querySelectorAll(".footer__link");

export default function changeCarrousel() {
    const paths = [];
    const titles = [];
    const descriptions = [];
    const githubLinks = [];
    let cont = 0;


    addProjectToCarrousel(
        "./imgs/Project-Gerenciador-Contabil.png",
        "Gerenciador Financeiro",
        "Aplicação web construída com intuito de registrar gastos e investimentos pessoais, foram utilizados: ReactJS, Typescript e Sass",
        "https://github.com/Cavalheiro-S/App-Controle-Financeiro");

    addProjectToCarrousel(
        "./imgs/Project-Gerenciador-Calorico.png",
        "Gerenciador Calórico",
        "Aplicativo para calcular o IMC e a TMB , tecnologias utilizadas: Javascript, Html, Css",
        "https://github.com/Cavalheiro-S/App-gerenciador-calorico");

    addProjectToCarrousel(
        "./imgs/Project-CRUD-Products.png",
        "CRUD Loja Celulares",
        "Aplicação CRUD criada utilizando a linguagem C# com o Windows Forms, da plataforma .NET, para a persistência dos dados foi utilizado o SQL Server como banco de dados",
        "https://github.com/Cavalheiro-S/CRUD-Senai");


    btnAfter.addEventListener("click", () => {
        cont++;
        if (cont > paths.length - 1) {
            cont = 0;
        }
        changeInfoCarrousel(cont);
    })
    btnBack.addEventListener("click", () => {
        cont--;
        if (cont < 0) {
            cont = paths.length - 1;
        }
        changeInfoCarrousel(cont)
    })

    linksFooter.forEach(item => {
        item.addEventListener("click", (event) => {
            if (item.textContent == "Gerenciador Financeiro") {
                cont = 0;
                changeInfoCarrousel(cont);
            }
            else if (item.textContent == "Gerenciador Calórico") {
                cont = 1;
                changeInfoCarrousel(cont);
            }
            else if (item.textContent == "CRUD Loja") {
                cont = 2;
                changeInfoCarrousel(cont);
            }
        })
    })

    function addProjectToCarrousel(pathImg, title, description, githubLink) {
        paths.push(pathImg);
        titles.push(title);
        descriptions.push(description);
        githubLinks.push(githubLink);
    }

    function changeInfoCarrousel(cont) {
        carrouselImage.src = paths[cont];
        carrouselTitle.innerHTML = titles[cont];
        carrouselDescription.innerHTML = descriptions[cont];
        carrouselLinkGithub.href = githubLinks[cont];
    }
}

