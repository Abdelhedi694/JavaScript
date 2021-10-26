"use strict";

let voiture = {
    marque: "BMW",
    modele: "serie 3",
    anneeFabrication: "2012-01-02",
    dateAchat: new Date("2015-04-15"),
    passagers: ["Hedi", "Florian"],
} 


document.querySelector("#content").innerHTML = `<p>Informations sur la voiture</p><ul>
<li>marque : ${voiture.marque}</li>
<li>Année de fabriquation : ${voiture.anneeFabrication}</li>
<li>date d'achat : ${voiture.dateAchat.toLocaleDateString("fr",{mont: "long", year: "numeric", weekday: "long", day: "2-digit"})}</li>
<li>Passagers :</li>
<ul>
<li>${voiture.passagers[0]}</li>
<li>${voiture.passagers[1]}</li>
</ul>
</ul>`