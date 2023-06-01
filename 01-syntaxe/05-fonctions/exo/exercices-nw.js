const resultat = document.querySelector("#resultat");

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

const addition = (a, b, c, d, e) => {
	//je renvoi au reste du code le résultat de l'addition de x + y
	return a + b + c + d + e;
};

let a = parseInt(prompt("nombre 1"));
let b = parseInt(prompt("nombre 2"));
let c = parseInt(prompt("nombre 3"));
let d = parseInt(prompt("nombre 4"));
let e = parseInt(prompt("nombre 5"));

const somme1 = addition(a, b, c, d, e);
alert(somme1);

const somme2 = addition(2, 3, 4, 5, 6);
console.log(somme2);

resultat.textContent =
	"10 + 20 + 30 + 40 + 50 = " + addition(10, 20, 30, 40, 50);

//! ======================= EXO 2 =======================
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

// resultat.textContent =
// 	"10 + 20 + 30 + 40 + 50 + 60 = " + addition2(10, 20, 30, 40, 50, 60);

// console.log(addition2(10, 20, 30));

//! ======================= EXO 3 =======================
/*
 * Ecrivez une fonction qui calcule le nombre de voyelle contenue dans une chaine de
 * caractères l'utilisation de la fonction charAt() ou includes() et du mot clé return est conseillé
 * bonus : utiliser une regex
 */

// const voyelleCalculator = (phrase) => {
// 	// tableau des voyelles possible
// 	const voyelle = ["a", "e", "i", "o", "u", "y"];
// 	//compteur de voyelles trouvés
// 	let nbVoyelle = 0;
// 	// pour chaque lettre de ma phrase
// 	for (lettre of phrase) {
// 		// je compare ma lettre en cours avec les voyelles possibles
// 		if (voyelle.includes(lettre)) {
// 			// si j'en trouve une alors j'augmente le compteur
// 			nbVoyelle++;
// 		}
// 	}
// 	return nbVoyelle; // je renvoi le résultat au reste du programme
// };

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
//! ======================= EXO 4 =======================
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

resultat.textContent = `factorielle de 5 = ${facto(5)}`;
