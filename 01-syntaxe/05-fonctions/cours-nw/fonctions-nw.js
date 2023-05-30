"use strict";
/* pour déclarer une fonction, 
j'utilise le mot clef "function" 
suivi de parenthèse qui accueillerons les possibles arguments
Et ensuite des accolades qui contiendrons la logique de ma fonction. */
salut(); // j'appel la fonction salut
// salut1();
// salut2();
// salut3();    
// s.salut();
function salut(){
    console.log("Bonsoir tout le monde !")
}
/* Pour appeler une fonction, il me suffit de taper son nom suivi de parenthèses 
Les opérations d'une fonction, ne sont effectué qu'une fois appelé, si on ne
l'appelle pas, alors ce qu'elle contient ne s'effectuera jamais.*/
salut();
// Il existe d'autres façons de déclarer une fonction.
const salut2 = function(){
    /* on peut ranger une fonction dans une variable, son nom sera alors celui
    de la variable, on ne met pas de nom après le mot function */
    console.log("Salut tout le monde !");
}
salut2();
// Ici on utilise une fonction fléché.
const salut3 = ()=>{
    console.log("Coucou tout le monde !");
}
salut3();
// Je peux aussi avoir des fonctions rangé dans des objets
const s = {
    salut: ()=>console.log("Salutation tout le monde")
};
s.salut();
// On peut aussi ranger des fonctions dans un tableau, même si c'est peu utilisé
let arr = [function(){console.log("test")}]
arr[0]()

function bonsoir(nom1) {
    if(nom1 == undefined){
        // Afficher un message d'erreur dans la console
        console.error("Donne moi un fichu argument !");
    }
    console.log("Bonsoir "+nom1);
}
/* JS accepte d'appeler une fonction qui attend des arguments, même sans lui en donner
Les arguments seront alors undefined*/
bonsoir();
// La fonction attendant un argument, on se doit de lui en donner un.
bonsoir("Elisabeth");
// Chaque nouvel argument doit être séparé d'une virgule.
/* si on donne plus d'argument que demandé, alors JS va juste ignorer les arguments
supplémentaires. */
bonsoir("Charlie", "Maurice");

function bonneNuit(nom1, nom2){
    /* bonus console log : ajouter %c devant le premier argument et du css en second
    argument */
    console.log("%cBonne nuit "+nom1+" et " + nom2, "color: blue; font-size:4rem;");
}
/* Si une fonction attend plusieurs arguments, alors lors de l'appel, il faudra
lui donner plusieurs arguments séparés d'une virgule.
La première valeur donné ira dans le premier argument, la seconde valeur
dans le second et ainsi de suite. */
bonneNuit("Patrick", "Raphael");

function goodBye(nom1, nom2="les autres"){
    /* Il est possible de donner des valeurs par défaut à nos paramètres
    dans ce cas, si on lui donne une valeur, alors il prendra cette valeur, 
    mais si on ne lui donne rien, alors il prendra sa valeur par défaut.*/
    console.log("Good bye "+nom1 +" et "+ nom2);
}
// Affiche Kevin et les autres.
goodBye("Kevin");
// Affiche Kevin et Alan.
goodBye("Kevin", "Alan");

function goodMorning(...noms){
    /* Le rest operator (...argument) permet de ranger tous les arguments donné
    dans un tableau. */
    // toString transforme un tableau en string en séparant les valeurs par des virgules
    console.log("Good morning " +noms.toString());
    // join fera de même en séparant les valeurs par le string donné en argument
    console.log("Good morning " +noms.join(" et "));
}
goodMorning("Antoine", "Jean", "Charle", "Louis");

function goodEvening(nom1, nom2, ...noms){
    console.log("Good Evening " + nom1 + ", " + nom2 + " et " +noms.toString() );
}
goodEvening("Pierre", "Paul", "Jacque", "Karl");

// --------------- Retour sur forEach et fonction callback -----------------
let pr = ["Alice", "Ariel", "Mulan", "Belle"];

/* certaines fonctions, comme forEach, prennent en argument une autre fonction.
Par exemple forEach appelle la fonction donné en argument, pour chaque élément 
du tableau. */
pr.forEach(bonsoir);
/* On appelle cela une fonction callback
Cela peut être une fonction déclaré précédement, comme une fonction directement 
écrite entre les parenthèses de forEach, on parle alors de fonction anonyme */
pr.forEach(function(princesse){
    console.log("Bienvenue "+princesse);
})
// On peut réduire une fonction anonyme à une fonction fléché
pr.forEach((princesse)=>{
    console.log("Bienvenue "+princesse);
})
// Si on a un seul argument, alors on peut même retirer les parenthèses
pr.forEach(princesse=>{
    console.log("Bienvenue "+princesse);
})
// Si on a une seule instruction dans notre fonction, on peut retirer les accolades.
pr.forEach(princesse=>console.log("Bienvenue "+princesse));

function compliment(salutation, nom){
    // Ici ma fonction compliment prend en premier argument une fonction.
    // on utilise le premier argument comme une fonction.
    salutation(nom+" le magnifique");
}
// ! Attention, quand on donne une fonction en callback, on lui donne juste le nom.
// ! pas de parenthèse
compliment(bonsoir, "Greg");
compliment(nom=>console.log("Guttentag "+ nom), "Hanz");

//--------------- Mettre fin à une fonction, renvoyer une information -------------

function insulte(nom){
    if(nom == undefined){
        console.error("Donne moi un nom !");
        // On peut ne rien donner à retourner pour simplement mettre fin à la fonction.
        return;
    }
    // Le mot clef return met fin à la fonction et renvoi ce qui lui est donné.
    return nom + " le poltron";
    // Cela ne s'affiche logiquement pas.
    console.log("COUCOU TOUT LE MONDE !")
}
// si j'appelle la fonction sans console.log, je ne verrai rien.
console.log(insulte("Bob"));
// Par contre je peux la donner à un console.log ou a une variable pour récupérer l'information
let z = insulte("Bruce");
console.log(z);
// Si le return est vide, alors on obtiendra un undefined
console.log(insulte());
// Notre fonction bonsoir ne retourne aucune information, donc elle affichera undefined.
console.log(bonsoir("Bil"));