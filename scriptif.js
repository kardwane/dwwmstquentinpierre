// const nombre = 45;

// // l'instruction if permet tester une condition
// // si la condition est respecté alors on va declanché une action particuliere
// // si la condition n'est pas respecté on peut declanché une action particuliere, mais ce n'est pas obligatoire

// //le if le plus simple
// // if(nombre === "42"){
// //     alert('vaut 42 texte')
// // }

// // if(nombre === 42){
// //     //on n'est pas limité a une seule instruction
// //     console.log('coucou');
// //     alert('vaut 42 numerique')
// // }

// // if(nombre == "42"){
// //     alert('vaut 42 texte 2')
// // }

// //si on compare avec le == alors js va chercher a convertir le booléen en valeur numérique, ce qui peut apporté des cas abhérants
// // const booleen = false

// // if(booleen == 0){
// //     alert('faux = 0')
// // }

// // si on veut mettre un cas alternatif, on va utiliser le mot clé else

// if (nombre === 48) {
// 	//on n'est pas limité a une seule instruction
// 	console.log("coucou");
// 	alert("vaut 45 numerique");
// } else {
// 	// si la conditon n'est pas respecté, je demande a js de prévoir un cas alternatif
// 	console.log("ne vaut pas 45 ");
// 	//la aussi on n'est pas limité en nombre d'instructions
// 	console.log("la preuve!");
// }

// //exemple qui permet d'eviter un else

// //je donne la valeur avant de faire mon test
// let maSuperVariable = "valeur par défaut";

// // je fais mon test
// if (nombre === 45) {
// 	maSuperVariable = "valeur modifié";
// }

// //j'affiche mon résultat
// console.log(maSuperVariable);

// //encore une autre variante du if else classique, l'ecriture ternaire

// // let resultat = nombre === 142 ? "ok" : "ko";
// // console.log(resultat);

// // // equivalent de la ternaire en ecriture classique
// // if(nombre === 42){
// //     resultat = 'ok';
// // } else {
// //     resultat = 'ko';
// // }

// // on est pas limité a un seul test sur notre if, l'instruction else if est la pour ça
// // if (nombre === 45) {
// // 	resultat = "ok";
// // } else if (nombre === 49) {
// // 	resultat = "ok blabla";
// // } else if (nombre === 42) {
// // 	resultat = "ok zgezrgbezr";
// // } else {
// // 	// si les tests précedent ont echoué, on execute ce bloc d'instruction
// // 	resultat = "ko";
// // }

// // console.log(resultat);
// // enfin si on peut ecrire le if précédent d'une autre façon,
// // l'instruction switch (selon)
// //selon la valeur de notre variable, ici nombre on peut
// //determiné un valeur correspondante
// switch (nombre) {
// 	case 42:
// 		resultat = "ok 42";
// 		break;
// 	case 45:
// 		resultat = "ok 45";
// 		break;
// 	case 48:
// 		resultat = "ok 48";
// 		break;
// 	default:
// 		resultat = "ko";
// }

// console.log(resultat);

// //un rappel de prompt :
//le prompt recupere une valeur de type chaine de caractère
// const saisie = prompt("donne moi une valeur");

// console.log(saisie);

// if (saisie == 123) {
// 	console.log("123 en valeur");
// }

// if (saisie === 123) {
// 	console.log("123 en type et en valeur");
// }

// if (saisie + 12 === 135) {
// 	console.log("135");
// }

// // si on veut faire un calcul avec une valeur récuperé sur un prompt, il faut changer le type de la valeur, pour ça on peut utiliser les fonction de transtypage tel que parseInt
// if (parseInt(saisie) + 12 === 135) {
// 	console.log("135 transformé");
// }


// si on veut generer une valeur numérique, on peut utiliser la methode Math.random
const aleatoire = Math.random();
console.log(aleatoire);

//si on veut genere une valeur entiere comprise entre 0 et 100
//on utilise une des fonctions d'arrondi que JS propose, ici Math.floor (arrondi inférieur)
const aleatoire2 = Math.floor(aleatoire * 100);
console.log(aleatoire2);