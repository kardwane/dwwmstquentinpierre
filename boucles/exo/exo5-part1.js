//! ---------------------- EXO 5.1 ---------------------
/*
 * écrire un algorithme qui demande à l'utilisateur un nombre compris entre 1 et 3
 * jusqu'à ce que la réponse convienne.
 */

// // je demande une premiere a l'utilisateur
// let nombre = parseInt(prompt("Donnez moi une valeur compris entre 1 et 3"));

// // tant que cette valeur n'est pas compris entre 1 et 3, je re demande en boucle la saisie a mon utilisateur
// while (nombre < 1 || nombre > 3) {
// 	nombre = parseInt(
// 		prompt("Donnez moi une valeur compris entre 1 et 3, faite un effort svp")
// 	);
// }

// // message finale
// console.log(`Vous avez saisie la valeur ${nombre}`);

//! ---------------------- EXO 5.2 ---------------------
/*
 * Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu'à ce que
 * la réponse convienne, en cas de réponse superieur à 20, on ferra apparaître un message
 * "Plus petit !" et inversement "plus grand !" si inférieur à 10.
 */

// // je demande une premiere a l'utilisateur
// let nombre = 0; // j'initialise ma variable avec une valeur fausse pour rentré au moins fois dans la boucle

// // tant que cette valeur n'est pas compris entre 10 et 20, je re demande en boucle la saisie a mon utilisateur
// while (nombre < 10 || nombre > 20) {
// 	nombre = parseInt(
// 		prompt("Donnez moi une valeur compris entre 10 et 20")
// 	);
// 	//je test si ma valeur est trop grande ou trop petite
// 	if (nombre < 10) {
// 		// console.log("plus grand!");
// 		alert("plus grand!");
// 	}
// 	if (nombre > 20) {
// 		alert("plus petit!");
// 		// console.log("plus petit!");
// 	}
// }

// // message finale
// // console.log(`Vous avez saisie la valeur ${nombre}`);
// alert(`Vous avez saisie la valeur ${nombre}`);

// //! -------------------- EXO 5.3 ---------------------
// // * Demander un nombre à l'utilisateur, puis afficher les dix nombres suivants.

// let nombre = parseInt(prompt("Donnez moi un nombre"));

// //je part de 1, je termine à 10 et j'augmente de 1 a chaque tour de boucle
// for (let i = 1; i <= 10; i++) {
// 	console.log(`${nombre + i}`);
// 	// console.log(`${nombre} + ${i} = ${nombre + i}`);
// }

//! -------------------- EXO 5.4 ---------------------
/*
 * Ecrire un algorithme qui demande un nombre puis écrit la table de multiplication
 * de ce nombre.
 */

// let nombre = parseInt(
// 	prompt("Donnez moi un nombre, je vous donnerai sa table de multiplication")
// );

// //je part de 1, je termine à 10 et j'augmente de 1 a chaque tour de boucle
// for (let i = 1; i <= 10; i++) {
// 	console.log(`${nombre} * ${i} = ${nombre * i}`);
// }

//! -------------------- EXO 5.5 ---------------------
//* Demander une valeur à l'utilisateur et faire de le cumul de 1 + 2 + 3 + ... + n

// let nombre = parseInt(
// 	prompt(
// 		"Donnez moi un nombre, je vous donnerai le cumul de 1 + 2 + 3 + ... + nombre"
// 	)
// );
// let cumul = 0; //je créer ma variable pour faire mon cumul et je l'initialise à 0

// for (let i = 1; i <= nombre; i++) {
// 	// cumul = cumul + i
// 	cumul += i; // similaire a ligne au dessus
// }

// console.log("Résultat : " + cumul);

//! -------------------- EXO 5.6 ---------------------
/*
 * Ecire un algorithme qui demande un nombre puis calcul la factoriel de ce nombre
 * (le 5.5 demande la même chose mais avec des additions plutôt que des multiplications)
 * exemple factorielle de 5 = 5*4*3*2 => 120
 */

// let nombre = parseInt(
// 	prompt("Donnez moi un nombre, je vous donnerai sa factorielle")
// );
// let factorielle = 1; //je créer ma variable pour faire mon calcul et je l'initialise à 1

// for (let i = 2; i <= nombre; i++) {
// 	// *2*3*4*5*....*nombre
// 	// factorielle = factorielle * i
// 	factorielle *= i; // similaire a ligne au dessus
// }

// console.log("la factorielle de : " + nombre + " est " + factorielle);
// // console.log(`la factorielle de : ${nombre} est ${factorielle}`);

//! -------------------- EXO 5.7 ---------------------
/*
 * Ecrire un algorithme qui demande successivement 20(5 parceque la flemme) nombres
 * et qui lui dise ensuite quel était le plus grand parmi ces nombres.
 * Bonus : Indiquer la position à laquelle a était donné ce nombre
 */

// //je décalare les variables de position et de valeur
// let valeurMax = 0,
// 	position;

// //je fais ma boucle
// for (let i = 1; i <= 5; i++) {
// 	const nombre = parseInt(prompt("Donnez moi un nombre"));

// 	//je compare ma saisie a mon maximum de reference
// 	if (nombre > valeurMax) {
// 		//je dois mettre à jour ma valeur de reference et j'en profite pour stocker sa position
// 		valeurMax = nombre;
// 		position = i;
// 	}
// }

// //affichage du resultat
// alert(`le nombre maximum est ${valeurMax}, à la position ${position}`);

//! -------------------- EXO 5.8 ---------------------
/*
 * même exercice que précédement mais on arrête de demander des nombres que si l'utilisateur entre un 0
 */

// //je décalare les variables de position et de valeur
// let valeurMax = 0,
// 	position,
// 	nombre = 1, // 1 ou n'importe quel valeur différent de 0, ou au pire on n'assigne pas de valeur tout de suite
// 	i = 1;

// //je fais ma boucle
// while (nombre !== 0) {
// 	nombre = parseInt(prompt("Donnez moi un nombre"));

// 	//je compare ma saisie a mon maximum de reference
// 	if (nombre > valeurMax) {
// 		//je dois mettre à jour ma valeur de reference et j'en profite pour stocker sa position
// 		valeurMax = nombre;
// 		position = i;
// 	}
// 	i++;
// }

// //affichage du resultat
// alert(`le nombre maximum est ${valeurMax}, à la position ${position}`);

//! -------------------- EXO 5.9 ---------------------
/*
 * Lire la suite des prix (en euros entiers et terminée par zéro) des achats d’un client. Calculer la somme qu’il doit, lire la somme qu’il paye, et simuler la remise de la monnaie en affichant les textes "10 Euros", "5 Euros" et "1 Euro" autant de fois qu’il y a de coupures de chaque sorte à rendre.
 */

// je demande les info de reglement
// const montantPanier = parseInt(prompt("Montant du panier"));
// const paiementClient = parseInt(prompt("Montant donné par le client"));
// let montantARendre = paiementClient - montantPanier,
// 	nbBillet10 = 0,
// 	nbBillet5 = 0;

// //je commence par determiné le nombre de billet de 10€
// while (montantARendre >= 10) {
// 	nbBillet10++; // j'ajoute un billet de 10€ a rendre
// 	montantARendre -= 10; // je retire 10€ du reste a rendre
// }
// //en sortie de boucle, le reste est forcement inférieur à 10€

// if (montantARendre >= 5) {
// 	nbBillet5 = 1; // j'ajoute un billet de 5€ a rendre
// 	montantARendre -= 5; // je retire 10€ du reste a rendre
// }
// // apres le if, je sais qu'il moins de 5€ a rendre, donc ma variable montantARendre correspond au nombre de pièce de 1€ a rendre

// //affichage du rendu de monnaie
// alert(`
// reste a rendre : ${paiementClient - montantPanier}, découpé en : \n
// Nb billet de 10€ : ${nbBillet10}\n 
// Nb billet de 5€ : ${nbBillet5}\n 
// Nb pièce de 1€ : ${montantARendre}
// `);

//! -------------------- EXO 5.10 ---------------------
/*
 * Écrire un algorithme qui permette de connaître ses chances de gagner au tiercé, quarté, quinté et autres impôts volontaires.
 * On demande à l’utilisateur le nombre de chevaux partants, et le nombre de chevaux joués. Les deux messages affichés devront être :
 * Dans l’ordre : une chance sur X de gagner
 * Dans le désordre : une chance sur Y de gagner
 * X et Y nous sont donnés par la formule suivante, si n est le nombre de chevaux partants et p le nombre de chevaux joués (on rappelle que le signe ! signifie "factorielle", comme dans l'exercice 5.7 ci-dessus) :
 * X = n ! / (n - p) !
 * Y = n ! / (p ! * (n – p) !)
 * NB : cet algorithme peut être écrit d’une manière simple, mais relativement peu performante. Ses performances peuvent être singulièrement augmentées par une petite astuce. Vous commencerez par écrire la manière la plus simple, puis vous identifierez le problème, et écrirez une deuxième version permettant de le résoudre.
 */

const n = parseInt(prompt("nombre de chevaux partants"));
const p = parseInt(prompt("nombre de chevaux joués"));

let factN = 1,
	factP = 1,
	factNmP = 1;

for (let i = 2; i <= n; i++) {
	factN *= i;
}

for (let i = 2; i <= p; i++) {
	factP *= i;
}

for (let i = 2; i <= n - p; i++) {
	factNmP *= i;
}

const X = factN / factNmP
const Y = factN / (factP * factNmP)

//resultat
alert(`Chance dans l'ordre : 1 sur ${X}\n
Chance dans le désordre : 1 sur ${Y}`)