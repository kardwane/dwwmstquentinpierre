//! ======================= EXO 1 =======================
/*
 * Ecrivez une fonction qui calcule la somme de 5 nombres fournis en argument
 */

// function somme(a, b, c, d, e){
//     //je fais mon addition
//     const total = a+b+c+d+e;
//     // je renvoie le resultat
//     return total;
// }

// const somme = (a, b, c, d, e) => {
// 	return a + b + c + d + e;
// };

// //j'appel ma fonction somme
// const somme1 = somme(5, 9, 6, 3, 2);
// console.log(`la somme de 5+9+6+3+2 =  ${somme1}`);
// // console.log(somme1);

// console.log(`la somme de 12+89+56+23+45 =  ${somme(12, 89, 56, 23, 45)}`);

//! ======================= EXO 2 =======================
/*
 * Ecrivez une fonction qui calcule le nombre de voyelle contenue dans une chaine de
 * caractères l'utilisation de la fonction charAt() ou indexOf() et du mot clé return est conseillé
 */

// const voyelleCount = (txt) => {
// 	// je créer ma variable pour compter les voyelles présentes dans la chaine
// 	let count = 0;
// 	// je fais une boucle pour parcourir tout les caractères de ma chaine
// 	for (let i = 0; i < txt.length; i++) {
// 		if (
// 			txt.charAt(i) === "a" ||
// 			txt.charAt(i) === "e" ||
// 			txt.charAt(i) === "i" ||
// 			txt.charAt(i) === "o" ||
// 			txt.charAt(i) === "u" ||
// 			txt.charAt(i) === "y"
// 		) {
// 			//on incrémente notre compteur a chaque voyelle lue
// 			count++;
// 		}
// 	}
// 	//renvoi le résultat
// 	return count;
// };

// function voyelleCount(txt) {
// 	let voyelleCount = 0;
// 	//je defini toute les voyelles possible
// 	const tabVoyelle = ["a", "e", "i", "o", "u", "y"];
// 	//je parcours ma chaine grace a une boucle pour
// 	for (let i = 0; i < txt.length; i++) {
// 		//si la lettre est trouvé dans le tableau des voyelles alors on augmente le total de voyelles trouvés
// 		if (tabVoyelle.includes(txt[i])) voyelleCount++;
// 	}
//     return voyelleCount;
// }

// function voyelleCount(txt) {
// 	let voyelleCount = 0;
// 	//je parcours ma chaine grace a une boucle pour
// 	for (let i = 0; i < txt.length; i++) {
// 		//si la lettre est trouvé par la fonction indexOf (cad résultat !== -1)  alors on augmente le total de voyelles trouvés
// 		if (
// 			txt[i].indexOf("a") !== -1 ||
// 			txt[i].indexOf("e") !== -1 ||
// 			txt[i].indexOf("i") !== -1 ||
// 			txt[i].indexOf("o") !== -1 ||
// 			txt[i].indexOf("u") !== -1 ||
// 			txt[i].indexOf("y") !== -1
// 		) {
// 			voyelleCount++;
// 		}
// 	}
// 	return voyelleCount;
// }

// version alexy
// function nbVoyelles(mot) {
// 	let nb = 0;

// 	for (let i = 0; i < mot.length; i++) {
// 		if ("aeiouy".indexOf(mot.charAt(i)) !== -1) {
// 			nb++;
// 		}
// 	}

// 	return nb;
// }

// // je defini la phrase a examiner
// const phrase =
// 	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti quo hic sed dolore quod repudiandae ratione qui culpa! Aspernatur maiores repellendus unde velit magnam minus eveniet iste temporibus at?";

// //je compte le nombre de voyelle en appelant ma fonction
// const nbVoyelle = nbVoyelles(phrase.toLowerCase());
// // const nbVoyelle = voyelleCount(phrase.toLowerCase());

// //j'affiche mon résultat
// console.log(`Dans la phrase '${phrase}', il y a ${nbVoyelle} voyelles`);

//! ======================= EXO 3 =======================
// * réecrire la fonction indexOf()

// //? dans la signature de la fonction, startIndex = 0 permet de donner une valeur par défaut à mon argument, de cette maniere si l'argument n'est pas renseigné à l'appel, alors c'est la valeur par défaut qui sera prise en compte
// function myIndexOf(letterToFind, txtToSearch, startIndex = 0) {
// 	//je parcours ma chaine a vérifier
// 	for (let i = startIndex; i < txtToSearch.length; i++) {
// 		if (txtToSearch[i] === letterToFind) {
// 			//je renvoie la position trouvé
// 			return i;
// 		}
// 	}
// 	//si je sors de la boucle c'est que la lettre a trouvé n'existe pas
// 	return -1;
// }
// const phrase =
// 	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti quo hic sed dolore quod repudiandae ratione qui culpa! Aspernatur maiores repellendus unde velit magnam minus eveniet iste temporibus at?";

// const indexOfA = myIndexOf("a", phrase.toLowerCase());
// console.log(indexOfA);

// const indexOfZ = myIndexOf("z", phrase.toLowerCase());
// console.log(indexOfZ);

// const indexOfA2 = myIndexOf("a", phrase.toLowerCase(), 30);
// console.log(indexOfA2);

//! ======================= EXO 4 =======================
/*
 * Ecrivez une fonction qui calcule la somme de X nombres fournis en argument
 */

// const sumXNumbers = (arrNumbers) => {
// 	//je créer un total à 0
// 	let total = 0;
// 	// je parcours mon tableau et je cumul chaque valeur de mon tableau à mon total
// 	// arrNumbers.forEach((number) => (total += number));
//     arrNumbers.forEach(function (number) {
//         // je fais mon cumul
//         total += number
//     });

// 	//renvoi le resultat au programme appelant
// 	return total;
// };

// //je déclare mon tableau de nombres
// let numArray = [12, 45, 78, 56, 23, 89]; // total prévu 303

// // j'appel ma fonction de somme
// let sumNumArray = sumXNumbers(numArray);

// //j'affiche mon résultat
// console.log(sumNumArray);

// //je déclare mon tableau de nombres
// numArray = [10, 20, 30, 40]; // total prévu 100

// // j'appel ma fonction de somme
// sumNumArray = sumXNumbers(numArray);

// //j'affiche mon résultat
// console.log(sumNumArray);

//! ======================= EXO 5 =======================
// * Réecrire l'exerice 5.10 avec une fonction pour calculer la factoriel

// function facto(number) {
//     //j'initialise ma variable à 1
// 	let factoriel = 1;
//     // je boucle de 2 à number
// 	for (let i = 2; i <= number; i++) {
//         //construction de la factoriel
// 		factoriel = factoriel * i;
// 		// factoriel *= i // version raccourci
// 	}
//     //on renvoi le resultat au programme appelant
// 	return factoriel;
// }

// const n = parseInt(prompt("Combien de chevaux au départ?"));
// const p = parseInt(prompt("Combien de chevaux joués?"));

// //je determine mes factoriels utiles
// const factN = facto(n);
// const factP = facto(p);
// const factNmP = facto(n - p);

// //je fais mon calcul de probabilité
// const X = factN / factNmP;
// const Y = factN / (factP * factNmP);

// //affichage du résultat
// console.log(
// 	`Pour ${p} chevaux joués sur ${n} chevaux partant, il y a une chance sur ${X} pour une arrivé dans l'ordre, et une chance sur ${Y} dans le désordre`
// );

//! ======================= EXO 6 =======================
/*
 * Ecrivez la fonction factorielle de maniere recursive
 * (fonction qui s'appelle elle même)
 * FACULTATIF
 * rappel factorielle de 5 = 5*4*3*2*1 (=120)
 */

const factoRecursif = (number) => {
	if (number === 0) {
		return 1;
	}

	return number * factoRecursif(number - 1);
};


console.log(factoRecursif(5)); // 120 attendu




// const facto = (nombre) => {
// 	if (nombre === 0) {
// 		return 1;
// 	}
// 	//  else {
// 	//     return nombre * facto(nombre - 1);
// 	// }

// 	return nombre * facto(nombre - 1);

// 	// return 5 * facto(4); // 24 * 5 = 120
// 	//      return 4 * facto(3); // 6 * 4 => 24
// 	//          return 3 * facto(2); // 2 * 3 => 6
// 	//              return 2 * facto(1); // 2
// };