
// This gives the ability to users to enter there won groupe

const element = document.getElementById("myH1");

element.textContent = window.prompt("PLEASE GIVE A TITLE TO WHAT YOU ARE COUNTING ! like (PEOPLE)");
document.body.append(element);


// Creating the wallent
let myTotal = document.getElementById("myTotal");
let meDepot = document.getElementById("myH2");
let newCount = [];

let count = 0;

function ajout(){
    count = count + 1;
    meDepot.innerText = count;
}

function enregistrer(){
    newCount.push(count);

    // Verifier si le dernier element ajouter n'est pas egal a celui qui lui precede, si oui on supprime le dernier
    if(newCount[newCount.length - 1] == newCount[newCount.length - 2]){
        newCount.pop([newCount.length - 1]);
    }
    myTotal.innerText = newCount.join('-');
}