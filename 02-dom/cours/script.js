//? en js on peut récuperer n'importe balise de notre page web dans un premier il faut pouvoir cibler l'element a recuperer, les selecteurs de balises en JS fonctionne sur le même principe que les selecteurs CSS, pour cibler un element en particulier sur notre page, on peux utiliser la methode querySelector

// recuperation du bouton "alert"
const alertBtn = document.querySelector('#alertBtn');

console.log(alertBtn);

//?getElementById permet aussi de récuperer une balise HTML mais uniquement en ciblant sur son id, il existe d'autre methode pour pouvoir cibler des selecteurs particulier (name, class, etc...)
// const alertBtn = document.getElementById('alert');
// const alertBtn = document.getElementsByClassName('alert');
// const alertBtn = document.getElementsByName('alert');
// const alertBtn = document.getElementsByTagNameNS('alert');
// const alertBtn = document.getElementsByTagName('alert');

//? pour associer une action a ma balise HTML, je peux utiliser la methode addEventListener(evenement, action)
alertBtn.addEventListener('click', function (){
    //code de l'action a executer lorsqu'on clique sur le bouton
    alert('Action')
})
