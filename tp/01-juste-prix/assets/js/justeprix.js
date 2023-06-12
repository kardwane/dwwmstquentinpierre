//! je déclare toutes mes variables
const price = document.querySelector("#price"); // recupere la balise input "#price"
const submitBtn = document.querySelector("#submitBtn"); //je recupere le bouton "#submitBtn"
const restartBtn = document.querySelector("#restartBtn"); //je recupere le bouton "#submitBtn"
const result = document.querySelector("#result"); //je recupere le p #result
const tryDone = document.querySelector("#tryDone"); //je recupere le p #result

// je crée un tableau pour stocker tout les cadeaux disponibles
const giftArray = [
	"une trottinette 'la reine des neiges'",
	"un chameau",
	"une poire à lavement",
	"un pc portable",
	"une voiture thermique avec un bidon d'essence vide",
	"une babouche usé (juste une babouche, pas la paire)",
	"1 millions de pesos philippins (PHP) (environ 16600 euros)",
	"Des vacances de rêves en corée du nord (aller simple)",
];
/*
 * Math.random() => genere un chiffre a virgule compris entre 0 et 1 exemple 0,43235345346546565
 * ensuite on multiplie le chiffre par la valeur max attendu (100 dans notre exemple, car le prix max possible est 100)
 * mais on obtient toujours un resultat en nombre flotant (a virgule), ex : 23,4578999908908
 * enfin il faut arrondir ce chiffre pour le convertir entier (Math.floor())
 */
let priceToFind = Math.floor(Math.random() * 100) + 1;
/*
 * pour choisir mon n° de cadeau, je genere un entier compris entre 0
 * et la taille de mon tableau (tabeau.lenght), cependant je n'oublie pas de faire longueur tableau
 * -1 pour prendre en compte le fait que la 1er case d'un tableau (en js, php..)est la case n°0
 */
let selectedGift = Math.ceil(Math.random() * (giftArray.length - 1)); // prix aléatoire entre 1 et 100
//je créer mon compteur d'essais, en l'initialisant à 0
let tryNumber = 0;

//! je créer mes fonctions

// fonction permettant de vérifier le prix
function checkPrice(inputPrice) {
	
	tryNumber++; // je compte un essai supplémentaire => tryNumber = tryNumber + 1
	let classColor = "orange";
	//verification du nombre d'essai
	if (tryNumber >= 7) {
		//Defaite
		endOfGame(false);

		//video facepalm
		tryDone.innerHTML += `<iframe class="flip" width="560" height="315" src="https://www.youtube.com/embed/g-bVEc8oZvk?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
		return; // fin du jeu on arrete l'execution du code ici
	} else {
		//vérification de la saisie ()
		if (
			inputPrice < 0 ||
			inputPrice > 100 ||
			isNaN(inputPrice) ||
			inputPrice === ""
		) {
			result.textContent =
				"Votre saisie doit être une valeur numérique compris entre 0 et 100";
			newTurn();
			if (tryNumber < 7) return; // on arrete l'execution du code pour garder le bon texte de result
		}
		if (inputPrice === priceToFind) {
			// gg la partie est gagné!
			endOfGame(true);

			//image juste prix
			const jpImg = document.createElement("img");
			jpImg.src =
				"http://www.infojeuxtv.fr/wp-content/uploads/2014/09/le-jsute-prix.jpg";
			jpImg.classList.add("flip");
			jpImg.id = "jpImg";
			jpImg.style = "width:30vw";
			tryDone.appendChild(jpImg);
			return; // on a gagné! on n'as pas besoin d'executer le reste du code de la fonction
		} else if (inputPrice < priceToFind) {
			// je créer le message a donné à mon user
			resultContent = "Plus grand";
			classColor = "pink";
		} else {
			// je créer le message a donné à mon user
			resultContent = "Plus petit";
		}
		//afficher le nouvel historique
		result.classList.remove("fade-in-text");
		result.classList.add("fade-in-text");
		result.textContent = resultContent;
		result.style.backgroundColor = classColor;
	}
	// préparation du tour suivant
	
	newTurn();

}

//preparre le tour suivant
const newTurn = () => {
	// pour réactiver l'animation de fadeIn
	tryDone.classList.remove("fade-in-text");
	tryDone.classList.add("fade-in-text");

	// j'actualise l'affichage du nombre d'essai
	tryDone.textContent =
		tryNumber === 6 ? "1 essai restant" : `${7 - tryNumber} essais restants`;

	price.value = ""; // vide la zone de saisie
	price.focus(); // remet le focus sur mon input

};

//pour gerer la fin de partie
function endOfGame(res) {
	//j'affiche le bouton recommencer
	restartBtn.classList.remove("hidden");
	//je lui ajoute la class flip
	restartBtn.classList.add("flip");
	//je vide et desactive l'input de prix
	price.value = "";
	price.disabled = true;
	//je determine le message finale
	tryDone.textContent = res ? "Victoire !" : "Défaite !";
	// et la couleur du message
	const classColor = res ? "green" : "red";
	//je definit le lot gagné
	result.textContent = res
		? `Vous avez gagné le lot suivant : ${giftArray[selectedGift]}`
		: `Le prix à trouver était : ${priceToFind}`;
	result.style.backgroundColor = classColor;
}

//! je gere les evenements
//j'ajoute l'appel à la fonction checkPrice() sur l'evenement "click"
submitBtn.addEventListener("click", () => checkPrice(parseInt(price.value)));

//j'ajoute l'appel à la fonction checkPrice() sur l'evenement "keydown"
price.onkeydown = (e) => {
	//declenchement sur la touche entrée uniquement
	if (e.key === "Enter") {
		checkPrice(parseInt(price.value));
	}
};

// j'ajoute l'action sur le click du bouton recommencer
restartBtn.addEventListener("click", function () {
	// je réinitialise les variables qui vont bien
	priceToFind = Math.ceil(Math.random() * 100); // prix aléatoire entre 1 et 100
	selectedGift = Math.ceil(Math.random() * (giftArray.length - 1)); // cadeau aléatoire entre 1 et longeur tableau -1
	tryNumber = 0; //initialisation

	// je remet mon affichage à 0
	result.textContent = "";
	tryDone.textContent = "";
	price.value = "";
	price.disabled = false;
	price.focus();

	restartBtn.classList.add("hidden"); // masque le bouton recommencer
	restartBtn.classList.remove("flip");

	const jpImg = document.getElementById("jpImg");
	if (jpImg !== null) jpImg.remove(); // supprimer l'image de victoire
});

//! bonus son
//lancement de la musique du juste prix
const generiqueJP = new Audio(
	"https://www.televisiontunes.com/uploads/audio/Generique%20du%20Juste%20Prix%20-%201998%20-%20France.mp3"
);
// j'active le parametre de musique en boucle
generiqueJP.loop = true;
// je démarre la lecture de la musique
generiqueJP.play();

//la partie peut commencer
price.focus();
