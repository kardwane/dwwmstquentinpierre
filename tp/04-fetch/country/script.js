//je défini mon url de base
const url = "https://restcountries.com/v3.1/alpha/";

document.querySelector("#searchBtn").addEventListener("click", function () {
	// je récuper le code payse pour finaliser la fin de l'url a requeter
	const countryCode = document.querySelector("#country").value;
	// je lis les reponses de l'URL et j'execute l'action handleFetch
	fetch(url + countryCode)
		.then(handleFetch)
		.catch((error) => console.error(error));
});

function handleFetch(responseText) {
	// console.log(responseText);
	// La propriété ok est un boolean indiquant si cela s'est bien passé ou non.
	if (responseText.ok) {
		// si le parse fonctionne, il lancera le callback de then
		// sinon ce sera le callback de catch
		responseText
			.json() // transforme la réponse API au format JSON
			.then(displayCountryInfo) // des que les données sont au bon format, on affcihe les infos du pays
			.catch((error) => console.log(error)); // permet d'attraper l'erreur pour l'afficher en console 'evite le message d'erreur par défaut
	} else {
		console.error(responseText.statusText);
	}
}

//déclaration de fonction "moderne" (fléché)
const displayCountryInfo = (data) => {
	//je recopie les données reçu dans un variable pays (pour me simplifier le reste du code)
	const pays = data[0];
	console.log(pays);

	//	nom du pays
	document.querySelector("#nomPays").textContent = pays.name.common;

	//	sa capitale
	document.querySelector("#capitale").textContent =
		"Capitale : " + pays.capital;

	//	son drapeau
	document.querySelector("#drapeau").src = pays.flags.svg;

	//	sa taille
	document.querySelector("#superficie").textContent =
		"Superficie : " + pays.area + " km²";

	//	sa population
	// const population = new Intl.NumberFormat("fr-FR", {
	// 	style: "currency",
	// 	currency: "Habitants",
	// }).format(pays.population);
	document.querySelector("#population").textContent =
		"Population : " + pays.population + " habitants";

	//	Ses pays frontaliers
	let paysFrontalier = "Liste des pays frontaliers : ";
	pays.borders.forEach((value, index) => {
		paysFrontalier += `${value} (${index}), `;
	});

	//Retrait de la derniere virgule
	paysFrontalier = paysFrontalier.substring(0, paysFrontalier.length - 2);

	document.querySelector("#frontalier").textContent = paysFrontalier;
};
