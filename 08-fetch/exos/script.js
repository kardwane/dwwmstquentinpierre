//! fetch : un moyen facile et logique de récupérer des ressources à travers le réseau de manière asynchrone..
// je defini l'url dont je vais fecthé (lire) la réponse
const url = "https://official-joke-api.appspot.com/random_ten";

//? fetch va lire la réponse donnée par l'url, puis une fois la réponse lu, elle va appeler la fonction handleFetch pour traiter la réponse
//? le .then correspond a l'action qui va suivre le fetch
//? le .catch permet d'attraper une erreur et de la traiter comme on le souhaite (ici un affichage en console)
fetch(url)
	.then(handleFetch)
	.catch((error) => console.error(error));

	//dans handleFetch, la variable responseText représente la réponse obtenu par le fetch de l'url, le nom de responseText est libre, vous pouvez appeler la variable autrement si vous le souhaitez
function handleFetch(responseText) {
	console.log(responseText);
	// La propriété ok est un boolean indiquant si cela s'est bien passé ou non.
	if (responseText.ok) {
		// si le parse fonctionne, il lancera le callback de then
		// sinon ce sera le callback de catch
		responseText
			.json() // transforme la reponse JSON en objet JS (ici, l'argument data de la fonction showResult() )
			.then(showResult) // applique le traitement sur l'objet JS
			.catch((error) => console.error(error)); // si erreur, on la log
	} else {
		// si la réponse n'est pas ok, on log le status de la réponse
		console.log(responseText.statusText);
	}
}
function showResult(data) {
	// { id: 216, type: "general", setup: "What do you call a fashionable lawn statue with an excellent sense of rhythmn?"
	// , punchline: "A metro-gnome" }
	console.log(data);
	// je récupere un tableau de 10 objets blagues
	//je rempli ma page avec les reponses de l'API
	
	//qui dit tableau, dit parcours de tableau et donc boucle
	// comme je travail avec des objets, je peux utiliser la boucle for...of
	for (joke of data) { // pour chaque blague de ma collection
		console.log(joke);
		//j'ajoute la contenu html suivant à ma balise #result
		document.querySelector('#result').innerHTML += `
		<div class="joke">
            <p class="jokeId">${joke.id}</p>
            <p class="jokeType">${joke.type}</p>
            <p class="jokeSetup">${joke.setup}</p>
            <p class="jokePunchline">${joke.punchline}</p>
        </div>
		`
	}

}
