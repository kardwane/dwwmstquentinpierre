//déclaration des variables
const priceToFind = Math.floor(Math.random() * 100); // compris entre 0 et 100
const maxTry = 7;
let tryNumber = 1,
	proposedPrice,
	result,
	isWin = false; // permet de savoir si le jeu est gagné

console.log(priceToFind);

//tant que mon nombre d'essai est inférieur ou égal au nombre d'essai max
while (tryNumber <= maxTry && isWin === false) {
	proposedPrice = parseInt(
		prompt("donnez un prix compris entre 0 et 100 (essai n°:" + tryNumber + ")")
	);
	tryNumber++;
	//si mon prix est trop elever
	if (proposedPrice > priceToFind) {
		result = "prix trop élevé";
	} else if (proposedPrice < priceToFind) {
		//si il est trop bas
		result = "prix trop bas";
	} else {
		//si il est bon, je passe le booleen de victoire a vrai (pour sortir de la boucle)
		result = "Vous avez trouvé le juste prix, bravo!";
		isWin = true;
	}
	console.log(result);
}

//résultat final
if (isWin) {
	console.log("fin : victoire");
} else {
	console.log("fin : défaite");
}

//je demande si le joureur souhaite recommencer
const newGame = confirm("Voulez-vous recommencer?");

if (newGame) {
	// je recharge la page pour redemarrer le jeu
	window.location.reload();
}
