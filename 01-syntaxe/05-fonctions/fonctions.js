//! les fonctions, elles permettent d'isoler un bout de code du reste du programme, dans le but de pouvoir appeler une meme action a différent du code sans devoir réccrire l'action en question

//?la syntaxe, on commence par le mot clé fonctions, ensuite on nomme notre fonction, puis on ouvre les parantheses et enfin on met l'action de la fonction entre accolades
// function salutationGlobal() {
// 	//l'action de la fonction est ecrite entre les accolades
// 	alert("Bonjour tout le monde, sauf Michel");
// }

//alternative de syntaxe : stockage dans variable
// const salutationGlobal = function() {
// 	//l'action de la fonction est ecrite entre les accolades
// 	alert("Bonjour tout le monde, sauf Michel");
// };

//autre version, la fonction fléché, la différence entre les fonctions nomale et les fonctions se verra dans la partie orienté objet
const salutationGlobal = () => {
	//l'action de la fonction est ecrite entre les accolades
	alert("Bonjour tout le monde, sauf Michel");
};

//une fois qu'une fonction est déclarer on peut l'appeler dans tout le reste du code et autant de fois que l'on veut, pour appeler une fonction il suffit de mettre son nom suivi des paranthese
// salutationGlobal();
// salutationGlobal();
// salutationGlobal();
// salutationGlobal();
// salutationGlobal();

//? puisque l'action de la fonctions est ecrite une seule fois, lorsqu'il une modification a faire sur l'action, il ne faut mettre à jour que l'action de la fonction, pas besoin de modifier les appels a la fonction, on peut déclarer une fonction soit par le mot clé function, soit par une variable classique, soit dans un tableau ou même encore dans un objet

//? une fonction permet de rendre votre code un peu plus generique, par exemple si je veux créer une fonction bonjour personnaliser, je vais pouvoir utiliser les arguments

const salutationPersonalise = (nom) => {
	//l'action de la fonction est ecrite entre les accolades
	alert("Bonjour à toi " + nom + " et passe une bonne journée");
};

// salutationPersonalise("Alice");
// salutationPersonalise("Bob");
// salutationPersonalise("Charles");
// salutationPersonalise("Didier");
// salutationPersonalise("Emilie");
//... etc

//? on est pas limité en nombre d'argument, on peut en mettre autant que necessaire, mais ils doivent être séparé par des virgules

// const clockTelling = (heure, minutes, seconde) => {
//     alert(`au 4eme bip il sera ${heure} ${minutes} ${seconde} `);
// }

// clockTelling(12,34,56)
// clockTelling(11,11,11)
// clockTelling(8,8,8)
// clockTelling(22,58,01)

//? enfin il y a le mot clé return, ce mot permet de renvoyer un résultat au reste du programme

// function calulTVA(ht, txTva) {
// 	// console.log( ht * txTva)
//     return ht * txTva
// }

// console.log(calulTVA(100, 1.196))
// alert(calulTVA(100, 1.196))

const countEinTxt = (text) => {
	let countE = 0;
	for (let i = 0; i < text.length; i++) {
		if (text[i] === "e") countE++;
	}
	return countE;
};

const txt =
	"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis molestias labore repudiandae cupiditate molestiae, quia, nemo accusamus eveniet nobis nesciunt inventore earum laboriosam animi, odio alias deleniti voluptates reprehenderit! A!";

console.log("Il y a " + countEinTxt(txt) + " lettre e dans la phrase");
