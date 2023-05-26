// //! ---------------------- EXO 5.1 ---------------------
// /*
//  * écrire un algorithme qui demande à l'utilisateur un nombre compris entre 1 et 3
//  * jusqu'à ce que la réponse convienne.
//  */

// //je demande une 1ere fois a mon utilisateur
// let nombre = parseInt(prompt("Donne moi un chiffre compris entre 1 et 3"));

// //je teste mon nombre, tant qu'il remplie pas les criteres, la question sera posée en boucle
// while (nombre < 1 || nombre > 3) {
// 	nombre = parseInt(
// 		prompt("Erreur, merci de me donner un chiffre compris entre 1 et 3")
// 	);
// }

// alert("Merci de votre participation");

// //! ---------------------- EXO 5.2 ---------------------
// /*
//  * Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu'à ce que
//  * la réponse convienne, en cas de réponse superieur à 20, on ferra apparaître un message
//  * "Plus petit !" et inversement "plus grand !" si inférieur à 10.
//  */

// //je demande une 1ere fois a mon utilisateur
// nombre = parseInt(prompt("Donne moi un chiffre compris entre 10 et 20"));

// //je teste mon nombre, tant qu'il remplie pas les criteres, la question sera posée en boucle
// while (nombre < 10 || nombre > 20) {
// 	//si plus petit que 10
// 	if (nombre < 10) {
// 		nombre = parseInt(
// 			prompt(
// 				"Erreur, trop petit, merci de me donner un chiffre supérieur ou égale à 10"
// 			)
// 		);
// 	} else {
// 		//si plus grand que 20
// 		nombre = parseInt(
// 			prompt(
// 				"Erreur, trop grand, merci de me donner un chiffre inférieur ou égale à 20"
// 			)
// 		);
// 	}
// }

// // alert("Merci de votre participation");

// //! -------------------- EXO 5.3 ---------------------
// // * Demander un nombre à l'utilisateur, puis afficher les dix nombres suivants.
// nombre = parseInt(
// 	prompt("Donne un chiffre, et je te donnerai les 10 suivants")
// );
// for (let i = nombre + 1; i <= nombre + 10; i++) {
// 	console.log(i);
// }

// //! -------------------- EXO 5.4 ---------------------
// /*
//  *Ecrire un algorithme qui demande un nombre puis écrit la table de multiplication
//  * de ce nombre.
//  */
// nombre = parseInt(
// 	prompt("Donne un chiffre, et je te donnerai sa table de multiplication")
// );
// for (let i = 1; i <= 10; i++) {
// 	console.log(` ${nombre} * ${i} = ${nombre * i} `);
// }

// //! -------------------- EXO 5.5 ---------------------
// /**
//  * * Demander une valeur à l'utilisateur et faire de le cumul de 1 + 2 + 3 + ... + n
//  */

// const valeur = parseInt(prompt("Valeur d'arrivé?"));
// let cumul = 0;
// for (let i = 1; i <= valeur; i++) {
// 	cumul += i;
// }
// console.log(`total ${cumul}`);
// //! -------------------- EXO 5.6 ---------------------
// /*
//  * Ecire un algorithme qui demande un nombre puis calcul la factoriel de ce nombre
//  * (le 5.5 demande la même chose mais avec des additions plutôt que des multiplications)
//  * exemple factorielle de 5 = 5*4*3*2
//  */
// nombre = parseInt(
// 	prompt("Donne un chiffre, et je te donnerai sa factorielle de multiplication")
// );
// let factoriel = nombre;
// for (let i = nombre - 1; i >= 2; i--) {
// 	factoriel = factoriel * i;
// }
// console.log(`la factorielle de ${nombre} = ${factoriel}`);

// //! -------------------- EXO 5.7 ---------------------
// /*
//  * Ecrire un algorithme qui demande successivement 20(5 parceque la flemme) nombres
//  * et qui lui dise ensuite quel était le plus grand parmi ces nombres.
//  * Bonus : Indiquer la position à laquelle a été donné ce nombre
//  */

// let max = 0;
// let position = 0;

// for (let i = 1; i <= 5; i++) {
// 	//je demande un chiffre à mon utilisateur
// 	const nombre = parseInt(prompt("Sasie n °" + i + " ,Donne moi un chiffre"));
// 	//je compare ce chiffre a ma valeur max de référence
// 	if (nombre > max) {
// 		//la valeur max est dépassé, le met à jour
// 		max = nombre;
// 		//bonus, j'enregistre le n° de tour actuelle comme position de référence
// 		position = i;
// 	}
// }

// //Affichage du résultat
// console.log(
// 	"la valeur maximale saisie est " + max + ", position : " + position
// );

// //! -------------------- EXO 5.8 ---------------------
// /*
//  * même exercice que précédement mais on arrête de demander des nombres que si l'utilisateur
//  * entre un 0
//  */

// max = 0;
// position = 0;
// nombre = -1;
// let i = 1;

// while (nombre !== 0) {
// 	//je demande un chiffre à mon utilisateur
// 	nombre = parseInt(prompt("Sasie n °" + i + " ,Donne moi un chiffre"));
// 	//je compare ce chiffre a ma valeur max de référence
// 	if (nombre > max) {
// 		//la valeur max est dépassé, le met à jour
// 		max = nombre;
// 		//bonus, j'enregistre le n° de tour actuelle comme position de référence
// 		position = i;
// 	}
// 	i++; // prochaine saisie
// }

// //Affichage du résultat
// console.log(
// 	"la valeur maximale saisie est " + max + ", position : " + position
// );

// //! -------------------- EXO 5.9 ---------------------
// /*
//  * Lire la suite des prix (en euros entiers et terminée par zéro) des achats d’un client. Calculer la somme qu’il doit, lire la somme qu’il paye, et simuler la remise de la monnaie en affichant les textes "10 Euros", "5 Euros" et "1 Euro" autant de fois qu’il y a de coupures de chaque sorte à rendre.
//  */

// const total = parseInt(prompt("total en caisse"));
// const paiement = parseInt(prompt("paiement donné à la caisse"));

// let reste = paiement - total,
// 	nb10 = 0,
// 	nb5 = 0;

// while (reste >= 10) {
// 	nb10++;
// 	reste -= 10;
// }

// if (reste >= 5) {
// 	nb5 = 1;
// 	reste -= 5;
// }

// console.log(`
// Total du panier : ${total} \n
// Paiement du panier : ${paiement} \n
// Reste à payer : ${paiement - total} \n
// Billet de 10 : ${nb10} \n
// Billet de 5 : ${nb5} \n
// Pièce de 1 : ${reste} \n
// `);

// if (confirm("Voulez-vous faire une autre simulation")) {
// 	location.reload();
// }


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

const N = parseInt(prompt("Nombre de chevaux partants ?"));
const P = parseInt(prompt("Nombre de chevaux joués ?"));

let factN = 1;
for (let i = 2; i <= N; i++) {
	factN *= i;
}

let factP = 1;
for (let i = 2; i <= P; i++) {
	factP *= i;
}

let factNmP = 1;
for (let i = 2; i <= N - P; i++) {
	factNmP *= i;
}

console.log(`
Dans l'ordre : 1 chance sur ${factN / factNmP} \n
Dans le désordre : 1 chance sur ${factN / (factP * factNmP)} 
`);
