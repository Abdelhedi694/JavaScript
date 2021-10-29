"use strict";
let lists = [];
let choixUtilisateur;
do {
    choixUtilisateur = prompt("Tapez 1 si vous voulez ajouter un produit, 2 si vous voulez supprimer un produti par son nom, 3 si vous voulez supprimer tous les produtis ou 4 si vous voulez consulter la taille et le contenu")
} while (choixUtilisateur != 1 && choixUtilisateur != 2 && choixUtilisateur != 3 && choixUtilisateur != 4);



function addItem(item) {
    lists.push(item)
    
}

function display() {
    for (let list of lists) {
        html += `<p>${list}</p>`
    }
    return `il y a ${lists.length} produits dans la liste.${html}`
}

addItem("pomme");
addItem("patate");
addItem("tomate");
addItem("ananas");
addItem("cerise");
addItem("fraise");
addItem("raisin");

let html=""

/**Demande à l'utilisateur quel produit supprimer et cela supprime le produit */
let toDelete = prompt("quel produit voulez vous supprimer")
let stockIndex;
function supprimeItem(item) {
  stockIndex = lists.indexOf(item);
  lists.splice(stockIndex, 1)
}
supprimeItem(toDelete);
document.querySelector("#content").innerHTML=`${display()}`














