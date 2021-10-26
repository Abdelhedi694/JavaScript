// "use strict";

// //VARIABLES

const TAUX_TVA = 20;
let montantHT;
let montantTVA;
let montantTTC;

// //CODE PRINCIPAL

montantHT = parseInt(prompt("Saisissez votre montantHT svp"));
montantTVA = montantHT * (TAUX_TVA / 100);
console.log(montantTVA);
montantTTC = montantHT + montantTVA;
console.log(montantTTC);


document.querySelector("#content").innerHTML = `<p>Pour un montant de  ${montantHT}€</p><p>Le montant TTC est de ${montantTTC}€</p>`

//METHODE EN DUR

// document.querySelector("#content").innerHTML = "<p>Pour un montant de 100€, il y a 20€ de TVA.</p><p>Le montant TTC est donc de 120€</p>"

// // //METHODE AVEC PLUS

// document.querySelector("#content").innerHTML = "<p>Pour un montant de "+ montantHT +"€, il y a "+ montantTVA +"€ de TVA.</p><p>Le montant TTC est donc de "+ montantTTC +"€</p>"

// //METHODE AVEC ANTICOTE TAMPLATE STRING

// document.querySelector("#content").innerHTML = `<p>Pour un montant de  ${montantHT}€, il y a  ${montantTVA}€ de TVA.</p><p>Le montant TTC est donc de ${montantTTC}€</p>`




