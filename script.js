console.log("ok");

// les variables : le concept
let a = 15; // je demande à js de me créer en mémoire un emplacement nommé "a" contenant la valeur numérique 15
console.log(a);

a = 42; //je demande a js de changer la valeur de "a" pour 42
console.log(a);

let nom = "toto"; // une variable peut contenir différent type de valeur (chaine ici)
let isOk = false; // ou une valeur booléene

// la différence entre let, var et const

var d = 78;
//var a une portée globale

//alors que let a une portée bloc
let toto = "zkgnzrpkg";

if (d === 78) {
	var valeur = "oui";
	let valeur2 = "oui 2";
}

console.log("valeur : " + valeur);
// console.log('valeur2 : ' + valeur2);
console.log("toto : " + toto);

//la const elle permet de ne stocker qu'une seule valeur, peu importe son type
const valeur3 = "oui 3";
console.log(valeur3);

const valeur4 = 123;
console.log(valeur4);

const valeur5 = true;
console.log(valeur5);

// on ne peut pas changé la valeur d'une const en cours de route
// valeur3 = 45
console.log(valeur3);

// l'interet de la constante est garantir que la valeur ne change pas en cours de route
// si on est sur que la valeur ne doit pas changé en cours de route, on utilise un const
// aussi le temps d'affichage est plus rapide avec une const qu'avec un let ou un var
