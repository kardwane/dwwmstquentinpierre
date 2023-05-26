//! ---------------- exo 1 -----------------
//* remplir un tableau de 7 cases avec la valeur 0

// console.log("====================EXO1====================");

// v1
let tableau = [0, 0, 0, 0, 0, 0, 0];

// console.log(tableau);
// console.log("==========================");

// // v2
// for (let i = 0; i < 7; i++) {
// 	tableau[i] = 0; // assigne 0 à la case n°i
// 	// tableau.push(0) // ajjoute un case contenant 0 en fin de tableau
// }

// console.log(tableau);
// console.log("==========================");

// //v3
// tableau[0] = 0;
// tableau[1] = 0;
// tableau[2] = 0;
// tableau[3] = 0;
// tableau[4] = 0;
// tableau[5] = 0;
// tableau[6] = 0;

// console.log(tableau);
// console.log("==========================");

//! ---------------- exo 2 -----------------
//* remplir un tableau avec les voyelles connus

// console.log("====================EXO2====================");

// tableau = []; //vide mon tableau
// // v1
// tableau = ["a", "e", "i", "o", "u", "y"];
// console.log(tableau);
// console.log("==========================");

// // v2
// tableau[0] = "a";
// tableau[1] = "e";
// tableau[2] = "i";
// tableau[3] = "o";
// tableau[4] = "u";
// tableau[5] = "y";

// console.log(tableau);
// console.log("==========================");

//! ---------------- exo 3 -----------------
//* remplir un tableau avec 9 notes saisie par l'utilisateur

// console.log("====================EXO3====================");
// tableau = [];

// for (let i = 0; i < 9; i++) {
// 	//maniere séparé
// 	const note = parseInt(prompt("Donnez la note n°" + i));
// 	tableau[i] = note;
// 	// tableau.push(note);

// 	// ou plus cour: maniere 'directe'
// 	// tableau[i] = parseInt(prompt("Donnez la note n°" + i));
// 	// tableau.push(parseInt(prompt("Donnez la note n°" + i)));
// }

// console.log(tableau);
// console.log("==========================");

//! ---------------- exo 4 -----------------
//* peut-on simplifier l'algo 1

// console.log("====================EXO4====================");
// tableau = [];

// for (let i = 0; i < 6; i++) {
// 	tableau.push(i * i);
// 	// tableau[i] = i * i; // version alternative au .push()
// 	console.log(tableau[i]);
// }
// console.log(tableau);
// console.log("==========================");

//! ---------------- exo 5 -----------------
//* peut-on simplifier l'algo 2

// console.log("====================EXO5====================");
// tableau = [];

// tableau[0] = 1;
// console.log(tableau[0]);

// for (let i = 1; i <= 6; i++) {
// 	tableau[i] = tableau[i - 1] + 2;
// 	console.log(tableau[i]);
// }

// // alernative
// for (let i = 0; i <= 6; i++) {
//     //si 1er tour de boucle
// 	if (i === 0) {
//         //je met 1 dans la 1ere case
// 		tableau[i] = 1;
// 	} else {
//         //sinon je met case[i] = case précedente + 2
// 		tableau[i] = tableau[i - 1] + 2;
// 	}
//     //affichage
// 	console.log(tableau[i]);
// }

//! ---------------- exo 6 -----------------
//* peut-on simplifier l'algo 3

// console.log("====================EXO6====================");
// tableau = [];

// for (let i = 0; i <= 6; i++) {
//     //si 1er ou 2eme tour de boucle
// 	if (i < 2) {
//         //je met 1 dans la case
// 		tableau[i] = 1;
// 	} else {
//         //sinon je met case[i] = case précedente (-1) + case précedente (-2)
// 		tableau[i] = tableau[i - 1] + tableau[i - 2];
// 	}
//     //affichage
// 	console.log(tableau[i]);
// }

// // version while
// let i = 0;

// while (i < 7) {
// 	//si 1er ou 2eme tour de boucle
// 	if (i < 2) {
// 		//je met 1 dans la case
// 		tableau[i] = 1;
// 	} else {
// 		//sinon je met case[i] = case précedente (-1) + case précedente (-2)
// 		tableau[i] = tableau[i - 1] + tableau[i - 2];
// 	}
// 	//affichage
// 	console.log(tableau[i]);
// 	i++; // je passe au tour suivant
// }

//! ---------------- exo 6 -----------------
//* reprendre l'exo 3 et faire un calcul de la moyenne des notes

console.log("====================EXO6====================");
tableau = [];
let cumul = 0;

for (let i = 0; i < 9; i++) {
	//je recupere mes notes
	tableau[i] = parseInt(prompt("Donnez la note n°" + i));
	//je fais un cumul des notes
	cumul += tableau[i];
}

console.log(tableau);
console.log(cumul);
console.log("==========================");
//je calcul la moyenne des notes
const moyenne = cumul / tableau.length;

//affichage
console.log(`Moyenne des notes : ${moyenne.toFixed(2)}`);
