"use strict";

/* 
    JSON signifie JavaScript Object Notation.
    C'est un langage qui permet de transformer des données complexe comme un tableau ou un objet en string. Cela peut servir pour sauvegarder des données sous forme de string mais aussi pour transférer des données entre différents langages.
    Par exemple un tableau PHP et un tableau JS ne s'écrivant pas de la même façon, impossible de communiquer entre eux, mais avec du JSON, cela devient possible.
*/
const form = document.querySelector("form");

form.addEventListener("submit", saveData);

function saveData(e) {
	// J'empêche mon formulaire de recharger la page
	e.preventDefault();
	// Je transfère les données de mon formulaire à l'objet FormData
	const data = new FormData(form);
	let user = {};
	// je boucle sur mon FormData pour obtenir toute les valeurs et indexation.
	data.forEach((value, name) => {
		// J'ajoute ces valeurs en tant que propriété
		user[name] = value;
	});
	// J'obtient un objet contenant toutes les valeurs de mon formulaire.
	showUser(user);
	console.log(user);

	//convertir le JSON en string
	const strUser = JSON.stringify(user);
	console.log(strUser);
	// localStorage.setItem("user", strUser);
	sessionStorage.setItem("user",strUser);
}

function showUser(u) {
	const h1 = document.querySelector("h1");
	h1.textContent = `Je suis ${u.prenom}, ${u.age} ans!`;
}

let userString = localStorage.getItem("user");
if (userString === null && sessionStorage.getItem("user") !== null) {
    userString = sessionStorage.getItem("user")
}

console.log(userString);
if (userString) {
	//on part du string en localstorage
	console.log(userString);
	//on le transforme en objet avec JSON.parse
	const user = JSON.parse(userString);
	//on l'affiche
	console.log(user);
	// pour extraire une propriété de l'objet, on fait objet.propriete
	console.log(user.age);

	showUser(user);
}
const object = {
	prenom: "Jean",
	age: 30,
};

// Je déclare un objet vide
const objet = {
	nom: "valeur 1",
	age: 14,
	adulte: true,
}
console.log(objet);
// pour acceder au propriété, on ne va pas utiliser un indice comme la tableau, mais directement le nom de la propriete
console.log(objet.nom);
console.log(objet.age);
console.log(objet.adulte);