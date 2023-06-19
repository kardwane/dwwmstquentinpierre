//variable
const formExo = document.forms.formExo;

//fonctions decorations
const fieldIsKo = (field) => {
	document.querySelector("#" + field).classList.remove("is-success");
	document.querySelector("#" + field).classList.remove("has-text-success");
	document.querySelector("#" + field).classList.add("is-danger");
	document.querySelector("#" + field).classList.add("has-text-danger");
};

const fieldIsOk = (field) => {
	document.querySelector("#" + field).classList.remove("is-danger");
	document.querySelector("#" + field).classList.remove("has-text-danger");
	document.querySelector("#" + field).classList.add("is-success");
	document.querySelector("#" + field).classList.add("has-text-success");
};

//fonction action
const dataValidate = (e) => {
	e.preventDefault();
	let isFormOk = true;

	//on recupere les données
	const data = {}; // objet vide
	const dataForm = new FormData(formExo); // on recupere les données
	dataForm.forEach((value, index) => {
		// on transfere les données dans l'objet data pour se simplifier la vie
		data[index] = value;
	});

	console.log(data);

	//name
	if (data.name === undefined || data.name === "" || data.name.length < 10) {
		fieldIsKo('name');
		isFormOk = false;
	} else {
		fieldIsOk('name')
	}

	//phone
	/*
	(?:(?:\+|00)33|0)     # Dialing code
    \s*[1-9]              # First number (from 1 to 9)
    (?:[\s.-]*\d{2}){4}   # End of the phone number
	*/

	if (
		data.phone.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/) === null
	) {
		fieldIsKo('phone');
		isFormOk = false;
	} else {
		fieldIsOk('phone')
	}

	//password
	if (
		data.password.match(
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
		) === false
	) {
		fieldIsKo('password');
		isFormOk = false;
	} else {
		fieldIsOk('password')
	}

	//password confirm
	if (data.password !== data.passwordConfirm) {
		fieldIsKo('passwordConfirm');
		isFormOk = false;
	} else {
		fieldIsOk('passwordConfirm')
	}

	//subject
	if (data.select !== "#") {
		fieldIsKo('select');
		isFormOk = false;
	} else {
		fieldIsOk('select')
	}

	//textarea
	if (data.textarea.length < 30) {
		fieldIsKo('textarea');
		isFormOk = false;
	} else {
		fieldIsOk('textarea')
	}

	//checkbox
	if (data.checkbox === undefined || data.checkbox !== "cguok") {
		fieldIsKo('checkbox');
		isFormOk = false;
	} else {
		fieldIsOk('checkbox')
	}

	//radio
	if (data.question === undefined || data.question !== "oui") {
		fieldIsKo('question');
		isFormOk = false;
	} else {
		fieldIsOk('question')
	}

	//validation finale
	if (isFormOk) formExo.submit();
};

//liaison event + action
formExo.addEventListener("submit", (e) => dataValidate(e));
