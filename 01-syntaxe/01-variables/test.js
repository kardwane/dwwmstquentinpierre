//! difference entre ++variable et variable++
// let a = 0;

// console.log(a); // attendu 0
// console.log(a++); // attendu 0

// console.log(a); // attendu 1

// //? quand on fait a++, le +1 va se faire apres l'opération, le console.log() dans cet exemple

// console.log(++a); // attendu 2


//? exemple de fonction fait à la main (sans passer par les fonctions js)
// function strReverse(str) {
// 	// Écrivez votre code ici
// 	let motInverse = "";
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		motInverse += str[i];
// 	}
// 	return motInverse;
// }

// // Afficher la sortie
// console.log(strReverse("WayToLearnX"));
// console.log(strReverse("Hello"));

//? connaitre l'url de la page en cours
// console.log(document.location);
// console.log(document.URL);

const etat = true;

if(etat) {
    console.log('ok');
}

const tab=[12,12,12,12]

tab.length = strReverse