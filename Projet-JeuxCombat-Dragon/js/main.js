"use strict"


/**
 * 
 * @param {*} choixPrincipaux 
 * @returns le niveau en nombre saisi par l'utilisateur
 */
function requestInteger(msg) {
    let nb;
    do {
        nb = parseInt(prompt(`${msg} entre 1 et 3`))
    } while (nb != 1 && nb != 2 && nb != 3);
    return nb;  
}

 
// Objet des variables principales 
let game = {
    level:null,
    sword:null,
    armor:null,
    hpDragon:null,
    hpChevalier:null,
    round:0,
}


function initializeGame() {
    game.level = requestInteger("veuillez saisir le niveau de difficulté");
    game.sword = requestInteger("veuillez choisir votre épée/n 1-Bois / 2-Acier / 3-Excalibur");
    game.armor = requestInteger("veuillez choisir votre armure/n 1-Cuivre / 2-Fer / 3-Magique");
    

    switch (game.level) {
        case 1: 
        game.hpChevalier = getRandomInteger(200,250);
        game.hpDragon = getRandomInteger(150,200);

            break;
            case 2: 
        game.hpChevalier = getRandomInteger(200,250);
        game.hpDragon = getRandomInteger(200,250);
        
            break;
            case 3: 
        game.hpChevalier = getRandomInteger(150,200);
        game.hpDragon = getRandomInteger(200,250);
        
            break;
        default:
            break;
    }

    switch (game.sword) {
        case 1: 
        game.sword = 0.5
            break;
            case 2: 
            game.sword = 1
            break;
            case 3: 
            game.sword = 1.5
            break;
        default:
            break;
    }

    switch (game.armor) {
        case 1: 
        game.armor = 1
            break;
            case 2: 
            game.armor = 0.75
            break;
            case 3: 
            game.armor = 0.5
            break;
        default:
            break;
    }

};

initializeGame();

console.log(game);


/**
 * 
 * @param {*} params 
 */
function degatDragon() {
    switch (game.level) {
        case 1: return (getRandomInteger(10,20)*game.armor);
            
            break;
            case 2: return (getRandomInteger(20,30)*game.armor);
            
            break;
            case 3: return (getRandomInteger(20,30)*game.armor);
            
            break;
        default:
            break;
    }
}

function degatChevalier() {
    switch (game.level) {
        case 1: return (getRandomInteger(25,30)*game.sword);
            
            break;
            case 2: return (getRandomInteger(15,20)*game.sword);
            
            break;
            case 3: return (getRandomInteger(5,10)*game.sword);
            
            break;
        default:
            break;
    }
}

function speedChevalier() {
    return getRandomInteger(10,20);
}

function speedDragon() {
    return getRandomInteger(10,20)
}
let html =`<table>
<thead>
    <tr>
        <th colspan>hpChevalier</th>
        <th colspan>hpDragon</th>
        <th colspan>Round</th>
    </tr>
</thead>
<tbody>`
let pointBaseChevalier;
let pointBaseDragon;
function gameLoop() {
    while (game.hpChevalier > 0 && game.hpDragon > 0) {
        
        ++game.round;
        if (speedChevalier()<speedDragon()) {
            pointBaseChevalier = game.hpChevalier;
            html+=`<tr><td>${game.hpChevalier = game.hpChevalier - degatDragon()} HP<br>Le dragon vous a infligé ${pointBaseChevalier - game.hpChevalier}</td>
            
            <td></td><td>${game.round}</td></tr>`;

           
           
        }
        else { 
            pointBaseDragon = game.hpDragon
            html+=`<tr><td></td><td>Il reste ${game.hpDragon = game.hpDragon - degatChevalier()} HP au dragon bravo !<br>Vous avez infligé ${pointBaseDragon - game.hpDragon} de dégat au dragon
            </td><td>${game.round}</td></tr>`
   
        }
    }
}
let vainqeur;
gameLoop()
if (game.hpChevalier > game.hpDragon) {
    vainqeur+=`<img src=img/knight.png><br>bravo vous avez vaincu le dragon`
    
}
else{
    vainqeur+=`<img src=img/dragon.png><br>Le dragon a été plus fort que vous`
}
html+=`</tbody>
</table>`
document.querySelector("#game").innerHTML=html
document.querySelector("#vainqueur").innerHTML=vainqeur

