"use strict";
// Erreur :
// let b: Fruit = {nom: "banane", color: "verte"};
let b = { nom: "banane", couleur: "verte" };
// Erreur :
// let p: Person = {nom: "Maurice", age: true}
let p = { nom: "Maurice", age: 54 };
// Erreur :
// let bs: ArrFruit = [b, {nom: "fraise"}];
let bs = [b, { nom: "fraise", couleur: "blanche" }];
// Erreur :
// let n: Name = 54;
let n = "Charle";
// Erreur :
// let f: Full = "Pierre";
let f = "age";
const objet = { a: true, b: "truc", c: 54 };
// --------------------Generics-------------------------
function useless(arg) {
    return arg;
}
// Ici machine prend le type any, car la fonction lui dit qu'elle retourne any
const machine = useless("Salut");
function useful(arg) {
    return arg;
}
const machine2 = useful("Bonjour");
/*
    maintenant ma machine2 est de type "Bonjour" car il comprend que il doit sauvegarder
    le type de son argument dans le generic "Type1" et c'est le même type qu'il va retourner.
    Mais plutôt qu'un type équivalent à la valeur, j'aimerais un type plus générique:
*/
const machine3 = useful("Au revoir");
// et là notre machine est bien de type string. ou autre si on donne un argument différent.
function lastof(arr) {
    return arr.at(-1);
}
/* Ici TS comprend que c'est un tableau de nombre et indique que last sera donc soit nombre
soit undefined */
const last = lastof([23, 54, 98]);
// TODO: Comprendre ça :
// type superFunc<TypeA> = (arg: TypeA)=> TypeA;
// let test: superFunc<number>=function(arg){ return arg}
/**
 * Si n'importe quel type peut être accepté mais que l'on veut une contrainte particulière
 * par exemple ici que notre objet ai une propriété .length.
 * on peut faire :
 */
function logSize(arg) {
    console.log(arg.length);
    return arg;
}
const size1 = logSize("Chaussette");
const size2 = logSize(["Chaussette"]);
