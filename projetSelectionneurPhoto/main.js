"use strict"
let nb = 0;
let liS = document.querySelectorAll("li");
let nombre = document.querySelector("em");
function backgroundBleu() {
    this.classList.toggle("selected");
    if (this.classList.contains("selected")) {
        nb++
    }else{
        nb--
    }
    nombre.innerHTML = nb
}




for (let li of liS) {
    li.addEventListener("click",backgroundBleu);
    
};

//tout selectionner

let boutonToutSelectionner = document.querySelector("#selectAll");

function toutSelectionner() {
    for (let li of liS) {
        li.classList.add("selected");
    }
        nb = liS.length
        nombre.innerHTML = nb
}


boutonToutSelectionner.addEventListener("click", toutSelectionner)

// tout deselectionner

let boutonToutDeselectionner = document.querySelector("#deselectAll");



function toutDeselectionner() {
    for (let li of liS) {
        li.classList.remove("selected");
        
    }
    nb = 0
    nombre.innerHTML = nb
}

boutonToutDeselectionner.addEventListener("click", toutDeselectionner)

