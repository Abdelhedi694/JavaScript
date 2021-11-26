"use strict"

let tab = [
    {
       nom : "cerise", quantite : 2
    },
    {
        nom : "fraise", quantite : 1
    },
]



function stockTableau() {
    let article = {
    }
   article.nom = document.querySelector("#texte").value
   article.quantite = parseInt(document.querySelector("#quantite").value)

    let index = 0
    let isDoublon = false
    for (let unArticle  of tab) {
        if (unArticle.nom == article.nom) {
            isDoublon = true
            tab[index].quantite += article.quantite
            
        }else{
            index++
        }
        
            
        
        
    }
    if (isDoublon == false) {
        tab.push(article)
            let uel = document.querySelector("ul")
               uel.innerHTML += `<li>${article.nom}</li><li>${article.quantite}</li><br>`
    } else {
        
        let uel = document.querySelector("ul")
        uel.innerHTML += `<li>${article.nom}</li><li>${article.quantite}</li><br>`
    }
        
    
    console.log(tab);
    
}

function doublon() {

    
}



document.addEventListener("DOMContentLoaded", function () {
    let bouton = document.querySelector("#soumettre")
    bouton.addEventListener("click", stockTableau)
    
})