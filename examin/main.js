"use strict"
// Abdelhedi Rafaï

/******* VARIABLES *********/


let tabPlats = ["quenelles", "tartiflette", "crêpe", "cassoulet", "huîtres", "épinards", "purée", "pizza", "tacos", "lasagnes"]


/******* FONCTIONS *********/


/**
 * Affiche dans le html les plats pré-enregistrés dans le tableau
 * et affiche dans le html le nombre de plats total contenu dans le tableau
 */
function displayPlats() {
    let platsAffichees = document.querySelector("#meals")
    
    let html = `<ul>`
    
   for (let plat of tabPlats) {
       html += `<li>${plat}</li><hr>`
   } 
   html += `</ul>`
   platsAffichees.innerHTML += html
   platsAffichees.insertAdjacentHTML ("afterbegin", `<h1>il y a ${tabPlats.length} plats au menu :</h1>`)
}

/**
 * Récupère la saisi du plat du user, vérifie si il y a une saisi vide,
 * un doublon, ne tiens pas compte majuscule minuscule pour les doublons, modifie dans le html le nombre total de plats et incrémente le plat que le user a saisie
 */
function displayPlatUser() {
    let platUser = document.querySelector("form input:first-of-type").value
    if (platUser == "") {
        alert("vous n'avez ajouté aucun élément veuillez réessayer");
    } else {
        
        let isDoublon = false
        for (let Unplat of tabPlats) {
            if (Unplat.toLocaleLowerCase() == platUser.toLocaleLowerCase()) {
                isDoublon = true
            }
        }
        if (isDoublon == false) {
            tabPlats.push(platUser)
    alert(`${platUser} a bien été ajouté au menu`)
    let platsAffichees = document.querySelector("#meals ul")
    platsAffichees.innerHTML += `<li>${platUser}</li><hr>`
    document.querySelector("form input:first-of-type").value = ""
    document.querySelector("#meals h1").innerHTML = `il y a ${tabPlats.length} plats au menu :`
    
        } else {
            alert("Ce plat existe déja veuillez indiquez un autre plat")
            document.querySelector("form input:first-of-type").value = ""
        }
        
    }
    

}


/******* CODE PRINCIPAL *********/


document.addEventListener("DOMContentLoaded", function () {
    displayPlats()
    let bouton = document.querySelector("form input:last-of-type")
    bouton.addEventListener("click", displayPlatUser)
   
    
})