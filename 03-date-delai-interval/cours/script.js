//paragraphe de l'affichage de l'horloge
const pClock = document.querySelector("#pClock");

//! les dates
//? en JS il existe un objet date qui contient la date et l'heure du moment de sa création
const date = new Date();
// getDay nous rend le jour (sans le 0 initiale)
document.querySelector("#pDay").textContent = date.getDay() + "/";
// getMonth nous rend le mois (sans le 0 initiale)
document.querySelector("#pMonth").textContent = date.getMonth() + "/";
// getFullYear nous rend l'année sur 4 chiffres
document.querySelector("#pYear").textContent = date.getFullYear();
// toLocaleTimeString nous rend l'heure, les minutes et les secondes en un string.
document.querySelector("#pHour").textContent = date.toLocaleTimeString();

//! horloge
//? la fonction setTimeInterval permet de relancer la même action plusieurs fois a interval régulier , elle prend en parametre
// je commence par définir l'action que je souhiate repeter a interval regulier
function setTime() {
	//je me créer un opbjet Date
	const date = new Date();
	// j'affiche l'heure dans le container précu à cet effet
	pClock.textContent = date.toLocaleTimeString();
}

let idInterval;
document
	.querySelector("#startClock")
	//? setInterval prend 2 parametres, l'action a répéter et la periodicité de la répéptition, de plus l'appel a setInterval doit être stocké dans une variable (let)
	.addEventListener("click", () => (idInterval = setInterval(setTime, 1000)));

//btn stop horloge
document.querySelector("#stopClock").addEventListener("click", () => {
	//? clearInterval permet de stoppé un interval defini
	clearInterval(idInterval);
	pClock.textContent = "";
});

//! progressbar
let progression = 0,
	progressInterval;
//Action a répeter
function setProgression() {
	progression++; // on ajoute 1 à notre progression
	//on vérifie si on depasse la valeur mx, si oui, on revient à 0
	if (progression >= 100) {
		progression = 0;
	}
	//je met à jour la valeur de ma progressBar
	document.querySelector("#progressBar").value = progression;
}

document
	.querySelector("#startProgress")
	.addEventListener(
		"click",
		() => (progressInterval = setInterval(setProgression, 500))
	);

document.querySelector("#stopProgress").addEventListener("click", () => {
	clearInterval(progressInterval);
});

//!   setTimeout (https://developer.mozilla.org/fr/docs/Web/API/setTimeout)
//on defini une fonction qui va retardé
function sayHi() {
	alert("Hello");
}

document.querySelector("#sayHi1000").addEventListener("click", () => {
	// on met le minteur en place => ici execution dans 1000ms (soit 1s)
	setTimeout(sayHi, 1000);
});
