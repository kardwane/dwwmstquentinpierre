//je defini mon url de base
const url = "https://restcountries.com/v3.1/name/";
const divResult = document.querySelector("#result"); // je recupere ma div result

//je lie l'action au click du bouton
document.querySelector("#searchBtn").addEventListener("click", function () {
	//je recupere la saisie utilsateur
	const country = document.querySelector("#country").value;
	//je fetch l'url completer avec la saisie utilisateur
	fetch(url + country)
		.then(handleFetch) // je lis les reponses de l'URL et j'execute l'action handleFetch
		.catch((error) => console.error(error)); // si erreur je la log en console
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
	console.log(data);

	//je vide ma zone de résultat, pour eviter de cumuler les résultats de plusieurs recherches
	divResult.innerHTML = "";

	//je parcours mon tableau de réponse
	for (country of data) {
		//le nom du pays
		// let countryName = country.name.common;
		// //si ma fiche pays possede une entrée sur country.name.nativeName.fra => le pays propose une version française de son nom
		// if (country.name.nativeName.hasOwnProperty("fra")) {
		// 	countryName = country.name.nativeName.fra.common;
		// }

		const countryName = country.name.nativeName.hasOwnProperty("fra")
			? country.name.nativeName.fra.common
			: country.name.common;
		// console.log(countryName);

		//Ses pays frontalier
		let paysFrontalier = "Aucun pays frontalier";
		//si le pays a des frontieres
		if (country.hasOwnProperty('borders')) {
			paysFrontalier = "";
			country.borders.forEach((value, index) => {
				//je créer la liste des pays frontalier
				paysFrontalier += `${value} (${index}), `;
			});
			//retrait de la derniere virgule
			paysFrontalier = paysFrontalier.substring(0, paysFrontalier.length - 2);
		}

		//création et insertion de la fiche pays
		divResult.innerHTML += `
		<article class="countryInfo">
			<h2 class="countryName">${countryName}</h2>
			<p>
				<img src="${country.flags.svg}" alt="drapeau du pays" class="flag" />
			</p>
			<p id="capital">${country.name.common}</p>
			<p id="size">Superficie : ${country.area} km²</p>
			<p id="population">${country.population} habitants</p>
			<p id="borders">${paysFrontalier}</p>
		</article>
		`;
	}
};
