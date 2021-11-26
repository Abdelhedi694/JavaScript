let button;
function afficheBouton() {
    button = document.querySelector(".rectangle");
    button.classList.toggle("hide")
}
document.querySelector("header button").addEventListener("click",afficheBouton)

let hover;
function hoverRectangle() {
    hover = document.querySelector(".rectangle");
    hover.classList.add("important");
}
document.querySelector(".rectangle").addEventListener("mouseover",hoverRectangle)


let doubleClikFini;
let hoverExt;
function hoverOut() {
    hoverExt = document.querySelector(".rectangle");
    hoverExt.classList.remove("important");
    doubleClikFini = document.querySelector(".rectangle");
    doubleClikFini.classList.remove("good");
}

document.querySelector(".rectangle").addEventListener("mouseout",hoverOut)

let doubleClik;
function db() {
    doubleClik = document.querySelector(".rectangle");
    doubleClik.classList.add("good");
}

document.querySelector(".rectangle").addEventListener("dblclick",db)


