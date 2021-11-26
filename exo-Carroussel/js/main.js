"use strict"
let slide = [
    {
        chemin: "images/1.jpg",
        legende: "freres pandas"
    },
    {
        chemin: "images/2.jpg",
        legende: "yoga on the top"
    },
    {
        chemin: "images/3.jpg",
        legende: "lever de soleil"
    },
    {
        chemin: "images/4.jpg",
        legende: "ciel étoilé"
    },
    {
        chemin: "images/5.jpg",
        legende: "tea time"
    },
    {
        chemin: "images/6.jpg",
        legende: "ca va péter le bide"
    }
]

let states = {};

//FONCTIONS

function refreshSlider() {
    const figcaption = document.querySelector("figcaption");
    //je créer une constante qui stock le ciblage de figcaption
    const img = document.querySelector("#slider img")
    // ciblage image
    figcaption.textContent = slide[states.index].legende
    // jajoute ce texte dans balise figcaption
    img.src = slide[states.index].chemin
    img.alt = slide[states.index].legende
};

function afficheToolBar() {
    const uele = document.querySelector("ul");
    uele.classList.toggle("hide");
    const icon = document.querySelector("#toolbar-toggle i");
    icon.classList.toggle("fa-arrow-right");
    icon.classList.toggle("fa-arrow-down");
}


function suivant() {
    states.index++
    if (states.index > slide.length - 1) {
        states.index = 0
    }
    refreshSlider()
}

function precedent() {
    states.index--
    if (states.index < 0) {
        states.index = slide.length - 1
    }
    refreshSlider()
}

function random() {
    let hasardSiEgal = 0;
    hasardSiEgal = getRandomInteger(0, slide.length - 1)
    while (hasardSiEgal == states.index) {
        hasardSiEgal = getRandomInteger(0, slide.length - 1)
    }
    states.index = hasardSiEgal
    refreshSlider()
}




function diapo() {
    const btnPlay = document.querySelector("#slider-toggle i");
    btnPlay.classList.toggle("fa-play");
    btnPlay.classList.toggle("fa-pause");
    if (states.interval == false) {
        states.interval = setInterval(suivant, 2000)
    }else{
        
            clearInterval(states.interval);
            states.interval = false
    }
    
    

}

// code principal

document.addEventListener("DOMContentLoaded",function () {
    states.index = 0;
    states.interval = false;
    refreshSlider();
    document.querySelector("#toolbar-toggle").addEventListener("click", afficheToolBar)
    document.querySelector("#slider-next").addEventListener("click", suivant)
    document.querySelector("#slider-previous").addEventListener("click", precedent)
    document.querySelector("#slider-random").addEventListener("click", random)
    document.querySelector("#slider-toggle").addEventListener("click", diapo)
})