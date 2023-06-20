//recupere mes elements
const txtPseudo = document.querySelector("#txtPseudo");
const txtMdp = document.querySelector("#txtMdp");
const txtEmail = document.querySelector("#txtEmail");
const btnDirect = document.querySelector("#btnDirect");
const btnSessionStore = document.querySelector("#btnSessionStore");
const btnSessionDisplay = document.querySelector("#btnSessionDisplay");
const btnLocalStore = document.querySelector("#btnLocalStore");
const btnLocalDisplay = document.querySelector("#btnLocalDisplay");
const result = document.querySelector("#result");
const pseudo = document.querySelector("#pseudo");
const mdp = document.querySelector("#mdp");
const email = document.querySelector("#email");

//action des boutons
//pour le bouton direct, on va simplement editer le textContent de notre result
btnDirect.addEventListener("click", function () {
	result.textContent = txtInput.value;
});

//! fonctions
//Affichage du session storage
function displaySessionStorage() {
	//pour recuperer un reference enregistrer dans le session storage, on utilisera la methode .getItem('nomDeLaRef')
	pseudo.textContent = sessionStorage.getItem("txtPseudo");
	mdp.textContent = sessionStorage.getItem("txtMdp");
	email.textContent = sessionStorage.getItem("txtEmail");
}

// pour le bouton sessionStore, on va enregistrer l'info dans le sessionStorage
//* https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage
btnSessionStore.addEventListener("click", function () {
	//enregistre dans la session courante une reference nommé txtInput qui a pour valeur, la valeur de notre input grâce à la methode .setItem('nomDeLaRef', valeur)
	sessionStorage.setItem("txtPseudo", txtPseudo.value);
	sessionStorage.setItem("txtMdp", txtMdp.value);
	sessionStorage.setItem("txtEmail", txtEmail.value);
	//on l'affiche
	displaySessionStorage();
});

btnSessionDisplay.addEventListener("click", function () {
	displaySessionStorage();
});

//Affichage du local storage
function displayLocalStorage() {
	//pour recuperer un reference enregistrer dans le session storage, on utilisera la methode .getItem('nomDeLaRef')
	pseudo.textContent = localStorage.getItem("txtPseudo");
	mdp.textContent = localStorage.getItem("txtMdp");
	email.textContent = localStorage.getItem("txtEmail");
}

// pour le bouton sessionStore, on va enregistrer l'info dans le sessionStorage
//* https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
btnLocalStore.addEventListener("click", function () {
	//enregistre dans le localStorage une reference nommé txtPseudo qui a pour valeur, la valeur de notre input grâce à la methode .setItem('nomDeLaRef', valeur)
	localStorage.setItem("txtPseudo", txtPseudo.value);
	localStorage.setItem("txtMdp", txtMdp.value);
	localStorage.setItem("txtEmail", txtEmail.value);
	//afficahge
	displayLocalStorage();
});

btnLocalDisplay.addEventListener("click", function () {
	displayLocalStorage();
});
