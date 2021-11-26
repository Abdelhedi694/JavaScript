"use strict"
// variable principale
let contenu = document.querySelector("#content")


function generateH1() {
    contenu.insertAdjacentHTML ("beforeend","<h1 contenteditable 'true'>titre principal</h1>")

}

function generateH2() {
    contenu.insertAdjacentHTML("beforeend", "<h2 contenteditable 'true'>titre niveau 2</h2>")
}

function generateH3() {
    contenu.insertAdjacentHTML("beforeend", "<h3 contenteditable 'true'>titre niveau 3</h3>")
}

function generateP() {
    contenu.insertAdjacentHTML("beforeend", "<p contenteditable 'true'>saisissez du paragraphe</p>")
}

function generateHR() {
    contenu.insertAdjacentHTML("beforeend", "<hr>")
}


/**
 * génère un titre h1 au click sur h1
 */
document.querySelector("#h1").addEventListener("click",generateH1);

/**
 * génère un titre h2 au click sur h2
 */
document.querySelector("#h2").addEventListener("click",generateH2);

/**
 * génère un titre h2 au click sur h2
 */
document.querySelector("#h3").addEventListener("click",generateH3);


/**
 * génère du paragraphe au click sur Paragraphe
 */
document.querySelector("#p").addEventListener("click",generateP);


/**
 * génère un hr au click sur hr
 */
document.querySelector("#hr").addEventListener("click",generateHR);