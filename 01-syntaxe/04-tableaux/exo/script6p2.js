//! ---------------- exo 6.8 -----------------
// * saisir une nombre de valeur défini par l'utilisateur, ces valeurs sont stockés dans un tableau et on determine le nombre de valeur positives et negatives

// let i = 1,
// 	valeur,
// 	nbPos = 0,
// 	nbNeg = 0,
// 	tableau = [];

// const nbSaisies = parseInt(prompt("Combien de valeur voulez-vous entrer?"));

// //version tant que
// // while (i <= nbSaisies) {
// // 	//version tableau[i]
// // 	tableau[i] = parseInt(prompt(`valeur n°${i}`));

// // 	//version push
// // 	// tableau.push(parseInt(
// // 	//     prompt(`valeur n°${i}`)
// // 	// ))

// // 	if (tableau[i] >= 0) {
// // 		// on ajoute + 1 au nombre de valeur positive
// // 		// nbPos = nbPos+1
// // 		// nbPos+=1
// // 		nbPos++;
// // 	} else {
// // 		// nbNeg = nbNeg+1
// // 		// nbNeg+=1
// // 		nbNeg++;
// // 	}
// //     i++
// // }

// //version for
// for (i = 0; i < nbSaisies; i++) {
// 	tableau[i] = parseInt(prompt(`valeur n°${i}`));

// 	if (tableau[i] >= 0) {
// 		nbPos++;
// 	} else {
// 		nbNeg++;
// 	}
// }

// //affichage du résultat
// console.log(
// 	`il y a ${nbPos} valeur(s) positive(s), et ${nbNeg} valeur(s) negative(s)`
// );
// // console.log("il y a "+nbPos+" valeur(s) positive(s), et "+nbNeg+" valeur(s) negative(s)");

//! ---------------- exo 6.9 -----------------
// * calculer la somme des valeurs d'un tableau péalablement saisie

// const tableau = [12, 45, 78, 56, 89, 23]; // 303 prevu

// let total = 0;

// // je parcours mon tableau pour faire la somme de toutes mes valeurs

// //version forEach
// // tableau.forEach(function (valeur) {
// // 	// total = total + valeur
// // 	total += valeur; //raccourci
// // });

// // version map : normalement on utilise map quand on doit un nouveau tableau basé sur un tableau existant en y apportant des modifications
// // tableau.map(function (valeur) {
// // 	total += valeur;
// // });

// // version for..of
// for (valeur of tableau){
// 	total += valeur;
// }

// console.log(`total du tableau : ${total}`);

//! ---------------- exo 6.10 -----------------
// * additioné les valeurs de tableau et rangé le resultat dans un nouveau tableau

//je créer mes tableaux
// const tableau = [4, 8, 7, 9, 1, 5, 4, 6];
// const tableau2 = [7, 6, 5, 2, 1, 3, 7, 4];
// let tableau3 = [];

// //je fais une boucle for pour additon chaque case n°i du tableau1 et du tableau2 entre elles
// for (let i = 0; i < tableau.length; i++) {
// 	//je fais un cumul des notes
// 	tableau3[i] = tableau[i] + tableau2[i];
// }

//version map
// tableau.map(function (valeur, index) {
// 	tableau3.push(valeur + tableau2[index]);
// });

// //version forEach
// tableau.forEach(function (valeur, index) {
// 	tableau3.push(valeur + tableau2[index]);
// 	// tableau3[index] = tableau[index] + tableau2[index];
// });

// // tableau3[0] = tableau[0] + tableau2[0];
// // tableau3[1] = tableau[1] + tableau2[1];
// // tableau3[2] = tableau[2] + tableau2[2];

// // version for...in
// //for..in parcours les index de cases de notre tableau, la ou for..of parcours les valeurs de cases
// for (indice in tableau) {
// 	tableau3[indice] = tableau[indice] + tableau2[indice];
// }

// //affichage
// console.log(`Nouveau tableau: ${tableau3}`);

//! ---------------- exo 6.11 -----------------
// * calculer le schtroumpf

// const tab = [4, 8, 7, 12];
// const tab2 = [3, 6];
// let schtroumpf = 0;

//je vais parcourir les tableaux de maniere a multiplier chaque case entre elles
// for (let i = 0; i < tab.length; i++) {
// 	for (let j = 0; j < tab2.length; j++) {
// 		schtroumpf += tab[i] * tab2[j];
// 	}
// }

// for (let i = 0; i < tab.length; i++) {
// 	schtroumpf += tab[i] * tab2[0] // * 3
// 	schtroumpf += tab[i] * tab2[1]  // * 6
// }

// tab.forEach(valeur => {
// 	schtroumpf += valeur * tab2[0] // * 3
// 	schtroumpf += valeur * tab2[1]  // * 6
// })

//resultat
// console.log(schtroumpf);

//! ---------------- exo 6.12 -----------------
// * sur le principe du 6.8 créer un nouveau tableau en augmentant toutes les valeurs de 1

// let i = 0,
// 	valeur,
// 	tableau = [];

// const nbSaisies = parseInt(prompt("Combien de valeur voulez-vous entrer?"));

// //on rempli notre tableau
// for (let i = 0; i < nbSaisies; i++) {
// 	// tableau[i] = parseInt(prompt(`valeur n°${i}`));
// 	tableau.push(parseInt(prompt(`valeur n°${i}`)));
// }

// console.log(tableau);

// //on augmente toutes les valeurs de 1 avec la méthode map()
// // const tableau2 = tableau.map((valeur) => {
// // 	return valeur+1;
// // });

// let tableau2 = [];

// // while (i < tableau.length) {
// // 	tableau2.push(tableau[i] + 1);
// // 	i++;
// // }

// for (let i = 0; i < tableau.length; i++) {
// 	// tableau2.push(tableau[i] + 1);
// 	tableau2[i] = tableau[i] + 1;
// }

// //affichage du résultat
// console.log(tableau2);

//! ---------------- exo 6.13  -----------------
// * faire remplir un tableau par l'utilisateur, on determinera ensuite la plus grande valeur saisie ainsi que sa position dans le tableau

// //je déclare mes variables
// let tableau = [],
// 	valMax = 0,
// 	posMax = 0;

// //je determine le nombre de saisie
// const nbSaisies = parseInt(prompt("Combien de valeur voulez-vous entrer?"));

// //1er temps je rempli mon tableau
// for (let i = 0; i < nbSaisies; i++) {
// 	tableau[i] = parseInt(prompt("Donnez une valeur (n°" + i + ")"));
// 	// version 1 boucle: si la valeur en cours est supérieur a la valeur max de reference alors je mets à jour la vmax et sa position
// 	if (tableau[i] > valMax) {
// 		valMax = tableau[i]; // maj max de reference
// 		posMax = i; // maj pos max de reference
// 	}
// }

// console.log(tableau);

// //2nd temps je determine la valeur max et sa position
// // tableau.forEach((value, index) => {
// // 	//si la valeur en cours est supérieur a la valeur max de reference alors je met a jour la vmax et sa position
// // 	if (value > valMax) {
// // 		valMax = value; // maj max de reference
// // 		posMax = index; // maj pos max de reference
// // 	}
// // });

// //Affichage du resultat
// console.log(`la valeur max saisie est ${valMax}, à la position ${posMax}`);

//! ---------------- exo 6.14  -----------------
// * saisir des notes dans un tableau puis calculer la moyenne des notes

//je déclare mes variables
let tableauNotes = [],
	totalNotes = 0;

//je determine le nombre de saisie
const nbSaisies = parseInt(prompt("Combien de valeur voulez-vous entrer?"));

// je rempli mon tableau
for (let i = 0; i < nbSaisies; i++) {
	tableauNotes.push(parseInt(prompt(`Donnez la note (n°${i})`)));
	totalNotes += tableauNotes[i]; // je cumul toutes les notes saisies
}

const moyenne = totalNotes / tableauNotes.length;

console.log("tableau des notes ", tableauNotes);
console.log("total des notes ", totalNotes);
console.log("moyenne des notes ", moyenne);
