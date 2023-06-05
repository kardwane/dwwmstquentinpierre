// je récupere ma div #result
const result = document.querySelector("#result");

//! ====================== EX 1 =======================
// * réaliser un paragraphe qui affiche un message en console quand on lui clique dessus

// je recupere ma balise p#ex=1
const ex1 = document.querySelector("#ex1");

//je lui associe une action sur le click
ex1.addEventListener("click", function () {
	console.log("action en console");
});

// ? addEventListener permet de cumuler plusieur actions sur le même evenement

document.querySelector("#ex1").addEventListener("click", function () {
	console.log("action en console");
});

//? on peut cibler directement le click en passant /!\ on ne peut pas cumuler plusieurs action avec le onclick
// ex1.onclick = function () {
document.querySelector("#ex1").onclick = function () {
	console.log("action en console");
};

// //! ====================== EX 2 =======================
// //*réaliser un bouton qui créer un paragraphe et l'insert dans la div #result

// //1, je récupere mon bouton d'action
// const btn = document.querySelector(".btn");

// //2 definir l'action
// const addParagraph = () => {
// 	// version create element
// 	//je créer un nouveau paragraphe
// 	const newP = document.createElement("p");
// 	// je lui ajoute un texte
// 	newP.textContent = "texte du nouveau paragraphe";
// 	// je l'ajoute dans la div #result
// 	document.querySelector("#result").appendChild(newP);
// };

// const addParagraph2 = () => {
// 	// versioninnertHTML
// 	//j'edite le contenu HTML de la div #result
// 	result.innerHTML = `<p>texte du nouveau paragraphe 2</p>`;
// };

// //3 je lui associe une action sur le click
// btn.addEventListener("click", addParagraph);

//! ====================== EX 3 =======================
//*réaliser un bouton qui créer un paragraphe et l'insert dans la div #result et appliquer du css au nouveau paragraphe

//1, je récupere mon bouton d'action
const btn = document.querySelector(".btn");

//2 definir l'action
const addParagraph = () => {
	//je créer un nouveau paragraphe
	const newP = document.createElement("p");
	// je lui ajoute un texte
	newP.textContent = "texte du nouveau paragraphe";
	// j'applique une class CSS grace a la propriété classList de ma balise
	newP.classList.add("classAjout");
	// console.log(result.classList)

	// je l'ajoute dans la div #result
	document.querySelector("#result").appendChild(newP);
};

//3 je lui associe une action sur le click
btn.addEventListener("click", addParagraph);

// ! ====================== EX 4 =======================
// * supprimer la classAjout du nouveau paragraphe

//suppression de la classAjout
document.querySelector(".btn2").addEventListener("click", function () {
	//je recupere le  p classAjout
	document.querySelector(".classAjout").classList.remove("classAjout");
});

//! ====================== EX 5 =======================
//*créer un dark mode

// 1 je recupere le lien
document.querySelector("#darkMode").addEventListener("click", function () {
	// je fais toggle la class darkMode sur le click du lien
	document.body.classList.toggle("dark-mode");
});
