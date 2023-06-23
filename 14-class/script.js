"use strict";
//---------------------------- Les classes en POO-------------------------------------
import H from "./Human.js";
const humain = new H("maurice", "dupont", "78");
console.log(humain);
console.log(humain instanceof H);
// -------------- Static -------------------
/**
 * Une méthode static peut être appelé sans instancier la class.
 * Au contraire, elle ne peut pas être appelé sur une classe instancié.
 */
H.description();
console.log(H.categorie);
// humain.description();
console.log(Date.now());
const date = new Date();
// console.log(date.now());
// --------------- Private -----------------
/**
 * Impossible d'accèder aux propriétés et méthodes privées de notre classe.
 * Elles ne sont utilisable qu'à l'interieur de notre classe.
 * Il faut imaginer ça comme le fonctionnement interne de notre objet.
 * Prenons une radio, vous avez accès à ses boutons, 
 * mais pas à toute les fonctionnalités interne de l'appareil. 
 */
// console.log(humain.#name);
// Je peux accèder à fullname mais pas à #name
console.log(humain.fullname);
// Si on ne met pas une méthode ou une propriété en privée, elle est public et accessible partout.
console.log(humain.createdAt);
humain.salutation();
humain.anniversaire();
// ------------------------------- L'héritage ---------------------------------------
import D from "./Dev.js";
let dev = new D("bruno", "dubois", 19, "Javascript");
console.log(dev);
console.log(dev instanceof H, dev instanceof D);
dev.salutation();
dev.anniversaire();