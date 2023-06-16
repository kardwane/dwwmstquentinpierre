let isFormOk = true; // flag d'envoi ou non

const setTxtFieldToOk = (field) => {
	field.classList.remove("is-danger");
	field.classList.add("is-success");

	field.parentNode.innerHTML +=
		'<span class="icon is-small is-right"><i class="fas fa-check"></i></span>';
	console.log(field, "ok");
};

const setTxtFieldToKo = (field) => {
	field.classList.remove("is-success");
	field.classList.add("is-danger");

	if (field.parentNode.childNodes[5] === undefined) {
		//icone
		const newI = document.createElement("i");
		newI.classList.add("fas", "fa-exclamation-triangle");
		const newSpan = document.createElement("span");
		newSpan.classList.add("icon", "is-small", "is-right");
		newSpan.appendChild(newI);
		field.parentNode.appendChild(newSpan);

		//texte d'information utilisateur
		badFill(field);
	}

	isFormOk = false;
	console.log(field, "ko");
};

const setFieldToOk = (field) => {
	field.classList.remove("is-danger");
	field.classList.add("is-success");
	console.log(field, "ok");
};

const setFieldToKo = (field) => {
	field.classList.remove("is-success");
	field.classList.add("is-danger");
	isFormOk = false;

	console.log(field.parentNode.childNodes);

	if (field.parentNode.childNodes[3] === undefined || field.value !== "cguok") {
		badFill(field);
	}

	console.log(field, "ko");
};

const badFill = (field) => {
	//texte d'information utilisateur
	const newSmall = document.createElement("small");
	newSmall.textContent = "Ce champs est mal renseigné";
	newSmall.classList.add("has-text-danger");
	const newDiv = document.createElement("div");
	newDiv.appendChild(newSmall);
	field.parentNode.appendChild(newDiv);
};

//on ecoute les évenement de la page
document.querySelector("button[type=reset]").addEventListener("click", (e) => {
	window.location.reload();
});

document.querySelector("#submitBtn").addEventListener("click", (e) => {
	//empeche le traitement normal du formulaire (empeche l'envoi direct pour premettre de faire nos propres verif)
	e.preventDefault();
	isFormOk = true;

	const form = document.forms.exampleForm;
	const formData = new FormData(form); // recupere les données du formulaire
	console.log(formData);

	const name = formData.get("name"); // get permet d'extraire une valeur particuliere des données du formulaire
	//verification du nom
	name.length >= 3
		? setTxtFieldToOk(document.querySelector("#name"))
		: setTxtFieldToKo(document.querySelector("#name"));

	formData
		.get("email") // récupere le mail
		.indexOf("@") !== -1 // test si le @ est présent
		? setTxtFieldToOk(document.querySelector("#email"))
		: setTxtFieldToKo(document.querySelector("#email"));

	formData.get("select") !== "#"
		? setFieldToOk(document.querySelector("#select"))
		: setFieldToKo(document.querySelector("#select"));

	const textarea = formData.get("textarea");
	textarea.length >= 10
		? setFieldToOk(document.querySelector("#textarea"))
		: setFieldToKo(document.querySelector("#textarea"));

	formData.get("checkbox") === "cguok"
		? setFieldToOk(document.querySelector("#checkbox"))
		: setFieldToKo(document.querySelector("#checkbox"));

	formData.get("question") === "on"
		? setFieldToOk(document.querySelector("#question"))
		: setFieldToKo(document.querySelector("#question"));

	console.log(isFormOk);

	if (isFormOk) {
		form.submit();
	}
});
