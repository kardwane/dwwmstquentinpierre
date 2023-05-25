// // un tableau est une variable particuliere, dans le sens ou elle peut contenir plusieurs valeurs
const tableauEntierSimple = [45, 89, 23, 98, 56, 13, 45, 63];

// // on est pas limité en nombre de valeur
// // on est pas limité en type de valeur
// const tableauTypeMixte = ["texte", true, 123]

// //si on veut accèder a un élement de notre tableau, il faut connaitre son numéro de casem 
// //exemple pour accèder à la 3eme cellule du tableau, il faut indiquer l'index n° 2
// console.log(tableauEntierSimple[2]);


// console.log("=====avant=========");
// console.log(tableauEntierSimple);

// //si je veux modifier la 4 eme cellule de mon tableau, je passe la aussi par son numéro d'index
// tableauEntierSimple[3] ="du texte"

// console.log("=====après=========");
// console.log(tableauEntierSimple);

// // parcours de tableau
// tableauEntierSimple.forEach((valeur, indice)=>{
//     console.log(`cellule n° ${indice} : ${valeur}`);
// })

// console.log("================================================================");

// //.length permet de compter le combre de case dans un tableau
// for(let i=0; i< tableauEntierSimple.length; i++) {
//     console.log(`cellule n° ${i} : ${tableauEntierSimple[i]}`);
// }


console.log("================================================================");
//parcours for ... in : permet de parcourir un tableau en recuperant chanque numéro de case

for(indice in tableauEntierSimple){
    console.log(indice);
}

// parcours for ... of permet de parcourir un tableau en recuperant chaque valeur de case
for(valeur of tableauEntierSimple){
    console.log(valeur);
}

//dernier parcour map
tableauEntierSimple.map((value,indice)=>{
    console.log(`cellule n° ${indice} : ${value}`);
});