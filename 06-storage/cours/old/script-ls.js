//? en JS il existe 2 maniere d'utiliser le navigatuer pour y stocker des informations, on a le sessionStorage, qui permet de stocker des info tant que la session du navigateur est ouverte (tant qu'il n'est fermé par l'utilisateur).
//? et il existe aussi le localStorage qui lui fonctionne un peu comme des cookie, dans le sens ou les info sont stockés dans le navigateur tant qu'on ne vide l'historique/cache navigateur

// ici on va stocker les info du formulaire dans un sessionStorage
let tasks;

//? le sessionStorage ne stock que pour l'onglet en cours

//je recupere mon form
const storageForm = document.forms.storage;

//je recupere la liste
const list = document.querySelector("#list");

//on va agir sur le submit du form
storageForm.addEventListener("submit", function (e) {
	//j'empeche l'envoi des données pour faire mon propre traitement avant l'envoi
	e.preventDefault();
	// je recupere les donnée
	const formData = new FormData(storageForm);
	const tache = formData.get("tache");

	//permet d'enregistrer une donnée dans la sessions courante, la donnée s'appelera titre, et sa valeur sera defini par le formulaire

	//je stock dans mes tache un nouveau tableau contenant les data actuelle + la nouvelle tache créer par le formulaire
	if (tasks !== undefined) {
        tasks.push(tache);
		localStorage.setItem("tasks", tasks.join(","));
	} else {
		localStorage.setItem("tasks", tache);
	}
});

//au chargement de la page, je verifie si des info exsite
//je verifie si j'ai des données deja stocké en session
if (localStorage.getItem("tasks") !== null) {
	//si oui, je les recupere
	tasks = localStorage.getItem("tasks").split(",");
	//pour les afficher
    tasks.forEach(function(task){
        list.textContent +=  task+'-';
    })
}

// //? si vous souhaitez supprimer une info de votre storage, vous pouvez utiliser la méthode removeItem livrée avec cotre storage
// localStorage.removeItem('titre')
// localStorage.removeItem('description')
// localStorage.removeItem('tache')
