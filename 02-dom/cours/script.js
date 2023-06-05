//! selection de balise

//? en js on peut récuperer n'importe balise de notre page web dans un premier il faut pouvoir cibler l'element a recuperer, les selecteurs de balises en JS fonctionne sur le même principe que les selecteurs CSS, pour cibler un element en particulier sur notre page, on peux utiliser la methode querySelector

// recuperation du bouton "alert"
// const alertBtn = document.querySelector('#alertBtn');

// console.log(alertBtn);

//?getElementById permet aussi de récuperer une balise HTML mais uniquement en ciblant sur son id, il existe d'autre methode pour pouvoir cibler des selecteurs particulier (name, class, etc...)
// const alertBtn = document.getElementById('alert');
// const alertBtn = document.getElementsByClassName('alert');
// const alertBtn = document.getElementsByName('alert');
// const alertBtn = document.getElementsByTagNameNS('alert');
// const alertBtn = document.getElementsByTagName('alert');

//! association d'action sur une balise

//? pour associer une action a ma balise HTML, je peux utiliser la methode addEventListener(evenement, action)
// alertBtn.addEventListener('click', function (){
//     //code de l'action a executer lorsqu'on clique sur le bouton
//     alert('Action')
// })

//! création et insertion d'élement dans le DOM

// //? en js on est pas limiter a recupere du code HTML existant, on peut créer nous meme avec JS de nouvelle balise et les inserer un peu ou on le souhaite, c'est encore une fois une question de ciblage

// //? la création d'element se fait avec la méthode document.createElement
// const newH3 = document.createElement("h3");

// //? une fois que la balise est créer, elle est créer coté JS uniquement, tant qu'on ne l'a pas insérer l'utilisateuer ne verra rien.
// //? notez, qu'avant l'insertion, on peut personnaliser notre balise un peu comme on veut
// newH3.textContent = "je suis créer en JS"; // ajout de text
// newH3.classList.add("subtitle", "subtitle2"); // ajout de class css
// newH3.style = "border: 1px solid green;"; // ou éditer le style css à la volée
// newH3.id = "superbeId"; // ajout d'un id
// newH3.name = "superbeName"; // ajout d'un name

// //? l'insertion quand a elle se fait avec la méthode document.appendChild/append

// document.querySelector("#alertBtn").addEventListener("click", function () {
//     //j'ajoute le h3 existant
// 	document.querySelector("#result").appendChild(newH3);
//     //j'ajouter un h3 créer pour l'occasion en début de main
// 	document.querySelector("main").prepend(createNewH3());

// });

// //je peux créer une fonction de création d'element
// function createNewH3() {
// 	const newH3 = document.createElement("h3");

// 	newH3.textContent = "je suis créer en JS 2"; // ajout de text
// 	newH3.classList.add("subtitle", "subtitle2"); // ajout de class css
// 	newH3.style = "border: 1px solid blue;"; // ou éditer le style css inline
// 	newH3.id = "superbeId2"; // ajout d'un id
// 	newH3.name = "superbeName2"; // ajout d'un name
//     return newH3;
// }

//! innnerHTML
// document.querySelector("#alertBtn").addEventListener("click", function () {
//     //j'ajouter du code HTML dans ma div #result
// 	document.querySelector("#result").innerHTML += `
//     <h3 class="subtitle subtitle2" style="border: 1px solid blue;" id="superbeId2">je suis créer en JS 2</h3>
//     `;
// });

//! ========== Récuperer la valeur d'un champs input
//* par exemple, sur validation d'un champ input, afficher son contenu dans la console

//1er temps je recupere l'input
const txtInput = document.querySelector("#txtInput");

//2 je defini une action
function action(input) {
	//? le .value d'un champs input contient la valeur renseigné par l'utilisateur
	console.log(input.value);
	//? le .value d'un champs est TOUJOURS de type texte (pensez a convertir si vous devez faire des comparaisons mathématiques avec)
}

//3 j'associe une action sur la touche entrée de mon clavier
txtInput.addEventListener("keydown", function (event) {
	// console.log(event);
	//si la touche frappé est la touche entrée
	if (event.key === "Enter") {
		//alors j'affiche le contenu de mon input

		//event.target fais reference au champ concerné par l'action (ici notre input txt)
		// action(event.target);

		//? le this reprente l'objet en cours (ici mon input)
		// console.log(this);
		action(this);

		// action(txtInput)
	}
});

//? mettre le focus sur un element (un input txt dans cet exemple)
document.querySelector("#focusTxt").onclick=() => {
    //la methode .focus() permet de mettre le focus sur l'element voulu
    document.querySelector("#txtInput").focus();
}

//? pour desactiver un element, on va utiliser la propriété .disabled = true
document.querySelector("#disableTxt").onclick=() => {
    // la propriété .disabled permet de dé/sactiver l'element voulu (= true pour desactiver, ou = false pour activer)
    document.querySelector("#txtInput").disabled = true;
}
