"use strict";
/**
 * la programmation orienté objet consiste à développer notre logique et nos fonctions à l'interieur d'objet, 
 * la plupart des langages demandent à passer par des class et des constructeurs, mais avec JS on peut créer nos objets 
 * directement. Ce qui ne rend pas les class inutiles au contraire, mais on verra leur utilité lors du prochain cours.
 * D'autant plus que cela vous sera utile de comprendre la programmation orienté objet si vous souhaiter pousser vos capacités de 
 * développeur plus loins.
 */  
const Person = {
    name: {
        prenom: "Maurice",
        nom: "DUPONT"
    },
    age: 54,
    // Jusqu'ici c'est un objet JS comme on en a déjà fait plusieurs.
    set setAge(a){
        /**
         * Les setters permettent de modifier une propriété d'un objet avant de l'enregistrer.
         * si je fais Person.age = "42", alors ma propriété age sera un string.
         * si je fais Person.setAge = "42", alors ma propriété age sera un nombre.
         * Je pourrais même retourner une erreur à l'utilisateur si j'obtient un NaN.
         */
        this.age = parseInt(a);
        /**
         * On notera l'utilisation de "this" pour indiquer que l'on fait appel à la propriété age de cet objet et pas d'un autre.
         * Dans notre cas ici, certes cela fonctionnerait de remplacer this.age par Person.age;
         * Mais si l'on change le nom de notre constante pour une raison ou une autre, il faudra le changer partout, alors qu'avec this, 
         * on n'a rien à changer.
         */
    },
    set nom(n){
        // avec Person.nom = "dubois"; j'enregistre dans Person.name.nom "DUBOIS"
        this.name.nom = n.toUpperCase();
    },
    set prenom(p){
        // Ici j'enregistre mon prénom avec une majuscule en première lettre et des minuscules pour le reste
        this.name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    },
    get fullname(){
        /**
         * les getters comme leur nom l'indique servent à récupérer une information 
         * ici si je fais un console.log(Person.fullname) je vais obtenir le prénom suivi du nom de famille séparé d'un espace.
         * ! On prendra note que même si ils ressemblent à des fonctions, on les utilises comme des propriétés. 
         * Certes rien ne nous empêche de lire ou changer une propriété directement avec son nom 
         *      Person.name.nom plutôt que Person.nom ou Person.age plutôt que Person.setAge 
         * Mais l'intérêt des getters et setter et de sauvegarder ou rendre une information après l'avoir retouché.
         */
        return this.name.prenom+" "+this.name.nom;
    },
    salutation: function(){
        /**
         * On peut évidement faire appel à des fonctions dans un objet, dans ce cas, on déclarera une propriété classique 
         * à laquelle on donnera une fonction anonyme ou fleché.
         * ? En POO on aura plus tendance à parler de Méthode d'un objet, plutôt que de fonction d'un objet.
         * ? Comme on ne parle pas de variable d'un objet mais de propriété.
         */
        console.log(`Bonjour, je suis ${this.fullname} et j'ai ${this.age} ans`);
    },
    anniversaire: function(){
        /**
         * Comme on peut faire appel à des propriétés d'un objet, on peut aussi faire appel à ses méthodes.
         */
        this.age++;
        this.salutation();
    }
}
/**
 * Chacun de mes objets ont les même méthodes et propriétés, seulement des valeurs différentes.
 * C'est comme ça que fonctionne la plupart des objets JS que l'on a utilisé jusqu'ici :
 *      console, htmlElement, Math, Promesse et j'en passe.
 */
export const Person2 = {
    name: {
        prenom: "Charli",
        nom: "Fontaine"
    },
    age: 34,
    set setAge(a){
        this.age = parseInt(a);
    },
    set nom(n){
        this.name.nom = n.toUpperCase();
    },
    set prenom(p){
        p = p.toLowerCase()
        p = p[0].toUpperCase() + p.slice(1);
        this.name.prenom = p;
    },
    get fullname(){
        return this.name.prenom+" "+this.name.nom;
    },
    salutation: function(){
        console.log(`Bonjour, je suis ${this.fullname} et j'ai ${this.age} ans`);
    },
    anniversaire: function(){
        this.age++;
        this.salutation();
    }
}
export default Person;
// Si on s'intéresse au JS un peu plus vieux, voir les fonctions constructeur, mais de nos jours on préfera les class.
