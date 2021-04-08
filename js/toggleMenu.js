
const html = document.documentElement;

//catch item from "goTop"
const goTop = document.querySelector(".goTop");

//catch item from "header-toggle"
const toggleMenu = document.querySelector(".header-toggle");
const toggleMenuOpen = document.querySelector(".header-toggle-open");
const toggleMenuImg = document.querySelector(".header-toggle img");

export default function colorToggleMenu(){
    const scrollPerc = parseInt(100 * html.scrollTop / (html.scrollHeight - html.clientHeight));
    if(scrollPerc <= 4){
        toggleMenu.style.display ="none";
        goTop.style.display = "none";
    }

    if(scrollPerc >=5  && scrollPerc <= 30){
        toggleMenu.style.backgroundColor = "#457b9d";
        toggleMenuOpen.style.backgroundColor = "#457b9d";
        toggleMenu.style.display = "flex";
        goTop.style.display = "flex";
    }
    if(scrollPerc > 30 ){
        toggleMenu.style.backgroundColor = "#e63946";
        toggleMenuOpen.style.backgroundColor = "#e63946";
    }
}

toggleMenu.addEventListener("mousemove", () => {
    toggleMenu.style.width = "7.5%";
})


toggleMenu.addEventListener("click", () =>{
    if(toggleMenuOpen.style.display == "none"){
        toggleMenuOpen.style.display = "block";
        toggleMenuOpen.style.width = "calc(100vw - "+toggleMenu.offsetWidth+"px)";
        toggleMenuOpen.style.height = "60px";
        toggleMenuOpen.style.right = "calc(0% - "+toggleMenuOpen.offsetWidth+"px)";
        let teste ="calc(0% + "+toggleMenu.offsetWidth+"px)";
        toggleMenuOpen.style.transform = "translateX(calc(-100% - "+toggleMenu.offsetWidth+"px))";
        console.log(teste);
    }else{
        toggleMenuOpen.style.transform = "translateX(100%)"
        setTimeout(() =>{
            toggleMenuOpen.style.display = "none";
        },500);
        
    } 
})