// let mois = ["janvier", "février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","decembre"];
// let jours = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
// let date = new Date()
// let moisFonction = date.getMonth();
// let annee = date.getFullYear()
// let jourFonction = date.getDay()
// let numero = date.getDate()


// document.querySelector("#content").innerHTML = `Nous somme le ${jours[jourFonction]} ${numero} ${mois[moisFonction]} ${annee}`
let tab = [];
let phrase = "Bonjour";
let i;
for (i = 0; i < 5; i++) {
  tab[i] = phrase;
}
console.log(tab);