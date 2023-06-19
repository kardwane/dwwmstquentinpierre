//je recupere le formulaire
const formulaire = document.forms.formulaire;

//je créer mes fonctions decoration
//j'ajoute une deco verte si le champs est bien rempli
const champOk = (champ) => {
	document.querySelector("#" + champ).classList.remove("bord-rouge");
	document.querySelector("#" + champ).classList.remove("txt-rouge");
	document.querySelector("#" + champ).classList.add("bord-vert");
	document.querySelector("#" + champ).classList.add("txt-vert");
};

//j'ajoute une deco rouge si le champs est mal rempli
const champKo = (champ) => {
	document.querySelector("#" + champ).classList.remove("bord-vert");
	document.querySelector("#" + champ).classList.remove("txt-vert");
	document.querySelector("#" + champ).classList.add("bord-rouge");
	document.querySelector("#" + champ).classList.add("txt-rouge");
};

//je créer ma fonction de vérification
function formValid(e) {
	// j'empeche l'envoi du form
	e.preventDefault();

	let isFormOk = true; // je créer un flag pour savoir si le form est valide ou non

	//je recupere les données du formulaire
	const data = {}; // je créer un objet JS vide
	const formData = new FormData(formulaire); // je range toutes les données du formulaire dans une variable formData
	//je boucle sur les données pour remplir mon objet JS
	formData.forEach(function (valeur, index) {
		data[index] = valeur;
	});

	console.log(data);

	//je vérification des données du formulaire
	// en notation objet l'appel a un champ se fait par la syntaxe objet.propriété, par exemple pour acceder au nom de mon objet data, j'utilise data.nom
	if (data.nom.length >= 3 && data.nom.length <= 50) {
		//si ma verification réussi
		champOk("nom");
	} else {
		//si ma verification échoue
		champKo("nom");
		isFormOk = false;
	}

	//tel
	//je verifier si il contient 0 ou +33, puis 1 chiffre compris entre 1 et 9 et 4 fois 2 chiffres eux aussi compris entre 0 et 9
	/*
	(?:(?:\+|00)33|0)     # Dialing code
    \s*[1-9]              # First number (from 1 to 9)
    (?:[\s.-]*\d{2}){4}   # End of the phone number
	*/
	if (
		data.tel.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/) === null
	) {
		//si ma verification réussi
		champOk("tel");
	} else {
		//si ma verification échoue
		champKo("tel");
		isFormOk = false;
	}

	//mdp
	// ici le mdp doit contenir au moins 1 minuscule, 1 majuscule, 1 chiffre, 1 caractere spéciale et faire 8 caracteres de long
	/*
    (?=.*?[A-Z]) : au moins 1 majuscule
    (?=.*?[a-z]) : au moins 1 minuscule
    (?=.*?[0-9]) : au moins 1 chiffre
    (?=.*?[#?!@$%^&*-]) : au moins 1 caractere spéciale parmis ceux entre []
    .{8,} : longueur de 8 minimum
    */
	if (
		data.mdp.match(
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
		) !== null
	) {
		//si ma verification réussi
		champOk("mdp");
	} else {
		//si ma verification échoue
		champKo("mdp");
		isFormOk = false;
	}

	//pour la confirmation, je vais juste vérifier qu'il soit égale au mdp initiale
	if (data.mdpConfirm === data.mdp) {
		//si ma verification réussi
		champOk("mdpConfirm");
	} else {
		//si ma verification échoue
		champKo("mdpConfirm");
		isFormOk = false;
	}

	//pour le select, je vais juste vérifier qu'il ai une valeur !== vide
	if (data.civilite !== "") {
		//si ma verification réussi
		champOk("civilite");
	} else {
		//si ma verification échoue
		champKo("civilite");
		isFormOk = false;
	}

	//le commentaire doit faire 25 caractères de long minimum
	if (data.commentaire.length >= 25) {
		//si ma verification réussi
		champOk("commentaire");
	} else {
		//si ma verification échoue
		champKo("commentaire");
		isFormOk = false;
	}

	//une des deux boutons radio doit être activer
	if (data.radio === "oui") {
		//si ma verification réussi
		champOk("lblRadio");
	} else {
		//si ma verification échoue
		champKo("lblRadio");
		isFormOk = false;
	}

    // la checkbox doit etre coché pour avoir la valeur cguok
	if (data.accord === "cguok") {
		//si ma verification réussi
		champOk("lblAccord");
	} else {
		//si ma verification échoue
		champKo("lblAccord");
		isFormOk = false;
	}

	//je verifie si peux faire l'envoi ou non du formulaire
	if (isFormOk) formulaire.submit();
	//     if (isFormOk === true){
	//    // jenvoie le form
	//         formulaire.submit();
	//     }
}

// j'associe mon action a l'event submit du formulaire
formulaire.addEventListener("submit", (event) => formValid(event));
