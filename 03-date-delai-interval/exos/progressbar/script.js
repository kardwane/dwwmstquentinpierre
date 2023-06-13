//!1 - je pose mes variables / elelments HTML
const startProgress = document.querySelector("#startProgress");
const stopProgress = document.querySelector("#stopProgress");
const progressBar = document.querySelector("#progressBar");
let count = 0, // servira de compteur
	progressInterval;

//!2 - je créer mes fonctions
//? fonction qui va démarrer le chargement de la progress bar
function startProgressBar() {
	// je créer un interval qui va executer l'action nommé upProgressBar, toutes les 100 milisecondes
	progressInterval = setInterval(upProgressBar, 1000);
}

//? fonction qui va stopé le chargement de la progress bar
function stopProgressBar() {
	//j'arrete l'interval stocker dans progressInterval
	clearInterval(progressInterval);
}

//? la fonction de progression de la barre, autrement l'action qui va être appeler tout les 100 milisecondes
const upProgressBar = () => {
	//augmenter notre comtpeur
	count++;
    console.log(count);
	//on va verifier si notre compteur dépasse le maximum prévu dans la progress bar
	if (count > progressBar.max) {
		count = 0; // on remet la progression a 0
	}
	//il nous reste à mettre la valeur de la progress bar
	progressBar.value = count;
};

//!3 - je lie les actions à mes évenement

//je lie l'action demarage de la progress bar à l'action startProgressBar()
startProgress.addEventListener("click", startProgressBar);

//je lie l'action stoper de la progress bar à l'action stopProgressBar()
stopProgress.addEventListener("click", stopProgressBar);
