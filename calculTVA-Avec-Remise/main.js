let montantHT;
let montantTTC;
let tauxTVA = 20;
let montantTVA;
let choixRemise;
let montantRemise;
let remiseEtHT;
let montantTVARemise;


montantHT = parseFloat(prompt("Indiquez votre montant HT"))
montantTVA = montantHT * (tauxTVA / 100)
choixRemise = prompt("Voulez vous bénéficier d'une remise ?")

if (choixRemise == "yes" || choixRemise == "oui") {
    montantRemise = parseFloat(prompt("indiquez le montant de la remise svp"));
    remiseEtHT = montantHT * (montantRemise/100);
    montantTVARemise = (montantHT - remiseEtHT) * tauxTVA/100;


    document.querySelector("#content").innerHTML = `<p>Pour un montant HT de ${montantHT - remiseEtHT}€ HT il y a ${montantTVARemise}€ de TVA</p><p>Le montant TTC est donc de ${montantHT + montantTVARemise - remiseEtHT}€` ;
} else {
    document.querySelector("#content").innerHTML = `<p>Pour un montant HT de ${montantHT}€ HT il y a ${montantTVA}€ de TVA</p><p>Le montant TTC est donc de ${montantHT + montantTVA}€` ;
}