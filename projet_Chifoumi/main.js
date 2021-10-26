
let choixUtilisateur;
do {
    choixUtilisateur = prompt("choisissez entre pierre, feuille ou ciseaux");
} while (choixUtilisateur != "pierre" && choixUtilisateur != "feuille" && choixUtilisateur != "ciseaux");
    


let resultat;
let choixIA = Math.floor(Math.random()*3);
if (choixIA == 0) {
    choixIA = "pierre"
}
else if (choixIA == 1){
    choixIA = "feuille"
}
else if (choixIA == 2){
    choixIA = "ciseaux"
}




if (choixUtilisateur == choixIA) {
    resultat = "match nul"
}
else switch (choixUtilisateur) {
    case "pierre":
        if (choixIA == "ciseaux") {
            resultat = "vous avez gagner"
        }
        else if (choixIA == "feuille") {
            resultat = "vous avez perdu"
        }
        
        break;
        
        case "ciseaux":
        if (choixIA == "pierre") {
            resultat = "vous avez perdu"
        }
        else if (choixIA == "feuille") {
            resultat = "vous avez gagné"
        }
        
        break;
        
        case "feuille":
        if (choixIA == "pierre") {
            resultat = "vous avez gagner"
        }
        else if (choixIA == "ciseaux") {
            resultat = "vous avez perdu"
        }
        
        break;
       
    default:
        break;
}

document.querySelector("#content").innerHTML=`<img src="img/${choixUtilisateur}.png"><br>Vous<p>
<img src="img/${choixIA}.png"><br>L'ordinateur</p><p>${resultat}</p>`