//! ====================== EX 1 =======================
// * réaliser un paragraphe qui affiche un message en console quand on lui clique dessus

// // je recupere ma balise p#ex=1
// const ex1 = document.querySelector("#ex1");

// //je lui associe une action sur le click
// ex1.addEventListener('click',function(){
//     console.log("action en console");
// })

//? addEventListener permet de cumuler plusieur actions sur le même evenement

// document.querySelector('#ex1').addEventListener('click',function(){
//     console.log("action en console");
// })

//? on peut cibler directement le click en passant /!\ on ne peut pas cumuler plusieurs action avec le onclick
// ex1.onclick = function () {
document.querySelector("#ex1").onclick = function () {
	console.log("action en console");
};


//! ====================== EX 2 =======================
//*réaliser un bouton qui créer un paragraphe et l'insert dans la div #result