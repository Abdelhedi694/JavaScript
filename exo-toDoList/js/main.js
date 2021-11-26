

// VARIABLES


//FONCTIONS
function derouler() {
    const formulaire = document.querySelector("#task-form");
    formulaire.classList.toggle("hide")
    formulaire.dataset.mode = "add"
}

function saveTask(event) {
    event.preventDefault();
    //Annule le chargement de la page, par defaut en cliquant sur submit la page envoi les infos donc cette fonction annule cela
    let infos = {
        nom : document.querySelector("#name").value,
        accomplissement : document.querySelector("#lvl").value,
        descripiton : document.querySelector("#description").value
    }
    
    let tabInfo = loadData()
    const formulaire = document.querySelector("#task-form")
    if (formulaire.dataset.mode == "edit") {
        let detailA = document.querySelector("#task-details a")
        tabInfo.splice(detailA.dataset.index, 1)
        
        
    }
        tabInfo.push(infos)
    
    let tabJson = JSON.stringify(tabInfo)
    localStorage.setItem("to do list", tabJson)
    

    displaTask()
    document.querySelector("#task-form").reset()
    derouler()
    formulaire.dataset.mode = "add"
    }
    
    


function loadData() {
    let tabInfo = localStorage.getItem("to do list")
    tabInfo = JSON.parse(tabInfo)
    if (tabInfo == null) {
        tabInfo = []
    }
    return tabInfo;
}

function displaTask() {
    let tabInfo = loadData()
    let html = `<ul>`;
    let index = 0;
    for (let tache of tabInfo) {
        html += `<li data-index ="${index}">${tache.nom}-${tache.accomplissement}</li>`
        index++
    };
    
    html+=`</ul>`
    document.querySelector("#todo").innerHTML = html
    let mesLi = document.querySelectorAll("#todo ul li")
    for (let li of mesLi) {
        li.addEventListener("click",clickLi)
    }
}

function clickLi() {
    let detailH3 = document.querySelector("#task-details h3")
    let detailP = document.querySelector("#task-details p")
    let detailA = document.querySelector("#task-details a")
    let tabInfo = loadData()
    document.querySelector("#task-details").classList.remove("hide")
    let numIndex = [this.dataset.index]
    detailH3.innerHTML = tabInfo[numIndex].nom
    detailP.innerHTML = tabInfo[numIndex].descripiton
    detailA.setAttribute("data-index", numIndex)  
}

function edit() {
    const formulaire = document.querySelector("#task-form")
    derouler()
    formulaire.dataset.mode = "edit"
    console.log(formulaire.dataset);
    
    let tabInfos = loadData()
    let detailA = document.querySelector("#task-details a")
    document.querySelector("#name").setAttribute("value", tabInfos[detailA.dataset.index].nom)
    document.querySelector("#description").value = tabInfos[detailA.dataset.index].descripiton
    
    
}

//CODE PRINCIPAL

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#add-task").addEventListener("click",derouler)
    let form = document.querySelector("form");
    form.addEventListener("submit", saveTask)
    displaTask()
    document.querySelector("#task-details a").addEventListener("click", edit)
    
})
