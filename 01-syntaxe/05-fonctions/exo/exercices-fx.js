//! ======================= EXO 1 =======================
/*
 * Ecrivez une fonction qui calcule la somme de 5 nombres fournis en argument
 */

// function addition(a,b,c,d,e){
//     const somme = a+b+c+d+e;
//     // console.log("somme = "+somme)
//      //je renvoi au reste du code le résultat de l'addition de x + y
//     return somme;
// }

// function addition() {
// 	let somme = 0;
// 	for (let i = 0; i < 5; i++) {
// 		const nombre = parseInt(prompt("donne moi un nombre"));
// 		somme += nombre; // somme = somme + nombre
// 	}
// 	return somme;
// }

// const addition = (a, b, c, d, e) => {
// 	//je renvoi au reste du code le résultat de l'addition de x + y
// 	return a + b + c + d + e;
// };

// let a = parseInt(prompt("nombre 1"));
// let b = parseInt(prompt("nombre 2"));
// let c = parseInt(prompt("nombre 3"));
// let d = parseInt(prompt("nombre 4"));
// let e = parseInt(prompt("nombre 5"));

// const somme1 = addition(a, b, c, d, e);
// alert(somme1);

// const somme2 = addition(2, 3, 4, 5, 6);
// console.log(somme2);

// resultat.textContent =
// 	"10 + 20 + 30 + 40 + 50 = " + addition(10, 20, 30, 40, 50);

//! ======================= EXO 2 =======================
/*
 * Ecrivez une fonction qui calcule le nombre de voyelle contenue dans une chaine de
 * caractères l'utilisation de la fonction charAt() ou indexOf() et du mot clé return est conseillé
 */

// function calculVoyelle(phrase) {
// 	//je parcours toute ma phrase, caractère par caractère
// 	let totalVoyelle = 0;
// 	for (let i = 0; i < phrase.length; i++) {
// 		if (
// 			phrase.charAt(i) === "a" ||
// 			phrase[i] === "e" ||
// 			phrase[i] === "i" ||
// 			phrase[i] === "o" ||
// 			phrase[i] === "u" ||
// 			phrase[i] === "y"
// 		) {
// 			totalVoyelle++;
// 		}
// 	}
//     //j'ai terminé de parcourir la phrase, je peux renvoyer le résultat
//     return totalVoyelle;
// }

// // resultat.textContent = voyelleCalculator("une belle course de tracteurs");
// resultat.textContent = calculVoyelle("une belle course de tracteurs");

//! ======================= EXO 3 =======================
// * réecrire la fonction indexOf()

// const indexOfManual = (letter, text) => {
// 	for (let i = 0; i < text.length; i++) {
// 		if (text[i] === letter) return i;
// 	}
// 	return false;
// };

// const txt =
// 	"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis molestias labore repudiandae cupiditate molestiae, quia, nemo accusamus eveniet nobis nesciunt inventore earum laboriosam animi, odio alias deleniti voluptates reprehenderit! A!";

// console.log(`La lettre o se trouve à la position ${indexOfManual("o", txt)}`);

//! ======================= EXO 4 =======================
/*
 * Ecrivez une fonction qui calcule la somme de X nombres fournis en argument
 */

// const addition2 = (...nombres) => {
// 	let somme = 0;
// 	//on parcours le tableau des valeurs, pour faire le cumul
// 	// nombres.forEach((nombre) => (somme += nombre));
// 	nombres.forEach(function (nombre) {
// 		somme = somme + nombre;
// 	});
// 	//je renvoi au reste du code le résultat de l'addition
// 	return somme;
// };

// console.log(
// 	"10 + 20 + 30 + 40 + 50 + 60 = " + addition2(10, 20, 30, 40, 50, 60)
// );

//! ======================= EXO 5 =======================
// * Réecrire l'exerice 5.10 avec une fonction pour calculer la factoriel

// const factoriel = (value) => {
// 	let result = 1;
// 	for (let i = 2; i <= value; i++) {
// 		result *= i;
// 	}
// 	return result;
// };

// const n = parseInt(prompt("nombre de chevaux partants"));
// const p = parseInt(prompt("nombre de chevaux joués"));
// const nmp = n - p;

// console.log(typeof(n));
// console.log(typeof(p));
// console.log(typeof(nmp));

// const X = factoriel(n) / factoriel(nmp);
// const Y = factoriel(n) / (factoriel(p) * factoriel(nmp));

// //resultat
// alert(`Chance dans l'ordre : 1 sur ${X}\n
// Chance dans le désordre : 1 sur ${Y}`);

//! ======================= EXO 6 =======================
/*
 * Ecrivez la fonction factorielle de maniere recursive
 * (fonction qui s'appelle elle même)
 * FACULTATIF
 * rappel factorielle de 5 = 5*4*3*2*1 (=120)
 */

const facto = (nombre) => {
	if (nombre === 0) {
		return 1;
	}
	//  else {
	//     return nombre * facto(nombre - 1);
	// }

	return nombre * facto(nombre - 1);

	// return 5 * facto(4); // 24 * 5 = 120
	//      return 4 * facto(3); // 6 * 4 => 24
	//          return 3 * facto(2); // 2 * 3 => 6
	//              return 2 * facto(1); // 2
};

console.log(`factorielle de 5 = ${facto(5)}`);
