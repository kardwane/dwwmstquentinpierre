"use strict";
/**
 * Le plus gros apport de typescript est dans son nom, c'est le typage. C'est à dire que comme dans de nombreux langages comme Java par exemple.
 * Il va nous falloir indiquer de quel type sont nos variables, nos arguments, ce que retourne nos fonctions...
 */
const mot = "Bonjour";
const chiffre = 45;
const bool = true;
const nu = null;
/**
 * On peut aussi indiquer ce que doivent contenir nos tableaux :
 */
const arr1 = ["truc", "bidule"];
/**
 * Si une variable ou un tableau doit contenir plusieurs types, alors on a le mot clef "any"
 * Mais on évitera au maximum de l'utiliser, typescript perd de son intérêt si on peut utiliser n'importe
 * quel type.
 */
let truc = 5;
truc = "bidule";
const arr2 = ["machin", true, 5];
/**
 * Les objets sont un peu plus imposant à définir de cette façon :
 * J'aurais une erreur si je ne met pas exactement toute les propriétés demandé.
 * Mais je peux rendre une propriété optionnelle avec "?"
 */
const person = { prenom: "Maurice" };
// Si votre objet peut contenir énormément de propriété différentes, vous pouvez faire cela :
const person2 = { prenom: "Bruno", nom: "Aznavour" };
/**
 * Ici j'ai indiqué que mon objet contient des propriétés dont les clefs sont des string
 * et les valeurs sont aussi des string.
 *
 * Pour les objets venant de classe prédéfini (ayant un nom), on peut tout simplement utiliser le nom
 * de la classe :
 */
const today = new Date();
// Si une variable contient une fonction, il faudra aussi l'indiquer :
const salut = function () { };
/**
 * En parlant des fonctions, il nous faudra aussi typer les paramètres et les retours.
 * le mot clef void indique que la fonction ne retourne rien.
 */
function clickMoi(e) {
    console.log("Merci de cliquer sur ", e.target);
}
// Ceci retourne une erreur car l'argument ne correspond pas
// document.addEventListener("click", clickMoi)
document.addEventListener("pointerdown", clickMoi);
// lorsque l'on déclare une fonction dans une variable on peut aussi indiquer le typage de la façon suivante:
const compte = (nom) => { return nom.length; };
compte("test");
function tri(arg) {
    // arg étant en lecture seul, impossible de le modifier.
    // return arg.sort();
    // par contre je peux modifier sa copie.
    return [...arg].sort();
}
/**
 * La plupart du temps, indiquer le type n'est pas obligatoire, typescript le devinera par lui même:
 * Ici il comprend bien que x est un nombre et me provoque une erreur si je tente de lui assigner un string.
 */
let x = 5;
// x= "truc";
/**
 * Mais parfois il est important de préciser le type car typescript peut se tromper :
 * const btn = document.querySelector("#compte")
 * btn.style.color = "red";
 * ici il nous indiquera que btn est un Element or si on veut lui mettre un style, il retournera une erreur.
 * en indiquant avec me mot clef "as" qu'est ce que retourne la fonction, plus d'erreur.
 */
const btn = document.querySelector("#compte");
/**
 * Cette première façon de faire dira à TS que notre btn est forcément un HTMLButtonElement,
 * Attention cette façon de faire lui fera oublié la possibilité que l'élément soit null.
 *  On peut aussi écrire cela :
 * const btn = <HTMLButtonElement> document.querySelector("#compte")
 * Cette façon lui fera juste oublié le type null, mais notre variable ne sera qu'un ELEMENT.
 * const btn = document.querySelector("#compte")!;
 * Cette dernière version indiquera bien que notre élément est soit HTMLButtonElement, soit null
 * const btn =  document.querySelector<HTMLButtonElement>("#compte")
 */
btn.style.color = "red";
/**
 * Parfois une variable ou autre peut avoir plusieurs types différents, dans ce cas
 * on peut utiliser l'union type.
 */
let y = 5;
y = "10";
y = true;
