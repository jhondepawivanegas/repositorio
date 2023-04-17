let menuHamburguer = document.getElementById("menuHamburguer");
let mainMenu = document.getElementById("mainMenu");

menuHamburguer.addEventListener("click", function() {
        if(mainMenu.classList.contains("media-media-hidden")){
        mainMenu.classList.add("menu-media-visible");
        mainMenu.classList.remove("menu-media-hidden");
        }
});