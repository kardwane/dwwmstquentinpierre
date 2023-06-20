//recupere mes elements
const txtInput = document.querySelector("#txtInput");
const btnDirect = document.querySelector("#btnDirect");
const btnSessionStore = document.querySelector("#btnSessionStore");
const btnSessionDisplay = document.querySelector("#btnSessionDisplay");
const btnLocalStore = document.querySelector("#btnLocalStore");
const btnLocalDisplay = document.querySelector("#btnLocalDisplay");
const result = document.querySelector("#result");

//action des boutons
//pour le bouton direct, on va simplement editer le textContent de notre result
btnDirect.addEventListener("click", function () {
	result.textContent = txtInput.value;
});

// pour le bouton sessionStore, on va enregistrer l'info dans le sessionStorage
//* https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage

btnSessionStore.addEventListener("click", function () {
	//enregistre dans la session courante une reference nommé txtInput qui a pour valeur, la valeur de notre input grâce à la methode .setItem('nomDeLaRef', valeur)
	sessionStorage.setItem("txtInput", txtInput.value);
	//on l'affiche
	result.textContent = sessionStorage.getItem("txtInput");
});

btnSessionDisplay.addEventListener("click", function () {
	//pour recuperer un reference enregistrer dans le session storage, on utilisera la methode .getItem('nomDeLaRef')
	result.textContent = sessionStorage.getItem("txtInput");
});

// pour le bouton sessionStore, on va enregistrer l'info dans le sessionStorage
//* https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage

btnLocalStore.addEventListener("click", function () {
	//enregistre dans le localStorage une reference nommé txtInput qui a pour valeur, la valeur de notre input grâce à la methode .setItem('nomDeLaRef', valeur)
	localStorage.setItem("txtInput", txtInput.value);
	result.textContent = localStorage.getItem("txtInput");
});

btnLocalDisplay.addEventListener("click", function () {
	//pour recuperer un reference enregistrer dans le localStorage, on utilisera la methode .getItem('nomDeLaRef')
	result.textContent = localStorage.getItem("txtInput");
});



prompt('Are you sure you want to')

console.log("zkgbezrkgkzprgz bgk")
