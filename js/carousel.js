//catch click of button carrousel
const btnBack = document.querySelector(".btn-back");
const btnAfter = document.querySelector(".btn-next");
const carrouselImage = document.querySelector(".project-card-image img");
const carrouselTitle = document.querySelector(".project-title h3");
const carrouselDescription = document.querySelector(".project-description p");
const carrouselLinkGithub = document.querySelector(".link-projeto");

const linksFooter = document.querySelectorAll(".footer-link");

export default function changeCarrousel(){
    const paths = [];
    const titles = [];
    const descriptions = [];
    const githubLinks = [];
    let cont = 0;


    addProjectToCarrousel("./imgs/Project-App-indicadores.png","App de métricas" ,"Projeto construído utilizando o framework React do javascript, foi utilizado também a biblioteca 'Material-UI' para a estilização de alguns componentes, a função do programa é receber os dados financeiros de uma empresa e com base neles calcular a margem desses resultados","https://github.com/Cavalheiro-S/App-CalculoMetricas");
    addProjectToCarrousel("./imgs/Project_Caixa-Fruits.png","App Caixa Registradora","Aplicação  programada em C# e consiste em simular basicamente o funcionamento de uma caixa registradora, registrando os dados processados em arquivos .txt, a persistência dos dados é armazenada na área de trabalho do usúario em uma pasta criada pelo app chamada 'Arquivos'","https://github.com/Cavalheiro-S/CaixaRegistradora");
    addProjectToCarrousel("./imgs/Project-CRUD-Products.png","CRUD Loja Celulares","Aplicação CRUD criada utilizando a linguagem C# com o Windows Forms, da plataforma .NET, para a persistência dos dados foi utilizado o SQL Server como banco de dados","https://github.com/Cavalheiro-S/CRUD-Senai");
    

    btnAfter.addEventListener("click", () =>{
        cont ++;
        if(cont > paths.length - 1 ){
            cont = 0;
        }
        changeInfoCarrousel(cont);
        console.log(paths[cont]);
    })
    btnBack.addEventListener("click", () => {
        cont --;
        if(cont < 0){
            cont = paths.length - 1;
        }
        changeInfoCarrousel(cont)
    })

    linksFooter.forEach(item => {
        item.addEventListener("click", (event) =>{
            if(item.textContent == "App Métricas"){
                cont = 0;
                changeInfoCarrousel(cont);
            }
            else if(item.textContent == "Caixa Registradora"){
                cont = 1;
                changeInfoCarrousel(cont);
            }
            else if(item.textContent == "CRUD Loja"){
                cont = 2;
                changeInfoCarrousel(cont);
            }
        })
    })

    function addProjectToCarrousel(pathImg,title,description,githubLink){
        paths.push(pathImg);
        titles.push(title);
        descriptions.push(description);
        githubLinks.push(githubLink);
    }

    function changeInfoCarrousel(cont){
        carrouselImage.src = paths[cont];
        carrouselTitle.innerHTML = titles[cont];
        carrouselDescription.innerHTML = descriptions[cont];
        carrouselLinkGithub.href = githubLinks[cont];
    }
}

