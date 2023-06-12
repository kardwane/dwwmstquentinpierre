//je recupere mes elements HTML
const maskedWord = document.querySelector("#maskedWord");
const hangmanStep = document.querySelector("#hangmanStep");
const restart = document.querySelector(".restart");
const vKeyboard = document.querySelector("#vKeyboard");
//je créer ma liste de mots
const words = [
	"tonneaux",
	"gomme",
	"presidentielle",
	"vietnam",
	"javascript",
	"jeux",
	"aragorn",
	"ophtalmologiste",
	"championnat",
	"menthe",
	"arachide",
	"oiseau",
	"limonade",
	"xylophone",
	"anticonstitutionnellement",
];
//je défini les lettres joubales
const letters = "azertyuiopqsdfghjklmwxcvbn";
//je défini les erreurs au nombre de 7
const endgame = 7;

//des variables utilisé dans le programme
let randomIndex, wordToFind, error, isWin;

//permet d'initialiser les parametres du jeu par défaut
const init = () => {
	//je genere un index au hasard
	randomIndex = Math.ceil(Math.random() * words.length - 1);
	// je genere un mot à trouver
	wordToFind = words[randomIndex];
	// je remet le compteur d'erreur à 0
	error = 0;
	//j'efface le contenu de la zone "Recommencer"
	restart.innerHTML = "";
	//je remet le contenu de la zone "Hangman" sur la case 1
	hangmanStep.style.backgroundPosition = "2% 60%";
	// je genere un mot à trouver en étoile
	let newMaskedWord = "";
	for (let i = 0; i < wordToFind.length; i++) {
		newMaskedWord += "*";
	}
	// j'affiche le mot à trouver
	maskedWord.textContent = newMaskedWord;
	//je remet le flag de victoire a faux
	isWin = false;
	//je créer le clavier virtuel
	createVirtualKeyboard();
};

//création du clavier virtuel
const createVirtualKeyboard = () => {
	vKeyboard.innerHTML = "";
	//je boucle sur les lettres
	letters.split("").forEach((letter) => {
		// pour chaque lettre, je créer un bouton associé
		let btn = document.createElement("button");
		// je met en étiquette le texte de la lettre
		btn.textContent = letter.toUpperCase();
		// je met en id la lettre en cours
		btn.id = letter;
		// je met la class css sur la lettre en cours
		btn.classList.add("btn-letter");
		// j'associe l'action de verification de lettre sur le bouton
		btn.onclick = function () {
			checkLetter(this.id);
		};
		// une fois que le bouton a été créé, je l'ajoute au clavier
		vKeyboard.appendChild(btn);
	});
};

const checkLetter = (letter) => {
	// est ce que la lettre est dans le mot à trouver? et que la lettre n'as pas encore était joué
	if (
		wordToFind.indexOf(letter) === -1 &&
		document.querySelector("#" + letter).disabled === false
	) {
		looseTurn();
	} else {
		//je créer une nouvelle version du mot à trouver
		const newMaskedWord = updateMaskedWord(maskedWord.textContent, letter);
		//je l'affiche sur l'ecran
		maskedWord.textContent = newMaskedWord;
		// si le mot masqué est identique au mot à trouver (le mot masqué ne comporte plus d'étoiles)
		if (newMaskedWord === wordToFind) {
			isWin = true;
			createEndMessage();
		}
	}
	// je désactive le bouton correspondant à la lettre
	document.querySelector("#" + letter).disabled = true;
};

const looseTurn = () => {
	//j'incremente le compteur d'erreur
	error++;
	//selon le compteur d'erreur, je decide de la case a montrer sur mon pendu
	switch (error) {
		case 1:
			hangmanStep.style.backgroundPosition = "16% 60%";
			break;
		case 2:
			hangmanStep.style.backgroundPosition = "29% 60%";
			break;
		case 3:
			hangmanStep.style.backgroundPosition = "43% 60%";
			break;
		case 4:
			hangmanStep.style.backgroundPosition = "57% 60%";
			break;
		case 5:
			hangmanStep.style.backgroundPosition = "70% 60%";
			break;
		case 6:
			hangmanStep.style.backgroundPosition = "84% 60%";
			break;
		case 7:
			hangmanStep.style.backgroundPosition = "99% 60%";
			createEndMessage();
			break;
		default:
			hangmanStep.style.backgroundPosition = "2% 60%";
	}
};

const updateMaskedWord = (wordState, letter) => {
	let newstate = "";
	// je créer une nouvelle version du mot à trouver
	for (let i = 0; i < wordToFind.length; i++) {
		//si la lettre est dans le mot à trouver
		if (letter === wordToFind[i]) {
			//alors je l'ajoute à la nouvelle version du mot à trouver
			newstate += letter;
		} else {
			//sinon je garde l'état actuelle de la lettre
			newstate += wordState[i];
		}
		console.log(newstate);
	}
	console.log("============================================================");
	return newstate;
};

const createEndMessage = () => {
	//<btn restart>
	const btn = document.createElement("button");
	btn.textContent = "Recommencer";
	//je lui associe l'action de recommencer
	btn.addEventListener("click", () => {
		init();
	});
	//j'ajoute le bouton coté HTML
	restart.appendChild(btn);

	//je commence a determiner le style du message de fin (defaite)
	let cssClass = "endmessaged";
	//<p msg>
	const p = document.createElement("p");
	p.textContent = "Vous avez perdu, le mot à trouver était : " + wordToFind;

	//<img msg>
	const img = document.createElement("img");
	img.src =
		"https://media4.giphy.com/media/QmGNyXP5MRFgeFERPd/giphy.gif?cid=ecf05e47noe95fuwwg8v1ifpx1eve59xlwoapg1zm4k5uutr&rid=giphy.gif&ct=g";

	//<Audio>
	const sound = new Audio("./assets/sound/motus-boule-noire.mp3");

	//si il a gagné je change le message de fin
	if (isWin) {
		cssClass = "endmessagev";
		p.textContent = "Vous avez gagné";
		img.src =
			"https://media2.giphy.com/media/lnyPptAfGwHeTdoQDk/giphy.gif?cid=ecf05e47i6s88fufl369lmxlxixeqtawrobjyz2e2rouhfpe&rid=giphy.gif&ct=g";
		sound.src = "./assets/sound/mixkit-animated-small-group-applause-523.wav";
	}

	//append
	p.classList.add(cssClass);
	p.appendChild(img);

	//j'efface mon clavier virtuel
	vKeyboard.innerHTML = "";
	// je le remplace par le message de fin
	vKeyboard.appendChild(p);
	// je joue la musique
	sound.play();
};

// je met un écouteur sur la fenetre complete (navigateur)
window.addEventListener("keyup", (e) => {
	// a chaque touche du clavier utilisé, je verifie si la touche est une lettre et si le jeu est toujours en cours
	if (letters.match(e.key) && error < 7) {
		//si oui je compare le mot à trouver avec la lettre
		checkLetter(e.key);
	}
	//bonus, si je suis en fin de partie et que j'appuie sur entrée, le jeu recommence
	if (e.key === "Enter" && (isWin || error >= 7)) {
		init();
	}
});

//je lance le jeu
init();
