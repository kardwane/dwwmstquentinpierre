"use strict";
/**
 * Une classe est un modèle qui servira à la construction d'un objet.
 * Lorsque l'on voudra créer un nouvel objet, on appellera le nom de la classe précédé du mot clef
 * "new", certaines sont déjà intégré par défaut à JS:
 * new Date(); new FormData(); et plein d'autres.
 * Bien sûr on peut créer les notres.
 * Les conventions de développeur concernant les classes 
 * (rien ne vous oblige à les suivre mais c'est très souvent le cas) sont :
 *      Une classe par fichier, (on pourrait en avoir plusieurs ou même les intégrer à notre code principal)
 *      Le nom de la classe qui commence par une majuscule.
 *      Le nom du fichier qui porte le même nom que la classe. 
 */
// évidement on peut exporter une classe.
export default class Human{
    /**
     * Une propriété ou méthode static n'est appelable uniquement si la classe n'est pas instancié.
     */
    static categorie = "Mamifère"
    /**
     * Les propriétés d'un objet n'ont pas besoin de let var ou const.
     * Une propriété ou une méthode commençant par un "#" est dite "privée" (private)
     * Elle ne peut être appelé qu'à l'interieur de notre classe.
     */
    #name = {};
    #age;
    /**
     * Créer un nouvel humain.
     * @param {string} prenom 
     * @param {string} nom 
     * @param {number|string} age 
     */
    constructor(prenom, nom, age){
        this.#prenom = prenom;
        this.#nom = nom;
        this.#setAge = age;
        /**
         * Les propriétés privées doivent être déclaré en avance.
         * Mais les propriétés public peuvent être créé à la volée.
         */
        this.createdAt = new Date();
    }
    /**
     * En JS:
     * Les fonctions dans une classe ne prennent pas le mot clef function.
     * par contre on pourra trouver les mots clef static, set ou get.
     */
    static description(){
        // Cette méthode étant static, elle n'est appelable que si elle
        console.log("Un humain a générélament une tête, un buste, deux bras et deux jambes.");
    }
    /**
     * Les getters et les setters ressemblent à des fonctions mais leur utilisation est la même
     * que des attributs.
     * Ici on ne fera pas this.#prenom("Maurice"); mais this.#prenom = "maurice";
     */
    set #prenom(p){
        this.#name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    }
    set #nom(n){
        console.log(n);
        this.#name.nom = n.toUpperCase();
    }
    set #setAge(a){
        this.#age = parseInt(a);
    }
    get fullname(){
        return this.#name.prenom+" "+this.#name.nom;
    }
    get age(){
        return this.#age+" ans";
    }
    salutation(){
        console.log(`Bonjour, je suis ${this.fullname} et j'ai ${this.age}`);
    }
    anniversaire(){
        this.#age++;
        this.salutation();
    }
}