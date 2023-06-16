//je recupere mes elements HTML
//? en JS document.forms contient tout les formulaire de la page HTML, on peut recuperer un form via le chemin document.forms.name du form
const formDemo = document.forms.formDemo;

//une fois le form récuperer, on va lui associer une action sur l'evenement submit (envoi du form)
formDemo.addEventListener("submit", function (e) {
	//on va empecher le comportement par défaut, a savoir l'envoi du formulaire
	e.preventDefault();

	//a partir de la on va recupere coté JS, les données renseigné sur le HTML
	//?formData permet de recuperer tout les champs d'un formulaire
	const formData = new FormData(formDemo);
	console.log(formData);

	//verifier les champs

	//exemple avec le champs nom
	//? formData.get permet d'extraire une seule information de l'enssemble. cette méthode se base l'attribut name du champs
	const nom = formData.get("nom");
	const inputNom = document.querySelector("#nom");

	//je teste la longeur du nom
	if (nom.length > 4) {
		// au cas, si on valide plusieur le form et que l'état du champs change entre temps (et pour eviter de cumuler plusieurs fois la meme classe css)
		inputNom.classList.remove("input-rouge");
		inputNom.classList.add("input-vert");
		if (inputNom.parentNode.childNodes.length === 6) {
			inputNom.parentNode.childNodes[5].remove();
		}
	} else {
		inputNom.classList.add("input-rouge");
		inputNom.classList.remove("input-vert");
		//je regarde combien le parent de nom (ici un div)comporte d'enfant
		console.log(inputNom.parentNode.childNodes);
		//si j'ai 5 element, je créer un small avec un message d'information
		if (inputNom.parentNode.childNodes.length === 5) {
			const newSmall = document.createElement("small");
			newSmall.classList.add("color-rouge");
			newSmall.textContent = "Le nom doit faire au moins 5 caractères de long";
			//j'ajout le small dans la div parent
			inputNom.parentNode.appendChild(newSmall);
		}
	}

	//email
	const email = formData.get("email");
	const inputEmail = document.querySelector("#email");

	//? pour verifier un mail, un moyen pratique est d'utiliser les exepression reguliere aka regex
	if (
		email
			.toLowerCase() // je passe la saisie en minuscule
			.match(
				//je compare ma saisie à regex
				/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
			) !== null
	) {
        inputEmail.classList.remove("input-rouge");
		inputEmail.classList.add("input-vert");
	} else {
        inputEmail.classList.add("input-rouge");
		inputEmail.classList.remove("input-vert");
    }
});
