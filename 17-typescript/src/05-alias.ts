"use strict";
/**
 * C'est bien connu, les devs n'aiment pas se répéter. TS l'a bien compris 
 * et permet de créer nos propres types ou collection de type.
 *  -------------------- ALIAS -------------------
 */
// Nom est de type string et couleur aussi
type Fruit = {nom: string, couleur: string};
// Age est de type string ou number
type Age = string | number;
// nom est de type string et age de type Age
type Person = {nom: string, age: Age};
// ArrFruit est un tableau de type Fruit
type ArrFruit = Fruit[];
// Name est du type de la propriété nom de Fruit.
type Name = Fruit["nom"];
// Ne peut accepter que les valeurs "nom" ou "age"
type Full = keyof Person;


// Erreur :
// let b: Fruit = {nom: "banane", color: "verte"};
let b: Fruit = {nom: "banane", couleur: "verte"};
// Erreur :
// let p: Person = {nom: "Maurice", age: true}
let p: Person = {nom: "Maurice", age: 54}
// Erreur :
// let bs: ArrFruit = [b, {nom: "fraise"}];
let bs: ArrFruit = [b, {nom: "fraise", couleur: "blanche"}];
// Erreur :
// let n: Name = 54;
let n: Name = "Charle";
// Erreur :
// let f: Full = "Pierre";
let f: Full = "age";

const objet = {a: true, b: "truc", c:54};
//typeof crée un type correspondant à notre variable.
type Item = typeof objet;
// --------------------Generics-------------------------

function useless(arg: any): any{
    return arg
}
// Ici machine prend le type any, car la fonction lui dit qu'elle retourne any
const machine = useless("Salut");
function useful<Type1>(arg: Type1): Type1{
    return arg
}
const machine2 = useful("Bonjour");
/* 
    maintenant ma machine2 est de type "Bonjour" car il comprend que il doit sauvegarder
    le type de son argument dans le generic "Type1" et c'est le même type qu'il va retourner.
    Mais plutôt qu'un type équivalent à la valeur, j'aimerais un type plus générique:
*/
const machine3 = useful<string>("Au revoir");
// et là notre machine est bien de type string. ou autre si on donne un argument différent.
function lastof<TypeArr>(arr: TypeArr[]): TypeArr|undefined{
    return arr.at(-1);
}
/* Ici TS comprend que c'est un tableau de nombre et indique que last sera donc soit nombre
soit undefined */
const last = lastof([23,54,98]);
// TODO: Comprendre ça :
// type superFunc<TypeA> = (arg: TypeA)=> TypeA;
// let test: superFunc<number>=function(arg){ return arg}
/**
 * Si n'importe quel type peut être accepté mais que l'on veut une contrainte particulière
 * par exemple ici que notre objet ai une propriété .length.
 * on peut faire :
 */
function logSize<Type3 extends {length: number}>(arg: Type3): Type3{
    console.log(arg.length);
    return arg
}
const size1 = logSize<string>("Chaussette");
const size2 = logSize<string[]>(["Chaussette"]);
// Erreur car number n'a pas de propriété length.
// const size3 = logSize<number>(7);
