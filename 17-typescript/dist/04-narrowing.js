"use strict";
/*
    Le narrowing c'est le fait de supprimer des possibilités de type pour nos variables.
*/
function birthday(age) {
    console.log(age);
    // Ici une erreur car age peut être un string
    // age++;
    if (typeof age === "number") {
        // Ici il comprend que age est forcément un nombre
        age++;
    }
    else {
        // Ici forcément un string
        age = parseInt(age) + 1;
    }
    // erreur car age est un nombre
    // return age;
    return age + ' ans';
}
function chaussette(droite, gauche) {
    // Ici ils peuvent être du type indiqué plus haut.
    console.log(droite, gauche);
    if (droite === gauche) {
        console.log("Vous avec la paire !", droite, gauche);
        // le seul type en commun est string donc TS sait que droite et gauche sont des string
    }
}
function planning(date, days) {
    // date peut être un string, donc une erreur
    // console.log(date.getDate());
    if (date instanceof Date) {
        // Ici pas d'erreur
        console.log(date.getDate());
    }
    // erreur
    // console.log(days+1);
    if (!Array.isArray(days)) {
        // Ici tout va bien.
        console.log(days + 1);
    }
}
document.addEventListener("keypress", clavier);
function clavier(e) {
    if ("truc" in e) {
        /*
            Ici mon e est de type "never" c'est à dire qu'il est normalement
            impossibler d'arriver jusqu'ici.
        */
        console.log(e);
    }
}
// function isDate(a: any): boolean{
function isDate(a) {
    return a instanceof Date;
}
function check(a) {
    if (isDate(a)) {
        console.log(a.getDate());
        /*
            Si j'indique que mon retour est un boolean alors TS ne sera pas sûr que a
            est une date et provoquera une erreur.
            Alors que si je lui dit que mon retour est "a is Date"
            Alors TS comprendra que si c'est true, alors a est une date.
        */
    }
}
